﻿// ********** MultipleChoice.js *************
var hp = 2;
function updateHeroHealth(currentHP) {
    const health = document.querySelectorAll(".heroHP");
    health[currentHP].src = "Imgs/HealthEmpty.png";
    hp--;
}

function resetHealth() {
    const reset = document.querySelectorAll(".heroHP");
    reset.forEach(element => element.src = "Imgs/HealthFull.png")
}

function updateMonHealth(currentHP) {
    const health = document.querySelectorAll(".heroHP");
    health[currentHP].src = "Imgs/HealthEmpty.png";
}
function test() {
    updateHeroHealth(hp);
}