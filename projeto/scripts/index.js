// 1. Dados estruturados
const desafios = [
  { titulo: 'Cálculos Complexos', descricao: 'Dificuldade em apurar juros, multas e correção monetária de repasses em atraso.' },
  { titulo: 'Rigor do TCE-PE', descricao: 'Necessidade de gerar anexos específicos sem inconsistências.' },
  { titulo: 'Segregação de Massas', descricao: 'Controle rigoroso e isolado entre Fundo Financeiro e Fundo Previdenciário.' },
  { titulo: 'Dados Descentralizados', descricao: 'Informações dispersas entre Prefeitura, Câmara e Autarquias.' }
];

const solucoes = [
  { titulo: 'Mobilidade Total', descricao: 'Sem instalação local. Acesse via PC, tablet ou smartphone.' },
  { titulo: 'Segurança de Dados', descricao: 'Hospedagem em infraestrutura de alta performance.' },
  { titulo: 'Interface Intuitiva', descricao: 'Design moderno com foco no conforto e produtividade do usuário.' },
  { titulo: 'Business Intelligence (BI)', descricao: 'Dashboards interativos com visão em tempo real.' }
];

const recursos = [
    {
        img: 'imagens/solucao-calculos.webp', 
        alt: 'Tela de Cálculos Automáticos',
        desafioTitulo: 'Cálculos Complexos',
        desafioTexto: 'Dificuldade em apurar juros, multas e correção monetária de repasses em atraso.',
        solucaoTitulo: 'Automação Total',
        solucaoTexto: 'O sistema realiza todo o cálculo automaticamente com base nos índices oficiais, gerando a guia pronta para pagamento.'
    },
    {
        img: 'imagens/solucao-tce.webp', 
        alt: 'Módulo de Anexos TCE',
        desafioTitulo: 'Rigor do TCE-PE',
        desafioTexto: 'Necessidade de gerar anexos específicos sem inconsistências e risco de multas.',
        solucaoTitulo: 'Conformidade Garantida',
        solucaoTexto: 'Geração de anexos no padrão exato exigido pelo tribunal, com auditoria prévia de erros.'
    },
    {
        img: 'imagens/solucao-segregacao.webp', 
        alt: 'Contas Isoladas',
        desafioTitulo: 'Segregação de Massas',
        desafioTexto: 'Controle rigoroso e isolado entre Fundo Financeiro e Fundo Previdenciário.',
        solucaoTitulo: 'Gestão Inteligente',
        solucaoTexto: 'Módulos nativamente isolados, garantindo que as contas e balancetes nunca se misturem.'
    },
    {
        img: 'imagens/solucao-dados.webp', 
        alt: 'Painel unificado de servidores, dependentes e rúbricas',
        desafioTitulo: 'Dados Descentralizados e Dispersos',
        desafioTexto: 'Informações pulverizadas entre Prefeitura, Câmara e Autarquias, gerando desalinhamento no quantitativo de servidores, dependentes e divergências nos valores de rúbricas pagas.',
        solucaoTitulo: 'Centralização e BI Comparativo',
        solucaoTexto: 'Visão unificada em painel único: acompanhamento em tempo real de servidores e dependentes, detalhamento analítico por rúbricas e comparativo evolutivo de valores em relação ao ano anterior.'
    }
];

// 2. Função para renderizar os Cartões Unificados
function renderizarRecursos() {
    const container = document.getElementById('recursos-container');

    if (container) {
        let htmlSaida = ``;

        recursos.forEach(item => {
            htmlSaida += `
                <div class="card">
                    <img src="${item.img}" alt="${item.alt}" loading="lazy" class="card-img">
                    
                    <div class="card-interno">
                        <h4 class="desafio-titulo">⚠️ O Desafio: ${item.desafioTitulo}</h4>
                        <p class="desafio-texto">${item.desafioTexto}</p>
                        
                        <div class="solucao-container">
                            <h4 class="solucao-titulo">✅ A Solução: ${item.solucaoTitulo}</h4>
                            <p class="solucao-texto">${item.solucaoTexto}</p>
                        </div>
                    </div>
                </div>
            `;
        });

        container.innerHTML = htmlSaida;
    }
}

// 3. Função para renderizar conteúdo dinamicamente
function renderizarCartoes(arrayDados, idContainer) {
    const container = document.getElementById(idContainer);
    
    if (container) {
        let htmlSaida = ``; 
        
        arrayDados.forEach(item => {
            htmlSaida += `
                <div class="card">
                    <h3>${item.titulo}</h3>
                    <p>${item.descricao}</p>
                </div>
            `;
        });
        
        container.innerHTML = htmlSaida;
    }
}

// 4. Função para controlar a lógica condicional do formulário de contato
function configurarLogicaFormulario() {
    // Pega todos os botões de rádio que têm o name="perfil"
    const radiosPerfil = document.getElementsByName('perfil');
    
    // Contêineres de cada perfil
    const perfilGestor = document.getElementById('gestor-perfil');
    const perfilParceiro = document.getElementById('parceiro-perfil');
    const perfilPrefeito = document.getElementById('prefeito-perfil');
    const perfilOutros = document.getElementById('outros-perfil');

    if (radiosPerfil.length > 0) {
        // Percorre cada um dos botões de rádio e adiciona o evento de escuta
        radiosPerfil.forEach(radio => {
            radio.addEventListener('change', function() {
                // Esconde todos os blocos sempre que o usuário mudar a opção
                if (perfilGestor) perfilGestor.style.display = 'none';
                if (perfilParceiro) perfilParceiro.style.display = 'none';
                if (perfilPrefeito) perfilPrefeito.style.display = 'none';
                if (perfilOutros) perfilOutros.style.display = 'none';

                // Mostra apenas o bloco correspondente ao botão selecionado
                if (this.value === 'gestor') {
                    if (perfilGestor) perfilGestor.style.display = 'block';
                } 
                else if (this.value === 'contador') {
                    if (perfilParceiro) perfilParceiro.style.display = 'block';
                } 
                else if (this.value === 'prefeito') {
                    if (perfilPrefeito) perfilPrefeito.style.display = 'block';
                } 
                else if (this.value === 'outros') {
                    if (perfilOutros) perfilOutros.style.display = 'block';
                }
            });
        });
    }
}

// 5. Função para manipular o envio do formulário e usar localStorage
function configurarEnvioFormulario() {
    const formulario = document.getElementById('formulario-contato');
    
    if (formulario) {
        formulario.addEventListener('submit', function(evento) {
            evento.preventDefault(); 
            
            const nome = document.getElementById('nome').value;
            const telefone = document.getElementById('telefone').value;
            const orgao = document.getElementById('orgao').value;
            const indicacao = document.getElementById('indicacao').value;
            const containerMensagem = document.getElementById('mensagem-formulario');

            if (nome !== "" && telefone !== "") {
                const dadosUsuario = {
                    nome: nome,
                    telefone: telefone,
                    orgao: orgao,
                    indicacao: indicacao
                };
                
                localStorage.setItem('sginf_lead', JSON.stringify(dadosUsuario));
                
                containerMensagem.innerHTML = `
                    <div class="mensagem-sucesso">
                        ✅ Obrigado, ${nome}! Seus dados de demonstração para o órgão ${orgao} foram armazenados com sucesso.
                    </div>
                `;
                
                formulario.reset();
            }
        });
    }
}

// 6. Função para atualizar dinamicamente o rodapé com a data formatada
function atualizarRodape() {
    const spanAno = document.getElementById('anoatual');
    const spanUltimaModificacao = document.getElementById('ultimaModificacao');
    
    if (spanAno && spanUltimaModificacao) {
        spanAno.innerHTML = `${new Date().getFullYear()}`;
        const dataCrua = new Date(document.lastModified);
        const dataFormatada = dataCrua.toLocaleDateString('pt-BR');
        spanUltimaModificacao.innerHTML = `Última modificação: ${dataFormatada}`;
    }
}

// 7. Evento principal: chama todas as funções quando o arquivo HTML termina de carregar
document.addEventListener('DOMContentLoaded', () => {
    renderizarCartoes(desafios, 'desafios-container');
    renderizarCartoes(solucoes, 'solucoes-container');
    renderizarRecursos();
    configurarEnvioFormulario();
    atualizarRodape();
    configurarLogicaFormulario();
});