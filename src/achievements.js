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
        unlock: (achievementToast, gameData, setGameData) => {
            if (gameData.manualClicksLT > 0) {
                const allUnlocked = gameData.unlockedAchievements;
                allUnlocked["shovel1"] = getDate();
                allUnlocked.unlocked.push("shovel1");

                setGameData({ ...gameData, unlockedAchievements: allUnlocked })
                achievementToast("Your first dig");
            }
        }
    },

    fastest: {
        name: "Gotta click fast!",
        desc: "SHOVEL multiple times a millisecond",
        hidden: false,
        unlock: (achievementToast, gameData, setGameData) => {
            if (gameData.fastestClick <= 15) {
                const allUnlocked = gameData.unlockedAchievements;
                allUnlocked["fastest"] = getDate();
                allUnlocked.unlocked.push("fastest");
                setGameData({ ...gameData, unlockedAchievements: allUnlocked })
                achievementToast("Gotta Click Fast!");
            }
        }
    },

    toddler0: {
        name: "Bundle of joy",
        desc: "Purchase a Toddler",
        hidden: true,
        unlock: (achievementToast, gameData, setGameData) => {
            gameData.purchases.forEach(e => {
                if (Object.keys(e)[0] === "toddler" && e[Object.keys(e)[0]] >= 1) {
                    const allUnlocked = gameData.unlockedAchievements;
                    allUnlocked["toddler0"] = getDate();
                    allUnlocked.unlocked.push("toddler0");
                    setGameData({ ...gameData, unlockedAchievements: allUnlocked })
                    achievementToast("Bundle of joy");
                    return;
                }
                return;
            });
        }
    },
    

    toddler1: {
        name: "Nursery",
        desc: "Purchase 10 Toddlers",
        hidden: true,
        unlock: (achievementToast, gameData, setGameData) => {
            gameData.purchases.forEach(e => {
                if (Object.keys(e)[0] === "toddler" && e[Object.keys(e)[0]] >= 10) {
                    const allUnlocked = gameData.unlockedAchievements;
                    allUnlocked["toddler1"] = getDate();
                    allUnlocked.unlocked.push("toddler1");
                    setGameData({ ...gameData, unlockedAchievements: allUnlocked })
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
        unlock: (achievementToast, gameData, setGameData) => {
            gameData.purchases.forEach(e => {
                if (Object.keys(e)[0] === "toddler" && e[Object.keys(e)[0]] >= 30) {
                    const allUnlocked = gameData.unlockedAchievements;
                    allUnlocked["toddler2"] = getDate();
                    allUnlocked.unlocked.push("toddler2");
                    setGameData({ ...gameData, unlockedAchievements: allUnlocked })
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
        unlock: (achievementToast, gameData, setGameData) => {
            gameData.purchases.forEach(e => {
                if (Object.keys(e)[0] === "toddler" && e[Object.keys(e)[0]] >= 69) {
                    const allUnlocked = gameData.unlockedAchievements;
                    allUnlocked["toddler3"] = getDate();
                    allUnlocked.unlocked.push("toddler3");
                    setGameData({ ...gameData, unlockedAchievements: allUnlocked })
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
        unlock: (achievementToast, gameData, setGameData) => {
            gameData.purchases.forEach(e => {
                if (Object.keys(e)[0] === "toddler" && e[Object.keys(e)[0]] >= 87) {
                    const allUnlocked = gameData.unlockedAchievements;
                    allUnlocked["toddler4"] = getDate();
                    allUnlocked.unlocked.push("toddler4");
                    setGameData({ ...gameData, unlockedAchievements: allUnlocked })
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
        unlock: (achievementToast, gameData, setGameData) => {
            gameData.purchases.forEach(e => {
                if (Object.keys(e)[0] === "toddler" && e[Object.keys(e)[0]] >= 100) {
                    const allUnlocked = gameData.unlockedAchievements;
                    allUnlocked["toddler5"] = getDate();
                    allUnlocked.unlocked.push("toddler5");
                    setGameData({ ...gameData, unlockedAchievements: allUnlocked })
                    achievementToast("Preschool");
                    return;
                }
                return;
            });
        }
    },
};