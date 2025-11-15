/**
 * translator.js
 *
 * Implementa a tradução automática de forma inteligente:
 * 1. Só traduz se o idioma do navegador NÃO for Português.
 * 2. Só recarrega a página UMA ÚNICA VEZ para evitar bugs e loops.
 */

// Idioma nativo do seu site (clone da BBC)
const PAGE_LANGUAGE = 'en'; 
// Idioma alvo que queremos forçar
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
function forceTranslateIntelligently() {
    
    // a. Obtém o idioma preferido do navegador do usuário
    // Usa 'pt' como fallback seguro se o idioma não for detectado
    const userLang = (navigator.language || navigator.userLanguage || TARGET_LANGUAGE).substring(0, 2);
    
    // b. Verifica o cookie de tradução para ver se a página JÁ foi traduzida
    const translationCookie = document.cookie.indexOf(`googtrans=/${PAGE_LANGUAGE}/${TARGET_LANGUAGE}`) !== -1;

    // c. Lógica de tradução:
    // A tradução só será forçada se o idioma do navegador for o idioma NATIVO do site (Inglês)
    // OU se o idioma preferido do usuário for Português, mas o site ainda não foi traduzido.
    
    if (userLang === PAGE_LANGUAGE || (userLang === TARGET_LANGUAGE && !translationCookie)) {
        
        // Verifica se o site ainda não foi traduzido para o Português
        if (!translationCookie) {
            
            // Define o cookie e recarrega a página
            document.cookie = `googtrans=/${PAGE_LANGUAGE}/${TARGET_LANGUAGE}; path=/; domain=${location.host}`;
            window.location.reload();
            
        }
    } else {
        // Se o usuário não está em Inglês e não está em Português, 
        // ou se o site já foi traduzido, o código não faz nada.
        // O site permanece no idioma original (Inglês) até o usuário usar o seletor.
    }
}

// 3. Executa a função após o carregamento total da janela
window.onload = forceTranslateIntelligently;