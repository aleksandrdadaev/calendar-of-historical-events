import { FC } from 'react'

import styles from './HistoricalDates.module.scss'
import MainSlider from './main-slider/MainSlider'
import Title from './title/Title'
import VerticalLine from './vertical-line/VerticalLine'

export const HistoricalDates: FC = () => {
	return (
		<section className={styles.wrapper}>
			<VerticalLine />
			<Title />
			<MainSlider />
		</section>
	)
}
