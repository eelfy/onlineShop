import cn from './Input.module.scss'

interface InputProps {
  label: string;
  value: string;
  onChange: (value: string) => void
}

export const Input = ({ label, value, onChange }: InputProps) => {
  return <div className={cn.wrapper}>
    <label className={cn.label}>{label}</label>
    <input className={cn.input} value={value} onChange={(e) => onChange(e.target.value)} />
  </div>
}