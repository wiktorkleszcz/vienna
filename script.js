const imgs = document.querySelectorAll('.img')
const body = document.querySelector('body')
const popUps = document.querySelectorAll('.pop-up')
const timelineDates = document.querySelectorAll('.timeline-date')
const timelineContents = document.querySelectorAll('.timeline-content')

const background = document.querySelector('.pop-up_background')
const xMarks = document.querySelectorAll('.pop-up_icon')
const closeBtns = document.querySelectorAll('.content_icon')
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

timelineDates.forEach(date => {
  date.addEventListener('click', e => {
    const timelineId = date.getAttribute('data-timeline-id')

    timelineContents.forEach(content => {
      if (content.getAttribute('id') === timelineId) {
        content.classList.add('active')
      } else {
        content.classList.remove('active')
      }
    })
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

closeBtns.forEach(closeBtn => {
  closeBtn.addEventListener('click', e => {

    timelineContents.forEach(content => {
      content.classList.remove('active');
    });


    
    
    background.style.display = 'none'
  })
})

window.addEventListener('scroll', e => {
    e.preventDefault();

    console.log(huj);
})

/*hamburger.addEventListener('click', () => {
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
})*/

const timelineItems = document.querySelectorAll('.timeline-item');

timelineItems.forEach((item, index) => {
  if (index % 2 === 0) {
    item.classList.add('timeline-item-left');
  } else {
    item.classList.add('timeline-item-right');
  }
});
