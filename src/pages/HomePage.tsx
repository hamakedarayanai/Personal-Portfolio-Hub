import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import type { SocialLink as SocialLinkType } from '../types';

const SocialLink: React.FC<{ link: SocialLinkType }> = ({ link }) => (
  <a
    href={link.url}
    target="_blank"
    rel="noopener noreferrer"
    className="group flex items-center justify-center w-full bg-surface hover:bg-surface-elevated text-text-primary font-medium py-3 px-4 rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl border border-border-color"
  >
    <link.icon className="w-6 h-6 mr-3 text-text-secondary group-hover:text-primary transition-colors" />
    <span className="flex-grow text-center">{link.name}</span>
  </a>
);

const HomePage: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <section className="text-center py-10 bg-surface rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-text-primary">Hamake D. Arayanai</h1>
        <p className="mt-2 text-lg text-text-secondary">"Love me or hate me, but spare me your indifference."</p>
      </section>

      <section className="max-w-md mx-auto mt-12">
        <h2 className="sr-only">Social Media Links</h2>
        <div className="grid grid-cols-1 gap-4">
          {SOCIAL_LINKS.map((link, index) => (
            <div key={link.name} className="animate-slide-up" style={{ animationDelay: `${index * 100}ms`}}>
              <SocialLink link={link} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;