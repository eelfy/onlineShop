import Carousel from 'react-multi-carousel';
import cn from './MainPageSlider.module.scss'
import "react-multi-carousel/lib/styles.css";
import { useEffect, useState } from 'react';
import { Banner } from '../../../shared/lib';
import { Api, ApiUrl } from '../../../shared/api/Api';
import classNames from 'classnames';
import { useMediaQuery } from 'usehooks-ts';
import { MOBILE_QUERY } from '../../../shared/config';

// @ts-expect-error afs
const CustomDot = ({ onClick, active }) => {
  const isMobile = useMediaQuery(MOBILE_QUERY)
  const size = () => {
    if (isMobile) {
      return {
        width: active ? '8px' : "6px",
        height: active ? '8px' : "6px",
        marginInline: '3.5px',
      }
    }
    return {
      width: active ? '16px' : "10px",
      height: active ? '16px' : "10px",
      marginInline: '10px',
    }
  }
  return (
    <div
      style={{
        background: active ? "#1E2722" : "#D9D9D9",
        borderRadius: '50%',
        cursor: 'pointer',
        marginBlock: 'auto',
        ...size()
      }}
      onClick={() => onClick()}
    />
  );
};

export const MainPageSlider = () => {
  const isMobile = useMediaQuery(MOBILE_QUERY)

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
        paddingBottom: isMobile ? '30px' : '50px',
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
        autoPlay
        autoPlaySpeed={5000}
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
            return <div className={classNames(cn.slide, banner.link && cn.pointer)}
              onClick={() => {
                if (banner.link) window.open(banner.link, '_blank')
              }}
              key={banner.id} >
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
