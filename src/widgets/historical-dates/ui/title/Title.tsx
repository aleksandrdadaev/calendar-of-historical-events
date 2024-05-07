import { FC } from 'react'

import styles from './Title.module.scss'

const Title: FC = () => {
	return (
		<div className={styles.wrapper}>
			<span className={styles.gradient} />
			<h1 className={styles.title}>Исторические даты</h1>
		</div>
	)
}

export default Title
