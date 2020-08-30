export class UtilsDY {
    constructor() { }
    
    public static objTPC(obj: any): string {
        if (obj == null) return ''
        let arr = []
        for (var key in obj) {
            arr.push(key + '=' + obj[key]);
        }
        let str = arr.join('&');
        arr = null;
        return str
    }

}