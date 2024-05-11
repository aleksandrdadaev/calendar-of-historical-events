import clsx from 'clsx'
import { FC } from 'react'

import arrow from '@/shared/assets/icons/blue-arrow.svg'

import styles from './Buttons.module.scss'

const Buttons: FC = () => {
	return (
		<>
			<button
				className={clsx(styles.button, styles.prev, 'internal-slider-prev')}
			>
				<img src={arrow} alt='' className={styles.arrow} />
			</button>
			<button
				className={clsx(styles.button, styles.next, 'internal-slider-next')}
			>
				<img src={arrow} alt='' className={styles.arrow} />
			</button>
		</>
	)
}

export default Buttons
