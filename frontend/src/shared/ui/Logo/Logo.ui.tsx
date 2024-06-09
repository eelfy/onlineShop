import GlobalLogo from "./Logo.png";
import cn from './Logo.module.scss'
import { useNavigate } from "react-router-dom";
import { Routes } from "../../routes";

export const Logo = () => {
  const navigate = useNavigate()

  const onClick = () => {
    navigate(Routes.Main)
  }

  return <img onClick={onClick} className={cn.logo} src={GlobalLogo} alt="RamsterLogo" />
}