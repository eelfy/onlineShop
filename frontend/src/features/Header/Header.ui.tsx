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
import { Categories, SubCategories, noop } from "../../shared/lib"
import { HeaderSubMenu } from "../../entities/HeaderSubMenu"
import { HeaderBrandText } from "../../entities/HeaderBrandText"

import { observer } from "mobx-react-lite"
import { useStore } from "../../entities/Store"

export const Header = observer(() => {
  const { MainStore: { categories } } = useStore()

  const [isSubHeaderVisible, setIsSubHeaderVisible] = useState(false)

  const { value: isSubBrandVisible, setFalse: closeSubBrand, setTrue: openSubBrand } = useBoolean()

  const [isBurgerMenuVisible, setIsBurgerMenuVisible] = useState(false)
  const [isSearchMode, setIsSearchMode] = useState(false)
  const isMobile = useMediaQuery(MOBILE_QUERY)

  const [subCategories, setSubCategories] = useState<SubCategories>()

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
  const onUpdateSubCategory = (subCategories: SubCategories) => {
    setSubCategories(subCategories)
    openSubBrand()
  }

  const onRedirectToBrand = (id: number) => {
    console.log('id: ', id);
  }

  const isFocusBackgroundVisible = isSubHeaderVisible || isBurgerMenuVisible || isSubBrandVisible
  const isMobileModeSearch = isSearchMode && isMobile


  console.log('categories: ', categories);

  const renderSubMenu = (categories: Categories) => {

    const entries = Object.entries(categories).slice(7)
    return <HeaderSubMenu style={{ top: '110px' }} isVisible={isSubHeaderVisible}
      // @ts-expect-error len
      onBrandClick={onUpdateSubCategory}
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

  if (!categories) return null

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
                      {
                        Object.entries(categories).slice(0, 7).map(([key, value], index) => {
                          return <HeaderBrandText
                            key={index}
                            onClickOutside={onBrandClickOutside}
                            onClick={() => onUpdateSubCategory(value)}>
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
            onClick={onFocusBackgroundClick}
            className={cn.focusBackground}
          />}
        />
      )
    }

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
})