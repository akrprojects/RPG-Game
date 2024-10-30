let xp = 0;
let health = 100;
let gold = 50;
let currentWeaponIndex = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"];

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");   
const text = document.querySelector("#text");
const monsterHealthText = document.querySelector("#monsterHealth");

// Initializing Buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

function goTown(){
    button1.innerText = "Go to store";
    button2.innerText = "Go to cave";
    button3.innerText = "Fight Dragon";
    button1.onclick = goStore;        
    button2.onclick = goCave;
    button3.onclick = fightDragon;
    text.innerText = "You are in town square.";
}

function goStore(){
    button1.innerText = "Buy 10 health (10 gold)";
    button2.innerText = "Buy weapon (30 gold)";
    button3.innerText = "Go to town square";    
    text.innerText = "You enter the store.";
    button1.onclick = buyHealth;    
    button2.onclick = buyWeapon;
    button3.onclick = goTown;
}

function goCave(){
    console.log("Going to cave.");
}

function fightDragon(){
    console.log("Fighting the dragon.");
}



function buyHealth(){

}

function buyWeapon(){

}

function update(location){

}

const locations = [];

