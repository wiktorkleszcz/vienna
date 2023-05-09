const imgs = document.querySelectorAll('.img')
const body = document.querySelector('body')
const popUps = document.querySelectorAll('.pop-up')

const background = document.querySelector('.pop-up_background')
const xMarks = document.querySelectorAll('.fa-xmark')

function scrollToSection() {
    window.scrollTo(0 ,document.querySelector('#one').offsetTop);
}

window.addEventListener('load', (event) => {
    const wienAnchor = document.querySelector('h1');
  
    wienAnchor.addEventListener('click', (event) => {
      const wienSection = document.getElementById('one');
      wienSection.scrollIntoView({behavior: 'smooth'});
    });
});

imgs.forEach(img => {
  img.addEventListener('click', e => {
    const popupId = img.getAttribute('data-popup-id');
    
    popUps.forEach(popup => {
      if (popup.getAttribute('id') === popupId) {
        popup.classList.add('active');
      } else {
        popup.classList.remove('active');
      }
    });
    
    background.style.display = 'flex'
  })
})

xMarks.forEach(xMark => {
  xMark.addEventListener('click', e => {

    popUps.forEach(popup => {
      popup.classList.remove('active');
    });
    
    
    background.style.display = 'none'
  })
  
})


// get the header element
const header = document.querySelector('header');

// listen for the scroll event on the window object
window.addEventListener('scroll', () => {
  // check if the user has scrolled more than 100px from the top
  if (window.scrollY > 100) {
    // add the "header-visible" class to the header element
    header.classList.add('header-visible');
  } else {
    // remove the "header-visible" class from the header element
    header.classList.remove('header-visible');
  }
});