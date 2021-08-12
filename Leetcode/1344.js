/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
var angleClock = function (hour, minutes) {
    const hourDeg = hour % 12 * 30 + minutes / 60 * 30;
    const minutesDeg = minutes * 6;
    let angle = Math.abs(minutesDeg - hourDeg);
    angle = angle > 180 ? 360 - angle : angle;
    return angle;
};
