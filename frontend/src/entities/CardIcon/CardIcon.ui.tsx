import { useNavigate } from "react-router-dom"
import { Routes } from "../../shared/routes"
import { Icon, IconName } from "../../shared/ui"
import { CardCache } from "../Store/stores/Cache"

import cn from './CardIcon.module.scss'
import { observer } from "mobx-react-lite"
import { useStore } from "../Store"
import { useEffect } from "react"

export const CardIcon = observer(() => {
  const navigate = useNavigate()
  const { MainStore: { cardCount, updateCardCount } } = useStore()

  useEffect(() => {
    updateCardCount(CardCache.getItems()?.length)
  }, [updateCardCount])

  return <div className={cn.wrapper}>
    <Icon onClick={() => navigate(Routes.Bag)} name={IconName.ShoppingCard} />

    {Boolean(cardCount) && <span className={cn.count}>{cardCount}</span>}
  </div>
})