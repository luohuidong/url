import formatUrl from './index'

test('formatUrl', () => {
  const urlObject = {
    protocol: 'https',
    hostname: 'www.test.com',
    pathname: '/'
  }
  expect(formatUrl(urlObject)).toBe('https://www.test.com/')
})

test('formatUrl with query', () => {
  const urlObject = {
    protocol: 'https',
    hostname: 'www.test.com',
    pathname: '/',
    query: {
      a: 1,
      b: 2
    }
  }
  expect(formatUrl(urlObject)).toBe('https://www.test.com/?a=1&b=2')
})

test('formatUrl with query and search', () => {
  const urlObject = {
    protocol: 'https',
    hostname: 'www.test.com',
    pathname: '/',
    query: {
      a: 1,
      b: 2
    },
    search: '?a=44&c=22'
  }
  expect(formatUrl(urlObject)).toBe('https://www.test.com/?a=44&c=22')
})

