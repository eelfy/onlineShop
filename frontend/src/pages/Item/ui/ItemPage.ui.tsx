import { useState } from "react"
import { Dropdown } from "../../../entities/Dropdown"
import { ItemSizeChart } from "../../../features/ItemSizeChart"
import { HistoryLegendOption, ItemSizeOption } from "../../../shared/lib"
import { IconName } from "../../../shared/ui"
import { HistoryLegend } from "../../../entities/HistoryLegend"
import { useParams } from "react-router-dom"
import { Routes } from "../../../shared/routes"
import { Button } from "../../../shared/ui/Button/ui/Button.ui"
import { ButtonType } from "../../../shared/ui/Button"
import { Input } from "../../../shared/ui/Input"
import { Radio, RadioOption } from "../../../shared/ui/Radio"
import { OneClickModal } from "../../../features/OneClickModal"

const SIZES: ItemSizeOption[] = [
  { size: 'US 5', price: 'price', id: 1 },
  { size: 'US 5', price: 'price', id: 2 },
  { size: 'US 5', price: 'price', id: 3 },
  { size: 'US 5', price: 'price', id: 4 },
  { size: 'US 5', price: 'price', id: 5 },
  { size: 'US 5', price: 'price', id: 6 },
  { size: 'US 5', price: 'price', id: 7 },
  { size: 'US 5', price: 'price', id: 8 },
  { size: 'US 5', price: 'price', id: 9 },
  { size: 'US 5', price: 'price', id: 10 },
  { size: 'US 5', price: 'price', id: 11 },
  { size: 'US 5', price: 'price', id: 12 },
]

const RADIOS: RadioOption[] = [
  {
    label: 'label',
    id: 1
  },
  {
    label: 'label2',
    id: 2
  },
  {
    label: 'label3',
    id: 3
  }
]

export const ItemPage = () => {
  const { brandName, itemName } = useParams()

  const LEGEND: HistoryLegendOption[] = [{
    title: 'Главная',
    redirectTo: Routes.Main,
  }, {
    title: brandName ?? 'Бренд',
    redirectTo: `${Routes.Brand}/${brandName}`
  }, {
    title: itemName ?? 'Вещь',
    isCurrent: true
  }]

  const [activeSize, setActiveSize] = useState<ItemSizeOption['id'] | null>(null);
  const [activeRadio, setActiveRadio] = useState<RadioOption['id'] | null>(null);
  const [value, setValue] = useState('');

  return <div>

    <OneClickModal isOpen closeModal={() => console.log()} />
  </div>
}


/**
 * 
 *  <Radio name="name" checked={activeRadio} onChangeChecked={setActiveRadio} radios={RADIOS} />

    <Input value={value} onChange={setValue} label="Имя" />
    <Button onClick={() => console.log()} text="Добавить в корзину" />
    <Button onClick={() => console.log()} type={ButtonType.Dark} icon={IconName.ShoppingCardWhite} text="Купить в 1 клик" />

    <HistoryLegend options={LEGEND} />
    <Dropdown icon={IconName.Delivery} title={"Условия доставки и оплаты"} content={"Доставка по Москве и Московской Области осуществляется до двери курьером магазина / курьером транспортных компаний в зависимости от вашего местоположения. Также доставка осуществляется транспортной компанией СДЭК / Почта России. Подробнее об условиях доставки можно узнать на этой странице. Оплата Мы принимаем платежи наличными или переводом по указанным реквизитам. Все платежи осуществляются путем выставления счета на электронную почту после завершения заказа. Оплата банковской картой будет доступна позже."} />

    <ItemSizeChart onChangeActive={setActiveSize} sizes={SIZES} activeSize={activeSize} />
 */