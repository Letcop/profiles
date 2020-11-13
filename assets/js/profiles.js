let expandBtn = document.querySelector('.expand_btn');
let backText = document.querySelector('.back_text');
let clickElements = document.querySelectorAll('.click_elem');

let clickNum;
expandBtn.addEventListener('click', () => {
  if(clickNum == 1) {
    backText.style.display = 'none';
    expandBtn.children[0].style.transform = 'rotate(0deg)'
    return clickNum = 0;
  } else {
    backText.style.display = 'block';
    expandBtn.children[0].style.transform = 'rotate(180deg)'
    return clickNum = 1;
  }
});

clickElements.forEach((clickElement) => {
  clickElement.addEventListener('click', () => {
    if(clickNum == 1) {
      clickElement.nextElementSibling.style.display = 'none'
      clickElement.children[0].style.transform = 'rotate(0deg)'
      return clickNum = 0;
    } else {
      clickElement.nextElementSibling.style.display = 'flex'
      clickElement.nextElementSibling.classList.add('show_anim')
      clickElement.children[0].style.transform = 'rotate(180deg)'
      return clickNum = 1;
    }
  })
})

