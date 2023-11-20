var button = document.getElementById("attack")
var magic = document.getElementById("magic")
var heal = document.getElementById("heal")
var flee = document.getElementById("flee")

button.onclick = function(){Attack(0)}
magic.onclick = function(){Attack(1)}
heal.onclick = function(){Attack(2)}
flee.onclick = function(){Attack(3)}

var healthPara = document.getElementById("health")
var killPara = document.getElementById("kill-count")
var enemyHealthPara = document.getElementById("enemy-health")
var enemyDmgPara = document.getElementById("enemy-dmg")

var enemyHealth = 30
var enemyDmg = 15

var kills = 0

var health = 100
var baseDamage = 10
var healAmount = 15

var isDead = false

function Attack(type){
    if (isDead) return
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

    if (enemyHealth <= 0){
        enemyHealth = Math.floor(Math.random() * 50) + 15
        enemyDmg = Math.floor(Math.random() * 20) + 4
        kills++
        UpdateText()
    }
    else EnemyAttack(enemyDmg)
    
    if (health <= 0){
        isDead = true
        health = 0
        alert("you ded")
    }
}

function EnemyAttack(dmg){
    health -= dmg
    alert("enemy did " + dmg + " damage!")
    UpdateText()
}

function UpdateText(){
    enemyHealthPara.innerHTML = "enemy health: " + enemyHealth
    healthPara.innerHTML = "health: " + health
    killPara.innerHTML = "kills: " + kills
    enemyDmgPara.innerHTML = "enemy damage: " + enemyDmg
}

function Tick(){

}

var tickTimer = setInterval(function(){Tick()}, 16.666667)
UpdateText()