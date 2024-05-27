import Search from './icons/Search.svg'
import Cross from './icons/Cross.svg'
import ShoppingCard from './icons/ShoppingCard.svg'
import Telega from './icons/Telega.svg'
import Whatsapp from './icons/Whatsapp.svg'
import Insta from './icons/Insta.svg'
import PrevArrow from './icons/PrevArrow.svg'
import NextArrow from './icons/NextArrow.svg'
import ArrowDwn from './icons/ArrowDown.svg'
import ArrowUp from './icons/ArrowUp.svg'
import Delivery from './icons/Delivery.svg'
import Refund from './icons/Refund.svg'
import BestPrice from './icons/BestPrice.svg'
import ShoppingCardWhite from './icons/ShoppingCardWhite.svg'
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
  },
  [IconName.NextArrow]: {
    icon: NextArrow,
    alt: IconName.NextArrow
  },
  [IconName.PrevArrow]: {
    icon: PrevArrow,
    alt: IconName.PrevArrow
  },
  [IconName.ArrowDown]: {
    icon: ArrowDwn,
    alt: IconName.ArrowDown
  },
  [IconName.ArrowUp]: {
    icon: ArrowUp,
    alt: IconName.ArrowUp
  },
  [IconName.Delivery]: {
    icon: Delivery,
    alt: IconName.Delivery
  },
  [IconName.Refund]: {
    icon: Refund,
    alt: IconName.Refund
  },
  [IconName.BestPrice]: {
    icon: BestPrice,
    alt: IconName.BestPrice
  },
  [IconName.ShoppingCardWhite]: {
    icon: ShoppingCardWhite,
    alt: IconName.ShoppingCardWhite
  },
}