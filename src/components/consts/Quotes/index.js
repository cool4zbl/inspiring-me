import moment from 'moment'
import raw from 'raw-loader!./quote.txt'

let quotes = raw.split('\n')
const today = moment()
const BEGIN_DATE = moment('2017-03-12')
const days = today.diff(BEGIN_DATE, 'days')

// FIXME:
while (quotes.length <= days + 1) {
  quotes.splice(-2, 0, '我爱你。😘')
}
const Quotes = quotes

export default Quotes
