const days = document.getElementById("days");
const hours = document.getElementById("hours");
const mins = document.getElementById("mins");
const secs = document.getElementById("secs");

const formatTime = (time) => {
  return time < 10 ? `0${time}` : time;
};

const updateCountDown = (deadline) => {
  const currentTime = new Date();
  const timeDifference = deadline - currentTime;

  let calSecs = Math.floor(timeDifference / 1000) % 60;
  let calMins = Math.floor(timeDifference / 1000 / 60) % 60;
  let calHrs = Math.floor(timeDifference / 1000 / 60 / 60) % 24;
  let calDays = Math.floor(timeDifference / 1000 / 60 / 60 / 24);

  secs.textContent = formatTime(calSecs);
  mins.textContent = formatTime(calMins);
  hours.textContent = formatTime(calHrs);
  days.textContent = formatTime(calDays);
};

const countDown = (targetDate) => {
  setInterval(() => updateCountDown(targetDate), 1000);
};

const targetDate = new Date("April 16 2024 00:01");
countDown(targetDate);
