import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import usePersistedState from "./usePersistedState";
import { hires } from "./hires";
import { upgradeItems } from "./upgradeItems";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ls from 'localstorage-slim';
ls.config.encrypt = true;
export const playerContext = createContext();

const PlayerContext = ({ children }) => {

    const [wallet, setWallet] = useState(usePersistedState(0, "!@$fd!#@%")[0]);
    const [purchases, setPurchases] = useState(usePersistedState(Object.entries(hires[0]).map(e => {
        return {
            [e[0]]: 0,
            data: [e[1]]
        };
    }), "!@$dp!@#urr")[0]);

    const [upgrades, setUpgrades] = useState(usePersistedState(upgradeItems, "#!@E!#c")[0]);

    const [purchasedUpgrades, setPurchasedUpgrades] = useState(usePersistedState([], "d!@$df1!")[0]);

    const [playerData, setPlayerData] = useState(usePersistedState({
        manualClicksLT: 0,
        autoClicksLT: 0,
        lifetimeWallet: 0,
    }, "p@#$2D123")[0]);


    useEffect(() => {
        ls.set("!@$fd!#@%", wallet);
    }, [wallet]);

    useEffect(() => {
        ls.set("!@$dp!@#urr", JSON.stringify(purchases));
    }, [purchases]);

    useEffect(() => {
        ls.set("#!@E!#c", JSON.stringify(upgrades));
    }, [upgrades]);

    useEffect(() => {
        ls.set("p@#$2D123", JSON.stringify(playerData));
    }, [playerData]);

    useEffect(() => {
        ls.set("d!@$df1!", JSON.stringify(purchasedUpgrades));
    }, [purchasedUpgrades]);

    const notEnoughMoneyToast = () => {
        if (!toast.isActive("noMoney")) toast.error("Congratulations! You're broke and can't afford this!", {
            toastId: "noMoney",
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    }

    const addToWallet = (numToAdd) => {
        setWallet(wallet + numToAdd);
    };

    const shovelManualClick = () => {
        //TODO check for upgrades
        const upgrades = 0;
        let click = 1;
        if (purchasedUpgrades.includes("superShovel1")) {
            click = 10;
        };

        setPlayerData({ ...playerData, lifetimeWallet: playerData.lifetimeWallet + click + upgrades, manualClicksLT: playerData.manualClicksLT + 1 })
        addToWallet(click + upgrades);
    };

    const calculatePerSecond = () => {
        let ps = 0;
        purchases.forEach(e => {
            ps += ([Object.values(e)[0]] * Object.values(e)[1][0].produce);

        })
        return ps;
    };

    const purchaseHelp = (name) => {
        const hire = purchases.map((e, i) => {
            //access data e[Object.keys(e)[1]][0]
            //acces owned e[Object.keys(e)[0]]

            if (Object.keys(e)[0] === name) {
                if (wallet - e[Object.keys(e)[1]][0].price < 0) {
                    notEnoughMoneyToast();
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

    const purchaseUpgrade = (id) => {
        console.log(id)
        if (wallet - upgradeItems[id].price < 0) {
            return notEnoughMoneyToast();
        }

        setWallet(wallet - upgradeItems[id].price);
        setPurchasedUpgrades((purchasedUpgrades) => [...purchasedUpgrades, id])
        upgradeItems[id].purchase(purchases);

    }

    return (
        <playerContext.Provider value={{ purchaseUpgrade, wallet, setWallet, calculatePerSecond, purchases, purchaseHelp, upgrades, addToWallet, shovelManualClick, playerData, setPlayerData, hires, upgradeItems, purchasedUpgrades, setPurchasedUpgrades }}>
            {children}
            <ToastContainer
                limit={4}
            />
        </playerContext.Provider>
    );
};

export default PlayerContext;

