import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter, 
  ShieldCheck, 
  MapPin, 
  Star, 
  ChevronDown, 
  MessageCircle, 
  Globe,
  ArrowUpDown,
  X,
  Tag,
  Truck,
  Package,
  Clock,
  DollarSign
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Product type definition
interface Product {
  id: number;
  name: string;
  image: string;
  price: {
    min: number;
    max: number;
    currency: string;
  };
  moq: number; // Minimum Order Quantity
  supplier: {
    name: string;
    verified: boolean;
    country: string;
    responseRate: number;
    responseTime: string;
  };
  rating: number;
  reviews: number;
  category: string;
  tags: string[];
  featured: boolean;
  shipping: {
    worldwide: boolean;
    estimatedTime: string;
  };
}

const ProductCatalog: React.FC = () => {
  // State for active category and filters
  const [activeCategory, setActiveCategory] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('relevance');
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  
  // Categories
  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'electronics', name: 'Electronics' },
    { id: 'machinery', name: 'Machinery' },
    { id: 'textiles', name: 'Textiles & Apparel' },
    { id: 'chemicals', name: 'Chemicals' },
    { id: 'food', name: 'Food & Beverage' },
    { id: 'construction', name: 'Construction' },
    { id: 'beauty', name: 'Beauty & Personal Care' },
  ];
  
  // Tags for filtering
  const availableTags = [
    'Eco-Friendly', 'Organic', 'Custom Design', 'ISO Certified', 
    'Small Business', 'Award-Winning', 'Fast Shipping', 'Bulk Discount'
  ];
  
  // Sort options
  const sortOptions = [
    { id: 'relevance', name: 'Relevance' },
    { id: 'price-low', name: 'Price: Low to High' },
    { id: 'price-high', name: 'Price: High to Low' },
    { id: 'rating', name: 'Highest Rating' },
    { id: 'moq-low', name: 'Lowest MOQ' },
    { id: 'newest', name: 'Newest Products' },
  ];
  
  // Sample product data
  const products: Product[] = [
    {
      id: 1,
      name: 'Smart IoT Manufacturing Sensors (Industrial Grade)',
      image: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      price: { min: 150, max: 250, currency: 'USD' },
      moq: 10,
      supplier: {
        name: 'TechManufacture Co.',
        verified: true,
        country: 'Germany',
        responseRate: 95,
        responseTime: '< 12 hours',
      },
      rating: 4.9,
      reviews: 253,
      category: 'electronics',
      tags: ['ISO Certified', 'Custom Design'],
      featured: true,
      shipping: {
        worldwide: true,
        estimatedTime: '5-10 days',
      },
    },
    {
      id: 2,
      name: 'Biodegradable Packaging Materials for Consumer Goods',
      image: 'https://images.pexels.com/photos/6690901/pexels-photo-6690901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      price: { min: 0.5, max: 2.5, currency: 'USD' },
      moq: 1000,
      supplier: {
        name: 'EcoPack Industries',
        verified: true,
        country: 'Netherlands',
        responseRate: 98,
        responseTime: '< 6 hours',
      },
      rating: 4.8,
      reviews: 187,
      category: 'packaging',
      tags: ['Eco-Friendly', 'Custom Design', 'Small Business'],
      featured: true,
      shipping: {
        worldwide: true,
        estimatedTime: '7-14 days',
      },
    },
    {
      id: 3,
      name: 'Solar Panel Components and Mounting Systems',
      image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      price: { min: 500, max: 2000, currency: 'USD' },
      moq: 5,
      supplier: {
        name: 'SunPower Systems',
        verified: true,
        country: 'China',
        responseRate: 92,
        responseTime: '< 24 hours',
      },
      rating: 4.7,
      reviews: 129,
      category: 'electronics',
      tags: ['Eco-Friendly', 'ISO Certified'],
      featured: false,
      shipping: {
        worldwide: true,
        estimatedTime: '14-21 days',
      },
    },
    {
      id: 4,
      name: 'Organic Cotton Textiles (GOTS Certified)',
      image: 'https://images.pexels.com/photos/4792078/pexels-photo-4792078.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      price: { min: 5, max: 15, currency: 'USD' },
      moq: 100,
      supplier: {
        name: 'GlobalTextile Ltd.',
        verified: true,
        country: 'India',
        responseRate: 88,
        responseTime: '< 48 hours',
      },
      rating: 4.6,
      reviews: 95,
      category: 'textiles',
      tags: ['Eco-Friendly', 'Organic', 'Custom Design'],
      featured: false,
      shipping: {
        worldwide: true,
        estimatedTime: '10-20 days',
      },
    },
    {
      id: 5,
      name: 'Advanced Medical Equipment and Diagnostic Tools',
      image: 'https://images.pexels.com/photos/4226119/pexels-photo-4226119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      price: { min: 1000, max: 5000, currency: 'USD' },
      moq: 1,
      supplier: {
        name: 'MediTech Solutions',
        verified: true,
        country: 'United States',
        responseRate: 97,
        responseTime: '< 12 hours',
      },
      rating: 4.9,
      reviews: 78,
      category: 'medical',
      tags: ['ISO Certified', 'Award-Winning'],
      featured: true,
      shipping: {
        worldwide: true,
        estimatedTime: '3-7 days',
      },
    },
    {
      id: 6,
      name: 'Industrial Automation Robotic Arms',
      image: 'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      price: { min: 8000, max: 12000, currency: 'USD' },
      moq: 1,
      supplier: {
        name: 'AutoTech Industries',
        verified: true,
        country: 'Japan',
        responseRate: 94,
        responseTime: '< 24 hours',
      },
      rating: 4.8,
      reviews: 42,
      category: 'machinery',
      tags: ['ISO Certified', 'Custom Design'],
      featured: false,
      shipping: {
        worldwide: true,
        estimatedTime: '14-30 days',
      },
    },
    {
      id: 7,
      name: 'Natural Food Preservatives and Additives',
      image: 'https://images.pexels.com/photos/5945767/pexels-photo-5945767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      price: { min: 20, max: 100, currency: 'USD' },
      moq: 25,
      supplier: {
        name: 'NaturalFood Labs',
        verified: true,
        country: 'France',
        responseRate: 96,
        responseTime: '< 18 hours',
      },
      rating: 4.7,
      reviews: 63,
      category: 'food',
      tags: ['Organic', 'Eco-Friendly', 'ISO Certified'],
      featured: false,
      shipping: {
        worldwide: true,
        estimatedTime: '5-10 days',
      },
    },
    {
      id: 8,
      name: 'Sustainable Construction Materials',
      image: 'https://images.pexels.com/photos/534220/pexels-photo-534220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      price: { min: 200, max: 1000, currency: 'USD' },
      moq: 10,
      supplier: {
        name: 'GreenBuild Co.',
        verified: false,
        country: 'Canada',
        responseRate: 85,
        responseTime: '< 48 hours',
      },
      rating: 4.5,
      reviews: 37,
      category: 'construction',
      tags: ['Eco-Friendly', 'Small Business'],
      featured: false,
      shipping: {
        worldwide: false,
        estimatedTime: '10-20 days',
      },
    },
    {
      id: 9,
      name: 'Organic Skincare Ingredients',
      image: 'https://images.pexels.com/photos/6621462/pexels-photo-6621462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      price: { min: 30, max: 150, currency: 'USD' },
      moq: 5,
      supplier: {
        name: 'PureBeauty Labs',
        verified: true,
        country: 'South Korea',
        responseRate: 99,
        responseTime: '< 6 hours',
      },
      rating: 4.9,
      reviews: 112,
      category: 'beauty',
      tags: ['Organic', 'Eco-Friendly', 'Small Business'],
      featured: true,
      shipping: {
        worldwide: true,
        estimatedTime: '7-12 days',
      },
    },
  ];
  
  // Filter products based on selected filters
  const filteredProducts = products.filter(product => {
    // Filter by category
    if (activeCategory !== 'all' && product.category !== activeCategory) {
      return false;
    }
    
    // Filter by price range
    if (product.price.min < priceRange[0] || product.price.max > priceRange[1]) {
      return false;
    }
    
    // Filter by verified supplier
    if (verifiedOnly && !product.supplier.verified) {
      return false;
    }
    
    // Filter by tags
    if (selectedTags.length > 0 && !selectedTags.some(tag => product.tags.includes(tag))) {
      return false;
    }
    
    return true;
  });
  
  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price.min - b.price.min;
      case 'price-high':
        return b.price.min - a.price.min;
      case 'rating':
        return b.rating - a.rating;
      case 'moq-low':
        return a.moq - b.moq;
      case 'newest':
        // For demo purposes, just use the id as a proxy for "newest"
        return b.id - a.id;
      default:
        // For relevance, prioritize featured products
        return b.featured ? 1 : a.featured ? -1 : 0;
    }
  });
  
  // Toggle a tag in the selected tags list
  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };
  
  // Reset all filters
  const resetFilters = () => {
    setActiveCategory('all');
    setPriceRange([0, 10000]);
    setSelectedTags([]);
    setVerifiedOnly(false);
    setSortBy('relevance');
  };
  
  return (
    <div className="pt-32 pb-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Product Catalog</h1>
        <p className="text-gray-600 mb-8">
          Browse our extensive collection of verified products from global suppliers.
        </p>
        
        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-grow relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                placeholder="Search products by name, description, or supplier"
              />
            </div>
            <button 
              className={`px-4 py-2 flex items-center gap-2 border rounded-lg transition-colors ${
                showFilters 
                  ? 'bg-teal-50 text-teal-600 border-teal-200' 
                  : 'text-gray-700 border-gray-300 hover:bg-gray-50'
              }`}
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter size={18} />
              <span>Filters</span>
              <ChevronDown size={16} className={`transition-transform ${showFilters ? 'rotate-180' : ''}`} />
            </button>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white text-gray-700"
              >
                {sortOptions.map(option => (
                  <option key={option.id} value={option.id}>{option.name}</option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <ArrowUpDown size={16} className="text-gray-400" />
              </div>
            </div>
          </div>
          
          {/* Extended filters */}
          {showFilters && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-6 pt-6 border-t border-gray-100"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-medium text-sm text-gray-700 mb-2">Price Range (USD)</h3>
                  <div className="flex items-center gap-4">
                    <input
                      type="number"
                      min="0"
                      max={priceRange[1]}
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="Min"
                    />
                    <span className="text-gray-400">to</span>
                    <input
                      type="number"
                      min={priceRange[0]}
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="Max"
                    />
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium text-sm text-gray-700 mb-2">Supplier Verification</h3>
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={verifiedOnly}
                      onChange={() => setVerifiedOnly(!verifiedOnly)}
                      className="form-checkbox h-5 w-5 text-teal-500 rounded border-gray-300 focus:ring-teal-500"
                    />
                    <span className="ml-2 text-gray-700">Verified Suppliers Only</span>
                  </label>
                </div>
                
                <div>
                  <h3 className="font-medium text-sm text-gray-700 mb-2">Product Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {availableTags.map(tag => (
                      <button
                        key={tag}
                        onClick={() => toggleTag(tag)}
                        className={`text-xs px-2 py-1 rounded-full transition-colors ${
                          selectedTags.includes(tag)
                            ? 'bg-teal-500 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end mt-6">
                <button
                  onClick={resetFilters}
                  className="px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-2"
                >
                  <X size={16} />
                  Reset Filters
                </button>
              </div>
            </motion.div>
          )}
          
          {/* Category filters */}
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
        
        {/* Results count and active filters */}
        <div className="flex flex-wrap items-center justify-between mb-6">
          <p className="text-gray-600">
            Showing <span className="font-medium">{sortedProducts.length}</span> products
          </p>
          
          {/* Active filters */}
          {(activeCategory !== 'all' || selectedTags.length > 0 || verifiedOnly) && (
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm text-gray-500">Active filters:</span>
              
              {activeCategory !== 'all' && (
                <span className="text-xs px-2 py-1 bg-teal-50 text-teal-700 rounded-full flex items-center gap-1">
                  {categories.find(c => c.id === activeCategory)?.name}
                  <button 
                    onClick={() => setActiveCategory('all')}
                    className="hover:text-teal-900"
                  >
                    <X size={14} />
                  </button>
                </span>
              )}
              
              {verifiedOnly && (
                <span className="text-xs px-2 py-1 bg-teal-50 text-teal-700 rounded-full flex items-center gap-1">
                  Verified Only
                  <button 
                    onClick={() => setVerifiedOnly(false)}
                    className="hover:text-teal-900"
                  >
                    <X size={14} />
                  </button>
                </span>
              )}
              
              {selectedTags.map(tag => (
                <span 
                  key={tag}
                  className="text-xs px-2 py-1 bg-teal-50 text-teal-700 rounded-full flex items-center gap-1"
                >
                  {tag}
                  <button 
                    onClick={() => toggleTag(tag)}
                    className="hover:text-teal-900"
                  >
                    <X size={14} />
                  </button>
                </span>
              ))}
              
              <button
                onClick={resetFilters}
                className="text-xs text-teal-600 hover:text-teal-800 underline"
              >
                Clear all
              </button>
            </div>
          )}
        </div>
        
        {/* Product grid */}
        {sortedProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedProducts.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  {product.featured && (
                    <div className="absolute top-3 left-3 bg-teal-500 text-white text-xs font-medium px-2 py-1 rounded-full">
                      Featured
                    </div>
                  )}
                  {product.supplier.verified && (
                    <div className="absolute top-3 right-3 bg-white text-teal-600 text-xs font-medium px-2 py-1 rounded-full flex items-center">
                      <ShieldCheck size={12} className="mr-1" />
                      Verified Supplier
                    </div>
                  )}
                </div>
                
                <div className="p-5">
                  <Link to={`/products/${product.id}`} className="hover:underline">
                    <h3 className="font-semibold text-lg mb-2 text-gray-900">{product.name}</h3>
                  </Link>
                  
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center">
                      <Star size={16} className="text-yellow-500 mr-1" fill="currentColor" />
                      <span className="text-sm font-medium">{product.rating}</span>
                      <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin size={14} className="mr-1" />
                      <span>{product.supplier.country}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.tags.map((tag, index) => (
                      <span 
                        key={index} 
                        className="text-xs px-2 py-1 bg-gray-100 text-gray-800 rounded-full flex items-center"
                      >
                        <Tag size={10} className="mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between mb-4 text-sm">
                    <div className="flex items-center">
                      <DollarSign size={14} className="text-gray-500 mr-1" />
                      <span className="font-medium text-gray-900">
                        {product.price.min === product.price.max 
                          ? `${product.price.currency} ${product.price.min}`
                          : `${product.price.currency} ${product.price.min} - ${product.price.max}`
                        }
                      </span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Package size={14} className="mr-1" />
                      <span>MOQ: {product.moq}</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 mb-4 text-xs text-gray-600">
                    <div className="flex items-center">
                      <Truck size={12} className="mr-1" />
                      <span>{product.shipping.worldwide ? 'Ships worldwide' : 'Limited shipping'}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock size={12} className="mr-1" />
                      <span>Est. {product.shipping.estimatedTime}</span>
                    </div>
                    <div className="flex items-center">
                      <Globe size={12} className="mr-1" />
                      <span>Translation available</span>
                    </div>
                    <div className="flex items-center">
                      <MessageCircle size={12} className="mr-1" />
                      <span>{product.supplier.responseTime}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                    <Link 
                      to={`/products/${product.id}`}
                      className="text-sm font-medium text-teal-600 hover:text-teal-700 transition-colors"
                    >
                      View Details
                    </Link>
                    <button 
                      className="px-3 py-1.5 bg-teal-500 text-white text-sm font-medium rounded-lg hover:bg-teal-600 transition-colors flex items-center"
                    >
                      <MessageCircle size={14} className="mr-1" />
                      Contact Supplier
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="bg-white p-10 rounded-xl text-center">
            <p className="text-gray-600 mb-4">No products match your current filters.</p>
            <button
              onClick={resetFilters}
              className="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
        
        {/* Pagination (simplified for demo) */}
        {sortedProducts.length > 0 && (
          <div className="mt-10 flex justify-center">
            <nav className="flex items-center gap-1">
              <button className="px-3 py-1 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                Previous
              </button>
              {[1, 2, 3, 4, 5].map(page => (
                <button 
                  key={page}
                  className={`w-8 h-8 flex items-center justify-center rounded-md ${
                    page === 1 
                      ? 'bg-teal-500 text-white' 
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {page}
                </button>
              ))}
              <button className="px-3 py-1 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                Next
              </button>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCatalog;