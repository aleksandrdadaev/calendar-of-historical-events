import { createContext } from 'react'

import { IHistoricalDatesBlock } from '@/shared/model/types/historical-dates.type'

export const HistoricalDatesContent = createContext<IHistoricalDatesBlock[]>([])
