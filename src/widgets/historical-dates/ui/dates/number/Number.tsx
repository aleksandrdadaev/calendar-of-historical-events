import { TweenLite } from 'gsap'
import { FC, useEffect, useState } from 'react'

const objectValue = {
	value: 0,
}

const Number: FC<{ number: number }> = ({ number }) => {
	const [total, setTotal] = useState<number>(number)
	useEffect(() => {
		TweenLite.to(objectValue, 1, {
			value: number,
			roundProps: 'value',
			onUpdate: () => setTotal(objectValue.value),
		})
	}, [number])
	return <span>{total}</span>
}

export default Number
