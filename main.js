//const btns = document.querySelectorAll('button')
//btns.forEach(btn => btn.innerText = btn.innerText.toUpperCase())

const timerMinutes = document.querySelector('.timer .minutes')
const timerSeconds = document.querySelector('.timer .seconds')
const startTimerBtn = document.querySelector('.timer-wrapper .start')
const resetTimerBtn = document.querySelector('.timer-wrapper .reset')


startTimerBtn.addEventListener('click', startTimer)

//function startCount() {
//    let countSecs = 0;
//    let countMins = 5;
//    setInterval(() => {
//        if (countSecs > 0) {
//            countSecs -= 1
//        } else {
//            countMins -= 1;
//            countSecs = 0;
//        }
//        timerSeconds.textContent = countSecs
//        timerMinutes.textContent = countMins
//        console.log(timerSeconds)
//    }, 1000)
//}


function startTimer() {
    let secs = 59
    let mins = 4

   secsInterval = setInterval(() => {
        if (secs > 0) {
            secs -= 1
        } else if (mins === 0 && secs === 0) {
            clearInterval(secsInterval)
            clearInterval(minsInterval)
            
        }
        else {
            secs = 59
        }
        timerSeconds.textContent = secs
    }, 1000)
    minsInterval = setInterval(() => {
        mins -= 1
        timerMinutes.textContent = mins
    }, 60000)
    timerSeconds.textContent = secs
    timerMinutes.textContent = mins
}
