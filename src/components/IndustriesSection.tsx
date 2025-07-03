import React, { useState } from "react";
import {
  Package,
  Droplets,
  Wheat,
  Shirt,
  Factory,
  Truck,
  Plus,
  X,
} from "lucide-react";

const industries = [
  {
    id: "perishable",
    name: "Perishable",
    icon: <Package className="h-8 w-8 text-orange-600" />,
    color: "orange",
    contact: {
      name: "John Doe",
      email: "john.doe@example.com",
    },
  },
  {
    id: "fmcg",
    name: "FMCG",
    icon: <Droplets className="h-8 w-8 text-blue-600" />,
    color: "blue",
    contact: {
      name: "Jane Smith",
      email: "jane.smith@example.com",
    },
  },
  {
    id: "fertilizers",
    name: "Fertilizers",
    icon: <Wheat className="h-8 w-8 text-green-600" />,
    color: "green",
    contact: {
      name: "Amit Kumar",
      email: "amit.kumar@example.com",
    },
  },
  {
    id: "textiles",
    name: "Textiles",
    icon: <Shirt className="h-8 w-8 text-purple-600" />,
    color: "purple",
    contact: {
      name: "Rina Patel",
      email: "rina.patel@example.com",
    },
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    icon: <Factory className="h-8 w-8 text-red-600" />,
    color: "red",
    contact: {
      name: "Vikram Shah",
      email: "vikram.shah@example.com",
    },
  },
  {
    id: "automotive",
    name: "Automotive",
    icon: <Truck className="h-8 w-8 text-yellow-600" />,
    color: "yellow",
    contact: {
      name: "Meena Roy",
      email: "meena.roy@example.com",
    },
  },
];

const IndustriesSection = () => {
  const [openIndustry, setOpenIndustry] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setOpenIndustry(openIndustry === id ? null : id);
  };

  return (
    <section className="py-20 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="text-left mb-16">
          <h3 className="text-lg font-medium text-green-600 mb-2 uppercase tracking-wide">Industries</h3>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">We partner with all industries</h2>
          <a
            href="/services"
            className="inline-flex items-center bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-medium transition"
          >
            Know More <span className="ml-2">→</span>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {industries.map((industry) => (
            <div key={industry.id} className="relative group">
              <div
                className={`bg-white p-6 rounded-2xl shadow-lg border border-${industry.color}-200 text-center hover:shadow-xl transition-shadow`}
              >
                <div className={`bg-${industry.color}-100 p-4 rounded-full w-fit mx-auto mb-4`}>
                  {industry.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{industry.name}</h3>
              </div>
              <button
                onClick={() => handleToggle(industry.id)}
                className="absolute -top-2 -right-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full p-2 shadow-md transition"
              >
                <Plus className="h-4 w-4" />
              </button>

              {openIndustry === industry.id && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-full bg-gray-900 text-white p-6 rounded-xl shadow-lg z-20">
                  <p className="text-center mb-2 font-semibold">Handled by</p>
                  <p className="text-center text-sm">{industry.contact.name}</p>
                  <p className="text-center text-sm">{industry.contact.email}</p>
                  <button
                    onClick={() => setOpenIndustry(null)}
                    className="absolute top-2 right-2 bg-blue-600 hover:bg-blue-700 rounded-full p-1"
                  >
                    <X className="h-4 w-4 text-white" />
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
