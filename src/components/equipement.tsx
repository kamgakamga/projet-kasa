import React, { FunctionComponent, useState } from 'react';
import '../styles/components/drop-down-card.css'
import '../styles/components/equipement.css'
import Collapse from '../assets/img/collapse.svg';

type Props = {
        title:string;
        contenu:string[];    
}

const Equipement:FunctionComponent<Props>  = ({ title = 'Equipements', contenu}) => {
        const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown">
      {/* Bouton de titre */}
      <div className="dropdown-title">
        <span>{title}</span>
        <span className='collapse' onClick={() => setIsOpen(!isOpen)}>
          <img src={Collapse} alt="" />
        </span>
      </div>

      {/* Contenu du dropdown */}
      {isOpen && (
        <div className="dropdown-content">
            <ul>
                {contenu.map((item, index) => (
                        <li className='equipement__item' key={index}>{item}</li>
                ))}
            </ul>
        </div>
      )}
    </div>
  )
}

export default Equipement;
