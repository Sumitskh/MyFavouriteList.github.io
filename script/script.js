console.log("Hello World");

// darkmode function to switch the classes dark-mode to body
function darkMode(){
    let body = document.body;
    let content1 = document.getElementsByClassName("cont1");
    // console.log("clicked");
    body.classList.toggle("dark-mode");
    content1.classList.toggle("dark-mode");
}
// Categories dropdown menu
function dropDown(){
    let showDropdown = document.getElementById("myDropdown").classList.toggle("show");
}