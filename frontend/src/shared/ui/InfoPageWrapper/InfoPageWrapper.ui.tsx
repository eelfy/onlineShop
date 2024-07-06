import { ReactNode } from 'react'
import cn from './InfoPageWrapper.module.scss'
import { PageWrapper } from '../PageWrapper/PageWrapper.ui'

interface InfoPageWrapperProps {
  header: string
  children: ReactNode
}

export const InfoPageWrapper = ({ header, children }: InfoPageWrapperProps) => {
  return <PageWrapper className={cn.wrapper}>
    <h1 className={cn.header}>{header}</h1>

    {children}
  </PageWrapper>
}