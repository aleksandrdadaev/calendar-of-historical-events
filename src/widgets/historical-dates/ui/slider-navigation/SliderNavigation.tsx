import clsx from 'clsx'
import { FC } from 'react'

import arrow from '@/shared/assets/icons/arrow.svg'

import styles from './SliderNavigation.module.scss'

const SliderNavigation: FC = () => {
	return (
		<div className={styles.wrapper}>
			<button className={clsx(styles.button, styles.prev, 'main-slider-prev')}>
				<img src={arrow} alt='' className={styles.arrow} />
			</button>
			<button className={clsx(styles.button, styles.next, 'main-slider-next')}>
				<img src={arrow} alt='' className={styles.arrow} />
			</button>
		</div>
	)
}

export default SliderNavigation
