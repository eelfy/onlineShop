import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { StuffBlock } from "../../StuffBlock";
import { Pagination } from "../../../entities/Pagination";

// @ts-expect-error afs
const CustomButtonGroupAsArrows = ({ next, previous, carouselState }) => {
  const { totalItems, currentSlide } = carouselState;
  return (
    // картошка багает пагинация
    <Pagination onNext={next} onPrev={previous} current={currentSlide} total={totalItems} />
  );
};

export const StuffSlider = () => (
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
      customButtonGroup={<CustomButtonGroupAsArrows />}
      additionalTransfrom={0}
      autoPlaySpeed={3000}
      centerMode={false}
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
      renderButtonGroupOutside
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024
          },
          items: 5
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0
          },
          items: 5
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464
          },
          items: 5
        }
      }}
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay

      sliderClass=""
      slidesToSlide={5}
      swipeable
    >
      <StuffBlock name={"name"} description={"description"} price={"price"} />
      <StuffBlock name={"name"} description={"description"} price={"price"} />
      <StuffBlock name={"name"} description={"description"} price={"price"} />
      <StuffBlock name={"name"} description={"description"} price={"price"} />
      <StuffBlock name={"name"} description={"description"} price={"price"} />
      <StuffBlock name={"name"} description={"description"} price={"price"} />
      <StuffBlock name={"name"} description={"description"} price={"price"} />
      <StuffBlock name={"name"} description={"description"} price={"price"} />
      <StuffBlock name={"name"} description={"description"} price={"price"} />
      <StuffBlock name={"name"} description={"description"} price={"price"} />
    </Carousel>
  </div>
);