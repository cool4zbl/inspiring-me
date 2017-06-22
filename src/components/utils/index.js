// FIXME: cannot find proper import path of utils
import moment from 'moment'

export const DEFAULT_BG_IMG = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg'

export function genRandomContent() {
  const bgImgUrl = DEFAULT_BG_IMG
  const quote = [
    'Thanks',
    'You made my day.',
    'Thinking of you.'
  ]
  return {
    bgImgUrl,
    quote
  }
}


