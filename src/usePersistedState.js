import { useEffect, useState } from "react";

const usePersistedState = (defaulValue, storageKey) => {
    const localStorageValue = JSON.parse(localStorage.getItem(storageKey));
    const [Value, SetValue] = useState(localStorageValue ? localStorageValue : defaulValue);


    useEffect(() => {
        localStorage.setItem(storageKey, JSON.stringify(Value));
    }, [Value]);

    return [Value, SetValue];
};

export default usePersistedState;