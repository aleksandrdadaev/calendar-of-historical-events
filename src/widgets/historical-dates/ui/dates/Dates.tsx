import { FC, useMemo } from 'react'

import { dates } from '@/shared/config/historical-dates.config'

import { sortDatesByYear } from '../../lib/utils/sort-dates-by-year.util'

import styles from './Dates.module.scss'

const Dates: FC<{ activeIndex: number }> = ({ activeIndex }) => {
	return <div className={styles.wrapper}>Dates</div>
}

export default Dates
