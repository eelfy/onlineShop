import classNames from 'classnames'
import { Icon, IconName } from '../../../shared/ui'
import cn from './Socials.module.scss'

interface SocialsProps {
  isBlack?: boolean
  notRenderInst?: boolean
}

export const Socials = ({ isBlack, notRenderInst }: SocialsProps) => {
  return <div className={classNames(cn.icons, isBlack && cn.invert)}>
    <a href='https://Wa.me/79661113322'>
      <Icon size={30} name={IconName.Whatsapp} />
    </a>

    {!notRenderInst && <a href='https://www.instagram.com/ramster_shop'>
      <Icon size={30} name={IconName.Insta} />
    </a>}

    <a href='https://t.me/Ramster_shop'> <Icon size={30} name={IconName.Telegram} /></a>
  </div>
}