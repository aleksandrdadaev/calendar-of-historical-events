import { FC, useState } from 'react'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
// import 'swiper/css/pagination'
import 'swiper/css/virtual'
import { EffectFade, Navigation, Pagination, Virtual } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { dates } from '@/shared/config/historical-dates.config'

import Dates from '../dates/Dates'
import InnerSlider from '../inner-slider/InnerSlider'

import styles from './MainSlider.module.scss'
import MainSliderBullets from './main-slider-bullets/MainSliderBullets'
import stylesBullets from './main-slider-bullets/MainSliderBullets.module.scss'
import MainSliderButtons from './main-slider-buttons/MainSliderButtons'
import MainSliderFraction from './main-slider-fraction/MainSliderFraction'

const MainSlider: FC = () => {
	const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0)

	return (
		<div className={styles.wrapper}>
			<Dates activeIndex={activeSlideIndex} />
			<MainSliderBullets />
			<div className={styles.controls}>
				<MainSliderFraction active={activeSlideIndex} length={dates.length} />
				<MainSliderButtons />
			</div>
			<Swiper
				modules={[EffectFade, Virtual, Navigation, Pagination]}
				navigation={{
					prevEl: `.main-button-prev`,
					nextEl: `.main-button-next`,
				}}
				fadeEffect={{
					crossFade: true,
				}}
				effect='fade'
				speed={300}
				virtual
				pagination={{
					clickable: true,
					type: 'bullets',
					el: `.${stylesBullets.wrapper}`,
					renderBullet: (index, className) =>
						`<button class="${className}">
						<span class="${stylesBullets.circle}"></span>
						<span class="${stylesBullets.number}">${index + 1}</span>
					</button>`,
					bulletClass: stylesBullets.bullet,
					bulletActiveClass: stylesBullets.bulletActive,
				}}
				className={styles.slider}
				allowTouchMove={false}
				onSlideChange={swiper => {
					setActiveSlideIndex(swiper.activeIndex)
				}}
			>
				{dates.map((eventsBlock, index) => (
					<SwiperSlide
						key={eventsBlock.title || String(new Date())}
						virtualIndex={index}
					>
						<InnerSlider
							events={eventsBlock.events}
							active={index === activeSlideIndex}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}

export default MainSlider
