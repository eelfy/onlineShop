import { ItemSize } from '../../../entities/ItemSize';
import { ItemSizeOption } from '../../../shared/lib'
import cn from './ItemSizeChart.module.scss'

interface ItemSizeChartProps {
  sizes: ItemSizeOption[];
  activeSize: number | null,
  onChangeActive: (id: ItemSizeOption['id']) => void
}

export const ItemSizeChart = ({ sizes, activeSize, onChangeActive }: ItemSizeChartProps) => {
  return <div className={cn.wrapper}>
    <span className={cn.title}>Таблица размеров:</span>

    <div className={cn.chart}>
      {sizes.map(size => {
        return <ItemSize {...size} key={size.id} isActive={size.id === activeSize} onChangeActive={onChangeActive} />
      })}
    </div>
  </div>
}