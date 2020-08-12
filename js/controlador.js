//document.addEventListener('contextmenu', event => event.preventDefault());

/* Controlador menú */
function openMenu() {
    var x = document.getElementById("myTopnav");
    
    if (x.className === "topnav") {
      x.className += " responsive";
      document.getElementById("logo").style.display = "none";;
    } else {
      x.className = "topnav";
      document.getElementById("logo").style.display = "block";;
    }
}
/* Controlador menú */

function goHome() {
    document.location.href = "http://www.ianpedraza.com";
}