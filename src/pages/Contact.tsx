
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-blue-100 mb-8">
              Ready to optimize your logistics operations? Get in touch with our experts today
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600">Multiple ways to reach our logistics experts</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="text-center p-8 bg-blue-50 rounded-xl">
              <Phone className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-blue-900 mb-2">Call Us</h3>
              <p className="text-gray-600 mb-4">Speak with our logistics experts</p>
              <p className="text-blue-600 font-medium">+1 (555) 123-4567</p>
              <p className="text-sm text-gray-500 mt-2">Available 24/7</p>
            </div>

            <div className="text-center p-8 bg-orange-50 rounded-xl">
              <Mail className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-blue-900 mb-2">Email Us</h3>
              <p className="text-gray-600 mb-4">Get detailed quotes and consultation</p>
              <p className="text-orange-600 font-medium">contact@ndhlogistic.com</p>
              <p className="text-sm text-gray-500 mt-2">Response within 2 hours</p>
            </div>

            <div className="text-center p-8 bg-green-50 rounded-xl">
              <MapPin className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-blue-900 mb-2">Visit Us</h3>
              <p className="text-gray-600 mb-4">Our headquarters and main facility</p>
              <p className="text-green-600 font-medium">123 Logistics Blvd</p>
              <p className="text-sm text-gray-500 mt-2">Commerce City, NY 10001</p>
            </div>

            <div className="text-center p-8 bg-purple-50 rounded-xl">
              <Clock className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-blue-900 mb-2">Emergency Support</h3>
              <p className="text-gray-600 mb-4">24/7 emergency shipment assistance</p>
              <p className="text-purple-600 font-medium">+1 (555) 911-SHIP</p>
              <p className="text-sm text-gray-500 mt-2">Immediate response</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Office Locations */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Request a Quote</h3>
              <p className="text-gray-600 mb-6">Fill out the form below and we'll get back to you within 2 hours with a customized solution.</p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">Company Name *</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter company name"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter email address"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter phone number"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">Service Type</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      <option value="ground-transportation">Ground Transportation</option>
                      <option value="ocean-freight">Ocean Freight</option>
                      <option value="air-cargo">Air Cargo</option>
                      <option value="warehousing">Warehousing & Distribution</option>
                      <option value="supply-chain">Supply Chain Management</option>
                      <option value="logistics-analytics">Logistics Analytics</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">Estimated Budget</label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-10k">Under $10,000</option>
                      <option value="10k-50k">$10,000 - $50,000</option>
                      <option value="50k-100k">$50,000 - $100,000</option>
                      <option value="over-100k">Over $100,000</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Project Details *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="Describe your logistics requirements, timeline, and any specific needs..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Send Message</span>
                </button>

                <p className="text-sm text-gray-500 text-center">
                  By submitting this form, you agree to our Privacy Policy and Terms of Service.
                </p>
              </form>
            </div>

            {/* Office Locations */}
            <div>
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Our Office Locations</h3>
              <p className="text-gray-600 mb-8">Visit us at any of our strategically located offices across the United States.</p>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h4 className="text-xl font-bold text-blue-900 mb-2">New York - Headquarters</h4>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-blue-600" />
                      <span>123 Logistics Avenue, Commerce City, NY 10001</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-blue-600" />
                      <span>+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-blue-600" />
                      <span>Mon-Fri: 8:00 AM - 6:00 PM EST</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h4 className="text-xl font-bold text-blue-900 mb-2">Los Angeles - West Coast Hub</h4>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-orange-600" />
                      <span>456 Port Boulevard, Los Angeles, CA 90001</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-orange-600" />
                      <span>+1 (555) 234-5678</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-orange-600" />
                      <span>Mon-Fri: 8:00 AM - 6:00 PM PST</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h4 className="text-xl font-bold text-blue-900 mb-2">Miami - Latin America Gateway</h4>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-green-600" />
                      <span>789 Trade Center Drive, Miami, FL 33101</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-green-600" />
                      <span>+1 (555) 345-6789</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-green-600" />
                      <span>Mon-Fri: 8:00 AM - 6:00 PM EST</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Quick answers to common questions</p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-lg font-bold text-blue-900 mb-2">How quickly can you respond to quote requests?</h4>
              <p className="text-gray-600">We typically respond to all quote requests within 2 hours during business hours, and within 24 hours on weekends and holidays.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-lg font-bold text-blue-900 mb-2">Do you provide 24/7 customer support?</h4>
              <p className="text-gray-600">Yes, we offer 24/7 customer support for all active shipments and emergency situations. Our support team is always available to assist you.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-lg font-bold text-blue-900 mb-2">What information do you need for a quote?</h4>
              <p className="text-gray-600">We need origin and destination details, shipment dimensions/weight, service type preferences, timeline requirements, and any special handling instructions.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-lg font-bold text-blue-900 mb-2">Can you handle international shipments?</h4>
              <p className="text-gray-600">Absolutely! We provide comprehensive international logistics services including ocean freight, air cargo, and customs clearance to over 150 countries worldwide.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
