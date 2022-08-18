const getSecondsOfThisYearUntilNow = () => {
    const today = new Date.UTC()
    const firstDay = new Date.UTC(today.getFullYear()+"-01-01T00:00:00")
    return (today - firstDay) /1000
}



export default getSecondsOfThisYearUntilNow;
