import React, { FunctionComponent } from 'react';
import '../styles/components/avatar.css'
import Host from '../models/host';

type Props = {
    host:Host
} 
// const Avatar:FunctionComponent= () => {
const Avatar:FunctionComponent<Props> = ({host}) => {
     
  return (
    <div className='avatar-container'>
          <div className='avatar-content' >
            <h3 className='host__name'>{host.name}</h3>
            <div className="host__picture__content">
              {/* valeur du tag */}
                <img className='host__picture' src={host.picture} alt={host.name} />
            </div>
          </div>
          <div>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star decoche" aria-hidden="true"></i>
          </div>
    </div>
  )
}

export default Avatar;
