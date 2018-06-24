let numeros = [4, 6, 9, 3];
let soma = 0;

for(let numero of numeros){
    if(numero % 2 == 1){
        soma = soma + numero;
    }
}

alert(`A soma dos números ímpares é ${soma}`);