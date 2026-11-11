import type { Language, LanguageContextType } from "@/types";
import {directions, translations} from "../locales/translations.js"
import { createContext, useEffect, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider ({children} : {children: React.ReactNode}) {
    const [language, setLanguage] = useState<Language>(() => {
    const savedLang = localStorage.getItem('preferred-lang') as Language;
    return savedLang === 'ar' || savedLang === 'en' ? savedLang : 'ar';
});

useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = directions[language];
    localStorage.setItem('preferred-lang', language);
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