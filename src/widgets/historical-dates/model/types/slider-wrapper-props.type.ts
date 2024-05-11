import { Dispatch, SetStateAction } from 'react'

export interface ISliderWrapperProps {
	setActiveIndex: Dispatch<SetStateAction<number>>
	activeIndex: number
}
