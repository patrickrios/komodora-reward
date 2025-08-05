import React from "react";
import komodoraLogo from "./assets/komodora_logotype-min.png";
import KomodoraCover from "./assets/komdora_vertical_cover_min.png";
import patrickAvatar from "./assets/patrickrios_avatar-min.png";
import ayanaAvatar from "./assets/ayanasz_avatar-min.png";
import screen01 from "./assets/screenshots/screenshot_01-min.png";
import screen02 from "./assets/screenshots/screenshot_02-min.png";
import screen03 from "./assets/screenshots/screenshot_03-min.png";
import screen04 from "./assets/screenshots/screenshot_04-min.png";
import screen05 from "./assets/screenshots/screenshot_05-min.png";
import css from "./presskit.module.css";

export const KomodoraPresskit = () => {
    return(
        <main id="wrapper">
            <header  className={css.presskitHeader}>
                <img src={komodoraLogo}/>
            </header>
            <a href="https://drive.google.com/drive/u/0/folders/1NU1eWnwIt7t33_d2odi7sLGWi8JRcLCF" target="_blank" rel="noreferrer" className={css.dowloadButton}>
                Baixar os arquivos do Press Kit
            </a>
            <article className={css.content}>
                <section className={css.contentSection}>
                    <div>
                        <h2>Descrição</h2>
                        <p><i>Komodora</i> é uma jornada de <i>aventura</i>, o objetivo é alcançar o outro lado de uma <i>ilha</i> onde a condição de vida é melhor para nossa <i>heroína</i>.</p>
                        <p>Mas o caminho até lá é repleto de <i>desafios</i>, e para superá-los, você pode contar com ajuda de <i>objetos mágicos</i> que te fornecem <i>habilidades</i> especiais.</p>
                    </div>
                    <div >
                        <h3>Features:</h3>
                        <p>• <i>Puzzle</i> em plataforma 2D</p>
                        <p>• Fases <i>feitas à mão</i></p>
                        <p>• Lindos gráficos em <i>pixel art</i></p>
                        <p>• Personagem <i>fofa</i> e <i>carismática</i></p>
                    </div>
                    <div >
                        <h3>Equipe:</h3>
                        <div className={css.equipeSection}>
                            <div className={css.equipeItem}>
                                <div className={css.equipeItemProfile}>
                                    <img src={patrickAvatar}/>
                                    <div className={css.equipeItemName}>
                                        <h4>Patrick Rios</h4>
                                        <span>Programação | Arte gráfica</span>
                                    </div>
                                </div>
                                <ul className={css.equipeItemLinks}>
                                    <li><a href="https://www.instagram.com/patrickrios.dev/" target="_blank" rel="noreferrer">
                                        @patrickrios.dev on instagram
                                    </a></li>
                                    <li><a href="https://github.com/patrickrios" target="_blank" rel="noreferrer">
                                        @patrickrios on GitHub
                                    </a></li>
                                    <li><a href="https://patrickrios.itch.io/" target="_blank" rel="noreferrer">
                                        @patrickrios on Itch.io
                                    </a></li>
                                    <li><a href="https://www.linkedin.com/in/patrickriosf/" target="_blank" rel="noreferrer">
                                        @patrickriosf on LinkedIn
                                    </a></li>
                                </ul>
                            </div>
                            <div className={css.equipeItem}>
                                <div className={css.equipeItemProfile}>
                                    <img src={ayanaAvatar}/>
                                    <div className={css.equipeItemName}>
                                        <h4>Ayana SZ</h4>
                                        <span>Arte gráfica | UI Design</span>
                                    </div>
                                </div>
                                <ul className={css.equipeItemLinks}>
                                    <li><a href="https://www.instagram.com/ayanaart.png/" target="_blank" rel="noreferrer">
                                        @ayanaart.png on instagram
                                    </a></li>
                                    <li><a href="https://ayana-sz.itch.io/" target="_blank" rel="noreferrer"> 
                                        @ayana_sz on Itch.io
                                    </a></li>
                                    <li><a href="https://www.linkedin.com/in/alanab-seguins/" target="_blank" rel="noreferrer">
                                        @alanab-seguins on LinkedIn
                                    </a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <aside className={css.sideContent}>
                    <img src={KomodoraCover}/>
                    <p className={css.firstPlace}>
                        🥇🏆 1º lugar na <a href="https://itch.io/jam/clecio-gamedev-jam-02" target="_blank" rel="noreferrer">Clecio Gamedev JAM #02</a>
                    </p>
                    <a href="https://patrickrios.itch.io/komodora" target="_blank" rel="noreferrer" className={css.playButton}>
                        Jogar no Itch.io
                    </a>
                </aside>
                <section className={css.completeRow}>
                    <div>
                        <h2>Desenvolvimento</h2>
                        <p><i>Komodora</i> foi criado em sete dias para uma <i>GameJam</i>. O tema era <i>DRAGÃO</i>, e para fugir do óbvio (um animal místico e castelos medievais), nos veio a ideia de um jogo sobre esses <i>animais ínicríveis</i> que habitam a ilha de <i>Komodo</i>.</p>
                        <p>O jogo foi implementado na <i>Godot Engine</i>. As artes foram produzidas usando o <i>LibreSprite</i> e os sons foram mixados no <i>Audacity</i>.</p>
                        <p>O ideia deu muito certo, e Komodora foi <i>campeão</i> da GameJam. Após o término da jam, decidimos continuar o projeto e nossa intenção é criar uma <i>versão comercial</i> do jogo.</p>
                    </div>
                    <div>
                        <h2>Screenshots</h2>
                        <div className={css.screens}>
                            <img src={screen01} style={{gridColumn: "span 2"}}/>
                            <img src={screen02}/>
                            <img src={screen03}/>
                            <img src={screen04}/>
                            <img src={screen05}/>
                        </div>
                    </div>
                </section>
            </article>
        </main>
    )
}