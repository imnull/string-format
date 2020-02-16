import formatString from './src'

let str = '{{{a}}}a{b}s{1}d{2:###},{3:[yyyy/MM/dd hh:mm:ss]}'
console.log(formatString(str, { a: '-a-', b: '-b-' }, '-num-', 5, new Date))