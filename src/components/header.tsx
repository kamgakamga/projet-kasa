import React, {FunctionComponent}from 'react';
import '../styles/components/header.css';
import LogoKasa from '../assets/img/logo-kasa.svg'
import { Link, NavLink } from 'react-router-dom';

const Header:FunctionComponent = () =>{
       
let isActive = true;
/************declaration des etats************/


/************declaration des variables************/


/************declaration des fonction************/

function onUnderline(): boolean{
        isActive = true;
      return isActive;
}

/************declaration du dom virtuel*******/
        return (
                <div className='header'>
                        {/* {entete du site kasa} */}
                     <nav className='header-container'>
                        {/* {logo} */}
                        <div className='img-logo'>
                                <img src={LogoKasa} height={45} alt="logo kasa"/>
                        </div>
                         {/* {menu} */}
                        <ul className='menu'>
                                {/* <li className='menu__item' onClick={onUnderline()}>Accueil</li> */}
                                <NavLink to="/"><li className={isActive?'menu__item':''} >Accueil</li></NavLink>
                                <NavLink to="/a-propos" ><li className='menu__item'>A propos</li></NavLink>
                        </ul>
                     </nav>
                </div>
        );
}

export default Header;