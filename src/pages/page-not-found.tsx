import React, { FunctionComponent } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styles/pages/page-not-found.css'


const PageNotFound: FunctionComponent = () => {

  return (
    <div className="">
       <p className='error-code'>404</p>
       <h3  className='page'>Oups! La page que vous demandez n'existe pas.</h3> 
       <NavLink to="/">
              <p className="retour-accueil"  style={{ textDecoration: "none" }} >Retourner sur la page d’accueil</p> 
       </NavLink>
    </div>
  );
}

export default PageNotFound;