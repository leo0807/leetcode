/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param n int整型 
 * @return string字符串一维数组
 */
export function getSolution(n: number): string[] {
    // write code here
    if(n === 0) return [];
    let res: string[] = [];
    getResult(n, res, "left", "right", "mid");
    return res;
}

function getResult(n: number, res: string[], 
                    left: string, right: string, mid: string): void{
    if(n === 1) res.push(`move from ${left} to ${right}`);
    else{
        getResult(n - 1, res, left, mid, right);
        getResult(1, res, left, right, mid);
        getResult(n - 1, res, mid, right, left);
    }
}