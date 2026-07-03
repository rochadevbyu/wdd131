// selecione os elementos DOM para saída
const ano = document.querySelector("#ano");
const mês = document.querySelector("#mês");
const dia = document.querySelector("#dia");
const diadasemana = document.querySelector("#diadasemana");

// use o objeto Date() 
const hoje = new Date();

document.querySelector("#anoatual").textContent = hoje.getFullYear();

document.querySelector("#ultimaModificacao").textContent = "Última Modificação: " + document.lastModified;



completa.innerHTML = `Estilo full: <span class="destaque">${new Intl.DateTimeFormat(
    "pt-br",
    {
        dateStyle: "full"
    }
).format(hoje)}</span>`;

curta.innerHTML = `Estilo short: <span class="destaque">${new Intl.DateTimeFormat(
    "pt-br",
    {
        dateStyle: "short"
    }
).format(hoje)}</span>`;
média.innerHTML = `Estilo medium: <span class="destaque">${new Intl.DateTimeFormat(
    "pt-br",
    {
        dateStyle: "medium"
    }
).format(hoje)}</span>`;

ano.innerHTML = `Método getFullYear(): <span class="destaque">${hoje.getFullYear()}</span>`;
mês.innerHTML = `Método getMonth(): <span class="destaque">${hoje.getMonth()}</span>`;
dia.innerHTML = `Método getDate(): <span class="destaque">${hoje.getDate()}</span>`;
diadasemana.innerHTML = `Método getDay(): <span class="destaque">${hoje.getDay()}</span>`;
