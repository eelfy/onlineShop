import cn from './Input.module.scss'

interface InputProps {
  label: string;
  value: string;
  onChange: (value: string) => void
  type?: React.InputHTMLAttributes<HTMLInputElement>['type']
  maxLength?: number
}

export const Input = ({ label, value, onChange, type, maxLength }: InputProps) => {
  return <div className={cn.wrapper}>
    <label className={cn.label}>{label}</label>
    <input maxLength={maxLength} type={type} className={cn.input} value={value} onChange={(e) => onChange(e.target.value)} />
  </div>
}