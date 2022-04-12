var topic = [
    "清明連假",
    "段考前一週",
    "活動1st驗收",
    "活動2nd驗收",
    "活動總驗",
    "活動當天"
];

var stratDate = new Date();

function setMonthAndDay(startMonth,startDay){
    stratDate.setMonth(startMonth-1,startDay);
    stratDate.setHours(0);
    stratDate.setMinutes(0);
    stratDate.setSeconds(0);
}

setMonthAndDay(4,1);