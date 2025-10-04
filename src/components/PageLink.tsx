import React from 'react';
import { Link } from 'react-router-dom';

interface PageLinkProps {
  to: string;
  isExternal?: boolean;
  children: React.ReactNode;
}

const PageLink: React.FC<PageLinkProps> = ({ to, isExternal = false, children }) => {
  const commonClasses = "block w-full text-center bg-surface hover:bg-surface-elevated text-text-primary font-medium py-4 px-6 rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl border border-border-color";

  if (isExternal) {
    return (
      <a href={to} target="_blank" rel="noopener noreferrer" className={commonClasses}>
        {children}
      </a>
    );
  }

  return (
    <Link to={to} className={commonClasses}>
      {children}
    </Link>
  );
};

export default PageLink;
