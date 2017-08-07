import 'whatwg-fetch'

const img_w_h = '420x600'
const UNSPLASH_API = `https://source.unsplash.com/collection/527653/${img_w_h}`

const REG_M = /iphone|ipad|ios|android/i

const mediaQuery = () => {
  const isMobile =
    window.matchMedia('(max-width: 600px)').matches ||
    REG_M.test(window.navigator.userAgent)
  return isMobile
}

function fetchImg(num) {
  return fetch(UNSPLASH_API)
    .then(response => {
      if (response.ok) {
        return response.blob()
      }
      throw new Error('Network response was not ok.')
    })
    .then(myBlob => {
      const objectURL = URL.createObjectURL(myBlob)
      return objectURL
    })
    .catch(error => {
      console.log(
        'There has been a problem with your fetch operation: ' + error.message
      )
      return false
    })
}

const Utils = {
  fetchImg,
  mediaQuery,
}

export default Utils
