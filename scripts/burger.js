function Burger(){
    const burgerMenu = document.getElementById('burgerMenu');
    const popup = document.getElementById('popup');
    const login = document.getElementById('login');
    function togglePopup(){
        if(popup.classList.contains('display-none')){
            popup.classList.remove('display-none')
        }
        else{
            popup.classList.add('display-none')
        }
    }
    burgerMenu.addEventListener("click", togglePopup)

    function checkWidth() {
        if(window.innerWidth < 992){
            login.classList.remove('display-none')
            popup.classList.add('display-none');
            burgerMenu.classList.remove('display-none');
            }
            else{
            popup.classList.remove('display-none');
            burgerMenu.classList.add('display-none');
            login.classList.add('display-none')
            }
    }
    checkWidth()

    window.addEventListener('resize', checkWidth);
}
window.onload = function() {
    Burger();
};