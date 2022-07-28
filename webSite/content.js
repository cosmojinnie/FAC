// const date = new Date();
// const year = date.getFullYear();
// const month = date.getMonth();
// const day = date.getDate();

// const today = document.querySelector('.today');
// today.innerHTML = `Today: ${year}.${month}.${day}`;

const btns = document.querySelectorAll('.wrap_card button');

btns.forEach(function(btn){
  btn.addEventListener('click', function(e) {
    e.target.nextElementSibling.classList.toggle('show');
    const btnTxt = (e.target.innerHTML == 'show description')? 'hide description': 'show description';
    e.target.innerHTML = btnTxt;
  });
});