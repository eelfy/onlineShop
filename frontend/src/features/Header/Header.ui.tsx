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
import { noop } from "../../shared/lib"
import { HeaderSubMenu } from "../../entities/HeaderSubMenu"
import { HeaderBrandText } from "../../entities/HeaderBrandText"
import { Api } from "../../shared/api/Api"

export const Header = () => {
  const [isSubHeaderVisible, setIsSubHeaderVisible] = useState(false)

  const { value: isSubBrandVisible, setFalse: closeSubBrand, setTrue: openSubBrand } = useBoolean()

  const [isBurgerMenuVisible, setIsBurgerMenuVisible] = useState(false)
  const [isSearchMode, setIsSearchMode] = useState(false)
  const isMobile = useMediaQuery(MOBILE_QUERY)

  const toggleSubHeaderVisible = () => {
    setIsSubHeaderVisible(prev => !prev)
  }

  const toggleBurgerMenuVisible = () => {
    setIsBurgerMenuVisible(prev => !prev)
  }

  const changeModeToSearch = () => {
    setIsSearchMode(true)
    setIsSubHeaderVisible(false)
  }

  const changeModeToNavigation = () => {
    setIsSearchMode(false)
  }

  const onFocusBackgroundClick = () => {
    setIsSubHeaderVisible(false)
    setIsBurgerMenuVisible(false)
    closeSubBrand()
  }

  const onBrandClickOutside = () => {
    // closeSubBrand()
  }

  const isFocusBackgroundVisible = isSubHeaderVisible || isBurgerMenuVisible || isSubBrandVisible
  const isMobileModeSearch = isSearchMode && isMobile



  const getCateg = async () => {
    const some = await Api.getCategories();
    console.log(some);

  }

  return <>
    <header className={cn.wrapper}>
      {isMobileModeSearch && <Search size={SearchSize.S} onCrossClick={changeModeToNavigation} onSearch={noop} />}

      {!isMobileModeSearch && (
        <>
          <div className={cn.burgerMobile}>
            <BurgerButton isActive={isBurgerMenuVisible} onClick={toggleBurgerMenuVisible} />
          </div>

          <Logo />

          <nav className={cn.navigation}>
            {
              isSearchMode ? (
                <Search size={SearchSize.M} onSearch={noop} />
              ) :
                (
                  <>
                    <BurgerButton isActive={isSubHeaderVisible} onClick={toggleSubHeaderVisible} />
                    <div className={cn.navigationButtons}>
                      <HeaderBrandText onClickOutside={onBrandClickOutside} onClick={openSubBrand}>ADIDAS</HeaderBrandText>
                      <HeaderBrandText onClickOutside={onBrandClickOutside} onClick={openSubBrand}>YEEZY</HeaderBrandText>
                      <HeaderBrandText onClick={noop}>NIKE</HeaderBrandText>
                      <HeaderBrandText onClick={noop}>JORDAN</HeaderBrandText>
                      <HeaderBrandText onClick={noop}>NEW BALANCE</HeaderBrandText>
                      <HeaderBrandText onClick={noop}>ОДЕЖДА</HeaderBrandText>
                      <HeaderBrandText onClick={noop}>ДЕТСКОЕ</HeaderBrandText>
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
          </div></>
      )}

    </header>

    {!isMobile && (
      <>
        <HeaderSubMenu style={{ top: '110px' }} isVisible={isSubHeaderVisible} items={[
          'ADIDAS',
          'YEEZY',
          'NIKE',
          'JORDAN',
          'JORDAN',
        ]} />

        <HeaderSubMenu
          className={classNames(cn.subBrand, isSubBrandVisible && isSubHeaderVisible && cn.subHeaderVisible)}
          isVisible={isSubBrandVisible} items={[
            'ADIDAS',
            'YEEZY',
            'NIKE',
            'JORDAN',
            'JORDAN',
            'JORDAN',
            'JORDAN',
            'JORDAN',
            'JORDAN',
            'JORDAN',
            'JORDAN',
          ]} />
      </>
    )}


    <AnimatedToggleElements
      isFirst={isFocusBackgroundVisible}
      first={<div
        onClick={onFocusBackgroundClick}
        className={cn.focusBackground}
      />}
    />

    <div className={classNames(cn.burgerMenu, isBurgerMenuVisible && cn.visible)}>
      <BurgerMenu items={[
        {
          name: 'Adidas',

          items: [{
            name: 'Adidas',
          }, {
            name: 'Adidas',
          }, {
            name: 'Adidas',
          }, {
            name: 'Adidas',
          }, {
            name: 'Adidas',
          }, {
            name: 'Adidas',
          },
          ]
        },
        {
          name: 'Adidas',

          items: [{
            name: 'Adidas',
          }, {
            name: 'Adidas',
          }, {
            name: 'Adidas',
          }, {
            name: 'Adidas',
          }, {
            name: 'Adidas',
          }, {
            name: 'Adidas',
          },
          ]
        },
        {
          name: 'Adidas',

          items: [{
            name: 'Adidas',
          }, {
            name: 'Adidas',
          }, {
            name: 'Adidas',
          }, {
            name: 'Adidas',
          }, {
            name: 'Adidas',
          }, {
            name: 'Adidas',
          },
          ]
        },
        {
          name: 'Adidas',

          items: [{
            name: 'Adidas',
          }, {
            name: 'Adidas',
          }, {
            name: 'Adidas',
          }, {
            name: 'Adidas',
          }, {
            name: 'Adidas',
          }, {
            name: 'Adidas',
          },
          ]
        },
        {
          name: 'Adidas',

          items: [{
            name: 'Adidas',
          }, {
            name: 'Adidas',
          }, {
            name: 'Adidas',
          }, {
            name: 'Adidas',
          }, {
            name: 'Adidas',
          }, {
            name: 'Adidas',
          },
          ]
        },
        {
          name: 'Adidas',

          items: [{
            name: 'Adidas',
          }, {
            name: 'Adidas',
          }, {
            name: 'Adidas',
          }, {
            name: 'Adidas',
          }, {
            name: 'Adidas',
          }, {
            name: 'Adidas',
          },
          ]
        },
        {
          name: 'Adidas',

          items: [{
            name: 'Adidas',
          }, {
            name: 'Adidas',
          }, {
            name: 'Adidas',
          }, {
            name: 'Adidas',
          }, {
            name: 'Adidas',
          }, {
            name: 'Adidas',
          },
          ]
        },
        {
          name: 'Adidas',

          items: [{
            name: 'Adidas',
          }, {
            name: 'Adidas',
          }, {
            name: 'Adidas',
          }, {
            name: 'Adidas',
          }, {
            name: 'Adidas',
          }, {
            name: 'Adidas',
          },
          ]
        },
        {
          name: 'Adidas',

          items: [{
            name: 'Adidas',
          }, {
            name: 'Adidas',
          }, {
            name: 'Adidas',
          }, {
            name: 'Adidas',
          }, {
            name: 'Adidas',
          }, {
            name: 'Adidas',
          },
          ]
        },
        {
          name: 'Adidas',

          items: [{
            name: 'Adidas',
          }, {
            name: 'Adidas',
          }, {
            name: 'Adidas',
          }, {
            name: 'Adidas',
          }, {
            name: 'Adidas',
          }, {
            name: 'Adidas',
          },
          ]
        },
        {
          name: 'Adidas',

          items: [{
            name: 'Adidas',
          }, {
            name: 'Adidas',
          }, {
            name: 'Adidas',
          }, {
            name: 'Adidas',
          }, {
            name: 'Adidas',
          }, {
            name: 'Adidas',
          },
          ]
        },
        {
          name: 'Adidas',

          items: [{
            name: 'Adidas',
          }, {
            name: 'Adidas',
          }, {
            name: 'Adidas',
          }, {
            name: 'Adidas',
          }, {
            name: 'Adidas',
          }, {
            name: 'Adidas',
          },
          ]
        },
        {
          name: 'Adidas',

          items: [{
            name: 'Adidas',
          }, {
            name: 'Adidas',
          }, {
            name: 'Adidas',
          }, {
            name: 'Adidas',
          }, {
            name: 'Adidas',
          }, {
            name: 'Adidas',
          },
          ]
        },
      ]} />
    </div>
  </>
}