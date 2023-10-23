import React, {FunctionComponent}from 'react';
import '../styles/components/logement-card.css'
import logement from '../models/logement';
import { useHistory } from 'react-router-dom';

type Props = {
        logement : logement
}

const LogementCard:FunctionComponent<Props> = ({logement}) =>{
/************declaration des etats************/
const history = useHistory();

/************declaration des variables************/

/************declaration des fonction************/

const goToLogement = (id: string) =>{
        history.push(`/logements/${id}`)
}


/************declaration du dom virtuel*******/
        return (
                <div className='card-logement-container'>
                        <div className='image-content' onClick={() => goToLogement(logement.id)}>
                                <h1 className='card-logement__title'>{logement.title}</h1>
                                <img className='image' src={logement.cover}  alt={logement.cover} />
                        </div> 
                </div>
        );
}

export default LogementCard;