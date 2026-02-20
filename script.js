// Seleção dos elementos da interface
const btn = document.getElementById('btnCalcular');
const resDiv = document.getElementById('resultado');

btn.addEventListener('click', function() {
    // 1. Captura e converte os valores
    const n1 = parseFloat(document.getElementById('nota1').value);
    const n2 = parseFloat(document.getElementById('nota2').value);

    // 2. Validação básica (verifica se é número e se está entre 0 e 10)
    if (isNaN(n1) || isNaN(n2) || n1 < 0 || n1 > 10 || n2 < 0 || n2 > 10) {
        alert("Por favor, digite notas válidas entre 0 e 10.");
        return;
    }

    // 3. Cálculo da média
    const media = ((n1 + n2) / 2).toFixed(1);

    // 4. Lógica de situação do aluno
    let situacao = "";
    let classeCSS = "";

    if (media >= 7) {
        situacao = "Aluno Aprovado! 🎉";
        classeCSS = "aprovado";
    } else if (media >= 5) {
        situacao = "Aluno em Recuperação 📝";
        classeCSS = "recuperacao";
    } else {
        situacao = "Aluno Reprovado ❌";
        classeCSS = "reprovado";
    }

    // 5. Exibição dos dados na tela
    resDiv.classList.remove('hidden');
    
    const mediaDisplay = document.getElementById('media-final');
    const statusDisplay = document.getElementById('situacao-texto');

    mediaDisplay.innerText = `Média: ${media}`;
    statusDisplay.innerText = situacao;
    
    // Limpa classes anteriores e adiciona a nova para mudar a cor
    statusDisplay.className = ""; 
    statusDisplay.classList.add(classeCSS);
});