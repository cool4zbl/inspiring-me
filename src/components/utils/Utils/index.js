// import 'whatwg-fetch'

const QINIU = 'http://osvuk41lq.bkt.clouddn.com'
const IMG_SUFFIX = '?imageMogr2/thumbnail/x640/format/webp/blur/1x0/quality/98|imageslim'

// const DEFAULT_BG_IMG = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg'

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
  let randomInt = getRandomIntInclusive(312, 319)
  return fetchImg( '0' + randomInt).then( v => v )
}

function fetchImg (num) {
  return fetch(`${QINIU}/IMG_${num}.JPG${IMG_SUFFIX}`).then(function(response) {
    if(response.ok) {
      return response.blob()
    }
    throw new Error('Network response was not ok.')
  }).then(function(myBlob) { 
    var objectURL = URL.createObjectURL(myBlob)
    return objectURL
  }).catch(function(error) {
    console.log('There has been a problem with your fetch operation: ' + error.message);
    return false
  })
}

const Utils = {
  genRandomBg,
}

export default Utils

