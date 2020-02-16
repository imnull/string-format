# string-format

## Quick Start
```js
import formatString from 'fmtstr'

let str = '{{{a}}}a{b}s{1}d{2:###},{3:[yyyy/MM/dd hh:mm:ss]}'

console.log(formatString(str, { a: '-a-', b: '-b-' }, '-num-', 5, new Date))
```

output
```text
{-a-}a-b-s-num-d005,[2020/02/16 12:02:26]
```

## Template Bucket

- `{key}`
    the first param's key
- `{index}`
    all params index

## Data Fomatter

- `number` **###.##**
- `Date` **yyyy-MM-dd hh-mm-ss**