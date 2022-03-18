// get current date for footer text
document.getElementById("footer_date").innerHTML = new Date().getFullYear();

// show nav items of hamburger menu
function show_nav() {
    let menu = document.getElementById("myLinks");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    }
    else {
        menu.style.display = "block";

    }
}

// hide menu if open when screen resizes beyond medium width
function hide_hamburger_menu() {
    let x = document.getElementById("myLinks");
    if (window.innerWidth >= 768) {
        x.style.display = 'none';
    }
}

window.addEventListener("resize", hide_hamburger_menu);