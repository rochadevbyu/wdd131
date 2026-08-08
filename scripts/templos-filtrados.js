// --- 1. ATUALIZAÇÃO DO RODAPÉ ---
const hoje = new Date();
document.querySelector("#anoatual").textContent = hoje.getFullYear();
document.querySelector("#ultimaModificacao").textContent = "Última Modificação: " + document.lastModified;

// --- 2. LISTA DE TEMPLOS ---
const templos = [
  {
    nomeDoTemplo: "Aba Nigeria",
    localizacao: "Aba, Nigéria",
    consagracao: "2005, 7 de agosto",
    area: 11500,
    urlDaImagem:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Manti Utah",
    localizacao: "Manti, Utah, Estados Unidos",
    consagracao: "1888, 21 de maio",
    area: 74792,
    urlDaImagem:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Payson Utah",
    localizacao: "Payson, Utah, Estados Unidos",
    consagracao: "2015, 7 de junho",
    area: 96630,
    urlDaImagem:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Yigo Guam",
    localizacao: "Yigo, Guam",
    consagracao: "2020, 2 de maio",
    area: 6861,
    urlDaImagem:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    nomeDoTemplo: "Washington D.C.",
    localizacao: "Kensington, Maryland, Estados Unidos",
    consagracao: "1974, 19 de novembro",
    area: 156558,
    urlDaImagem:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    nomeDoTemplo: "Lima Peru",
    localizacao: "Lima, Peru",
    consagracao: "1986, 10 de janeiro",
    area: 9600,
    urlDaImagem:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Cidade do México, México",
    localizacao: "Cidade do México, México",
    consagracao: "1983, 2 de dezembro",
    area: 116642,
    urlDaImagem:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // Adicione mais objetos de templos aqui...
  
  {
    nomeDoTemplo: "Recife, Brasil",
    localizacao: "Recife, Brasil",
    consagracao: "2000, 15 de dezembro",
    area: 37200,
    urlDaImagem:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/recife-brazil/400x250/recife-brazil-temple-lds-700211-wallpaper.jpg"
  },

  {
    nomeDoTemplo: "Rio de Janeiro, Brasil",
    localizacao: "Rio de Janeiro, Brasil",
    consagracao: "2022, 08 de maio",
    area: 29966,
    urlDaImagem:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rio-de-janeiro-brazil/800x500/1-001db7326e638032470a02813c9e47191ef74b0e.jpeg"
  },

  {
    nomeDoTemplo: "Fortaleza, Brasil",
    localizacao: "Fortaleza, Brasil",
    consagracao: "2019, 02 de junho",
    area: 36000,
    urlDaImagem:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/fortaleza-brazil/800x500/2-Fortaleza-Temple-Photo-2219774.jpg"
  },
];

// --- 3. MENU HAMBÚRGUER RESPONSIVO ---
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

// --- 4. ONDE OS CARTÕES VÃO APARECER ---
const galeria = document.querySelector(".galeria");

//--- 5. FUNÇÃO QUE RECEBE UMA LISTA DE TEMPLOS
function exibirTemplos(listaTemplos) {
    // 1. Limpamos a galeria (útil para quando formos filtrar depois)
    galeria.innerHTML = "";

    // Loop por cada templo da lista
    listaTemplos.forEach(templo => {
        // 3. Criamos o cartão em HTML
        let cartao = `
            <figure>
                <img src="${templo.urlDaImagem}" alt="${templo.nomeDoTemplo}" loading="lazy">
                <figcaption>
                    <h3>${templo.nomeDoTemplo}</h3>
                    <p>${templo.localizacao}</p>
                    <p>Consagração: ${templo.consagracao}</p>
                    <p>Área: ${templo.area} sq ft</p>
                </figcaption>
            </figure>
        `;
        
        // Insere o cartão na galeria
        galeria.innerHTML += cartao;
    });
}

// --- 6. CHAMADA DA FUNÇÃO ---
exibirTemplos(templos);

// --- 7. SELEÇÃO DOS BOTÕES NO HTML ---
const btnHome = document.querySelector("#btn-home");
const btnGrande = document.querySelector("#btn-grande");
const btnPequeno = document.querySelector("#btn-pequeno");
const btnAntigo = document.querySelector("#btn-antigo");
const btnNovo = document.querySelector("#btn-novo");

// --- 8. EVENTOS PARA OS BOTÕES ---
btnHome.addEventListener("click", () => {
    exibirTemplos(templos);
});


// --- 9. Filtro para Templos Grandes
btnGrande.addEventListener("click", () => {
    exibirTemplos(templos.filter(templo => templo.area > 90000));
});

// --- 10. Filtro para Templos Pequenos
btnPequeno.addEventListener("click", () => {
    exibirTemplos(templos.filter(templo => templo.area < 10000));
});

// --- 11. Filtro para Templos Antigos
btnAntigo.addEventListener("click", () => {
    exibirTemplos(templos.filter(templo => parseInt(templo.consagracao) < 1900));
});

// --- 12. Filtro para Templos Novos
btnNovo.addEventListener("click", () => {
    exibirTemplos(templos.filter(templo => parseInt(templo.consagracao) > 2000));
});