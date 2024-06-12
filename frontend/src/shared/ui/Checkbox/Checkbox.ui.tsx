import classNames from 'classnames'
import cn from './Checkbox.module.scss'
import { CheckboxOption } from './Checkbox.types'

interface CheckboxProps {
  checkboxes: CheckboxOption[],
  checked: CheckboxOption['id'][],
  name: string,
  onChangeChecked: (active: CheckboxOption['id'][]) => void,
}

export const Checkbox = ({ checkboxes, name, checked, onChangeChecked }: CheckboxProps) => {
  const onCheckboxClick = (id: CheckboxOption['id']) => {
    const alreadyChecked = checked?.includes(id)

    let newChecked: CheckboxOption['id'][] = [...checked]
    debugger
    if (alreadyChecked) {
      newChecked = newChecked.filter(el => el !== id)
    } else {
      newChecked = [...checked, id]
    }
    onChangeChecked(newChecked)
  }
  return <div className={cn.wrapper}>
    {checkboxes.map(({ label, id }) => {
      const isChecked = checked?.includes(id)

      return <label key={id} className={cn.label}>
        <span className={classNames(cn.customCheckbox, isChecked && cn.customCheckboxChecked)} />
        <input value={id} onChange={() => onCheckboxClick(id)} className={cn.input} type='Checkbox' name={name} />
        {label}
      </label>
    })}
  </div>
}