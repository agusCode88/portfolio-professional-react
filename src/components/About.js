import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer'
import { inView, motion } from 'framer-motion';
import { fadeIn } from '../variants';



const About = () => {

  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (

    <section className='section' id="about" ref={ref}>
      <div className='container mx-auto'> 
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center
                        lg:gap-x-20 lg:gap-y-0 h-screen'>


            {/*Imagen */}
          <motion.div 
              variants={fadeIn('right', 0.3)}
              initial='hidden'
              whileInView= {'show'}
              viewport={{once: false, amount:0.3}}
              className='flex-1 bg-about bg-contain bg-no-repeat h-[640px]
                             mix-blend-lighten bg-top'></motion.div>
          {/*ABOUT ME  */}
          <div className='flex-1'>
            <h2 className='h2 text-accent'>About me.</h2>
            <h3 className='h3 mb-4'>
              I'am a Freelance Front-End Developer with over 5 years of
              experience.
            </h3>
            {/*Texto Detalle*/}
            <p className=' mb-4 mt-8 text-lg lg:text-[20px] '>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a mollis
              turpis, a suscipit tellus. Nullam feugiat erat varius massa consequat, at aliquam risus commodo.
              Ut quis felis blandit, consequat enim id, accumsan est. Integer nec nulla fringilla, dictum nunc ac, hendrerit dolor.
              Aliquam erat volutpat. Nullam molestie ultricies magna id ultricies.
            </p>

            {/* Skills */}
            <div className='flex items-start gap-x-6 lg:gap-x-10 mb-12' >
              <div>
                <div className='text-[32px] font-tertiary text-gradient text-center
                mb-2'>
                  {inView ? <CountUp start={0} end={10} duration={6} /> : null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>Years of<br />
                  Experience
                </div>
              </div>

              <div className='flex'>
                <div>
                  <div className='text-[32px] font-tertiary text-gradient text-center
                mb-2'>
                    {inView ? <CountUp start={0} end={10} duration={6} /> : null}
                    k+
                  </div>
                  <div className='font-primary text-sm tracking-[2px]'>Years of<br />
                    Experience
                  </div>
                </div>

              </div>

            </div>

             {/*CONTACTME*/}
            <div className='flex justify-start mt-8'>
              <div className='btn btn-sm'>
                <button className='flex items-center justify-center'>
                  <span className='mx-2 py-2.5'>Contact Me</span>
                </button>
              </div>
            </div>

          </div>

          
        </div>
   </div>
      
    </section>
  );

};

export default About;
