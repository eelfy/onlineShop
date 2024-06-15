import { ReactNode } from 'react'
import cn from './InfoPageWrapper.module.scss'

interface InfoPageWrapperProps {
  header: string
  children: ReactNode
}

export const InfoPageWrapper = ({ header, children }: InfoPageWrapperProps) => {
  return <div className={cn.wrapper}>
    <h1 className={cn.header}>{header}</h1>

    {children}
  </div>
}