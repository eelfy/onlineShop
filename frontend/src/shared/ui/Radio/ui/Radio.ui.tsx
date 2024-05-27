import { RadioOption } from "../Radio.types"
import cn from './Radio.module.scss'

interface RadioProps {
  radios: RadioOption[],
  checked: RadioOption['id'] | null,
  name: string,
  onChangeChecked: (active: RadioOption['id']) => void
}

export const Radio = ({ radios, name, checked, onChangeChecked }: RadioProps) => {

  return <div>
    {radios.map(({ label, id }) => {
      console.log(id, checked);
      debugger
      return <label key={id} className={cn.label}>
        <span className={cn.customRadio}></span>
        <input onChange={() => onChangeChecked(id)} className={cn.input} type='radio' name={name} checked={checked === id} />
        {label}
      </label>
    })}
  </div>
}