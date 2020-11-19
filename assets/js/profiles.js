let expandBtn = document.querySelector('.expand_btn');
let backText = document.querySelector('.scroll_text');
let interestingInfo = document.querySelector('.interesting_info');
let clickElements = document.querySelectorAll('.click_elem');
let mouseoverBlocks = document.querySelectorAll('.mouseover_block');
let exhibitedBtn = document.querySelector('.exhibited_btn');
let boxWorks = document.querySelector('.box_works');
let reviewBtn = document.querySelector('.review_btn');
let reviewItem = document.querySelector('.desktop_reviews .review_item');
let specializationsInfo = document.querySelector('.specializations');
let specializationBtn = document.querySelector('.specialization_btn');
let perfomersBtn = document.querySelector('.perfomers_btn');
let similarPerformers = document.querySelector('.similar_performers');
let expandBtnMobile = document.querySelector('.expand_btn_mobile');
let scrollTextMobile = document.querySelector('.scroll_text_mobile');
let sliderwork = document.querySelector('.mobile_slider_works .slider_item');
let options = document.querySelectorAll('.option');
let sliderList = document.querySelectorAll('.slider_list');
let moreCommentsBtn = document.querySelector('.more_comments button');
let mobileReview = document.querySelector('.mobile_review');
let addAnimMobileReview = document.querySelector('.add_anim_mobile_review');
let mobileReviewBtn = document.querySelector('.mobile_review_btn');
console.log(mobileReviewBtn)


$(document).ready(function() {
  $('.counter_num').countUp({
    'time': 1500,
    'delay': 10
  });

  $('.add_anim').click(function() {
    $(this).siblings().removeClass('anim_performers_info');
    $(this).toggleClass('anim_performers_info');
  });


  $(".regular").slick({
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
 

  });

  $(".regular1").slick({
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2500,

  });

});

// Animate mobile
let clickNum0;
expandBtnMobile.addEventListener('click', () => {
  if(clickNum0 == 0) {
    scrollTextMobile.classList.remove('anim_MobileText');
    expandBtnMobile.innerHTML = 'Развернуть <i class="fas fa-chevron-down"></i>'
    expandBtnMobile.style.color = '#253556'
    return clickNum0 = 1;
   
  }
  else {
    scrollTextMobile.classList.add('anim_MobileText');
    expandBtnMobile.innerHTML = 'Свернуть <i class="fas fa-chevron-up"></i>'
    expandBtnMobile.style.color = '#00cf4d'
    return clickNum0 = 0;
  }

  
});


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


// добавить еще коммент

let clickNum4;
mobileReviewBtn.addEventListener('click', () => {
  if(clickNum4 == 0) {
    addAnimMobileReview.classList.remove('anim_performers_info');
    mobileReviewBtn.children[1].style.transform = 'rotate(0deg)'
    return clickNum4 = 1;
   
  }
  else {
    addAnimMobileReview.classList.add('anim_performers_info');
    mobileReviewBtn.children[1].style.transform = 'rotate(180deg)'
    return clickNum4 = 0;
  }
});

// mobileReviewBtn.addEventListener('click', () => {
//  addAnimMobileReview.classList.add('anim_performers_info');
// //  console.dir(addAnimMobileReview.children[0].children[1].style.transform = 'rotate(180deg)')
// });

moreCommentsBtn.addEventListener('click', () => {
  addAnimMobileReview.style.overflowY = 'scroll';
  moreCommentsBtn.style.display = 'none'

});



