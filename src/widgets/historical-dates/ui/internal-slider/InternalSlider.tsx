import { FC } from 'react'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import { FreeMode, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { sortDatesByYear } from '../../lib/utils/sort-dates-by-year.util'
import { IInternalSliderProps } from '../../model/types/internal-slider-props.type'
import EventSlide from '../event-slide/EventSlide'

import styles from './InternalSlider.module.scss'
import Buttons from './buttons/Buttons'

const InternalSlider: FC<IInternalSliderProps> = ({ events }) => {
	return (
		<div className={styles.wrapper}>
			<Swiper
				modules={[Navigation, FreeMode]}
				slidesPerView={'auto'}
				slidesPerGroup={1}
				spaceBetween={80}
				freeMode={false}
				grabCursor
				navigation={{
					prevEl: '.internal-slider-prev',
					nextEl: '.internal-slider-next',
				}}
				className={styles.slider}
				breakpoints={{
					320: {
						spaceBetween: 5,
						freeMode: {
							enabled: true,
						},
					},
					1440: {
						spaceBetween: 80,
						freeMode: {
							enabled: false,
						},
					},
				}}
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
