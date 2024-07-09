import { useState } from "react"
import { Api } from "../../shared/api/Api"
import { CheckboxOption } from "../../shared/ui/Checkbox/Checkbox.types"
import { RadioOption } from "../../shared/ui/Radio"
import { CardCache } from "../../entities/Store"
import toast from "react-hot-toast"
import { FIRST_CHECKBOX_ID, FORM_RADIOS, SECOND_CHECKBOX_ID } from "./OrederForm.config"
import { ProductOrder } from "../../shared/lib"
import { useBoolean } from "usehooks-ts"

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

  const { value: isSuccessModalOpen, setValue: setSuccessModalOpen } = useBoolean()

  const { value: isNameError, setValue: setNameError } = useBoolean()
  const { value: isNumberError, setValue: setNumberError } = useBoolean()
  const { value: isEmailError, setValue: setEmailError } = useBoolean()
  const { value: isRadioError, setValue: setRadioError } = useBoolean()
  const { value: isFirstCheckboxError, setValue: setFirstCheckboxError } = useBoolean()
  const { value: isSecondCheckboxError, setValue: setSecondCheckboxError } = useBoolean()

  const updateNumber = (value: string) => {
    setNumber(value.replace(/[^0-9]/g, ''))
  }

  const errorToastShow = () => toast.error('Не все поля заполнены')
  const antispamToastShow = () => toast.error('Ой, кажется вы отправили слишком много запросов!\n Повторите через минуту :)')

  const clearForm = () => {
    setName(INPUT_DEFAULT)
    setNumber(INPUT_DEFAULT)
    setEmail(INPUT_DEFAULT)

    setNameError(false)
    setNumberError(false)
    setEmailError(false)
    setRadioError(false)
    setFirstCheckboxError(false)
    setSecondCheckboxError(false)
  }

  const onMakeOrder = (products?: ProductOrder[]) => {
    const allErrors = [
      isValueWrong(name),
      isValueWrong(number) || number.length !== 11,
      isValueWrong(email),
      social === undefined,
      !rules.includes(FIRST_CHECKBOX_ID),
      !rules.includes(SECOND_CHECKBOX_ID)
    ]
    const hasSomeError = allErrors.some(error => error === true)

    const [
      hasNameError,
      hasNumberError,
      hasEmailError,
      hasRadioError,
      hasFirstCheckboxError,
      hasSecondCheckboxError
    ] = allErrors

    setNameError(hasNameError)
    setNumberError(hasNumberError)
    setEmailError(hasEmailError)
    setRadioError(hasRadioError)
    setFirstCheckboxError(hasFirstCheckboxError)
    setSecondCheckboxError(hasSecondCheckboxError)

    if (hasSomeError) return errorToastShow()

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
    }).then((status) => {
      if (status === 423) {
        return antispamToastShow()
      }

      setSuccessModalOpen(true)
    }).finally(() => {
      clearForm()
    })
  }

  return {
    name,
    number,
    email,
    rules,
    social,
    isNameError,
    isNumberError,
    isEmailError,
    isRadioError,
    isFirstCheckboxError,
    isSecondCheckboxError,
    isSuccessModalOpen,

    setSuccessModalOpen,
    setName,
    setNumber: updateNumber,
    setEmail,
    setSocial,
    setRules,
    onMakeOrder,
  }
}