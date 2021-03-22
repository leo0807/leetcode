function compareVersion(version1: string, version2: string): number {
    let arr1: number[] = version1.split('.').map(Number);
    let arr2: number[] = version2.split('.').map(Number);
    const maxLen: number = Math.max(arr1.length, arr2.length);
    for(let i = 0; i < maxLen; i++){
        let tmp1: number = arr1[i]? arr1[i]: 0,
            tmp2: number = arr2[i]? arr2[i]: 0;
        if(tmp1 === tmp2) continue;
        if(tmp1 > tmp2){
            return 1;
        }else{
            return -1;
        }
    }
    return 0;
};