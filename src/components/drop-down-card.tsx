import React, { useState } from 'react';
import '../styles/components/drop-down-card.css'
import Collapse from '../assets/img/collapse.svg';

// type Props = {
//         title:title,
//         contenu:contenu    
// }

const DropdownCard = ({ title = 'Respect', contenu = 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
}) => {
        const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown">
      {/* Bouton de titre */}
      <div className="dropdown-title">
        <span>{title}</span><span className='collapse' onClick={() => setIsOpen(!isOpen)}><img src={Collapse} alt="" /></span>
      </div>

      {/* Contenu du dropdown */}
      {isOpen && (
        <div className="dropdown-content">
          {contenu}
        </div>
      )}
    </div>
  )
}

export default DropdownCard;
