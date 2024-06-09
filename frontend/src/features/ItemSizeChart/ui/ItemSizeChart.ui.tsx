import { ItemSize } from '../../../entities/ItemSize';
import { ItemSizeOption } from '../../../shared/lib'
import cn from './ItemSizeChart.module.scss'

interface ItemSizeChartProps {
  sizes: string[];
  activeSize: string,
  onChangeActive: (id: string) => void
}

export const ItemSizeChart = ({ sizes, activeSize, onChangeActive }: ItemSizeChartProps) => {
  return <div className={cn.wrapper}>
    <span className={cn.title}>Таблица размеров:</span>

    <div className={cn.chart}>
      {sizes.map(size => {
        return <ItemSize key={size} isActive={size === activeSize} onChangeActive={onChangeActive} name={size} />
      })}
    </div>
  </div>
}