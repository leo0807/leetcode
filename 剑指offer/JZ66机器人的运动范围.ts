/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 * 
 * @param threshold int整型 
 * @param rows int整型 
 * @param cols int整型 
 * @return int整型
 */
export function movingCount(threshold: number, rows: number, cols: number): number {
    // write code here
    let steps: number = 0;
    for (let i: number = 0; i < rows; i++) {
        for (let j: number = 0; j < cols; j++) {
            let str: string = i + '' + j;
            let len: number = str.length;
            let sum: number = 0;
            for (let m: number = 0; m < len; m++) {
                sum += Number(str[m]);
            }
            if (sum <= threshold) steps++;
            //            无法从0，28 直接跳到 0，30
            else if (rows === 1 || cols === 1) return steps;
        }
    }
    return steps;
}