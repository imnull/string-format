export const format_number = (v: number, f: string) => {
    if(/^[^\.]+(\.[^\.]*)?$/.test(f)) {
        const [a, b = ''] = f.split('.')
        let str = v.toFixed(b.length)
        let sub = a.length - str.split('.')[0].length, paddingLeft = ''
        for(let i = 0; i < sub; i++) {
            paddingLeft += '0'
        }
        return paddingLeft + str
    } else {
        return v + ''
    }
}

export const format_date = (v: Date, f: string) => {

    if(!f) {
        return v
    }

    const year = v.getFullYear()
    const month = v.getMonth() + 1
    const date = v.getDate()
    const hour = v.getHours()
    const minute = v.getMinutes()
    const second = v.getSeconds()

    return (
        f
        .replace(/y+/, _ => _.length > 3 ? format_number(year, '####') : format_number(year, '##'))
        .replace(/M+/, _ => format_number(month, _))
        .replace(/d+/, _ => format_number(date, _))
        .replace(/h+/, _ => format_number(hour, _))
        .replace(/m+/, _ => format_number(minute, _))
        .replace(/s+/, _ => format_number(second, _))
    )
}