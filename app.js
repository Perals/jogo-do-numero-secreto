let listaDeNumerosSorteados= [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else {
        if (chute > numeroSecreto){
            exibirTextoNaTela('p', 'O número secreto é menor');
        }else{
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }
    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
     numeroSecreto = gerarNumeroAleatorio();
     limparCampo();
     tentativas = 1;
     exibirMensagemInicial();
     document.getElementById('reiniciar').setAttribute('disabled', true);
}


/*
//Exercício 1
function calculoImc(peso,altura) {
    let imc = peso / (altura * altura);
    console.log(`Seu IMC é: ${imc}`);
}

calculoImc(130,1.70);

//Exercício 2
function calculaFatorial(numero) {
    let fatorial = numero;
    while (numero > 1) {
        fatorial = fatorial * (numero - 1);
        numero--;
        console.log(fatorial);
    }
}

//Exercício 3
function convertDolar(valorEmDolar) {
    let valor = valorEmDolar * 4.80;
    console.log('O valor em reais é: '+ valor);
}
convertDolar(2.00);

//Exercício 4
function areaPerimetro(altura, largura) {
    perimetro = 2 * (altura + largura);
    area = perimetro * 2;

    console.log(`O perimetro do é ${perimetro} a área é ${area}`);
}

areaPerimetro(5,10);

//Exercício 4
function areaPerimetroCircular(raio) {
    let pi = 3.14;
    let areCirculo = pi * (raio * raio);
    let perimetroCirculo = raio * (2 * pi);
    console.log(`A Area do circulo é ${areCirculo} e o perimetro ${perimetroCirculo}`);
}

areaPerimetroCircular(8);

//Exercício 5
function tabuada(numeroTabuada) {
    numero = 1;
    while (numero <=10) {
        let tabuadaExpressao = numeroTabuada * numero;
        numero++;
        console.log(tabuadaExpressao);
    }
}
tabuada(10);*/

