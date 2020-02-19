/* Acredito não ser a melhor forma de resolver
 * Mas foi a que deu certo por enquanto
 * TODO melhorar a validação do formulário
 */

function analiza() {

    var gasolina = document.getElementById('gasolina').value;
    var etanol = document.getElementById('etanol').value;
    var calc = gasolina * 0.7;

    if (gasolina == 0 || etanol == 0) {
        document.getElementById('escolha').innerHTML = "Aguardando os valores...";
    } else {
        if (calc > etanol) {
            document.getElementById('escolha').innerHTML = "Escolha Etanol";
        } else
            document.getElementById('escolha').innerHTML = "Escolha Gasolina";
    };
};
analiza();
