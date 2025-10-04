import React from 'react';

export interface SocialLink {
  name: string;
  url: string;
  // Fix: Use React.ReactElement to avoid issues with the JSX namespace in .ts files.
  icon: (props: React.SVGProps<SVGSVGElement>) => React.ReactElement;
}

export interface SiteLink {
    name: string;
    url: string;
}
