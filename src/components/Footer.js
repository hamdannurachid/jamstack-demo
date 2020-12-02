import React from 'react';

const Footer = () => (
  <footer className="container- fluid mx-auto py-16 px-3 mt-48 text-gray-800 bg-gray-50 dark:bg-gray-800">
    <div className="flex -mx-3">
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold text-center dark:text-gray-50 text-gray-800 ">JAMSTACK.id</h2>
      </div>
    </div>

       © {new Date().getFullYear()}, Built with
    {` `}
    <a href="#" className="dark:text-gray-50">Gatsby</a>



  </footer>
);

export default Footer;
