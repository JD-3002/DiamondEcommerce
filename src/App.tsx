import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
// import FeaturedProducts from './components/FeaturedProducts';
import ProductDetail from './components/ProductDetail';
import CategoryPage from './components/CategoryPage';
import Cart from './components/Cart';
import Footer from './components/Footer';
import { CartProvider } from './context/CartContext';
import { Product } from './types';

type Page = 'home' | 'category' | 'product';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setCurrentPage('product');
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage('category');
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
    setSelectedProduct(null);
    setSelectedCategory('');
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-white">
        <Header 
          onCartClick={() => setIsCartOpen(true)}
          onCategoryClick={handleCategoryClick}
          onHomeClick={handleBackToHome}
        />
        
        <main>
          {currentPage === 'home' && (
            <>
              <Hero />
              <Categories onCategoryClick={handleCategoryClick} />
              {/* <FeaturedProducts onProductClick={handleProductClick} /> */}
            </>
          )}
          
          {currentPage === 'category' && (
            <CategoryPage 
              category={selectedCategory}
              onProductClick={handleProductClick}
              onBackClick={handleBackToHome}
            />
          )}
          
          {currentPage === 'product' && selectedProduct && (
            <ProductDetail
              product={selectedProduct}
              onBackClick={() => setCurrentPage('home')}
            />
          )}
        </main>

        <Footer />

        {isCartOpen && (
          <Cart onClose={() => setIsCartOpen(false)} />
        )}
      </div>
    </CartProvider>
  );
}

export default App;