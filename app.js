let listasNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

//função que possui parametro (tag,texto)
function exibirTextonaTela(tag, texto) {
    let campo = document.querySelector(tag)
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
};

function exibirMensagemInicial() {
  //forma limpa  
  exibirTextonaTela('h1', 'Adivinhe o número secreto');
  exibirTextonaTela('p', 'Selecione um número entre 1 e 10');

}

exibirMensagemInicial();

function verificarChute() {
    let = chute =document.querySelector('input').value;
    console.log(chute == numeroSecreto);

    if (chute == numeroSecreto) {
        exibirTextonaTela('h1', 'Acertou!');

        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentiva';
        let mensagemTentativas = `Você descobriu o número com ${tentativas} ${palavraTentativa}!`;

        exibirTextonaTela('p', mensagemTentativas);

        document.getElementById('reiniciar').removeAttribute('disabled')

    } 
      else {
        if (chute > numeroSecreto) {
        exibirTextonaTela('p','O número secreto é menor');
      } 
    
     else {
      exibirTextonaTela('p', 'O número secreto é maior');
     }
     tentativas ++;
     limparCampo();
  }  
};

function gerarNumeroAleatorio() {
 
  let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
  let quantidadeDeElementosNaLista = listasNumerosSorteados.length;

  if(quantidadeDeElementosNaLista == numeroLimite) {
    listasNumerosSorteados = [];
  }

  if (listasNumerosSorteados.includes(numeroEscolhido)) {
      return gerarNumeroAleatorio();
  }  else {
     listasNumerosSorteados.push(numeroEscolhido);
      console.log(listasNumerosSorteados); 
     return numeroEscolhido;
  }

};
function limparCampo() {
  chute = document.querySelector('input');
  chute.value = '';
};

function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  tentativas = 1;
  exibirMensagemInicial();
  document.getElementById('reiniciar').setAttribute('disabled',true);
}

//1 forma de fazer, porém grande
//let titulo = document.querySelector('h1');
  //titulo.innerHTML = 'Adivinhe o número secreto';

//let paragrafo = document.querySelector('p');
  //paragrafo.innerHTML = 'Selecione um número entre 1 e 10';