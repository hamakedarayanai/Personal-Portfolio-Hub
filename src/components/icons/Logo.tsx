import React from 'react';

export const Logo = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path d="M4 4h4v16H4V4zm6 0h4v7h-4V4zm0 10h4v6h-4v-6zm6 0h4v6h-4v-6zm0-10h4v7h-4V4z"/>
    </svg>
);
