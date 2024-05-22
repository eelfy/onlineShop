import Search from './icons/Search.svg'
import Cross from './icons/Cross.svg'
import ShoppingCard from './icons/ShoppingCard.svg'
import Telega from './icons/Telega.svg'
import Whatsapp from './icons/Whatsapp.svg'
import Insta from './icons/Insta.svg'
import { IconInfo, IconName } from './lib/Icons.types'

export const ICONS: Record<IconName, IconInfo> = {
  [IconName.Search]: {
    icon: Search,
    alt: IconName.Search
  },
  [IconName.ShoppingCard]: {
    icon: ShoppingCard,
    alt: IconName.ShoppingCard
  },
  [IconName.Cross]: {
    icon: Cross,
    alt: IconName.Cross
  },
  [IconName.Telegram]: {
    icon: Telega,
    alt: IconName.Telegram
  },
  [IconName.Insta]: {
    icon: Insta,
    alt: IconName.Insta
  },
  [IconName.Whatsapp]: {
    icon: Whatsapp,
    alt: IconName.Whatsapp
  }
}