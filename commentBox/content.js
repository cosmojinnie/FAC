const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();

const today = document.querySelector('.today');
today.innerHTML = `Today: ${year}.${month}.${day}`;

const btns = document.querySelectorAll('.wrap_card button');

btns.forEach(function(btn){
  btn.addEventListener('click', function(e) {
    e.target.nextElementSibling.classList.toggle('show');
    const btnTxt = (e.target.innerHTML == 'show description')? 'hide description': 'show description';
    e.target.innerHTML = btnTxt;
  });
});

const inputName = document.getElementById('inputName');
const inputEmail = document.getElementById('inputEmail');
const comment = document.getElementById('inputComment');
const contLength = document.querySelector('.cont_length');

comment.onkeyup = function() {
  const msgLength = comment.value.length;
  contLength.innerHTML = msgLength;
  if(msgLength > 140) {
    comment.setAttribute('style', 'outline:3px solid red');
  } else {
    comment.setAttribute('style', 'outline:initial');
  }
}

document.getElementById('form').onsubmit = function(e) {
  const msg = document.querySelector('.msg');
  msg.innerHTML = `Comment: ${comment.value}(<a href="mailto:${inputEmail.value}" target="_blank">${inputName.value}</a>)`;
  inputName.value = '';
  inputEmail.value = '';
  comment.value = '';
  contLength.innerHTML = 0;
  e.preventDefault();
}