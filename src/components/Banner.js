import React from 'react';
import Image from '../assets/avatar.svg';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';


const Banner = () => {
  return (
    <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center ' id='home'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:items-center lg:flex-row gap-y-8
                        lg:gap-x-12  '>
          {/*Texto*/}
          <div className=' flex-1 text-center font-secondary lg:text-left'>
            <h1 className='text-[55px] font-bold leading-[0.8] lg:text[110px]'>
              Name <span>Surname</span>
            </h1>

            {/*Texto Animacion*/}
            <div className='mb-6 text-[36px] lg:text-[28px] font-secondary
                           font-semibold  leading-[-1]'>
              <span className='text-white mr-4 '>Your Profession</span>
              <TypeAnimation
                sequence={[
                  'Developer',
                  2000,
                  'Scrum Master',
                  2000,
                  '3D Maker',
                  2000,
                ]}
                speed={50}
                className="text-violet-900 mr-2 mb-4"
                wrapper='span'
                repeat={Infinity}
              />

              {/*Texto Detalle*/}
              <p className='mb-8 max-w-lg mx-auto lg:mx-0'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a mollis
                turpis, a suscipit tellus. Nullam feugiat erat varius massa consequat, at aliquam risus commodo.
                Ut quis felis blandit, consequat enim id, accumsan est. Integer nec nulla fringilla, dictum nunc ac, hendrerit dolor.
                Aliquam erat volutpat. Nullam molestie ultricies magna id ultricies.
              </p>
            </div>

            {/*Portafolio Link*/}
            <div id="seccion_portafolio" className='flex max-w-max gap-x-6 items-center'>
              <a href='#' className='text-gradient btn-link'>
                My Portfolio
              </a>
            </div>

            {/*Redes sociales*/}
            <div className='flex text-[20px] my-4 gap-x-6 max-w-max mx-auto
          lg:mx-0'>
              <a href='#'>
                <FaGithub />
              </a>
              <a href='#'>
                <FaLinkedin />
              </a>
            </div>

          </div>

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
