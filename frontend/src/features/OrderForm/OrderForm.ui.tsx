import { useNavigate } from 'react-router-dom'
import { Button } from '../../shared/ui/Button'
import { CheckboxOption } from '../../shared/ui/Checkbox/Checkbox.types'
import { Checkbox } from '../../shared/ui/Checkbox/Checkbox.ui'
import { Input } from '../../shared/ui/Input'
import { Radio, RadioOption } from '../../shared/ui/Radio'

import cn from './OrderForm.module.scss'
import { FIRST_CHECKBOX_ID, FORM_RADIOS, SECOND_CHECKBOX_ID } from './OrederForm.config'
import { Routes } from '../../shared/routes'
import classNames from 'classnames'

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
  onMakeOrder: () => void
  isNameError: boolean,
  isNumberError: boolean,
  isEmailError: boolean,
  isRadioError: boolean,
  isFirstCheckboxError: boolean,
  isSecondCheckboxError: boolean,
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
  onMakeOrder,
  isNameError,
  isNumberError,
  isEmailError,
  isRadioError,
  isFirstCheckboxError,
  isSecondCheckboxError,
}: OrderFormProps) => {
  const navagte = useNavigate()
  return <div className={cn.form}>
    <Input isError={isNameError} value={name} onChange={setName} label='Имя' />
    <Input isError={isNumberError} maxLength={11} value={number} onChange={setNumber} label='Номер телефона' />
    <Input isError={isEmailError} value={email} onChange={setEmail} label='E-mail' />

    <div>
      <span className={classNames(isRadioError && cn.error)}>Как с вами связаться?</span>
      <Radio
        radios={FORM_RADIOS}
        checked={social}
        name={'contact'}
        onChangeChecked={setSocial}
      />
    </div>

    <Checkbox
      checkboxes={
        [
          {
            label: "Я даю согласие на обработку персональных данных",
            id: FIRST_CHECKBOX_ID,
            isError: isFirstCheckboxError
          }, {
            label: <span>
              Я ознакомлен и согласен с условиями <a
                onClick={() => {
                  navagte(Routes.Terms)
                }}
                className={cn.politics}>оферты и политики конфиденциальности</a>
            </span>,
            id: SECOND_CHECKBOX_ID,
            isError: isSecondCheckboxError
          }
        ]
      }
      checked={rules}
      name={'rules'}
      onChangeChecked={setRules} />

    {showButton && <Button text='Свяжитесь со мной' onClick={onMakeOrder} />}
  </div>

}