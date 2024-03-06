function Burger() {
    const menu = document.getElementById('menu');
    const popup = document.getElementById('popup');
    const burgerMenu = document.getElementById('burgerMenu');

    function toggleMenu(){
        if (window.matchMedia('(max-width: 992px)').matches) {
            menu.classList.add('display-none');
            popup.classList.add('display-none');
        } else {
            menu.classList.remove('display-none');
        }
    }

    toggleMenu();

    burgerMenu.addEventListener('click', () => {
        popup.classList.toggle('display-none');
        popup.classList.toggle('items-center');
    });
    
    window.addEventListener('resize', () => {
        toggleMenu();
    });
}

Burger();
