import { useNavigate } from "react-router-dom"
import { Routes } from "../../shared/routes"
import { Icon, IconName } from "../../shared/ui"
import { CardCache } from "../Store/stores/Cache"

import cn from './CardIcon.module.scss'
import { observer } from "mobx-react-lite"
import { useStore } from "../Store"
import { useEffect } from "react"
import { useMediaQuery } from "usehooks-ts"
import { MOBILE_QUERY } from "../../shared/config"

export const CardIcon = observer(() => {
  const navigate = useNavigate()
  const { MainStore: { cardCount, updateCardCount } } = useStore()
  const isMobile = useMediaQuery(MOBILE_QUERY)

  useEffect(() => {
    updateCardCount(CardCache.getItems()?.length)
  }, [updateCardCount])

  return <div className={cn.wrapper}>
    <Icon size={isMobile ? 20 : 25} onClick={() => navigate(Routes.Bag)} name={IconName.ShoppingCard} />

    {Boolean(cardCount) && <span style={{
      left: isMobile ? '12px' : '16px',
      top: isMobile ? '14px' : '18px'
    }} className={cn.count}>{cardCount}</span>}
  </div>
})