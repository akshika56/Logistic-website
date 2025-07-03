
import React from 'react';
import { Link } from "react-router-dom";
import { Globe, Shield, TrendingUp, Users, Award, Plane, Truck, Ship, Warehouse, BarChart3, Settings } from "lucide-react";

const Services = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-blue-100 mb-8">
              Comprehensive logistics solutions designed to streamline your supply chain and drive business growth
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Complete Logistics Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From local deliveries to global supply chain management, we provide integrated logistics solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Ground Transportation */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-blue-100 hover:shadow-xl transition-shadow group">
              <div className="bg-blue-100 p-4 rounded-lg w-fit mb-6 group-hover:bg-blue-200 transition-colors">
                <Truck className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Ground Transportation</h3>
              <p className="text-gray-600 mb-6">Comprehensive trucking solutions for domestic and cross-border deliveries with real-time tracking.</p>
              <ul className="space-y-2 mb-6 text-gray-600">
                <li>• Full Truckload (FTL)</li>
                <li>• Less Than Truckload (LTL)</li>
                <li>• Express Delivery</li>
                <li>• Temperature Controlled</li>
              </ul>
              <Link to="/services/ground-transportation" className="text-orange-500 hover:text-orange-600 font-medium inline-flex items-center">
                Learn More →
              </Link>
            </div>

            {/* Ocean Freight */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-blue-100 hover:shadow-xl transition-shadow group">
              <div className="bg-orange-100 p-4 rounded-lg w-fit mb-6 group-hover:bg-orange-200 transition-colors">
                <Ship className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Ocean Freight</h3>
              <p className="text-gray-600 mb-6">Cost-effective sea shipping solutions for international cargo with full container load services.</p>
              <ul className="space-y-2 mb-6 text-gray-600">
                <li>• FCL & LCL Options</li>
                <li>• Port-to-Port Service</li>
                <li>• Customs Clearance</li>
                <li>• Documentation Support</li>
              </ul>
              <Link to="/services/ocean-freight" className="text-orange-500 hover:text-orange-600 font-medium inline-flex items-center">
                Learn More →
              </Link>
            </div>

            {/* Air Cargo */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-blue-100 hover:shadow-xl transition-shadow group">
              <div className="bg-green-100 p-4 rounded-lg w-fit mb-6 group-hover:bg-green-200 transition-colors">
                <Plane className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Air Cargo</h3>
              <p className="text-gray-600 mb-6">Fast and reliable air freight services for time-sensitive shipments worldwide.</p>
              <ul className="space-y-2 mb-6 text-gray-600">
                <li>• Express Air Service</li>
                <li>• Charter Services</li>
                <li>• Dangerous Goods</li>
                <li>• Perishable Cargo</li>
              </ul>
              <Link to="/services/air-cargo" className="text-orange-500 hover:text-orange-600 font-medium inline-flex items-center">
                Learn More →
              </Link>
            </div>

            {/* Warehousing */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-blue-100 hover:shadow-xl transition-shadow group">
              <div className="bg-purple-100 p-4 rounded-lg w-fit mb-6 group-hover:bg-purple-200 transition-colors">
                <Warehouse className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Warehousing & Distribution</h3>
              <p className="text-gray-600 mb-6">Modern warehouse facilities with advanced inventory management and distribution services.</p>
              <ul className="space-y-2 mb-6 text-gray-600">
                <li>• Climate Controlled</li>
                <li>• Inventory Management</li>
                <li>• Pick & Pack</li>
                <li>• Cross Docking</li>
              </ul>
              <Link to="/services/warehousing" className="text-orange-500 hover:text-orange-600 font-medium inline-flex items-center">
                Learn More →
              </Link>
            </div>

            {/* Supply Chain Management */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-blue-100 hover:shadow-xl transition-shadow group">
              <div className="bg-red-100 p-4 rounded-lg w-fit mb-6 group-hover:bg-red-200 transition-colors">
                <Settings className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Supply Chain Management</h3>
              <p className="text-gray-600 mb-6">End-to-end supply chain optimization and management solutions for businesses.</p>
              <ul className="space-y-2 mb-6 text-gray-600">
                <li>• Supply Chain Design</li>
                <li>• Vendor Management</li>
                <li>• Risk Assessment</li>
                <li>• Cost Optimization</li>
              </ul>
              <Link to="/services/supply-chain" className="text-orange-500 hover:text-orange-600 font-medium inline-flex items-center">
                Learn More →
              </Link>
            </div>

            {/* Logistics Analytics */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-blue-100 hover:shadow-xl transition-shadow group">
              <div className="bg-yellow-100 p-4 rounded-lg w-fit mb-6 group-hover:bg-yellow-200 transition-colors">
                <BarChart3 className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Logistics Analytics</h3>
              <p className="text-gray-600 mb-6">Data-driven insights and analytics to optimize your logistics operations and reduce costs.</p>
              <ul className="space-y-2 mb-6 text-gray-600">
                <li>• Performance Metrics</li>
                <li>• Cost Analysis</li>
                <li>• Route Optimization</li>
                <li>• Predictive Analytics</li>
              </ul>
              <Link to="/services/logistics-analytics" className="text-orange-500 hover:text-orange-600 font-medium inline-flex items-center">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Why Choose Our Services</h2>
            <p className="text-xl text-gray-600">The advantages that set us apart in the logistics industry</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="bg-blue-100 p-4 rounded-full w-fit mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">Secure & Insured</h3>
              <p className="text-gray-600">Comprehensive insurance coverage and advanced security measures protect your cargo.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="bg-orange-100 p-4 rounded-full w-fit mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">24/7 Tracking</h3>
              <p className="text-gray-600">Real-time visibility and updates throughout your shipment's journey.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="bg-green-100 p-4 rounded-full w-fit mx-auto mb-4">
                <Globe className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">Global Network</h3>
              <p className="text-gray-600">Extensive partner network covering 150+ countries worldwide.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="bg-purple-100 p-4 rounded-full w-fit mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">Expert Support</h3>
              <p className="text-gray-600">Dedicated logistics professionals providing personalized service.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Solutions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">Need a Custom Solution?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Our logistics experts can design a tailored solution that meets your specific business requirements and helps you achieve your operational goals.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="bg-blue-100 p-4 rounded-full w-fit mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-blue-900 mb-2">Quick Response</h3>
                <p className="text-gray-600">Get initial consultation within 2 hours of your request.</p>
              </div>

              <div className="text-center">
                <div className="bg-orange-100 p-4 rounded-full w-fit mx-auto mb-4">
                  <Shield className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-bold text-blue-900 mb-2">Secure Operations</h3>
                <p className="text-gray-600">All solutions built with security and compliance at their core.</p>
              </div>

              <div className="text-center">
                <div className="bg-green-100 p-4 rounded-full w-fit mx-auto mb-4">
                  <Settings className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-blue-900 mb-2">Fast Implementation</h3>
                <p className="text-gray-600">Streamlined processes ensure quick deployment of your solution.</p>
              </div>
            </div>
            
            <Link to="/contact" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-medium text-lg transition-colors inline-block">
              Contact Our Experts
            </Link>
          </div>
        </div>
      </section>

      {/* Industry Statistics */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Trusted by Thousands Worldwide</h2>
            <p className="text-xl text-gray-600">Our commitment to excellence is reflected in our performance metrics</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-900 mb-2">50,000+</div>
              <div className="text-gray-600">Successful Shipments</div>
              <div className="text-sm text-gray-500 mt-1">Delivered worldwide with precision</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-900 mb-2">150+</div>
              <div className="text-gray-600">Countries Served</div>
              <div className="text-sm text-gray-500 mt-1">Global network coverage</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-900 mb-2">99.9%</div>
              <div className="text-gray-600">Customer Satisfaction</div>
              <div className="text-sm text-gray-500 mt-1">Consistently high ratings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-900 mb-2">15+</div>
              <div className="text-gray-600">Years of Experience</div>
              <div className="text-sm text-gray-500 mt-1">Industry expertise and trust</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Choose the service that best fits your needs or contact us for a custom solution
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-medium text-lg transition-colors">
              Get Custom Quote
            </Link>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-medium text-lg transition-colors">
              Call +1 (555) 123-4567
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;