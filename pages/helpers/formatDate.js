import moment from 'moment'

export default function formatDate (date) {
  const formattedDate = moment(date).format('l').toLowerCase()
  return formattedDate
}
