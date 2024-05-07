import { FC } from 'react'

import styles from './HistoricalDates.module.scss'
import Lines from './lines/Lines'

export const HistoricalDates: FC = () => {
	return (
		<section className={styles.wrapper}>
			<Lines />
		</section>
	)
}
