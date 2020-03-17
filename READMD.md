# url

The url module provides utilities for URL resolution and parsing.

## The structure of url

┌────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                              href                                              │
├──────────┬──┬─────────────────────┬────────────────────────┬───────────────────────────┬───────┤
│ protocol │  │        auth         │          host          │           path            │ hash  │
│          │  │                     ├─────────────────┬──────┼──────────┬────────────────┤       │
│          │  │                     │    hostname     │ port │ pathname │     search     │       │
│          │  │                     │                 │      │          ├─┬──────────────┤       │
│          │  │                     │                 │      │          │ │    query     │       │
"  https:   //    user   :   pass   @ sub.example.com : 8080   /p/a/t/h  ?  query=string   #hash "
│          │  │          │          │    hostname     │ port │          │                │       │
│          │  │          │          ├─────────────────┴──────┤          │                │       │
│ protocol │  │ username │ password │          host          │          │                │       │
├──────────┴──┼──────────┴──────────┼────────────────────────┤          │                │       │
│   origin    │                     │         origin         │ pathname │     search     │ hash  │
├─────────────┴─────────────────────┴────────────────────────┴──────────┴────────────────┴───────┤
│                                              href                                              │
└────────────────────────────────────────────────────────────────────────────────────────────────┘

## How to use

```js
import url from "url";

const parsedUrlObject = url.parse("https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash");

const formattedUrl = url.formatUrl({
  protocol: 'https',
  hostname: 'www.test.com',
  pathname: '/',
  query: {
    a: 1,
    b: 2
  },
  search: '?a=44&c=22'
})
```

## API

### parse

```ts
interface ParsedUrlObject {
  protocal: string;
  search: string;
  query: {
    [index: string]: string;
  };
};

let parse: (url: string) => ParsedUrlObject
```

### format

```ts
interface UrlObject {
  protocol: string;
  hostname: string;
  port?: string;
  pathname: string;
  search?: string;
  query?: {
    [index: string]: string | number
  };
  hash?: string;
}

let format: (urlObj: UrlObject) => string;
```
