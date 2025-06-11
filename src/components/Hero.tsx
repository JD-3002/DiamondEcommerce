import React from "react";
// import {  Home } from "lucide-react";


const Hero: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <main className="relative">
        {/* Hero Image Container */}
       

        {/* Alternative version with different object positioning */}
        {/* Uncomment this section if you want to try different image positioning */}
       
        <div className="relative h-[70vh] md:h-[80vh] mx-4 md:mx-8 rounded-3xl overflow-hidden shadow-2xl">
          <img
            src="/ring_images/herobanner.png"
            alt="Hero Banner"
            className="absolute inset-0 w-full h-full object-center object-cover"
          />
          
          <div className="absolute inset-0 bg-gradient-to-r from-black from-10% via-transparent via-50% to-transparent to-90% opacity-50"></div>
          
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-8 w-full">
              <div className="max-w-md">
                <div className="mb-6">
                  <h2 className="text-3xl md:text-4xl font-light text-white mb-4 italic drop-shadow-lg">
                    Featured collection
                  </h2>
                  <p className="text-white text-sm md:text-base leading-relaxed opacity-90 drop-shadow-md">
                    Explore the exclusive pieces inspired<br />
                    by the beauty of nature
                  </p>
                </div>
              </div>
            </div>
          </div>

          
        </div>
        

       
      
      </main>
    </div>
  );
};

export default Hero;
