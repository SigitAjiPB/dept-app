const asideBtn = document.getElementById('asideBtn');
const asideBar = document.getElementById('asideBar');

asideBtn.addEventListener('click', () => {
    asideBar.classList.toggle('hidden');
});