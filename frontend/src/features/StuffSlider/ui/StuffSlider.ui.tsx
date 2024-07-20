import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { StuffBlock } from "../../StuffBlock";
import { Pagination } from "../../../entities/Pagination";
import { useEffect, useMemo, useRef, useState } from "react";
import { Api } from "../../../shared/api/Api";
import { Product, SortOrder } from "../../../shared/lib";
import { useBoolean, useMediaQuery } from "usehooks-ts";
import { Loader } from "../../../shared/ui";
import { MOBILE_QUERY } from "../../../shared/config";

// @ts-expect-error afs
const CustomButtonGroupAsArrows = ({ next, previous, carouselState, products }) => {
  const isMobile = useMediaQuery(MOBILE_QUERY)
  const { totalItems, currentSlide, slidesToShow } = carouselState;

  const current = useMemo(() => {
    const maxElementsByWindowSize = isMobile ? 2 : 5
    const count = currentSlide

    if (products.length <= maxElementsByWindowSize) {
      return products.length
    }

    if (isMobile) {
      return count + 2
    }

    return count + 4
  }, [currentSlide, isMobile, products.length])

  return (
    <Pagination onNext={() => next(slidesToShow)} onPrev={previous} current={current} total={totalItems} />
  );
};

const preventDefault = (e: TouchEvent) => {
  e.preventDefault()
  return false;
}

export const StuffSlider = ({ cname }: { cname: string }) => {
  const ref = useRef<HTMLDivElement>(null)
  const [products, setProducts] = useState<Product[]>()
  const { value: isLoading, setFalse: stopLoading, setTrue: startLoading } = useBoolean()

  useEffect(() => {
    const element = ref.current
    if (!element) return
    element.addEventListener('touchmove', preventDefault, { passive: false })

    return () => {
      if (!ref.current) return
      ref.current.addEventListener('touchmove', preventDefault, { passive: false })
    };
  }, [ref]);

  useEffect(() => {
    startLoading()
    Api.getProductsInCategory({
      cname,
      limit: 15,
      offset: 0,
      ordered: SortOrder.CREATED
    }).then(value => {
      setProducts(value.products)
    }).finally(() => {
      stopLoading()
    })

  }, [cname]);

  const renderContent = () => {
    if (isLoading) return <Loader isFullSize />
    if (!products) return null

    return (
      <Carousel
        arrows={false}
        // @ts-expect-error afs
        customButtonGroup={<CustomButtonGroupAsArrows products={products} />}
        containerClass="container"
        draggable={false}
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
        {products.map(({ images, ...other }, index) => {
          return <StuffBlock
            {...other}
            isStatic
            image={images[0]}
            key={index}
          />
        })}
      </Carousel>
    );
  }

  return (
    <div
      ref={ref}
      style={{
        paddingBottom: '30px',
        position: 'relative'
      }}
    >
      {renderContent()}
    </div>
  );
};