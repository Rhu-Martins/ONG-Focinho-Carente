const itens = document.querySelector('.itens-navbar');
const mobileMenu = document.querySelector('.mobile-menu');


function  menuMobile(){
  mobileMenu.addEventListener('click', () => {
    itens.classList.toggle('active')
  })
}

menuMobile();
