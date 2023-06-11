// alert("hello");
let hr = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

function displayTime() {
  let date = new Date();

  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();

  let hRotation = 30 * hh + mm / 2;
  let mmRotation = 6 * mm;
  let ssRotation = 6 * ss;

  hr.style.transform = `rotate(${hRotation}deg)`;
  min.style.transform = `rotate(${mmRotation}deg)`;
  sec.style.transform = `rotate(${ssRotation}deg)`;
}

setInterval(displayTime, 1000);
