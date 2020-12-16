let expandBtn = document.querySelector('.expand_btn');
let backText = document.querySelector('.scroll_text');
let exhibitedBtn = document.querySelector('.exhibited_btn');
let boxWorks = document.querySelector('.box_works');
let reviewBtn = document.querySelector('.review_btn');
let reviewItem = document.querySelector('.desktop_reviews .review_item');
let expandBtnMobile = document.querySelector('.expand_btn_mobile');
let scrollTextMobile = document.querySelector('.scroll_text_mobile');
let moreCommentsBtn = document.querySelector('.more_comments button');
let mobileReview = document.querySelector('.mobile_review');
let addAnimMobileReview = document.querySelector('.add_anim_mobile_review');
let mobileReviewBtn = document.querySelector('.mobile_review_btn');
let modalClosedTexts = document.querySelectorAll('.modal_title .achievements_list');
let variableText = document.querySelector('.modal-body .info_list')
let myWorksInfo = document.querySelectorAll('.block_works .my_work img');
let closeMyWork = document.querySelector('.home_screen .close');
let homeScreenWork = document.querySelector('.home_screen');
let workName = document.getElementById('workName');
let workDescriptions = document.getElementById('workDescriptions');
let myFriendsList = document.querySelectorAll('.modal-body .my_friends_list');
let removeMyFriend = document.querySelectorAll('.modal-body .my_friends_list .remove_friend');
let editSizeBtns = document.querySelectorAll('.edit_size i');
let editSizeBtns2 = document.querySelectorAll('.edit_size_user i');



// function jQuery
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

moreCommentsBtn.addEventListener('click', () => {
  addAnimMobileReview.style.overflowY = 'scroll';
  moreCommentsBtn.style.display = 'none'

});

// Modal  наведении текст

modalClosedTexts.forEach((openText) => {
  openText.addEventListener('mouseover', () => {
    function addVariableText() {
      variableText.value = openText.children[2].innerText
    }
    addVariableText()
  });
});

// modal my works

myWorksInfo.forEach((myWork) => {

  myWork.addEventListener('click', () => {
    let myImg = document.getElementById('homeScreen');
    myImg.src = myWork.src
    homeScreenWork.style.display = 'flex';

  })
});

closeMyWork.addEventListener('click', () => {
  homeScreenWork.style.display = 'none';
});

// Modal my friends
myFriendsList.forEach((myFriend) => {
  myFriend.addEventListener('mouseover', () => {
   myFriend.children[2].children[0].style.display = 'block'
  })
});

myFriendsList.forEach((myFriend) => {
  myFriend.addEventListener('mouseout', () => {
  myFriend.children[2].children[0].style.display = 'none'
  })
});

// remove my friend

removeMyFriend.forEach((removeFriend) => {
  removeFriend.addEventListener('click', () => {
    removeFriend.parentElement.style.display = 'none'
  })
})


function returnInfo() {
  workName.value = 'Letcop'
  workDescriptions.value = 'Далеко-далеко за словесными горами, в стране гласных и согласных живут рыбные тексты. Деревни своего ipsum скатился, однажды все злых? Первую деревни выйти раз свой свое на берегу продолжил родного решила моей ipsum, предупреждал грустный! Живет свой гор образ заголовок собрал выйти даже, то безопасную своих, всеми свою его если текстами! Рыбного, знаках свою.'
 
}

returnInfo();




 const [addSize, removeSize] = editSizeBtns;

 
 addSize.addEventListener('click', () => {
  let myImg = document.getElementById('homeScreen');
  let h = myImg.clientHeight;
  let w = myImg.clientWidth;
  h = h + 100;
  w = w + 100;

  myImg.style.height = h + 'px'
myImg.style.width = w + 'px'
 });

 removeSize.addEventListener('click', () => {
  let myImg = document.getElementById('homeScreen');
  let h = myImg.clientHeight;
  let w = myImg.clientWidth;
  h = h - 100;
  w = w - 100;

  if(myImg.clientHeight < 650) {
    h = myImg.clientHeight;
    w = myImg.clientWidth;
  }

  myImg.style.height = h + 'px'
myImg.style.width = w + 'px'
 });



 





