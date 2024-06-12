import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { StuffBlock } from "../../StuffBlock";
import { Pagination } from "../../../entities/Pagination";
import { useEffect, useState } from "react";
import { Api } from "../../../shared/api/Api";
import { Product, SortOrder } from "../../../shared/lib";

// @ts-expect-error afs
const CustomButtonGroupAsArrows = ({ next, previous, carouselState }) => {
  const { totalItems, currentSlide, slidesToShow } = carouselState;

  return (
    <Pagination onNext={() => next(slidesToShow)} onPrev={previous} current={currentSlide + 1} total={totalItems} />
  );
};

export const StuffSlider = ({ cname }: { cname: string }) => {

  const [products, setProducts] = useState<Product[]>()

  useEffect(() => {

    Api.getProductsInCategory({
      cname,
      limit: 15,
      offset: 0,
      ordered: SortOrder.CREATED
    }).then(value => {
      setProducts(value.products)
    })

  }, [cname]);

  if (!products) return null

  return (
    <div
      style={{
        paddingBottom: '30px',
        position: 'relative'
      }}
    >
      <Carousel
        arrows={false}
        // @ts-expect-error afs
        customButtonGroup={<CustomButtonGroupAsArrows />}
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
        {products.map(({ name, brand, min_price, photo1_url, id }, index) => {
          return <StuffBlock productId={id} name={brand} description={name} price={String(min_price)} imageUrl={photo1_url} key={index} />
        })}
      </Carousel>
    </div>
  );
};