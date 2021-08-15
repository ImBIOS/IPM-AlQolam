window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("sengalon").style.display = "block";
    } else {
        document.getElementById("sengalon").style.display = "none";
    }
}