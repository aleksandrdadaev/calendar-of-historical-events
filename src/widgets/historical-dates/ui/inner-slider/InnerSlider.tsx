import { FC } from 'react'
import 'swiper/css'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { IHistoricalEvent } from '@/shared/model/types/historical-events.type'

import Slide from '../slide/Slide'

import styles from './InnerSlider.module.scss'
import InnerSliderButtons from './inner-slider-buttons/InnerSliderButtons'

const InnerSlider: FC<{ events: IHistoricalEvent[] }> = ({ events }) => {
	return (
		<div className={styles.wrapper}>
			<Swiper
				modules={[Navigation]}
				slidesPerView={'auto'}
				slidesPerGroup={1}
				spaceBetween={80}
				grabCursor
				navigation={{
					prevEl: `.inner-button-prev`,
					nextEl: `.inner-button-next`,
				}}
				className={styles.slider}
			>
				{events.map(event => (
					<SwiperSlide key={event.text} className={styles.slide}>
						<Slide slide={event} />
					</SwiperSlide>
				))}
				<InnerSliderButtons />
			</Swiper>
		</div>
	)
}

export default InnerSlider
