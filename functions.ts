
import {date} from './date';
import { weekDaytoName } from "./weekDaytoName";
function addDayThatDoesNotExist(date: date) {
    for (let i = 1; i <= 7; i++) {
        if (!date[i]) date[i] = i * 2;
    }
    return date
}

function result(bedate:date){
    let dayName: string
    let resDate: date = {}
    for (const key in bedate) {

    dayName = weekDaytoName(parseInt(key))
    resDate[dayName] = bedate[key]
}
return resDate
}

export{addDayThatDoesNotExist,result}