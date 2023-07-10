import React from 'react';
import Image from '../assets/avatar.svg';
import {FaGitHub , FaYoutube, FaDribbble} from 'reacts-icons/fa';
import {TypeAnimation} from 'react-type-animation';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';

const Banner = () => {
  return (
    <section className='section' id='home'>
      <div className='container mx-auto'>

        <div>
          {/*Texto*/}
          <div>text</div>

          {/*Imagen*/}
          <div>
            <img src={Image} alt=''></img>
          </div>
        </div>


      </div>
      
      </section>

  )
};

export default Banner;
