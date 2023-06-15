//Questão 1

function verificarPrimo(numero){
    if (numero <2){
        return false
    }

    for (var i = 2; i*i <= numero; i++){
        if (numero % i === 0)
        return false;
    }
    return true;
    
}
function listar(){
    var primos = []
    for (numero  = 1; numero <= 1000; numero++){
        if (verificarPrimo(numero)) {
            console.log(numero);
        }
    }

    return primos;

}

//questão 2

function validarSenha(senha) {
    var maiuscula = /[A-Z]/.test(senha);
    var minuscula = /[a-z]/.test(senha);
    var numero = /[0-9]/.test(senha);
  
    if (senha.length >= 8 && maiuscula && minuscula && numero) {
      return true;
    } else {
      return false;
    }  
  }

//questão 3

function Fatorial(numero) {
    var resultado = 1;
  
    for (var f = 1; f <= numero; f++) {
      resultado *= f;
    }
  
    return resultado;
  }

//questão 4

function quadradoPerfeito(numero){
    var quadrado = numero**(1/2)
    while (quadrado*quadrado <= numero){
        if (quadrado*quadrado === numero)
        {return true;}
        quadrado++
    }
    return false;
}

