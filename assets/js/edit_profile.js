let editTextButtons = document.querySelectorAll('.edit_text_btn');
let editPaymentInp = document.getElementById('editPaymentInp');
let myWorks = document.querySelectorAll('.box_works .box_work');
let exhibitedBtn = document.querySelector('.exhibited_btn');
let boxWorks = document.querySelector('.box_works');
let skillBoxs = document.querySelectorAll('.performers_info .skill_box');
let removeSkillBox = document.querySelectorAll('.skill_box i');
let addSkillBtn = document.querySelector('.add_skill_btn');
let addEditBox = document.querySelector('.exhibited_works .added_btn');
let exhibitedWorks = document.querySelector('.exhibited_works');
let addingWork = document.querySelector('.adding_work');
let closeAddingWork = document.querySelector('.adding_work .close_adding_work');
let addSkill = document.getElementById('addSkill');
let performersInfo = document.getElementById('performersInfo');
let removeBoxWork = document.querySelectorAll('.box_work .fa-times-circle');
let addWorkInput = document.getElementById('addWorkInput');
let uploadProfile = document.getElementById('uploadProfile');
let uploadMyCover = document.getElementById('uploadMyCover');
let openCoverImages = document.querySelectorAll('.cover_item div');
let coverListBox = document.querySelectorAll('.cover_item .cover_list');
let secondBgc = document.querySelector('.second_bgc');
let openEditBlock = document.querySelector('.open_edit_block');
let closeEditProfile = document.querySelector('.close_edit_profile');
let userBlock = document.querySelector('.user_block_info');
let editUserBlock = document.querySelector('.edit_user_block');
let attachPassportPhoto = document.querySelector('.attach_passport_photo');
let removeSpecializations = document.querySelectorAll('.remove_specialization .fa-times-circle');
let editSpecializations = document.querySelector('.edit_specializations');
let addAndRemoveSpecializations = document.querySelector('.add_and_remove_specializations');
let editSpecializationsBtn = document.querySelector('.edit_specializations .edit_icon');
let dragItems = document.querySelectorAll('.dragItem');
let dropZone = document.querySelector('.dropZone');




// function jQuery
$(document).ready(function() {
  $('.search_specializations .specializations_list').click(function() {
    // $(this).siblings().removeClass('anim_performers_info');
    $(this).toggleClass('anim_performers_info');
  });

});
 



editTextButtons.forEach((editText) => {
  editText.addEventListener('click', () => {
    console.dir(editText.previousElementSibling.removeAttribute("disabled"))
  })
});

function auto_grow(element) {
  element.style.height = '5px';
  element.style.height = (element.scrollHeight) + 'px';

}

// edit payment

editPaymentInp.addEventListener('keypress', () => {

  if((event.charCode >= 48 && event.charCode <= 57) == true) {
    editPaymentInp.parentElement.children[2].style.display = 'none'
    editPaymentInp.parentElement.children[3].style.display = 'block'
  }
});

// My works

myWorks.forEach((myWork) => {
  myWork.addEventListener('mouseover', () => {
    myWork.children[0].style.display = 'block';
    myWork.children[1].style.display = 'block';
  })
});

myWorks.forEach((myWork) => {
  myWork.addEventListener('mouseout', () => {
    myWork.children[0].style.display = 'none';
    myWork.children[1].style.display = 'none';
  })
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

// remove work
removeBoxWork.forEach((removeWork) => {
  removeWork.addEventListener('click', () => {
  removeWork.parentElement.style.display = 'none'
  })
})

// Добавить навыки

addSkillBtn.addEventListener('click', () => {
  let addThisList = addSkillBtn.parentElement.parentElement.children[2];
  let newSkill = document.createElement('div');
  newSkill.classList.add('skill_box');

  let removeThis = document.createElement('i');
  removeThis.classList.add('fas');
  removeThis.classList.add('fa-times-circle');
  
  newSkill.innerHTML = addSkill.value;
  addThisList.prepend(newSkill);
  newSkill.append(removeThis)
  addSkill.value = ''
  let addedSkills = document.querySelectorAll('.performers_info .skill_box');
  let removeSkillBox = document.querySelectorAll('.skill_box i');

  addedSkills.forEach((addedSkill) => {
    addedSkill.addEventListener('mouseover', () => { 
      addedSkill.classList.add('skill_bgc');
      addedSkill.children[0].style.display = 'block'
    })
  });

  addedSkills.forEach((addedSkill) => {
    addedSkill.addEventListener('mouseout', () => {
      addedSkill.classList.remove('skill_bgc');
      addedSkill.children[0].style.display = 'none'
    })
  });

 // removed skill
 removeSkillBox.forEach((removeSkill) => {
  removeSkill.addEventListener('click', () => {
    console.dir(removeSkill.parentElement.style.display = 'none')
  })
});

});



skillBoxs.forEach((skillBox) => {
  skillBox.addEventListener('mouseover', () => { 
    skillBox.classList.add('skill_bgc');
    skillBox.firstChild.style.display = "block"
  })
});

skillBoxs.forEach((skillBox) => {
  skillBox.addEventListener('mouseout', () => {
    skillBox.classList.remove('skill_bgc');
    skillBox.firstChild.style.display = "none"
  })
});

// removed skill

removeSkillBox.forEach((removeSkill) => {
  removeSkill.addEventListener('click', () => {
    console.dir(removeSkill.parentElement.style.display = 'none')
  })
});

// open Edit Box

addEditBox.addEventListener('click', () => {
  exhibitedWorks.style.display = 'none';
  addingWork.style.display = 'block';
});

// close Edit Box
closeAddingWork.addEventListener('click', () => {
  exhibitedWorks.style.display = 'block';
  addingWork.style.display = 'none';
});

// add files

addWorkInput.addEventListener('change', (e) => {
  if(e.target.files.length > 0) {
    let src = URL.createObjectURL(e.target.files[0]);


    let myWorks = document.querySelector('.add_info .my_works');
    let div = document.createElement('div');
    div.classList.add('my_work_img');
    myWorks.append(div)

    let img = document.createElement('img');
    div.append(img);

    let remove = document.createElement('i');
    remove.classList.add('fas');
    remove.classList.add('fa-times-circle');
    div.prepend(remove)
   
    img.src = src;
    img.style.display = 'block'

    div.addEventListener('mouseover', () => {
      remove.style.display = 'block'
    });
    div.addEventListener('mouseout', () => {
      remove.style.display = 'none'
    });
    
    remove.addEventListener('click', () => {
      div.style.display = 'none'
    })
  }
});

// добавить высота для textarea

function auto_hight(element) {
  element.style.height = '5px';
  element.style.height = (element.scrollHeight) + 'px';

}

// Добовить фото для профил и обложки

openEditBlock.addEventListener('click', () => {
  userBlock.style.display = 'none';
  editUserBlock.style.display = 'flex';
});

closeEditProfile.addEventListener('click', () => {
  userBlock.style.display = 'flex';
  editUserBlock.style.display = 'none';
})


uploadProfile.addEventListener('change', (e) => {
  if(e.target.files.length > 0) {
    let src = URL.createObjectURL(e.target.files[0]);
    let myAvatar = document.getElementById('editMyAvatar');
    let userBlockImg = document.querySelector('.user_block_info img');
    
    userBlockImg.src = src;
    myAvatar.src = src;
    userBlockImg.style.display = 'block'
    myAvatar.style.display = 'block'
  }
});

let headImg = document.querySelector('.header_profiles');
const [bgc1, bgc2, bgc3, bgc4, bgc5] = openCoverImages;


bgc1.addEventListener('click', () => {
  headImg.style.backgroundImage =  "url('assets/images/header.jpg')"
  
});
bgc2.addEventListener('click', () => {
  headImg.style.backgroundImage =  "url('assets/images/1.jpg')"
  
});
bgc3.addEventListener('click', () => {
  headImg.style.backgroundImage =  "url('assets/images/2.jpg')"
  
});
bgc4.addEventListener('click', () => {
  headImg.style.backgroundImage =  "url('assets/images/3.jpg')"
  
});

$(document).ready(function() {
  $('.cover_list').click(function() {
    $(this).siblings().removeClass('active');
    $(this).toggleClass('active');
  });
});

// modal

attachPassportPhoto.addEventListener('change', (e) => {
  let fileAddress = document.querySelector('.file_address');
  let iconFile = document.querySelector('.fa-file-alt');
  fileAddress.textContent =  e.target.files[0].name;
  fileAddress.style.color = '#00cf4d';
  iconFile.style.color = '#00cf4d';

});

// edit specialization
editSpecializationsBtn.addEventListener('click', () => {
  editSpecializations.style.display = 'none';
  addAndRemoveSpecializations.style.display = 'block'
})
// remove specialization

removeSpecializations.forEach((removeSpecialization) => {
  removeSpecialization.addEventListener('click', () => {
    removeSpecialization.parentElement.style.display = 'none'
  })
});

// Перетащить элемент

dragItems.forEach((dragItem) => {
  dragItem.addEventListener('dragstart', handleDragstart);
  dragItem.addEventListener('dragend', handleDragend);
});


function handleDragstart(e) {
  this.classList.add('drag_active');
  this.children[1].style.display = 'none'
}
function handleDragend(e) {
  this.classList.remove('drag_active');
  this.children[1].style.display = 'block'
}

new Sortable(dropZone, {
  animation: 200
})