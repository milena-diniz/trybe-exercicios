const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125, // energia esperitual
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30, // força 
  weaponDmg: 2, // força da arma
  damage: undefined, // 40
};

const dragon = {
  healthPoints: 350,  
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const damageDragon = (dragon) => {
  const danoDragon = Math.floor((Math.random() * (dragon.strength - 15)) + 15)
  return danoDragon
}
console.log(`Dragon: ${damageDragon(dragon)}`);

const damageWarrior = (warrior) => { // essa function é uma callback, pois SÓOO está sendo chamada no outro parametro de outra função.
  const danoWarrior = Math.floor((Math.random() * ( (warrior.strength * warrior.weaponDmg) - warrior.strength )) + 15)
  return danoWarrior
}
console.log(`Warrior: ${damageWarrior(warrior)}`);
  
const damageMage = (mage) => {
  if (mage.mana < 15) {
    return `Não possui mana suficiente`
  }
  
  return {
    dano: Math.floor((Math.random() * ((mage.intelligence * 2) - mage.intelligence) + 15 )),
    mana: (mage) => {
      let mana = mage.mana
      return mana -15
    }
  }
};
console.log(`Mago: ${damageMage(mage).dano}`);

const gameActions = {
 turnoWarrior: (damageWarrior) => {
  dragon.healthPoints -= damageWarrior(warrior)
  warrior.damage = damageWarrior(warrior)
 },
 turnoMage: (damageMage) => {
  dragon.healthPoints -= damageMage(mage).dano
   mage.damage = damageMage(mage).dano
   mage.mana -= damageMage(mage).mana(mage)
 },
 turnoDragon: (damageDragon) => {
  mage.healthPoints -= damageDragon(dragon)
  warrior.healthPoints -= damageDragon(dragon)
  dragon.damage = damageDragon(dragon)
 },
 results: () => battleMembers 
};

gameActions.turnoWarrior(damageWarrior)
gameActions.turnoMage(damageMage)
gameActions.turnoDragon(damageDragon)
console.log(gameActions.results());

