import classNames from 'classnames'
import { Icon, IconName } from '../../../shared/ui'
import cn from './Socials.module.scss'

interface SocialsProps {
  isBlack?: boolean
}

export const Socials = ({ isBlack }: SocialsProps) => {
  return <div className={classNames(cn.icons, isBlack && cn.invert)}>
    <Icon size={30} name={IconName.Whatsapp} />
    <Icon size={30} name={IconName.Insta} />
    <Icon size={30} name={IconName.Telegram} />
  </div>
}