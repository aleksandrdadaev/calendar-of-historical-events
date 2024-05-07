import { FC } from 'react'

import styles from './Lines.module.scss'

const Lines: FC = () => {
	return (
		<div className={styles.wrapper}>
			<span className={styles.span} />
			<span className={styles.span} />
		</div>
	)
}

export default Lines
