import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import usePersistedState from "./usePersistedState";
import { hires } from "./hires";
import { upgradeItems } from "./upgradeItems";
import { achievements } from "./achievements";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ls from 'localstorage-slim';
import moneySrc from "./img/dollar.png";

ls.config.encrypt = true;



export const playerContext = createContext();

const PlayerContext = ({ children }) => {

    const [gameData, setGameData] = useState(usePersistedState({
        wallet: 0,
        purchases: Object.entries(hires[0]).map(e => {
            return {
                [e[0]]: 0,
                data: [e[1]]
            };
        }),
        upgrades: upgradeItems,
        purchasedUpgrades: [],
        unlockedAchievements: { unlocked: [] },
        manualClicksLT: 0,
        autoClicksLT: 0,
        lifetimeWallet: 0,
        lifetimeClickWallet: 0,
        lifetimeAutoWallet: 0,
        fastestClick: new Date().getTime(),
    }, "gameData")[0]);

    useEffect(() => {
        ls.set("gameData", JSON.stringify(gameData));
    }, [gameData]);

    const achievementToast = (name) => {
        toast.success("Achievement unlocked! - " + name, {
            icon: "🏆",
            pauseOnFocusLoss: false,
            position: "bottom-center",
        })
    }

    Object.keys(achievements).forEach((e) => {
        if (!gameData.unlockedAchievements.unlocked.includes(e)) {
            achievements[e].unlock(achievementToast, gameData, setGameData);
        }
    })

    const notEnoughMoneyToast = () => {
        toast.error("You're broke and can't afford this!", {
            toastId: "noMoney",
            position: "bottom-center",
            icon: "😢",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
            pauseOnFocusLoss: false
        });
    }

    const addToWallet = (numToAdd) => {
        setGameData({ ...gameData, wallet: gameData.wallet + numToAdd })
    };

    const shovelManualClick = (x, y) => {
        //TODO check for upgrades
        const upgrades = 0;
        let click = 1;
        if (gameData.purchasedUpgrades.includes("superShovel1")) {
            click = 10;
        };

        setGameData({
            ...gameData,
            wallet: gameData.wallet + (click + upgrades),
            lifetimeWallet: gameData.lifetimeWallet + click + upgrades,
            manualClicksLT: gameData.manualClicksLT + 1,
            lifetimeClickWallet: gameData.lifetimeClickWallet + click + upgrades,
        })

        
        const el = document.createElement('img');
        el.src = `${moneySrc}`;
        el.style.width = "50px"
        el.style.color = "green";
        el.style.position = "absolute";
        el.style.top = y + 'px';
        el.style.left = x + 'px';
        el.style.zIndex = 9999;
        el.style.transform = `rotate(25deg)`;
        el.style.pointerEvents = 'none';
        el.animate({ top: 0, opacity: 0 }, { duration: 2000, iterations: 1 });
        document.body.appendChild(el);
        setTimeout(() => {
            el.remove();
        }, 1950);

    };

    const calculatePerSecond = () => {
        let ps = 0;
        gameData.purchases.forEach(e => {
            ps += ([Object.values(e)[0]] * Object.values(e)[1][0].produce);

        })
        return ps;
    };

    const purchaseHelp = (name) => {
        let newWallet = gameData.wallet;
        const hire = gameData.purchases.map((e, i) => {
            //access data e[Object.keys(e)[1]][0]
            //acces owned e[Object.keys(e)[0]]

            if (Object.keys(e)[0] === name) {
                if (gameData.wallet - e[Object.keys(e)[1]][0].price < 0) {
                    notEnoughMoneyToast();
                    return e;
                };
                newWallet = newWallet - e[Object.keys(e)[1]][0].price

                e[Object.keys(e)[0]] += 1;
                e[Object.keys(e)[1]][0].price = (Math.ceil(e[Object.keys(e)[1]][0].price * 1.08)).toFixed(0);
                calculatePerSecond();
                return e;
            }
            return e;
        })

        setGameData({ ...gameData, purchases: hire, wallet: newWallet });
    }

    const purchaseUpgrade = (id) => {
        if (gameData.wallet - upgradeItems[id].price < 0) {
            return notEnoughMoneyToast();
        }
        const upgradesArray = gameData.purchasedUpgrades;
        upgradesArray.push(id);

        setGameData({
            ...gameData,
            wallet: gameData.wallet - upgradeItems[id].price,
            purchasedUpgrades: upgradesArray
        });

        upgradeItems[id].purchase(gameData);

    }

    return (
        <playerContext.Provider value={{ purchaseUpgrade, gameData, setGameData, calculatePerSecond, purchaseHelp, addToWallet, shovelManualClick, hires, upgradeItems, achievements }}>
            {children}
            <ToastContainer
                limit={4}
            />
        </playerContext.Provider>
    );
};

export default PlayerContext;

