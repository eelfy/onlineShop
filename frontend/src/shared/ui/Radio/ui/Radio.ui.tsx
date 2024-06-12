import classNames from "classnames"
import { RadioOption } from "../Radio.types"
import cn from './Radio.module.scss'

interface RadioProps {
  radios: RadioOption[],
  checked?: RadioOption['id'] | null,
  name: string,
  onChangeChecked: (active: RadioOption['id']) => void,
}

export const Radio = ({ radios, name, checked, onChangeChecked }: RadioProps) => {

  return <div className={cn.wrapper}>
    {radios.map(({ label, id }) => {
      const isChecked = id === checked

      return <label key={id} className={cn.label}>
        <span className={classNames(cn.customRadio, isChecked && cn.customRadioChecked)} />
        <input value={id} onChange={() => onChangeChecked(id)} className={cn.input} type='radio' name={name} />
        {label}
      </label>
    })}
  </div>
}