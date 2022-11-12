import SpecialMilkSrc from "./img/upgrades/specialMilk.png";
import SuperShovelSrc from "./img/upgrades/superShovel1.png";
import Pyro1Src from "./img/upgrades/lighter.png";
import Pyro2Src from "./img/upgrades/flame-thrower.png";

export const upgradeItems = {
  /////////////////////
  /////////////////////
  //MANUAL SHOVEL UPGRADES
  /////////////////////
  /////////////////////

  superShovel1: {
    name: "Super Shovel - Level 1",
    id: "superShovel1",
    desc: "Manually shovelling will now grant 10$ instead of 1$",
    tippy: "You know what they say about guys with big shovels, don't you?",
    src: SuperShovelSrc,
    price: 1000,
    purchase: (gameData) => {

      return gameData.purchases
    },
    lock: (gameData) => {
      if (gameData.manualClicksLT >= 100 && !gameData.purchasedUpgrades.includes('superShovel1')) {
        return false
      } else {
        return true
      }
    },
  },

  /////////////////////
  /////////////////////
  //TODDLER UPGRADES
  /////////////////////
  /////////////////////

  specialMilk: {
    name: "Special Milk",
    id: "specialMilk",
    desc: "Toddlers will produce 2x as much money!",
    tippy: "Brought to you by the proud folks at cyclopentanoperhydrophenanthrene Inc.",
    src: SpecialMilkSrc,
    price: 5000,
    purchase: (gameData) => {

      const upgrade = gameData.purchases.map((e) => {
        if (Object.keys(e)[0] === "toddler") {
          e[Object.keys(e)[1]][0].produce =
            e[Object.keys(e)[1]][0].produce * 2;
          return e;
        }
        return e;
      });
      return upgrade
    },
    lock: (gameData) => {
      return gameData.purchases.every(e => {
        if (Object.keys(e)[0] === 'toddler') {
          if (e.toddler >= 30 && !gameData.purchasedUpgrades.includes('specialMilk')) {
            return false
          }
          return true
        }
        return true;
      })
    },
  },

  /////////////////////
  /////////////////////
  //LOCAL TEEN UPGRADES
  /////////////////////
  /////////////////////

  pyromania1: {
    name: "Pyromania - Level 1",
    id: "pyromania1",
    desc: "Local teens will produce 2x more money!",
    tippy: "Turns out giving teens body spray and a lighter was for the best! Except the whole town smells like Jr high now...",
    src: Pyro1Src,
    price: 7500,
    purchase: (gameData) => {

      const upgrade = gameData.purchases.map((e) => {
        if (Object.keys(e)[0] === "localTeen") {
          e[Object.keys(e)[1]][0].produce =
            e[Object.keys(e)[1]][0].produce * 2;
          return e;
        }
        return e;
      });
      return upgrade
    },
    lock: (gameData) => {
      return gameData.purchases.every(e => {
        if (Object.keys(e)[0] === 'localTeen') {
          if (e.localTeen >= 30 && !gameData.purchasedUpgrades.includes('pyromania1')) {
            return false
          }
          return true
        }
        return true;
      })
    },
  },

  pyromania2: {
    name: "Pyromania - Level 2",
    id: "pyromania2",
    desc: "Local teens will produce 3x more money!",
    tippy: "You can get flamethrowers at the thrift shop?!",
    src: Pyro2Src,
    price: 100000,
    purchase: (gameData) => {

      const upgrade = gameData.purchases.map((e) => {
        if (Object.keys(e)[0] === "localTeen") {
          e[Object.keys(e)[1]][0].produce =
            e[Object.keys(e)[1]][0].produce * 3;
          return e;
        }
        return e;
      });
      return upgrade
    },
    lock: (gameData) => {
      return gameData.purchases.every(e => {
        if (Object.keys(e)[0] === 'localTeen') {
          if (e.localTeen >= 50 && !gameData.purchasedUpgrades.includes('pyromania2') && gameData.purchasedUpgrades.includes('pyromania1')) {
            return false
          }
          return true
        }
        return true;
      })
    },
  },
};

