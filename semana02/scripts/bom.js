// 1. SELEÇÕES INICIAIS
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul'); // Se for pela tag, é 'ul'. Se tiver ID, use '#id_da_lista'

// 2. A CAIXA PRINCIPAL: O CLIQUE DO BOTÃO
button.addEventListener('click', function() {

    // 3. A CAIXA SECUNDÁRIA: O IF
    if (input.value.trim() !== '') {
        
        const li = document.createElement('li');
        const botaoExcluir = document.createElement('button');
        
        li.textContent = input.value;
        botaoExcluir.textContent = '❌';
        
        li.append(botaoExcluir);
        list.append(li); // <-- Não esqueça de colocar o li na lista!

        // O evento de excluir fica DENTRO da caixa do if!
        botaoExcluir.addEventListener('click', function() {
            list.removeChild(li);
            input.focus();
        });

    } // <-- Fim da caixa do if

    // 4. LIMPEZA (Dentro da caixa principal, fora do if)
    input.value = '';
    input.focus();

}); // <-- Fim da caixa principal