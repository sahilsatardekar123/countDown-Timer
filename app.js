const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('seconds');

const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');

const disp = document.getElementById('disp');

const feedback = document.querySelector('.feedback');
console.log(feedback);

var interval = null;
var total = 0;
var timerReachedZero = false; // New variable to track whether the timer has reached 0

totalValue = () => {
    total = Number(hour.value) * 3600 + Number(minute.value) * 60 + Number(second.value);
}

Timer = () => {
    totalValue();
    total--;

    if (total >= 0) {
        var hr = Math.floor(total / 3600);
        var mt = Math.floor((total / 60) - hr * 60);
        var sc = total - ((hr * 3600) + (mt * 60));
        hour.value = hr;
        minute.value = mt;
        second.value = sc;
    } else {
        disp.innerText = "Time Over !!";

        if (!timerReachedZero) {
            feedback.classList.add('show');
            setTimeout(function() {
                feedback.classList.remove('show');
            }, 4000);
            timerReachedZero = true;
        }
    }
}

start.addEventListener('click', () => {
    clearInterval(interval);
    interval = setInterval(Timer, 1000);
    disp.innerText = "Timer Started";
});

stop.addEventListener('click', () => {
    clearInterval(interval);
    disp.innerText = "Timer Stop";
    timerReachedZero = false; // Reset the variable
});

reset.addEventListener('click', () => {
    clearInterval(interval);
    hour.value = 0;
    minute.value = 0;
    second.value = 0;
    disp.innerText = "Timer";
});
