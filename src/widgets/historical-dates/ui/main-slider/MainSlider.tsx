import { FC } from 'react'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'

import styles from './MainSlider.module.scss'

const MainSlider: FC = () => {
	return (
		<div className={styles.wrapper}>
			<Swiper className={styles.slider}>
				<SwiperSlide>SLide 1</SwiperSlide>
				<SwiperSlide>SLide 2</SwiperSlide>
				<SwiperSlide>SLide 3</SwiperSlide>
				<SwiperSlide>SLide 4</SwiperSlide>
			</Swiper>
		</div>
	)
}

export default MainSlider
