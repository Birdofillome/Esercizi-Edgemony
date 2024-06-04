const div = document.querySelector('.counter');
const timer = document.createElement('p');
const stopButton = document.createElement('button');
const startButton = document.createElement('button');

stopButton.className = 'stop';
startButton.className = 'start';
startButton.textContent = 'Start';
stopButton.textContent = 'Stop';
timer.className = 'data';
timer.textContent = new Date ();

div.append(startButton, stopButton);

const runInterval = () => {
    const id = setInterval (() => {
        timer.textContent = new Date();
        console.log(timer.textContent)
    }, 1000)
    return id;
}

let intervalId = runInterval();

startButton.onmouseenter = function () {
    this.style.background = "green";
    this.style.borderColor =  "black";
};
startButton.onmouseleave = function () {
    this.style.background = "white";
    this.style.borderColor =  "green";
};

startButton.addEventListener('click', ()=> {
    clearInterval(intervalId)
    intervalId = runInterval();
});

stopButton.onmouseenter = function () {
    this.style.background = "red";
    this.style.borderColor =  "black";
};
stopButton.onmouseleave = function () {
    this.style.background = "white";
    this.style.borderColor =  "red";
};

stopButton.addEventListener('click', () => {
    console.log(intervalId);
    clearInterval(intervalId)
});

div.appendChild(timer);

///hh mm ss 
const timerDigitale = document.querySelector('.timerhms');
let hour = document.createElement('p');
let minute = document.createElement ('p');
let second = document.createElement ('p');
hour.className = 'ore';
hour.textContent =new Date().getHours();
minute.textContent = new Date().getMinutes();
minute.className = 'minuti';
second.textContent = new Date().getSeconds();
second.className = 'secondi';

const interval = () => {
const tempo = setInterval(() => {
hour.textContent = new Date().getHours();
minute.textContent = new Date().getMinutes();
second.textContent = new Date().getSeconds();
}, 1000)
return tempo};
let startTime = interval();
timerDigitale.append("Hours:",hour,"Minutes:",minute,"Second:",second);