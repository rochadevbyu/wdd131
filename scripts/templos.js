// --- 1. ATUALIZAÇÃO DO RODAPÉ ---
const hoje = new Date();
document.querySelector("#anoatual").textContent = hoje.getFullYear();
document.querySelector("#ultimaModificacao").textContent = "Última Modificação: " + document.lastModified;

// --- 2. MENU HAMBÚRGUER RESPONSIVO ---
const menuButton = document.querySelector('#menu-hamburguer');
const navigation = document.querySelector('nav ul');

menuButton.addEventListener('click', () => {
    // Alterna a classe 'open' na lista de navegação
    navigation.classList.toggle('open');
    // Alterna a classe 'open' no próprio botão
    menuButton.classList.toggle('open');
    
    // Troca o ícone de hambúrguer (≡) para o X (✖)
    if (menuButton.classList.contains('open')) {
        menuButton.innerHTML = '&#10006;'; // X
    } else {
        menuButton.innerHTML = '&#9776;'; // Hambúrguer
    }
});