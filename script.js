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

//Portfolio Section adding image link so that The open() method opens a new browser window

document.querySelector('.project1').addEventListener('click', function () {
  window.open('https://www.ssamab.se/');
});

document.querySelector('.project2').addEventListener('click', function () {
  window.open('https://marmikbistro.se/');
});

document.querySelector('.project3').addEventListener('click', function () {
  window.open(
    'https://codesandbox.io/s/restaurant-meal-project-using-axios-http-method-and-external-api-czt10'
  );
});

document.querySelector('.project4').addEventListener('click', function () {
  window.open(
    'https://salahuddin7.github.io/responsive-website--ADVENTURE-WITH-SALAH/'
  );
});

document.querySelector('.project5').addEventListener('click', function () {
  window.open(
    'https://salahuddin7.github.io/Product-Landing-Page--Delicious-Mango/'
  );
});
document.querySelector('.project6').addEventListener('click', function () {
  window.open(
    'https://salahuddin7.github.io/responsive-web-design-using-grid-and-flex/'
  );
});
