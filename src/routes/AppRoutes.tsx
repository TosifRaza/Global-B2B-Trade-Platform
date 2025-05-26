import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import SupplierDirectory from '../pages/SupplierDirectory';
import ProductCatalog from '../pages/ProductCatalog';
import AboutPage from '../pages/AboutPage';
import NotFoundPage from '../pages/NotFoundPage';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/suppliers" element={<SupplierDirectory />} />
      <Route path="/products" element={<ProductCatalog />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;