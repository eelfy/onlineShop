import { useState } from "react"
import { Api } from "../../shared/api/Api"
import { CheckboxOption } from "../../shared/ui/Checkbox/Checkbox.types"
import { RadioOption } from "../../shared/ui/Radio"
import { CardCache } from "../../entities/Store"

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
    || isValueWrong(number)
    || isValueWrong(email)
    || social === undefined
    || rules.length !== 2

  const onMakeOrder = () => {
    Api.makeOrder({
      name,
      surname: name,
      phone: number,
      mail: email,
      products_id: cacheItems.map(item => item.id)
    }).then(() => {
      setName(INPUT_DEFAULT)
      setNumber(INPUT_DEFAULT)
      setEmail(INPUT_DEFAULT)
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