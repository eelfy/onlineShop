import { useBoolean } from 'usehooks-ts'
import cn from './HeaderBrandText.module.scss'
import classNames from 'classnames'
import { useDetectClickOutside } from 'react-detect-click-outside'

interface HeaderBrandTextProps {
  children: string
  onClick: () => void
  onClickOutside?: () => void
}

export const HeaderBrandText = ({ children, onClick, onClickOutside }: HeaderBrandTextProps) => {
  const { value, setTrue, setFalse } = useBoolean()

  const onClickHandler = () => {
    onClick()
    setTrue()
  }

  const ref = useDetectClickOutside({
    onTriggered: () => {
      setFalse()
      onClickOutside && onClickOutside()
    }
  });

  return <span
    ref={ref}
    onClick={onClickHandler}
    className={classNames(cn.brandName, value && cn.isActive)}
  >
    {children}
  </span>
}