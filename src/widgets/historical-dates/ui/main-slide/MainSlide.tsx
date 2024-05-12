import clsx from 'clsx'
import { FC } from 'react'

import { IMainSlideProps } from '../../model/types/main-slide-props.type'
import InternalSlider from '../internal-slider/InternalSlider'

import styles from './MainSlide.module.scss'

const MainSlide: FC<IMainSlideProps> = ({ active, datesBlock }) => {
	return (
		<div
			className={clsx(styles.wrapper, {
				[styles.active]: active,
			})}
		>
			<h2 className={styles.title}>{datesBlock.title}</h2>
			<InternalSlider events={datesBlock.events} />
		</div>
	)
}

export default MainSlide
