import { FC } from 'react'

import styles from './HistoricalDates.module.scss'
import Lines from './lines/Lines'
import Title from './title/Title'

export const HistoricalDates: FC = () => {
	return (
		<section className={styles.wrapper}>
			<Lines />
			<Title />
		</section>
	)
}
