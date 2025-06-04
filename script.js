/* Acredito não ser a melhor forma de resolver
 * Mas foi a que deu certo por enquanto
 * TODO melhorar a validação do formulário
 */

function analiza() {
    const gasolinaInput = document.getElementById('gasolina');
    const etanolInput = document.getElementById('etanol');
    const escolha = document.getElementById('escolha');
    const imgGasolina = document.getElementById('right');
    const imgEtanol = document.getElementById('left');

    // Esconde as imagens ao iniciar
    imgGasolina.style.display = 'none';
    imgEtanol.style.display = 'none';

    const gasolina = parseFloat(gasolinaInput.value);
    const etanol = parseFloat(etanolInput.value);

    if (
        isNaN(gasolina) || isNaN(etanol) ||
        gasolina <= 0 || etanol <= 0
    ) {
        escolha.innerHTML = "Por favor, insira valores válidos e maiores que zero.";
        escolha.style.color = "#d32f2f";
        return;
    }

    const calc = gasolina * 0.7;

    if (calc > etanol) {
        escolha.innerHTML = "Melhor opção: <strong>Etanol</strong>";
        escolha.style.color = "#388e3c";
        imgEtanol.style.display = 'block';
    } else if (calc < etanol) {
        escolha.innerHTML = "Melhor opção: <strong>Gasolina</strong>";
        escolha.style.color = "#1976d2";
        imgGasolina.style.display = 'block';
    } else {
        escolha.innerHTML = "Tanto faz: ambos têm o mesmo custo-benefício.";
        escolha.style.color = "#fbc02d";
        imgGasolina.style.display = 'block';
        imgEtanol.style.display = 'block';
    }
}

// Limpa o resultado e esconde imagens ao alterar valores
if (document.getElementById('gasolina')) {
    document.getElementById('gasolina').addEventListener('input', () => {
        document.getElementById('escolha').innerHTML = "";
        document.getElementById('right').style.display = 'none';
        document.getElementById('left').style.display = 'none';
    });
}
if (document.getElementById('etanol')) {
    document.getElementById('etanol').addEventListener('input', () => {
        document.getElementById('escolha').innerHTML = "";
        document.getElementById('right').style.display = 'none';
        document.getElementById('left').style.display = 'none';
    });
}
