import GlobalLogo from "./Logo.png";
import cn from './Logo.module.scss'

export const Logo = () => {
  return <img className={cn.logo} src={GlobalLogo} alt="RamsterLogo" />
}