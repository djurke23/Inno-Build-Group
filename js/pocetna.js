




// ikonice za nav bar fon

var navLinks = document.getElementById ("navLinks") ;
function showMenu(){
navLinks.style.right = "0";
}

function hideMenu(){
navLinks.style.right = "-200px";
}

// saznaj vise smooth 

document.getElementById('saznajViseBtn').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('#usluge').scrollIntoView({
        behavior: 'smooth'
    });
});


// faq

const q = document.querySelectorAll('.q');
const a = document.querySelectorAll('.a');
const arr = document.querySelectorAll('.arrow');

for(let i = 0; i < q.length; i++) {

    q[i].addEventListener('click', () => {

        a[i].classList.toggle('a-opened');
        arr[i].classList.toggle('arrow-rotated');

    });
}




// loading screen

$(window).on("load",function(){
    $(".loader-wrapper").fadeOut("slow");
});
