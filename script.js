const day = document.getElementById("day")
const week = document.getElementById("week")
const month = document.getElementById("month")
const year = document.getElementById("year")

const today = new Date()

const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

const allMonths = ["January", "February", 'March', "April", "May", "june", "July", "August", "September", "October", "November", "December"]

day.innerHTML = (today.getDate()<10?"0":"") + today.getDate()
week.innerHTML = weekDays[today.getDay()]
month.innerHTML = allMonths[today.getMonth()]
year.innerHTML = today.getFullYear()