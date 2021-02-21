/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 * 
 * @param sum int整型 
 * @return int整型二维数组
 */
export function FindContinuousSequence(sum: number): number[][] {
    // write code here
    let left: number = 1,
        right: number = 1,
        tmpSum: number = 0,
        tmpArr: number[] = [],
        res: number[][] = [];
    while(left <= sum / 2){
        if(tmpSum < sum){
            tmpSum += right;
            ++right;
        }else if(tmpSum > sum){
            tmpSum -= left;
            ++left;
        }else{
            tmpArr = [];
            for(let i: number = left; i < right; i++){
                tmpArr.push(i);
            }
            res.push(tmpArr);
            tmpSum -= left;
            ++left;
        }
    }
    return res;
}