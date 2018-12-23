import { DateTime } from 'luxon'

const DateDisplay = ({ date }) =>
  new DateTime(new Date(date)).toFormat('dd-MM-yyyy')

export default DateDisplay
