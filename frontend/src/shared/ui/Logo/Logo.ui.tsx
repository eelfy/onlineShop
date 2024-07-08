import GlobalLogo from "./Logo.png";
import cn from './Logo.module.scss'
import { useNavigate } from "react-router-dom";
import { Routes } from "../../routes";
import { LogoSize } from "./Logo.types";
import classNames from "classnames";

const sizeToCn = {
  [LogoSize.M]: cn.logoM,
  [LogoSize.S]: cn.logoS
}

export const Logo = ({ size = LogoSize.M }: { size?: LogoSize }) => {
  const navigate = useNavigate()

  const onClick = () => {
    navigate(Routes.Main)
  }

  return <img onClick={onClick} className={classNames(cn.logo, sizeToCn[size])} src={GlobalLogo} alt="RamsterLogo" />
}