function calculaArea2(){
    //recuperação de entradas
 var base   = document.getElementById("base").value;
 let altura = document.getElementById("altura").value;

 //processamento
 var area = (base*altura)/2;

//saida
 document.getElementById("area").value = area;
}

function somar(){
    //recuperação de dados
    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat( document.getElementById("numero2").value);
    var numero3 = parseFloat(document.getElementById("numero3").value);
    
    //processamento 
    var somar = (numero1 + numero2 + numero3);
   

    //saida 

    document.getElementById("soma").value = somar;

}
function somarAlert(){
     //entrada de dados
     let numero1 = parseFloat(window.prompt("Digite o numero 1 ","0") );
     let numero2 = parseFloat(window.prompt("Digite o numero 2 ","0") );
     let numero3 = parseFloat(window.prompt("Digite o numero 3 ","0") );
 
     //processamento
     let soma = numero1 + numero2 + numero3;
 
     //saida
 
     window.alert("O Resultado da soma é " + soma);
}

function novosalario(){
    //recuperação de dados
    var salarioa = parseFloat(document.getElementById("salarioa").value);
    var porcentagem = parseFloat(document.getElementById("porcentagem").value);

    //processamento

    var nsalario = salarioa + (salarioa * porcentagem)/100;

    //saida
    document.getElementById("salarionovo").value = nsalario;
}

function mediaa(){
    //recuperação de dados
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);
    var nota3 = parseFloat(document.getElementById("nota3").value);
    var nota4 = parseFloat(document.getElementById("nota4").value);
  

    //processamento 
    var nota= (nota1 + nota2 + nota3 + nota4)/4;

    //saida 
    document.getElementById("media").value = nota;
}