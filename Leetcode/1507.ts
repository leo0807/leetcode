function reformatDate(date: string): string {
    let [day, month, year] = date.split(' ');
    let dayNum: number = parseInt(day);
    const months = {
        "Jan": '01',
        "Feb": "02",
        "Mar": "03",
        "Apr": "04",
        "May": "05",
        "Jun": "06",
        "Jul": "07",
        "Aug": "08",
        "Sep": "09",
        "Oct": "10",
        "Nov": "11",
        "Dec": "12"
    }
    day = dayNum >= 10 ? String(dayNum) : String("0" + dayNum);
    return `${year}-${months[month]}-${day}`;
};