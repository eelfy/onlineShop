
import { MainPageSection } from '../../../features/MainPageSection';
import { MainPageSlider } from '../../../features/MainPageSlider';
import cn from './Main.module.scss'

export const Main = () => {
  return <div className={cn.wrapper}>
    <div className={cn.sliderWrapper}>
      <MainPageSlider />
    </div>

    <MainPageSection title='новые поступления' />
    <MainPageSection title='новые поступления' />
  </div>
}