import React from "react";
import { Search, ChevronDown } from "lucide-react";
import Service1 from "../components/Service1";
import Timeline from "../components/Timeline";

const Tech = () => {
  const topBarItems = [
    { label: "Bokaro", flag: "🇮🇳" },
    { label: "FlexiPrice" },
    { label: "Partner With Us" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white b-[#3d3558] text-black">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex gap-4 text-white">
            {topBarItems.map((item, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded ${
                  index === 0 ? "bg-[#4a3f66]" : "bg-[#2d5a2d]"
                } flex items-center gap-2 ${
                  index === 0 ? "bg-[#4a3f66]" : "hidden md:block"
                }`}
              >
                {item.flag && <span>{item.flag}</span>}
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <div className="bg-black text-white px-3 py-1 font-bold">TST</div>
            <div className="text-sm">
              <div className="font-bold">TECH</div>
              <div className="font-bold">SQUAD</div>
              <div className="font-bold">TEAM</div>
            </div>
          </div>

          <div className="items-center gap-6 hidden md:block">
            <div className="flex items-center gap-6 text-right text-sm">
              <div className="font-bold">support@techsquadteam.com</div>
              <div className="flex items-center gap-2">
                <div className="bg-orange-500 rounded-full w-10 h-10 flex items-center justify-center">
                  📞
                </div>
                <div>
                  <div className="text-xs">Call Now</div>
                  <div className="font-bold">9355739395</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="relative bg-cover bg-center h-[500px]"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('./images/bg1.avif')`,
        }}
      >
        <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center">
          <h1 className="text-white text-5xl font-bold text-center mb-12">
            On Demand - Home Service at Door Step
          </h1>

          <div className="flex gap-4 w-full max-w-4xl">
            <div className="bg-white rounded-lg px-4 py-3 flex items-center gap-3 w-1/3">
              <span className="text-gray-400">📍</span>
              <select className="flex-1 outline-none text-gray-700">
                <option>Bokaro</option>
              </select>
              <ChevronDown className="text-gray-400" size={20} />
            </div>

            <div className="bg-white rounded-lg px-4 py-3 flex items-center gap-3 flex-1">
              <Search className="text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search for services"
                className="flex-1 outline-none text-gray-700"
              />
            </div>
          </div>
        </div>
      </div>

      {/*  */}
      <Service1 />
      {/*  */}

      <Timeline />
      {/*  */}
    </div>
  );
};

export default Tech;
