import { FC, ReactNode } from 'react'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide, SwiperProps } from 'swiper/react'
import { SwiperOptions } from 'swiper/types'
import 'swiper/css'
import 'swiper/css/autoplay'

type SlidesCountType = [number?, number?, number?, number?, number?]
type IAutoscrollSwiperProps = {
  slides: ReactNode[]
  slidesCount?: SlidesCountType
} & Omit<SwiperProps, 'modules' | 'onSwiper' | 'breakpoints' | 'onActiveIndexChange'>

const getColumns = (length: number, slidesCount: SlidesCountType) => {
  const breakpoints: { [width: number]: SwiperOptions } = {
    0: {
      slidesPerView: slidesCount[0],
    },
    400: {
      slidesPerView: slidesCount[1],
    },
    596: {
      slidesPerView: slidesCount[2],
    },
    992: {
      slidesPerView: slidesCount[3],
    },
  }

  if (slidesCount?.[4] && length >= 4) {
    breakpoints[1292] = {
      slidesPerView: slidesCount[4],
    }
  }

  if (length <= 3) {
    delete breakpoints[992]
  }
  if (length <= 2) {
    delete breakpoints[596]
  }
  if (length <= 1) {
    delete breakpoints[400]
  }

  return breakpoints
}

const AutoscrollSwiper: FC<IAutoscrollSwiperProps> = ({
  slides,
  slidesCount = [1, 1.2, 2, 3],
  ...props
}) => (
  <Swiper
    allowTouchMove={false}
    autoplay={{ delay: 3000, disableOnInteraction: false }}
    breakpoints={getColumns(slides?.length, slidesCount)}
    loop={true}
    modules={[Autoplay]}
    spaceBetween={20}
    speed={1500}
    {...props}
  >
    {slides?.map((slide, i) => <SwiperSlide key={i}>{slide}</SwiperSlide>)}
  </Swiper>
)

export default AutoscrollSwiper
