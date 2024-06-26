import { useState } from "react"
import { Api } from "../../shared/api/Api"
import { CheckboxOption } from "../../shared/ui/Checkbox/Checkbox.types"
import { RadioOption } from "../../shared/ui/Radio"
import { CardCache } from "../../entities/Store"
import toast from "react-hot-toast"
import { FORM_RADIOS } from "./OrederForm.config"
import { ProductOrder } from "../../shared/lib"

const INPUT_DEFAULT = ''
const SOCIAL_DEFAULT: RadioOption['id'] | undefined = undefined
const RULES_DEFAULT: CheckboxOption['id'][] = []

const isValueWrong = (value: string) => value.trim() === ''

export const useOrderForm = () => {
  const cacheItems = CardCache.getItems() ?? []

  const [social, setSocial] = useState<RadioOption['id'] | undefined>(SOCIAL_DEFAULT)
  const [rules, setRules] = useState<CheckboxOption['id'][]>(RULES_DEFAULT)

  const [name, setName] = useState(INPUT_DEFAULT)
  const [number, setNumber] = useState(INPUT_DEFAULT)
  const [email, setEmail] = useState(INPUT_DEFAULT)

  const updateNumber = (value: string) => {
    setNumber(value.replace(/[^0-9]/g, ''))
  }

  const isDisabled = isValueWrong(name)
    || (isValueWrong(number) || number.length !== 11)
    || isValueWrong(email)
    || social === undefined
    || rules.length !== 2

  const successToastShow = () => toast.success('Заявка отправлена!\n С Вами свяжется менеджер')

  const clearForm = () => {
    setName(INPUT_DEFAULT)
    setNumber(INPUT_DEFAULT)
    setEmail(INPUT_DEFAULT)
  }

  const onMakeOrder = (products?: ProductOrder[]) => {
    Api.makeOrder({
      name,
      surname: name,
      phone: number,
      mail: email,
      messanger_name: FORM_RADIOS.find(el => el.id === social)?.label ?? '',
      products: products ?? cacheItems.map(item => ({
        size: item.size,
        product_id: item.id
      }))
    }).then(() => {
      successToastShow()
      clearForm()
    })
  }
  return {
    name,
    number,
    email,
    rules,
    social,
    isDisabled,
    setName,
    setNumber: updateNumber,
    setEmail,
    setSocial,
    setRules,
    onMakeOrder
  }
}