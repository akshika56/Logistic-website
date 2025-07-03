// src/pages/Home.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {
  Globe,
  Shield,
  TrendingUp,
  Users,
  Award,
  Package,
  Droplets,
  Wheat,
  Factory,
  Truck,
  Shirt as ShirtIcon,
  X,
  Plus,
} from 'lucide-react';

interface Industry {
  name: string;
icon: React.ReactNode;
  color: string;
  contact: string;
}

const industries: Industry[] = [
  {
    name: 'Perishable',
    icon: <Package className="h-8 w-8 text-orange-600" />,
    color: 'orange',
    contact: 'Handled by Rahul Mehta (rahul@ndhlogistic.com)',
  },
  {
    name: 'FMCG',
    icon: <Droplets className="h-8 w-8 text-blue-600" />,
    color: 'blue',
    contact: 'Handled by Priya Singh (priya@ndhlogistic.com)',
  },
  {
    name: 'Fertilizers',
    icon: <Wheat className="h-8 w-8 text-green-600" />,
    color: 'green',
    contact: 'Handled by Manish Kumar (manish@ndhlogistic.com)',
  },
  {
    name: 'Textiles',
    icon: <ShirtIcon className="h-8 w-8 text-purple-600" />,
    color: 'purple',
    contact: 'Handled by Meena Patel (meena@ndhlogistic.com)',
  },
  {
    name: 'Manufacturing',
    icon: <Factory className="h-8 w-8 text-red-600" />,
    color: 'red',
    contact: 'Handled by Amit Rana (amit@ndhlogistic.com)',
  },
  {
    name: 'Automotive',
    icon: <Truck className="h-8 w-8 text-yellow-600" />,
    color: 'yellow',
    contact: 'Handled by Sneha Kapoor (sneha@ndhlogistic.com)',
  },
];

const Home = () => {
  const [activeIndustry, setActiveIndustry] = useState<string | null>(null);

  return (
    <div>
     {/* Hero Section */}
<section
  className="relative bg-cover bg-center bg-no-repeat py-24 text-white"
  style={{ backgroundImage: "url('/assests/pic.jpg')" }}
>
  <div className="relative container mx-auto px-4">
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-6xl font-extrabold text-orange-500 mb-6 leading-tight drop-shadow-md">
        Your Trusted Logistics Partner
      </h1>
      <p className="text-2xl text-white font-medium mb-10 drop-shadow-sm">
        Delivering excellence in global logistics with innovative solutions and unmatched reliability
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          to="/get-started"
          className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg"
        >
          Get Started Today
        </Link>
        <Link
          to="/get-quote"
          className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg"
        >
          Request Quote
        </Link>
      </div>
    </div>
  </div>
</section>



      {/* Industries We Serve */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-left mb-16">
            <h3 className="text-lg font-medium text-blue-600 mb-2 uppercase tracking-wide">INDUSTRIES</h3>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">We partner with all industries</h2>
            <Link
              to="/services"
              className="inline-flex items-center bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-medium transition-colors"
            >
              Know More <span className="ml-2">→</span>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {industries.map((industry) => (
              <div key={industry.name} className="relative">
                <div
                  className={`bg-white p-6 rounded-2xl shadow-lg border text-center hover:shadow-xl transition-shadow group border-${industry.color}-200`}
                >
                  <div
                    className={`bg-${industry.color}-100 p-4 rounded-full w-fit mx-auto mb-4 group-hover:bg-${industry.color}-200 transition-colors`}
                  >
                    {industry.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{industry.name}</h3>
                </div>
                <button
                  onClick={() => setActiveIndustry(industry.name)}
                  className="absolute -top-2 -right-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full p-2 shadow-lg transition-colors"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            ))}

            {activeIndustry && (
              <div className="md:col-span-3">
                <div className="relative bg-gray-900 text-white p-6 rounded-xl shadow-xl mt-6">
                  <p className="text-lg">
                    {industries.find((i) => i.name === activeIndustry)?.contact}
                  </p>
                  <button
                    onClick={() => setActiveIndustry(null)}
                    className="absolute top-2 right-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full p-2"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-6">Comprehensive Logistics Services</h2>
          <p className="text-center max-w-2xl mx-auto text-gray-600 mb-16">
            From local deliveries to global supply chain management, we provide integrated logistics solutions that drive efficiency and growth for your business.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Ground Transportation',
                description:
                  'Comprehensive trucking solutions for domestic and cross-border deliveries with real-time tracking.',
                bullets: ['Full Truckload (FTL)', 'Less Than Truckload (LTL)', 'Express Delivery', 'Temperature Controlled'],
              },
              {
                title: 'Ocean Freight',
                description:
                  'Cost-effective sea shipping solutions for international cargo with full container load services.',
                bullets: ['FCL & LCL Options', 'Port-to-Port Service', 'Customs Clearance', 'Documentation Support'],
              },
              {
                title: 'Air Cargo',
                description:
                  'Fast and reliable air freight services for time-sensitive shipments worldwide.',
                bullets: ['Express Air Service', 'Charter Services', 'Dangerous Goods', 'Perishable Cargo'],
              },
              {
                title: 'Warehousing & Distribution',
                description:
                  'Modern warehouse facilities with advanced inventory management and distribution services.',
                bullets: ['Climate Controlled', 'Inventory Management', 'Pick & Pack', 'Cross Docking'],
              },
              {
                title: 'Supply Chain Management',
                description:
                  'End-to-end supply chain optimization and management solutions for businesses.',
                bullets: ['Supply Chain Design', 'Vendor Management', 'Risk Assessment', 'Cost Optimization'],
              },
              {
                title: 'Logistics Analytics',
                description:
                  'Data-driven insights and analytics to optimize your logistics operations and reduce costs.',
                bullets: ['Performance Metrics', 'Cost Analysis', 'Route Optimization', 'Predictive Analytics'],
              },
            ].map((service, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-blue-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-3">{service.description}</p>
                <ul className="text-blue-600 list-disc list-inside text-sm space-y-1">
                  {service.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
                <Link to="/services" className="inline-block mt-4 text-blue-600 font-medium">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Need a Custom Solution */}
      <section className="bg-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className="max-w-xl mx-auto mb-6">
            Our logistics experts can design a tailored solution that meets your specific business requirements and helps you achieve your operational goals.
          </p>
          <div className="flex justify-center gap-4 mb-6 flex-wrap">
            <span>🔁 Quick Response</span>
            <span>🛡️ Secure Operations</span>
            <span>⚡ Fast Implementation</span>
          </div>
          <Link to="/contact" className="bg-orange-500 px-6 py-3 rounded-full font-semibold hover:bg-orange-600">
            Contact Our Experts
          </Link>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Trusted by Thousands Worldwide</h2>
          <p className="text-gray-600 mb-12">
            Our commitment to excellence is reflected in our performance metrics and the trust our clients place in our logistics solutions.
          </p>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { value: '50,000+', label: 'Successful Shipments' },
              { value: '150+', label: 'Countries Served' },
              { value: '99%', label: 'Customer Satisfaction' },
              { value: '25+', label: 'Years of Experience' },
            ].map((metric, i) => (
              <div key={i} className="bg-blue-50 p-6 rounded-xl shadow text-center">
                <h3 className="text-3xl font-bold text-blue-700 mb-2">{metric.value}</h3>
                <p className="text-gray-700 font-medium">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-8">Industry Certifications & Awards</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {['ISO 9001:2015', 'C-TPAT Certified', 'IATA Certified', 'Green Logistics Award'].map((cert, i) => (
              <div
                key={i}
                className="bg-white shadow rounded-lg px-6 py-3 font-medium text-blue-800"
              >
                {cert}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-10">Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'Sarah Johnson',
                title: 'Chief Executive Officer',
                detail: '20+ years in logistics',
                subtitle: 'Strategic Leadership & Operations',
              },
              {
                name: 'Michael Chen',
                title: 'Chief Operations Officer',
                detail: '18+ years in supply chain',
                subtitle: 'Global Operations & Technology',
              },
              {
                name: 'Emily Rodriguez',
                title: 'Chief Customer Officer',
                detail: '15+ years in client relations',
                subtitle: 'Customer Success & Growth',
              },
            ].map((person, i) => (
              <div key={i} className="bg-blue-50 p-6 rounded-xl shadow text-center">
                <Users className="h-10 w-10 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900">{person.name}</h3>
                <p className="text-blue-600 font-medium">{person.title}</p>
                <p className="text-sm text-gray-600 mt-2">{person.detail}</p>
                <p className="text-sm text-gray-600">{person.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
