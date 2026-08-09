// 1. Dados estruturados em Arrays e Objetos
const challenges = [
  { title: 'Cálculos Complexos', desc: 'Dificuldade em apurar juros, multas e correção monetária de repasses em atraso.' },
  { title: 'Rigor do TCE-PE', desc: 'Necessidade de gerar anexos específicos sem inconsistências.' },
  { title: 'Segregação de Massas', desc: 'Controle rigoroso e isolado entre Fundo Financeiro e Fundo Previdenciário.' },
  { title: 'Dados Descentralizados', desc: 'Informações dispersas entre Prefeitura, Câmara e Autarquias.' }
];

const solutions = [
  { title: 'Mobilidade Total', desc: 'Sem instalação local. Acesse via PC, tablet ou smartphone.' },
  { title: 'Segurança de Dados', desc: 'Hospedagem em infraestrutura de alta performance.' },
  { title: 'Interface Intuitiva', desc: 'Design moderno com foco no conforto e produtividade do usuário.' },
  { title: 'Business Intelligence (BI)', desc: 'Dashboards interativos com visão em tempo real.' }
];

// 1. Dados Estruturados (O Pacote: Imagem + Desafio + Solução)
const recursos = [
    {
        img: 'imagens/parametros.webp', // A imagem que prova a solução
        alt: 'Tela de Cálculos Automáticos',
        desafioTitulo: 'Cálculos Complexos',
        desafioTexto: 'Dificuldade em apurar juros, multas e correção monetária de repasses em atraso.',
        solucaoTitulo: 'Automação Total',
        solucaoTexto: 'O sistema realiza todo o cálculo automaticamente com base nos índices oficiais, gerando a guia pronta para pagamento.'
    },
    {
        img: 'imagens/prestacao-contas.webp', 
        alt: 'Módulo de Anexos TCE',
        desafioTitulo: 'Rigor do TCE-PE',
        desafioTexto: 'Necessidade de gerar anexos específicos sem inconsistências e risco de multas.',
        solucaoTitulo: 'Conformidade Garantida',
        solucaoTexto: 'Geração de anexos no padrão exato exigido pelo tribunal, com auditoria prévia de erros.'
    },
    {
        img: 'imagens/segregacao.webp', // Substitua pela imagem correta depois
        alt: 'Contas Isoladas',
        desafioTitulo: 'Segregação de Massas',
        desafioTexto: 'Controle rigoroso e isolado entre Fundo Financeiro e Fundo Previdenciário.',
        solucaoTitulo: 'Gestão Inteligente',
        solucaoTexto: 'Módulos nativamente isolados, garantindo que as contas e balancetes nunca se misturem.'
    }
];

// 2. Função para renderizar os Cartões Unificados
function renderRecursos() {
    const container = document.getElementById('recursos-container');

    if (container) {
        let htmlOutput = ``;

        recursos.forEach(item => {
            // Criando um layout visual claro: Imagem -> Problema (Vermelho) -> Solução (Verde)
            htmlOutput += `
                <div class="card">
                    <img src="${item.img}" alt="${item.alt}" loading="lazy" class="card-img">
                    
                    <div style="margin-top: 1.5rem;">
                        <h4 style="color: #ef4444; margin: 0 0 0.5rem 0;">⚠️ O Desafio: ${item.desafioTitulo}</h4>
                        <p style="font-size: 0.95rem; margin-bottom: 1.5rem;">${item.desafioTexto}</p>
                        
                        <div style="border-top: 1px solid rgba(255, 255, 255, 0.1); padding-top: 1rem;">
                            <h4 style="color: #10b981; margin: 0 0 0.5rem 0;">✅ A Solução: ${item.solucaoTitulo}</h4>
                            <p style="font-size: 0.95rem; color: #cbd5e1;">${item.solucaoTexto}</p>
                        </div>
                    </div>
                </div>
            `;
        });

        container.innerHTML = htmlOutput;
    }
}

// 3. Chamando a função (Não esqueça de manter a do formulário e do footer no fim do arquivo!)
renderRecursos();

// 2. Função para renderizar conteúdo dinamicamente (Uso EXCLUSIVO de Template Literals)
function renderCards(dataArray, containerId) {
    const container = document.getElementById(containerId);
    
    // Ramificação condicional: só executa se o container existir na página atual
    if (container) {
        let htmlOutput = ``; 
        
        // Uso de método de array (forEach)
        dataArray.forEach(item => {
            htmlOutput += `
                <div class="card">
                    <h3>${item.title}</h3>
                    <p>${item.desc}</p>
                </div>
            `;
        });
        
        // Interação e modificação do DOM
        container.innerHTML = htmlOutput;
    }
}

// 3. Função para manipular o formulário e usar localStorage
function handleFormSubmit() {
    const form = document.getElementById('contact-form');
    
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Impede o recarregamento da página

            console.log("O botão foi clicado e a página não recarregou!");
            
            // Interação DOM (selecionar elementos)
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const workplace = document.getElementById('workplace').value;
            const referrer = document.getElementById('referrer').value;
            const messageContainer = document.getElementById('form-message');

            // Ramificação condicional
            if (name !== "" && phone !== "") {
                const userData = {
                    nome: name,
                    telefone: phone,
                    orgao: workplace,
                    indicacao: referrer
                };
                
                // Usar localStorage
                localStorage.setItem('sginf_lead', JSON.stringify(userData));
                
                // Saída dinâmica usando Template Literal
                messageContainer.innerHTML = `
                    <div style="background-color: rgba(16, 185, 129, 0.2); color: #10b981; border: 1px solid #10b981; padding: 1rem; border-radius: 8px; margin-top: 1rem; text-align: center; font-weight: bold;">
                        ✅ Obrigado, ${name}! Seus dados de demonstração para o órgão ${workplace} foram armazenados com sucesso.
                    </div>
                `;
                
                // Limpa o formulário
                form.reset();
            }
        });
    }
}

// 4. Função para atualizar dinamicamente o rodapé
function updateFooter() {
    const yearSpan = document.getElementById('anoatual'); // ID alterado aqui
    const lastModifiedSpan = document.getElementById('ultimaModificacao'); // ID alterado aqui
    
    if (yearSpan && lastModifiedSpan) {
        yearSpan.innerHTML = `${new Date().getFullYear()}`;
        lastModifiedSpan.innerHTML = `Última modificação: ${document.lastModified}`;
    }
}

// Chamando todas as funções quando o arquivo for carregado
renderCards(challenges, 'desafios-container');
renderCards(solutions, 'solucoes-container');
handleFormSubmit();
updateFooter();

