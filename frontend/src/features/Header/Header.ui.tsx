import { useState } from "react"
import { useMediaQuery } from 'usehooks-ts'
import { AnimatedToggleElements, Icon, IconName, Logo } from "../../shared/ui"
import { BurgerButton } from "../../entities/BurgerButton"
import { Search } from "../../entities/Search"
import { BurgerMenu } from "../BurgerMenu"
import cn from './Header.module.scss'
import classNames from "classnames"
import { SearchSize } from "../../entities/Search"
import { MOBILE_QUERY } from "../../shared/config"
import { noop } from "../../shared/lib"

export const Header = () => {
  const [isSubHeaderVisible, setIsSubHeaderVisible] = useState(false)
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

  const isFocusBackgroundVisible = isSubHeaderVisible || isBurgerMenuVisible
  const isMobileModeSearch = isSearchMode && isMobile

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
          </div></>
      )}

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
      isFirst={isFocusBackgroundVisible || isBurgerMenuVisible}
      first={<div
        onClick={() => {
          setIsSubHeaderVisible(false)
          setIsBurgerMenuVisible(false)
        }}
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