import { StuffBlock, StuffBlockSize } from '../../../features/StuffBlock'
import { noop } from '../../../shared/lib'
import { Button } from '../../../shared/ui/Button'
import { Input } from '../../../shared/ui/Input'
import { Radio } from '../../../shared/ui/Radio'
import cn from './BagPage.module.scss'

export const BagPage = () => {
  return <div className={cn.wrapper}>
    <h2 className={cn.title}>Корзина</h2>
    <div className={cn.bag}>
      <div className={cn.form}>
        <Input value='' onChange={noop} label='Имя' />
        <Input value='' onChange={noop} label='Номер телефона' />
        <Input value='' onChange={noop} label='E-mail' />

        <div>
          <span>Как с вами связаться?</span>
          <Radio radios={[{
            label: "WhatsApp",
            id: 1,
          }, {
            label: "Telegram",
            id: 2
          },]} checked={1} name={'contact'} onChangeChecked={noop} />
        </div>

        <Radio radios={[{
          label: "Я даю согласие на обработку персональных данных",
          id: 1,
        }, {
          label: "Я ознакомлен и согласен с условиями оферты и политики конфиденциальности",
          id: 2
        },]} checked={1} name={'rules'} onChangeChecked={noop} />

        <Button text='Свяжитесь со мной' onClick={noop} />
      </div>

      <div className={cn.separator}></div>

      <div className={cn.lastPart}>
        <div className={cn.products}>
          <StuffBlock name={'Nike'} description={'Dunk Low WMNS "UNLV Satin'} price={'23.000'} size={StuffBlockSize.L} stuffSize='US 10.5' withDivider />
          <StuffBlock name={'Nike'} description={'Dunk Low WMNS "UNLV Satin'} price={'23.000'} size={StuffBlockSize.L} stuffSize='US 10.5' />
        </div>

        <div className={cn.info}>
          <div className={cn.field}>
            <span>Промежуточный итог</span>
            <span>от 46 000,00 ₽</span>
          </div>
          <div className={cn.field}>
            <span>Доставка</span>
            <span>Рассчитывается в чате с менеджером</span>
          </div>
          <div className={cn.field}>
            <span className={cn.bold}>Итого</span>
            <span className={cn.bold}>от 46 000,00 ₽</span>
          </div>
        </div>
      </div>
    </div>
  </div>
}