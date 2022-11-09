import SpecialMilkSrc from "./img/upgrades/specialMilk.png"

export const upgradeItems = {
  specialMilk: {
    name: "Special Milk",
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
    lock: (playerData, purchases) => {
      return true;
    },
  },
};
