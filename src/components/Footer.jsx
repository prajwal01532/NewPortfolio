import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-gray-800 text-white py-4 text-center'>
      <p>&copy; {new Date().getFullYear()} Portfolio Website made by Prajwal Pokhrel. All rights reserved.</p>
      <div className='flex justify-center space-x-4'>
        <a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer' className='text-white'><i className='fab fa-facebook'></i></a>
        <a href='https://www.twitter.com' target='_blank' rel='noopener noreferrer' className='text-white'><i className='fab fa-twitter'></i></a>
        <a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer' className='text-white'><i className='fab fa-instagram'></i></a>
      </div>
    </footer>
  );
};

export default Footer; 