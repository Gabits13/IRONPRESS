   
    //api tradução, usando cookies
    // Função para configurar o Google Translate e garantir que o idioma seja salvo
function setupGoogleTranslate() {
  // Recupera o idioma salvo no cookie ou define 'pt' como padrão
  const savedLanguage = getCookie('language') || 'pt';

  function initializeGTranslate(language) {
    window.gtranslateSettings = {
      "default_language": language, // Define o idioma salvo ou o padrão
      "async_load": true,
      "show_language_name": true,
      "native_language_names": true,
      "detect_browser_language": true,
      "auto_redirect": true,
      "languages": ["pt", "es", "en"],
      "globe_color": "#66aaff",
      "wrapper_selector": ".gtranslate_wrapper",
      "horizontal_position": "left",
      "vertical_position": "bottom",
      "alt_flags": { "en": "usa", "pt": "brazil" },
      "onLanguageChanged": function(language) {
        setCookie('language', language, 365); // Salva o idioma no cookie por 365 dias
      }
    };
  }

  // Função para obter o valor de um cookie
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }

  // Função para definir um cookie
  function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000)); // Validade do cookie em dias
    const expires = `expires=${d.toUTCString()}`;
    document.cookie = `${name}=${value}; ${expires}; path=/`;
  }

  // Inicializa o widget com o idioma correto
  initializeGTranslate(savedLanguage);
}

// Chama a função de configuração
setupGoogleTranslate();

  
    
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

//pagina orçamento
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

//modal confirmação
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form[action='https://api.staticforms.xyz/submit']");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Mostra o modal de sucesso
    const successModal = new bootstrap.Modal(document.getElementById("successModal"));
    successModal.show();

    // Redireciona para a página inicial após 6 segundos
    setTimeout(() => {
      window.location.href = "https://ironpressusinagem.com.br/index.html";
    }, 6000);

    // Botão para redirecionamento imediato
    document.getElementById("redirectNow").addEventListener("click", function () {
      window.location.href = "https://ironpressusinagem.com.br/index.html";
    });
  });
});




/* // Função para carregar a linguagem preferida ao carregar a página
    function loadPreferredLanguage() {
      const preferredLanguage = localStorage.getItem('preferredLanguage') || 'pt';
      changeLanguage(preferredLanguage);
    }
    
    // Chama a função ao carregar a página
    document.addEventListener('DOMContentLoaded', loadPreferredLanguage);
    */
