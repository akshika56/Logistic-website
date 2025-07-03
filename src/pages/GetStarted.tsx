
import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Truck, Clock, Shield, Users } from 'lucide-react';

const GetStarted = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Get Started with NDH Logistic</h1>
            <p className="text-xl text-blue-100 mb-8">
              Begin your logistics transformation journey with our comprehensive solutions and expert support
            </p>
            <Link to="/get-quote" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-medium text-lg transition-colors inline-block">
              Request Your Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Getting Started Steps */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">How to Get Started</h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="bg-blue-100 p-6 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                  <span className="text-3xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">Contact Us</h3>
                <p className="text-gray-600 mb-4">
                  Reach out through our quote form, phone, or email to discuss your logistics needs and requirements.
                </p>
                <Link to="/get-quote" className="text-orange-500 hover:text-orange-600 font-medium inline-flex items-center">
                  Get Quote <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>

              <div className="text-center">
                <div className="bg-orange-100 p-6 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                  <span className="text-3xl font-bold text-orange-600">2</span>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">Consultation</h3>
                <p className="text-gray-600 mb-4">
                  Our logistics experts will analyze your requirements and design a customized solution for your business.
                </p>
                <Link to="/contact" className="text-orange-500 hover:text-orange-600 font-medium inline-flex items-center">
                  Schedule Call <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>

              <div className="text-center">
                <div className="bg-green-100 p-6 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                  <span className="text-3xl font-bold text-green-600">3</span>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">Implementation</h3>
                <p className="text-gray-600 mb-4">
                  We'll implement your logistics solution with full support and training to ensure seamless operations.
                </p>
                <Link to="/services" className="text-orange-500 hover:text-orange-600 font-medium inline-flex items-center">
                  View Services <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>

            {/* Quick Start Options */}
            <div className="bg-gradient-to-r from-blue-50 to-orange-50 p-12 rounded-2xl">
              <h3 className="text-3xl font-bold text-blue-900 mb-8 text-center">Quick Start Options</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h4 className="text-xl font-bold text-blue-900 mb-4">Immediate Shipping Needs</h4>
                  <p className="text-gray-600 mb-6">Need to ship something today? Get instant quotes and book your shipment online.</p>
                  
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Instant online quotes</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Same-day pickup available</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Real-time tracking</span>
                    </li>
                  </ul>
                  
                  <Link to="/get-quote" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-colors inline-block">
                    Get Instant Quote
                  </Link>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h4 className="text-xl font-bold text-blue-900 mb-4">Long-term Partnership</h4>
                  <p className="text-gray-600 mb-6">Looking for ongoing logistics support? Let's discuss a comprehensive solution.</p>
                  
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Custom logistics strategy</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Dedicated account manager</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Volume discounts</span>
                    </li>
                  </ul>
                  
                  <Link to="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors inline-block">
                    Schedule Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">Why Start with NDH Logistic?</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="bg-blue-100 p-4 rounded-full w-fit mx-auto mb-4">
                  <Truck className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-blue-900 mb-2">Proven Experience</h3>
                <p className="text-gray-600">Over 15 years of logistics excellence with 99.9% on-time delivery rate</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="bg-orange-100 p-4 rounded-full w-fit mx-auto mb-4">
                  <Clock className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-bold text-blue-900 mb-2">Quick Implementation</h3>
                <p className="text-gray-600">Get up and running fast with our streamlined onboarding process</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="bg-green-100 p-4 rounded-full w-fit mx-auto mb-4">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-blue-900 mb-2">Comprehensive Insurance</h3>
                <p className="text-gray-600">Full cargo protection and liability coverage for peace of mind</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="bg-purple-100 p-4 rounded-full w-fit mx-auto mb-4">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-blue-900 mb-2">Dedicated Support</h3>
                <p className="text-gray-600">24/7 customer support and dedicated account management</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resource Center */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">Resources to Help You Get Started</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-blue-50 p-8 rounded-xl">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Shipping Guide</h3>
                <p className="text-gray-600 mb-4">
                  Complete guide to preparing your shipments for safe and efficient transport.
                </p>
                <a href="#" className="text-orange-500 hover:text-orange-600 font-medium inline-flex items-center">
                  Download Guide <ArrowRight className="h-4 w-4 ml-1" />
                </a>
              </div>

              <div className="bg-orange-50 p-8 rounded-xl">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Cost Calculator</h3>
                <p className="text-gray-600 mb-4">
                  Estimate shipping costs for different service types and destinations.
                </p>
                <Link to="/get-quote" className="text-orange-500 hover:text-orange-600 font-medium inline-flex items-center">
                  Try Calculator <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>

              <div className="bg-green-50 p-8 rounded-xl">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Industry Insights</h3>
                <p className="text-gray-600 mb-4">
                  Stay updated with the latest logistics trends and best practices.
                </p>
                <a href="#" className="text-orange-500 hover:text-orange-600 font-medium inline-flex items-center">
                  Read Articles <ArrowRight className="h-4 w-4 ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Logistics?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust NDH Logistic for their shipping needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/get-quote" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-medium text-lg transition-colors">
              Get Your Free Quote
            </Link>
            <Link to="/contact" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-medium text-lg transition-colors">
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetStarted;
