import { date } from './date'
import { result, addDayThatDoesNotExist } from "./functions";
export function solution(dateD:date) {
    //const dateD = { "2020-01-01": 6, "2020-01-04": 12, "2020-01-05": 14, "2020-01-06": 2, "2020-01-07": 4 }
    console.log("Input:-",dateD);
    
    const d = new Date();
    let objectDate: date = {}
    let day: number;

    for (const key in dateD) {
        const d = new Date(key);
        day = d.getDay() == 0 ? 7 : d.getDay();
        objectDate[day] = dateD[key]
    }
    let bedate = addDayThatDoesNotExist(objectDate)
    let res;
    res = result(bedate)
    console.log("Output:- ",res);
}
