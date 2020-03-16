interface Query {
  [index: string]: string | number;
}

export default function addQueryString(url: string, query: Query) {
  const keys = Object.keys(query)

  keys.forEach((key, index) => {
    let divider = '&'

    if (index === 0) {
      divider = '?'
    }

    url = `${url}${divider}${key}=${query[key]}`
  })

  return url
}
