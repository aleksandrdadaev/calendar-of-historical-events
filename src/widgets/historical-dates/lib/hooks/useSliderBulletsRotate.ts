import { useEffect, useState } from 'react'

import { ISliderBulletsRotateProps } from '../../model/types/slider-bullets-rotate-props.type'

export const useSliderBulletsRotate = ({
	newIndex,
	length,
}: ISliderBulletsRotateProps) => {
	const [rotate, setRotate] = useState<number>(30)
	const [currentIndex, setCurrentIndex] = useState<number>(newIndex + 1)

	const radius: number = 265

	const step: number = 360 / length

	useEffect(() => {
		const subtraction = Math.abs(currentIndex - (newIndex + 1))
		const difference =
			subtraction <= length / 2 ? subtraction : length - subtraction

		let leftReducer = newIndex + 1
		for (let i = 0; i < difference; i++) {
			leftReducer -= 1
			if (leftReducer === 0) leftReducer = length
		}

		setCurrentIndex(newIndex + 1)
		setRotate(prev => {
			const degree = step * difference
			return leftReducer === currentIndex ? (prev -= degree) : (prev += degree)
		})
	}, [newIndex])

	return {
		rotate,
		radius,
	}
}
