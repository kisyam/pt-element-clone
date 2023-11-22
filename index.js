const bottomMenu = document.querySelector('.bottom__menu');
const container = document.getElementById('container');
const menuItems = document.querySelectorAll('.menu-item');
const dropdowns = document.querySelectorAll('.dropdown');

// bottomMenu.addEventListener('mouseover', (e) => {
//   container.classList.add('on');
// });

// bottomMenu.addEventListener('mouseout', (e) => {
//   container.classList.remove('on');
// });

dropdowns.forEach((dropdown) => {
  dropdown.addEventListener('mouseover', (e) => {
    console.log(e.currentTarget);
    const isMenuItem = e.currentTarget.classList.contains('menu-item');
    if (isMenuItem) {
      container.classList.add('on');
    }
  });
});

dropdowns.forEach((dropdown) => {
  dropdown.addEventListener('mouseout', (e) => {
    container.classList.remove('on');
  });
});
