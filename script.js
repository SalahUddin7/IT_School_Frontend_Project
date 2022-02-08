//Humburger Menu Button

const menuButton = document.querySelector('#menu');

const navMenu = document.querySelector('nav');

menuButton.addEventListener('click', function () {
  if (navMenu.classList.contains('d-none')) {
    navMenu.classList.add('d-flex');
    navMenu.classList.remove('d-none');
  } else {
    navMenu.classList.remove('d-flex');
    navMenu.classList.add('d-none');
  }
});

//Read More... (inside HOME Section Page)

function myFunction() {
  var dots = document.getElementById('dots');
  var moreText = document.getElementById('more');
  var btnText = document.getElementById('myBtn');

  if (dots.style.display === 'none') {
    dots.style.display = 'inline';
    btnText.innerHTML = 'Read more';
    moreText.style.display = 'none';
  } else {
    dots.style.display = 'none';
    btnText.innerHTML = 'Read less';
    moreText.style.display = 'inline';
  }
}

//Lightbox (Upcoming Project Section)

let imageBox = document.querySelectorAll('.img-box');
imageBox.forEach((popup) =>
  popup.addEventListener('click', () => {
    popup.classList.toggle('active');
  })
);

//Adding image link

document.querySelector('.project1').addEventListener('click', function () {
  window.location = 'http://www.smkproduction.eu5.org';
  target = '_blank';
  done = 1;
});
