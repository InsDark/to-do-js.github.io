//Selector the date and the time
let newDate = new Date()
let currentDate = document.querySelector('.current-date')
let currentTime = document.querySelector('.current-time')

//Getting the current date and time
let $month = newDate.getMonth()
let $day = newDate.getDay()
let $dayNumber = String(newDate.getDate()).padStart(2, '0')

//Array of days and months names
const allDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const allMonths = ['January', 'February', 'March', 'April', 'May', 'June','July', 'August', 'September', 'October', 'November', 'December']

// Set the day in the app
currentDate.textContent = `${allDays[$day]}, ${$dayNumber} ${allMonths[$month]}`

//Make the setTime() arrow function
const setTime = () =>{
    //Define again the date object
    const newDate = new Date()

    //Define variables of time
    let $hour = String(newDate.getHours()).padStart(2, '0')
    let $minute = String(newDate.getMinutes()).padStart(2, '0')
    let $second = String(newDate.getSeconds()).padStart(2, '0')

    //Set the time in the app
    currentTime.textContent = `${$hour}:${$minute}`
}

//Set the inverval of refreshing the time
setInterval( setTime, 5000)

//Start the app and the setTime
setTime()