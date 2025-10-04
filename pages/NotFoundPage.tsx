
import React from 'react';
import { Link } from 'react-router-dom';
import PageWrapper from '../components/PageWrapper';

const NotFoundPage: React.FC = () => {
  return (
    <PageWrapper title="404 - Page Not Found" subtitle="Oops! The page you are looking for does not exist.">
      <div className="text-center">
        <Link 
          to="/" 
          className="inline-block bg-primary text-white font-bold py-3 px-6 rounded-md hover:bg-primary-hover transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-primary/50"
        >
          Go Back to Home
        </Link>
      </div>
    </PageWrapper>
  );
};

export default NotFoundPage;
