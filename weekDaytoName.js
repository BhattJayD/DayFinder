"use strict";
exports.__esModule = true;
exports.weekDaytoName = void 0;
function weekDaytoName(day) {
    var days = {
        '1': "Mon",
        '2': "Tue",
        '3': "Wed",
        '4': "Thu",
        '5': "Fri",
        '6': "Sat",
        '7': "Sun"
    };
    return days[day];
}
exports.weekDaytoName = weekDaytoName;
