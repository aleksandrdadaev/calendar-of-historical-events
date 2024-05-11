import { FC } from 'react'

import { HistoricalDates } from '@/widgets/historical-dates'

import { dates } from '@/shared/config/historical-dates.config'

export const Main: FC = () => {
	return (
		<main>
			<HistoricalDates datesBlocks={dates} />
		</main>
	)
}
