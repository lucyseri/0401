'use strict';
const gallery = document.querySelector('.gallery');
const galleryUl = gallery.querySelector('ul');
const galleryUlLi = galleryUl.querySelectorAll('li');

const items = document.querySelector('.items');
const itemsUl = items.querySelector('ul');
const itemsUlLi = itemsUl.querySelectorAll('li');

const arrBg = [];

for (let i = 0; i < galleryUlLi.length; i++) {
  arrBg.push(`url(img/g${i}.jpg) no-repeat 50%/cover`);
  galleryUlLi[i].style.background = arrBg[i];
};


//방법1
/* 
  itemsUlLi.forEach((el, idx) => {
    el.addEventListener('click', (e) => {
      const eTarget = e.target;

      itemsUlLi.forEach((el2,idx2)=>{
        if(eTarget===el2){
          console.log(idx2)
          el2.classList.add('on');
        }else{
          el2.classList.remove('on');
        }
      });
    });
  });
  */


//방법2: 이벤트 위임
itemsUl.addEventListener('click', e => {
  const eTarget = e.target;
  
  itemsUlLi.forEach((el, idx) => {
    if (eTarget === el) {
      console.log(el, idx)
      el.classList.add('on');

      const gap=galleryUlLi[1].offsetLeft-galleryUlLi[0].offsetLeft;
      const goto=(-gap*idx)+'px';

      gallery.style.left=goto;

      gallery.classList.add('gallery-ani')
    } else {
      el.classList.remove('on');
    }
  });
});