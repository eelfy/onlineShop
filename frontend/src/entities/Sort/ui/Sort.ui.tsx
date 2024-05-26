import { useState } from "react";
import { SortOption } from "../../../shared/lib"
import cn from './Sort.module.scss'
import { Icon, IconName } from "../../../shared/ui";
import classNames from "classnames";
import { useDetectClickOutside } from "react-detect-click-outside";

interface SortProps {
  options: SortOption[]
}

export const Sort = ({ options }: SortProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(prev => !prev)

  const ref = useDetectClickOutside({ onTriggered: () => setIsOpen(false) });

  return <div className={cn.wrapper} onClick={toggleOpen} ref={ref}>
    <div className={classNames(cn.title, isOpen && cn.titleOpen)}>
      <span className={cn.titleName}>Сортировка</span>


      <Icon width={13} heigh={8} name={IconName.ArrowDown} isRotated={isOpen} />
    </div>

    <div className={classNames(cn.modal, isOpen && cn.modalOpen)}>
      {options.map(({ title, value }) => {
        return <div key={value} className={cn.option} onClick={() => console.log(title)}> {title}</div>
      })}
    </div>
  </div >
}