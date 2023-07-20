import React from 'react';
import Logo from '../assets/logo.svg';
import Logo1 from '../assets/aguscode.png';

const Header = () => {
  return <header className='py-8'>

    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        {/*logo*/}
        <a href='#'>
           <img src={Logo1} alt=''></img>
        </a>
        <button className='btn btn-sm'> Work with me!</button>
      </div>

    </div>

  </header>;
};

export default Header;
