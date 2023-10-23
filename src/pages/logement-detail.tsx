import React, {FunctionComponent, useEffect, useState}from 'react';
import '../styles/pages/logement-detail.css'
import { LOGEMENTS } from '../models/mocks-logement';
import Logement from '../models/logement';
import { RouteComponentProps } from 'react-router-dom';
import DropdownCard from '../components/drop-down-card';
import Avatar from '../components/avatar';
import Gallery from '../components/gallery';
import Tag from '../components/tag';
import Equipement from '../components/equipement';


type Params = {
        id: string
 };

const LogementDetail:FunctionComponent<RouteComponentProps<Params>> =  ({match}) =>{   


/************declaration des etats************/
 const [logement, setLogement] = useState<Logement|null>(null);
         
        useEffect(() => { 
                LOGEMENTS.forEach(logement =>{
                        if(match.params.id === logement.id.toString()){
                                setLogement(logement);
                        } 
                }) 
        } , [match.params.id]);
  

/************declaration des variables************/
const description = 'Description';
const equipement = 'Équipements';
/************declaration des fonction************/




/************declaration du dom virtuel*******/
        return (
                <div className='contaiiner'>
                 
                        {/* {logement ? (  */}
                        { logement ? (
                        <div>
                            <div>
                              <Gallery key={logement.pictures.length} pictures={logement.pictures} />

                            </div>
                            <div className='avatar__tag__section'>
                                        <div className='tag-blog'>
                                                <div className='text'>
                                                        <h2 className='text__name'>Cozy loft on the Canal Saint-Martin</h2>
                                                        <p className='text__localisation'>Paris, Île-de-France</p>
                                                </div>
                                                <div className='tag-section'>

                                                         {logement.tags.map((tag, index) => (<Tag key={index} tag={tag} />
                                                                  
                                                                  ))}
                                                </div>
                                        </div>
                                        <div className='avatar-section'>
                                                <Avatar host={logement.host} />
                                                
                                        </div>
                                </div>
                                <div className='logement-details'>
                                        <span className='description'>
                                           <DropdownCard title={description}  contenu={logement.description} />
                                        </span>
                                        <span className='description'>
                                           <Equipement title={equipement}  contenu={logement.equipments} />
                                        </span>
                                </div>
                        </div>
                         ):(
                                <h4>Aucun logement a afficher !</h4>
                         )
                       }
                      
                </div>
        );
}

export default LogementDetail;