import { useState } from "react"
import { AnimatedToggleElements, Icon, IconName, Logo } from "../../shared/ui"
import { BurgerButton } from "../../entities/BurgerButton"
import { Search } from "../../entities/Search"
import { BurgerMenu } from "../BurgerMenu"
import cn from './Header.module.scss'
import classNames from "classnames"

export const Header = () => {
  const [isSubHeaderVisible, setIsSubHeaderVisible] = useState(false)
  const [isBurgerMenuVisible, setIsBurgerMenuVisible] = useState(false)
  const [isSearchMode, setIsSearchMode] = useState(false)

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
  console.log(isBurgerMenuVisible);

  const isFocusBackgroundVisible = isSubHeaderVisible || isBurgerMenuVisible

  return <>
    <header className={cn.wrapper}>

      <div className={cn.burgerMobile}>
        <BurgerButton isActive={isBurgerMenuVisible} onClick={toggleBurgerMenuVisible} />
      </div>

      <Logo />

      <nav className={cn.navigation}>
        {
          isSearchMode ? (
            <Search />
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