
function countdown(launch_date,todayDate,id) {  

  // Set the date to countdown to
const countdownDate = new Date(launch_date).getTime();
// console.log(id + countdownDate);
// Get the current date and time
  const now = new Date(todayDate).getTime();
  let i = 0;
// Update the countdown every second
const countdownInterval = setInterval(() => {
const newNow = now + i*1000;
  // Calculate the time remaining
  const timeRemaining = countdownDate - newNow;

  // Calculate the days, hours, minutes, and seconds remaining
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  const targetSelector = `#${id} .countdown`;

  // Display the countdown in the HTML
  document.querySelector(`${targetSelector} .day`).textContent = days;
  document.querySelector(`${targetSelector} .hour`).textContent = hours;
  document.querySelector(`${targetSelector} .min`).textContent = minutes;
  document.querySelector(`${targetSelector} .sec`).textContent = seconds;
  document.querySelector(targetSelector).classList.remove('reveal');

  // If the countdown is over, stop updating the timer
  
  if (timeRemaining < 0) {
    clearInterval(countdownInterval);
    document.querySelector(targetSelector).innerHTML = "Countdown over!";
    location.reload();
  }
  ++i;
}, 1000);
}