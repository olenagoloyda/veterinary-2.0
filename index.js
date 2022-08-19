const menuBtn = document.querySelector(".menu_btn");
const menu = document.querySelector(".menu");
const homepageContent = document.querySelector(".homepage_content_container");
const header = document.querySelector(".logo_header");
const servicesMenuBtn = document.querySelector('.services_menu_content');
const servicesContent = document.querySelector('.services_content_container');
const servicesContentList = document.querySelectorAll('.services_content');
menuBtn.addEventListener("click", showMenu);

servicesMenuBtn.addEventListener('click',showServicesContent);


function showServicesContent(e){
    const servicesMenuButtons =document.querySelectorAll('.services_menu');
    let targetElementClass=e.target.classList.value;
    let targetElement=e.target;
    let btnId = e.target.id;
    let sectionName = btnId.slice(0,-5);
    let actualContent = document.querySelector(`#${sectionName}_content`);

    if (targetElementClass == 'services_menu'){
    servicesContentList.forEach(item=>item.classList.remove('active'));
    servicesMenuButtons.forEach(button=>button.classList.remove('active'));
    targetElement.classList.add('active');
    actualContent.classList.add('active');}
}


function showMenu() {
    menu.classList.toggle("hide");
    homepageContent.classList.toggle("hide");
    menuBtn.classList.toggle("active");
  }

const galleryBtn = document.querySelector('.gallery_btn'),
    hidenPhoto = document.querySelectorAll('.hidden_photo'),
    gallery = document.querySelector('.gallery_container'),
    popUpContainer = document.querySelector('.pop-up_gallery'),
    closePopUP = document.querySelector('.pop-up_close'),
    popUpContent = document.querySelector('.pop-up_img'),
    galleryPhoto =document.querySelectorAll('.gallery_photo');



gallery.addEventListener('click', showPopUp);
galleryBtn.addEventListener('click', showMorePhoto);
closePopUP.addEventListener('click',closePop);

function showPopUp(e){
popUpContent.src = e.target.attributes.src.nodeValue;    
    console.log(popUpContainer);
popUpContainer.classList.remove('hide');
}

function closePop(){
    popUpContainer.classList.add('hide');
}

function showMorePhoto(){
hidenPhoto.forEach(photo => photo.classList.toggle('hidden_photo'));
}