import { DateTime } from 'luxon'

const DateDisplay = ({ date }) => {
  return new DateTime.fromJSDate(new Date(date)).toFormat('dd-MM-yyyy')
}

export default DateDisplay
