document.addEventListener("DOMContentLoaded", function() {
  
  const notify = document.querySelector('.notify');
  const sfBtns = document.querySelectorAll('.sf__blok_head');

  
  function showNotify() {

    notify.classList.add('notifyIsShow');
    setTimeout(() => {
      notify.classList.remove('notifyIsShow');
    }, 3000);
  }

  
  notifyOnClick = () => {
    for (var i = 0 ; i < sfBtns.length; i++) {
      sfBtns[i].addEventListener('click' , showNotify) ; 
   }
  };


  notifyOnClick();
});