import clsx from 'clsx'
import { FC } from 'react'

import arrow from '@/shared/assets/icons/arrow.svg'

import styles from './MainSliderButtons.module.scss'

const MainSliderButtons: FC = () => {
	return (
		<div className={styles.wrapper}>
			<button className={clsx(styles.button, 'main-button-prev', styles.prev)}>
				<img src={arrow} alt='' className={styles.arrow} />
			</button>
			<button className={clsx(styles.button, 'main-button-next', styles.next)}>
				<img src={arrow} alt='' className={styles.arrow} />
			</button>
		</div>
	)
}

export default MainSliderButtons
