//1.................Humburger Menu Button..............

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

// 2......................Start of 'Scroll To Top' Button...........................

mybutton = document.getElementById('goTopBtn');

// button will appear if the user scrolls down 30px from the top of the document,
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    mybutton.style.display = 'block';
  } else {
    mybutton.style.display = 'none';
  }
}

// If  the user clicks on the button, going to scroll to the very top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
//.....................................................................
// .....................END of Scroll Button............................
//......................................................................

//3................Lightbox (used in Upcoming Project Section).........

let imageBox = document.querySelectorAll('.img-box');
imageBox.forEach((popup) =>
  popup.addEventListener('click', () => {
    popup.classList.toggle('active');
  })
);

//4..............Portfolio Section adding image link so that The open() method opens a new browser window

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
