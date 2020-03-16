import addQueryString from './addQueryString'

test('query string', () => {
  const url = 'https://www.test.com'
  expect(addQueryString(url, {
    a: 1,
    b: 2,
  })).toBe('https://www.test.com?a=1&b=2')
})
