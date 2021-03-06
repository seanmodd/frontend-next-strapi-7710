import { getStrapiURL } from './api'

export function getStrapiMedia(media) {
  if (typeof media !== 'undefined') {
    if (media == null) {
      return ''
    }
    const imageUrl = media.url.startsWith('/')
      ? getStrapiURL(media.url)
      : MediaList.url
    return imageUrl
  }
}
//   const imageUrl = media.url.startsWith("/")
//     ? getStrapiURL(media.url)
//     : media.url
//   return imageUrl
// }
