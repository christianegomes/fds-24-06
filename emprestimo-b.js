let salarioEntrada = prompt("Digite seu salário");
let emprestimoEntrada = prompt("Digite o empréstimo desejado");
let parcelasEntrada = prompt("Digite a quantidade de parcelas");
let idadeEntrada = prompt("Digite sua idade");

let salario = parseFloat(salario);
let emprestimo = parseFloat(emprestimo);
let parcelas = parseFloat(parcelasEntrada);
let idade = parseFloat(idadeEntrada);

let umTercoSalario = salario * 0.3;
let valorParcela = emprestimo / parcelas;

let emprestimoAprovado = true;

if(idade < 18 || idade > 63){
    emprestimoAprovado = false;
    alert("Idade fora da faixa necessária");
}

if(parcelas > 24){
    emprestimoAprovado = false;
    alert("Quantidade de parcelas muito alta");
}

if(umTercoSalario < valorParcela){
    emprestimoAprovado = false;
    alert("Renda muito baixa");
}

if(emprestimoAprovado){
    alert("Empréstimo aprovado");
}else{
    alert("Empréstimo reprovado");
}