
console.log('the code is working')
//set time in header

function addTimetoHeader() {
    //get id if TImeEl
    var timeNowEl = document.getElementById("currentDay");
    // Set time element to now
    timeNowEl.textcontent = moment();
}


function addColorToTimeSlot() {
    //get id if TImeEl
    var timeNowEl = document.getElementById("currentDay");
    // Set time element to now
    timeNowEl.textcontent = moment();
}


function init() {
    //read local storage and assign to time slots
    addTimetoHeader();

    addColorToTimeSlot();


}


// add appropriate class to hour elements (past, furture, present)

