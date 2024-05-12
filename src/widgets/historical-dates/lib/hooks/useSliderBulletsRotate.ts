import { useEffect, useState } from 'react'

import { ISliderBulletsRotateProps } from '../../model/types/slider-bullets-rotate-props.type'

export const useSliderBulletsRotate = ({
	newIndex,
	length,
}: ISliderBulletsRotateProps) => {
	// Поворот колеса в градусах (изначально сдвиг на 30)
	const [rotate, setRotate] = useState<number>(30)
	// Индекс текущего слайда
	const [currentIndex, setCurrentIndex] = useState<number>(newIndex + 1)
	// Радиус колеса
	const radius: number = 265
	// Шаг между точками в градусах
	const step: number = 360 / length

	useEffect(() => {
		// Модуль вычитания индекса нового активного слайда из индекса текущего слайда
		const subtraction = Math.abs(currentIndex - (newIndex + 1))
		// Наименьшее количество шагов от текущего слайда к новому
		const difference =
			subtraction <= length / 2 ? subtraction : length - subtraction

		// Цикл для определения направления вращения колеса
		let reducer = newIndex + 1
		for (let i = 0; i < difference; i++) {
			reducer -= 1
			if (reducer === 0) reducer = length
		}
		// Меняем текущий индекс на новый
		setCurrentIndex(newIndex + 1)
		// Устанавливаем вращение колеса
		setRotate(prev => {
			// На сколько градусов вращать
			const degree = step * difference
			// По результату цикла, либо отнимаем от текущего вращения n градусов, либо прибавляем
			return reducer === currentIndex ? (prev -= degree) : (prev += degree)
		})
	}, [newIndex])

	return {
		rotate,
		radius,
	}
}
