/**
 * translator.js
 *
 * Versão Corrigida: Só traduz automaticamente se o idioma preferido do navegador
 * for Português (pt), e o site ainda não tiver sido traduzido.
 * Se o navegador estiver em Inglês, a tradução automática é desativada.
 */

// Idioma nativo do seu site (clone da BBC)
const PAGE_LANGUAGE = 'en'; 
// Idioma alvo que queremos forçar, mas só para usuários PT
const TARGET_LANGUAGE = 'pt'; 

// 1. Função de Callback do Google Translate (Mantida)
function googleTranslateElementInit() {
    new google.translate.TranslateElement(
        {
            pageLanguage: PAGE_LANGUAGE,
            layout: google.translate.TranslateElement.InlineLayout.SIMPLE 
        },
        'google_translate_element'
    );
}

// 2. Função principal que gerencia a tradução
function forceTranslateIfPortugueseUser() {
    
    // a. Obtém o idioma preferido do navegador do usuário
    // Usa 'pt' como fallback se o idioma não for detectado
    const userLang = (navigator.language || navigator.userLanguage || TARGET_LANGUAGE).substring(0, 2);
    
    // b. Verifica o cookie de tradução para ver se a página JÁ foi traduzida
    // O cookie do Google para tradução de EN para PT é googtrans=/en/pt
    const translationCookieExists = document.cookie.indexOf(`googtrans=/${PAGE_LANGUAGE}/${TARGET_LANGUAGE}`) !== -1;

    // c. Lógica Corrigida: Só força a tradução se o usuário for PT
    
    // Se o idioma do navegador do usuário é Português (pt)
    if (userLang === TARGET_LANGUAGE) {
        
        // E o site ainda NÃO foi traduzido
        if (!translationCookieExists) {
            
            // Define o cookie para forçar a tradução de EN para PT
            document.cookie = `googtrans=/${PAGE_LANGUAGE}/${TARGET_LANGUAGE}; path=/; domain=${location.host}`;
            window.location.reload();
            
        }
    } else {
        // Se o idioma do navegador NÃO é Português (é Inglês, Espanhol, etc.), 
        // a tradução automática NÃO é acionada. O site permanece em Inglês.
    }
}

// 3. Executa a função após o carregamento total da janela
window.onload = forceTranslateIfPortugueseUser;