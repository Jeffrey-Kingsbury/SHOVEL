const getDate = () => {
    const month = new Date().getMonth() + 1 < 10 ? "0" + new Date().getMonth() + 1 : new Date().getMonth() + 1;
    const day = new Date().getDate() < 10 ? "0" + new Date().getDate() : new Date().getDate();
    const year = new Date().getFullYear();
    return `${day}/${month}/${year}`
}

export const achievements = {
    shovel1:{
        name:"Your first dig",
        desc:"Start shovelling",
        unlock:(achievementToast, playerData, unlockedAchievements, setUnlockedAchievements) => {
            if(playerData.manualClicksLT > 0){
                const allUnlocked = unlockedAchievements.unlocked;
                allUnlocked.push("shovel1");
                setUnlockedAchievements({...unlockedAchievements, unlocked: allUnlocked, shovel1: getDate()})
                achievementToast("Your first dig");
            }
        }
    },
    toddler1:{
        name:"Daycare",
        desc:"Purchase 15 Toddlers",
        unlock:(achievementToast, playerData, unlockedAchievements, setUnlockedAchievements, purchases, purchasedUpgrades)=>{
            purchases.forEach(e => {
                 if(Object.keys(e)[0] === "toddler" && e[Object.keys(e)[0]] >= 15){
                    const allUnlocked = unlockedAchievements.unlocked;
                    allUnlocked.push("toddler1");
                    setUnlockedAchievements({...unlockedAchievements, unlocked: allUnlocked, toddler1: getDate()})
                    achievementToast("Daycare");
                    return;
                 }
                return;
            });
        }
    }
};