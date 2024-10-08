import { useEffect, useState } from "react";
import { Dropdown } from "../../../entities/Dropdown";
import { ItemSizeChart } from "../../../features/ItemSizeChart";
import { CacheProduct, HistoryLegendOption, Product } from "../../../shared/lib";
import { IconName, PageWrapper } from "../../../shared/ui";
import { HistoryLegend } from "../../../entities/HistoryLegend";
import { useNavigate, useParams } from "react-router-dom";
import { Routes } from "../../../shared/routes";
import { Button } from "../../../shared/ui/Button/ui/Button.ui";
import { ButtonType } from "../../../shared/ui/Button";

import { Api } from "../../../shared/api/Api";
import { NotFound } from "../../../entities/NotFound";

import cn from "./ItemPage.module.scss";
import { CardCache } from "../../../entities/Store/stores/Cache";
import { observer } from "mobx-react-lite";
import { useStore } from "../../../entities/Store";
import { ItemPreview } from "../../../features/ItemPreview";
import { useBoolean } from "usehooks-ts";
import { OneClickModal } from "../../../features/OneClickModal";
import toast, { Toaster } from "react-hot-toast";
import { convertNumberToSum } from '../../../shared/lib'
import { Socials } from "../../../entities/Socials";

export const ItemPage = observer(() => {
  const { MainStore: { updateCardCount, cardCount } } = useStore()
  const { productId } = useParams();

  const navigate = useNavigate()
  const [product, setProduct] = useState<Product>()
  const { value: isLoading, setFalse: stopLoading, setTrue: startLoading } = useBoolean(true)

  const categoryLink = `${Routes.Category}/${product?.category_name}.${product?.category_id}`

  const LEGEND: HistoryLegendOption[] = [
    {
      title: "Главная",
      redirectTo: Routes.Main,
    },
    {
      title: product?.category_name ?? "Категория",
      redirectTo: categoryLink,
    },
    {
      title: product?.name ?? "Вещь",
      isCurrent: true,
    },
  ];

  const [activeSize, setActiveSize] = useState<string>(
    ''
  );
  const { value: isModalOpen, setTrue: openModal, setFalse: closeModal } = useBoolean()

  useEffect(() => {
    if (!productId) return

    Api.getProduct(productId).then(product => {
      setProduct(product)
    }).finally(() => {
      stopLoading()
    })
  }, [navigate, productId, startLoading, stopLoading]);

  if (!product) return <NotFound isLoading={isLoading} />

  const isHaveSize = Boolean(product.sizes.length)
  const isAddToCardButtonDisabled = (isHaveSize && activeSize === '') || !product

  const onAddToCard = () => {
    if (isAddToCardButtonDisabled) {
      return toast.error('Выберите размер')
    }

    let newItems: CacheProduct[] = []

    const oldItems = CardCache.getItems()
    const newItem: CacheProduct = {
      size: activeSize,
      name: product.name,
      brand: product.brand,
      id: product.id,
      image: product.images[0],
      price: product.min_price
    }

    if (oldItems) newItems = [...oldItems]

    newItems.push(newItem)

    toast.success('Продукт добавлен в корзину')
    const newCount = cardCount ? cardCount + 1 : 1
    updateCardCount(newCount)
    CardCache.setItem(newItems)
  }
  const productsImage = product.images

  return (
    <>
      <Toaster />
      <OneClickModal product={product} isOpen={isModalOpen} closeModal={closeModal} />

      <PageWrapper className={cn.wrapper}>
        <div className={cn.firstSection}>
          <HistoryLegend options={LEGEND} />
          <div className={cn.itemImages}>
            <ItemPreview
              images={productsImage}
              activeImage={productsImage[0]} />
          </div>
        </div>
        <div className={cn.secondSection}>
          <div className={cn.name}>
            <span className={cn.brand} onClick={() => navigate(categoryLink)}>{product.category_name}</span>
            <span className={cn.model}>{product.name}</span>
            {
              product.article_number && (
                <span className={cn.article}>Артикул: {product.article_number}</span>
              )
            }
          </div>

          <span className={cn.price}>От {convertNumberToSum(product.min_price)}</span>
          {
            isHaveSize && (
              <ItemSizeChart
                onChangeActive={setActiveSize}
                sizes={product.sizes}
                activeSize={activeSize}
              />
            )
          }

          <div className={cn.socials}>
            <Socials notRenderInst isBlack productArticle={product.article_number} productActiveSize={activeSize || undefined} />

            <span className={cn.text}>
              Для уточнения цены, наличия и сроков доставки, свяжитесь с менеджером в удобном вам мессенджере, либо оформите покупку на сайте
            </span>
          </div>

          <div className={cn.buttons}>
            <Button onClick={onAddToCard} text="Добавить в корзину" />
            <Button
              onClick={openModal}
              type={ButtonType.Dark}
              icon={IconName.ShoppingCardWhite}
              text="Купить в 1 клик"
            />
          </div>

          <span className={cn.description}>
            Товар доступен под заказ. Средний срок доставки: от 5 до 15 дней.
            <br />
            Все налоги и таможенные сборы включены. Стоимость доставки
            рассчитывается менеджером на этапе оформления заказа.
          </span>
          <div className={cn.dropdowns}>
            <Dropdown
              icon={IconName.BestPrice}
              title={"Гарантия лучшей цены"}
              content={
                "Если вы нашли данную модель где-либо в наличии по более низкой цене — пришлите нам ссылку на данную модель в другом магазине. Мы будем рады предложить вам скидку, компенсирующую разницу в стоимости, и лучшую цену относительно конкурентов. Обратите внимание, что акция распространяется только на российские платформы."
              }
            />
            <Dropdown
              icon={IconName.Delivery}
              title={"Условия доставки и оплаты"}
              content={
                "Доставка по Москве и Московской Области осуществляется до двери курьером магазина / курьером транспортных компаний в зависимости от вашего местоположения. Также доставка осуществляется транспортной компанией СДЭК / Почта России. Подробнее об условиях доставки можно узнать на этой странице. Оплата Мы принимаем платежи наличными или переводом по указанным реквизитам. Все платежи осуществляются путем выставления счета на электронную почту после завершения заказа. Оплата банковской картой будет доступна позже."
              }
            />
            <Dropdown
              withSeparator={false}
              icon={IconName.Refund}
              title={"Обмен и возврат"}
              content={`Вы можете обменять товар, купленный в нашем магазине, при соблюдении следующих условий:
С момента получения товара и на момент его обмена прошло не более 14 календарных дней;
Товар не был в употреблении (стиран, ношен);
Фабричные ярлыки, в том числе КИЗ (контрольно-идентификационный знак) на товаре или его упаковке (в зависимости от того, что применимо) должны быть целыми, не мятыми и не повреждёнными. Сохранены его товарный вид, потребительские свойства;`}
            />
          </div>
        </div>
      </PageWrapper>
    </>
  );
});
