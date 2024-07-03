let utcTime = document.getElementById('time');
let dayOfTheWeek = document.getElementById("day");
let now = new Date()
let year = now.getUTCFullYear();
let month = now.getUTCMonth() + 1; // Months are zero-based, so add 1
let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getUTCSeconds();
let dayIndex = now.getDate()
let day ;

let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let dayOfWeek = weekdays[now.getUTCDay()];

utcTime.innerHTML = `${hours}:${minutes}Z`
dayOfTheWeek.innerText = dayOfWeek

