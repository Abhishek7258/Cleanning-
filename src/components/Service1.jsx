import React, { useState } from "react";
import { Sparkles } from "lucide-react";

export default function Service1() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const services = [
    {
      name: "Deep Home Cleaning",
      image: "./images/deep-cleaning.jpg"
    },
    {
      name: "Commercial Cleaning",
      image: "./images/commercial.jpg"
    },
    {
      name: "Bathroom Cleaning",
      image: "./images/bathroom.jpg"
    },
    {
      name: "Kitchen Cleaning",
      image: "./images/kitchen.jpg"
    },
    {
      name: "Window Cleaning",
      image: "./images/window.jpg"
    },
    {
      name: "After Party Cleaning",
      image: "./images/party.jpg"
    },
    {
      name: "Carpet Cleaning",
      image: "./images/carpet.jpg"
    },
    {
      name: "Sofa Cleaning",
      image: "./images/sofa.jpg"
    },
    {
      name: "Office Cleaning",
      image: "./images/office.jpg"
    },
    {
      name: "Balcony Cleaning",
      image: "./images/balcony.jpg"
    },
    {
      name: "Refrigerator Cleaning",
      image: "./images/fridge.jpg"
    },
    {
      name: "View All Services",
      image: null,
      isViewAll: true
    }
  ];

  return (
    <div className="container mx-auto px-4 -mt-16 relative z-10">
      <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-2 border-gray-100">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`${
                index >= 5 && index < 11 ? "hidden md:flex" : "flex"
              } flex-col items-center text-center group cursor-pointer`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative mb-4">
                <div className={`absolute inset-0 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 transition-all duration-500 ${
                  hoveredIndex === index ? 'scale-110 opacity-100' : 'scale-100 opacity-0'
                }`}></div>
                
                <div className={`relative w-28 h-28 rounded-full overflow-hidden border-4 transition-all duration-500 shadow-lg group-hover:shadow-2xl ${
                  hoveredIndex === index 
                    ? 'border-emerald-500 transform scale-110' 
                    : 'border-gray-200 transform scale-100'
                }`}>
                  {service.isViewAll ? (
                    <div className="w-full h-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                      <Sparkles className="w-12 h-12 text-white animate-pulse" />
                    </div>
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 to-teal-100"></div>
                      
                      <img 
                        src={service.image} 
                        alt={service.name}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                      
                      <div className={`absolute inset-0 bg-gradient-to-t from-emerald-600/80 to-transparent transition-opacity duration-500 ${
                        hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                      }`}></div>
                    </>
                  )}
                </div>

                {hoveredIndex === index && !service.isViewAll && (
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                    <span className="text-white text-xs font-black">✓</span>
                  </div>
                )}
              </div>

              <p className={`text-gray-700 text-sm font-semibold transition-all duration-300 ${
                hoveredIndex === index 
                  ? 'text-emerald-600 transform scale-105' 
                  : ''
              }`}>
                {service.name}
              </p>

              <div className={`h-0.5 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full transition-all duration-500 mt-2 ${
                hoveredIndex === index ? 'w-12 opacity-100' : 'w-0 opacity-0'
              }`}></div>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex items-center justify-center gap-2 text-gray-500 text-sm">
            <Sparkles className="w-4 h-4 text-emerald-500" />
            <span>Professional cleaning services for every need</span>
          </div>
        </div>
      </div>
    </div>
  );
}
