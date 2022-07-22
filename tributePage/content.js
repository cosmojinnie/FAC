const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();

const today = document.querySelector('.today');
today.innerHTML = `Today: ${year}.${month}.${day}`;