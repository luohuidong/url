import url from './index'

test('url', () => {
  expect(url.format({
    protocol: 'https',
    hostname: 'luohuidong.cn',
    pathname: '/'
  })).toBe('https://luohuidong.cn/')
})

test('url', () => {
  expect(url.format({
    protocol: 'https',
    hostname: 'luohuidong.cn',
    pathname: '/',
    query: {
      a: 'b',
      c: 'd'
    }
  })).toBe('https://luohuidong.cn/?a=b&c=d')
})
