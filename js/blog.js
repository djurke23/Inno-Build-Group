
//slajder







let slideIndex = 0;
const slides = document.querySelectorAll('.slider-wrapper-blog .blog-card');
const totalSlides = slides.length;

document.querySelector('.next').addEventListener('click', () => {
    moveToNextSlide();
});

document.querySelector('.prev').addEventListener('click', () => {
    moveToPrevSlide();
});

function updateSlidePosition() {
    const sliderWrapper = document.querySelector('.slider-wrapper-blog');
    const slideWidth = slides[0].clientWidth;
    sliderWrapper.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
}

function moveToNextSlide() {
    slideIndex++;
    if (slideIndex >= totalSlides) {
        slideIndex = 0;
    }
    updateSlidePosition();
}

function moveToPrevSlide() {
    slideIndex--;
    if (slideIndex < 0) {
        slideIndex = totalSlides - 1;
    }
    updateSlidePosition();
}

function autoSlide() {
    moveToNextSlide();
    setTimeout(autoSlide, 3000);
}

document.addEventListener('DOMContentLoaded', () => {
    autoSlide();
});




// search bar


const searchInput = document.querySelector('.search-bar input');
const searchIcon = document.querySelector('.search-icon');
const blogPosts = document.querySelectorAll('.blog-card');
const searchResults = document.createElement('div');
searchResults.classList.add('search-results');
document.body.appendChild(searchResults);

searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.toLowerCase();
  let hasResults = false;

  // Očisti prethodne rezultate
  searchResults.innerHTML = '';

  blogPosts.forEach(post => {
    const title = post.querySelector('h3').textContent.toLowerCase();
    const category = post.querySelector('.category').textContent.toLowerCase();
    const author = post.querySelector('.author').textContent.toLowerCase();

    if (title.includes(searchTerm) || category.includes(searchTerm) || author.includes(searchTerm)) {
      post.style.display = 'block';
      hasResults = true;

      const resultElement = document.createElement('div');
      resultElement.textContent = title; // Ili dodajte više detalja
      resultElement.addEventListener('click', () => {
        post.scrollIntoView({ behavior: 'smooth' });
      });
      searchResults.appendChild(resultElement);
    } else {
      post.style.display = 'none';
    }
  });

  searchResults.classList.toggle('active', hasResults);
});

searchIcon.addEventListener('click', () => {
  searchInput.focus();
});









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