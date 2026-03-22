import React, { useState } from "react";
import { Sparkles, ArrowRight, Check } from "lucide-react";

export default function Services() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      id: 1,
      name: "Deep Home Cleaning",
      image: "./images/deep-cleaning.jpg",
      description: "Thorough cleaning for every corner of your home",
      features: ["All rooms", "Deep scrubbing", "Sanitization"]
    },
    {
      id: 2,
      name: "Commercial Cleaning",
      image: "./images/commercial.jpg",
      description: "Professional cleaning for offices and businesses",
      features: ["Office spaces", "Daily service", "After hours"]
    },
    {
      id: 3,
      name: "Bathroom Cleaning",
      image: "./images/bathroom.jpg",
      description: "Spotless and sanitized bathroom spaces",
      features: ["Deep clean", "Disinfection", "Grout cleaning"]
    },
    {
      id: 4,
      name: "Kitchen Cleaning",
      image: "./images/kitchen.jpg",
      description: "Complete kitchen cleaning and degreasing",
      features: ["Appliances", "Countertops", "Cabinet wiping"]
    },
    {
      id: 5,
      name: "Window Cleaning",
      image: "./images/window.jpg",
      description: "Crystal clear windows inside and out",
      features: ["Streak-free", "High windows", "Frame cleaning"]
    },
    {
      id: 6,
      name: "After Party Cleaning",
      image: "./images/party.jpg",
      description: "Quick cleanup after events and parties",
      features: ["Fast service", "Waste removal", "Full cleanup"]
    },
    {
      id: 7,
      name: "Carpet Cleaning",
      image: "./images/carpet.jpg",
      description: "Professional carpet and upholstery care",
      features: ["Stain removal", "Deep clean", "Pet odor"]
    },
    {
      id: 8,
      name: "Sofa Cleaning",
      image: "./images/sofa.jpg",
      description: "Expert upholstery and furniture cleaning",
      features: ["Fabric care", "Stain treatment", "Odor removal"]
    },
    {
      id: 9,
      name: "Office Cleaning",
      image: "./images/office.jpg",
      description: "Maintain a clean and professional workspace",
      features: ["Desks", "Common areas", "Meeting rooms"]
    },
    {
      id: 10,
      name: "Balcony Cleaning",
      image: "./images/balcony.jpg",
      description: "Fresh and clean outdoor living spaces",
      features: ["Floor scrubbing", "Railing polish", "Plant care"]
    },
    {
      id: 11,
      name: "Refrigerator Cleaning",
      image: "./images/fridge.jpg",
      description: "Deep cleaning of fridges and appliances",
      features: ["Interior clean", "Deodorizing", "Shelves & drawers"]
    }
  ];

  return (
    <section className="relative py-24 px-4 bg-gradient-to-br from-emerald-50 via-white to-teal-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-emerald-200/30 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-teal-200/30 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-green-200/30 rounded-full blur-3xl animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6 shadow-md">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span className="text-emerald-700 font-semibold text-sm">Our Services</span>
          </div>

          <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-4">
            Cleaning <span className="text-emerald-500">Services</span>
          </h2>
          
          <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
            Professional cleaning solutions for every space. From homes to offices, we've got you covered with our comprehensive services.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border-2 border-gray-100 hover:border-emerald-500"
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden bg-gradient-to-br from-emerald-100 to-teal-100">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/20"></div>
                
                {/* Placeholder for image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Sparkles className="w-16 h-16 text-emerald-600" />
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent transition-opacity duration-500 ${
                  hoveredCard === service.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-white text-sm">
                          <Check className="w-4 h-4 text-emerald-400" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-emerald-600 shadow-md">
                  Popular
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {service.description}
                </p>

                <button className="flex items-center gap-2 text-emerald-600 font-semibold text-sm group-hover:gap-3 transition-all">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Decorative Corner */}
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br from-emerald-400/10 to-teal-400/10 rounded-tl-full transform translate-x-8 translate-y-8 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-500"></div>
            </div>
          ))}

          {/* View All Card */}
          <div className="group relative bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer border-2 border-emerald-400 min-h-[384px] flex items-center justify-center">
            <div className="text-center p-8">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-black text-white mb-3">
                View All Services
              </h3>
              <p className="text-emerald-50 mb-6">
                Discover our complete range of cleaning solutions
              </p>
              <button className="px-8 py-3 bg-white text-emerald-600 rounded-xl font-bold hover:bg-emerald-50 transition-all duration-300 flex items-center gap-2 mx-auto group-hover:gap-3">
                Explore More
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-white rounded-full blur-2xl animate-pulse animation-delay-2000"></div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-8 p-8 bg-white rounded-3xl shadow-xl border-2 border-gray-100">
            <div className="text-left">
              <h4 className="text-2xl font-bold text-gray-900 mb-2">
                Need a Custom Service?
              </h4>
              <p className="text-gray-600">
                We can tailor our services to meet your specific needs
              </p>
            </div>
            <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 whitespace-nowrap flex items-center gap-2">
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}