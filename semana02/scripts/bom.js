const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('_______');

const li = document.createElement('li');

const botaoExcluir = document.createElement('button');

li.textContent = input.value;

botaoExcluir.textContent = '❌';

li.append(botaoExcluir);

lista.append(li);

button.addEventListener('click', function() {
});

if (input.value.trim() !== '') {
    list.append(li);
}

botaoExcluir.addEventListener('click', function() {
    list.removeChild(li);
    input.focus();
});

input.value = '';

input.focus();