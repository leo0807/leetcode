function countStudents(students: number[], sandwiches: number[]): number {
    let map = new Map();
    for(let i of students){
        map.set(i, (map.has(i)? map.get(i): 0) + 1);
    }
    let i: number = 0;
    for(i = 0; i < students.length && (map.get(sandwiches[i]) > 0);i++){
        map.set(sandwiches[i], map.get(sandwiches[i]) - 1);
    }
    console.log(map, i);
    return students.length - i;
};
