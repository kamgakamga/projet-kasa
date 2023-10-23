import React, {FunctionComponent}from 'react';
import BanierePrincipale from '../assets/img/baniere-principal.svg';
import '../styles/components/baniere.css';

const Baniere:FunctionComponent = () =>{
/************declaration des etats************/
const title = 'Chez vous, partout et ailleurs';

/************declaration des variables************/


/************declaration des fonction************/



/************declaration du dom virtuel*******/
        return (
                <div className='baniere'>
                     <div className='baniere__content'>
                        <h3 className='baniere-title'>{title}</h3>
                     </div>
                     <img src={BanierePrincipale} className='baniere-img' alt="image de la baniere" /> 
                </div>
        );
}

export default Baniere;