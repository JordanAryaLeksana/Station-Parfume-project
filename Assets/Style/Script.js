const toggleButton = document.querySelector('.toggle-menu input');
const navList = document.querySelector('.nav-list ul');

toggleButton.addEventListener('click', function() {
  navList.classList.toggle('slide');
});