import getProtocal from './getProtocal'

test('https protocal', () => {
  const url = 'https://user:pass@sub.example.com:8080/p/a/t/h?channel=teampro&platform=darwin#hash'
  expect(getProtocal(url)).toBe('https:')
})

test('http protocal', () => {
  const url = 'http://user:pass@sub.example.com:8080/p/a/t/h?channel=teampro&platform=darwin#hash'
  expect(getProtocal(url)).toBe('http:')
})
