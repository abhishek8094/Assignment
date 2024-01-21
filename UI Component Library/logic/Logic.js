const navlist = document.querySelector(".navlist");
const social = document.querySelector(".socialmedia-link");
const hamburger = document.querySelector("#hamburger")
const cross = document.querySelector("#cross")

function showSidebar(){
    navlist.style.display = "block";
    social.style.display = "block";
    cross.style.display = "block";
    hamburger.style.display = "none";
}

function hideSidebar(){
    navlist.style.display = "none";
    social.style.display = "none";
    cross.style.display = "none";
    hamburger.style.display = "block";
}