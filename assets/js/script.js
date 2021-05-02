
console.log(moment())
//set time in header
    //get id if TImeEl
var timeNowEl = document.getElementById("currentDay");

//  Get all elements by hour class
var hourDivs =  document.getElementsByClassName('hour')
console.log({hourDivs})
    // Set time element to now
timeNowEl.textContent = moment().format('dddd MMM Mo, YYYY');

// Record the full time in a variable
var timeNowFull = moment()

// console log the Hour format of the time 
console.log(timeNowFull.format('hh'))

timeNowHour = Number(timeNowFull.format('hh'))


// Loop through each element 
for (let index = 0; index < hourDivs.length; index++) {
    hourDivs[index].style.color='red';
}


// check if the time is PM and if so add 12 
if (timeNowFull.format('LT').slice(-2) === 'PM') {
    timeNowHour  += 12
}


// add appropriate class to hour elements (past, furture, present)

