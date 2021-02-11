import { useState } from 'react';

export default function useLocalStorage (key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
        const item = window.localStorage.getItem(key); // get from localStorage by key
        return item ? JSON.parse(item) : initialValue; // parse and return or if undefined return initialValue
    });

    function setValue (value) {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
    };

    return [storedValue, setValue];
};