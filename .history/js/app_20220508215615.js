const open_project = document.querySelector('.box');
const box_container = document.querySelector('.box-container');
const close_box = document.querySelector('.close');
const list_project = document.querySelector('.list-project');
open_project.addEventListener('click', function () {
   box_container.classList.add('open');
});
close_box.addEventListener('click', function () {
   box_container.classList.remove('open');
});
box_container.addEventListener('click', function () {
   box_container.classList.remove('open');
});
list_project.addEventListener('click', function (event) {
   event.stopPropagation();
});
const palette = document.querySelector('.palette');
const list_color = document.querySelector('.list-color ul');
var bgr_colors = document.querySelectorAll('.bgr-color');
const container = document.querySelector('.container');
const text_colors = document.querySelectorAll('.title h1');
var click = true;
palette.addEventListener('click', function () {
   if (click) {
      list_color.classList.add('open');
      click = false;
   } else {
      list_color.classList.remove('open');
      click = true;
   }
});

function bgr_change() {
   for (let i = 0; i < bgr_colors.length; i++) {
      bgr_colors[i].addEventListener('click', function () {
         bgr_colors = i;
         if (bgr_colors == 0) {
            for (let text_color of text_colors) {
               text_color.classList.remove('text-color-2');
               text_color.classList.remove('text-color-3');
               text_color.classList.add('text-color-1');
            }
            container.classList.remove('bgr-color-2');
            container.classList.remove('bgr-color-3');
            container.classList.add('bgr-color-1');
         } else if (bgr_colors == 1) {
            for (let text_color of text_colors) {
               text_color.classList.remove('text-color-1');
               text_color.classList.remove('text-color-3');
               text_color.classList.add('text-color-2');
            }
            container.classList.remove('bgr-color-1');
            container.classList.remove('bgr-color-3');
            container.classList.add('bgr-color-2');
         } else if (bgr_colors == 2) {
            for (let text_color of text_colors) {
               text_color.classList.remove('text-color-1');
               text_color.classList.remove('text-color-2');
               text_color.classList.add('text-color-3');
            }
            container.classList.remove('bgr-color-1');
            container.classList.remove('bgr-color-2');
            container.classList.add('bgr-color-3');
         }
      });
   }
}
bgr_change();

const btn_user = document.querySelector('.user');
const btn_information = document.querySelector('.information');
const btn_skills = document.querySelector('.skills');

window.addEventListener('scroll', function () {
   document.getElementById('showScroll');
   console.log(window.pageYOffset);
});
btn_user.addEventListener('click', (e) => {
   e.preventDefault();
   document.body.scrollIntoView({ behavior: 'smooth', block: 'start' });
});
