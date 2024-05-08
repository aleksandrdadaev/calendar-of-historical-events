import { IHistoricalEvent } from '@/shared/model/types/historical-events.type'

export const sortDatesByYear = (
	events: IHistoricalEvent[]
): IHistoricalEvent[] =>
	events.slice().sort((a, b) => (a.year > b.year ? 1 : -1))
