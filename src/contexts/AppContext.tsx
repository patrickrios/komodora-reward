import React, { createContext, ReactNode, useEffect, useState } from "react";
export interface AppProviderDatas{
    lang: string;
    changeLangEnglish: () => void;
    changeLangPtBr: () => void;
    switchLanguage: () => void;
}
interface AppProviderProps {
    children: ReactNode;
}

export interface ModalProps{
    children: ReactNode;
    title: string;
}

export const AppContext = createContext( {} as AppProviderDatas) 


export default function AppProvider( {children}: AppProviderProps){

    const [lang, setLang] = useState("pt-br");

    useEffect(()=>{
        const savedLang: string = localStorage.getItem("lang");
        if(savedLang)
            setLang(savedLang);
        else
            localStorage.setItem("lang","pt-br");
        return;
    },[]);

    const changeLangEnglish = () =>{
        setLang("eng");
        localStorage.setItem("lang","eng");
    }

    const changeLangPtBr = () =>{
        setLang("pt-br")
        localStorage.setItem("lang","pt-br");
    }

    const switchLanguage = () =>{
        if( lang === "pt-br"){
            setLang("eng");
            localStorage.setItem("lang","eng");
        }else{
            setLang("pt-br");
            localStorage.setItem("lang","pt-br");
        }
    };

    return(
        <AppContext.Provider 
            value={{
                lang,
                changeLangEnglish,
                changeLangPtBr,
                switchLanguage
            }}
        >
            {children}
        </AppContext.Provider>
    )
}