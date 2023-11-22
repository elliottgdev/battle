var button = document.getElementById("attack")
var magic = document.getElementById("magic")
var heal = document.getElementById("heal")
var flee = document.getElementById("flee")
var shopHeals = document.getElementById("plus-heals")
var shopStrength = document.getElementById("plus-strength")

var healthPara = document.getElementById("health")
var killPara = document.getElementById("kill-count")
var enemyHealthPara = document.getElementById("enemy-health")
var enemyDmgPara = document.getElementById("enemy-dmg")
var healsPara = document.getElementById("heals")
var moneyPara = document.getElementById("money")

var enemyHealth = 30
var enemyDmg = 15

var kills = 0

var health = 100
var baseDamage = 10
var healAmount = 15
var heals = 2
var money = 10
var canSpell = true

var isDead = false

function Attack(type){
    if (isDead) return
    switch(type){
        case (0):
            enemyHealth -= baseDamage
            alert("your warrior attacks dealing " + baseDamage + " damage!")
            break
        case (1):
            enemyHealth -= baseDamage / 2
            canSpell = false
            alert("your mage cast a spell dealing " + baseDamage / 2 + " damage!")
            break
        case (2):
            health += healAmount
            heals--
            alert("your healer healed your team for " + healAmount + " health!")
            if (health > 100){
                health = 100
            }
            break
        default:
            break
    }

    if (!canSpell){
        enemyHealth -= 3
        alert("spell poison dealt 3")
    }
    
    if (enemyHealth <= 0){
        enemyHealth = Math.floor(Math.random() * 50) + 15
        enemyDmg = Math.floor(Math.random() * 20) + 4
        kills++
        money += Math.floor(Math.random() * 15) + 5
        canSpell = true
        UpdateText()
    }
    else {
        if (Math.random() < .8)
            EnemyAttack(enemyDmg)
        else
            alert("enemy attacked and missed!")
        UpdateText()
    }
    if (health <= 0){
        isDead = true
        health = 0
        alert("you ded")
    }
}

function Shop(value){
    switch (value){
        case (0):
            if (money >= 10){
                money -= 10
                heals++
            }
            break
        case (1):
            if (money >= 30){
                money -= 30
                baseDamage += 4
            }
            break
        default:
            break
    }

    UpdateText()
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
    moneyPara.innerHTML = "money: $" + money
    healsPara.innerHTML = "heals: " + heals
}

function Tick(){

}

function UpdateEnemy(){
    let enemySprite = document.getElementById("enemy-sprite")
    enemySprite.src 
    const enemySpriteArray = [
    "images/enemies/eye.png",
    "images/enemies/demon_goblin.png",
    "images/enemies/goblin.png",
    "images/enemies/lil_skelly.png",
    "images/enemies/shroomy.png",
    "images/enemies/skelly.png"] 
    alert(enemySpriteArray)
}

button.onclick = function(){Attack(0)}
if (canSpell) magic.onclick = function(){Attack(1)} 
else magic.onclick = function(){alert("cant use that right now!")}
heal.onclick = function(){Attack(2)}
//flee.onclick = function(){Attack(3)}
shopHeals.onclick = function(){Shop(0)}
shopStrength.onclick = function(){Shop(1)}

var tickTimer = setInterval(function(){Tick()}, 16.666667)
UpdateText()