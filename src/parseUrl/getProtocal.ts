export default function getProtocal(url: string) {
  const regexp = /^(.*?:)/
  const result = regexp.exec(url)
  if (!result) {
    return ''
  }

  return result[1]
}
