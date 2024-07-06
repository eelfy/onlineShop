import Carousel from 'react-multi-carousel';
import cn from './MainPageSlider.module.scss'
import "react-multi-carousel/lib/styles.css";
import { useEffect, useState } from 'react';
import { Banner } from '../../../shared/lib';
import { Api, ApiUrl } from '../../../shared/api/Api';

// @ts-expect-error afs
const CustomDot = ({ onClick, active }) => {
  return (
    <div
      style={{
        background: active ? "#1E2722" : "#D9D9D9",
        width: active ? '16px' : "10px",
        height: active ? '16px' : "10px",
        borderRadius: '50%',
        marginInline: '10px',
        cursor: 'pointer',
        marginBlock: 'auto'
      }}
      onClick={() => onClick()}
    />
  );
};

export const MainPageSlider = () => {
  const [banners, setBanners] = useState<Banner[]>()

  useEffect(() => {

    Api.getBanners().then(banners => {

      setBanners(banners)
    })
  }, []);

  if (!banners?.length) return

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
        showDots
        renderDotsOutside
        infinite
        containerClass="container"
        slidesToSlide={1}
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
        swipeable
      >
        {
          banners.map((banner) => {
            return <div className={cn.slide} key={banner.id} >
              <div className={cn.img} style={{
                backgroundImage: `url(${ApiUrl}/banner-photo?bid=${banner.id})`,
              }}></div>
            </div>
          })
        }
      </Carousel>
    </div>
  );
}
