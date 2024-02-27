

"use strict";



window.addEventListener('load', windowLoad);

function windowLoad() {
   document.addEventListener('click', documentActions);
}


function documentActions(e) {
   const targetElement = e.target

   //Burger

  
   if (targetElement.closest('.icon-menu')) {
    document.documentElement.classList.toggle('menu-open');
  
    // Зміна відображення логотипу при відкритті/закритті меню
    const logoBur = document.querySelector('.header__logo-burgers');
    logoBur.classList.toggle('visible', document.documentElement.classList.contains('menu-open'));

    const hourBur = document.querySelector('.header-hour-burgers');
    hourBur.classList.toggle('visible', document.documentElement.classList.contains('menu-open'));
  }
 

   //Animation-scrol

   if (targetElement.closest('[data-goto]')) {

      const goTo = targetElement.closest('[data-goto]').dataset.goto;
      const goToElement = document.querySelector(goTo);
      const headerHeight = document.querySelector('.header').offsetHeight;

      if (goToElement) {
         window.scrollTo({
            top: goToElement.offsetTop - (headerHeight + 15),
            behavior: "smooth"
         });
      }
      e.preventDefault();

   }

   //Delegation
   /*if (targetElement.closest('items-works__type') && !targetElement.closest('active')) {
      const activeElement = document.querySelector('.items-works__type.active');
      const elements = document.querySelectorAll('.items-works__items');
      const elementType = targetElement.dataset.workType;

      activeElement.closest.remove('active');
      targetElement.closest.add('active');
   }*/
// Burger



}

const itemsPerPage = 3; // Кількість елементів, що відображаються на сторінці
let currentPage = 1;    // Поточна сторінка


const dataContainer = document.getElementById('dataContainer');
const viewMoreButton = document.getElementById('viewMoreButton');


// Функція, яка відображає потрібну кількість елементів на сторінці
function showItems(page) {
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const items = dataContainer.getElementsByClassName('dataItem');

 
  
  for (let i = 3; i < items.length; i++) {
    if (i >= startIndex && i < endIndex) {
      items[i].style.display = 'block';

     
    } else {

      items[i].style.display = 'none';
      
      //items[]= 'block'
      
      

    }

   
  }
}

// При кліку на кнопку "Показати ще" відображаємо наступну сторінку елементів
viewMoreButton.addEventListener('click', () => {
   currentPage++;
   showItems(currentPage);

});

// Початкове відображення елементів
showItems(currentPage);

