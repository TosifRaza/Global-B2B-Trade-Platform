import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Globe, Zap, Users, Boxes, TrendingUp, Award } from 'lucide-react';
import HeroSection from '../components/home/HeroSection';
import FeatureCard from '../components/home/FeatureCard';
import SupplierShowcase from '../components/home/SupplierShowcase';
import StatisticsSection from '../components/home/StatisticsSection';
import TestimonialSection from '../components/home/TestimonialSection';
import CallToAction from '../components/home/CallToAction';
import CategoryShowcase from '../components/home/CategoryShowcase';

const HomePage: React.FC = () => {
  const features = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-teal-500" />,
      title: "Verified Suppliers",
      description: "Every supplier undergoes strict verification. Know exactly who you're doing business with through transparent profiles and credentials."
    },
    {
      icon: <Globe className="w-8 h-8 text-teal-500" />,
      title: "Global Reach",
      description: "Connect with suppliers from over 150 countries. Our platform breaks down geographical barriers for truly global trade."
    },
    {
      icon: <Zap className="w-8 h-8 text-teal-500" />,
      title: "AI-Powered Communication",
      description: "Our real-time translation and smart negotiation tools help you overcome language barriers and close deals faster."
    },
    {
      icon: <Users className="w-8 h-8 text-teal-500" />,
      title: "Small Business Focus",
      description: "Special tools and sections dedicated to small businesses and niche sellers to help them compete globally."
    }
  ];

  return (
    <div className="w-full">
      <HeroSection />
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Transforming Global B2B Trade
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our platform combines cutting-edge technology with human-centered design to solve 
              the biggest challenges in international trade.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard 
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>
      
      <CategoryShowcase />
      
      <StatisticsSection />
      
      <SupplierShowcase />
      
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Integrated Solutions for Seamless Trade
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              End-to-end support for every aspect of the trading process, from sourcing 
              to payment and shipping.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md p-8 transition-all hover:shadow-lg">
              <div className="mb-4 p-3 bg-teal-50 rounded-full w-fit">
                <TrendingUp className="w-6 h-6 text-teal-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Secure Payments</h3>
              <p className="text-gray-600 mb-5">
                Built-in escrow system ensures your money is protected until goods are received and verified.
              </p>
              <a href="#" className="flex items-center text-teal-600 font-medium hover:text-teal-700 transition-colors">
                Learn more <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-8 transition-all hover:shadow-lg">
              <div className="mb-4 p-3 bg-teal-50 rounded-full w-fit">
                <Boxes className="w-6 h-6 text-teal-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Logistics Management</h3>
              <p className="text-gray-600 mb-5">
                Real-time tracking, automated shipping calculations, and customs documentation all in one place.
              </p>
              <a href="#" className="flex items-center text-teal-600 font-medium hover:text-teal-700 transition-colors">
                Learn more <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-8 transition-all hover:shadow-lg">
              <div className="mb-4 p-3 bg-teal-50 rounded-full w-fit">
                <Award className="w-6 h-6 text-teal-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Trade Protection</h3>
              <p className="text-gray-600 mb-5">
                Clear dispute resolution mechanisms and trade insurance to protect your business interests.
              </p>
              <a href="#" className="flex items-center text-teal-600 font-medium hover:text-teal-700 transition-colors">
                Learn more <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <TestimonialSection />
      
      <CallToAction />
    </div>
  );
};

export default HomePage;