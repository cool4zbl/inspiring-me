import raw from 'raw-loader!./quote.txt'

let quotes = raw.split('\n') 

// hack...
while (quotes.length <= 132) {
  quotes.splice(-2, 0, '我爱你。😘')
}
const Quotes = quotes

export default Quotes
