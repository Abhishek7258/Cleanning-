import React, { useState, useEffect, useRef } from "react";
import { Calendar, Sparkles, Heart, Check } from "lucide-react";

export default function Timeline() {
  const [visibleSteps, setVisibleSteps] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Trigger animations when section comes into view
            setTimeout(() => setVisibleSteps([0]), 300);
            setTimeout(() => setVisibleSteps([0, 1]), 600);
            setTimeout(() => setVisibleSteps([0, 1, 2]), 900);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const steps = [
    {
      num: '01',
      title: 'Book Online',
      desc: 'Choose your service, date, and time in just a few clicks',
      icon: Calendar,
      features: ['Instant booking', 'Flexible scheduling', 'Online payment'],
      color: 'from-blue-500 to-cyan-500',
      align: 'left'
    },
    {
      num: '02',
      title: 'We Clean',
      desc: 'Our professional team arrives and delivers exceptional results',
      icon: Sparkles,
      features: ['Certified cleaners', 'Eco-friendly products', 'Quality guaranteed'],
      color: 'from-emerald-500 to-teal-500',
      align: 'right'
    },
    {
      num: '03',
      title: 'Enjoy!',
      desc: 'Relax in your beautifully cleaned and refreshed space',
      icon: Heart,
      features: ['100% satisfaction', 'Fresh environment', 'Peace of mind'],
      color: 'from-purple-500 to-pink-500',
      align: 'left'
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden bg-gradient-to-br from-gray-50 to-emerald-50">
      {/* Background Decorations */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-emerald-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-teal-200/30 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6 shadow-md">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span className="text-emerald-700 font-semibold text-sm">Simple Process</span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-4">
            How It <span className="text-emerald-500">Works</span>
          </h2>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            Get started in three simple steps
          </p>
        </div>

        <div className="relative">
          {/* Desktop Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-500 via-teal-500 to-purple-500 transform -translate-x-1/2 hidden lg:block">
            {/* Animated Progress Line */}
            <div 
              className="absolute top-0 left-0 right-0 bg-gradient-to-b from-emerald-400 to-teal-400 transition-all duration-2000 ease-out"
              style={{ 
                height: visibleSteps.length > 0 ? `${(visibleSteps.length / steps.length) * 100}%` : '0%'
              }}
            ></div>
          </div>

          {/* Mobile Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-500 via-teal-500 to-purple-500 lg:hidden">
            <div 
              className="absolute top-0 left-0 right-0 bg-gradient-to-b from-emerald-400 to-teal-400 transition-all duration-2000 ease-out"
              style={{ 
                height: visibleSteps.length > 0 ? `${(visibleSteps.length / steps.length) * 100}%` : '0%'
              }}
            ></div>
          </div>

          <div className="space-y-12 lg:space-y-24">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isVisible = visibleSteps.includes(idx);
              
              return (
                <div 
                  key={idx} 
                  className={`flex items-center gap-6 lg:gap-8 transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  } ${step.align === 'right' ? 'lg:flex-row-reverse' : ''}`}
                >
                  {/* Content Card - Desktop */}
                  <div className={`flex-1 hidden lg:block ${step.align === 'right' ? 'lg:text-right' : ''}`}>
                    <div 
                      className={`inline-block bg-white rounded-3xl p-8 shadow-xl border-2 border-gray-100 hover:border-emerald-500 hover:shadow-2xl transition-all duration-500 hover:scale-105 ${
                        isVisible ? 'animate-slideIn' : ''
                      }`}
                    >
                      {/* Number Badge */}
                      <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl mb-4 shadow-lg`}>
                        <span className="text-3xl font-black text-white">{step.num}</span>
                      </div>

                      <h3 className="text-3xl font-bold text-gray-900 mb-3">{step.title}</h3>
                      <p className="text-gray-600 text-lg mb-6">{step.desc}</p>

                      {/* Features List */}
                      <div className="space-y-2">
                        {step.features.map((feature, fIdx) => (
                          <div 
                            key={fIdx} 
                            className={`flex items-center gap-2 ${step.align === 'right' ? 'justify-end' : ''}`}
                          >
                            <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                            <span className="text-sm text-gray-700 font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Center Icon Circle */}
                  <div className="relative flex-shrink-0 z-10">
                    {/* Pulsing Ring Animation */}
                    {isVisible && (
                      <div className="absolute inset-0 animate-ping">
                        <div className={`w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-br ${step.color} rounded-full opacity-20`}></div>
                      </div>
                    )}
                    
                    {/* Main Circle */}
                    <div className={`relative w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 hover:scale-110 ${
                      isVisible ? 'animate-bounce-once' : ''
                    }`}>
                      <Icon className="w-10 h-10 lg:w-12 lg:h-12 text-white" />
                    </div>

                    {/* Connecting Dots */}
                    {idx < steps.length - 1 && (
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 hidden lg:block">
                        <div className="flex flex-col gap-1">
                          {[...Array(3)].map((_, i) => (
                            <div 
                              key={i}
                              className={`w-2 h-2 rounded-full bg-gradient-to-br ${step.color} transition-all duration-300 delay-${i * 100}`}
                              style={{ 
                                opacity: isVisible ? 1 : 0,
                                transitionDelay: `${i * 100}ms`
                              }}
                            ></div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Empty Space for Desktop Alignment */}
                  <div className="flex-1 hidden lg:block"></div>

                  {/* Content Card - Mobile */}
                  <div className="flex-1 lg:hidden">
                    <div className="bg-white rounded-3xl p-6 shadow-xl border-2 border-gray-100 hover:border-emerald-500 transition-all duration-500">
                      {/* Number Badge */}
                      <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${step.color} rounded-2xl mb-4 shadow-lg`}>
                        <span className="text-2xl font-black text-white">{step.num}</span>
                      </div>

                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600 mb-4">{step.desc}</p>

                      {/* Features List */}
                      <div className="space-y-2">
                        {step.features.map((feature, fIdx) => (
                          <div key={fIdx} className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                            <span className="text-sm text-gray-700 font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 p-8 bg-white rounded-3xl shadow-xl border-2 border-gray-100">
            <div className="text-center sm:text-left">
              <h4 className="text-2xl font-bold text-gray-900 mb-2">
                Ready to Get Started?
              </h4>
              <p className="text-gray-600">
                Book your first cleaning service today and experience the difference
              </p>
            </div>
            <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 whitespace-nowrap flex items-center gap-2 hover:scale-105">
              Book Now
              <Sparkles className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <style >{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes bounce-once {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .animate-slideIn {
          animation: slideIn 0.6s ease-out;
        }

        .animate-bounce-once {
          animation: bounce-once 0.6s ease-out;
        }
      `}</style>
    </section>
  );
}