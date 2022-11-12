const getDate = () => {
    const month = new Date().getMonth() + 1 < 10 ? "0" + new Date().getMonth() + 1 : new Date().getMonth() + 1;
    const day = new Date().getDate() < 10 ? "0" + new Date().getDate() : new Date().getDate();
    const year = new Date().getFullYear();
    return `${day}/${month}/${year}`
}

export const achievements = {

    shovel1: {
        name: "Your first dig",
        desc: "Manually SHOVEL for the first time.",
        hidden: false,
        unlock: (achievementToast, playerData, unlockedAchievements, setUnlockedAchievements) => {
            if (playerData.manualClicksLT > 0) {
                const allUnlocked = unlockedAchievements.unlocked;
                allUnlocked.push("shovel1");
                setUnlockedAchievements({ ...unlockedAchievements, unlocked: allUnlocked, shovel1: getDate() })
                achievementToast("Your first dig");
            }
        }
    },

    fastest: {
        name: "Gotta click fast!",
        desc: "SHOVEL multiple times a millisecond",
        hidden: false,
        unlock: (achievementToast, playerData, unlockedAchievements, setUnlockedAchievements) => {
            if (playerData.fastestClick <= 15) {
                const allUnlocked = unlockedAchievements.unlocked;
                allUnlocked.push("fastest");
                setUnlockedAchievements({ ...unlockedAchievements, unlocked: allUnlocked, fastest: getDate() })
                achievementToast("Gotta Click Fast!");
            }
        }
    },

    toddler1: {
        name: "Nursery",
        desc: "Purchase 10 Toddlers",
        hidden: true,
        unlock: (achievementToast, playerData, unlockedAchievements, setUnlockedAchievements, purchases, purchasedUpgrades) => {
            purchases.forEach(e => {
                if (Object.keys(e)[0] === "toddler" && e[Object.keys(e)[0]] >= 10) {
                    const allUnlocked = unlockedAchievements.unlocked;
                    allUnlocked.push("toddler1");
                    setUnlockedAchievements({ ...unlockedAchievements, unlocked: allUnlocked, toddler1: getDate() })
                    achievementToast("Nursery");
                    return;
                }
                return;
            });
        }
    },

    toddler2: {
        name: "Daycare",
        desc: "Purchase 30 Toddlers",
        hidden: true,
        unlock: (achievementToast, playerData, unlockedAchievements, setUnlockedAchievements, purchases, purchasedUpgrades) => {
            purchases.forEach(e => {
                if (Object.keys(e)[0] === "toddler" && e[Object.keys(e)[0]] >= 30) {
                    const allUnlocked = unlockedAchievements.unlocked;
                    allUnlocked.push("toddler2");
                    setUnlockedAchievements({ ...unlockedAchievements, unlocked: allUnlocked, toddler2: getDate() })
                    achievementToast("Daycare");
                    return;
                }
                return;
            });
        }
    },

    toddler3: {
        name: "Valentina Vassilyev",
        desc: "Purchase 69 Toddlers",
        hidden: true,
        unlock: (achievementToast, playerData, unlockedAchievements, setUnlockedAchievements, purchases, purchasedUpgrades) => {
            purchases.forEach(e => {
                if (Object.keys(e)[0] === "toddler" && e[Object.keys(e)[0]] >= 69) {
                    const allUnlocked = unlockedAchievements.unlocked;
                    allUnlocked.push("toddler3");
                    setUnlockedAchievements({ ...unlockedAchievements, unlocked: allUnlocked, toddler3: getDate() })
                    achievementToast("Valentina Vassilyev");
                    return;
                }
                return;
            });
        }
    },

    toddler4: {
        name: "Feodor Vassilyev",
        desc: "Purchase 87 Toddlers",
        hidden: true,
        unlock: (achievementToast, playerData, unlockedAchievements, setUnlockedAchievements, purchases, purchasedUpgrades) => {
            purchases.forEach(e => {
                if (Object.keys(e)[0] === "toddler" && e[Object.keys(e)[0]] >= 87) {
                    const allUnlocked = unlockedAchievements.unlocked;
                    allUnlocked.push("toddler4");
                    setUnlockedAchievements({ ...unlockedAchievements, unlocked: allUnlocked, toddler4: getDate() })
                    achievementToast("Feodor Vassilyev");
                    return;
                }
                return;
            });
        }
    },

    toddler5: {
        name: "Preschool",
        desc: "Purchase 100 Toddlers",
        hidden: true,
        unlock: (achievementToast, playerData, unlockedAchievements, setUnlockedAchievements, purchases, purchasedUpgrades) => {
            purchases.forEach(e => {
                if (Object.keys(e)[0] === "toddler" && e[Object.keys(e)[0]] >= 100) {
                    const allUnlocked = unlockedAchievements.unlocked;
                    allUnlocked.push("toddler5");
                    setUnlockedAchievements({ ...unlockedAchievements, unlocked: allUnlocked, toddler5: getDate() })
                    achievementToast("Preschool");
                    return;
                }
                return;
            });
        }
    },
};