import addQueryString from './addQueryString'

interface UrlObject {
  protocol: string;
  hostname: string;
  port?: string;
  pathname: string;
  search?: string;
  query?: {
    [index: string]: string | number
  };
  hash?: string;
}

export default function formatUrl(urlObject: UrlObject) {
  const { protocol, hostname, port, pathname, search, query, hash } = urlObject

  let url = `${protocol}://${hostname}`

  if (port) {
    url = `${url}:${port}`
  }

  if (pathname) {
    url = `${url}${pathname}`
  }

  if (search) {
    url = `${url}${search}`
  } else {
    if (query) {
      url = addQueryString(url, query)
    }
  }

  if (hash) {
    url = `${url}#${hash}`
  }

  return url
}
