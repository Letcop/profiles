let editPaymentInp = document.querySelectorAll('#editPaymentInp');
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
let uploadProfile = document.querySelectorAll('#uploadProfile');
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
let editVerificationModal = document.getElementById('editVerificationModal');
let editCountryBlockList = document.querySelector('.edit_country_block .country__form_list');
let editCountryBlock = document.querySelector('.edit_country_block');
let closeEditVerification = document.getElementById('closeEditVerification');
let hideTypeAccount = document.querySelectorAll('.type_account .fa-pen');
let typeAccountInputs = document.querySelectorAll('.type_account_item input');
let typeAccount = document.querySelectorAll('.type_account');
let buttonGetCode = document.querySelector('.modal_verification .get_code');
let addSpecialization = document.querySelector('.add_specialization');
let searchSpecialization = document.querySelector('.search_specializations');
let saveSearch = document.querySelector('.save_search');
let saveAddRemove = document.querySelector('.save_add_remove');
let removeWorks = document.querySelectorAll('.remove_work');
let editWorkLists = document.querySelectorAll('.edit_work_list .my_img');
let yesRemove = document.querySelectorAll('.quation_remove .yesBtn');
let noRemove = document.querySelectorAll('.quation_remove .noBtn');
let addPhoto = document.querySelectorAll('.add_photo')

$(document).ready(function() {
  $('#addSkill').keyup(function(){
    if($(this).val().length>0 && $(this).val().length<10){
        $(this).val($(this).val().charAt(0).toUpperCase()+$(this).val().substr(1));
     }
});
$('#searchSpecializations').keyup(function(){
  if($(this).val().length>0 && $(this).val().length<10){
      $(this).val($(this).val().charAt(0).toUpperCase()+$(this).val().substr(1));
   }
});
})



// edit payment

editPaymentInp.forEach(elem => {

  elem.addEventListener('keypress', () => {

    if((event.charCode >= 48 && event.charCode <= 57) == true) {
      elem.parentElement.children[2].style.display = 'none'
      elem.parentElement.children[3].style.display = 'block'
    }
  });
})


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
    let quation = prompt('Вы точно хотите удалить вашу работу (да/нет)');
    if(quation == 'да') {
      removeWork.parentElement.style.display = 'none'
      alert('Ваше работе удалено')
    } else if(quation == '') {
      alert('Ваше работе не удалено')
    } else if(quation == 'нет') {
      alert('Ваше работе не удалено')
    }
  })
})

// edit modal works


editWorkLists.forEach(editWorkList => {
  editWorkList.addEventListener('mouseover', () => {
    editWorkList.children[1].style.display = 'block'
  })
});
editWorkLists.forEach(editWorkList => {
  editWorkList.addEventListener('mouseout', () => {
    editWorkList.children[1].style.display = 'none'
  })
})
 
removeWorks.forEach(remove => {
  remove.addEventListener('click', () => {
    // remove.nextElementSibling.style.display = 'flex'
    remove.parentElement.nextElementSibling.style.display = 'flex'
  })
});

yesRemove.forEach(yes => {
  yes.addEventListener('click', () => {
    // yes.parentElement.parentElement.parentElement.children[0].style.display = 'none'
    // yes.parentElement.parentElement.parentElement.children[2].style.display = 'none'
    yes.parentElement.parentElement.previousElementSibling.style.display = 'none'
    yes.parentElement.parentElement.style.display = 'none'
  });
})

noRemove.forEach(no => {
  no.addEventListener('click', () => {
    no.parentElement.parentElement.style.display = 'none'
  });
});

addPhoto.forEach(elem => {
  elem.addEventListener('change', (e) => {
    let img =  elem.offsetParent.children[0]
    if(e.target.files.length > 0) {
      let src = URL.createObjectURL(e.target.files[0]);
      img.src = src;
      img.style.display = 'block'

      // let myAvatar = document.getElementById('editMyAvatar');
      // let editMyAvatarMobile = document.getElementById('editMyAvatarMobile');
      // let mobileAvatarImg = document.getElementById('mobileAvatarImg');
      // let userBlockImg = document.querySelector('.user_block_info img');

      
      
      // userBlockImg.src = src;
      // myAvatar.src = src;
      // editMyAvatarMobile.src = src;
      // mobileAvatarImg.src = src;
      // userBlockImg.style.display = 'block'
      // myAvatar.style.display = 'block'
      // userBlockImg.style.display = 'block'

    }
  });
  })

// Добавить навыки

const skills = [
  {name: 'UX/UI-дизайн'},
  {name: 'Моушн-дизайн/видеодизайн'},
  {name: 'Маркетинг'},
  {name: 'Верстка'},
  {name: 'Рекрутинг в IT'},
  {name: 'Юзабилити'},
  {name: 'SMM-маркетинг'},
  {name: 'SEO оптимизация'},
  {name: 'продвижение сайтов'},
  {name: 'PHP-программист'},
  {name: 'Frontend-программист'},
  {name: 'Backend-программист'},
  {name: 'Бухгалтерия'},
  {name: 'Переводы'},
  {name: '1С-программист'},
  {name: 'Системный администратор'},
  {name: 'Fullstack-программист'},
  {name: 'Вебмастер'},
  {name: 'Рерайтер'},
  {name: 'Модератор сайта'},
  {name: 'Технический дизайнер'},
  {name: '3D-дизайнер'},
  {name: 'Визуализатор'},
  {name: 'Менеджер по продажам'},
  {name: 'Электронная коммерция'},
  {name: 'Веб-дизайн'}
]


addSkillBtn.addEventListener('click', () => {
  const returnErrorText = document.getElementById('returnErrorText')
  for(let i = 0; i < skills.length; i++) {

  if(addSkill.value == skills[i].name) {
  
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
  })
 // removed skill
 removeSkillBox.forEach((removeSkill) => {
  removeSkill.addEventListener('click', () => {
    removeSkill.parentElement.style.display = 'none'
  })
}); 
return returnErrorText.innerText = ''
  }else if(addSkill.value == '') {
    returnErrorText.innerText = 'создайте свой навыки'
  }
  
  else {
    returnErrorText.innerText = 'Нет такой навыки'
  }
}

  

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
    removeSkill.parentElement.style.display = 'none'
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
    
    if (myWorks.children.length == 5) {
      // div.remove()
      div.style.display = 'none'
      addWorkInput.parentElement.children[0].style.display = 'none'
      addWorkInput.parentElement.children[2].innerText = 'Вы можете создать только четыре объекта'
      addWorkInput.parentElement.children[2].style.color = 'red'
      
    } 

    
    remove.addEventListener('click', () => {
      div.style.display = 'none';
      addWorkInput.parentElement.children[0].style.display = 'block'
      addWorkInput.parentElement.children[2].innerText = 'Перетаскивай объекты в это окно'
      addWorkInput.parentElement.children[2].style.color = '#12114a'
    });
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
let userBlockImg = document.querySelector('.user_block_info img');

uploadProfile.forEach(upload => {
  upload.addEventListener('change', (e) => {
    if(e.target.files.length > 0) {
      let src = URL.createObjectURL(e.target.files[0]);
      let myAvatar = document.getElementById('editMyAvatar');
      let editMyAvatarMobile = document.getElementById('editMyAvatarMobile');
      let mobileAvatarImg = document.getElementById('mobileAvatarImg');
      let userBlockImg = document.querySelector('.user_block_info img');

      
      
      userBlockImg.src = src;
      myAvatar.src = src;
      editMyAvatarMobile.src = src;
      mobileAvatarImg.src = src;
      userBlockImg.style.display = 'block'
      myAvatar.style.display = 'block'
      userBlockImg.style.display = 'block'

    }
  });
})



let headImg = document.querySelector('.header_profiles');
const [bgc1, bgc2, bgc3, bgc4, bgc5, mobilebgc1, mobilebgc2, mobilebgc3, mobilebgc4, mobilebgc5] = openCoverImages;



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


mobilebgc1.addEventListener('click', () => {
  headImg.style.backgroundImage =  "url('assets/images/header.jpg')"
  
});
mobilebgc2.addEventListener('click', () => {
  headImg.style.backgroundImage =  "url('assets/images/1.jpg')"
  
});
mobilebgc3.addEventListener('click', () => {
  headImg.style.backgroundImage =  "url('assets/images/2.jpg')"
  
});
mobilebgc4.addEventListener('click', () => {
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
});


buttonGetCode.addEventListener('click', () => {

  let valNum = buttonGetCode.previousElementSibling.children[0];
  let error = buttonGetCode.previousElementSibling.children[1];

  if(valNum.value == '') {
    error.style.display = 'block'
  }
  else {
    buttonGetCode.disabled = true;
    valNum.disabled = true;
    buttonGetCode.style.cursor = 'not-allowed'
    buttonGetCode.innerHTML = '<span id="timer"></span> <i class="fas fa-clock"></i>'
    let time = 300;
    let timer = document.getElementById('timer');
  
    setInterval(updateCountDown, 1000);
  
    function updateCountDown() {
      let minutes = Math.floor(time / 60)
      let seconds = time % 60
      minutes = minutes < 10 ? "0" + minutes:minutes
      seconds = seconds < 10 ? "0" + seconds:seconds
  
      timer.innerHTML = `${minutes}:${seconds}`
      time--;
    }
  
    setTimeout(function() {
      buttonGetCode.innerHTML = 'получить код ';
      buttonGetCode.disabled = false;
      buttonGetCode.style.cursor = 'pointer'
      valNum.disabled = false;
    }, 300000)
    error.style.display = 'none'
    
  }

})



const contries = [
    {contriename: "Абхазия"},
    {contriename: "Австралия"},
    {contriename: "Австрия"},
    {contriename: "Азербайджан"},
    {contriename: "Албания"},
    {contriename: "Алжир"},
    {contriename: "Ангола"},
    {contriename: "Андорра"},
    {contriename: "Антигуа и Барбуда"},
    {contriename: "Аргентина"},
    {contriename: "Армения"},
    {contriename: "Аруба"},
    {contriename: "Афганистан"},
    {contriename: "Багамы"},
    {contriename: "Бангладеш"},
    {contriename: "Барбадос"},
    {contriename: "Бахрейн"},
    {contriename: "Беларусь"},
    {contriename: "Белиз"},
    {contriename: "Бельгия"},
    {contriename: "Бенин"},
    {contriename: "Бермудские острова"},
    {contriename: "Болгария"},
    {contriename: "Боливия"},
    {contriename: "Босния и Герцеговина"},
    {contriename: "Ботсвана"},
    {contriename: "Бразилия"},
    {contriename: "Бруней"},
    {contriename: "Буркина Фасо"},
    {contriename: "Бурунди"},
    {contriename: "Бутан"},
    {contriename: "Вануату"},
    {contriename: "Ватикан"},
    {contriename: "Великобритания"},
    {contriename: "Венгрия"},
    {contriename: "Венесуэла"},
    {contriename: "Вьетнам"},
    {contriename: "Габон"},
    {contriename: "Гавайские острова"},
    {contriename: "Гайана"},
    {contriename: "Гаити"},
    {contriename: "Гамбия"},
    {contriename: "Гана"},
    {contriename: "Гваделупа"},
    {contriename: "Гватемала"},
    {contriename: "Гвинея"},
    {contriename: "Гвинея-Бисау"},
    {contriename: "Германия"},
    {contriename: "Гондурас"},
    {contriename: "Гонконг"},
    {contriename: "Гренада"},
    {contriename: "Греция"},
    {contriename: "Грузия"},
    {contriename: "Дания"},
    {contriename: "Джибути"},
    {contriename: "Доминика"},
    {contriename: "Доминикана"},
    {contriename: "Египет"},
    {contriename: "Замбия"},
    {contriename: "Зимбабве"},
    {contriename: "Израиль"},
    {contriename: "Израиль"},
    {contriename: "Индонезия"},
    {contriename: "Иордания"},
    {contriename: "Ирак"},
    {contriename: "Иран"},
    {contriename: "Ирландия"},
    {contriename: "Исландия"},
    {contriename: "Испания"},
    {contriename: "Италия"},
    {contriename: "Йемен"},
    {contriename: "Кабо-Верде"},
    {contriename: "Казахстан"},
    {contriename: "Каймановы острова"},
    {contriename: "Камбоджа"},
    {contriename: "Камерун"},
    {contriename: "Канада"},
    {contriename: "Канарские острова"},
    {contriename: "Катар"},
    {contriename: "Кения"},
    {contriename: "Кипр"},
    {contriename: "Киргизия"},
    {contriename: "Кирибати"},
    {contriename: "Китай"},
    {contriename: "Колумбия"},
    {contriename: "Коморы"},
    {contriename: "Конго"},
    {contriename: "Конго-Киншаса"},
    {contriename: "Коста-Рика"},
    {contriename: "Кот-д’Ивуар"},
    {contriename: "Куба"},
    {contriename: "Кувейт"},
    {contriename: "Лаос"},
    {contriename: "Латвия"},
    {contriename: "Лесото"},
    {contriename: "Либерия"},
    {contriename: "Ливан"},
    {contriename: "Ливия"},
    {contriename: "Литва"},
    {contriename: "Лихтенштейн"},
    {contriename: "Люксембург"},
    {contriename: "Маврикий"},
    {contriename: "Мавритания"},
    {contriename: "Мадагаскар"},
    {contriename: "Македония"},
    {contriename: "Малави"},
    {contriename: "Малайзия"},
    {contriename: "Мали"},
    {contriename: "Мальдивы"},
    {contriename: "Мальта"},
    {contriename: "Марокко"},
    {contriename: "Мартиника"},
    {contriename: "Маршалловы острова"},
    {contriename: "Мексика"},
    {contriename: "Мозамбик"},
    {contriename: "Молдова"},
    {contriename: "Монако"},
    {contriename: "Монголия"},
    {contriename: "Мьянма"},
    {contriename: "Намибия"},
    {contriename: "Науру"},
    {contriename: "Непал"},
    {contriename: "Нигер"},
    {contriename: "Нигерия"},
    {contriename: "Нидерланды"},
    {contriename: "Никарагуа"},
    {contriename: "Новая Зеландия"},
    {contriename: "Норвегия"},
    {contriename: "ОАЭ"},
    {contriename: "Оман"},
    {contriename: "Остров Святой Елены"},
    {contriename: "Пакистан"},
    {contriename: "Палау"},
    {contriename: "Панама"},
    {contriename: "Папуа - Новая Гвинея"},
    {contriename: "Парагвай"},
    {contriename: "Перу"},
    {contriename: "Польша"},
    {contriename: "Португалия"},
    {contriename: "Пуэрто-Рико"},
    {contriename: "Реюньон"},
    {contriename: "Россия"},
    {contriename: "Руанда"},
    {contriename: "Румыния"},
    {contriename: "Сальвадор"},
    {contriename: "Самоа"},
    {contriename: "Сан-Марино"},
    {contriename: "Сан-Томе и Принсипи"},
    {contriename: "Саудовская Аравия"},
    {contriename: "Свазиленд"},
    {contriename: "Северная Корея"},
    {contriename: "Северная Македония"},
    {contriename: "Сейшелы"},
    {contriename: "Сенегал"},
    {contriename: "Сен-Мартен"},
    {contriename: "Сент-Винсент и Гренадины"},
    {contriename: "Сент-Китс и Невис"},
    {contriename: "Сент-Люсия"},
    {contriename: "Сербия"},
    {contriename: "Сингапур"},
    {contriename: "Сирия"},
    {contriename: "Словакия"},
    {contriename: "Словения"},
    {contriename: "Соломоновы Острова"},
    {contriename: "Сомали"},
    {contriename: "Судан"},
    {contriename: "Суринам"},
    {contriename: "США"},
    {contriename: "Сьерра-Леоне"},
    {contriename: "Таджикистан"},
    {contriename: "Тайвань"},
    {contriename: "Тайланд"},
    {contriename: "Танзания"},
    {contriename: "Того"},
    {contriename: "Тонга"},
    {contriename: "Тринидад и Тобаго"},
    {contriename: "Тувалу"},
    {contriename: "Тунис"},
    {contriename: "Туркменистан"},
    {contriename: "Турция"},
    {contriename: "Уганда"},
    {contriename: "Узбекистан"},
    {contriename: "Украина"},
    {contriename: "Уоллис и Футуна"},
    {contriename: "Уругвай"},
    {contriename: "Фиджи"},
    {contriename: "Филиппины"},
    {contriename: "Финляндия"},
    {contriename: "Франция"},
    {contriename: "Хорватия"},
    {contriename: "Центрально-африканская республика"},
    {contriename: "Чад"},
    {contriename: "Черногория"},
    {contriename: "Чехия"},
    {contriename: "Чили"},
    {contriename: "Швейцария"},
    {contriename: "Швеция"},
    {contriename: "Шри-Ланка"},
    {contriename: "Эквадор"},
    {contriename: "Экваториальная Гвинея"},
    {contriename: "Эритрея"},
    {contriename: "Эстония"},
    {contriename: "Эфиопия"},
    {contriename: "ЮАР"},
    {contriename: "Южная Корея"},
    {contriename: "Ямайка"},
    {contriename: "Япония"}
]

editVerificationModal.addEventListener('click', () => {
  editCountryBlock.style.display = 'none'
});
closeEditVerification.addEventListener('click', () => {
  // editCountryBlockList.style.visibility = 'hidden'
  editCountryBlockList.classList.remove('active__sublist')
  editCountryBlock.style.display = 'block'
});


const showList = (iteam) => {
  const list = document.querySelectorAll(iteam);


  for(let i = 0; i < list.length; i++){
      list[i].addEventListener('click', () => {
          activeList(i)
      })
  }

  function activeList(index) {
      if(list[index].classList.contains('active__list') === true){
          list[index].classList.remove('active__list');
          list[index].nextElementSibling.classList.remove('active__sublist');

          setTimeout(() => {
              list[index].nextElementSibling.style.display = 'none'
          }, 300)
      }else{
          for(let i = 0; i < list.length; i++){
              list[i].classList.remove('active__list');
              list[i].nextElementSibling.classList.remove('active__sublist');
          }
          list[index].classList.add('active__list');
          list[index].nextElementSibling.style.display = "block";

          setTimeout(() => {
              list[index].nextElementSibling.classList.add('active__sublist')
          }, 10)

      }
  }

  function addCountries (iteam) {
      const listBlocks = document.querySelectorAll(iteam);
    listBlocks.forEach((listBlock) => {
      for(let i = 0; i < contries.length; i++){
          let div = document.createElement('div');
          div.classList.add('country__list_iteam');
          div.textContent = contries[i].contriename;
          listBlock.append(div)
          div.addEventListener('click', () => {
            changeCountry(contries[i].cites, div)
          })
      }

    })
  }
  function changeCountry(arr, iteam) {
      iteam.parentElement.previousElementSibling.querySelector('span').textContent = iteam.textContent;
      activeList(0);
  }
  addCountries('.country__form_list')
}

showList('.contry__form_btn');

hideTypeAccount.forEach(elem => {
  elem.addEventListener('click', () => {
    elem.parentElement.classList.toggle('hide_type_account');
  });
})



typeAccountInputs.forEach((input) => {
  input.addEventListener('change', () => {
    let typeAccountText = document.querySelectorAll('.typeAccount_text');
    // let specializations = document.querySelector('.tablet_specializations');
    // let performersAmount = document.querySelector('.performers_amount');
    // let customerAmount = document.querySelector('.customer_amount');
    typeAccountText.forEach(text => {
    text.innerText = input.value;

    if(text.innerText == 'Заказчик') {
      // exhibitedWorks.style.display = 'none'
      // performersAmount.style.display = 'none'
      // customerAmount.style.display = 'block'
      // specializations.classList.add('perfomers_list')
      // specializations.parentElement.classList.remove('col-lg-4')
      // specializations.parentElement.children[1].children[0].classList.add('specializations_list')
      // specializations.parentElement.children[1].children[1].classList.add('specializations_list')
      input.parentElement.parentElement.parentElement.classList.remove('hide_type_account')
    } else {
      // exhibitedWorks.style.display = 'block'
      // performersAmount.style.display = 'block'
      // customerAmount.style.display = 'none'
      // specializations.classList.remove('perfomers_list')
      // specializations.parentElement.classList.add('col-lg-4')
      // specializations.parentElement.children[1].children[0].classList.remove('specializations_list')
      // specializations.parentElement.children[1].children[1].classList.remove('specializations_list')
      input.parentElement.parentElement.parentElement.classList.remove('hide_type_account')

    }
    });
  })
});


// search block

window.onload = () => {
  let searchSpecializations = document.getElementById('searchSpecializations');

searchSpecializations.oninput = function() {
  let val = this.value.trim();
   let searchLists = document.querySelectorAll('.specializations_list label')
   
   if(val != ''){
    searchLists.forEach(elem => {
      if(elem.innerText.search(val) == -1) {
        elem.classList.add('hide')
        elem.previousElementSibling.style.display = 'none';
        elem.parentElement.parentElement.previousElementSibling.style.display = 'none'
      } 
    })
   }else {
    searchLists.forEach(elem => { 
      elem.classList.remove('hide')
      elem.previousElementSibling.style.display = 'flex';
      elem.parentElement.parentElement.previousElementSibling.style.display = 'block'

    })

  }
}
}


addSpecialization.addEventListener('click', () => {
  searchSpecialization.style.display = 'block'
  addAndRemoveSpecializations.style.display = 'none'
});

saveSearch.addEventListener('click', () => {
  searchSpecialization.style.display = 'none'
  editSpecializations.style.display = 'block'
});

saveAddRemove.addEventListener('click', () => {
  addAndRemoveSpecializations.style.display = 'none'
  editSpecializations.style.display = 'block'
});




// mobile row

let openEditBlockMobile = document.querySelector('.open_edit_block_mobile');
let editUserBlockMobile = document.querySelector('.edit_user_block_mobile');
let closeEditProfileMobile = document.querySelector('.close_edit_profile_mobile');

openEditBlockMobile.addEventListener('click', () => {
  openEditBlockMobile.parentElement.style.display = 'none'
  editUserBlockMobile.style.display = 'flex'
});

closeEditProfileMobile.addEventListener('click', () => {
  openEditBlockMobile.parentElement.style.display = 'block'
  editUserBlockMobile.style.display = 'none'
});

