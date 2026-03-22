import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, Sparkles, Heart, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (formData.firstName && formData.email) {
      console.log("Form submitted:", formData);
      alert("Form submitted successfully!");
      setFormData({ firstName: "", email: "" });
    } else {
      alert("Please fill in all required fields.");
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-emerald-900 to-teal-900 text-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg">
                <img src="./images/logo.jpg" alt="Logo" className="w-12 h-12 rounded-xl object-cover" />
              </div>
              <div>
                <h2 className="text-xl font-black text-white leading-tight">
                  Tikawala
                </h2>
                <span className="text-emerald-400 font-bold text-sm">Clean Solutions</span>
              </div>
            </div>
            
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Professional cleaning services combined with expert landscaping - your trusted partner for spotless interiors and thriving outdoor spaces.
            </p>

            {/* Social Media Icons */}
            <div className="flex gap-3">
              {[
                { icon: Facebook, link: '#' },
                { icon: Twitter, link: '#' },
                { icon: Instagram, link: '#' },
                { icon: Linkedin, link: '#' }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.link}
                  className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-emerald-500 transition-all duration-300 group border border-white/20"
                >
                  <social.icon className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-emerald-400 to-teal-500 rounded-full"></div>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { label: 'About Us', path: '/about' },
                { label: 'Our Services', path: '/service' },
                { label: 'Booking', path: '/form' },
                { label: 'Contact Us', path: '/contact' }
              ].map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.path}
                    className="text-gray-300 hover:text-emerald-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-emerald-400 to-teal-500 rounded-full"></div>
              Our Services
            </h3>
            <ul className="space-y-3">
              {[
                'Residential Cleaning',
                'Commercial Cleaning',
                'Landscape & Turf Care',
                'Industrial Cleaning'
              ].map((service, idx) => (
                <li key={idx}>
                  <a
                    href="/service"
                    className="text-gray-300 hover:text-emerald-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter/Contact Form Section */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-emerald-400 to-teal-500 rounded-full"></div>
              Stay Connected
            </h3>
            
            <p className="text-gray-300 text-sm mb-6">
              Subscribe to our newsletter for tips and special offers!
            </p>

            <div className="space-y-4">
              <div className="relative">
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-emerald-400 focus:outline-none focus:bg-white/15 transition-all"
                />
              </div>
              
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-emerald-400 focus:outline-none focus:bg-white/15 transition-all"
                />
              </div>

              <a href="/form">
                <button
                  onClick={handleSubmit}
                  className="w-full group relative px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl font-bold text-sm shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/40 transition-all duration-300 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Subscribe Now
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Contact Info Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8 border-t border-white/10 mb-8">
          <div className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-xs text-gray-400 mb-1">Call Us</div>
              <div className="text-white font-semibold">+91 123-456-7890</div>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-xs text-gray-400 mb-1">Email Us</div>
              <div className="text-white font-semibold text-sm">info@tikawala.com</div>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-xs text-gray-400 mb-1">Location</div>
              <div className="text-white font-semibold text-sm">Bokaro, Jharkhand</div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>© 2025 Tikawala Prime Clean Solutions</span>
              <span className="hidden md:inline">•</span>
              <span className="flex items-center gap-1">
                Made with <Heart className="w-3 h-3 text-emerald-400 fill-emerald-400" /> by Unique Agency
              </span>
            </div>
            
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        {/* Decorative Badge */}
        <div className="absolute top-8 right-8 hidden lg:block">
          <div className="relative">
            <div className="w-24 h-24 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center animate-pulse">
              <Sparkles className="w-12 h-12 text-white" />
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
              <span className="text-xs font-black">✓</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;