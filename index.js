var numeroSecreto = parseInt(Math.random() * 1001);

// enquanto o chute for diferente ao número secreto
while(chute != numeroSecreto) {
var chute = prompt('Digite o número entre 1 e 1000');

//se o chute for igual ao numero
if (chute == numeroSecreto){
    alert('Acertou!')
} else if (chute > numeroSecreto){
    alert('Errou... o número secreto é menor')
} else if (chute < numeroSecreto) {
    alert('Errou.. o número secreto é maior')
}
}


 