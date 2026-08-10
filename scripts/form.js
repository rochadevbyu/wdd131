// Array de Produtos fornecido pela atividade
const produtos = [
  { id: "fc-1888", nome: "capacitor de fluxo", classificacaomedia: 4.5 },
  { id: "fc-2050", nome: "fios elétricos", classificacaomedia: 4.7 },
  { id: "fs-1987", nome: "circuitos de tempo", classificacaomedia: 3.5 },
  { id: "ac-2000", nome: "reator de baixa tensão", classificacaomedia: 3.9 },
  { id: "jj-1969", nome: "equalizador de distorção", classificacaomedia: 5.0 }
];

// 1. Popula dinamicamente o select de produtos (apenas se o select existir na página)
const selectProduto = document.getElementById("produto");

if (selectProduto) {
    produtos.forEach(produto => {
        let option = document.createElement("option");
        option.value = produto.id; // value do array
        option.textContent = produto.nome; // texto de exibição do array
        selectProduto.appendChild(option);
    });
}

// 2. Lógica do localStorage (contador) na página de confirmação
const counterElement = document.getElementById("review-counter");

if (counterElement) {
    // Busca o número atual no localStorage, se não existir assume 0
    let numReviews = Number(window.localStorage.getItem("quantidade-avaliacoes")) || 0;
    
    // Incrementa 1
    numReviews++;
    
    // Salva o novo valor
    window.localStorage.setItem("quantidade-avaliacoes", numReviews);
    
    // Exibe na tela
    counterElement.textContent = numReviews;
}

// 3. Atualização padrão do Footer
const yearSpan = document.getElementById('currentyear');
const lastModifiedSpan = document.getElementById('lastModified');

if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

if (lastModifiedSpan) {
    lastModifiedSpan.textContent = `Última Modificação: ${document.lastModified}`;
}