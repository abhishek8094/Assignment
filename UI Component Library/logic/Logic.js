function toggleNavbar() {
  let navlist= document.querySelector(".navlist");

    if (navlist.style.display === "block") {
      navlist.style.display = "none";
    } else {
     navlist.style.display = "block";
    }
}
