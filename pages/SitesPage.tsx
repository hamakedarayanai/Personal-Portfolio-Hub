
import React from 'react';
import PageWrapper from '../components/PageWrapper';
import PageLink from '../components/PageLink';
import { SITE_LINKS } from '../constants';

const SitesPage: React.FC = () => {
  return (
    <PageWrapper title="Explore Our Sites" subtitle="Discover online projects by Hamake D. Arayanai">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {SITE_LINKS.map((site, index) => (
          <div key={site.name} className="animate-slide-up" style={{ animationDelay: `${index * 50}ms`}}>
            <PageLink to={site.url} isExternal={true}>{site.name}</PageLink>
          </div>
        ))}
      </div>
    </PageWrapper>
  );
};

export default SitesPage;
