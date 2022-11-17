const getDate = () => {
    const month = new Date().getMonth() + 1 < 10 ? "0" + new Date().getMonth() + 1 : new Date().getMonth() + 1;
    const day = new Date().getDate() < 10 ? "0" + new Date().getDate() : new Date().getDate();
    const year = new Date().getFullYear();
    return `${day}/${month}/${year}`
}

export const achievements = {

    shovel0: {
        name: "Your first dig",
        desc: "Manually SHOVEL for the first time",
        hidden: false,
        unlock: (achievementToast, gameData, setGameData) => {
            if (gameData.manualClicksLT > 0) {
                const allUnlocked = gameData.unlockedAchievements;
                allUnlocked["shovel0"] = getDate();
                allUnlocked.unlocked.push("shovel0");

                setGameData({ ...gameData, unlockedAchievements: allUnlocked })
                achievementToast("Your first dig");
            }
        }
    },

    shovel1: {
        name: "Nice",
        desc: "Manually SHOVEL 69 times",
        hidden: false,
        unlock: (achievementToast, gameData, setGameData) => {
            if (gameData.manualClicksLT >= 69) {
                const allUnlocked = gameData.unlockedAchievements;
                allUnlocked["shovel1"] = getDate();
                allUnlocked.unlocked.push("shovel1");

                setGameData({ ...gameData, unlockedAchievements: allUnlocked })
                achievementToast("Your first dig");
            }
        }
    },

    shovel2: {
        name: "SHOVEL enthusiast",
        desc: "Manually dig 100 times",
        hidden: false,
        unlock: (achievementToast, gameData, setGameData) => {
            if (gameData.manualClicksLT >= 100) {
                const allUnlocked = gameData.unlockedAchievements;
                allUnlocked["shovel2"] = getDate();
                allUnlocked.unlocked.push("shovel2");

                setGameData({ ...gameData, unlockedAchievements: allUnlocked })
                achievementToast("SHOVEL enthusiast");
            }
        }
    },

    shovel3: {
        name: "SHOVEL pro",
        desc: "Manually dig 1000 times",
        hidden: false,
        unlock: (achievementToast, gameData, setGameData) => {
            if (gameData.manualClicksLT >= 1000) {
                const allUnlocked = gameData.unlockedAchievements;
                allUnlocked["shovel3"] = getDate();
                allUnlocked.unlocked.push("shovel3");

                setGameData({ ...gameData, unlockedAchievements: allUnlocked })
                achievementToast("SHOVEL pro");
            }
        }
    },

    shovel4: {
        name: "SHOVEL bot",
        desc: "Manually dig 10,000 times",
        hidden: false,
        unlock: (achievementToast, gameData, setGameData) => {
            if (gameData.manualClicksLT >= 10000) {
                const allUnlocked = gameData.unlockedAchievements;
                allUnlocked["shovel4"] = getDate();
                allUnlocked.unlocked.push("shovel4");

                setGameData({ ...gameData, unlockedAchievements: allUnlocked })
                achievementToast("SHOVEL bot");
            }
        }
    },

    shovel5: {
        name: "Carpal Tunnel",
        desc: "Manually dig 100,000 times",
        hidden: false,
        unlock: (achievementToast, gameData, setGameData) => {
            if (gameData.manualClicksLT >= 100000) {
                const allUnlocked = gameData.unlockedAchievements;
                allUnlocked["shovel5"] = getDate();
                allUnlocked.unlocked.push("shovel5");

                setGameData({ ...gameData, unlockedAchievements: allUnlocked })
                achievementToast("Carpal Tunnel");
            }
        }
    },

    shovel6: {
        name: "SHOVEL Master",
        desc: "Manually dig 1,000,000 times",
        hidden: false,
        unlock: (achievementToast, gameData, setGameData) => {
            if (gameData.manualClicksLT >= 1000000) {
                const allUnlocked = gameData.unlockedAchievements;
                allUnlocked["shovel6"] = getDate();
                allUnlocked.unlocked.push("shovel6");

                setGameData({ ...gameData, unlockedAchievements: allUnlocked })
                achievementToast("SHOVEL Master");
            }
        }
    },

    fastest: {
        name: "Gotta click fast!",
        desc: "SHOVEL extremely fast",
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
           
                if (gameData.purchases.toddler.qty >= 1) {
                    const allUnlocked = gameData.unlockedAchievements;
                    allUnlocked["toddler0"] = getDate();
                    allUnlocked.unlocked.push("toddler0");
                    setGameData({ ...gameData, unlockedAchievements: allUnlocked })
                    achievementToast("Bundle of joy");
                    return;
                }

        }
    },
    

    toddler1: {
        name: "Nursery",
        desc: "Purchase 10 Toddlers",
        hidden: true,
        unlock: (achievementToast, gameData, setGameData) => {
            
                if (gameData.purchases.toddler.qty >= 10) {
                    const allUnlocked = gameData.unlockedAchievements;
                    allUnlocked["toddler1"] = getDate();
                    allUnlocked.unlocked.push("toddler1");
                    setGameData({ ...gameData, unlockedAchievements: allUnlocked })
                    achievementToast("Nursery");
                    return;
                }
        }
    },

    toddler2: {
        name: "Daycare",
        desc: "Purchase 30 Toddlers",
        hidden: true,
        unlock: (achievementToast, gameData, setGameData) => {
                if (gameData.purchases.toddler.qty >= 30) {
                    const allUnlocked = gameData.unlockedAchievements;
                    allUnlocked["toddler2"] = getDate();
                    allUnlocked.unlocked.push("toddler2");
                    setGameData({ ...gameData, unlockedAchievements: allUnlocked })
                    achievementToast("Daycare");
                    return;
                }

        }
    },

    toddler3: {
        name: "Valentina Vassilyev",
        desc: "Purchase 69 Toddlers",
        hidden: true,
        unlock: (achievementToast, gameData, setGameData) => {
                if (gameData.purchases.toddler.qty >= 69) {
                    const allUnlocked = gameData.unlockedAchievements;
                    allUnlocked["toddler3"] = getDate();
                    allUnlocked.unlocked.push("toddler3");
                    setGameData({ ...gameData, unlockedAchievements: allUnlocked })
                    achievementToast("Valentina Vassilyev");
                    return;
                }
        }
    },

    toddler4: {
        name: "Feodor Vassilyev",
        desc: "Purchase 87 Toddlers",
        hidden: true,
        unlock: (achievementToast, gameData, setGameData) => {
                if (gameData.purchases.toddler.qty >= 87) {
                    const allUnlocked = gameData.unlockedAchievements;
                    allUnlocked["toddler4"] = getDate();
                    allUnlocked.unlocked.push("toddler4");
                    setGameData({ ...gameData, unlockedAchievements: allUnlocked })
                    achievementToast("Feodor Vassilyev");
                    return;
                }

        }
    },

    toddler5: {
        name: "Preschool",
        desc: "Purchase 100 Toddlers",
        hidden: true,
        unlock: (achievementToast, gameData, setGameData) => {
                if (gameData.purchases.toddler.qty >= 100) {
                    const allUnlocked = gameData.unlockedAchievements;
                    allUnlocked["toddler5"] = getDate();
                    allUnlocked.unlocked.push("toddler5");
                    setGameData({ ...gameData, unlockedAchievements: allUnlocked })
                    achievementToast("Preschool");
                    return;
                }
        }
    },
};