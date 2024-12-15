document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.getElementById('navbar');

    menuIcon.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });

    const navLinks = document.querySelectorAll('.navbar a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.remove('active');
        });
    });
});

const hover = document.getElementById("hover")
function hovers(){
  document.classList.add("display-btn")
  
}
