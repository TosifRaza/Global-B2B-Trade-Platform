import React from 'react';
import { ShieldCheck, Star, MapPin, Award, ArrowRight } from 'lucide-react';

const SupplierShowcase: React.FC = () => {
  const suppliers = [
    {
      id: 1,
      name: 'TechManufacture Co.',
      logo: 'https://images.pexels.com/photos/2977565/pexels-photo-2977565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      category: 'Electronics Manufacturing',
      location: 'Germany',
      rating: 4.9,
      reviews: 253,
      verified: true,
      yearsActive: 15,
      specialties: ['Smart Manufacturing', 'IoT Devices', 'Industrial Automation'],
    },
    {
      id: 2,
      name: 'EcoPack Industries',
      logo: 'https://images.pexels.com/photos/5589639/pexels-photo-5589639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      category: 'Sustainable Packaging',
      location: 'Netherlands',
      rating: 4.8,
      reviews: 187,
      verified: true,
      yearsActive: 8,
      specialties: ['Biodegradable Packaging', 'Recycled Materials', 'Zero-Waste Solutions'],
    },
    {
      id: 3,
      name: 'GlobalTextile Ltd.',
      logo: 'https://images.pexels.com/photos/4480503/pexels-photo-4480503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      category: 'Textile Manufacturing',
      location: 'India',
      rating: 4.7,
      reviews: 329,
      verified: true,
      yearsActive: 22,
      specialties: ['Organic Fabrics', 'Custom Textiles', 'Sustainable Fashion Materials'],
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Verified Suppliers
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our platform connects you with thoroughly vetted suppliers who have demonstrated excellence 
            in product quality, reliability, and customer service.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {suppliers.map((supplier) => (
            <div 
              key={supplier.id} 
              className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative h-44 bg-gray-100">
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <img 
                    src={supplier.logo} 
                    alt={supplier.name}
                    className="max-h-full max-w-full object-cover rounded-lg"
                  />
                </div>
                {supplier.verified && (
                  <div className="absolute top-3 right-3 bg-teal-500 text-white text-xs font-medium px-2 py-1 rounded-full flex items-center">
                    <ShieldCheck size={12} className="mr-1" />
                    Verified
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">{supplier.name}</h3>
                    <p className="text-sm text-gray-600">{supplier.category}</p>
                  </div>
                  <div className="flex items-center">
                    <Star size={14} className="text-yellow-500 mr-1" />
                    <span className="text-sm font-medium">{supplier.rating}</span>
                    <span className="text-xs text-gray-500 ml-1">({supplier.reviews})</span>
                  </div>
                </div>
                
                <div className="flex items-center text-sm text-gray-600 mb-4">
                  <MapPin size={14} className="mr-1" />
                  {supplier.location}
                  <div className="mx-2 w-1 h-1 rounded-full bg-gray-300"></div>
                  <Award size={14} className="mr-1" />
                  {supplier.yearsActive} years
                </div>
                
                <div className="mb-5">
                  <h4 className="text-xs font-medium uppercase text-gray-500 mb-2">Specialties</h4>
                  <div className="flex flex-wrap gap-2">
                    {supplier.specialties.map((specialty, index) => (
                      <span 
                        key={index} 
                        className="text-xs px-2 py-1 bg-gray-100 text-gray-800 rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-between">
                  <a 
                    href="#" 
                    className="text-teal-600 text-sm font-medium hover:text-teal-700 transition-colors flex items-center"
                  >
                    View profile <ArrowRight size={14} className="ml-1" />
                  </a>
                  <button className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
                    Contact
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-flex items-center px-6 py-3 rounded-lg bg-teal-50 text-teal-600 font-medium hover:bg-teal-100 transition-colors"
          >
            View all verified suppliers <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SupplierShowcase;