import SpecialMilkSrc from "./img/upgrades/specialMilk.png"

export const upgradeItems = {
  specialMilk: {
    name: "Special Milk",
    id:"specialMilk",
    desc: "Toddlers will produce 2x as much money!",
    tippy: "Brought to you by the proud folks at cyclopentanoperhydrophenanthrene Inc.",
    src: SpecialMilkSrc,
    price: 5000,
    purchase: (purchases) => {
      
      const upgrade = purchases.map((e) => {
        if (Object.keys(e)[0] === "toddler") {
          e[Object.keys(e)[1]][0].produce =
            e[Object.keys(e)[1]][0].produce * 2;
          return e;
        }
        return e;
      });
      return upgrade
    },
    lock: (playerData, purchases, purchasedUpgrades) => {
      return purchases.every(e => {
        if (Object.keys(e)[0] === 'toddler') {
          if (e.toddler >= 1 && !purchasedUpgrades.includes('specialMilk')) {
            return false
          }
          return true
        }
        return true;
      })
    },
  },
};

