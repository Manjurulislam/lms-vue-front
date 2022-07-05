
const getDayRange = (day) =>  {
    let dayRange = new Date();
    dayRange.setDate(day);
    dayRange = (dayRange.getFullYear() + '-' + (dayRange.getMonth()+1) + '-' + dayRange.getDate());
    return [dayRange, dayRange]
};

const getCurrentMonthRange = (firstDay, lastDay) =>  {
    let firstDayMonth = new Date();
    let lastDayMonth = new Date();
    firstDayMonth.setDate(firstDay);
    lastDayMonth.setDate(lastDay);
    firstDayMonth = (firstDayMonth.getFullYear() + '-' + (firstDayMonth.getMonth()+1) + '-' + firstDayMonth.getDate());
    lastDayMonth =  (lastDayMonth.getFullYear() + '-' + (lastDayMonth.getMonth()+2) + '-' + lastDayMonth.getDate());
    return [firstDayMonth, lastDayMonth]
};

const getLastMonthRange = (firstDay, lastDay) =>  {
    let firstDayMonth = new Date();
    let lastDayMonth = new Date();
    firstDayMonth.setDate(firstDay);
    lastDayMonth.setDate(lastDay);
    firstDayMonth = (firstDayMonth.getFullYear() + '-' + (firstDayMonth.getMonth()) + '-' + firstDayMonth.getDate());
    lastDayMonth =  (lastDayMonth.getFullYear() + '-' + (lastDayMonth.getMonth()+1) + '-' + lastDayMonth.getDate());
    return [firstDayMonth, lastDayMonth]
};

export {

    getDayRange,
    getCurrentMonthRange,
    getLastMonthRange
}