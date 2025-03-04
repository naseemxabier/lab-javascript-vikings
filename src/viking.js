// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;}
        attack(){
       return this.strength
        } 
        receiveDamage(damage){
        this.health -= damage
        } 
    }

// Viking
class Viking extends Soldier {
    constructor (name, health, strength){
        super(health, strength);
        this.name = name;
    }
    receiveDamage(damage){
        this.health -= damage
        if(damage < this.health) {
            return `${this.name} has received ${damage} points of damage`
        }
        else if (damage >= this.health) {
            return `${this.name} has died in act of combat`
        }
    }
    battleCry (){
        return `Odin Owns You All!` 
    }
}

// Saxon
class Saxon extends Soldier {
    constructor (health, strength){
    super(health, strength)
}
    receiveDamage(damage){
        
        if(damage < this.health) {
            this.health -= damage
            return `A Saxon has received ${damage} points of damage`
        }
        else if (damage >= this.health) {
            return `A Saxon has died in combat`
        }
    }
}
    

// War
class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(Viking){
        this.vikingArmy.push(Viking)
    }
    addSaxon(Saxon){
        this.saxonArmy.push(Saxon)
    }
    vikingAttack(){
        let vikingAttack = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
        let saxonAttack = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
    }
    saxonAttack(){
        this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
    }
    showStatus(){
        if (!this.saxonArmy) {
            return `Vikings have won the war of the century!`
        }
        else if (!this.vikingArmy.Army){
            return `Saxons have fought for their lives and survived another day...`
        }
        else {
            return `Vikings and Saxons are still in the thick of battle.`
        }
    }
}
