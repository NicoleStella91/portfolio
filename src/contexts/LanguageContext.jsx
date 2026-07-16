import { createContext } from "react";
import { useState } from "react";

export const LanguageContext = createContext("ITA");

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState("ITA");
    const toggleLanguage = () => {
        setLanguage((prevLanguage) => (prevLanguage === "ITA" ? "ENG" : "ITA"));
    }
    return (
        <LanguageContext.Provider value={{ language, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}