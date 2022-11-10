import { useEffect, useState } from "react";
import ls from 'localstorage-slim';

const usePersistedState = (defaulValue, storageKey) => {
    const localStorageValue = JSON.parse(ls.get(storageKey, { decrypt: true }));
    const [Value, SetValue] = useState(localStorageValue ? localStorageValue : defaulValue);


    useEffect(() => {
        ls.set(storageKey, JSON.stringify(Value), {encrypt:true});
    }, [Value]);

    return [Value, SetValue];
};

export default usePersistedState;