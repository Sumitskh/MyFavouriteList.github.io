console.log("Hello World");

// darkmode function to switch the classes dark-mode to body
function darkMode() {
  let body = document.body;
  let content1 = document.getElementsByClassName("cont1");
  // console.log("clicked");
  body.classList.toggle("dark-mode");
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