import React from 'react';
import './Main.css';
import playlist1 from '../assets/playlist/1.jpeg';
import playlist2 from '../assets/playlist/2.png';
import playlist3 from '../assets/playlist/3.jpeg';
import playlist4 from '../assets/playlist/4.jpeg';
import playlist5 from '../assets/playlist/5.jpeg';
import playlist6 from '../assets/playlist/6.jpeg';
import playlist7 from '../assets/playlist/7.jpeg';
import playlist8 from '../assets/playlist/8.jpeg';
import playlist9 from '../assets/playlist/9.jpeg';
import playlist10 from '../assets/playlist/10.jpeg';
import playlist11 from '../assets/playlist/11.jpeg';
import playlist12 from '../assets/playlist/12.jpeg';
import playlist13 from '../assets/playlist/13.jpeg';
import playlist14 from '../assets/playlist/14.jpeg';
import playlist15 from '../assets/playlist/15.jpeg';

const Main = () => {
    return (
        <main>
            <div class="main-container">
                <div class="playlist-container">
                    <div id="result-playlists">
                        <div class="playlist">
                            <h1 id="greeting">Boas vindas</h1>
                            <h2 class="session">Navegar por todas as seções</h2>
                        </div>

                        <div class="offer__scroll-container">
                            <div class="offer__list">
                                <section class="offer__list-item">
                                    <a href="" class="cards">
                                        <div class="cards card1">
                                            <img src={playlist1} alt="" />
                                            <span>Boas festas</span>
                                        </div>
                                    </a>

                                    <a href="" class="cards">
                                        <div class="cards card2">
                                            <img src={playlist2} alt="" />
                                            <span>Feitos para você</span>
                                        </div>
                                    </a>

                                    <a href="" class="cards">
                                        <div class="cards card3">
                                            <img src={playlist3} alt="" />
                                            <span>Lançamentos</span>
                                        </div>
                                    </a>

                                    <a href="" class="cards">
                                        <div class="cards card4">
                                            <img src={playlist4} alt="" />
                                            <span>Creators</span>
                                        </div>
                                    </a>

                                    <a href="" class="cards">
                                        <div class="cards card5">
                                            <img src={playlist5} alt="" />
                                            <span>Para treinar</span>
                                        </div>
                                    </a>

                                    <a href="" class="cards">
                                        <div class="cards card6">
                                            <img src={playlist6} alt="" />
                                            <span>Podcasts</span>
                                        </div>
                                    </a>

                                    <a href="" class="cards">
                                        <div class="cards card7">
                                            <img src={playlist7} alt="" />
                                            <span>Sertanejo</span>
                                        </div>
                                    </a>

                                    <a href="" class="cards">
                                        <div class="cards card8">
                                            <img src={playlist8} alt="" />
                                            <span>Samba e pagode</span>
                                        </div>
                                    </a>

                                    <a href="" class="cards">
                                        <div class="cards card9">
                                            <img src={playlist9} alt="" />
                                            <span>Funk</span>
                                        </div>
                                    </a>

                                    <a href="" class="cards">
                                        <div class="cards card10">
                                            <img src={playlist10} alt="" />
                                            <span>MPB</span>
                                        </div>
                                    </a>

                                    <a href="" class="cards">
                                        <div class="cards card11">
                                            <img src={playlist11} alt="" />
                                            <span>Rock</span>
                                        </div>
                                    </a>

                                    <a href="" class="cards">
                                        <div class="cards card12">
                                            <img src={playlist12} alt="" />
                                            <span>Hip Hop</span>
                                        </div>
                                    </a>

                                    <a href="" class="cards">
                                        <div class="cards card13">
                                            <img src={playlist13} alt="" />
                                            <span>Indie</span>
                                        </div>
                                    </a>

                                    <a href="" class="cards">
                                        <div class="cards card14">
                                            <img src={playlist14} alt="" />
                                            <span>Relax</span>
                                        </div>
                                    </a>

                                    <a href="" class="cards">
                                        <div class="cards card15">
                                            <img src={playlist15} alt="" />
                                            <span>Música Latina</span>
                                        </div>
                                    </a>
                                </section>
                            </div>
                        </div>
                    </div>
                    <div id="result-artist" class="hidden">
                        <div class="grid-container">
                            <div class="artist-card" id="">
                                <div class="card-img">
                                    <img id="artist-img" class="artist-img" />
                                    <div class="play">
                                        <span class="fa fa-solid fa-play"></span>
                                    </div>
                                </div>
                                <div class="card-text">
                                    <a title="Foo Fighters" class="vst" href="">
                                    <span class="artist-name" id="artist-name"></span>
                                    <span class="artist-categorie">Artista</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
    </main>
    )
};

export default Main;