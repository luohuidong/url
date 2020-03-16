import getProtocal from './getProtocal'
import getSearch from './getSearch'
import getQuery from './getQuery'

interface ReturnData {
  protocal: string;
  host?: string;
  hostname?: string;
  port?: string;
  pathname?: string;
  search: string;
  query: {
    [index: string]: string;
  };
  hash?: string;
}

export default function parse(url: string): ReturnData {
  return {
    protocal: getProtocal(url),
    search: getSearch(url),
    query: getQuery(url)
  }
}
