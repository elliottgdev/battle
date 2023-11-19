var button = document.getElementById("attack")
var magic = document.getElementById("magic")
var heal = document.getElementById("heal")
var flee = document.getElementById("flee")

button.onclick = function(){Attack(0)}
magic.onclick = function(){Attack(1)}
heal.onclick = function(){Attack(2)}
flee.onclick = function(){Attack(3)}

var healthPara = document.getElementById("health")

var health = 100
var enemyHealth = 30

var baseDamage = 10
var healAmount = 15

var enemyDmg = 20

function Attack(type){
    switch(type){
        case (0):
            enemyHealth -= baseDamage
            alert("you attack! you dealt " + baseDamage + " damage!")
            break
        case (1):
            enemyHealth -= baseDamage
            alert("you cast a spell dealing " + baseDamage + " damage!")
            break
        case (2):
            health += healAmount
            alert("you healed " + healAmount + " health!")
            break
        default:
            break
    }

    EnemyAttack(enemyDmg)
}

function EnemyAttack(dmg){
    health -= dmg
    alert("enemy did " + dmg + " damage!")
    UpdateText()
}

function UpdateText(){
    healthPara.innerHTML = "health: " + health
}

function Tick(){

}

var tickTimer = setInterval(function(){Tick()}, 16.666667)