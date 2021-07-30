document.addEventListener("DOMContentLoaded", function() {
  
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
    const pwdCtrl1 = document.querySelector('.password__control1');
    const pwdInput1 = document.querySelector('#input__user_pwd');
    const pwdCtrl2 = document.querySelector('.password__control2');
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