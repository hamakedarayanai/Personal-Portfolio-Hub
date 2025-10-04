import React from 'react';
import PageWrapper from '../components/PageWrapper';
import PageLink from '../components/PageLink';

const pages = [
  { name: 'Radio Page', path: '/radio' },
  { name: 'WhatsApp Chat Form Page', path: '/whatsapp' },
];

const PagesPage: React.FC = () => {
  return (
    <PageWrapper title="Explore Our Pages" subtitle="Discover the different sections and services of our website.">
      <div className="max-w-md mx-auto">
        <div className="grid grid-cols-1 gap-4">
          {pages.map((page, index) => (
            <div key={page.name} className="animate-slide-up" style={{ animationDelay: `${index * 100}ms`}}>
              <PageLink to={page.path}>{page.name}</PageLink>
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default PagesPage;
