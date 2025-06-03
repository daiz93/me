
import React from 'react';
import ContactForm from '../components/Contact'; // Renommer ou réutiliser directement

const ContactPage: React.FC = () => {
  return (
    <div className="pt-16"> {/* Ajoute un padding top pour compenser la navbar fixe */}
      <ContactForm />
    </div>
  );
};

export default ContactPage;
