let heroi = "vitor";
let Xp = 3000;
let nivel;

if (Xp < 1000) {
    nivel = "Ferro";
} else if (Xp >= 1001 && Xp <= 2000) {
    nivel = "Bronze";
} else if (Xp >= 2001 && Xp < 5000) {
    nivel = "Prata";
} else if (Xp >= 6001 && Xp <= 7000) {
    nivel = "Ouro";
} else if (Xp >= 7001 && Xp < 8000) {
    nivel = "Platina";
} else if (Xp >= 8001 && Xp <= 9000) {
    nivel = "Ascendente";
} else if (Xp >= 9001 && Xp <= 10000) {
    nivel = "Imortal";
} else if (Xp <= 10001) {
    nivel = "Radiante";
} else {
    nivel = "Outro";
}

console.log("O Herói de nome " + heroi + " está no nível de " + nivel);
