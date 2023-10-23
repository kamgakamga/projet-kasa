import React, {FunctionComponent}from 'react';
import '../styles/components/footer.css';
import LogoFooter from '../assets/img/logo-footer.svg'
const Footer:FunctionComponent = () =>{
/************declaration des etats************/


/************declaration des variables************/
const copyright = '© 2020 Kasa. All rights reserved';

/************declaration des fonction************/



/************declaration du dom virtuel*******/
        return (
                <div className='footer-container'>
                        {/* {pied de page du site kasa} */}
                     <p> <img src={LogoFooter} height={39} alt="logo kasa"/></p>
                     <p>{copyright}</p>
                </div>
        );
}

export default Footer;