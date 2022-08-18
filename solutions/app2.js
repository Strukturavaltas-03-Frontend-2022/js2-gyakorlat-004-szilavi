const countOfWorkingDays = function (date1, date2) {
    if(date1 > date2){
        throw new Error("The first parameter is earlier date, than second!")
    }

    let workDays = 0

    for (let i = 0; i < (date2.getDate() - date1.getDate()); i++) {
        let currentDay = new Date ()
        currentDay.setDate(date1.getDate() + i)
        if (currentDay.getDay() > 0 && currentDay.getDay() < 6) {
            workDays++
        }
    }

    return workDays
}

export default countOfWorkingDays;
