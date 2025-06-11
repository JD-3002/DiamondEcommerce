import React from 'react';

interface CategoriesProps {
  onCategoryClick: (category: string) => void;
}

const Categories: React.FC<CategoriesProps> = ({ onCategoryClick }) => {
  const categories = [
    {
      id: 'bracelets',
      name: 'BRACELETS',
      image: './public/ring_images/bracelet.jpg',
      description: 'Tennis & Modern'
    },
    {
      id: 'earrings',
      name: 'EARRINGS',
      image: './public/ring_images/earring.jpg',
      description: 'Studs & Hoops'
    },
    {
      id: 'rings',
      name: 'RINGS',
      image: './public/ring_images/rings.jpg',
      description: 'Engagement & Wedding'
    },
    {
      id: 'necklaces',
      name: 'NECKLACES',
      image: './public/ring_images/necklaces.jpg',
      description: 'Pendants & Chains'
    }
  ];

  return (
    <section className="py-8 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12 -mt-5">
          <h2 className="text-2xl md:text-3xl font-light text-gray-700 uppercase tracking-wider">
            Shop by Category
          </h2>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div 
              key={category.id}
              className="group cursor-pointer"
              onClick={() => onCategoryClick(category.id)}
            >
              {/* Image Container */}
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                {/* Subtle overlay for better contrast */}
                <div className="absolute inset-0 bg-black bg-opacity-5 group-hover:bg-opacity-10 transition-all duration-300"></div>
              </div>
              
              {/* Category Label */}
              <div className="mt-4 text-center">
                <div className="bg-green-800 text-white px-16  rounded-md inline-block hover:bg-gray-700 transition-colors duration-300">
                  <span className="text-sm  tracking-wide uppercase">
                    {category.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Optional: Add some spacing at bottom */}
        <div className="mt-16"></div>
      </div>
    </section>
  );
};

export default Categories;