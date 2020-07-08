import { useLocalStorage } from "./useLocalStorage";
import { useEffect } from 'react';

export const useDarkMode = () => {
    const [someValue, setSomeValue] = useLocalStorage('darkMode');

    useEffect(() => {
        if (someValue === true) {
            let element = document.querySelector("body");
            element.classList.add("dark-mode");
        }
        if (someValue === false) {
            let element = document.querySelector("body");
            element.classList.remove("dark-mode");
        };
    }, [someValue]);
    return [someValue, setSomeValue];
}