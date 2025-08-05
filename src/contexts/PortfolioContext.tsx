import React, { ReactNode, createContext, useState } from "react";

interface PortifolioContextProps{
    content: ReactNode;
    addContent: (newContent : ReactNode) => void;
    clearContent: () => void;
}

interface PortfolioProviderProps{
    children: ReactNode;
}

export const PortifolioContext = createContext({} as PortifolioContextProps);

export const PortfolioProvider = ({ children } : PortfolioProviderProps) => {
    const[content, setContent] = useState(null);

    const addContent = (newContent : ReactNode) =>{
        setContent(newContent);
    };

    const clearContent = () =>{
        setContent(null);
    };

    return(
        <PortifolioContext.Provider
            value={{
                content,
                addContent,
                clearContent
            }}
        >
            {children}
        </PortifolioContext.Provider>
    )
}