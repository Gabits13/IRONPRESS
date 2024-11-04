const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

      


const translations = {
    'pt': {
  
      //navbar
  
      'home': '<i class="fas fa-home"></i> Home',
      'services': '<i class="fas fa-cogs"></i> Serviços',
      'about': ' <i class="fas fa-users"></i> Sobre Nós',
      'production': '<i class="fas fa-industry"></i> Produção',
      'contact': '<i class="fas fa-envelope"></i> Contato',
      'quote': '<i class="fas fa-dollar-sign"></i> Orçamento',
  
      //footer
  
      //links
      'o_que_somos_footer' : 'O que Somos',
      'home_footer' : 'Home',
      'sobre_nos_footer' : 'Sobre Nós',
      'contato_footer' : 'Contato',
      'o_que_fazemos_footer': 'O que Fazemos',
      'nossos_servicos_footer': 'Nossos Serviços',
      'nossa_producao_footer': 'Nossa Produção',
      //texto e botao do orcamento
      'conte_conosco_footer' : 'Conte conosco para o que precisar',
      'faça_orcamento_footer': 'Faça um orçamento!',
      'botao_orcamento_footer' : "Orçamento",
      'direitos_footer' : ' <p id= "direitos-footer">&copy; 2024 IRONPRESS USINAGEM&reg;. Todos os direitos reservados</p>',
      //orcamento e github modal
      'orcamento_Modal_Label': 'Escolha uma forma de contato para orçamento',
      'botao_fechar_footer': 'Fechar',
      'botao_fechar_footer_2': 'Fechar',
      'github_modal_label' : 'Sobre o desenvolvedor',
  
           //pagina orcamento
           'texto_capa_orcamento': 'Qualidade que você pode confiar! Conte conosco para seus projetos',
       
           
    },
    'es': {
  
       //navbar
  
      'home': ' <i class="fas fa-home"></i> Inicio',
      'services': '<i class="fas fa-cogs"></i> Servicios',
      'about': ' <i class="fas fa-users"></i> Nosotros',
      'production': '<i class="fas fa-industry"></i> Producción',
      'contact': '<i class="fas fa-envelope"></i> Contacto',
      'quote': ' <i class="fas fa-dollar-sign"></i> Presupuesto',
  
     //footer
  
      //links
      'o_que_somos_footer' : 'Quienes Somos',
      'home_footer' : 'Inicio',
      'sobre_nos_footer' : 'Nosotros',
      'contato_footer' : 'Contacto',
      'o_que_fazemos_footer': 'Que Hacemos',
      'nossos_servicos_footer': 'Nuestros Servicios',
      'nossa_producao_footer': 'Nuestra Producción',
      //texto e botao do orcamento
      'conte_conosco_footer' : 'Cuente con nosotros para lo que necesite y solicite un presupuesto!',
      'faça_orcamento_footer': 'Hacer un Presupuesto!',
      'botao_orcamento_footer' : "Presupuesto",
      //direitos footer
      'direitos_footer' : '<p id= "direitos-footer">&copy; 2024 IRONPRESS USINAGEM&reg;. Todos los derechos reservados</p>',
      //orcamento e github modal
      'orcamento_Modal_Label': 'Seleccione un método de contacto para solicitar un presupuesto.',
      'botao_fechar_footer': 'Cerrar',
      'botao_fechar_footer_2': 'Cerrar',
      'github_modal_label': 'Sobre el Programador',
  
           //pagina orcamento
           'texto_capa_orcamento': '¡Calidad en la que puedes confiar! Cuenta con nosotros para tus proyectos.',
        
    },
    'en': {
  
       //navbar
  
      'home': '<i class="fas fa-home"></i> Home',
      'services': '<i class="fas fa-cogs"></i> Services',
      'about': ' <i class="fas fa-users"></i> About Us',
      'production': '<i class="fas fa-industry"></i> Production',
      'contact': '<i class="fas fa-envelope"></i> Contact',
      'quote': ' <i class="fas fa-dollar-sign"></i> Quote',
  
       //footer
  
      //links
      'o_que_somos_footer' : 'Who we Are?',
      'home_footer' : 'Home',
      'sobre_nos_footer' : 'About Us',
      'contato_footer' : 'Contact',
      'o_que_fazemos_footer': 'What we Do?',
      'nossos_servicos_footer': 'Our Services',
      'nossa_producao_footer': 'Our Production',
      //texto e botao do orcamento
      'conte_conosco_footer' : 'We are here to help you with whatever you need',
      'faça_orcamento_footer': 'Get a Quote!',
      'botao_orcamento_footer' : "Quote",
      //direitos footer
      'direitos_footer' : ' <p id= "direitos-footer">&copy; 2024 IRONPRESS USINAGEM&reg;. All rights reserved</p>',
      //orcamento e github modal
      'orcamento_Modal_Label': 'Choose a contact method for a quote.',
      'botao_fechar_footer': 'Close',
      'botao_fechar_footer_2': 'Close',
      'github_modal_label': 'About the Developer',
  
      //pagina orcamento
    'texto_capa_orcamento': 'Quality you can trust! Count on us for your projects.',


  
    }
  };
  
  
  function changeLanguage(lang) {
  
  
    // Salva a linguagem escolhida no localStorage
    localStorage.setItem('preferredLanguage', lang);
  
    //navbar e sidebar
    document.getElementById('nav-home').innerHTML = translations[lang].home;
    document.getElementById('nav-home2').innerHTML = translations[lang].home;
    document.getElementById('nav-services').innerHTML = translations[lang].services;
    document.getElementById('nav-services2').innerHTML = translations[lang].services;
    document.getElementById('nav-about').innerHTML = translations[lang].about;
    document.getElementById('nav-about2').innerHTML = translations[lang].about;
    document.getElementById('nav-production').innerHTML = translations[lang].production;
    document.getElementById('nav-production2').innerHTML = translations[lang].production;
    document.getElementById('nav-contact').innerHTML = translations[lang].contact;
    document.getElementById('nav-contact2').innerHTML = translations[lang].contact;
    document.getElementById('nav-quote').innerHTML = translations[lang].quote;
    document.getElementById('nav-quote2').innerHTML = translations[lang].quote;
  
    //footer
  
    //links
    document.getElementById('o-que-somos-footer').textContent = translations[lang].o_que_somos_footer;
    document.getElementById('home-footer').textContent = translations[lang].home_footer;
    document.getElementById('sobre-nos-footer').textContent = translations[lang].sobre_nos_footer;
    document.getElementById('contato-footer').textContent = translations[lang].contato_footer;
    document.getElementById('o-que-fazemos-footer').textContent = translations[lang].o_que_fazemos_footer;
    document.getElementById('nossos-servicos-footer').textContent = translations[lang].nossos_servicos_footer;
    document.getElementById('nossa-producao-footer').textContent = translations[lang].nossa_producao_footer;
    document.getElementById('conte-conosco-footer').textContent = translations[lang].conte_conosco_footer;
    document.getElementById('faça-orcamento-footer').textContent = translations[lang].faça_orcamento_footer;
    document.getElementById('botao-orcamento-footer').textContent = translations[lang].botao_orcamento_footer;
    document.getElementById('direitos-footer').innerHTML = translations[lang].direitos_footer;
    document.getElementById('orcamentoModalLabel').textContent = translations[lang].orcamento_Modal_Label;
    document.getElementById('botao-fechar-footer').textContent = translations[lang].botao_fechar_footer;
    document.getElementById('botao-fechar-footer-2').textContent = translations[lang].botao_fechar_footer_2;
    document.getElementById('githubModalLabel').textContent = translations[lang].github_modal_label;
    
  
  
    //pagina orcamento
    document.getElementById('texto-capa-orcamento').textContent = translations[lang].texto_capa_orcamento;


      



  
  }
  
