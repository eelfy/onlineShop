import { useState } from "react"
import { AnimatedToggleElements, Icon, IconName, Logo } from "../../shared/ui"
import { BurgerButton } from "../../entities/BurgerButton"
import { Search } from "../../entities/Search"
import cn from './Header.module.scss'

export const Header = () => {
  const [isSubHeaderVisible, setIsSubHeaderVisible] = useState(false)
  const [isSearchMode, setIsSearchMode] = useState(false)

  const toggleSubHeaderVisible = () => {
    setIsSubHeaderVisible(prev => !prev)
  }

  const changeModeToSearch = () => {
    setIsSearchMode(true)
    setIsSubHeaderVisible(false)
  }

  const changeModeToNavigation = () => {
    setIsSearchMode(false)
  }

  const isFocusBackgroundVisible = isSubHeaderVisible

  return <>
    <header className={cn.wrapper}>
      <Logo />

      <nav className={cn.navigation}>
        {
          isSearchMode ? (
            <Search />
          ) :
            (
              <>
                <BurgerButton onClick={toggleSubHeaderVisible} />
                <div className={cn.navigationButtons}>
                  <span className={cn.brandName}>ADIDAS</span>
                  <span className={cn.brandName}>YEEZY</span>
                  <span className={cn.brandName}>NIKE</span>
                  <span className={cn.brandName}>JORDAN</span>
                  <span className={cn.brandName}>NEW BALANCE</span>
                  <span className={cn.brandName}>ОДЕЖДА</span>
                  <span className={cn.brandName}>ДЕТСКОЕ</span>
                </div>
              </>
            )
        }
      </nav>

      <div className={cn.additionalButtons}>
        {isSearchMode ? (
          <Icon name={IconName.Cross} onClick={changeModeToNavigation} />
        ) : (
          <Icon name={IconName.Search} onClick={changeModeToSearch} />
        )}

        <Icon name={IconName.ShoppingCard} />
      </div>
    </header>

    <AnimatedToggleElements
      isFirst={isSubHeaderVisible}
      fistClassName={cn.subHeader}
      first={
        <>
          <div className={cn.subHeaderNavigation}>
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