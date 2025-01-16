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

document.addEventListener("DOMContentLoaded", function () {
  const nomeInput = document.getElementById("nome");
  const emailInput = document.getElementById("email");
  const phoneInput = document.getElementById("phone");
  const messageInput = document.getElementById("message");
  const btnEnviar = document.getElementById("btn-enviar");
  const errorMessages = {
    nome: document.getElementById("nome-error"),
    email: document.getElementById("email-error"),
    phone: document.getElementById("phone-error"),
    message: document.getElementById("message-error"),
  };

  // Função para validar o formulário e exibir mensagens de erro
  function validarFormulario() {
    let valid = true;
    
    // Validando nome
    if (nomeInput.value.trim() === "") {
      valid = false;
      mostrarErro(nomeInput, errorMessages.nome, "Obrigatório!");
    } else {
      limparErro(nomeInput, errorMessages.nome);
    }

    // Validando email
    if (!emailValido(emailInput.value)) {
      valid = false;
      mostrarErro(emailInput, errorMessages.email, "Insira um email válido!");
    } else {
      limparErro(emailInput, errorMessages.email);
    }

    // Validando telefone
    if (!phoneValido(phoneInput.value)) {
      valid = false;
      mostrarErro(phoneInput, errorMessages.phone, "Sem uso de letras!");
    } else {
      limparErro(phoneInput, errorMessages.phone);
    }

    // Validando mensagem
    if (messageInput.value.trim() === "") {
      valid = false;
      mostrarErro(messageInput, errorMessages.message, "Obrigatório!");
    } else {
      limparErro(messageInput, errorMessages.message);
    }

    return valid;
  }

  // Função para exibir a mensagem de erro
  function mostrarErro(input, errorElement, message) {
    input.closest(".input-box").classList.add("invalid");
    errorElement.textContent = message;
  }

  // Função para limpar a mensagem de erro
  function limparErro(input, errorElement) {
    input.closest(".input-box").classList.remove("invalid");
    errorElement.textContent = "";
  }

  // Função para verificar se o email tem o formato correto
  function emailValido(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  }

  // Função para validar o telefone e garantir que não contenha letras
  function phoneValido(phone) {
    const regex = /^[0-9\s\(\)\-]+$/; // Permite números, espaços, parênteses e traços
    return regex.test(phone);
  }

  // Habilita ou desabilita o botão de enviar com base na validação
  function atualizarBotaoEnviar() {
    if (validarFormulario()) {
      btnEnviar.disabled = false;
    } else {
      btnEnviar.disabled = true;
    }
  }

  // Monitorando mudanças nos campos para atualizar o botão de enviar
  nomeInput.addEventListener("input", atualizarBotaoEnviar);
  emailInput.addEventListener("input", atualizarBotaoEnviar);
  phoneInput.addEventListener("input", atualizarBotaoEnviar);
  messageInput.addEventListener("input", atualizarBotaoEnviar);

  // Evento para quando o botão de enviar for clicado
  btnEnviar.addEventListener("click", function (event) {
    event.preventDefault(); // Previne o envio do formulário

    if (validarFormulario()) {
      const successModal = new bootstrap.Modal(document.getElementById("successModal"));
      successModal.show();

      // Enviar automaticamente os dados após 5 segundos ou quando o usuário clicar no botão "Ir Agora"
      setTimeout(function () {
        enviarFormulario();
      }, 5000);

      document.getElementById("redirectNow").addEventListener("click", function () {
        enviarFormulario();
      });

      document.getElementById("closeModalButton").addEventListener("click", function () {
        enviarFormulario();
      });
    }
  });

  // Função que envia os dados do formulário
  function enviarFormulario() {
    const form = document.getElementById("orcamentoForm");
    form.submit(); // Submete o formulário
  }

  // Chama a função de atualização de botão quando a página for carregada
  atualizarBotaoEnviar();
});


//corrige uma coisa e aparece mil outros erros, pelo menos ta sem gambiarra agora :)






/* // Função para carregar a linguagem preferida ao carregar a página
    function loadPreferredLanguage() {
      const preferredLanguage = localStorage.getItem('preferredLanguage') || 'pt';
      changeLanguage(preferredLanguage);
    }
    
    // Chama a função ao carregar a página
    document.addEventListener('DOMContentLoaded', loadPreferredLanguage);
    */
