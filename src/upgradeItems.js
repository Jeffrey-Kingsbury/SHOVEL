export const upgradeItems = {
  specialMilk: {
    price: 5000,
    purchase: (purchases, wallet) => {
        if (wallet - upgradeItems.specialMilk.price < 0) {
            return "Not enough money";
            }      
            
            const upgrade = purchases.map((e) => {
        if (Object.keys(e)[0] === "toddler") {
          if (wallet - upgradeItems.specialMilk.price < 0) {
            return e;
            }
            e[Object.keys(e)[1]][0].produce =
            e[Object.keys(e)[1]][0].produce * 2;
            return e;
        }
        return e;
      });

      return upgrade
    },
    lock: (playerData, purchases) => {},
  },
};
