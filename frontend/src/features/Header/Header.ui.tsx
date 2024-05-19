import { AnimatedToggleElements, Icon, IconNames, Logo } from "../../shared/ui"
import cn from './Header.module.scss'
import { BurgerButton } from "../../entities/BurgerButton"
import { useState } from "react"
import classNames from "classnames"

export const Header = () => {
  const [isSubHeaderVisible, setIsSubHeaderVisible] = useState(false)
  const [isSearchMode, setIsSearchMode] = useState(false)
  console.log('isSearchMode: ', isSearchMode);

  const toggleSubHeaderVisible = () => {
    setIsSubHeaderVisible(prev => !prev)
  }

  const changeModeToSearch = () => {
    setIsSearchMode(true)
  }

  const changeModeToNavigation = () => {
    setIsSearchMode(false)
  }

  const isFocusBackgroundVisible = isSubHeaderVisible

  return <>
    <header className={cn.wrapper}>
      <Logo />

      <nav className={cn.navigation}>
        <BurgerButton onClick={toggleSubHeaderVisible} />
        {
          isSearchMode ? (
            <div className={cn.search}>search</div>
          ) :
            (
              <div className={cn.navigationButtons}>
                <span className={cn.brandName}>ADIDAS</span>
                <span className={cn.brandName}>YEEZY</span>
                <span className={cn.brandName}>NIKE</span>
                <span className={cn.brandName}>JORDAN</span>
                <span className={cn.brandName}>NEW BALANCE</span>
                <span className={cn.brandName}>ОДЕЖДА</span>
                <span className={cn.brandName}>ДЕТСКОЕ</span>
              </div>

            )
        }
      </nav>

      <div className={cn.additionalButtons}>
        {isSearchMode ? (
          <Icon name={IconNames.Cross} onClick={changeModeToNavigation} />
        ) : (
          <Icon name={IconNames.Search} onClick={changeModeToSearch} />
        )}

        <Icon name={IconNames.ShoppingCard} />
      </div>
    </header>



    <AnimatedToggleElements
      isFirst={isSubHeaderVisible}
      fistClassName={cn.subHeader}
      first={
        <>
          <div className={cn.navigation}>
            <span className={cn.brandName}>ADIDAS</span>
            <span className={cn.brandName}>YEEZY</span>
            <span className={cn.brandName}>NIKE</span>
            <span className={cn.brandName}>JORDAN</span>
            <span className={cn.brandName}>NEW BALANCE</span>
          </div>
        </>
      }
    />


    <AnimatedToggleElements
      isFirst={isFocusBackgroundVisible}
      first={<div
        className={cn.focusBackground}
      />}
    />
  </>
}