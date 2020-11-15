let expandBtn = document.querySelector('.expand_btn');
let backText = document.querySelector('.scroll_text');
let interestingInfo = document.querySelector('.interesting_info');
let clickElements = document.querySelectorAll('.click_elem');
let mouseoverBlocks = document.querySelectorAll('.mouseover_block');
let exhibitedBtn = document.querySelector('.exhibited_btn');
let boxWorks = document.querySelector('.box_works');
let reviewBtn = document.querySelector('.review_btn');
let reviewItem = document.querySelector('.review_item');
let specializationsInfo = document.querySelector('.specializations');
let specializationBtn = document.querySelector('.specialization_btn');
let perfomersBtn = document.querySelector('.perfomers_btn');
let similarPerformers = document.querySelector('.similar_performers');

$(document).ready(function() {
  $('.counter_num').countUp({
    'time': 1500,
    'delay': 10
  });

})

// Animate
let clickNum;
expandBtn.addEventListener('click', () => {
  if(clickNum == 0) {
    backText.classList.remove('anim_addText');
    expandBtn.innerHTML = 'Развернуть <i class="fas fa-chevron-down"></i>'
    return clickNum = 1;
   
  }
  else {
    backText.classList.add('anim_addText');
    expandBtn.innerHTML = 'Свернуть <i class="fas fa-chevron-up"></i>'
    return clickNum = 0;
  }

  
});

let clickNum2;
exhibitedBtn.addEventListener('click', () => {
  if(clickNum2 == 0) {
    boxWorks.classList.remove('anim_all_box_works');
    return clickNum2 = 1;
   
  }
  else {
    boxWorks.classList.add('anim_all_box_works');
    return clickNum2 = 0;
  }
});

let clickNum3;
reviewBtn.addEventListener('click', () => {
  if(clickNum3 == 0) {
    reviewItem.classList.remove('anim_all_reviews');
    return clickNum3 = 1;
   
  }
  else {
    reviewItem.classList.add('anim_all_reviews');
    return clickNum3 = 0;
  }
});

let clickNum4;
specializationBtn.addEventListener('click', () => {
  if(clickNum4 == 0) {
    specializationsInfo.classList.remove('anim_specializations_info');
    return clickNum4 = 1;
   
  }
  else {
    specializationsInfo.classList.add('anim_specializations_info');
    return clickNum4 = 0;
  }
});
let clickNum5;
perfomersBtn.addEventListener('click', () => {
  if(clickNum5 == 0) {
    similarPerformers.classList.remove('anim_performers_info');
    return clickNum5 = 1;
   
  }
  else {
    similarPerformers.classList.add('anim_performers_info');
    return clickNum5 = 0;
  }
});


  // clickElements.forEach((clickElement) => {
  //   let i = clickElement.nextElementSibling.clientHeight
  //   clickElement.addEventListener('click', () => {
  //     if(i==0) {
  //       let g = setInterval(function(){
  //         clickElement.nextElementSibling.style.height = i+ 'px';
  //                    i++;
  //                    if(i==200) { clearInterval(g); clickElement.children[0].setAttribute('class', 'fas fa-chevron-up');}
  //                }, 0.1)
  //               }
  //                  else { 
  //     let g = setInterval(function(){
  //       clickElement.nextElementSibling.style.height = i+ 'px';
  //            i--;
  //            if(i==-1) { clearInterval(g); i=0; clickElement.children[0].setAttribute('class', 'fas fa-chevron-down');}
  //        }, 0.1)
  //     }
  //   });
  // });


