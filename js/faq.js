
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







// faq

document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const arrow = question.querySelector('.arrow');
        
        if (answer.style.maxHeight) {
            answer.style.maxHeight = null;
            arrow.classList.remove('active');
        } else {
            answer.style.maxHeight = answer.scrollHeight + "px";
            arrow.classList.add('active');
        }
    });
});








// ikonice za nav bar fon
document.addEventListener('DOMContentLoaded', function() {
    var navLinks = document.getElementById("navLinks");
    var openMenuBtn = document.getElementById("openMenu");
    var closeMenuBtn = document.getElementById("closeMenu");
    
    function showMenu() {
        navLinks.style.right = "0";
        openMenuBtn.style.display = "none"; // Hide the burger icon
    }
    
    function hideMenu() {
        navLinks.style.right = "-200px";
        openMenuBtn.style.display = "block"; // Show the burger icon again
    }

    if(openMenuBtn) openMenuBtn.addEventListener('click', showMenu);
    if(closeMenuBtn) closeMenuBtn.addEventListener('click', hideMenu);
});



//newsletter

document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Hvala na pretplati!');
});
