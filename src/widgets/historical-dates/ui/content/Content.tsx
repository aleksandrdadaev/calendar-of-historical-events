import { FC, useState } from 'react'

import Dates from '../dates/Dates'
import HorizontalLine from '../lines/horizontal-line/HorizontalLine'
import SliderWrapper from '../slider-wrapper/SliderWrapper'

import styles from './Content.module.scss'

const Content: FC = () => {
	const [activeIndex, setActiveIndex] = useState<number>(0)
	return (
		<div className={styles.wrapper}>
			<HorizontalLine />
			<Dates activeIndex={activeIndex} />
			<SliderWrapper
				setActiveIndex={setActiveIndex}
				activeIndex={activeIndex}
			/>
		</div>
	)
}

export default Content
