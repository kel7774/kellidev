import moment from 'moment'

export default function formatDate (date) {
  const formattedDate = moment(date).format('dddd, MMMM Do, YYYY')
  return formattedDate
}
