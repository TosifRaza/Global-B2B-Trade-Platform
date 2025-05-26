import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import Logo from '../ui/Logo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: 'Platform',
      links: [
        { name: 'How it works', path: '/' },
        { name: 'Pricing', path: '/' },
        { name: 'Verified suppliers', path: '/' },
        { name: 'Success stories', path: '/' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Trade guides', path: '/' },
        { name: 'Import regulations', path: '/' },
        { name: 'Shipping calculators', path: '/' },
        { name: 'Market insights', path: '/' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About us', path: '/about' },
        { name: 'Careers', path: '/' },
        { name: 'Press', path: '/' },
        { name: 'Contact', path: '/' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Terms of service', path: '/' },
        { name: 'Privacy policy', path: '/' },
        { name: 'Dispute resolution', path: '/' },
        { name: 'Trade protection', path: '/' },
      ],
    },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          <div className="lg:col-span-2">
            <Logo variant="light" />
            <p className="mt-4 text-gray-400 max-w-md">
              Revolutionizing global B2B trade with a user-friendly, transparent, and 
              trustworthy platform that empowers businesses of all sizes.
            </p>
            <div className="flex mt-6 space-x-4">
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="text-lg font-semibold mb-4">{group.title}</h3>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.path} 
                      className="text-gray-400 hover:text-teal-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-gray-800 grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-400 text-sm">
          <div className="flex items-center space-x-2">
            <Mail size={16} />
            <span>razatosif@gmail.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <Phone size={16} />
            <span>91 7047389630</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin size={16} />
            <span>New York • London • Singapore • Hong Kong</span>
          </div>
        </div>

        <div className="pt-8 mt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>© {currentYear} Global Trade Hub. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <Link to="/" className="mr-4 hover:text-teal-400 transition-colors">Terms</Link>
            <Link to="/" className="mr-4 hover:text-teal-400 transition-colors">Privacy</Link>
            <Link to="/" className="hover:text-teal-400 transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;