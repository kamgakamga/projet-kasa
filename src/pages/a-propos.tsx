import React, {FunctionComponent}from 'react';
import '../styles/pages/apropos.css'
import logement from '../models/logement';
import Collapse from '../assets/img/Background.png'
import DropdownCard from '../components/drop-down-card';



type Props = {
        logement : logement
}

const Apropos:FunctionComponent<Props> = ({logement}) =>{
/************declaration des etats************/


/************declaration des variables************/
 const respect  = 'Respect';
 const respectContent = 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
 const fiabilite  = 'Fiabilité';
 const fiabiliteContent = 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.'
 const service  = 'Service';
 const serviceContent = 'Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N\'hésitez pas à nous contacter si vous avez la moindre question.'
 const securite  = 'Service';
 const securiteContent = 'La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l\'hôte qu\'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.'
/************declaration des fonction************/



/************declaration du dom virtuel*******/
        return (
                <div className='apopos-container'>
                     <div className='apropos__image__content'>
                        <img className='apropos__image__content__value' src={Collapse} alt='' />
                     </div>
                     <div >
                             <DropdownCard title={respect} contenu={respectContent}/> 
                             <DropdownCard title={fiabilite} contenu={fiabiliteContent}/> 
                             <DropdownCard title={service} contenu={serviceContent}/> 
                             <DropdownCard title={securite} contenu={securiteContent}/> 
                    </div>
                </div>
        );
}

export default Apropos;