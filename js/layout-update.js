// layout-update.js

document.addEventListener('DOMContentLoaded', function() {
    const style = document.createElement('style');
    style.id = 'layout-override-styles';

    const css = `
        /* 1. Alinhar tudo no centro da página */
        body, #__next {
            margin: 0;
            padding: 0;
            text-align: center;
        }

        /* Define uma largura máxima para o conteúdo principal para centralizá-lo em telas grandes. */
        .kSquvq, .etSgSK {
            width: 90% !important;
            max-width: 1200px !important;
            margin-left: auto !important;
            margin-right: auto !important;
            box-sizing: border-box;
            text-align: left;
        }

        /* 2. O cabeçalho deve se estivar para cobrir o topo inteiro da pagina e alinhar os elementos. */
        .sc-5eaafc6a-0, .sc-15592ee1-0, header {
            width: 100% !important;
            max-width: none !important;
        }
        
        nav, header > div {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 16px; 
        }

        /* 3. As imagens devem ser redimensionadas para caber na tela. */
        img {
            max-width: 100% !important;
            height: auto !important;
            display: block;
        }
        
        /* NOVO: Garante que o container da imagem esteja sempre visível e com cor clara, não cinza. */
        /* Isso resolve o problema da 'caixa cinza' que impede a visualização. */
        .sc-bGwLgP, .sc-hGgvgC, .sc-eGknjD {
            opacity: 1 !important; /* Força a opacidade para 1 (totalmente visível) */
            background-color: transparent !important; /* Remove o fundo cinza */
            visibility: visible !important; /* Garante que o elemento não está oculto */
        }
    `;

    style.appendChild(document.createTextNode(css));
    document.head.appendChild(style);

    // CÓDIGO JS PARA FORÇAR O CARREGAMENTO DE IMAGENS (Lazy Loading bypass)
    // Isso garante que o data-src seja transferido para src imediatamente.
    const lazyImages = document.querySelectorAll('img[data-src], img[data-srcset]');
    
    lazyImages.forEach(img => {
        // Move o data-src para src
        if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
        }
        
        // Move o data-srcset para srcset (para imagens responsivas)
        if (img.dataset.srcset) {
            img.srcset = img.dataset.srcset;
            img.removeAttribute('data-srcset');
        }
        
        // Remove o atributo loading="lazy" (se existir)
        if (img.getAttribute('loading') === 'lazy') {
            img.removeAttribute('loading');
        }
    });
});
