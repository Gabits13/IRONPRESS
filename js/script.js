    // Função para carregar a linguagem preferida ao carregar a página
    function loadPreferredLanguage() {
      const preferredLanguage = localStorage.getItem('preferredLanguage') || 'pt';
      changeLanguage(preferredLanguage);
    }
    
    // Chama a função ao carregar a página
    document.addEventListener('DOMContentLoaded', loadPreferredLanguage);
    
  
  document.addEventListener("DOMContentLoaded", function() {

    const themeSwitcher = document.getElementById('themeSwitcher');
    const themeIcon = document.getElementById('themeIcon');
  
    function toggleTheme() {
      if (document.body.classList.contains('dark-mode')) {
        document.body.classList.remove('dark-mode');
        themeIcon.classList.replace('bi-moon', 'bi-sun');
        localStorage.setItem('theme', 'light');
      } else {
        document.body.classList.add('dark-mode');
        themeIcon.classList.replace('bi-sun', 'bi-moon');
        localStorage.setItem('theme', 'dark');
      }
    }
  
    themeSwitcher.addEventListener('click', toggleTheme);
  
    // Verificar o tema salvo no localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.body.classList.add('dark-mode');
      themeIcon.classList.replace('bi-sun', 'bi-moon');
    } else {
      document.body.classList.remove('dark-mode');
      themeIcon.classList.replace('bi-moon', 'bi-sun');
    }
  


    const themeSwitcher2 = document.getElementById('themeSwitcher2');
    const themeIcon2 = document.getElementById('themeIcon2');
  
    function toggleTheme2() {
      if (document.body.classList.contains('dark-mode')) {
        document.body.classList.remove('dark-mode');
        themeIcon2.classList.replace('bi-moon', 'bi-sun');
        localStorage.setItem('theme', 'light');
      } else {
        document.body.classList.add('dark-mode');
        themeIcon2.classList.replace('bi-sun', 'bi-moon');
        localStorage.setItem('theme', 'dark');
      }
    }
  

   themeSwitcher2.addEventListener('click', toggleTheme2);
  

    // Verificar o tema salvo no localStorage (para o segundo botão)
    if (savedTheme === 'dark') {
      document.body.classList.add('dark-mode');
      themeIcon2.classList.replace('bi-sun', 'bi-moon');
    } else {
      document.body.classList.remove('dark-mode');
      themeIcon2.classList.replace('bi-moon', 'bi-sun');
    }
  
  });
  
   // Lógica do botão menu hamburguer
document.getElementById('menu-toggler').addEventListener('click', function () {
  var sidebar = document.getElementById('sidebar');
  var backButton = document.getElementById('back-button');
  sidebar.classList.toggle('active');
  backButton.classList.toggle('active');
});

// Lógica do botão "Voltar" no menu (back-button)
document.getElementById('back-button').addEventListener('click', function () {
  var sidebar = document.getElementById('sidebar');
  var backButton = document.getElementById('back-button');
  sidebar.classList.remove('active');
  backButton.classList.remove('active');
});

// Fecha o menu ao clicar fora da sidebar
document.addEventListener('click', function(event) {
  var sidebar = document.getElementById('sidebar');
  var menuToggler = document.getElementById('menu-toggler');
  var backButton = document.getElementById('back-button');

  // Verifica se o clique foi fora da sidebar e do botão de menu
  if (!sidebar.contains(event.target) && !menuToggler.contains(event.target) && sidebar.classList.contains('active')) {
      sidebar.classList.remove('active');
      backButton.classList.remove('active');
  }
});

// Lógica do botão "Voltar" do navegador (navbar-back-button)
document.getElementById('navbar-back-button').addEventListener('click', function () {
  window.history.back();
});

  

 // Função para verificar se os elementos estão visíveis na viewport
 function checkVisibility() {
  const sections = document.querySelectorAll('.fade-in-section');
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      section.classList.add('visible');
    }
  });
}
// Função para verificar se os elementos estão visíveis na viewport
function checkVisibility2() {
  const sections = document.querySelectorAll('.fade-in-sectionx');
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      section.classList.add('visible');
    }
  });
}
function checkVisibility3() {
  const sections = document.querySelectorAll('.fade-in-sectionx2');
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      section.classList.add('visible');
    }
  });
}

// Verificar visibilidade ao carregar a página
window.addEventListener('load', checkVisibility);
window.addEventListener('load', checkVisibility2);
window.addEventListener('load', checkVisibility3);
// Verificar visibilidade ao rolar a página
window.addEventListener('scroll', checkVisibility);
window.addEventListener('scroll', checkVisibility2);
window.addEventListener('scroll', checkVisibility3);


