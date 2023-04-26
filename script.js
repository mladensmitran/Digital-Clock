//as soon as you load the project, this method will load the function 'calculateTime'
window.addEventListener('load', calculateTime)
//created a function called calculateTime. Created all the variables that will be displayed in the clock. 
function calculateTime(){
    var date = new Date();
    var dayNumber = date.getDay();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var ampm = hour >= 12 ? 'PM' : 'AM'; // if this statement is True, the it will return PM. But if it is False, it will return AM. This statement only works will military time. Since we are converting to regular time, how will it know which '12' is AM or PM?
    var dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]

    // #1 this formula converts military time into regular time using the remainder operator '%'. Example would be 19 / 12. 19 is divided by 12 one time leaving 7 as the remainder.
    hour = hour % 12; 

    // #2 this formula is "supposed to" return hours of midnight "0" and noon "12" to '12' instead of '0'. Since hour represents real local time through the method 'date.getHours', how does it know to convert 0 to 12? This formula seems to only focus 
    hour = hour == 12 ? '12': hour

    // #3 this formula adds a 0 in front of numbers that are less than 10. If the first statement is TRUE (if hour is less than 10), then add a 0 in front of number. Otherwise display hour (numbers 10 and over) 
    hour = hour < 10 ? '0' + hour : hour;

    // #4 same formula above is used for this. Statement reads as follows. If the minute number reads less than 10, then add a 0 in front of the minute number. Otherwise, do not add zero. 
    minute = minute < 10 ? '0' + minute: minute;

    document.getElementById("day").innerHTML = dayNames[dayNumber]; //this method returns the day name by matching the day name index number with the day number that is retrieved using local time. 
    document.getElementById("hour").innerHTML = hour; //this method returns the hour in local time. It will be converted to regular time using forumals above
    document.getElementById("minute").innerHTML = minute; //this method returns the minute in local time. It will be converted to regular time using forumala above
    document.getElementById("ampm").innerHTML = ampm; //this method returns AM or PM based on the local time. If number is less than 12, returns AM. If number is 


    //this built in function calls the created function 'calculateTime' every 200 miliseconds
    setTimeout(calculateTime, 200);
}


