import clsx from 'clsx'
import { FC } from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { sortDatesByYear } from '../../lib/utils/sort-dates-by-year.util'
import { IInternalSliderProps } from '../../model/types/internal-slider-props.type'
import EventSlide from '../event-slide/EventSlide'

import styles from './InternalSlider.module.scss'
import Buttons from './buttons/Buttons'

const InternalSlider: FC<IInternalSliderProps> = ({ active, events }) => {
	return (
		<div
			className={clsx(styles.wrapper, {
				[styles.active]: active,
			})}
		>
			<Swiper
				modules={[Navigation]}
				slidesPerView={'auto'}
				slidesPerGroup={1}
				spaceBetween={80}
				grabCursor
				navigation={{
					prevEl: '.internal-slider-prev',
					nextEl: '.internal-slider-next',
				}}
				className={styles.slider}
			>
				{sortDatesByYear(events).map(event => (
					<SwiperSlide key={event.text} className={styles.slide}>
						<EventSlide event={event} />
					</SwiperSlide>
				))}
				<Buttons />
			</Swiper>
		</div>
	)
}

export default InternalSlider
