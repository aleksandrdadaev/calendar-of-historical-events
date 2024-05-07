import clsx from 'clsx'
import { FC } from 'react'

import arrow from '@/shared/assets/icons/blue-arrow.svg'

import styles from './InnerSliderButtons.module.scss'

const InnerSliderButtons: FC = () => {
	return (
		<div className={styles.wrapper}>
			<button className={clsx(styles.button, 'inner-button-prev', styles.prev)}>
				<img src={arrow} alt='' className={styles.arrow} />
			</button>
			<button className={clsx(styles.button, 'inner-button-next', styles.next)}>
				<img src={arrow} alt='' className={styles.arrow} />
			</button>
		</div>
	)
}

export default InnerSliderButtons
