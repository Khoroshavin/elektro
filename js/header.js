document.addEventListener("DOMContentLoaded", function(event) {
  // HEADER -  BURGER MENU
  const burgerBtn = document.querySelector('.burger__btn_input');
  const headerBot = document.querySelector('.header__bot_wrap');
  openBurgerMenu = () => {
    burgerBtn.addEventListener('click', () => {
      headerBot.classList.toggle("header__bot_open");
      document.body.classList.toggle("no_scroll");
    });
  };
  openBurgerMenu();
});