import { FC } from 'react'

import { IHistoricalEvent } from '@/shared/model/types/historical-events.type'

import styles from './Slide.module.scss'

const Slide: FC<{ slide: IHistoricalEvent }> = ({ slide: { text, year } }) => {
	return (
		<div className={styles.wrapper}>
			<span className={styles.year}>{year}</span>
			<p className={styles.text}>{text}</p>
		</div>
	)
}

export default Slide
