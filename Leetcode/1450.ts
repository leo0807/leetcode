function busyStudent(startTime: number[], endTime: number[], queryTime: number): number {
    const len: number = startTime.length;
    let res: number = 0;
    for(let i: number = 0; i < len; i++){
        if(startTime[i] <= queryTime && queryTime <= endTime[i]) res++;
    }
    return res;
};