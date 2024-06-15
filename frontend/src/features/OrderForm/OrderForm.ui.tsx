import { Button } from '../../shared/ui/Button'
import { CheckboxOption } from '../../shared/ui/Checkbox/Checkbox.types'
import { Checkbox } from '../../shared/ui/Checkbox/Checkbox.ui'
import { Input } from '../../shared/ui/Input'
import { Radio, RadioOption } from '../../shared/ui/Radio'

import cn from './OrderForm.module.scss'

interface OrderFormProps {
  name: string
  number: string
  email: string
  setName: (value: string) => void
  setNumber: (value: string) => void
  setEmail: (value: string) => void
  social: RadioOption['id'] | undefined
  setSocial: (value: OrderFormProps['social']) => void
  rules: CheckboxOption['id'][]
  setRules: (value: OrderFormProps['rules']) => void
  showButton?: boolean
  isDisabled: boolean
  onMakeOrder: () => void
}

export const OrderForm = ({
  name,
  number,
  email,
  setName,
  setNumber,
  setEmail,
  social,
  setSocial,
  rules,
  setRules,
  showButton = true,
  isDisabled,
  onMakeOrder
}: OrderFormProps) => {
  return <div className={cn.form}>
    <Input value={name} onChange={setName} label='Имя' />
    <Input maxLength={11} value={number} onChange={setNumber} label='Номер телефона' />
    <Input value={email} onChange={setEmail} label='E-mail' />

    <div>
      <span>Как с вами связаться?</span>
      <Radio radios={[{
        label: "WhatsApp",
        id: 1,
      }, {
        label: "Telegram",
        id: 2
      },]} checked={social} name={'contact'} onChangeChecked={setSocial} />
    </div>

    <Checkbox checkboxes={[{
      label: "Я даю согласие на обработку персональных данных",
      id: 1,
    }, {
      label: "Я ознакомлен и согласен с условиями оферты и политики конфиденциальности",
      id: 2
    },]} checked={rules} name={'rules'} onChangeChecked={setRules} />

    {showButton && <Button isDisabled={isDisabled} text='Свяжитесь со мной' onClick={onMakeOrder} />}
  </div>

}