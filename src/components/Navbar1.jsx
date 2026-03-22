import React, { useState } from 'react';
import { ChevronDown, Phone } from 'lucide-react';

const Navbar1 = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Top bar location and options
  const topBarButtons = [
    { id: 1, label: 'Bangalore', icon: '🇮🇳', bgColor: 'bg-[#4a3f66]' },
    { id: 2, label: 'FlexiPrice', bgColor: 'bg-[#2d5a2d]' },
    { id: 3, label: 'Partner With Us', bgColor: 'bg-[#2d5a2d]' }
  ];

  // Navigation menu items
  const navItems = [
    { id: 1, name: 'Cleaning Services', hasDropdown: true },
    { id: 2, name: 'Home Painting', hasDropdown: true },
    { id: 3, name: 'Pest Control', hasDropdown: true },
    { id: 4, name: 'Spa and Salon', hasDropdown: true },
    { id: 5, name: 'Repairing Services', hasDropdown: false }
  ];

  // Trust badges
  const trustBadges = [
    { id: 1, text: 'Verified', bgColor: 'bg-white' },
    { id: 2, text: 'Startup India', bgColor: 'bg-green-50' },
    { id: 3, text: 'ISO', bgColor: 'bg-blue-50' },
    { id: 4, text: 'MSME', bgColor: 'bg-orange-50' }
  ];

  return (
    <div className="w-full">
      {/* Top Bar */}
      <div className="bg-[#3d3558] text-white">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            {/* Left Side - Location & Options */}
            <div className="flex gap-3">
              {topBarButtons.map((button) => (
                <button
                  key={button.id}
                  className={`${button.bgColor} px-4 py-2 rounded text-sm font-medium hover:opacity-90 transition-opacity flex items-center gap-2`}
                >
                  {button.icon && <span>{button.icon}</span>}
                  {button.label}
                </button>
              ))}
            </div>

            {/* Center - Logo */}
            <div className="flex items-center gap-2">
              <div className="bg-black text-white px-3 py-1.5 font-bold text-lg rounded">
                TST
              </div>
              <div className="leading-tight">
                <div className="font-bold text-sm">TECH</div>
                <div className="font-bold text-sm">SQUAD</div>
                <div className="font-bold text-sm">TEAM</div>
              </div>
            </div>

            {/* Right Side - Contact & Login */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4">
                <div className="text-right text-sm">
                  support@techsquadteam.com
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-orange-500 rounded-full w-10 h-10 flex items-center justify-center">
                    <Phone size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-300">Call Now</div>
                    <div className="font-bold text-sm">9355739395</div>
                  </div>
                </div>
              </div>
              <button className="border-2 border-white px-5 py-2 rounded hover:bg-white hover:text-[#3d3558] transition-colors text-sm font-medium">
                Login / Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-[#3d3558] border-t border-[#4a3f66]">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Navigation Links */}
            <div className="flex">
              {navItems.map((item) => (
                <div
                  key={item.id}
                  className="relative"
                  onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.id)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="text-white px-5 py-4 hover:bg-[#4a3f66] flex items-center gap-2 text-sm font-medium transition-colors">
                    {item.name}
                    {item.hasDropdown && (
                      <ChevronDown 
                        size={16} 
                        className={`transition-transform ${
                          activeDropdown === item.id ? 'rotate-180' : ''
                        }`}
                      />
                    )}
                  </button>

                  {/* Dropdown Menu (placeholder) */}
                  {item.hasDropdown && activeDropdown === item.id && (
                    <div className="absolute top-full left-0 bg-white shadow-lg rounded-b-lg min-w-[200px] py-2 z-50">
                      <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm">
                        Service 1
                      </a>
                      <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm">
                        Service 2
                      </a>
                      <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm">
                        Service 3
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="flex gap-2 items-center py-2">
              {trustBadges.map((badge) => (
                <div
                  key={badge.id}
                  className={`${badge.bgColor} rounded px-3 py-2 h-10 flex items-center shadow-sm`}
                >
                  <span className="text-xs font-semibold text-gray-700">
                    {badge.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar1;
