let imagem = document.querySelector('img');
let input = document.querySelector('input');
let erro = document.querySelector('.erro');
let modal = document.querySelector('.modal');

function aumentar(){
    imagem.style.transform = 'scale(2)';
}

function diminuir(){
    imagem.style.transform = 'scale(1)';
}

function validarSenha(){
    if(input.value.length < 6){
        erro.style.opacity = 1;
    }else{
        erro.style.opacity = 0;
    }
}

function mostrarModal(){
    modal.style.transform = 'translateY(0)';
}
