import classNames from 'classnames';
import cn from './Input.module.scss'

interface InputProps {
  label: string;
  value: string;
  onChange: (value: string) => void
  type?: React.InputHTMLAttributes<HTMLInputElement>['type']
  maxLength?: number,
  isError?: boolean
}

export const Input = ({ label, value, onChange, type, maxLength, isError }: InputProps) => {
  return <div className={cn.wrapper}>
    <label className={classNames(cn.label, isError && cn.error)}>{label}</label>
    <input maxLength={maxLength} type={type} className={cn.input} value={value} onChange={(e) => onChange(e.target.value)} />
  </div>
}