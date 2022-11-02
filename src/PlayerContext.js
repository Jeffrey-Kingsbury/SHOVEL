import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import usePersistedState from "./usePersistedState";
import { hires } from "./components/hires";

export const playerContext = createContext();

const PlayerContext = ({ children }) => {
    const [wallet, setWallet] = useState(usePersistedState(0, "wallet")[0]);
    const [purchases, setPurchases] = useState(usePersistedState(hires, "purchases")[0])
    const [upgrades, setUpgrades] = useState(usePersistedState({}, "upgrades")[0]);
    const [playerData, setPlayerData] = useState(usePersistedState({
        manualClicksLT: 0,
        autoClicksLT: 0,
        lifetimeWallet: 0
    }, "playerData")[0]);

    useEffect(()=>{
        hires.map((e, i) => {
            console.log(purchases)
            if(!purchases[i]){
                purchases.push(e);
            }
            console.log(purchases)
            return console.log(i, e.name)
        })
    }, [])

    useEffect(() => {
        localStorage.setItem("wallet", wallet);
    }, [wallet]);

    useEffect(() => {
        localStorage.setItem("purchases", JSON.stringify(purchases));
    }, [purchases]);

    useEffect(() => {
        localStorage.setItem("upgrades", JSON.stringify(upgrades));
    }, [upgrades]);

    useEffect(() => {
        localStorage.setItem("playerData", JSON.stringify(playerData));
    }, [playerData]);

    const addToWallet = (numToAdd) => {
        setWallet(wallet + numToAdd);
    };

    const shovelManualClick = () => {
        //TODO check for upgrades
        const upgrades = 0;
        const click = 1;
        addToWallet(click + upgrades);
    };

    const calculatePerSecond = () => {
        let ps = 0;
        purchases.forEach(e => {
            ps += (e.owned * e.produce);
        })
        return ps;
    };

    const purchaseHelp = (name) => {
        const hire = purchases.map(e => {
            if (e.name === name) {
                if (wallet - e.price < 0) {
                    console.log("Not enough money");
                    return e;
                };
                setWallet(wallet - e.price);
                e.owned += 1;
                e.price = (Math.round(e.price * 1.25)).toFixed(0);
                calculatePerSecond();
                return e;
            }
            return e;
        })
        setPurchases(hire);
    }

    return (
        <playerContext.Provider value={{ wallet, setWallet, calculatePerSecond, purchases, purchaseHelp, upgrades, addToWallet, shovelManualClick }}>
            {children}
        </playerContext.Provider>
    );
};

export default PlayerContext;

