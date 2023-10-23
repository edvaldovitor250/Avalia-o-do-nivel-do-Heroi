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
}
else if (Xp >= 7001 && Xp < 8000) {
    console.log("Platina");
} else if (Xp >= 8001 && Xp <= 9000) {
    console.log("Ascendente");
} else if (Xp >= 9001 && Xp <= 10000) {
    console.log("Imortal");
} else if (Xp <= 10001) {
    console.log("Radiante");
}
else {
    console.log("Outro");
}

console.log("O Herói de nome " + heroi + " está no nível de " + Xp)
