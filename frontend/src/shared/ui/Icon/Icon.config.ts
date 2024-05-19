import Search from './icons/Search.svg'
import Cross from './icons/Cross.svg'
import ShoppingCard from './icons/ShoppingCard.svg'
import { IconInfo, IconNames } from './lib/Icons.types'

export const ICONS: Record<IconNames, IconInfo> = {
  [IconNames.Search]: {
    icon: Search,
    alt: 'SearchIcon'
  },
  [IconNames.ShoppingCard]: {
    icon: ShoppingCard,
    alt: 'ShoppingCardIcon'
  },
  [IconNames.Cross]: {
    icon: Cross,
    alt: 'CrossIcon'
  }
}