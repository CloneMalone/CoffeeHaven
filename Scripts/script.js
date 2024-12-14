



// Hamburger menu function
function hamburger() {
    var menu = document.getElementById("menu-links");
    var logo = document.getElementById("headerLogo");
    var menuIcon = document.getElementById("menuIcon");

    if (menu.style.display === "flex") {
        menu.style.display = "none";
        menuIcon.innerHTML = "&#9776;"; // Change back to hamburger icon
        menuIcon.style.fontSize = "2em";
    } else {
        menu.style.display = "flex";
        menuIcon.innerHTML = "&times;"; // Change to "X" icon
        menuIcon.style.fontSize = "3em";
    }
}

// View menu button hover effect 
document.getElementById("viewMenuButtonDesktop").addEventListener("mouseenter", function () {
    this.innerText = "Warning: Delicious Items";
});

document.getElementById("viewMenuButtonDesktop").addEventListener("mouseleave", function () {
    this.innerText = "View Menu";
});
