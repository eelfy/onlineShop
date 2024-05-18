import { useState } from "react"
import { Logo } from "../../shared/ui"
import cn from './Header.module.scss'
import classNames from "classnames"

export const Header = () => {
  const [isActive, setIsActive] = useState(false)
  const toggleActive = () => {
    setIsActive((prev) => !prev)
  }
  console.log('isActive', isActive);

  return <header className={cn.wrapper}>
    <Logo />

    <div
      onClick={toggleActive}
      className={classNames(cn.buttonWrapper, isActive && cn.buttonWrapperActive)}
    >
      <label className={cn.burgerButton} >
        <div></div>
        <div></div>
        <div></div>
      </label>

    </div>


  </header>
}