import classNames from 'classnames'
import cn from './AnimatedToggleElements.module.scss'
interface AnimatedToggleElementsProps {
  first: JSX.Element,
  second?: JSX.Element,

  fistClassName?: string,
  secondClassName?: string,

  isFirst: boolean,
}

export const AnimatedToggleElements = (
  {
    first, second, isFirst, fistClassName, secondClassName
  }: AnimatedToggleElementsProps) => {
  return <>
    <div className={classNames(
      cn.first,
      isFirst && cn.firstVisible,
      fistClassName
    )}>
      {first}
    </div>

    {second && (
      <div className={classNames(
        cn.second,
        !isFirst && cn.secondVisible,
        secondClassName
      )}>
        {second}
      </div>
    )}
  </>
}