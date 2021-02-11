import useLocalStorage from './useLocalStorage';

export default function useDarkMode () {
    const [darkMode, setDarkMode] = useLocalStorage('isDarkMode', false);

    return [darkMode, setDarkMode];
};