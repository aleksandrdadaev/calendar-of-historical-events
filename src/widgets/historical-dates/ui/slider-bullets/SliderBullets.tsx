import { FC, useContext } from 'react'

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
			// Устанавливаем вращение колеса
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
					// Формулы для расположения точек на окружности с одинаковым расстоянием между собой (не зависит от количества)
					x={
						530 / 2 + radius * Math.sin(((Math.PI * 2) / dates.length) * index)
					}
					y={
						530 / 2 + radius * Math.cos(((Math.PI * 2) / dates.length) * index)
					}
					// Для самих точек устанавливаем вращением в обратную сторону, чтобы текст не вращался
					rotate={-rotate}
					disabled={index === activeIndex}
				/>
			))}
		</div>
	)
}

export default SliderBullets
