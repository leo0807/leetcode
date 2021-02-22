/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 * 
 * @param n int整型 
 * @return int整型
 */
export function NumberOf1Between1AndN_Solution(n: number): number {
    // write code here
    let res: number = 0;
    for(let i: number = n; i > 0; i--){
        for(let j:number = i; j > 0; j = Math.floor(j / 10)){
            j % 10 === 1 && res++;
        }
    }
    return res;
}