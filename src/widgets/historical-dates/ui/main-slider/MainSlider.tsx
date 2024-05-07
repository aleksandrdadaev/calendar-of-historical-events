import { FC } from 'react'
import 'swiper/css'
import 'swiper/css/virtual'
import { Virtual } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { dates } from '@/shared/config/historical-dates.config'

import InnerSlider from '../inner-slider/InnerSlider'

import styles from './MainSlider.module.scss'

const MainSlider: FC = () => {
	return (
		<div className={styles.wrapper}>
			<Swiper
				modules={[Virtual]}
				virtual
				className={styles.slider}
				allowTouchMove={false}
			>
				{dates.map((eventsBlock, index) => (
					<SwiperSlide
						key={eventsBlock.title || String(new Date())}
						virtualIndex={index}
					>
						<InnerSlider events={eventsBlock.events} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}

export default MainSlider
