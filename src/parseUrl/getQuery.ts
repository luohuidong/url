export default function getQuery(url: string) {
  let regexp = /\?(.*)/

  if (url.includes('#')) {
    regexp = /\?(.*)#/
  }

  const result = regexp.exec(url)

  if (!result) {
    return {}
  }

  const queryString = result[1]

  const query: {
    [index: string]: string
  } = {}

  queryString.split('&').forEach((element) => {
    const tmpObj = element.split('=')
    query[tmpObj[0]] = tmpObj[1]
  })

  return query
}
