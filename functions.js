"use strict";
exports.__esModule = true;
exports.result = exports.addDayThatDoesNotExist = void 0;
var weekDaytoName_1 = require("./weekDaytoName");
function addDayThatDoesNotExist(date) {
    for (var i = 1; i <= 7; i++) {
        if (!date[i])
            date[i] = i * 2;
    }
    return date;
}
exports.addDayThatDoesNotExist = addDayThatDoesNotExist;
function result(bedate) {
    var dayName;
    var resDate = {};
    for (var key in bedate) {
        dayName = weekDaytoName_1.weekDaytoName(parseInt(key));
        resDate[dayName] = bedate[key];
    }
    return resDate;
}
exports.result = result;
