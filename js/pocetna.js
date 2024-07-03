




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


// Galerija


const galleryItems = [
    { type: 'kuhinja', image: 'https://s3.emmezeta.hr/media/catalog/product/6/6/664140-smart-blok-kuhinja-260x60x212cm-hrast-bijela_1.jpg', title: 'Kuhinja 1', description: 'Lorem ipsum dolor...' },
    { type: 'kuhinja', image: 'https://vitorogpromet.rs/wp-content/uploads/2023/05/dalia-kuhinja.png', title: 'Kuhinja 2', description: 'Lorem ipsum dolor...' },
    { type: 'kuhinja', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYOKacoSze0iCA06U_k2I077KLS81N2utp0Q&s', title: 'Kuhinja 3', description: 'Lorem ipsum dolor...' },
    { type: 'kuhinja', image: 'https://vitorogpromet.rs/wp-content/uploads/2022/12/Kuhinja-Norma-14.png', title: 'Kuhinja 4', description: 'Lorem ipsum dolor...' },
    { type: 'kupatilo', image: 'https://zadovoljna.nova.rs/wp-content/uploads/2023/12/28/1703765587-profimedia-0832052610-750x500.jpg', title: 'Kupatilo 1', description: 'Lorem ipsum dolor...' },
    { type: 'kupatilo', image: 'https://www.keramikajovanovic.rs/wp-content/uploads/2015/12/malo-kupatilo_small.jpg.webp', title: 'Kupatilo 2', description: 'Lorem ipsum dolor...' },
    { type: 'kupatilo', image: 'https://neml.ba/wp-content/uploads/2023/02/mejtas-kupatilo-1.jpg', title: 'Kupatilo 3', description: 'Lorem ipsum dolor...' },
    { type: 'kupatilo', image: 'https://www.diplon.net/files/images/2020/3/10/malo-kupatilo.jpg', title: 'Kupatilo 4', description: 'Lorem ipsum dolor...' },
    { type: 'terasa', image: 'https://provansadekor.rs/wp-content/uploads/2023/07/uredjenje-terasa-6.jpg', title: 'Terasa 1', description: 'Lorem ipsum dolor...' },
    { type: 'terasa', image: 'https://provansadekor.rs/wp-content/uploads/2023/07/uredjenje-terase-provansa-green-centar-1.jpg', title: 'Terasa  2', description: 'Lorem ipsum dolor...' },
    { type: 'terasa', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1_hndufnhu_abRNxnAtZzl8cKyNrSQcJE6Q&s', title: 'Terasa  3', description: 'Lorem ipsum dolor...' },
    { type: 'terasa', image: 'https://portoflife.rs/wp-content/uploads/2018/06/terasa-balkon-velika.jpg', title: 'Terasa  4', description: 'Lorem ipsum dolor...' },
];

const gallery = document.querySelector('.gallery');
const filterButtons = document.querySelectorAll('.filter-button');

// Populate gallery
function populateGallery(items) {
    gallery.innerHTML = ''; // Clear existing items
    items.forEach(item => {
        const galleryItem = document.createElement('div');
        galleryItem.className = `gallery-item ${item.type}`;
        galleryItem.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <div class="gallery-item-info">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            </div>
        `;
        gallery.appendChild(galleryItem);
    });
}

// Initial population
populateGallery(galleryItems);

// Filter functionality
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        let filteredItems;
        if (filter === 'all') {
            filteredItems = galleryItems;
        } else {
            filteredItems = galleryItems.filter(item => item.type === filter);
        }
        
        populateGallery(filteredItems);
    });
});


// recenzije


const slider = document.querySelector('.slider');
        const slides = document.querySelectorAll('.slide');
        const prevButton = document.querySelector('.prev');
        const nextButton = document.querySelector('.next');
        const dotsContainer = document.querySelector('.dots');

        let currentIndex = 0;

        // Kreiranje tačkica
        slides.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(index));
            dotsContainer.appendChild(dot);
        });

        const dots = document.querySelectorAll('.dot');

        function updateDots() {
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });
        }

        function goToSlide(index) {
            currentIndex = index;
            slider.style.transform = `translateX(-${currentIndex * 100}%)`;
            updateDots();
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % slides.length;
            goToSlide(currentIndex);
        }

        function prevSlide() {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            goToSlide(currentIndex);
        }

        nextButton.addEventListener('click', nextSlide);
        prevButton.addEventListener('click', prevSlide);

        // Automatsko pomeranje svakih 5 sekundi
        setInterval(nextSlide, 5000);








        // timeline


        function isElementInViewport(el) {
            const rect = el.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }

        function showVisibleTimelineItems() {
            const timelineItems = document.querySelectorAll('.container');
            timelineItems.forEach(item => {
                if (isElementInViewport(item)) {
                    item.classList.add('show');
                }
            });
        }

        // Inicijalno pokretanje za prikaz vidljivih elemenata
        showVisibleTimelineItems();

        // Dodavanje event listener-a za scrollovanje
        window.addEventListener('scroll', showVisibleTimelineItems);
