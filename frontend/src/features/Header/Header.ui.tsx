import { useState } from "react"
import { useBoolean, useMediaQuery } from 'usehooks-ts'
import { AnimatedToggleElements, Icon, IconName, Logo } from "../../shared/ui"
import { BurgerButton } from "../../entities/BurgerButton"
import { Search } from "../../entities/Search"
import { BurgerMenu } from "../BurgerMenu"
import cn from './Header.module.scss'
import classNames from "classnames"
import { SearchSize } from "../../entities/Search"
import { MOBILE_QUERY } from "../../shared/config"
import { Categories, SubCategories } from "../../shared/lib"
import { HeaderSubMenu } from "../../entities/HeaderSubMenu"
import { HeaderBrandText } from "../../entities/HeaderBrandText"

import { observer } from "mobx-react-lite"
import { useStore } from "../../entities/Store"
import { useNavigate } from "react-router-dom"
import { Routes } from "../../shared/routes"
import { CardIcon } from "../../entities/CardIcon"

const MAX_HEADER_ELEMENTS = 5

export const Header = observer(() => {
  const navigate = useNavigate()

  const { MainStore: { categories } } = useStore()

  const [isSubHeaderVisible, setIsSubHeaderVisible] = useState(false)

  const { value: isSubBrandVisible, setFalse: closeSubBrand, setTrue: openSubBrand } = useBoolean()

  const [isBurgerMenuVisible, setIsBurgerMenuVisible] = useState(false)
  const [isSearchMode, setIsSearchMode] = useState(false)

  const [searchValue, setSearchValue] = useState('')

  const isMobile = useMediaQuery(MOBILE_QUERY)

  const [subCategories, setSubCategories] = useState<SubCategories>()

  const toggleBurgerMenuVisible = () => {
    setIsBurgerMenuVisible(prev => !prev)
  }

  const changeModeToNavigation = () => {
    setIsSearchMode(false)
    setSearchValue('')
  }

  const onCloseAllNavigate = () => {
    setIsSubHeaderVisible(false)
    setIsBurgerMenuVisible(false)
    closeSubBrand()
    changeModeToNavigation()
  }

  const changeModeToSearch = () => {
    onCloseAllNavigate()
    setIsSearchMode(true)
  }

  const toggleSubHeaderVisible = () => {
    setIsSubHeaderVisible(prev => !prev)

    if (isSubBrandVisible) closeSubBrand()
  }

  const onUpdateSubCategory = (subCategories: SubCategories) => {
    setSubCategories(subCategories)
    openSubBrand()
  }

  const onRedirectToBrand = ([brand, id]: [string, number]) => {
    onCloseAllNavigate()
    navigate(`${Routes.Category}/${brand}.${id}`)
  }

  const isFocusBackgroundVisible = isSubHeaderVisible || isBurgerMenuVisible || isSubBrandVisible

  const isMobileModeSearch = isSearchMode && isMobile

  const renderSubMenu = (categories: Categories) => {

    const entries = Object.entries(categories).slice(MAX_HEADER_ELEMENTS)
    return <HeaderSubMenu style={{ top: '110px', paddingBottom: '10px' }} isVisible={isSubHeaderVisible}
      onBrandClick={(arg) => {
        // @ts-expect-error len
        if (typeof arg?.[1] === 'number') return onRedirectToBrand(arg)
        // @ts-expect-error len
        onUpdateSubCategory(arg)
      }}
      items={entries} />
  }

  const renderSubCategoryMenu = (subCategories: SubCategories) => {
    return <HeaderSubMenu
      // @ts-expect-error len
      onBrandClick={onRedirectToBrand}
      className={classNames(cn.subBrand, Boolean(isSubBrandVisible && isSubHeaderVisible) && cn.subHeaderVisible)}
      isVisible={isSubBrandVisible} items={Object.entries(subCategories)}
    />
  }

  const onSearch = () => {
    if (searchValue.trim() === '') return
    onCloseAllNavigate()
    navigate(`${Routes.Search}/${searchValue}`)
  }

  if (!categories) return null

  return <>
    <header className={cn.wrapper}>
      {isMobileModeSearch && <Search
        value={searchValue}
        setValue={setSearchValue}
        size={SearchSize.S} onCrossClick={changeModeToNavigation} onSearch={onSearch} />}

      {!isMobileModeSearch && (
        <>
          <div className={cn.burgerMobile}>
            <BurgerButton isActive={isBurgerMenuVisible} onClick={toggleBurgerMenuVisible} />
          </div>

          <Logo />

          <nav className={cn.navigation}>
            {
              isSearchMode ? (
                <div className={cn.searchWrapper}>

                  <Search
                    value={searchValue}
                    setValue={setSearchValue}
                    size={SearchSize.M} onSearch={onSearch} />
                </div>
              ) :
                (
                  <>
                    <BurgerButton isActive={isSubHeaderVisible} onClick={toggleSubHeaderVisible} />
                    <div className={cn.navigationButtons}>
                      {
                        Object.entries(categories).slice(0, MAX_HEADER_ELEMENTS).map(([key, value], index) => {
                          return <HeaderBrandText
                            key={index}
                            onClick={() => {
                              if (typeof (value) === 'number') return onRedirectToBrand([key, value])
                              return onUpdateSubCategory(value)
                            }}>
                            {key}
                          </HeaderBrandText>
                        })
                      }
                    </div>
                  </>
                )
            }
          </nav>

          <div className={cn.additionalButtons}>
            {isSearchMode ? (
              <Icon size={isMobile ? 20 : 25} name={IconName.Cross} onClick={changeModeToNavigation} />
            ) : (
              <Icon size={isMobile ? 20 : 25} name={IconName.Search} onClick={changeModeToSearch} />
            )}

            <CardIcon />
          </div>
        </>
      )}

    </header>

    {!isMobile && (
      <>
        {renderSubMenu(categories)}
        {
          subCategories && renderSubCategoryMenu(subCategories)
        }

      </>
    )}

    {
      isFocusBackgroundVisible && (
        <AnimatedToggleElements
          isFirst={isFocusBackgroundVisible}
          first={<div
            onClick={onCloseAllNavigate}
            className={cn.focusBackground}
          />}
        />
      )
    }

    <div className={classNames(cn.burgerMenu, isBurgerMenuVisible && cn.visible)}>
      <BurgerMenu items={categories} onCloseAllNavigate={onCloseAllNavigate} />
    </div>
  </>
})