export const addZeroToNumber = (number: number): string => {
	if (String(number).length > 1) return String(number)
	else return `0${number}`
}
