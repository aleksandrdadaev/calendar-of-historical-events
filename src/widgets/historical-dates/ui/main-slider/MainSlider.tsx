import { FC, useState } from 'react'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/virtual'
import { EffectFade, Navigation, Virtual } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { dates } from '@/shared/config/historical-dates.config'

import InnerSlider from '../inner-slider/InnerSlider'

import styles from './MainSlider.module.scss'

const MainSlider: FC = () => {
	const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0)
	console.log(activeSlideIndex)
	return (
		<div className={styles.wrapper}>
			<Swiper
				modules={[EffectFade, Virtual, Navigation]}
				navigation
				fadeEffect={{
					crossFade: true,
				}}
				effect='fade'
				speed={300}
				virtual
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
