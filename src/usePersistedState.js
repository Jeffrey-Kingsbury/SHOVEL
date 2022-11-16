import { useEffect, useState } from "react";
import ls from 'localstorage-slim';

const usePersistedState = (defaulValue, storageKey) => {
    const localStorageValue = JSON.parse(ls.get(storageKey, { decrypt: true }));
    const [Value, SetValue] = useState(localStorageValue ? localStorageValue : defaulValue);

    useEffect(() => {
        if(storageKey === "gameData" && !Value.wallet){
            ls.set(storageKey, JSON.stringify(defaulValue));
        }else{
            ls.set(storageKey, JSON.stringify(Value));
        }
    }, [Value]);

    return [Value, SetValue];
};

export default usePersistedState;