import React from 'react';
import Img1 from '../assets/portfolio-img1.png';
import Img2 from '../assets/portfolio-img2.png';
import Img3 from '../assets/portfolio-img3.png';


const Work = () => {

  return (
    <section className='section mt-72' id='work'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-x-10'>
          <div className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
            {/*Texto */}
            <div>
              <h2 className='h2 leading-tight text-accent'>My Latest <br />
                Works.
              </h2>
              <p className='max-w-sm mb-16'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a mollis
                turpis, a suscipit tellus. Nullam feugiat erat varius massa consequat, at aliquam risus commodo.
                Ut quis felis blandit, consequat enim id, accumsan est.</p>

              <button className='btn btn-sm'>View all projects</button>

            </div>

            {/*Imagen */}
            <div className='group relative overflow-hidden border-2 border-white/50
                            rounded-xl'>
              {/*Overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute
                              z-40 transition-all duration-300'></div>
              <img className='group-hover:scale-125 transition-all duration-500'
                src={Img1}
                alt='' />
              {/*Pre-Titulo */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24
                              transition-all duration-500 z-50'>
                <span className='text-gradient'>Scrum Master</span>

              </div>
              {/*Titulo */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14
                              transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>Project Title</span>
              </div>


            </div>
          </div>
          <div className='flex-1 flex flex-col gap-y-24 mt-2'>
            {/*Imagen */}
            <div className='group relative overflow-hidden border-2 border-white/50
                            rounded-xl'>
              {/*Overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute
                              z-40 transition-all duration-300'></div>
              <img className='group-hover:scale-125 transition-all duration-500'
                src={Img2}
                alt='' />
              {/*Pre-Titulo */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24
                              transition-all duration-500 z-50'>
                <span className='text-gradient'>Scrum Master</span>

              </div>
              {/*Titulo */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14
                              transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>Project Title</span>
              </div>
            </div>
            <div className='group relative overflow-hidden border-2 border-white/50
                            rounded-xl'>
              {/*Overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute
                              z-40 transition-all duration-300'></div>
              <img className='group-hover:scale-125 transition-all duration-500'
                src={Img3}
                alt='' />
              {/*Pre-Titulo */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24
                              transition-all duration-500 z-50'>
                <span className='text-gradient'>Scrum Master</span>

              </div>
              {/*Titulo */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14
                              transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>Project Title</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

};

export default Work;
