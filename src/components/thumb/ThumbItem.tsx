import React, { useContext } from "react";
import { PortifolioContext } from "../../contexts/PortfolioContext";
import { Galeria } from "../galeria/galeria";
import css from "./thumb-item.module.css";

interface ThumbProps{
    url: string;
    mediaId: number;
    type: string;
}

export const ThumbItem = ({ url, type, mediaId} : ThumbProps) => {
    const { addContent } = useContext(PortifolioContext);

    const handle_on_thumb_click = () =>{
        addContent(<Galeria mediaId={mediaId}/>)
    }
    return(
        <div className={css.thumbItem} onClick={handle_on_thumb_click}>
            <img src={url} className={css.thumbItemPicture}/>
            { type === 'photo' ? <CarouselIcon/> : <VideoIcon/>}
        </div>
    )
}

const CarouselIcon = () => {
    return (
        <svg className={css.thumbIcon}  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.4004 14.8499V5.4999C17.4004 4.0499 16.2504 2.8999 14.8004 2.8999H5.50039C4.05039 2.8999 2.90039 4.0499 2.90039 5.4999V14.8499C2.90039 16.2999 4.05039 17.4499 5.50039 17.4499H14.8504C16.2504 17.3999 17.4004 16.2499 17.4004 14.8499ZM19.6004 7.4999V15.5499C19.6004 17.7999 17.7504 19.6499 15.5004 19.6499H7.45039C7.15039 19.6499 7.00039 19.9999 7.20039 20.1999C7.70039 20.7499 8.40039 21.0999 9.25039 21.0999H15.9504C18.8004 21.0999 21.1004 18.7999 21.1004 15.9499V9.2499C21.1004 8.4499 20.7504 7.6999 20.2004 7.1999C19.9504 6.9999 19.6004 7.1999 19.6004 7.4999Z" fill="white"/>
        </svg>
)};

const VideoIcon = () =>{
    return(
        <svg className={css.thumbIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M12.823 1L15.797 6.002H10.217L7.567 1.031C7.773 1.018 7.986 1.009 8.209 1.004L8.55 1H12.823ZM15.15 1H15.448C18.508 1 19.916 1.754 21.088 2.887C21.8683 3.66306 22.4204 4.63855 22.684 5.707L22.754 6.002H18.125L15.15 1ZM5.483 1.377L7.95 6.002H1.244C1.44614 4.96757 1.91678 4.00448 2.60868 3.20938C3.30058 2.41427 4.18941 1.81511 5.186 1.472L5.483 1.377ZM15.218 14.211L10.673 11.587C10.5436 11.5122 10.3977 11.4705 10.2483 11.4655C10.0989 11.4606 9.95057 11.4925 9.81647 11.5586C9.68238 11.6247 9.56664 11.7228 9.47952 11.8442C9.39239 11.9657 9.33657 12.1068 9.317 12.255L9.309 12.375V17.623C9.30934 17.7722 9.34635 17.919 9.41677 18.0505C9.48719 18.182 9.58886 18.2942 9.71283 18.3772C9.8368 18.4602 9.97927 18.5114 10.1277 18.5263C10.2761 18.5413 10.426 18.5196 10.564 18.463L10.673 18.41L15.218 15.786C15.3473 15.7113 15.4561 15.6059 15.535 15.4791C15.6138 15.3524 15.6602 15.2081 15.6701 15.0592C15.68 14.9102 15.6531 14.7611 15.5916 14.625C15.5302 14.489 15.4362 14.3701 15.318 14.279L15.218 14.211ZM1.018 8.002H22.982L22.997 8.362L23 8.551V15.45C23 18.511 22.245 19.919 21.112 21.09C19.961 22.204 18.612 22.946 15.782 22.999L15.448 23.002H8.551C5.491 23.002 4.084 22.247 2.911 21.113C1.797 19.963 1.057 18.615 1.003 15.783L1 15.45V8.551L1.003 8.362L1.018 8.002Z" fill="white"/>
        </svg>
)}