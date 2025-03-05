// Função para validar o número do cartão de crédito usando o algoritmo de Luhn
function validarCartao(numeroCartao) {
    const numeroInvertido = numeroCartao.split('').reverse();
    let soma = 0;

    for (let i = 0; i < numeroInvertido.length; i++) {
        let digito = parseInt(numeroInvertido[i]);

        if (i % 2 !== 0) {
            digito *= 2;
            if (digito > 9) {
                digito -= 9;
            }
        }

        soma += digito;
    }

    return soma % 10 === 0;
}

// Função para determinar a bandeira do cartão de crédito
function determinarBandeira(numeroCartao) {
    const bandeiras = {
        visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
        mastercard: /^5[1-5][0-9]{14}$/,
        amex: /^3[47][0-9]{13}$/,
        discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
        diners: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
        jcb: /^(?:2131|1800|35\d{3})\d{11}$/,
        elo: /^((636368)|(438935)|(504175)|(451416)|(636297)|(5067)|(4576)|(4011))\d+$/,
        hipercard: /^(606282\d{10}(\d{3})?)|(3841\d{15})$/,
        aura: /^50[0-9]{14,17}$/,
        enroute: /^(2014|2149)\d{11}$/
    };

    for (const [bandeira, regex] of Object.entries(bandeiras)) {
        if (regex.test(numeroCartao)) {
            return bandeira;
        }
    }

    return 'desconhecida';
}

// Função principal para validar e determinar a bandeira do cartão
function validarEBandeiraCartao(numeroCartao) {
    const valido = validarCartao(numeroCartao);
    const bandeira = determinarBandeira(numeroCartao);

    return {
        valido,
        bandeira
    };
}

// Exemplo de uso
const numeroCartao = '5042990311387485'; // Substitua pelo número do cartão a ser validado
const resultado = validarEBandeiraCartao(numeroCartao);
console.log(`Cartão válido: ${resultado.valido}`);
console.log(`Bandeira do cartão: ${resultado.bandeira}`);