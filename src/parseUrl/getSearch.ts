export default function getSearch(url: string) {
  let regexp = /(\?.*)/

  if (url.includes('#')) {
    regexp = /(\?.*)#/
  }

  const result = regexp.exec(url)

  if (!result) {
    return ''
  }

  return result[1]
}

