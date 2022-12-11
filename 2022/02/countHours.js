function countHours(year, holidays) {
    return holidays.filter(function (holiday) {
        return ![0, 6].includes(new Date(`${year}/${holiday}`).getDay());
    }).length * 2;    
}