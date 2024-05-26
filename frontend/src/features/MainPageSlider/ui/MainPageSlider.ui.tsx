import Carousel from 'react-multi-carousel';
import cn from './MainPageSlider.module.scss'
import classNames from "classnames";
import "react-multi-carousel/lib/styles.css";




const slides = [
  'first', 'second', 'last'
]
// @ts-expect-error afs
const CustomDot = ({ onClick, active, index, carouselState }) => {
  return (
    <div
      style={{
        background: active ? "#00000080" : "#000",
        width: '50px',
        height: '2px',
        borderRadius: '10px',
        marginInline: '5px',
        cursor: 'pointer',
      }}
      onClick={() => onClick()}
    />
  );
};

export const MainPageSlider = () => {
  return (
    <div
      style={{
        paddingBottom: '30px',
        position: 'relative'
      }}
    >
      <Carousel
        customLeftArrow={<>{null}</>}
        customRightArrow={<>{null}</>}
        // @ts-expect-error afs
        customDot={<CustomDot />}
        additionalTransfrom={0}
        autoPlaySpeed={3000}
        centerMode
        className=""
        containerClass="container"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024
            },
            items: 1
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0
            },
            items: 1
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464
            },
            items: 1
          }
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {
          slides.map((slide, index) => {
            return <div className={cn.slide} key={index}>
              <h3>{slide}</h3>
            </div>
          })
        }
      </Carousel>
    </div>
  );
}
