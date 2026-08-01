// 1. ATUALIZAÇÃO DAS DATAS NO RODAPÉ
const hoje = new Date();
// Corrigido o case sensitive do ID (anoAtual ao invés de anoatual)
document.querySelector("#anoAtual").textContent = hoje.getFullYear();
document.querySelector("#ultimaModificacao").textContent = "Última Modificação: " + document.lastModified;

// 2. CÁLCULO DA SENSAÇÃO TÉRMICA
// Pega os valores estáticos que estão no HTML
const temperatura = parseFloat(document.querySelector("#temperatura").textContent);
const velocidadeVento = parseFloat(document.querySelector("#vento").textContent);
const spanSensacao = document.querySelector("#sensacao");

// Função matemática para calcular a sensação térmica em Celsius
function calcularSensacaoTermica(temp, vento) {
    return Math.round(13.12 + (0.6215 * temp) - (11.37 * Math.pow(vento, 0.16)) + (0.3965 * temp * Math.pow(vento, 0.16)));
}

// Condição exigida pela tarefa: Temp <= 10 °C e Vento > 4.8 km/h
if (temperatura <= 10 && velocidadeVento > 4.8) {
    const resultado = calcularSensacaoTermica(temperatura, velocidadeVento);
    spanSensacao.textContent = resultado + " °C";
} else {
    spanSensacao.textContent = "N/A";
}
