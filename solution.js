"use strict";
exports.__esModule = true;
exports.solution = void 0;
var functions_1 = require("./functions");
function solution(dateD) {
    //const dateD = { "2020-01-01": 6, "2020-01-04": 12, "2020-01-05": 14, "2020-01-06": 2, "2020-01-07": 4 }
    console.log("Input:-", dateD);
    var d = new Date();
    var objectDate = {};
    var day;
    for (var key in dateD) {
        var d_1 = new Date(key);
        day = d_1.getDay() == 0 ? 7 : d_1.getDay();
        objectDate[day] = dateD[key];
    }
    var bedate = functions_1.addDayThatDoesNotExist(objectDate);
    var res;
    res = functions_1.result(bedate);
    console.log("Output:- ", res);
}
exports.solution = solution;
