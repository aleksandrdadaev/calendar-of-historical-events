import { FC, useContext, useEffect, useState } from 'react'

import { HistoricalDatesContent } from '@/shared/lib/utils/historical-dates-context.util'

import { useSliderBulletsRotate } from '../../lib/hooks/useSliderBulletsRotate'

import styles from './SliderBullets.module.scss'
import Bullet from './bullet/Bullet'

const SliderBullets: FC<{ activeIndex: number }> = ({ activeIndex }) => {
	const dates = useContext(HistoricalDatesContent)
	const { radius, rotate } = useSliderBulletsRotate({
		length: dates.length,
		newIndex: activeIndex,
	})
	return (
		<div
			className={styles.wrapper}
			style={{
				transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
			}}
		>
			<div className={styles.circle} />

			{dates.map((datesBlock, index) => (
				<Bullet
					key={datesBlock.title}
					index={index}
					title={datesBlock.title}
					x={
						530 / 2 + radius * Math.sin(((Math.PI * 2) / dates.length) * index)
					}
					y={
						530 / 2 + radius * Math.cos(((Math.PI * 2) / dates.length) * index)
					}
					rotate={-rotate}
					disabled={index === activeIndex}
				/>
			))}
		</div>
	)
}

export default SliderBullets
