import { FC, useState } from 'react'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/virtual'
import { EffectFade, Navigation, Pagination, Virtual } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { dates } from '@/shared/config/historical-dates.config'

import { addZeroToNumber } from '../../lib/utils/add-zero-to-number.util'
import InnerSlider from '../inner-slider/InnerSlider'

import styles from './MainSlider.module.scss'
import MainSliderButtons from './main-slider-buttons/MainSliderButtons'
import MainSliderFraction from './main-slider-fraction/MainSliderFraction'

const MainSlider: FC = () => {
	const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0)

	return (
		<div className={styles.wrapper}>
			<div className={styles.controls}>
				<MainSliderFraction />
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
				// autoHeight
				effect='fade'
				speed={300}
				virtual
				pagination={{
					type: 'custom',
					renderCustom: (swiper, current, total) =>
						`${addZeroToNumber(current)}/${addZeroToNumber(total)}`,
					el: '.main-slider-fraction',
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
