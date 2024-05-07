import { FC } from 'react'
import 'swiper/css'
import 'swiper/css/virtual'
import { Virtual } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { IHistoricalEvent } from '@/shared/model/types/historical-events.type'

import Slide from '../slide/Slide'

import styles from './InnerSlider.module.scss'

const InnerSlider: FC<{ events: IHistoricalEvent[] }> = ({ events }) => {
	return (
		<Swiper modules={[Virtual]} virtual>
			{events.map((event, index) => (
				<SwiperSlide key={event.text} virtualIndex={index}>
					<Slide slide={event} />
				</SwiperSlide>
			))}
		</Swiper>
	)
}

export default InnerSlider
