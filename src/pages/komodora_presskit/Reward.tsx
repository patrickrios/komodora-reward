import React, { useContext } from "react";
import komodoraLogo from "./assets/komodora_logo_animated.gif";
import galleryBg from "./assets/mask-background-3-min.png";
import fishTile from "./assets/fsh-tile.png";
import css from "./presskit.module.css";
import { PortifolioContext } from "../../contexts/PortfolioContext";

import {thumbs} from "../../components/thumb/thumbs-data";
import { ThumbItem } from "../../components/thumb/ThumbItem";

export const KomodoraReward = () => {
    const{ content } = useContext(PortifolioContext);
    return(
        <main id="wrapper">
            <header  className={css.presskitHeader}>
                <img src={komodoraLogo}/>
            </header>
            <article className={css.content}>
                <section className={css.contentSection}>
                    <h2>Artes exclusivas pra você!</h2>
                    <div className={css.gallery}>
                        {thumbs?.map((item, index) =>{
                            return(
                                <ThumbItem 
                                    url={item?.url}
                                    type={item?.type} 
                                    mediaId={index} 
                                    key={`thumb-media-${index}`}
                                />
                            )
                        })}
                    </div>
                    
                    <div className={css.download}>
                        <a href="https://drive.google.com/drive/folders/1rtdiKMESonWqrm4N8WyZHH9n_NC_ClX5?usp=drive_link" target="_blank" rel="noreferrer" className={css.dowloadButton}>
                            Baixar tudo (google drive)
                        </a>
                    </div>
                </section>
            </article>
            
            <span className={css.tipBorder}/>
            <article className={css.tipSection}>
                <section className={css.contentSection}>
                    <h2 style={{fontSize:'6rem', color:'#FF2FD9'}}>DICA EXTRA!</h2>
                    <div className={css.tipContent}>
                        <img src={fishTile}/>
                        <p>Procure por esta figura no chão das fases, pois perto dele, sempre haverá um segredo escondido! 😉🦎🌺🦖</p>
                    </div>
                </section>
            </article>
            <img src={galleryBg} className={css.galleryBg}/>
            { content }
        </main>
    )
}