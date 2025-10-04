
import React from 'react';

interface PageWrapperProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ title, subtitle, children }) => {
  return (
    <div className="animate-fade-in">
      <section className="text-center py-8 bg-surface rounded-lg shadow-lg mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-text-primary">{title}</h1>
        {subtitle && <p className="mt-2 text-lg text-text-secondary">{subtitle}</p>}
      </section>
      {children}
    </div>
  );
};

export default PageWrapper;
