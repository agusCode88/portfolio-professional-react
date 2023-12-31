import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Contact = () => {

  return (

    <section className='py-16 lg:section' id="contact">
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/*text */}
          <div className='flex-1'>
            <div>
              <h4 className='text-xl uppercase text-accent font-medium mb-2
                                tracking-wide'>Get in touch</h4>
              <h2 className='text-[35px] lg:text-[80px] leading-none mb-12'>
                Let's work <br /> together!
              </h2>
            </div>
          </div>
          {/*form */}
          <form className='flex-1 border rounded-2xl flex flex-col gap-y-0
                            pb-24 p-6'>
            <input className='bg-transparent border-b py-3 outline-none
                                w-full placeholder-white focus:border-accent
                                transition-all'
              type='text'
              placeholder='Your Email' />

            <input className='bg-transparent border-b py-3 outline-none
                                w-full placeholder-white focus:border-accent
                                transition-all'
              type='text'
              placeholder='Your Name' />

              <textarea className='bg-transparent border-b py-12 outline-none
                                w-full placeholder-white focus:border-accent
                                transition-all resize-none mb-10'
                          type='text'
                          placeholder='Your Message'/>

              <button className='btn btn-lg'>Send Message</button>            
          </form>
        </div>
      </div>
    </section>

  )

};

export default Contact;
