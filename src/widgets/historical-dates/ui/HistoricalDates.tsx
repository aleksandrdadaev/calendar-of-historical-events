import { FC } from 'react'

import { HistoricalDatesContent } from '@/shared/lib/utils/historical-dates-context.util'
import { IHistoricalDatesBlock } from '@/shared/model/types/historical-dates.type'

import styles from './HistoricalDates.module.scss'
import Content from './content/Content'
import VerticalLine from './lines/vertical-line/VerticalLine'
import Title from './title/Title'

export const HistoricalDates: FC<{ datesBlocks: IHistoricalDatesBlock[] }> = ({
	datesBlocks,
}) => {
	return (
		<section className={styles.wrapper}>
			<VerticalLine />
			<Title />
			<HistoricalDatesContent.Provider value={datesBlocks}>
				<Content />
			</HistoricalDatesContent.Provider>
		</section>
	)
}
