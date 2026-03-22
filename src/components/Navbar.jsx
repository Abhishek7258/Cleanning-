import { useState, useEffect } from "react";
import {
  Mail,
  MapPin,
  Menu,
  X,
  Phone,
  Sparkles,
  Home,
  Briefcase,
  Info,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path) => {
    return window.location.pathname === path;
  };

  const navLinks = [
    { path: "/", label: "Home", icon: Home },
    { path: "/service", label: "Our Services", icon: Briefcase },
    { path: "/about", label: "About Us", icon: Info },
    { path: "/contact", label: "Contact Us", icon: MessageCircle },
  ];

  return (
    <nav className="w-full sticky top-0 left-0 z-50">
      {/* Top Banner */}
      

      {/* Main Navigation */}
      <div
        className={`bg-white transition-all duration-300 ${
          scrolled ? "shadow-xl py-2" : "shadow-md py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <a href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <img
                    src="./images/logo.jpg"
                    alt="Tikawala Logo"
                    className="w-14 h-14 object-cover rounded-xl"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center shadow-md">
                  <Sparkles className="w-3 h-3 text-yellow-800" />
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="text-xl font-black text-gray-900 leading-tight">
                  Tikawala Prime
                </div>
                <div className="text-sm font-bold text-emerald-600">
                  Clean Solutions
                </div>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.path}
                  href={link.path}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    isActive(link.path)
                      ? "bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg"
                      : "text-gray-700 hover:bg-emerald-50 hover:text-emerald-600"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA Button - Desktop */}
            <div className="hidden md:block py-2 px-6 items-center text-center bg-gradient-to-r from-emerald-500 to-teal-600  rounded-xl font-bold shadow-lg  hover:shadow-xl hover:shadow-emerald-500/40 transition-all duration-300 overflow-hidden">
              <a
                href="/form"
               >
                <span className=" text-white py-2 relative z-10 flex items-center gap-2">
                  <h1>Book Now</h1>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden w-12 h-12 bg-emerald-50 hover:bg-emerald-100 rounded-xl flex items-center justify-center transition-all duration-300"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-emerald-600" />
              ) : (
                <Menu className="w-6 h-6 text-emerald-600" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Navigation */}
      {isMenuOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            onClick={closeMenu}
          ></div>

          {/* Sidebar */}
          <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 md:hidden transform transition-transform duration-300 ease-out">
            <div className="h-full flex flex-col">
              {/* Sidebar Header */}
              <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-6">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                      <img
                        src="./images/logo.jpg"
                        alt="Logo"
                        className="w-12 h-12 rounded-xl object-cover"
                      />
                    </div>
                    <div>
                      <div className="text-white font-black text-lg">
                        Tikawala
                      </div>
                      <div className="text-emerald-100 text-sm font-semibold">
                        Clean Solutions
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={closeMenu}
                    className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/30 transition-all"
                  >
                    <X className="w-5 h-5 text-white" />
                  </button>
                </div>

                {/* Quick Contact in Sidebar */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-white/90 text-sm">
                    <Phone className="w-4 h-4" />
                    <span>+91 123-456-7890</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/90 text-sm">
                    <Mail className="w-4 h-4" />
                    <span>info@tikawala.com</span>
                  </div>
                </div>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 overflow-y-auto p-6">
                <div className="space-y-2">
                  {navLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <a
                        key={link.path}
                        href={link.path}
                        onClick={closeMenu}
                        className={`flex items-center gap-4 px-4 py-4 rounded-xl font-semibold transition-all duration-300 group ${
                          isActive(link.path)
                            ? "bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg"
                            : "text-gray-700 hover:bg-emerald-50"
                        }`}
                      >
                        <Icon
                          className={`w-5 h-5 ${
                            isActive(link.path)
                              ? "text-white"
                              : "text-emerald-600"
                          }`}
                        />
                        <span>{link.label}</span>
                        {isActive(link.path) && (
                          <ArrowRight className="w-4 h-4 ml-auto" />
                        )}
                      </a>
                    );
                  })}
                </div>

                {/* Special Offer Card */}
                <div className="mt-8 p-6 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl border-2 border-emerald-200">
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles className="w-5 h-5 text-emerald-600" />
                    <span className="font-bold text-emerald-900">
                      Special Offer!
                    </span>
                  </div>
                  <p className="text-sm text-gray-700 mb-4">
                    Get 20% off on your first booking. Limited time offer!
                  </p>
                  <a
                    href="/form"
                    onClick={closeMenu}
                    className="block w-full text-center px-4 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all"
                  >
                    Book Now
                  </a>
                </div>
              </div>

              {/* Sidebar Footer */}
              <div className="p-6 border-t border-gray-200">
                <div className="flex gap-3">
                  {["facebook", "twitter", "instagram", "linkedin"].map(
                    (social, idx) => (
                      <a
                        key={idx}
                        href="#"
                        className="w-10 h-10 bg-gray-100 hover:bg-emerald-500 rounded-xl flex items-center justify-center transition-all group"
                      >
                        <span className="text-gray-600 group-hover:text-white text-xs font-bold">
                          {social[0].toUpperCase()}
                        </span>
                      </a>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
