const timer = document.querySelector(".timer");
const title = document.querySelector(".title");
const startBtn = document.querySelector(".startBtn");
const pauseBtn = document.querySelector(".pauseBtn");
const resumeBtn = document.querySelector(".resumeBtn");
const resetBtn = document.querySelector(".resetBtn");

const workTime = 0.1 * 60;
const breatTime = 0.1 * 60;
let timeID = null;
let oneRoundCompleted = false;
let totalCount = 0;

const updateTitle = (msg) => {
  title.textContent = msg;
};

const countDown = (time) => {
  return () => {
    timer.textContent = time;
    time--;
    if (time < 0) {
      stopTimer();
      if (oneRoundCompleted === false) {
        timeID = startTimer(breatTime);
        oneRoundCompleted = true;
        updateTitle("Its Break Time!");
      } else {
        updateTitle("Completed 1 Round");
        setInterval(() => updateTitle("Start Timer Again"), 2000);
        totalCount++;
      }
    }
  };
};

const startTimer = (startTime) => {
  if (timeID !== null) {
    stopTimer();
  }
  return setInterval(countDown(startTime), 1000);
};

const stopTimer = () => {
  clearInterval(timeID);
  timeID = null;
};

startBtn.addEventListener("click", () => {
  timeID = startTimer(workTime);
  updateTitle("Its Work Time!");
});
