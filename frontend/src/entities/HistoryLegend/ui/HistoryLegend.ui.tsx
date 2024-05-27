import { useNavigate } from 'react-router-dom'
import { HistoryLegendOption } from '../../../shared/lib'
import cn from './HistoryLegend.module.scss'
import classNames from 'classnames'

interface HistoryLegendProps {
  options: HistoryLegendOption[]
}

export const HistoryLegend = ({ options }: HistoryLegendProps) => {
  const navigate = useNavigate()

  return <div>
    {options.map(({ redirectTo, isCurrent, title }, index) => {
      return <span
        className={classNames(cn.legend, isCurrent && cn.legendCurrent)}
        onClick={() => redirectTo && navigate(redirectTo)}
        key={index}
      >
        {title} {!isCurrent && '/'} {''}
      </span>
    })}
  </div>
}