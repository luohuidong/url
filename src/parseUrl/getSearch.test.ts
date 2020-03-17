import getSearch from './getSearch'

const url1 = 'https://user:pass@sub.example.com:8080/p/a/t/h?channel=teampro&platform=darwin#hash'
test(`url search ${url1}`, () => {
  expect(getSearch(url1)).toBe('?channel=teampro&platform=darwin')
})

const url2 = 'https://www.baidu.com?channel=teampro&platform=darwin'
test(`url search${url2}`, () => {
  expect(getSearch(url2)).toBe('?channel=teampro&platform=darwin')
})
