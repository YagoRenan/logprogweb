function calculaArea2(){
    //recuperação de entradas
 var base   = document.getElementById("base").value;
 let altura = document.getElementById("altura").value;

 //processamento
 var area = (base*altura)/2;

//saida
 document.getElementById("area").value = area;
}


function calculaAreaAlert(){
    //recuperação de entradas
 var base   = parseFloat(window.prompt("Digite a base ","0") );
 let altura = parseFloat(window.prompt("DIgite a altura ","0") );


 //processamento
 var area = (base*altura)/2;

//saida
 window.alert("A Área é " + area);
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
function novosalarioAlerta(){
    let salarioantigo = parseFloat(window.prompt("Digite o Salário Antigo ","0") );
    let porcentagema = parseFloat(window.prompt("Digite a porcentagem de aumento ","0") );

    //processamento 
    let nvsalario = salarioantigo + (salarioantigo * porcentagema)/100;

    //saida
    window.alert("O novo salario é " + nvsalario);
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

function mediaaAlert(){
    //recuperação de dados
    let nota1 = parseFloat(window.prompt("Digite a primeira nota " , "0") );
    let nota2 = parseFloat(window.prompt("Digite a segunda nota  " , "0") );
    let nota3 = parseFloat(window.prompt("Digite a terceira nota " , "0") );
    let nota4 = parseFloat(window.prompt("Digite a quarta nota   " , "0") ); 
    
    //processamento

    let notaa= (nota1 + nota2 + nota3 + nota4 )/4;

    //saida
    window.alert("A média é " + notaa);
}

function mediap(){
    //recuperação de dados 
    let nota1 = parseFloat(document.getElementById("Nota1").value);
    let peso1 = parseFloat(document.getElementById("peso1").value);
    let nota2 = parseFloat(document.getElementById("Nota2").value);
    let peso2 = parseFloat(document.getElementById("peso2").value);

    //processamento 
    let mediapp= (nota1 * peso1 + nota2 * peso2)/(peso1 + peso2);

    //saida 
    document.getElementById("media").value = mediapp.toFixed(1);
}

function mediapALert(){
    //recuperação de dados 
    let nota1 = parseFloat(window.prompt("Digite a primeira nota ","0") );
    let peso1 = parseFloat(window.prompt("Digte o primeiro peso ","0") );
    let nota2 = parseFloat(window.prompt("Digite a segunda nota ","0") );
    let peso2 = parseFloat(window.prompt("Digte o segundo peso ","0") );
    
    //processamento
    let mediapp = (nota1 * peso1 + nota2 * peso2)/(peso1 + peso2);

    //saida
    window.alert("A media é " + mediapp.toFixed(1));

}

function calcular(){
    //recuperação de dados 
    let raio = parseFloat(document.getElementById("raio").value);
    
    
    //processamento
    let pi = 3.14;
    let diametro = 2 * raio;
    let comprimento = 2 * pi * raio;
    let area = 2 * pi * (raio*raio);
    let volume = 4/3 * pi * (raio*raio*raio);

    //saida
    document.getElementById("diametro").value = diametro;
    document.getElementById("comprimento").value = comprimento.toFixed(2);
    document.getElementById("area").value = area;
    document.getElementById("volume").value = volume.toFixed(2);
}

function calcularAlert(){

    let raio = parseFloat(window.prompt("Digite o valor do Raio ","0") );

    //processamento 
    let pi = 3.14;
    let diametro = 2 * raio;
    let comprimento = 2 * pi * raio;
    let area = 2 * pi * (raio*raio);
    let volume = 4/3 * pi * (raio*raio*raio);

    //saida 
     window.alert("Diâmentro é " + diametro);
     window.alert("Comprimento é " + comprimento.toFixed(2));
     window.alert("A Área é " + area);
     window.alert("O volume é " + volume.toFixed(2));



}