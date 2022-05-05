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
const bgr_colors = document.querySelectorAll('.bgr-color');
const container = document.querySelector('.container');
// for (const bgr_color of bgr_colors) {

//    });
// }
for (let i = 0; i < bgr_colors.length; i++) {
   bgr_colors[i].addEventListener('click', function () {
      if ((bgr_colors[i] = 0)) {
         container.classList.add('bgr-color-1');
      }
   });
}
