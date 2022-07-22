const basket = {
  apple: 0,
  orange: 0,
  banana: 0
};

const plusBtns = document.querySelectorAll('.plus');
const minusBtns = document.querySelectorAll('.minus');

const totAmount = document.querySelector('.tot_amount');

plusBtns.forEach(function(plusBtn, index){
  plusBtn.addEventListener('click', function() {
    basket[Object.keys(basket)[index]]++;
    countTotAmount();
    });
  });

minusBtns.forEach(function(minusBtn, index){
  minusBtn.addEventListener('click', function() {
    if(basket[Object.keys(basket)[index]] >= 1) {
      basket[Object.keys(basket)[index]]--;
    }
    countTotAmount();
    });
  });
  
  const removeBtn = document.querySelector('.remove');
  removeBtn.onclick = function() {
    basket.apple = 0;
    basket.orange = 0;
    basket.banana = 0;
    countTotAmount();
  }
  function countTotAmount() {
    if((basket.apple + basket.orange + basket.banana) === 0) {
      totAmount.innerHTML = 0
    } else {
      totAmount.innerHTML = `${basket.apple + basket.orange + basket.banana}<br>apple: ${basket.apple}<br>orange: ${basket.orange}<br>banana: ${basket.banana}`;
    }
  }


