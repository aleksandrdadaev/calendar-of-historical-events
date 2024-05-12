import { FC, useContext } from 'react'
import 'swiper/css'
import 'swiper/css/effect-fade'
import { EffectFade, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { HistoricalDatesContent } from '@/shared/lib/utils/historical-dates-context.util'

import { addZeroToNumber } from '../../lib/utils/add-zero-to-number.util'
import { ISliderWrapperProps } from '../../model/types/slider-wrapper-props.type'
import InternalSlider from '../internal-slider/InternalSlider'
import MainSlide from '../main-slide/MainSlide'
import SliderBullets from '../slider-bullets/SliderBullets'
import SliderFraction from '../slider-fraction/SliderFraction'
import SliderNavigation from '../slider-navigation/SliderNavigation'

import styles from './SliderWrapper.module.scss'

const SliderWrapper: FC<ISliderWrapperProps> = ({
	setActiveIndex,
	activeIndex,
}) => {
	const dates = useContext(HistoricalDatesContent)
	return (
		<Swiper
			modules={[EffectFade, Navigation, Pagination]}
			navigation={{
				prevEl: `.main-slider-prev`,
				nextEl: `.main-slider-next`,
			}}
			pagination={{
				type: 'custom',
				el: '.main-slider-fraction',
				renderCustom: (swiper, current, total) =>
					`${addZeroToNumber(current)}/${addZeroToNumber(total)}`,
			}}
			fadeEffect={{
				crossFade: true,
			}}
			effect='fade'
			speed={300}
			allowTouchMove={false}
			onSlideChange={swiper => {
				setActiveIndex(swiper.activeIndex)
			}}
			className={styles.wrapper}
			wrapperClass={styles.slider}
		>
			{dates.map((datesBlock, index) => (
				<SwiperSlide key={datesBlock.title}>
					<MainSlide datesBlock={datesBlock} active={index === activeIndex} />
				</SwiperSlide>
			))}
			<div className={styles.navigation}>
				<div className={styles.controls}>
					<SliderFraction />
					<SliderNavigation />
				</div>
				<SliderBullets activeIndex={activeIndex} />
			</div>
		</Swiper>
	)
}

export default SliderWrapper
