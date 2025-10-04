
import React, { useState, useCallback } from 'react';
import PageWrapper from '../components/PageWrapper';

const WhatsAppPage: React.FC = () => {
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    const phoneRegex = /^\+?[1-9]\d{7,14}$/;

    if (!phoneRegex.test(phone)) {
      setError('Please enter a valid phone number (e.g., +6281234567890).');
      return;
    }

    if (!message.trim()) {
      setError('Message cannot be empty.');
      return;
    }

    setError('');
    
    const formattedPhone = phone.replace(/[^0-9]/g, '');
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${formattedPhone}&text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  }, [phone, message]);

  return (
    <PageWrapper title="WhatsApp Chat Form" subtitle="Instantly connect via WhatsApp with a custom message">
      <div className="max-w-xl mx-auto p-6 sm:p-8 bg-surface rounded-lg shadow-xl">
        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium text-text-secondary mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-3 py-2 bg-surface-elevated border border-border-color rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="+6281234567890"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-1">
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-3 py-2 bg-surface-elevated border border-border-color rounded-md focus:outline-none focus:ring-2 focus:ring-primary h-32 resize-none"
              placeholder="Type your message here..."
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}
          <button
            type="submit"
            className="w-full bg-primary text-white font-bold py-3 px-4 rounded-md hover:bg-primary-hover transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-primary/50"
          >
            Open WhatsApp Chat
          </button>
        </form>
      </div>
    </PageWrapper>
  );
};

export default WhatsAppPage;
