const numeroSenha = document.querySelector('.parametro-senha-texto');
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;
const checkbox = document.querySelectorAll('.checkbox');
const botoes = document.querySelectorAll('.parametro-senha-botao'); 
const forcasSenha = document.querySelector('.forca');
botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;
function diminuiTamanho(){
    if (tamanhoSenha > 1){
       // tamanhoSenha = tamanhoSenha-1;
        tamanhoSenha--;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}
function aumentaTamanho(){
    if (tamanhoSenha < 20){
       // tamanhoSenha = tamanhoSenha+1;
       tamanhoSenha++;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}

// codigo omitido
const campoSenha = document.querySelector('#campo-senha');
const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const letrasMinusculas = 'abcdefghijklmnopqrstuvxywz';
const numeros = '0123456789';
const simbolos = '!@%*?';
const valorEntropia = document.querySelector('.entropia');
function geraSenha(){
    let alfabeto = '';
    if (checkbox[0].checked){
    alfabeto = alfabeto + letrasMaiusculas;
    }
    if (checkbox[1].checked){
    alfabeto = alfabeto + letrasMinusculas;
    }
    if (checkbox[2].checked){
    alfabeto = alfabeto + numeros;
    }
    if (checkbox[3].checked){
    alfabeto = alfabeto + simbolos;
    }
    let senha = '';
    for (let i = 0; i < tamanhoSenha;i++){
    let numeroAleatorio = Math.random()*alfabeto.length;
    numeroAleatorio = Math.floor(numeroAleatorio);
    senha = senha + alfabeto[numeroAleatorio];
    }
    campoSenha.value = senha;
    classificasenha(alfabeto.length);
    }
function classificasenha(tamanhoalfabeto){
    let entropia = entropia * Math. log2(alfabeto.length);
    forcasSenha.classList.remove('fraca','media','forte');
    if (entropia > 57){
        forcasSenha.classList.add('forte');
    } else if (entropia > 35 && entropia < 57) {
        forcasSenha,classList.add('media');
    } else if (entropia < 35){
         forcasSenha.classList.add('fraca');
    }
}
valorEntropia.textContent = "um computador pode levar ate"+Math.floor(2**entropia)/(100e6*60*60*24)+"dias para descobrir essa senha";