/*
## Objetivo

Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói,
depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**"
*/

let nomeDoHeroi = "Silver the hedgehog"
let experienciaDoHeroi = 4500

if (experienciaDoHeroi <= 1000) {
    experienciaDoHeroi = "Ferro"
} else if (experienciaDoHeroi >= 1001 && experienciaDoHeroi <= 2000) {
    experienciaDoHeroi = "Bronze"
} else if (experienciaDoHeroi >= 2001 && experienciaDoHeroi <= 5000) {
    experienciaDoHeroi = "Prata"
} else if (experienciaDoHeroi >= 5001 && experienciaDoHeroi <= 7000) {
    experienciaDoHeroi = "Ouro"
} else if (experienciaDoHeroi >= 7001 && experienciaDoHeroi <= 8000) {
    experienciaDoHeroi = "Platina"
} else if (experienciaDoHeroi >= 8001 && experienciaDoHeroi <= 9000) {
    experienciaDoHeroi = "Ascendente"
} else if (experienciaDoHeroi >= 9001 && experienciaDoHeroi <= 10000) {
    experienciaDoHeroi = "Imortal"
} else if (experienciaDoHeroi >= 10001) {
    experienciaDoHeroi = "Radiante"
}

console.log(`O Herói de nome ${nomeDoHeroi} está no nível de ${experienciaDoHeroi}`)

