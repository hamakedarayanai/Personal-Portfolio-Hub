import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import PagesPage from './pages/PagesPage';
import SitesPage from './pages/SitesPage';
import RadioPage from './pages/RadioPage';
import WhatsAppPage from './pages/WhatsAppPage';
import NotFoundPage from './pages/NotFoundPage';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pages" element={<PagesPage />} />
          <Route path="/sites" element={<SitesPage />} />
          <Route path="/radio" element={<RadioPage />} />
          <Route path="/whatsapp" element={<WhatsAppPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;
