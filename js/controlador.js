var isActiveBar = false;

function myFunction() {
    var x = document.getElementById("myTopnav");
    
    if (isActiveBar) {
        myTopnav.style.display = "none";
    } else {
        myTopnav.style.display = "inline-grid";
    }

    isActiveBar = !isActiveBar;
}
