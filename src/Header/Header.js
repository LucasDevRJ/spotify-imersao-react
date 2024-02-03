import React from "react";
import './Header.css';
import smallRight from '../assets/icons/small-right.png';
import smallLeft from '../assets/icons/small-left.png';
import search from '../assets/icons/search.png';

const Header = () => {
    return (
        <nav className="header__navigation">
            <div class="navigation">
                <button class="arrow-left">
                    <img src={smallLeft} alt="" />
                </button>
                <button class="arrow-right">
                    <img src={smallRight} alt="" />
                </button>
            </div>
            <div class="header__search">
                <img src={search} alt="" />
                <input id="search-input" maxlength="800" autocorrect="off" autocapitalize="off" spellcheck="false"
                    placeholder="O que você quer ouvir?" value="" />
            </div>
            <div class="header__login">
                <button class="subscribe">Inscreva-se</button>
                <button class="login">Entrar</button>
            </div>
        </nav>
    )
};

export default Header;