import { useParams } from "react-router-dom"
import cn from './Brand.module.scss'

import { StuffList } from "../../../features/StuffList"


export const Brand = () => {
  const { brandName } = useParams()
  return <div className={cn.wrapper}>
    <h2 className={cn.title}>{brandName}</h2>
    <StuffList />
  </div>
}