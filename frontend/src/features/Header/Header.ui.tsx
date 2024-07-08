import { useState } from "react"
import { useBoolean, useMediaQuery } from 'usehooks-ts'
import { AnimatedToggleElements } from "../../shared/ui"
import cn from './Header.module.scss'
import { MOBILE_QUERY } from "../../shared/config"

import { observer } from "mobx-react-lite"
import { useStore } from "../../entities/Store"
import { useNavigate } from "react-router-dom"
import { Routes } from "../../shared/routes"
import { DesktopHeader } from "./ui/DesktopHeader"
import { MobileHeader } from "./ui/MobileHeader"

export const Header = observer(() => {
  const navigate = useNavigate()

  const { MainStore: { categories } } = useStore()

  const { value: isSubHeaderVisible, setValue: setIsSubHeaderVisible } = useBoolean()

  const { value: isSubBrandVisible, setFalse: closeSubBrand } = useBoolean()

  const { value: isBurgerMenuVisible, setValue: setIsBurgerMenuVisible } = useBoolean()
  const { value: isSearchMode, setValue: setIsSearchMode } = useBoolean()

  const [searchValue, setSearchValue] = useState('')

  const isMobile = useMediaQuery(MOBILE_QUERY)

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

  const isFocusBackgroundVisible = isSubHeaderVisible || isBurgerMenuVisible || isSubBrandVisible

  const onSearch = () => {
    if (searchValue.trim() === '') return
    onCloseAllNavigate()
    navigate(`${Routes.Search}/${searchValue}`)
  }

  if (!categories) return null

  const sameProps = {
    categories,
    onCloseAllNavigate,
    searchValue,
    changeModeToNavigation,
    onSearch,
    setSearchValue,
    changeModeToSearch,
    isSearchMode,
  }

  return <>
    {isMobile
      ? <MobileHeader
        {...sameProps}
        isBurgerMenuVisible={isBurgerMenuVisible}
        toggleBurgerMenuVisible={toggleBurgerMenuVisible}
        changeModeToSearch={changeModeToSearch}
        isSearchMode={isSearchMode}
      />
      : <DesktopHeader
        {...sameProps}
        isSubHeaderVisible={isSubHeaderVisible}
        setIsSubHeaderVisible={setIsSubHeaderVisible}
      />
    }

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
  </>
})