document.querySelector('.parametro-senha-botao');
const numeroSenha = document.querySelector('.parametro-senha-texto');
let tamanhoSenha = 12;
senha. textContent = tamanhoSenha;
const botoes = document.querySelector('.parametro-senha-botao');
botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;
function diminuiTamanho(){
    if(tamanhoSenha > 1){
        // tamanhosenha = tamanhosenha -1;
    }
    numeroSenha.textContent = tamanhoSenha;
    gerasenha();
}
function aumentaTamanho(){
    if(tamanhoSenha < 20){
        //tamanhosenha = tamanhosenha +1;
    }
    numeroSenha.textContent = tamanhoSenha;
    gerasenha();
}
// codigo omitido
const camposenha = document.querySelector('#campo-senha');
const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
function gerasenha(){
    let senha = '';
    for(let i = 0; i < tamanhoSenha; i++) {
    let numeroaleatorio = Math.random()*letrasMaiusculas.length;
    numeroaleatorio = Math.floor(numeroaleatorio);
    senha = senha + letrasMaiusculas[numeroaleatorio];
    }
}
camposenha.value = senha;