import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import usePersistedState from "./usePersistedState";
import { hires } from "./components/hires";

export const playerContext = createContext();

const PlayerContext = ({ children }) => {
    const [wallet, setWallet] = useState(usePersistedState(0, "wallet")[0]);

    const [purchases, setPurchases] = useState(usePersistedState(Object.entries(hires[0]).map(e => {
        return {
            [e[0]]: 0,
            data: [e[1]]
        };
    }), "purchases")[0]);

    const [upgrades, setUpgrades] = useState(usePersistedState({}, "upgrades")[0]);
    const [playerData, setPlayerData] = useState(usePersistedState({
        manualClicksLT: 0,
        autoClicksLT: 0,
        lifetimeWallet: 0
    }, "playerData")[0]);


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
        setPlayerData({ ...playerData, lifetimeWallet: playerData.lifetimeWallet + click + upgrades, manualClicksLT: playerData.manualClicksLT + 1 })
        addToWallet(click + upgrades);
    };

    const calculatePerSecond = () => {
        let ps = 0;
        purchases.forEach(e => {
            ps += ([Object.values(e)[0]] * hires[0][Object.keys(e)[0]].produce);

        })
        return ps;
    };

    const purchaseHelp = (name) => {
        const hire = purchases.map((e, i) => {
            //access data e[Object.keys(e)[1]][0]
            //acces owned e[Object.keys(e)[0]]

            if (Object.keys(e)[0] === name) {
                if (wallet - e[Object.keys(e)[1]][0].price < 0) {
                    console.log(e)
                    console.log("Not enough money");
                    return e;
                };

                setWallet(wallet - e[Object.keys(e)[1]][0].price);
                e[Object.keys(e)[0]] += 1;
                e[Object.keys(e)[1]][0].price = (Math.round(e[Object.keys(e)[1]][0].price * 1.25)).toFixed(0);
                calculatePerSecond();
                return e;
            }
            return e;
        })

        setPurchases(hire);
    }

    return (
        <playerContext.Provider value={{ wallet, setWallet, calculatePerSecond, purchases, purchaseHelp, upgrades, addToWallet, shovelManualClick, playerData, setPlayerData, hires }}>
            {children}
        </playerContext.Provider>
    );
};

export default PlayerContext;

