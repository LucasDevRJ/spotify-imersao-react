import React from "react";
import './Main.css';

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
                                            <img src="./src/assets/playlist/1.jpeg" alt="" />
                                            <span>Boas festas</span>
                                        </div>
                                    </a>

                                    <a href="" class="cards">
                                        <div class="cards card2">
                                            <img src="./src/assets/playlist/2.png" alt="" />
                                            <span>Feitos para você</span>
                                        </div>
                                    </a>

                                    <a href="" class="cards">
                                        <div class="cards card3">
                                            <img src="./src/assets/playlist/3.jpeg" alt="" />
                                            <span>Lançamentos</span>
                                        </div>
                                    </a>

                                    <a href="" class="cards">
                                        <div class="cards card4">
                                            <img src="./src/assets/playlist/4.jpeg" alt="" />
                                            <span>Creators</span>
                                        </div>
                                    </a>

                                    <a href="" class="cards">
                                        <div class="cards card5">
                                            <img src="./src/assets/playlist/5.jpeg" alt="" />
                                            <span>Para treinar</span>
                                        </div>
                                    </a>

                                    <a href="" class="cards">
                                        <div class="cards card6">
                                            <img src="./src/assets/playlist/6.jpeg" alt="" />
                                            <span>Podcasts</span>
                                        </div>
                                    </a>

                                    <a href="" class="cards">
                                        <div class="cards card7">
                                            <img src="./src/assets/playlist/7.jpeg" alt="" />
                                            <span>Sertanejo</span>
                                        </div>
                                    </a>

                                    <a href="" class="cards">
                                        <div class="cards card8">
                                            <img src="./src/assets/playlist/8.jpeg" alt="" />
                                            <span>Samba e pagode</span>
                                        </div>
                                    </a>

                                    <a href="" class="cards">
                                        <div class="cards card9">
                                            <img src="./src/assets/playlist/9.jpeg" alt="" />
                                            <span>Funk</span>
                                        </div>
                                    </a>

                                    <a href="" class="cards">
                                        <div class="cards card10">
                                            <img src="./src/assets/playlist/10.jpeg" alt="" />
                                            <span>MPB</span>
                                        </div>
                                    </a>

                                    <a href="" class="cards">
                                        <div class="cards card11">
                                            <img src="./src/assets/playlist/11.jpeg" alt="" />
                                            <span>Rock</span>
                                        </div>
                                    </a>

                                    <a href="" class="cards">
                                        <div class="cards card12">
                                            <img src="./src/assets/playlist/12.jpeg" alt="" />
                                            <span>Hip Hop</span>
                                        </div>
                                    </a>

                                    <a href="" class="cards">
                                        <div class="cards card13">
                                            <img src="./src/assets/playlist/13.jpeg" alt="" />
                                            <span>Indie</span>
                                        </div>
                                    </a>

                                    <a href="" class="cards">
                                        <div class="cards card14">
                                            <img src="./src/assets/playlist/14.jpeg" alt="" />
                                            <span>Relax</span>
                                        </div>
                                    </a>

                                    <a href="" class="cards">
                                        <div class="cards card15">
                                            <img src="./src/assets/playlist/15.jpeg" alt="" />
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