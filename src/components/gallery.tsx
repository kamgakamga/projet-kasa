import React, {FunctionComponent, useState} from 'react';
import '../styles/components/gallery.css';
import Next from '../assets/img/next.svg'
import Previous from '../assets/img/previous.svg'

        type Props = {
                pictures: string[];
              };  

const Gallery:FunctionComponent<Props> = ({pictures}) =>{
        
/************declaration des etats************/
const [currentIndex, setCurrentIndex] = useState(0);

/************declaration des variables************/


/************declaration des fonction************/
const handleNext = () => {
        if (currentIndex === pictures.length - 1) {
               
          setCurrentIndex(0);
        } else {
                console.log(pictures[currentIndex + 1]);
          setCurrentIndex(currentIndex + 1);
        }
      };
      const handlePrevious = () => {
        console.log("previous...");
        if (currentIndex === 0) {
          setCurrentIndex(pictures.length - 1);
        } else {
          setCurrentIndex(currentIndex - 1);
        }
      };


/************declaration du dom virtuel*******/
        return (
                <div className='gallery'>
                  <div className='gallery__image'>
                     <img className='gallery__image__item' src={pictures[currentIndex]} alt={pictures[currentIndex]} />
                  </div>
                  <div className='butom'>
                     <span className='previous' onClick={handlePrevious}><img src={Previous} className='previous__image' alt={pictures[currentIndex]} /></span>
                     <span className='next' onClick={handleNext}><img  className='next__image' src={Next} alt={pictures[currentIndex]} /></span>
                   </div>
                </div>
        );
}

export default Gallery;

