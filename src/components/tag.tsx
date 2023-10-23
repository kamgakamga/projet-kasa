import React, { FunctionComponent } from 'react';
import '../styles/components/tag.css'

type Props = {
  tag: string
};


const Tag:FunctionComponent<Props> = ({tag}) => {
     
  return (
    <div className="tag">
      {/* valeur du tag */}
      <p>{tag}</p>
    </div>
  )
}

export default Tag;
