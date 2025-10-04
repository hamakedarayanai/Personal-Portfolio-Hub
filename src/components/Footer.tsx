import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface shadow-inner mt-12 py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-text-secondary">
        <p>&copy; {currentYear} Hamake D. Arayanai | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
