import type { Language, LanguageContextType } from "@/types";
import {directions, translations} from "../locales/translations.js"
import { createContext, useEffect, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider ({children} : {children: React.ReactNode}) {
    const [language, setLanguage] = useState<Language>('ar');

    useEffect(() => {
        document.documentElement.lang = language;
        document.documentElement.dir = directions[language];
    }, [language]);

    const t = translations[language];

    const toggleLanguage = () => {
        setLanguage((prevlang) => (prevlang === 'ar' ? 'en' : 'ar' ));;

    }
    const value : LanguageContextType = {
        language,
        direction: directions[language],
        t,
        setLanguage,
        toggleLanguage,
    };

    return ( 
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
}