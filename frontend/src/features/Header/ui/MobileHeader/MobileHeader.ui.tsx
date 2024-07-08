import classNames from 'classnames'

import { BurgerMenu } from '../../../BurgerMenu'
import { Icon, IconName, Logo } from '../../../../shared/ui'

import { Search, SearchSize } from '../../../../entities/Search'
import { BurgerButton } from '../../../../entities/BurgerButton'
import { CardIcon } from '../../../../entities/CardIcon'
import { LogoSize } from '../../../../shared/ui/Logo/Logo.types'
import { HeaderProps } from '../../Header.types'

import cn from './MobileHeader.module.scss'

interface MobileHeaderProps extends HeaderProps {
  isBurgerMenuVisible: boolean,
  toggleBurgerMenuVisible: () => void,
  changeModeToSearch: () => void,
  isSearchMode: boolean
}

export const MobileHeader = ({
  categories,
  searchValue,
  changeModeToNavigation,
  onSearch,
  setSearchValue,
  isBurgerMenuVisible,
  toggleBurgerMenuVisible,
  onCloseAllNavigate,
  changeModeToSearch,
  isSearchMode
}: MobileHeaderProps) => {
  return <>
    <header className={cn.wrapper}>
      {
        isSearchMode ? (

          <Search
            value={searchValue}
            setValue={setSearchValue}
            size={SearchSize.S}
            onCrossClick={changeModeToNavigation}
            onSearch={onSearch}
          />
        ) : (
          <>
            <div className={cn.additionalButtons}>
              <Icon size={20} name={IconName.Search} onClick={changeModeToSearch} />
              <CardIcon />
            </div>

            <Logo size={LogoSize.S} />

            <div className={cn.burgerMobile}>
              <BurgerButton
                isActive={isBurgerMenuVisible}
                onClick={toggleBurgerMenuVisible}
              />
            </div>
          </>

        )
      }

    </header>

    <div className={classNames(cn.burgerMenu, isBurgerMenuVisible && cn.visible)}>
      <BurgerMenu items={categories} onCloseAllNavigate={onCloseAllNavigate} />
    </div>
  </>
}