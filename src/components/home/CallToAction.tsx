import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const CallToAction: React.FC = () => {
  const benefits = [
    'Connect with verified global suppliers',
    'Access AI-powered translation tools',
    'Secure payment & logistics integration',
    'Dedicated support for small businesses'
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-teal-600 to-blue-700 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Global Trade Experience?
            </h2>
            <p className="text-xl text-teal-100 mb-8">
              Join thousands of businesses already using our platform to connect, 
              trade and grow on the global stage.
            </p>
            
            <ul className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2 mt-1 bg-teal-400 rounded-full p-0.5">
                    <Check size={14} className="text-teal-900" />
                  </span>
                  <span className="text-teal-100">{benefit}</span>
                </li>
              ))}
            </ul>
            
            <div className="flex flex-wrap gap-4">
              <Link
                to="/suppliers"
                className="px-6 py-3 bg-white text-teal-700 font-medium rounded-lg hover:bg-gray-100 transition-colors flex items-center"
              >
                Get Started <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/about"
                className="px-6 py-3 bg-transparent text-white border border-white font-medium rounded-lg hover:bg-white hover:bg-opacity-10 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-teal-500 bg-opacity-20 rounded-xl transform rotate-3"></div>
              <div className="relative bg-white text-gray-900 p-8 rounded-xl shadow-xl">
                <h3 className="text-xl font-semibold mb-4">Join Our Platform</h3>
                <p className="text-gray-600 mb-6">
                  Create your account and start connecting with global partners.
                </p>
                
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Business Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="you@company.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">
                      Business Type
                    </label>
                    <select
                      id="type"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    >
                      <option value="">Select business type</option>
                      <option value="buyer">Buyer</option>
                      <option value="supplier">Supplier</option>
                      <option value="both">Both</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-teal-500 text-white font-medium rounded-lg hover:bg-teal-600 transition-colors"
                  >
                    Create Free Account
                  </button>
                </form>
                
                <p className="mt-4 text-xs text-gray-500 text-center">
                  By signing up, you agree to our Terms of Service and Privacy Policy.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;