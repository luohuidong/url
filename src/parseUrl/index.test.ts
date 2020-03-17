import parse from './index'

test('parse url', () => {
  expect(parse('https://www.test.com/a?b=2&c=3')).toEqual({
    protocal: 'https:',
    search: '?b=2&c=3',
    query: {
      b: '2',
      c: '3'
    }
  })
})
