const myClock = document.getElementById('time')
const myHours = document.getElementById('hours')
const myMinuts = document.getElementById('minuts')
const mySeconds = document.getElementById('seconds')

setInterval(myTime, 1000)

function myTime (){
     var dateTime = new Date()
    var hrs = dateTime.getHours()
    var min = dateTime.getMinutes()
    var sec = dateTime.getSeconds()
   myHours.innerHTML = hrs + ":"
   myMinuts.innerHTML = min + ":"
   mySeconds.innerHTML = sec + ""
}


