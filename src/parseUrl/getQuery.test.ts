import getQuery from './getQuery'

test('url query object', () => {
  const url = 'https://user:pass@sub.example.com:8080/p/a/t/h?channel=teampro&platform=darwin#hash'

  expect(getQuery(url)).toEqual({
    channel: 'teampro',
    platform: 'darwin',
  })
})

test('url query object: https://www.test.com/a?b=2&c=3', () => {
  const url = 'https://www.test.com/a?b=2&c=3'

  expect(getQuery(url)).toEqual({
    b: '2',
    c: '3',
  })
})
