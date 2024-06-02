import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { StuffBlock } from "../../StuffBlock";
import { Pagination } from "../../../entities/Pagination";
import { useEffect, useRef } from "react";

// @ts-expect-error afs
const CustomButtonGroupAsArrows = ({ next, previous, carouselState }) => {
  const { totalItems, currentSlide, slidesToShow } = carouselState;
  console.log(carouselState);

  return (
    // картошка багает пагинация
    <Pagination onNext={() => next(slidesToShow)} onPrev={previous} current={currentSlide} total={totalItems} />
  );
};

export const StuffSlider = () => {
  // debugger
  const ref = useRef<HTMLDivElement>(null)

  const myObserver = new ResizeObserver(
    (entries: ResizeObserverEntry[], observer: ResizeObserver) => {
      console.log(entries[0].contentBoxSize);
    });

  useEffect(() => {
    if (!ref.current) return
    const { current } = ref

    myObserver.observe(current)
    return () => {
      myObserver.unobserve(current)
    };
  }, []);

  ResizeObserver
  return (
    <div
      style={{
        paddingBottom: '30px',
        position: 'relative'
      }}
      ref={ref}
    >
      <Carousel
        arrows={false}
        // @ts-expect-error afs
        customButtonGroup={<CustomButtonGroupAsArrows />}
        containerClass="container"
        draggable
        renderButtonGroupOutside
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1180
            },
            items: 4
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0
            },
            items: 2
          },
          tablet: {
            breakpoint: {
              max: 1180,
              min: 464
            },
            items: 2
          }
        }}
        shouldResetAutoplay
        // slidesToSlide={5}
        swipeable
      >
        <StuffBlock name={"1"} description={"description"} price={"price"} />
        <StuffBlock name={"2"} description={"description"} price={"price"} />
        <StuffBlock name={"3"} description={"description"} price={"price"} />
        <StuffBlock name={"4"} description={"description"} price={"price"} />
        <StuffBlock name={"5"} description={"description"} price={"price"} />
        <StuffBlock name={"6"} description={"description"} price={"price"} />
        <StuffBlock name={"7"} description={"description"} price={"price"} />
        <StuffBlock name={"8"} description={"description"} price={"price"} />
        <StuffBlock name={"9"} description={"description"} price={"price"} />
        <StuffBlock name={"10"} description={"description"} price={"price"} />
        <StuffBlock name={"11"} description={"description"} price={"price"} />
        <StuffBlock name={"12"} description={"description"} price={"price"} />
        <StuffBlock name={"13"} description={"description"} price={"price"} />
        <StuffBlock name={"14"} description={"description"} price={"price"} />
        <StuffBlock name={"15"} description={"description"} price={"price"} />

      </Carousel>
    </div>
  );
};