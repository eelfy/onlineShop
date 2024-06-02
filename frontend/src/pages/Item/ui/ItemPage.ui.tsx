import { useState } from "react";
import { Dropdown } from "../../../entities/Dropdown";
import { ItemSizeChart } from "../../../features/ItemSizeChart";
import { HistoryLegendOption, ItemSizeOption, noop } from "../../../shared/lib";
import { IconName } from "../../../shared/ui";
import { HistoryLegend } from "../../../entities/HistoryLegend";
import { useParams } from "react-router-dom";
import { Routes } from "../../../shared/routes";
import { Button } from "../../../shared/ui/Button/ui/Button.ui";
import { ButtonType } from "../../../shared/ui/Button";
import { Input } from "../../../shared/ui/Input";
import { Radio, RadioOption } from "../../../shared/ui/Radio";
import { OneClickModal } from "../../../features/OneClickModal";

import cn from "./ItemPage.module.scss";
import { ProductCarousel } from "../../../features/ProductCarousel";

const SIZES: ItemSizeOption[] = [
  { size: "US 5", price: "price", id: 1 },
  { size: "US 5", price: "price", id: 2 },
  { size: "US 5", price: "price", id: 3 },
  { size: "US 5", price: "price", id: 4 },
  { size: "US 5", price: "price", id: 5 },
  { size: "US 5", price: "price", id: 6 },
  { size: "US 5", price: "price", id: 7 },
  { size: "US 5", price: "price", id: 8 },
  { size: "US 5", price: "price", id: 9 },
  { size: "US 5", price: "price", id: 10 },
  { size: "US 5", price: "price", id: 11 },
  { size: "US 5", price: "price", id: 12 },
];

const RADIOS: RadioOption[] = [
  {
    label: "label",
    id: 1,
  },
  {
    label: "label2",
    id: 2,
  },
  {
    label: "label3",
    id: 3,
  },
];

export const ItemPage = () => {
  const { brandName, itemName } = useParams();

  const LEGEND: HistoryLegendOption[] = [
    {
      title: "Главная",
      redirectTo: Routes.Main,
    },
    {
      title: brandName ?? "Бренд",
      redirectTo: `${Routes.Brand}/${brandName}`,
    },
    {
      title: itemName ?? "Вещь",
      isCurrent: true,
    },
  ];

  const [activeSize, setActiveSize] = useState<ItemSizeOption["id"] | null>(
    null
  );
  const [activeRadio, setActiveRadio] = useState<RadioOption["id"] | null>(
    null
  );
  const [value, setValue] = useState("");

  return (
    <div className={cn.wrapper}>
      <div className={cn.firstSection}>
        <HistoryLegend options={LEGEND} />
        <div className={cn.carousel}>{/* <ProductCarousel /> */}</div>
      </div>
      <div className={cn.secondSection}>
        <div className={cn.name}>
          <span className={cn.brand}>nike</span>
          <span className={cn.model}>Dunk Low WMNS "UNLV Satin"</span>
        </div>

        <span className={cn.price}>От 23.000 ₽</span>

        <ItemSizeChart
          onChangeActive={setActiveSize}
          sizes={SIZES}
          activeSize={activeSize}
        />

        <div className={cn.buttons}>
          <Button onClick={() => console.log()} text="Добавить в корзину" />
          <Button
            onClick={() => console.log()}
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
            icon={IconName.Refund}
            title={"Обмен и возврат"}
            content={`Вы можете обменять товар, купленный в нашем магазине, при соблюдении следующих условий:
С момента получения товара и на момент его обмена прошло не более 14 календарных дней;
Товар не был в употреблении (стиран, ношен);
Фабричные ярлыки, в том числе КИЗ (контрольно-идентификационный знак) на товаре или его упаковке (в зависимости от того, что применимо) должны быть целыми, не мятыми и не повреждёнными. Сохранены его товарный вид, потребительские свойства;`}
          />
        </div>
      </div>
    </div>
  );
};

/**
 * <OneClickModal isOpen closeModal={noop} />
 *  <Radio name="name" checked={activeRadio} onChangeChecked={setActiveRadio} radios={RADIOS} />

    <Input value={value} onChange={setValue} label="Имя" />
   
    

    
 */
