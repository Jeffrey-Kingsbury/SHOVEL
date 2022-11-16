import SimpleBot1Src from "./img/upgrades/simpleBot1.png";
import SimpleBot2Src from "./img/upgrades/simpleBot2.png";
import SimpleBot3Src from "./img/upgrades/simpleBot3.png";
import SimpleBot4Src from "./img/upgrades/simpleBot4.png";
import SpecialMilkSrc from "./img/upgrades/specialMilk.png";
import SuperShovelSrc from "./img/upgrades/superShovel1.png";
import Pyro1Src from "./img/upgrades/lighter.png";
import Pyro2Src from "./img/upgrades/flame-thrower.png";

export const upgradeItems = {

    /////////////////////
  /////////////////////
  //AUTO PLAY UPGRADES
  /////////////////////
  /////////////////////

  simpleBot1: {
    name: "Robot - Level 1",
    id: "simpleBot1",
    desc: "You will continue collecting money while you're away! ...At 1/10 productivity.",
    tippy: "Some say its a guy named bob that you tricked into clicking, I say advanced AI Tech.",
    src: SimpleBot1Src,
    price: 10000,
    purchase: (gameData) => {

      return gameData.purchases
    },
    lock: (gameData) => {
      if (gameData.manualClicksLT >= 100 && gameData.autoClicksLT >= 120 && !gameData.purchasedUpgrades.includes('simpleBot1')) {
        return false
      } else {
        return true
      }
    },
  },
  
  simpleBot2: {
    name: "Robot - Level 2",
    id: "simpleBot2",
    desc: "You will continue collecting money while you're away! ...At 1/4 productivity.",
    tippy: "It's a simple robot. But it works hard.",
    src: SimpleBot2Src,
    price: 100000,
    purchase: (gameData) => {

      return gameData.purchases
    },
    lock: (gameData) => {
      if (gameData.autoClicksLT >= 240 && !gameData.purchasedUpgrades.includes('simpleBot2') && gameData.purchasedUpgrades.includes('simpleBot1')) {
        return false
      } else {
        return true
      }
    },
  },

  simpleBot3: {
    name: "Robot - Level 3",
    id: "simpleBot3",
    desc: "You will continue collecting money while you're away! ...At 1/2 productivity.",
    tippy: "AI Tech has really gotten pretty advanced lately.",
    src: SimpleBot3Src,
    price: 1000000,
    purchase: (gameData) => {

      return gameData.purchases
    },
    lock: (gameData) => {
      if (gameData.autoClicksLT >= 600 && !gameData.purchasedUpgrades.includes('simpleBot3') && gameData.purchasedUpgrades.includes('simpleBot2')) {
        return false
      } else {
        return true
      }
    },
  },

  simpleBot4: {
    name: "Robot - Level 4",
    id: "simpleBot4",
    desc: "You will continue collecting money while you're away! ...At 100% productivity!",
    tippy: "Someone heard it saying something about dreaming while you're away. We'll worry about that later.",
    src: SimpleBot4Src,
    price: 10000000,
    purchase: (gameData) => {

      return gameData.purchases
    },
    lock: (gameData) => {
      if (gameData.autoClicksLT >= 800 && !gameData.purchasedUpgrades.includes('simpleBot4') && gameData.purchasedUpgrades.includes('simpleBot3')) {
        return false
      } else {
        return true
      }
    },
  },

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
      console.log(gameData.purchases)
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
            return false;
          }
          return true;
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

