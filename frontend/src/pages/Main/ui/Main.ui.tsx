
import { observer } from 'mobx-react-lite';
import { MainPageSection } from '../../../features/MainPageSection';
import { MainPageSlider } from '../../../features/MainPageSlider';
import cn from './Main.module.scss'
import { useStore } from '../../../entities/Store';

export const Main = observer(() => {
  const { MainStore: { categories } } = useStore()

  return <div className={cn.wrapper}>
    <div className={cn.sliderWrapper}>
      <MainPageSlider />
    </div>

    <div className={cn.content}>
      {categories && Object.entries(categories).map(([key], index) => {
        return <MainPageSection title={key} key={index} />
      })}
    </div>
  </div>
})