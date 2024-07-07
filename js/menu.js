document.addEventListener('DOMContentLoaded', function() {
    var navLinks = document.getElementById("navLinks");
    var openMenuBtn = document.getElementById("openMenu");
    var closeMenuBtn = document.getElementById("closeMenu");
    var menuItems = navLinks.querySelectorAll('ul li');
    
    function showMenu() {
        navLinks.style.right = "0";
        openMenuBtn.style.display = "none";
        navLinks.classList.add('show');
        
        // Postepena animacija za stavke menija
        menuItems.forEach((item, index) => {
            setTimeout(() => {
                item.style.transitionDelay = `${index * 0.1}s`;
            }, 50);
        });
    }
    
    function hideMenu() {
        navLinks.style.right = "-200px";
        openMenuBtn.style.display = "block";
        navLinks.classList.remove('show');
        
        // Resetovanje kašnjenja tranzicije
        menuItems.forEach(item => {
            item.style.transitionDelay = '0s';
        });
    }

    if(openMenuBtn) openMenuBtn.addEventListener('click', showMenu);
    if(closeMenuBtn) closeMenuBtn.addEventListener('click', hideMenu);
});