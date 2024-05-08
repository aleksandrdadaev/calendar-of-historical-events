import { FC } from 'react'

import { dates } from '@/shared/config/historical-dates.config'

import { sortDatesByYear } from '../../lib/utils/sort-dates-by-year.util'

import styles from './Dates.module.scss'

const Dates: FC<{ activeIndex: number }> = ({ activeIndex }) => {
	const sortArray = sortDatesByYear(dates[activeIndex].events)
	return (
		<div className={styles.wrapper}>
			<span>{sortArray[0].year}</span>
			{'\u00A0'}
			{'\u00A0'}
			<span>{sortArray[sortArray.length - 1].year}</span>
		</div>
	)
}

export default Dates
