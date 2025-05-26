import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, ArrowRight, Globe, Users, ShieldCheck, TrendingUp } from 'lucide-react';

const AboutPage: React.FC = () => {
  const team = [
    {
      name: 'Isha Bera',
      position: 'CEO & Co-Founder',
      image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    },
    {
      name: 'Sakir Ali',
      position: 'CTO & Co-Founder',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    },
    // {
    //   name: '',
    //   position: 'COO',
    //   image: 'https://www.pexels.com/photo/turkish-coffee-with-scenic-bursa-view-31995895/',
    // },
    {
      name: 'Tosif',
      position: 'Head of Global Partnerships',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    },
  ];

  return (
    <div className="w-full">
      <section className="pt-32 pb-20 bg-gradient-to-r from-gray-900 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Global Trade Hub</h1>
            <p className="text-xl text-gray-300">
              We're on a mission to transform global B2B trade by creating the world's most 
              user-friendly, transparent, and trustworthy platform.
            </p>
          </motion.div>
        </div>
      </section>
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-gray-600 mb-6">
                We envision a world where global trade is accessible to businesses of all sizes, where 
                geographical barriers and language differences no longer limit opportunities, and where 
                trust and transparency are the foundation of every transaction.
              </p>
              <p className="text-gray-600 mb-6">
                Our platform is designed to be the "Binance for B2B trade" — sleek, fast, trustworthy, 
                and built for a new generation of global commerce.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                    <Globe className="w-6 h-6 text-teal-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Global Reach</h3>
                  <p className="text-sm text-gray-600">Connecting businesses across 150+ countries</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-teal-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Inclusivity</h3>
                  <p className="text-sm text-gray-600">Supporting businesses of all sizes</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                    <ShieldCheck className="w-6 h-6 text-teal-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Trust</h3>
                  <p className="text-sm text-gray-600">Building confidence through verification</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-teal-500 bg-opacity-20 rounded-xl transform -rotate-3"></div>
              <img 
                src="https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                alt="Team working together"
                className="relative rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Global Trade Hub was founded in 2025 by a team of international trade experts and technology 
              innovators who recognized the significant challenges facing businesses in traditional B2B marketplaces.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                <span className="font-bold text-teal-600">01</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">The Problem</h3>
              <p className="text-gray-600">
                We identified major pain points in existing B2B platforms: cluttered interfaces, 
                lack of trust, communication barriers, and complex payment and shipping processes.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                <span className="font-bold text-teal-600">02</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">The Solution</h3>
              <p className="text-gray-600">
                We built a platform focused on user experience, strict supplier verification, 
                AI-powered communication tools, and integrated payment and logistics solutions.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                <span className="font-bold text-teal-600">03</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">The Impact</h3>
              <p className="text-gray-600">
                Today, our platform helps thousands of businesses discover new opportunities, 
                build trusted relationships, and trade globally with confidence and ease.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Leadership Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our diverse team combines expertise in international trade, technology, 
              and user experience design.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="mb-4 rounded-xl overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <h3 className="font-semibold text-lg text-gray-900">{member.name}</h3>
                <p className="text-gray-600">{member.position}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Global Presence</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              With offices in key global trade hubs and a diverse team from around the world, 
              we understand the unique challenges of international business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="p-6 bg-gray-800 rounded-lg">
              <h3 className="font-semibold text-lg mb-4">New York</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start">
                  <MapPin size={18} className="mr-2 mt-0.5 text-teal-400" />
                  <span>398, Ramkrishnapur Rd, near Jagadighata Market, Barasat, Kolkata, West Bengal 700125</span>
                </li>
                <li className="flex items-start">
                  <Phone size={18} className="mr-2 mt-0.5 text-teal-400" />
                  <span>+91 7047389630</span>
                </li>
                <li className="flex items-start">
                  <Mail size={18} className="mr-2 mt-0.5 text-teal-400" />
                  <span>razatosif@gmail.com</span>
                </li>
              </ul>
            </div>
            
            <div className="p-6 bg-gray-800 rounded-lg">
              <h3 className="font-semibold text-lg mb-4">London</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start">
                  <MapPin size={18} className="mr-2 mt-0.5 text-teal-400" />
                  <span>398, Ramkrishnapur Rd, near Jagadighata Market, Barasat, Kolkata, West Bengal 700125</span>
                </li>
                <li className="flex items-start">
                  <Phone size={18} className="mr-2 mt-0.5 text-teal-400" />
                  <span>+91 7047389630</span>
                </li>
                <li className="flex items-start">
                  <Mail size={18} className="mr-2 mt-0.5 text-teal-400" />
                  <span>razatosif@gmail.com</span>
                </li>
              </ul>
            </div>
            
            <div className="p-6 bg-gray-800 rounded-lg">
              <h3 className="font-semibold text-lg mb-4">Singapore</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start">
                  <MapPin size={18} className="mr-2 mt-0.5 text-teal-400" />
                  <span>398, Ramkrishnapur Rd, near Jagadighata Market, Barasat, Kolkata, West Bengal 700125</span>
                </li>
                <li className="flex items-start">
                  <Phone size={18} className="mr-2 mt-0.5 text-teal-400" />
                  <span>+91 7047389630</span>
                </li>
                <li className="flex items-start">
                  <Mail size={18} className="mr-2 mt-0.5 text-teal-400" />
                  <span>razatosif@gmail.com</span>
                </li>
              </ul>
            </div>
            
            <div className="p-6 bg-gray-800 rounded-lg">
              <h3 className="font-semibold text-lg mb-4">Hong Kong</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start">
                  <MapPin size={18} className="mr-2 mt-0.5 text-teal-400" />
                  <span>398, Ramkrishnapur Rd, near Jagadighata Market, Barasat, Kolkata, West Bengal 700125</span>
                </li>
                <li className="flex items-start">
                  <Phone size={18} className="mr-2 mt-0.5 text-teal-400" />
                  <span>+91 7047389630</span>
                </li>
                <li className="flex items-start">
                  <Mail size={18} className="mr-2 mt-0.5 text-teal-400" />
                  <span>razatosif@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Growing Community</h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Be part of the future of global B2B trade. Start connecting with verified suppliers 
            and buyers from around the world.
          </p>
          <a 
            href="#" 
            className="inline-flex items-center px-6 py-3 bg-white text-teal-700 font-medium rounded-lg hover:bg-gray-100 transition-colors"
          >
            Get Started <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;