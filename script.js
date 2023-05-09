const imgs = document.querySelectorAll('.img')
const body = document.querySelector('body')
const popUps = document.querySelectorAll('.pop-up')

const background = document.querySelector('.pop-up_background')
const xMarks = document.querySelectorAll('.fa-xmark')
const hamburger = document.querySelector('.hamburger')
const navBar = document.querySelector('nav')


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

window.addEventListener('scroll', e => {
    e.preventDefault();

    console.log(huj);
})

hamburger.addEventListener('click', () => {
  if (body.classList.contains('scrolllock')) {
      body.classList.remove('scrolllock')
      hamburger.classList.remove('fa-xmark')
      hamburger.classList.add('fa-bars')
      navBar.classList.remove('active')
  } else {
      body.classList.add('scrolllock')
      hamburger.classList.remove('fa-bars')
      hamburger.classList.add('fa-xmark')
      navBar.classList.add('active')
  }
})