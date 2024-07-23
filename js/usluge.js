
// LOADING SCREEN - sve stranice

$(window).on("load",function(){
    $(".loader-wrapper").fadeOut("slow");
}); 




// scroll to top


var scrollTopBtn = document.getElementById("scrollTopBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTopBtn.classList.add("show");
    } else {
        scrollTopBtn.classList.remove("show");
    }
}

scrollTopBtn.onclick = function() {
    scrollToTop();
}

function scrollToTop() {
    var currentPosition = document.documentElement.scrollTop || document.body.scrollTop;

    if (currentPosition > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, currentPosition - currentPosition / 8);
    }
}


//newsletter

document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Hvala na pretplati!');
});
