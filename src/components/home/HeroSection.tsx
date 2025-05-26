import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-r from-gray-900 to-blue-900">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/1427541/pexels-photo-1427541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750')", 
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-teal-500 bg-opacity-20 text-teal-300 text-sm font-medium mb-5">
              Redefining Global B2B Trade
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Connect, Trade & Grow Your Business Globally
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-xl">
              The world's most user-friendly, transparent and trustworthy B2B marketplace for businesses of all sizes.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link
                to="/suppliers"
                className="px-6 py-3 bg-teal-500 text-white font-medium rounded-lg hover:bg-teal-600 transition-colors flex items-center"
              >
                Find Suppliers <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/products"
                className="px-6 py-3 bg-white text-gray-900 font-medium rounded-lg hover:bg-gray-100 transition-colors"
              >
                Browse Products
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:block"
          >
            <div className="relative bg-white p-6 rounded-xl shadow-2xl">
              <h3 className="text-lg font-semibold mb-4">Quick Product Search</h3>
              <div className="flex mb-4">
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  className="flex-grow px-4 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
                <button className="px-4 py-3 bg-teal-500 text-white rounded-r-lg hover:bg-teal-600 transition-colors">
                  <Search className="w-5 h-5" />
                </button>
              </div>
              
              <div className="mb-5">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Popular Categories:</h4>
                <div className="flex flex-wrap gap-2">
                  {['Electronics', 'Apparel', 'Home Goods', 'Industrial', 'Eco-Friendly'].map((category) => (
                    <span key={category} className="text-xs px-2 py-1 bg-gray-100 text-gray-800 rounded-full">
                      {category}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="border-t border-gray-100 pt-4">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Featured Suppliers:</h4>
                <div className="grid grid-cols-3 gap-2">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                        <span className="text-xs font-medium text-gray-600">S{item}</span>
                      </div>
                      <div className="text-xs text-gray-600">
                        Verified
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -right-3 -bottom-3 w-24 h-24 bg-teal-500 rounded-lg opacity-20 -z-10"></div>
              <div className="absolute -left-3 -top-3 w-16 h-16 bg-yellow-500 rounded-lg opacity-20 -z-10"></div>
            </div>
          </motion.div>
        </div>
        
        <div className="mt-16 flex justify-center">
          <div className="inline-flex items-center gap-8 py-3 px-6 bg-white bg-opacity-10 backdrop-blur-sm rounded-full">
            {['150+ Countries', '10,000+ Verified Suppliers', 'Secure Transactions', '24/7 Support'].map((item, index) => (
              <React.Fragment key={index}>
                {index > 0 && <div className="w-1 h-1 rounded-full bg-gray-300"></div>}
                <span className="text-sm font-medium text-gray-200">{item}</span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;