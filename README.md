**O Que Deve Ser Utilizado**

- Variáveis
- Operadores
- Laços de Repetição
- Estruturas de Decisões

## Objetivo

Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, e utilize uma estrutura de decisão para apresentar algumas das mensagens abaixo:

- Se XP for menor do que 1.000 = Ferro
- Se XP for entre 1.001 e 2.000 = Bronze
- Se XP for entre 2.001 e 5.000 = Prata
- Se XP for entre 6.001 e 7.000 = Ouro
- Se XP for entre 7.001 e 8.000 = Platina
- Se XP for entre 8.001 e 9.000 = Ascendente
- Se XP for entre 9.001 e 10.000 = Imortal
- Se XP for maior ou igual a 10.001 = Radiante

# Avaliação do Nível de um Herói

## Código

```javascript
let heroi = "vitor";
let Xp = 3000;

if (Xp < 1000) {
    console.log("Ferro");
} else if (Xp >= 1001 && Xp <= 2000) {
    console.log("Bronze");
} else if (Xp >= 2001 && Xp < 5000) {
    console.log("Prata");
} else if (Xp >= 6001 && Xp <= 7000) {
    console.log("Ouro");
} else if (Xp >= 7001 && Xp < 8000) {
    console.log("Platina");
} else if (Xp >= 8001 && Xp <= 9000) {
    console.log("Ascendente");
} else if (Xp >= 9001 && Xp <= 10000) {
    console.log("Imortal");
} else if (Xp <= 10001) {
    console.log("Radiante");
} else {
    console.log("Outro");
}

console.log("O Herói de nome " + heroi + " está no nível de " + Xp);

