import classNames from 'classnames'

import { CardIcon } from '../../../../entities/CardIcon'
import { HeaderBrandText } from '../../../../entities/HeaderBrandText'
import { Search, SearchSize } from '../../../../entities/Search'
import { Logo, Icon, IconName } from '../../../../shared/ui'
import { SubCategories } from '../../../../shared/lib'
import { useBoolean } from 'usehooks-ts'
import { useNavigate } from 'react-router-dom'
import { Routes } from '../../../../shared/routes'
import { Dispatch, useState } from 'react'
import { LogoSize } from '../../../../shared/ui/Logo/Logo.types'
import { HeaderProps } from '../../Header.types'

import cn from './DesktopHeader.module.scss'

interface DesktopHeaderProps extends HeaderProps {
  isSubHeaderVisible: boolean,
  setIsSubHeaderVisible: Dispatch<React.SetStateAction<boolean>>
}

const MAX_HEADER_ELEMENTS = 10

export const DesktopHeader = ({
  categories,
  searchValue,
  changeModeToNavigation,
  onSearch,
  setSearchValue,
  onCloseAllNavigate,
  changeModeToSearch,
  isSearchMode,
  isSubHeaderVisible,
  setIsSubHeaderVisible
}: DesktopHeaderProps) => {
  const navigate = useNavigate()

  const { value: isSubBrandVisible, setTrue: openSubBrand } = useBoolean()
  const [subCategories, setSubCategories] = useState<SubCategories>()

  const onRedirectToBrand = ([brand, id]: [string, number]) => {
    onCloseAllNavigate()
    navigate(`${Routes.Category}/${brand}.${id}`)
  }

  const onUpdateSubCategory = (subCategories: SubCategories) => {
    setSubCategories(subCategories)
    setIsSubHeaderVisible(true)
    openSubBrand()
  }

  const renderSubCategoryMenu = (subCategories: SubCategories) => {
    const items = Object.entries(subCategories)

    return <div
      className={classNames(
        cn.subHeader,
        isSubBrandVisible && cn.visible,
        Boolean(isSubBrandVisible && isSubHeaderVisible) && cn.subHeaderVisible
      )}>

      <div className={cn.subHeaderNavigation}>
        {items.map(([key, value], index) => {
          const onBrandClickHandler = () => {
            return onRedirectToBrand([key, value])
          }
          return <HeaderBrandText onClick={onBrandClickHandler} key={index}>
            {key}
          </HeaderBrandText>
        })}
      </div>
    </div>
  }


  return <>
    <header className={cn.wrapper}>
      <div className={cn.header}>
        {isSearchMode ? (
          <div className={cn.searchWrapper}>
            <Search
              value={searchValue}
              setValue={setSearchValue}
              size={SearchSize.S} onSearch={onSearch}
              onCrossClick={changeModeToNavigation}
            />
          </div>
        ) : (
          <>
            <Icon size={25} name={IconName.Search} onClick={changeModeToSearch} />

            <Logo size={LogoSize.S} />

          </>
        )}

        <CardIcon />
      </div>

      <nav className={cn.navigation}>
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
      </nav>
    </header>

    {
      subCategories && isSubHeaderVisible && renderSubCategoryMenu(subCategories)
    }
  </>
}
