const menuBtn = document.querySelector(".menu_btn");
const menu = document.querySelector(".menu");
const menuBlock = document.querySelector('.menu');
const homepageContent = document.querySelector(".homepage_content_container");
const header = document.querySelector(".logo_header");
const servicesMenuBtn = document.querySelector('.services_menu_content');
const servicesContent = document.querySelector('.services_content_block');
const apothekeContent = document.querySelector('.apotheke_content');
const servicesContentList = document.querySelectorAll('.services_content');
const clinicBtn = document.querySelector('.clinic_section');
const apothekeBtn = document.querySelector('.apotheke_section');
const btnServices = document.querySelector('.button_services');
const galleryBtn = document.querySelector('.gallery_btn'),
    hidenPhoto = document.querySelectorAll('.hidden_photo'),
    gallery = document.querySelector('.gallery_container'),
    popUpContainer = document.querySelector('.pop-up_gallery'),
    closePopUP = document.querySelector('.pop-up_close'),
    popUpContent = document.querySelector('.pop-up_img'),
    galleryPhoto =document.querySelectorAll('.gallery_photo');
const map = L.map('map').setView([49.83329, 24.01095], 21);

const tiles = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' }).addTo(map);
    
const marker = L.marker([49.83305, 24.00928]).addTo(map);
    


menuBtn.addEventListener("click", showMenu);
menuBlock.addEventListener('click', showMenu);
servicesMenuBtn.addEventListener('click',showServicesContent);
clinicBtn.addEventListener('click', changeClinicClass);
apothekeBtn.addEventListener('click',changeApothekeClass);
gallery.addEventListener('click', showPopUp);
galleryBtn.addEventListener('click', showMorePhoto);
closePopUP.addEventListener('click',closePop);

function showtarget(e){
    console.log(e.srcElement.classList);
}

function changeApothekeClass(e){
    e.target.classList.toggle('show_apotheke');
    clinicBtn.classList.toggle('hide_clinic'); 
    servicesMenuBtn.classList.toggle('hide_menu_content');
    servicesContent.classList.toggle('hide_services_content'); 
    apothekeContent.classList.toggle('hide_apotheke_content'); 
    btnServices.classList.toggle('hide_button_services');
}

function changeClinicClass(e){
    apothekeBtn.classList.toggle('show_apotheke');
    e.target.classList.toggle('hide_clinic');
    servicesMenuBtn.classList.toggle('hide_menu_content'); 
    servicesContent.classList.toggle('hide_services_content'); 
    apothekeContent.classList.toggle('hide_apotheke_content'); 
    btnServices.classList.toggle('hide_button_services');
}

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

  function resetForm(){
alert('Good');
}

