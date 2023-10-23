import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

const PageNotFound: FunctionComponent = () => {

  return (
    <div className="">
      <img src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png" alt="Page non trouvée"/>
      <h1>Oups! La page que vous demandez n'existe pas.</h1> 
      <Link to="/" className="">
      Retourner sur la page d’accueil
      </Link>
    </div>
  );
}

export default PageNotFound;