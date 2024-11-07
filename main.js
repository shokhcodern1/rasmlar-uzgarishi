const buttons = document.querySelectorAll('.btn1, .btn2, .btn3, .btn4 ');
const img = document.querySelector('.img');


const images = [
  '5088.jpg',       
  '1695366146_1-3.jpg',  
  'images.jpg',     
  'lukka-680x453.jpg'  
];


buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    img.src = images[index];
  });
});
