import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { playerSaveData } from "./player";

export const playerContext = createContext();

const PlayerContext = ({ children }) => {
    const [playerData, setPlayerData] = useState(false);
    useEffect(() => {
        if (localStorage.getItem("playerData") === "false" || !localStorage.getItem("playerData")) {
            setPlayerData(playerSaveData)
            localStorage.setItem('playerData', JSON.stringify(playerSaveData))
        } else {
            setPlayerData(JSON.parse(localStorage.getItem('playerData')));
        }
    }, []);



    return (
        <playerContext.Provider value={{ playerData }}>
            {children}
        </playerContext.Provider>
    );
};

export default PlayerContext;

