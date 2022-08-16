const menuBtn = document.querySelector(".menu_btn");
const menu = document.querySelector(".menu");
const homepageContent = document.querySelector(".homepage_content_container");
const header = document.querySelector(".logo_header");
menuBtn.addEventListener("click", showMenu);

function showMenu() {
    menu.classList.toggle("hide");
    homepageContent.classList.toggle("hide");
    menuBtn.classList.toggle("active");
    console.log(menuBtn);
    console.log(homepageContent);
    console.log(menu);
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
// let newContent = e.target;
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