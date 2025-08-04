'use client';

import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useLanguageContext } from '../../../lib/contexts/LanguageContext';
import { ContactFormData } from '../../../lib/types';
import Container from '../../ui/Container';
import Button from '../../ui/Button';

const Contact: React.FC = () => {
  const { translations } = useLanguageContext();
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-950">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            {translations.contact.title}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-violet-500 to-pink-500 rounded-full mx-auto"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            {translations.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
                         <div>
               <h3 className="text-2xl font-semibold text-white mb-6">
                 {translations.contact.contactInfo}
               </h3>
               <p className="text-gray-300 mb-8">
                 {translations.contact.contactDescription}
               </p>
             </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-violet-500/20 rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5 text-violet-400" />
                </div>
                                 <div>
                   <h4 className="text-white font-medium">{translations.contact.email}</h4>
                   <p className="text-gray-400">mateuscaetanodev@gmail.com</p>
                 </div>
               </div>

               <div className="flex items-center gap-4">
                 <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                   <Phone className="w-5 h-5 text-blue-400" onClick={() => window.open('https://api.whatsapp.com/send?phone=5541984058590', '_blank')}/>
                 </div>
                 <div>
                   <h4 className="text-white font-medium">{translations.contact.phone}</h4>
                   <p className="text-gray-400">+55 41 98405-8590</p>
                 </div>
               </div>

               <div className="flex items-center gap-4">
                 <div className="w-12 h-12 bg-pink-500/20 rounded-full flex items-center justify-center">
                   <MapPin className="w-5 h-5 text-pink-400" />
                 </div>
                 <div>
                   <h4 className="text-white font-medium">{translations.contact.location}</h4>
                   <p className="text-gray-400">Curitiba, Brasil</p>
                 </div>
               </div>
            </div>

                         <div className="pt-8 border-t border-gray-800">
               <h4 className="text-white font-medium mb-4">{translations.contact.socialMedia}</h4>
              <div className="flex gap-4">
                <Button
                  variant="icon"
                  size="sm"
                  onClick={() => window.open('https://github.com/mateusramoscaetano', '_blank')}
                >
                  <span className="text-sm text-white">GH</span>
                </Button>
                <Button
                  variant="icon"
                  size="sm"
                  onClick={() => window.open('https://linkedin.com/in/mateusramoscaetano', '_blank')}
                >
                  <span className="text-sm text-white">IN</span>
                </Button>
                <Button
                  variant="icon"
                  size="sm"
                  onClick={() => window.open('https://twitter.com/mateusramoscaetano', '_blank')}
                >
                  <span className="text-sm text-white">TW</span>
                </Button>
              </div>
            </div>
          </div>

                     <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
             <h3 className="text-2xl font-semibold text-white mb-6">
               {translations.contact.sendMessage}
             </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  {translations.contact.name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                                     className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                   placeholder={translations.contact.namePlaceholder}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  {translations.contact.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                                     className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                   placeholder={translations.contact.emailPlaceholder}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  {translations.contact.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                                     className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent resize-none"
                   placeholder={translations.contact.messagePlaceholder}
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full"
                icon={<Send className="w-5 h-5" />}
              >
                {translations.contact.send}
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact; 