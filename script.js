// Nome da Ferramenta: Conversor de Frequência SSE
// Versão: Versão 1.0
// Criador: Rafael da Rocha Leal
// CPF: 033.114.580-44
// Cargo: Técnico de Cronotacógrafo

const FATOR_CONVERSAO = 0.4494; // Fator de conversão de Hz para km/h

function limpar() {
    const frequencia = document.getElementById('frequencia');
    const resultado = document.getElementById('resultado');

    frequencia.value = '';
    resultado.innerText = 'Preparando o Resultado...';
}

function calcular() {
    const frequenciaInput = document.getElementById('frequencia').value;
    const resultado = document.getElementById('resultado');

    // Leitura da Frequência e validação
    const frequencia = parseFloat(frequenciaInput);
    if (isNaN(frequencia) || frequencia <= 0) {
        resultado.innerText = 'Por favor, insira um valor de frequência válido.';
        return;
    }

    // Cálculo da Velocidade
    const velocidade = frequencia * FATOR_CONVERSAO;

    // Exibição do Resultado com duas casas decimais
    resultado.innerText = `${velocidade.toFixed(2)} km/h`;
}
