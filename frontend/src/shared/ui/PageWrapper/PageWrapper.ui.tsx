import { ReactNode } from "react"
import cn from './PageWrapper.module.scss'
import classNames from "classnames";

export const PageWrapper = ({ className, children }: { className?: string; children: ReactNode }) => {
  return <div className={classNames(cn.wrapper, className)}>{children}</div>
}