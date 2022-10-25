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
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

 const battleMembers = { mage, warrior, dragon };

const damageDragon = (dragon) => {
  const danoDragon = Math.floor((Math.random() * (dragon - 15)) + 15)
  return danoDragon
}
console.log(damageDragon(dragon.strength));

const damageWarrior = (warrior) => { 
  const danoWarrior = Math.floor((Math.random() * ( (warrior.strength * warrior.weaponDmg) - warrior.strength )) + 15)
  return danoWarrior
}
console.log(damageWarrior(warrior));

const damageMage = (mage) => {
  const danoMage = Math.floor((Math.random() * ((mage.intelligence * 2) - mage.intelligence) + 15 ));
  const danoEManaGastaPeloMagoEmUmTurno = {
  }
  
  return ; 
};