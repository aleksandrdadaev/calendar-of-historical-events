import { FC, useContext } from 'react'

import { HistoricalDatesContent } from '@/shared/lib/utils/historical-dates-context.util'

import { sortDatesByYear } from '../../lib/utils/sort-dates-by-year.util'

import styles from './Dates.module.scss'
import Number from './number/Number'

const Dates: FC<{ activeIndex: number }> = ({ activeIndex }) => {
	const dates = useContext(HistoricalDatesContent)
	const sortArray = sortDatesByYear(dates[activeIndex].events)
	return (
		<div className={styles.wrapper}>
			<Number number={sortArray[0].year} />
			{'\u00A0'}
			{'\u00A0'}
			<Number number={sortArray[sortArray.length - 1].year} />
		</div>
	)
}

export default Dates
