// FIXME: cannot find proper import path of utils
import 'whatwg-fetch'
const DEFAULT_BG_IMG = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg'

const bgImgs = [
  DEFAULT_BG_IMG,
  'http://res.cloudinary.com/thedailybeast/image/upload/v1492110403/articles/2016/08/12/whose-gold-medal-is-worth-the-most/160811-glasser-olympic-medal-tease_mvemzf.jpg',
  'https://tvseriescritic.files.wordpress.com/2016/10/stranger-things-bicycle-lights-children.jpg'
]

const quotes = [{
  text: 'Thanks',
  author: 'ZBL'
}, {
  text: 'You made my day.',
  author: 'ZBL'
}, {
  text: 'Thinking of you.',
  author: 'ZBL'
}]

function getRandomIntInclusive (min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function genRandomBg () {
  const randomInt = getRandomIntInclusive(0, bgImgs.length - 1)
  const bgImgUrl = bgImgs[randomInt]
  return bgImgUrl
}


const Utils = {
  DEFAULT_BG_IMG,
  genRandomBg,
}

export default Utils

