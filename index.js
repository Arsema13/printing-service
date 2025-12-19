// ================= NAVBAR SCROLL =================
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ================= MOBILE MENU TOGGLE =================
const menuBtn = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav_items');
const menuIcon = document.querySelector('#mobile-menu i');
const navBtns = document.querySelector('.nav_btns');

menuBtn.addEventListener('click', () => {
    // Toggle the menu
    navLinks.classList.toggle('active');
    navBtns.classList.toggle('active');

    // Change the icon
    const isOpen = navLinks.classList.contains('active');
    menuIcon.setAttribute('class', isOpen ? 'ri-close-line' : 'ri-menu-line');
});

// ================= PROFILE DROPDOWN =================
const profileBtn = document.getElementById("profileBtn");
const profileMenu = document.getElementById("profileMenu");

if (profileBtn) {
    profileBtn.addEventListener("click", () => {
        profileMenu.style.display =
            profileMenu.style.display === "flex" ? "none" : "flex";
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", (e) => {
        if (!profileBtn.contains(e.target) && !profileMenu.contains(e.target)) {
            profileMenu.style.display = "none";
        }
    });
}

// ================= LOGOUT BUTTON =================
const logoutBtn = document.getElementById("logoutBtn");
if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
        // Redirect to logout page
        window.location.href = "logout.html";
    });
}

// ================= SCROLL REVEAL ANIMATIONS =================
const scrollRevealOption = {
    distance: '50px',
    origin: 'bottom',
    duration: 1000
};

ScrollReveal().reveal('.left h1', { ...scrollRevealOption, delay: 500 });
ScrollReveal().reveal('.left p', { ...scrollRevealOption, delay: 1000 });
ScrollReveal().reveal('.right img', { ...scrollRevealOption, origin: 'right' });
ScrollReveal().reveal('.main_btn .btn', { ...scrollRevealOption, delay: 1500 });
ScrollReveal().reveal('.sub_heading', { ...scrollRevealOption, delay: 500 });
ScrollReveal().reveal('.heading', { ...scrollRevealOption, delay: 500 });
ScrollReveal().reveal('.para', { ...scrollRevealOption, delay: 500 });
ScrollReveal().reveal('.box', { ...scrollRevealOption, delay: 1000 });
ScrollReveal().reveal('.left_box li', { ...scrollRevealOption, delay: 500 });
ScrollReveal().reveal('.right_box li', { ...scrollRevealOption, delay: 500 });
ScrollReveal().reveal('.box_1', { ...scrollRevealOption, delay: 1000 });
ScrollReveal().reveal('.box_2', { ...scrollRevealOption, delay: 1000 });
ScrollReveal().reveal('.footer_col', { ...scrollRevealOption, delay: 500 });
ScrollReveal().reveal('.footer_bar', { ...scrollRevealOption, delay: 500 });
