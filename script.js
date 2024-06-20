//declaração do cambio das moedas
var taxasdecambio = {
    real: {
        dolar: 0.20,
        euro: 0.18,
        libra: 0.16,
        peso: 172.41
    },
    dolar: {
        real: 5.07,
        euro: 0.93,
        libra: 0.80,
        peso: 873.62
    },
    euro: {
        real: 5.45,
        dolar: 1.08,
        libra: 0.86,
        peso: 940
    },
    libra: {
        real: 6.34,
        dolar: 1.25,
        euro: 1.16,
        peso: 1093.97
    },
    peso: {
        real: 0.0058,
        dolar: 0.0011,
        euro: 0.0011,
        libra: 0.00091
    }
};
//função para calcular a escolha do usuário
function calcular() {
    var resposta = document.getElementById("valor").value;
    var moeda_inicial = document.getElementById("moeda_inicial").value;
    var moeda_Final = document.getElementById("moeda_final").value;

    var num = parseFloat(resposta);
    var taxaCambio = TaxaCambio(moeda_inicial, moeda_Final);
    var resultado = num * taxaCambio;

    //símbolo da moeda final
    var simboloMoeda = Simbolo(moeda_Final);

    // Exibindo o resultado com a taxa de câmbio e o símbolo da moeda
    document.getElementById('resultado').textContent = "A moeda selecionada convertida é: "+ simboloMoeda + resultado.toFixed(2) ;
}
//função para calcular se é possivel converter
function TaxaCambio(moeda_inicial, moeda_Final) {
    if(moeda_inicial==moeda_Final){
        alert("Selecione duas moedas diferentes")
        return;
    }
    if (!(moeda_inicial in taxasdecambio) || !(moeda_Final in taxasdecambio[moeda_inicial])) {
        alert("Taxa de câmbio não encontrada para as moedas selecionadas.");
        return 0;
    }
    return taxasdecambio[moeda_inicial][moeda_Final];
}

function Simbolo(moeda) {
    // Designa o símbolo das moedas a elas
    var simbolos = {
        real: "R$",
        dolar: "$",
        euro: "€",
        peso: "ARS",
        libra: "£"
    };

    // Checa se a moeda está presente nos símbolos
    if (moeda in simbolos) {
        return simbolos[moeda];
    } else {
        return moeda;
    }
}
