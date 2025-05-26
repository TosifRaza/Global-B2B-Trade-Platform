import React, { useState } from 'react';
import { Search, Filter, MapPin, Star, ShieldCheck, Check } from 'lucide-react';

const SupplierDirectory: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'manufacturing', name: 'Manufacturing' },
    { id: 'electronics', name: 'Electronics' },
    { id: 'textiles', name: 'Textiles' },
    { id: 'food', name: 'Food & Beverage' },
    { id: 'chemicals', name: 'Chemicals' },
  ];
  
  const suppliers = [
    {
      id: 1,
      name: 'TechManufacture Co.',
      logo: 'https://images.pexels.com/photos/2977565/pexels-photo-2977565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      category: 'Manufacturing',
      location: 'Germany',
      rating: 4.9,
      reviews: 253,
      verified: true,
      yearsActive: 15,
      responseTime: '< 24 hours',
      specialties: ['Smart Manufacturing', 'IoT Devices', 'Industrial Automation'],
    },
    {
      id: 2,
      name: 'EcoPack Industries',
      logo: 'https://images.pexels.com/photos/5589639/pexels-photo-5589639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      category: 'Manufacturing',
      location: 'Netherlands',
      rating: 4.8,
      reviews: 187,
      verified: true,
      yearsActive: 8,
      responseTime: '< 12 hours',
      specialties: ['Biodegradable Packaging', 'Recycled Materials', 'Zero-Waste Solutions'],
    },
    {
      id: 3,
      name: 'GlobalTextile Ltd.',
      logo: 'https://images.pexels.com/photos/4480503/pexels-photo-4480503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      category: 'Textiles',
      location: 'India',
      rating: 4.7,
      reviews: 329,
      verified: true,
      yearsActive: 22,
      responseTime: '< 48 hours',
      specialties: ['Organic Fabrics', 'Custom Textiles', 'Sustainable Fashion Materials'],
    },
    {
      id: 4,
      name: 'MicroElectronics Inc.',
      logo: 'https://images.pexels.com/photos/3912364/pexels-photo-3912364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      category: 'Electronics',
      location: 'South Korea',
      rating: 4.9,
      reviews: 412,
      verified: true,
      yearsActive: 18,
      responseTime: '< 6 hours',
      specialties: ['Semiconductors', 'Circuit Boards', 'IoT Components'],
    },
    {
      id: 5,
      name: 'GreenHarvest Foods',
      logo: 'https://images.pexels.com/photos/4117545/pexels-photo-4117545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      category: 'Food & Beverage',
      location: 'Spain',
      rating: 4.6,
      reviews: 156,
      verified: true,
      yearsActive: 10,
      responseTime: '< 24 hours',
      specialties: ['Organic Products', 'Plant-Based Foods', 'Sustainable Agriculture'],
    },
    {
      id: 6,
      name: 'ChemSolutions LLC',
      logo: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      category: 'Chemicals',
      location: 'United States',
      rating: 4.8,
      reviews: 201,
      verified: true,
      yearsActive: 25,
      responseTime: '< 48 hours',
      specialties: ['Eco-friendly Chemicals', 'Industrial Solutions', 'Research Compounds'],
    },
  ];
  
  const filteredSuppliers = activeCategory === 'all' 
    ? suppliers 
    : suppliers.filter(supplier => supplier.category.toLowerCase() === activeCategory);

  return (
    <div className="pt-32 pb-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Supplier Directory</h1>
        <p className="text-gray-600 mb-8">
          Connect with verified suppliers from around the world.
        </p>
        
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-grow relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                placeholder="Search by name, product, or location"
              />
            </div>
            <button className="px-4 py-2 flex items-center gap-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50">
              <Filter size={18} />
              <span>Advanced Filters</span>
            </button>
            <button className="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors">
              Search
            </button>
          </div>
          
          <div className="mt-6 flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category.id
                    ? 'bg-teal-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSuppliers.map((supplier) => (
            <div 
              key={supplier.id} 
              className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden mr-4">
                    <img 
                      src={supplier.logo} 
                      alt={supplier.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">{supplier.name}</h3>
                    <p className="text-sm text-gray-600">{supplier.category}</p>
                  </div>
                </div>
                
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin size={14} className="mr-1" />
                    {supplier.location}
                  </div>
                  <div className="flex items-center">
                    <Star size={14} className="text-yellow-500 mr-1" />
                    <span className="text-sm font-medium">{supplier.rating}</span>
                    <span className="text-xs text-gray-500 ml-1">({supplier.reviews})</span>
                  </div>
                </div>
                
                <div className="border-t border-gray-100 pt-4 mb-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-500">Years Active</p>
                      <p className="font-medium">{supplier.yearsActive} years</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Response Time</p>
                      <p className="font-medium">{supplier.responseTime}</p>
                    </div>
                  </div>
                </div>
                
                <div className="mb-4">
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
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    {supplier.verified && (
                      <div className="flex items-center text-xs text-teal-600 bg-teal-50 px-2 py-1 rounded-full">
                        <ShieldCheck size={12} className="mr-1" />
                        Verified Supplier
                      </div>
                    )}
                  </div>
                  <button className="text-sm font-medium text-teal-600 hover:text-teal-700 transition-colors">
                    View Profile
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredSuppliers.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No suppliers found for this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SupplierDirectory;