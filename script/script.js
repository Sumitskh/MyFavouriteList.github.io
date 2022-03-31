console.log("Hello World");

// darkmode function to switch the classes dark-mode to body
function darkMode(){
    let body = document.body;
    // console.log("clicked");
    body.classList.toggle("dark-mode")
}
// Categories dropdown menu
function dropDown(){
    let showDropdown = document.getElementById("myDropdown").classList.toggle("show");
}