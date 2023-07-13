import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const services = [
  {
    name: 'UI/UX Design',
    description: 'Lorem ipsum dolor sit amet...',
    link: 'Learn More'
  },
  {
    name: 'Development',
    description: 'Lorem ipsum dolor sit amet...',
    link: 'Learn More'
  },
  {
    name: 'Scrum Master',
    description: 'Lorem ipsum dolor sit amet...',
    link: 'Learn More'
  }
];
const Services = () => {
  return (
    <section className='section' id='services'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/*Texto e imagen */}
          <motion.div 
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView= {'show'}
          viewport={{once: false, amount:0.3}}
          className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat
                                mix-blend-lighten mb-12 lg:mb-0'>

            <h2 className='h2 text-accent mb-6'>What I do.</h2>
            <h3 className='h3 max-w-[455px] mb-16'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a mollis
              turpis, a suscipit tellus. Nullam feugiat erat varius massa consequat, at aliquam risus commodo.
              Ut quis felis blandit, consequat enim id, accumsan est. Integer nec nulla fringilla, dictum nunc ac, hendrerit dolor.
              Aliquam erat volutpat. Nullam molestie ultricies magna id ultricies.
            </h3>
            <button className='btn btn-sm'>See my work</button>
          </motion.div>
          {/*Sevicios*/}
          <div className='flex-1'>
            {/*Lista Servicios*/}
            <div>
                {services.map((service, index) =>{
                  const { name, description, link } = service;
                  return(
                    <div className='border-b border-white/20 h-[146px] mb-[38px]
                    flex 'key={index}>
                        <div className='max-w-[476px]'>
                          <h4 className='text-[20px] tracking-wider font-primary
                                        font-semibold mb-6'>
                                 {name}
                          </h4>
                          <p className='font-secondary leading-tight'>
                            {description}
                          </p>
                        </div>
                        <div className='flex flex-col flex-1 items-end'>
                          <a href='#' className='mb-[42px]'>
                            <BsArrowUpRight/>
                          </a>
                          <a href='#'className='text-gradient text-sm'>
                            {link}
                          </a>
                        </div>

                    </div>
                    
                   ); 
                   
                })}              
            </div>  
          </div>  

        </div>
      </div>

    </section>
  )
};

export default Services;
