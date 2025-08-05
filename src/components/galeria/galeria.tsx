import React, { useContext, useEffect, useState } from "react";
import css from "./galeria.module.css";
import { galeriaData } from "./galeria-data";
import { PortifolioContext } from "../../contexts/PortfolioContext";
import { VerticalVideoPlayer } from "../vertical-video-player/vertical-video-player";

interface GaleriaProps{
    mediaId: number;
}
interface ArrowProps{
    styleClass?: string;
    action?: () => void;
}

const Arrow = ({ styleClass, action }: ArrowProps) => {
    return(
        <svg className={`${css.galeriaArrow} ${styleClass}`} onClick={action} width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 44C35.046 44 44 35.046 44 24C44 12.954 35.046 4 24 4C12.954 4 4 12.954 4 24C4 35.046 12.954 44 24 44Z" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
            <path d="M21 33L30 24L21 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

const Escape = () =>{
    const { clearContent } = useContext(PortifolioContext);
    return(
        <svg className={css.galeriaClose} onClick={clearContent} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 2C8.2 2 2 8.2 2 16C2 23.8 8.2 30 16 30C23.8 30 30 23.8 30 16C30 8.2 23.8 2 16 2ZM16 28C9.4 28 4 22.6 4 16C4 9.4 9.4 4 16 4C22.6 4 28 9.4 28 16C28 22.6 22.6 28 16 28Z" fill="white"/>
            <path d="M21.4 23L16 17.6L10.6 23L9 21.4L14.4 16L9 10.6L10.6 9L16 14.4L21.4 9L23 10.6L17.6 16L23 21.4L21.4 23Z" fill="white"/>
        </svg>
    )
}

export const Galeria = ({ mediaId } : GaleriaProps) => {
    const[currentMedia, setCurrentMedia] = useState(mediaId);
    const { clearContent } = useContext(PortifolioContext);

    const on_next_media = () => {
        if (currentMedia < galeriaData.length-1)
            setCurrentMedia(prev => prev + 1);
        else
            setCurrentMedia(0);

    }
    const on_previous_media = () => {
        if (currentMedia > 0)
            setCurrentMedia(prev => prev -1);
        else
            setCurrentMedia((galeriaData.length-1));
    }

    useEffect(() => {
        function handleKeyDown(event) {
            if (event.key === 'Escape') {
                clearContent()
            }
        }
         window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [clearContent]);

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    return(
        <div className={css.galeria}>
            
            <div className={css.blurLayer}/>
            <div className={css.galeriaNavigation}>
                <Arrow styleClass={css.leftArrow} action={on_previous_media}/>
                <Arrow action={on_next_media}/>
            </div>
            <div className={css.galeriaMedia}>
                {
                    galeriaData[currentMedia].type === 'photo' && 
                    <img src={galeriaData[currentMedia].url}/>
                }

                {
                    galeriaData[currentMedia].type === 'video' &&
                    <VerticalVideoPlayer 
                        url={galeriaData[currentMedia].url} 
                        thumb={galeriaData[currentMedia].thumb}
                    />
                }

            </div>
            <Escape/>
        </div>
    )
    
}