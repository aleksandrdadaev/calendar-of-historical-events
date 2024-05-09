import { FC } from 'react'

import { addZeroToNumber } from '@/widgets/historical-dates/lib/utils/add-zero-to-number.util'
import { ISliderFractionProps } from '@/widgets/historical-dates/model/types/slider-fraction-props.type'

import styles from './MainSliderFraction.module.scss'

const MainSliderFraction: FC<ISliderFractionProps> = ({ active, length }) => {
	return (
		<div
			className={styles.wrapper}
		>{`${addZeroToNumber(active + 1)}/${addZeroToNumber(length)}`}</div>
	)
}

export default MainSliderFraction
