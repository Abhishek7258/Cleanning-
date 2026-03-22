import React, { useState, useEffect } from "react";
import { Sparkles, Leaf, ArrowRight, CheckCircle, Clock, Shield, Star, Zap, Phone, Mail } from "lucide-react";


export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      {/* Cursor Follow Effect */}
      <div 
        className="fixed w-96 h-96 rounded-full bg-gradient-to-r from-emerald-200/30 to-teal-200/30 blur-3xl pointer-events-none transition-all duration-1000 ease-out z-0"
        style={{
          left: mousePos.x - 192,
          top: mousePos.y - 192,
        }}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Decorative Shapes */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full blur-2xl animate-blob"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-teal-400/20 to-green-400/20 rounded-full blur-2xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-full blur-2xl animate-blob animation-delay-4000"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-10">
              <div className="inline-block">
                <div className="flex items-center gap-2 px-5 py-2 bg-white rounded-full shadow-lg border border-emerald-100">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-emerald-700">✨ Trusted by 500+ Happy Clients</span>
                </div>
              </div>

              <div className="space-y-6">
                <h1 className="text-7xl lg:text-8xl font-black text-gray-900 leading-none">
                  Clean
                  <br />
                  <span className="relative inline-block">
                    <span className="text-emerald-500">Spaces</span>
                    <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 200 12">
                      <path d="M0 6 Q50 0, 100 6 T200 6" fill="none" stroke="#10b981" strokeWidth="3" />
                    </svg>
                  </span>
                  <br />
                  Green Places
                </h1>

                <p className="text-2xl text-gray-600 leading-relaxed font-light">
                  Experience the perfect blend of professional cleaning and eco-friendly care for your home and business.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <button className="group relative px-10 py-5 bg-emerald-500 text-white rounded-2xl font-bold text-lg shadow-xl shadow-emerald-500/30 hover:shadow-2xl hover:shadow-emerald-500/40 transition-all duration-300 overflow-hidden">
                  <span className="relative z-10 flex items-center gap-3">
                    Book Now
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                </button>

                <button className="px-10 py-5 bg-white text-gray-900 rounded-2xl font-bold text-lg border-2 border-gray-200 hover:border-emerald-500 hover:bg-emerald-50 transition-all duration-300 shadow-lg">
                  Our Services
                </button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 pt-6">
                {[
                  { num: '10+', label: 'Years Experience' },
                  { num: '98%', label: 'Satisfaction Rate' },
                  { num: '24/7', label: 'Available' }
                ].map((stat, idx) => (
                  <div key={idx} className="text-center p-4 bg-white rounded-2xl shadow-md border border-gray-100">
                    <div className="text-3xl font-black text-emerald-500">{stat.num}</div>
                    <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative">
              {/* Main Card Stack */}
              <div className="relative space-y-6">
                {/* Card 1 - Front */}
                <div className="relative bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-500 z-20">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                      <Sparkles className="w-8 h-8 text-white" />
                    </div>
                    <div className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
                      <span className="text-white font-bold text-sm">Premium</span>
                    </div>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-white mb-3">Residential Care</h3>
                  <p className="text-emerald-50 text-lg mb-6">Deep cleaning solutions for your perfect home environment</p>
                  
                  <div className="flex items-center gap-4">
                    <div className="flex -space-x-3">
                      {[1,2,3,4].map(i => (
                        <div key={i} className="w-10 h-10 rounded-full bg-white border-2 border-emerald-500 flex items-center justify-center text-sm font-bold text-emerald-600">
                          {i}
                        </div>
                      ))}
                    </div>
                    <span className="text-white font-semibold">200+ Projects</span>
                  </div>
                </div>

                {/* Card 2 - Behind */}
                <div className="absolute -right-12 top-12 bg-gradient-to-br from-teal-500 to-green-600 rounded-3xl p-8 shadow-xl w-80 transform rotate-6 z-10 opacity-80">
                  <Leaf className="w-12 h-12 text-white mb-4" />
                  <h3 className="text-2xl font-bold text-white">Eco-Friendly</h3>
                </div>

                {/* Card 3 - Far Behind */}
                <div className="absolute -left-8 top-24 bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-6 shadow-lg w-64 transform -rotate-6 z-0 opacity-60">
                  <Shield className="w-10 h-10 text-white" />
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-yellow-300 rounded-full flex items-center justify-center shadow-xl animate-bounce">
                <Star className="w-12 h-12 text-yellow-600 fill-yellow-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Bento Grid Style */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 rounded-full mb-4">
              <Zap className="w-4 h-4 text-emerald-600" />
              <span className="text-emerald-700 font-semibold text-sm">About Us</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-4">
              Why Choose <span className="text-emerald-500">Tikawala?</span>
            </h2>
          </div>

          {/* Bento Grid */}
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Large Card */}
            <div className="lg:col-span-2 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl p-10 shadow-xl text-white">
              <h3 className="text-4xl font-bold mb-4">10+ Years of Excellence</h3>
              <p className="text-xl text-emerald-50 mb-8 leading-relaxed">
                At Tikawala Prime Clean Solutions, we believe your space should reflect freshness, order, and care. From spotless interiors to vibrant lawns, we handle it all.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: CheckCircle, text: 'Certified Professionals' },
                  { icon: Shield, text: 'Insured & Bonded' },
                  { icon: Leaf, text: 'Eco-Friendly Products' },
                  { icon: Clock, text: 'Flexible Scheduling' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                    <item.icon className="w-6 h-6" />
                    <span className="font-semibold">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tall Card */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-gray-100">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6">
                <Star className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">98% Satisfaction</h3>
              <p className="text-gray-600 text-lg mb-6">Our clients love the quality and care we bring to every project.</p>
              <div className="flex items-center gap-2 mb-4">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-gray-500 italic">"Best cleaning service in Bokaro! Highly recommended."</p>
            </div>

            {/* Image Card */}
            {/* <div className="relative overflow-hidden rounded-3xl shadow-xl group cursor-pointer">
              <img src="./images/w1.jpg" alt="Cleaning" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <h4 className="text-2xl font-bold text-white">Premium Quality</h4>
              </div>
            </div> */}

            {/* Stats Cards */}
            {/* <div className="lg:col-span-2 grid grid-cols-3 gap-6">
              {[
                { icon: '🏠', num: '500+', label: 'Homes Cleaned' },
                { icon: '🏢', num: '100+', label: 'Business Partners' },
                { icon: '🌱', num: '1000+', label: 'Lawns Maintained' }
              ].map((stat, idx) => (
                <div key={idx} className="bg-white rounded-3xl p-8 shadow-xl border-2 border-gray-100 hover:border-emerald-500 transition-all duration-300 text-center">
                  <div className="text-5xl mb-4">{stat.icon}</div>
                  <div className="text-4xl font-black text-emerald-500 mb-2">{stat.num}</div>
                  <div className="text-gray-600 font-semibold">{stat.label}</div>
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </section>

      {/* Services Section - Modern Cards */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-emerald-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-4 shadow-md">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span className="text-emerald-700 font-semibold text-sm">Our Services</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-black text-gray-900">
              What We <span className="text-emerald-500">Offer</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Residential Cleaning',
                desc: 'Complete home cleaning solutions tailored to your lifestyle',
                icon: '🏠',
                color: 'from-blue-500 to-cyan-500',
                img: './images/room.jpg'
              },
              {
                title: 'Commercial Cleaning',
                desc: 'Professional office and retail space maintenance',
                icon: '🏢',
                color: 'from-purple-500 to-pink-500',
                img: './images/m1.jpg'
              },
              {
                title: 'Landscape & Turf',
                desc: 'Beautiful outdoor spaces with expert lawn care',
                icon: '🌿',
                color: 'from-green-500 to-emerald-500',
                img: './images/grass.jpg'
              }
            ].map((service, idx) => (
              <div 
                key={idx}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer"
                onMouseEnter={() => setActiveCard(idx)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={service.img} 
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-125 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-60 group-hover:opacity-40 transition-opacity`}></div>
                  <div className="absolute top-6 right-6 w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-4xl shadow-xl transform group-hover:rotate-12 transition-transform">
                    {service.icon}
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-3xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-lg mb-6">{service.desc}</p>
                  
                  <button className="flex items-center gap-2 text-emerald-600 font-bold text-lg group-hover:gap-4 transition-all">
                    Learn More
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>

                <div className={`absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Timeline Style */}
      <section className="py-24 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 rounded-full mb-4">
              <Clock className="w-4 h-4 text-emerald-600" />
              <span className="text-emerald-700 font-semibold text-sm">Simple Process</span>
            </div>
            <h2 className="text-5xl font-black text-gray-900">
              How It <span className="text-emerald-500">Works</span>
            </h2>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-500 via-teal-500 to-green-500 transform -translate-x-1/2 hidden md:block"></div>

            <div className="space-y-16">
              {[
                {
                  num: '01',
                  title: 'Book Online',
                  desc: 'Choose your service, date, and time in just a few clicks',
                  icon: '📅',
                  align: 'left'
                },
                {
                  num: '02',
                  title: 'We Clean',
                  desc: 'Our professional team arrives and delivers exceptional results',
                  icon: '✨',
                  align: 'right'
                },
                {
                  num: '03',
                  title: 'Enjoy!',
                  desc: 'Relax in your beautifully cleaned and refreshed space',
                  icon: '😊',
                  align: 'left'
                }
              ].map((step, idx) => (
                <div key={idx} className={`flex items-center gap-8 ${step.align === 'right' ? 'md:flex-row-reverse' : ''}`}>
                  <div className={`flex-1 ${step.align === 'right' ? 'md:text-right' : ''}`}>
                    <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-gray-100 hover:border-emerald-500 transition-all duration-300 inline-block">
                      <div className="text-6xl font-black text-emerald-100 mb-2">{step.num}</div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-3">{step.title}</h3>
                      <p className="text-gray-600 text-lg">{step.desc}</p>
                    </div>
                  </div>

                  <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center text-4xl shadow-xl relative z-10 flex-shrink-0">
                    {step.icon}
                  </div>

                  <div className="flex-1 hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
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
      `}</style>
      <Slider/>
    </div>
  );
}