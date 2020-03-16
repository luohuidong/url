import getSearch from './getSearch'

test('url query object', () => {
  const url = 'https://user:pass@sub.example.com:8080/p/a/t/h?channel=teampro&platform=darwin#hash'

  expect(getSearch(url)).toBe('?channel=teampro&platform=darwin')
})
