import React, {FunctionComponent, useEffect, useState}from 'react';
import '../styles/pages/logement-list.css'
import LogementCard from '../components/logement-card';
import { LOGEMENTS } from '../models/mocks-logement';
import Logement from '../models/logement';
import Baniere from '../components/baniere';


const LogementList:FunctionComponent = () =>{
/************declaration des etats************/

const [logementList , setLogementList] = useState<Logement[]>([]);

 useEffect(() => {
        setLogementList(LOGEMENTS);
},[]);


  

/************declaration des variables************/

/************declaration des fonction************/



/************declaration du dom virtuel*******/
        return (
                <div>
                        <div>
                          <Baniere />
                        </div>
                        <div className='container'>
                            {logementList.map((logement)=>(
                                          <LogementCard key={logement.id} logement={logement} />
                                          )
                                        )}
                        </div>
                </div>
        );
}

export default LogementList;