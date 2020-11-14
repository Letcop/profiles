let expandBtn = document.querySelector('.expand_btn');
let backText = document.querySelector('.scroll_text');
let interestingInfo = document.querySelector('.interesting_info');
let clickElements = document.querySelectorAll('.click_elem');
let mouseoverBlocks = document.querySelectorAll('.mouseover_block');

$(document).ready(function() {
  $('.counter_num').countUp({
    'time': 1500,
    'delay': 10
  });

})

let clickNum = backText.clientHeight
expandBtn.addEventListener('click', () => {
  if(clickNum == 80) {
    let g = setInterval(function(){
      backText.style.height = clickNum + 'px';
                 clickNum++;
                 if(clickNum==170) { clearInterval(g); 
                  expandBtn.innerHTML = `Свернуть  <i class="fas fa-chevron-up"></i>`; 
                  backText.classList.add('added_scroll'); 
                  interestingInfo.style.display = 'none'}
             }, 0.1)
  } else {
    let g = setInterval(function(){
      backText.style.height = clickNum + 'px';
           clickNum--;
           if(clickNum== 80) { clearInterval(g); 
              clickNum=80;
              expandBtn.innerHTML = `Развернуть  <i class="fas fa-chevron-down"></i>`; 
              backText.classList.remove('added_scroll'); 
              interestingInfo.style.display = 'flex'}
       }, 0.1)
  }
});


  clickElements.forEach((clickElement) => {
    let i = clickElement.nextElementSibling.clientHeight
    clickElement.addEventListener('click', () => {
      if(i==0) {
        let g = setInterval(function(){
          clickElement.nextElementSibling.style.height = i+ 'px';
                     i++;
                     if(i==200) { clearInterval(g); clickElement.children[0].setAttribute('class', 'fas fa-chevron-up');}
                 }, 0.1)
                }
                   else { 
      let g = setInterval(function(){
        clickElement.nextElementSibling.style.height = i+ 'px';
             i--;
             if(i==-1) { clearInterval(g); i=0;}
         }, 0.1)
      }
    });
    clickElement.nextElementSibling.addEventListener('mouseleave', () => {
      let g = setInterval(function(){
        clickElement.nextElementSibling.style.height = i+ 'px';
             i--;
             if(i==-1) { clearInterval(g); i=0; clickElement.children[0].setAttribute('class', 'fas fa-chevron-down');}
         }, 0.1)
    })
  });


