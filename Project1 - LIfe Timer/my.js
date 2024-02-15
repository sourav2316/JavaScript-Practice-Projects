let DOB = false;
let dateOfBirth;
const iconEl = document.getElementById("icon");
const contEl = document.getElementById("setcont");
const initialText = document.getElementById("initial");
const afterDOBText = document.getElementById("afterDOB");
const buttonEl = document.getElementById("dobButton");
const inputEl = document.getElementById("dobInput");
const yearEl = document.getElementById("year");
const monthEl = document.getElementById("month");
const dayEl = document.getElementById("day");
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");

console.log(localStorage.getItem("year"));

const twoDigitEl = (Number) =>{
    return Number > 9 ? Number : `0${Number}`;
};

const toggle =() =>{
    if (DOB) {
        contEl.classList.add("hide");
    } else {
        contEl.classList.remove("hide");
    }

    DOB = !DOB;
    console.log("Toggle", DOB);
};

const updateAge = () => {
    const currentDate = new Date();
    const dateDiff = currentDate - dateOfBirth;
    const year = Math.floor(dateDiff/(1000*60*60*24*365));
    const month = Math.floor(dateDiff/(1000*60*60*24*365)%12);
    const day = Math.floor(dateDiff/(1000*60*60*24)%30);
    const hour = Math.floor(dateDiff/(1000*60*60)%24);
    const minute = Math.floor(dateDiff/(1000*60)%60);
    const second = Math.floor(dateDiff/(1000)%60);

    yearEl.innerHTML = twoDigitEl(year);
    monthEl.innerHTML = twoDigitEl(month);
    dayEl.innerHTML = twoDigitEl(day);
    hourEl.innerHTML = twoDigitEl(hour);
    minuteEl.innerHTML = twoDigitEl(minute);
    secondEl.innerHTML = twoDigitEl(second);
};

const localStorageGetter = () =>{
    const year = localStorage.getItem("year");
    const month = localStorage.getItem("month");
    const date = localStorage.getItem("date");
    const hour = localStorage.getItem("hour");
    const minute = localStorage.getItem("minute");
    const second = localStorage.getItem("second");

    if(year && month && date && hour && minute && second){
        dateOfBirth = new Date(year, month, date, hour, minute, second);
    }
    updateAge();
};

const contToggler = () =>{
    updateAge();
    if(dateOfBirth){
        initialText.classList.add("hide");
        afterDOBText.classList.remove("hide");
    } else{
        afterDOBText.classList.add("hide");
        initialText.classList.remove("hide");
    }
};

const setDOB = () =>{
    const dateString = inputEl.value;
    dateOfBirth = dateString ? new Date (dateString) : null;

    if(dateOfBirth){
        localStorage.setItem("year", dateOfBirth.getFullYear());
        localStorage.setItem("month", dateOfBirth.getMonth());
        localStorage.setItem("date", dateOfBirth.getDate());
        localStorage.setItem("hour", dateOfBirth.getHours());
        localStorage.setItem("minute", dateOfBirth.getMinutes());
        localStorage.setItem("second", dateOfBirth.getSeconds());
    }
    contToggler();
    setInterval(()=> updateAge(), 1000);
};
localStorageGetter();
contToggler();
iconEl.addEventListener("click", toggle);
buttonEl.addEventListener("click", setDOB);