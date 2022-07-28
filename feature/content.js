const images = document.querySelectorAll('.item_image');
const totImages = images.length;
const playBtn = document.querySelector('.play_btn');
const beforeBtn = document.querySelector('.before_btn');
const nextBtn = document.querySelector('.next_btn');
const dots = document.querySelectorAll('.item_dot');
let activeIdx = 0;

images.forEach((image, index) => {
	if(image.classList.contains('show')) {
		activeIdx = index;
  } 
});


function setSlide() {
  if(activeIdx < totImages - 1) {
    activeIdx++;
  } else if(activeIdx == totImages - 1) {
    activeIdx = 0;
  } 
  showImg();
}

let interval = setInterval(setSlide, 5000);

function setPlay() {
  if(playBtn.dataset.active === 'true') {
    playBtn.dataset.active = "false";
    playBtn.innerText = 'play_circle';
    clearInterval(interval);
  } else {
		interval = setInterval(setSlide, 5000);
    playBtn.innerText = 'pause_circle';
    playBtn.dataset.active = "true";
  }
}

function showImg() {
  images.forEach((image, index) => {
    if(index == activeIdx) {
      image.classList.add('show');
    } else {
      image.classList.remove('show');
    }
  });
  dots.forEach((dot, idx) => {
		if(idx == activeIdx) {
      dot.dataset.active = true;
    } else {
      dot.dataset.active = false;
    } 
  });
  if(activeIdx === 0) {
    beforeBtn.disabled = true;
    nextBtn.disabled = false;
  } else if(activeIdx < totImages - 1) {
  	beforeBtn.disabled = false;
    nextBtn.disabled = false;
  } else if(activeIdx === totImages - 1) {
  	nextBtn.disabled = true;
  }
}

function next() {
  if(activeIdx < totImages - 1) {
    activeIdx++;
  }
  showImg();
}

function before() {
  if(activeIdx > 0) {
    activeIdx--;
  }
  showImg();
}