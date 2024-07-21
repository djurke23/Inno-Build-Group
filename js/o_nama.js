
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


// timeline

// VARIABLES
const elH = document.querySelectorAll(".timeline li > div");
const timeline = document.querySelector(".timeline ol");

// START
window.addEventListener("load", init);

function init() {
  setEqualHeights(elH);
  addTouchScrolling();
}

// SET EQUAL HEIGHTS
function setEqualHeights(el) {
  let counter = 0;
  for (let i = 0; i < el.length; i++) {
    const singleHeight = el[i].offsetHeight;

    if (counter < singleHeight) {
      counter = singleHeight;
    }
  }

  for (let i = 0; i < el.length; i++) {
    el[i].style.height = `${counter}px`;
  }
}

// ADD TOUCH SCROLLING
function addTouchScrolling() {
  let isDown = false;
  let startX;
  let scrollLeft;

  timeline.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - timeline.offsetLeft;
    scrollLeft = timeline.scrollLeft;
  });

  timeline.addEventListener('mouseleave', () => {
    isDown = false;
  });

  timeline.addEventListener('mouseup', () => {
    isDown = false;
  });

  timeline.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - timeline.offsetLeft;
    const walk = (x - startX) * 2; // Scroll-fast
    timeline.scrollLeft = scrollLeft - walk;
  });

  // Touch events for mobile
  timeline.addEventListener('touchstart', (e) => {
    isDown = true;
    startX = e.touches[0].pageX - timeline.offsetLeft;
    scrollLeft = timeline.scrollLeft;
  });

  timeline.addEventListener('touchend', () => {
    isDown = false;
  });

  timeline.addEventListener('touchmove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.touches[0].pageX - timeline.offsetLeft;
    const walk = (x - startX) * 2;
    timeline.scrollLeft = scrollLeft - walk;
  });
}
