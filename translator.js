/**
 * translator.js
 *
 * Implementa a tradução automática para Português no carregamento da página.
 * O código define o cookie de tradução e recarrega a página UMA ÚNICA VEZ
 * para ativar a tradução automática do Google, evitando o loop de piscadas.
 */

// 1. Função de Callback exigida pela API do Google Translate
// Esta função configura o widget, mas ele fica invisível.
function googleTranslateElementInit() {
    new google.translate.TranslateElement(
        {
            // Idioma original do seu clone da BBC (Inglês)
            pageLanguage: 'en', 
            // Opcional: Layout simples para o widget
            layout: google.translate.TranslateElement.InlineLayout.SIMPLE 
        },
        // ID do elemento onde o widget será inserido
        'google_translate_element'
    );
}

// 2. Função para traduzir automaticamente no carregamento
function forceTranslateToPortuguese() {
    // Verifica se o cookie de tradução para Português (/en/pt) JÁ existe no navegador.
    if (document.cookie.indexOf('googtrans=/en/pt') === -1) {
        
        // Se a página ainda não está em português (primeira visita ou cookies limpos):
        
        // Define o cookie para forçar o Google Translate a traduzir de Inglês (en) para Português (pt).
        document.cookie = 'googtrans=/en/pt; path=/; domain=' + location.host;
        
        // Recarrega a página. O widget lê o cookie e traduz imediatamente na próxima carga.
        window.location.reload();
        
    }
    // Se o cookie JÁ existe, o código não faz nada, evitando o loop e o bug de piscada.
}

// 3. Executa a função de tradução logo após o carregamento total da janela.
window.onload = forceTranslateToPortuguese;