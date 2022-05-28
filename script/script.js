console.log("Hello World");

// darkmode function to switch the classes dark-mode to body
function darkMode() {
  let body = document.body;
  let content1 = document.getElementsByClassName("cont1");
  let header = document.querySelector("#header");
  let footer = document.querySelector("#footer");
  let drpDown = document.querySelector("#myDropdown");
  let pb = document.querySelector("#myBar");
  // console.log("clicked");
  body.classList.toggle("dark-mode");
  header.classList.toggle("dark-mode");
  footer.classList.toggle("dark-mode");
  drpDown.classList.toggle("dark-mode");
  pb.classList.toggle("dark-mode-pb");
  // content1.classList.toggle("dark-mode");
}
//  dark mode & Local storage

// Categories dropdown menu
function dropDown() {
  let showDropdown = document.getElementById("myDropdown").classList.toggle("show");
}
//  Progress bar

// When the user scrolls the page, execute myFunction 
window.onscroll = function () { myFunction() };

function myFunction() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.body.clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}
// hamburger
function myburger(){
  let list = document.getElementById("list");
  let burger = document.getElementById("img1");
  let cross = document.getElementById("img2");

  // console.log(list);
  if(list.style.display === "flex"){
    list.style.display = "none";
    burger.style.display = "block";
    cross.style.display = "none";
  } else{
    list.style.display = "flex";
    burger.style.display = "none";
    cross.style.display = "block";
  }
}
// *************** LIVE CLOCK ******************
setInterval(showtime,0);
function showtime(){
  let time = new Date();
  let hr = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();
  am_pm = "AM";

  if(hr>12){
    hr -= 12;
    am_pm = "PM";
  }
  if(hr==0){
    hr = 12;
    am_pm = "AM";
  }

  hr = hr < 10 ? "0" + hr: hr;
  min = min < 10 ? "0" + min: min;
  sec = sec < 10 ? "0" + sec: sec;

  let currentTime = hr + ":" + min + ":" + sec + " " + am_pm;
  document.getElementById("liveclock").innerHTML = currentTime;
}