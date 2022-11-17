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
import { useWindowSize } from '@react-hook/window-size';

ls.config.encrypt = true;


export const playerContext = createContext();

const PlayerContext = ({ children }) => {
    const [width, height] = useWindowSize();
    const isMobile = width < 768;
    
    const [gameData, setGameData] = useState(usePersistedState({
        wallet: 0,
        purchases: hires,
        reset:false,
        upgrades: upgradeItems,
        purchasedUpgrades: [],
        unlockedAchievements: { unlocked: [] },
        manualClicksLT: 0,
        autoClicksLT: 0,
        lifetimeWallet: 0,
        lifetimeClickWallet: 0,
        lifetimeAutoWallet: 0,
        fastestClick: new Date().getTime(),
        perSecond: 0
    }, "gameData")[0]);
    

//Updates the purchases so when new hires are added, the gameData will contain them as well.
    useEffect(()=> {
        const defaults = {}

        Object.entries(hires).forEach(e => {
            if(gameData.purchases[e[0]]){
                defaults[e[0]] = gameData.purchases[e[0]];
            }else{
                defaults[e[0]] = hires[e[0]];
            }
        })

        setGameData({...gameData, purchases: defaults})
    }, []);

    
    useEffect(() => {
        ls.set("gameData", JSON.stringify(gameData));
    }, [gameData]);

    const achievementToast = (name) => {
        toast.success("Achievement unlocked! - " + name, {
            icon: "🏆",
            pauseOnFocusLoss: false,
            position: isMobile ? "top-center" : "bottom-center",
            
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
            position: isMobile ? "top-center" : "bottom-center",
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
        Object.entries(gameData.purchases).forEach((e) => {
            ps += (e[1].produce * e[1].qty)
        })
        return ps;
    };

    const purchaseHelp = (name) => {
        let newWallet = gameData.wallet;
        let hireStorage = gameData.purchases;
        
            if(gameData.wallet - gameData.purchases[name].price < 0){
                notEnoughMoneyToast();
                return;
            }
            
            newWallet -= hireStorage[name].price;
            hireStorage[name].qty += 1;
            hireStorage[name].price = (Math.ceil(hireStorage[name].price * 1.09)).toFixed(0);
            calculatePerSecond();
            setGameData({ ...gameData, purchases: hireStorage, wallet: newWallet });
        
    }

    const purchaseUpgrade = (id) => {
        if (gameData.wallet - upgradeItems[id].price < 0) {
            notEnoughMoneyToast();
            return false;
        }
        const upgradesArray = gameData.purchasedUpgrades;
        upgradesArray.push(id);

        setGameData({
            ...gameData,
            wallet: gameData.wallet - upgradeItems[id].price,
            purchasedUpgrades: upgradesArray,
            purchases: upgradeItems[id].purchase(gameData)
        });

        return true;
    }

    return (
        <playerContext.Provider value={{ purchaseUpgrade, gameData, setGameData, calculatePerSecond, purchaseHelp, addToWallet, shovelManualClick, hires, upgradeItems, achievements, width, height, isMobile }}>
            {children}
            <ToastContainer
                limit={4}
            />
        </playerContext.Provider>
    );
};

export default PlayerContext;

