document.getElementById('menu-toggler').addEventListener('click', function () {
    var sidebar = document.getElementById('sidebar');
    var backButton = document.getElementById('back-button');
    sidebar.classList.toggle('active');
    backButton.classList.toggle('active');
});

document.getElementById('navbar-back-button').addEventListener('click', function () {
    window.history.back();
});

document.getElementById('back-button').addEventListener('click', function () {
    var sidebar = document.getElementById('sidebar');
    var backButton = document.getElementById('back-button');
    sidebar.classList.remove('active');
    backButton.classList.remove('active');
});