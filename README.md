# Validador de Cartão de Crédito

Esta aplicação valida números de cartões de crédito e determina a bandeira do cartão com base no número fornecido. A validação é feita utilizando o algoritmo de Luhn e a determinação da bandeira é feita através de expressões regulares.

## Funcionalidades

- Validação de números de cartões de crédito usando o algoritmo de Luhn.
- Determinação da bandeira do cartão de crédito com base no número do cartão.

## Bandeiras Suportadas

Atualmente, a aplicação suporta as seguintes bandeiras de cartões de crédito:

- Visa
- MasterCard
- American Express (Amex)
- Discover
- Diners Club
- JCB
- Elo
- Hipercard
- Aura
- EnRoute

## Como Usar

1. Clone este repositório para sua máquina local.
2. Navegue até o diretório do projeto.
3. Abra o arquivo `src/index.js` e substitua o valor da variável `numeroCartao` pelo número do cartão que deseja validar.
4. Execute o arquivo `index.js` usando Node.js.
5. Use Cartões ficticios com o gerador [4Devs](https://www.4devs.com.br/gerador_de_numero_cartao_credito) 

### Exemplo de Uso

```javascript
// Exemplo de uso
const numeroCartao = '5042990311387485'; // Substitua pelo número do cartão a ser validado
const resultado = validarEBandeiraCartao(numeroCartao);
console.log(`Cartão válido: ${resultado.valido}`);
console.log(`Bandeira do cartão: ${resultado.bandeira}`);
