const textConselho = document.querySelector('.text-conselho')
const button = document.getElementById('botao')
const botaoText = document.querySelector('.botaoText');

//me conecta com a API
const fetchAdvice = async () => {
    const APIResponse = await fetch('https://api.adviceslip.com/advice');
    const data = await APIResponse.json();
    return data.slip.advice;
};

const renderConselho = async () => {
    // Recuperei o conselho aleatório
    const conselho = await fetchAdvice();

    // Concatenei as aspas com o conselho
    const conselhoCompleto = '"' + conselho + '"';

    // Renderizei o conselho na div "text-conselho"
    textConselho.textContent = conselhoCompleto;
};

button.addEventListener('click', () => {

   renderConselho();
});

// Função para atualizar o conteúdo do botão no responsivo
const updateBotaoTextContent = () => {
  if (window.innerWidth < 400) {
    botaoText.textContent = '↓';
  } else {
    botaoText.textContent = '→';
  }
};

// Atualiza o conteúdo inicial no carregamento da página
updateBotaoTextContent();

// Atualiza o conteúdo do botão quando a janela é redimensionada
window.addEventListener('resize', updateBotaoTextContent);



