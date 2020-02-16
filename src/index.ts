import {
    format_date,
    format_number,
} from './formatter'

const bucket_reg = /(\{+)([^\{\}]*)(\}+)/g
const int_reg = /^\d+$/

const format = (fmt: any, ...args: any[]) => {
    if(typeof fmt !== 'string') {
        fmt += ''
    }
    let [ arg ] = args
    if(!arg || typeof arg !== 'object') {
        arg = {}
    }
    return fmt.replace(bucket_reg, (_: string, L: string, C: string, R: string) => {
        const ll = L.length, rl = R.length, l = L.substr(ll / 2 >> 0), r = R.substr(rl / 2 >> 0)
        if(ll % 2 === 0 || rl % 2 === 0) {
            return l + C + r
        }
        const spliterIndex = C.indexOf(':')
        let v: string, f: string, _v: any
        if(spliterIndex < 0) {
            v = C
            f = ''
        } else {
            v = C.substring(0, spliterIndex)
            f = C.substring(spliterIndex + 1)
        }

        if(v.length < 1) {
            _v = args[0]
        } else if(int_reg.test(v)) {
            _v = args[parseInt(C)]
        } else {
            _v = arg[C]
        }

        if(typeof _v === 'number') {
            _v = format_number(_v, f)
        } else if(_v instanceof Date) {
            _v = format_date(_v, f)
        }
        
        return l.slice(0, -1) + _v + r.slice(0, -1)
    })
}

export default format