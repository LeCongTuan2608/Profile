const open_project = document.querySelector('.box');
const box_container = document.querySelector('.box-container');
const close_boxs = document.querySelectorAll('.close ion-icon');
const list_project = document.querySelector('.list-project');
//hiện box project
open_project.addEventListener('click', function () {
   box_container.classList.add('open');
});
//click X đóng box
function hidebox() {
   box_container.classList.remove('open');
   box_question.classList.remove('open');
}
for (const close_box of close_boxs) {
   close_box.addEventListener('click', hidebox);
}
//đóng box project khi click ra ngoài
box_container.addEventListener('click', () => {
   box_container.classList.remove('open');
});
//ngăn chặn xự kiện nổi bọt
list_project.addEventListener('click', function (event) {
   event.stopPropagation();
});
//------------------------------------------------------------------------------
//xem thêm địa chỉ
const Xem_Them = document.querySelector('.see');
Xem_Them.addEventListener('click', () => {});
//xem them số điện thoại
const eye_phone = document.getElementById('eye-phone');
const box_question = document.querySelector('.box-question');
//mở box question
eye_phone.addEventListener('click', () => {
   box_question.classList.add('open');
});
//đóng hộp thoại question khi click ra ngoài
box_question.addEventListener('click', () => {
   box_question.classList.remove('open');
});
//ngăn chặn sự kiện nổi bọt
const box_child_question = document.querySelector('.question');
box_child_question.addEventListener('click', function (event) {
   event.stopPropagation();
});
function check() {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         box_question.classList.remove('open');
      }, 1000);
   });
}
const btn_check_answer = document.querySelector('.check-answer');
let value_answer = document.querySelector('.answer');
btn_check_answer.addEventListener('click', () => {
   if (value_answer.value == 'vũng tàu' || value_answer.value == 'Vũng Tàu') {
      let hide_box = async () => {
         let doi = await check;
      };
      hide_box();
      value_answer.value = '';
   }
});

//chọn màu background
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
// bắt sự kiện khi scroll
const btn_user = document.querySelector('.user');
const btn_information = document.querySelector('.information');
const btn_skills = document.querySelector('.skills');
// window.addEventListener('scroll', function () {
//    document.getElementById('showScroll');
//    console.log(window.pageYOffset);
// });
btn_user.addEventListener('click', () => {
   document.querySelector('.container').scrollIntoView({ behavior: 'smooth' });
});
btn_information.addEventListener('click', () => {
   document.querySelector('.card-intro').scrollIntoView({ behavior: 'smooth' });
});
btn_skills.addEventListener('click', () => {
   document.querySelector('.my-skills').scrollIntoView({ behavior: 'smooth' });
});
