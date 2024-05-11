import { FC } from 'react'
import { useSwiper } from 'swiper/react'

import { IBulletProps } from '@/widgets/historical-dates/model/types/bullet-props.type'

import styles from './Bullet.module.scss'

const Bullet: FC<IBulletProps> = ({ index, title, x, y, rotate, disabled }) => {
	const swiper = useSwiper()
	return (
		<button
			className={styles.wrapper}
			style={{
				bottom: y,
				left: x,
				transform: `translate(-50%, 50%) rotate(${rotate}deg)`,
			}}
			onClick={() => swiper.slideTo(index)}
			disabled={disabled}
		>
			<div className={styles.circle} />
			<span className={styles.number}>{index + 1}</span>
			<span className={styles.title}>{title}</span>
		</button>
	)
}

export default Bullet
