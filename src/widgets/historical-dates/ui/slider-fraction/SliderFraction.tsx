import clsx from 'clsx'
import { FC } from 'react'

import styles from './SliderFraction.module.scss'

const SliderFraction: FC = () => {
	return <span className={clsx(styles.wrapper, 'main-slider-fraction')} />
}

export default SliderFraction
