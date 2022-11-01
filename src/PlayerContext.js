import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import usePersistedState from "./usePersistedState";

export const playerContext = createContext();

const PlayerContext = ({ children }) => {
    const [wallet, setWallet] = useState(usePersistedState(0, "wallet")[0]);
    const [purchases, setPurchases] = useState(usePersistedState({ baby: 0, snowba: 0 }, "purchases")[0])
    const [upgrades, setUpgrades] = useState(usePersistedState({}, "upgrades")[0]);

    useEffect(()=>{
        localStorage.setItem("wallet", wallet);
    }, [wallet]);

    useEffect(()=>{
        localStorage.setItem("purchases", JSON.stringify(purchases));
    }, [purchases]);

    useEffect(()=>{
        localStorage.setItem("upgrades", JSON.stringify(upgrades));
    }, [upgrades]);

    const addToWallet = (numToAdd) => {
        setWallet(wallet + numToAdd);
    };

    const shovelManualClick = () => {
        //TODO check for upgrades
        const upgrades = 0;
        const click = 1;
        addToWallet(click + upgrades);
    }

    const shovelAutoClick = () => {
        
    }

    return (
        <playerContext.Provider value={{ wallet, purchases, upgrades, addToWallet, shovelManualClick }}>
            {children}
        </playerContext.Provider>
    );
};

export default PlayerContext;

