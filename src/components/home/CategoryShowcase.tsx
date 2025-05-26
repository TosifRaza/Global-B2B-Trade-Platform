import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { ArrowRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const CategoryShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('trending');
  
  const categories = [
    { id: 'trending', name: 'Trending' },
    { id: 'eco', name: 'Eco-Friendly' },
    { id: 'tech', name: 'Technology' },
    { id: 'apparel', name: 'Apparel' },
    { id: 'industrial', name: 'Industrial' },
  ];
  
  const categoryProducts = {
    trending: [
      { 
        id: 1, 
        name: 'Smart Manufacturing Solutions', 
        image: 'https://images.pexels.com/photos/2086611/pexels-photo-2086611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
        supplier: 'TechManufacture Co.',
        verified: true,
        country: 'Germany'
      },
      { 
        id: 2, 
        name: 'Sustainable Packaging Materials', 
        image: 'https://images.pexels.com/photos/6690901/pexels-photo-6690901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
        supplier: 'EcoPack Industries',
        verified: true,
        country: 'Netherlands'
      },
      { 
        id: 3, 
        name: 'Solar Energy Components', 
        image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
        supplier: 'SunPower Systems',
        verified: true,
        country: 'China'
      },
      { 
        id: 4, 
        name: 'Premium Textile Materials', 
        image: 'https://images.pexels.com/photos/4792078/pexels-photo-4792078.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
        supplier: 'FabricWorld Ltd.',
        verified: false,
        country: 'India'
      },
      { 
        id: 5, 
        name: 'Advanced Medical Equipment', 
        image: 'https://images.pexels.com/photos/4226119/pexels-photo-4226119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
        supplier: 'MediTech Solutions',
        verified: true,
        country: 'United States'
      },
    ],
    eco: [
      { 
        id: 1, 
        name: 'Biodegradable Packaging', 
        image: 'https://images.pexels.com/photos/3850512/pexels-photo-3850512.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
        supplier: 'GreenPack Co.',
        verified: true,
        country: 'Denmark'
      },
      { 
        id: 2, 
        name: 'Recycled Textile Products', 
        image: 'https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
        supplier: 'EcoTextile Industries',
        verified: true,
        country: 'Portugal'
      },
    ],
    tech: [
      { 
        id: 1, 
        name: 'Industrial IoT Sensors', 
        image: 'https://images.pexels.com/photos/3912364/pexels-photo-3912364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
        supplier: 'SmartSensor Tech',
        verified: true,
        country: 'South Korea'
      },
    ],
    apparel: [
      { 
        id: 1, 
        name: 'Sustainable Fashion Materials', 
        image: 'https://images.pexels.com/photos/3812433/pexels-photo-3812433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
        supplier: 'EcoFabric Ltd.',
        verified: true,
        country: 'Italy'
      },
    ],
    industrial: [
      { 
        id: 1, 
        name: 'Advanced Manufacturing Components', 
        image: 'https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
        supplier: 'IndusTech Corp.',
        verified: true,
        country: 'Japan'
      },
    ]
  };
  
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Explore Product Categories
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover a wide range of products from verified suppliers around the world.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category.id
                  ? 'bg-teal-500 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        <div className="mt-8">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 4,
              },
            }}
            className="pb-12"
          >
            {categoryProducts[activeCategory as keyof typeof categoryProducts].map((product) => (
              <SwiperSlide key={product.id}>
                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    {product.verified && (
                      <div className="absolute top-3 right-3 bg-teal-500 text-white text-xs font-medium px-2 py-1 rounded-full">
                        Verified
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-lg mb-2 text-gray-900">{product.name}</h3>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-sm text-gray-600">{product.supplier}</span>
                      <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full">
                        {product.country}
                      </span>
                    </div>
                    <a 
                      href="#" 
                      className="inline-flex items-center text-teal-600 text-sm font-medium hover:text-teal-700"
                    >
                      View details <ArrowRight size={16} className="ml-1" />
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        
        <div className="text-center mt-6">
          <a 
            href="#" 
            className="inline-flex items-center text-teal-600 font-medium hover:text-teal-700"
          >
            View all products <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CategoryShowcase;