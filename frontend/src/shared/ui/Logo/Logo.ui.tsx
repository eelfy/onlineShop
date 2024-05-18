import GlobalLogo from "./LogoRamster.png";
import cn from './Logo.module.scss'

export const Logo = () => {
  return <img className={cn.logo} src={GlobalLogo} alt="RamsterLogo" />
}