document.addEventListener("DOMContentLoaded", function() {

  const userMenuBtn     = document.querySelector('.btn__user_menu');
  const userMenuWrap    = document.querySelector('.user__menu_left');
  const userOverlay     = document.querySelector('.black__overlay');
  const userOverlayOpen = document.querySelector('.black__overlay_show');
  const userMenu        = document.querySelector('.wrapper-menu');



  UserMenu = () => {
    // open user menu
    userMenuBtn.addEventListener('click', () => {
      userMenuWrap.classList.toggle('user__menu_left_open');
      userOverlay.classList.toggle('black__overlay_show');
      userMenu.classList.toggle('open');  
      // userMenuBtn.classList.add('hide');
      // userMenuBtn.
      document.body.classList.toggle('no_scroll');
    });

    // close user menu
    userOverlay.addEventListener('click', () => {
      userMenuWrap.classList.toggle('user__menu_left_open');
      userOverlay.classList.toggle('black__overlay_show');
      userMenu.classList.toggle('open');  
      // userMenuBtn.classList.add('hide');
      // userMenuBtn.
      document.body.classList.toggle('no_scroll');
    });

  };
  UserMenu();


  
  function initAccordion(elem, option){
		document.addEventListener('click', function (e) {

      if (!e.target.matches(elem+' .acc-title')) return;
			else {
				if(!e.target.parentElement.classList.contains('acc-active')) {

          if(option==true) {
						var elementList = document.querySelectorAll(elem+' .acc-container');
						Array.prototype.forEach.call(elementList, function (e) {
	                        e.classList.remove('acc-active');
						});
					}
					e.target.parentElement.classList.add('acc-active');
				} else {
					e.target.parentElement.classList.remove('acc-active');
				}
			}
		});
	}
	initAccordion('.acc-multiple-open', false);


    // const pwdBtn = document.querySelector('.password__control');
    const pwdCtrl1  = document.querySelector('.password__control1');
    const pwdInput1 = document.querySelector('#input__user_pwd');
    const pwdCtrl2  = document.querySelector('.password__control2');
    const pwdInput2 = document.querySelector('#input__user_pwd_rep');
  
  
    show1pwd = () => {
      pwdCtrl1.addEventListener('click', () => {
        if (pwdInput1.getAttribute('type') == 'password') {
          pwdCtrl1.classList.remove('password__control_show');
          pwdCtrl1.classList.add('password__control_hide');
          pwdInput1.setAttribute('type', 'text');
        }
        else {
          pwdCtrl1.classList.add('password__control_show');
          pwdCtrl1.classList.remove('password__control_hide');
          pwdInput1.setAttribute('type', 'password');
        }
      });
    };
    
    show2pwd = () => {
      pwdCtrl2.addEventListener('click', () => {
        if (pwdInput2.getAttribute('type') == 'password') {
          pwdCtrl2.classList.remove('password__control_show');
          pwdCtrl2.classList.add('password__control_hide');
          pwdInput2.setAttribute('type', 'text');
        }
        else {
          pwdCtrl2.classList.add('password__control_show');
          pwdCtrl2.classList.remove('password__control_hide');
          pwdInput2.setAttribute('type', 'password');
        }
      });
    };
  
    show1pwd();
    show2pwd();


});