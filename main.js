/**
 * main.js
 * Exemplo de JS para um menu de navegação responsivo (hamburger)
 * Necessita de um botão com id="menu-toggle" e um menu com id="nav-menu"
 */
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            // Alterna a classe 'active' para mostrar/esconder o menu
            navMenu.classList.toggle('active');
            
            // Adiciona acessibilidade
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
            menuToggle.setAttribute('aria-expanded', !isExpanded);
        });
    }

    // Se o seu site usa o Slick Slider, garanta que ele seja inicializado após o carregamento da página
    // if (typeof jQuery !== 'undefined' && typeof jQuery.fn.slick !== 'undefined') {
    //     $('.your-slider-selector').slick({
    //         // suas configurações do slick aqui
    //     });
    // }
});
/**
 * main.js (ADIÇÃO DO TRADUTOR GOOGLE)
 *
 * Este script carrega a API do Google Translate.
 * Ele cria um elemento <script> para a API e, em seguida,
 * inicializa a tradução no elemento com o ID 'google_translate_element'.
 */

// Função de Callback exigida pela API do Google Translate
function googleTranslateElementInit() {
    new google.translate.TranslateElement(
        {
            // Especifica a linguagem nativa do seu site (o clone da BBC é em Inglês)
            pageLanguage: 'en',
            // Define o layout do seletor (0 para barra horizontal, 2 para menu dropdown)
            layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
            // Opcional: Linguagens específicas que você quer que o tradutor ofereça
            // Neste caso, foco no português ('pt') e talvez espanhol ('es')
            includedLanguages: 'en,pt,es',
            // Opcional: Define a tradução inicial padrão para a página
            // O código abaixo pode ser removido se você não quiser traduzir a página
            // automaticamente no carregamento, mas o usuário terá que clicar.
            autoDisplay: true 
        },
        // O ID do elemento onde o widget de tradução será inserido
        'google_translate_element' 
    );
}

// O código restante do seu main.js (como o menu toggle) deve permanecer aqui:
document.addEventListener('DOMContentLoaded', () => {
    // ... Seu código existente para o menu toggle (menu-toggle, nav-menu) ...
});