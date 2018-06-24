let entrada1 = prompt("Digite a primeira nota");
let entrada2 = prompt("Digite a segunda nota");

// let nota1 = parseInt(prompt("Digite a primeira nota"));

let nota1 = parseInt(entrada1);
let nota2 = parseInt(entrada2);

let media = (nota1 + nota2) / 2;

if(media >= 7){
    alert(`O aluno foi aprovado com média ${media}`);
}
else{
    alert(`O aluno foi reprovado com média ${media}`);
}
// alert(`A nota 1 foi ${nota1} a nota 2 foi ${nota2} e a média foi ${media}`);