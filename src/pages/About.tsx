
import React from 'react';
import { CheckCircle, Shield, Clock, Globe, Users, TrendingUp, Award } from "lucide-react";

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">About NDH Logistic</h1>
            <p className="text-xl text-blue-100 mb-8">
              Leading the future of global logistics with innovation, reliability, and unmatched expertise for over 15 years
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-blue-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6 text-lg">
                Founded in 2009, NDH Logistic has grown from a small regional carrier to a global logistics powerhouse. Our journey began with a simple mission: to provide reliable, efficient, and innovative logistics solutions that help businesses thrive in an increasingly connected world.
              </p>
              <p className="text-gray-600 mb-6 text-lg">
                Today, we serve over 10,000 clients across 150+ countries, managing complex supply chains and delivering exceptional results. Our commitment to excellence, innovation, and customer satisfaction has made us a trusted partner for businesses of all sizes.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span className="text-gray-700">Over 15 years of industry expertise</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span className="text-gray-700">50,000+ successful shipments delivered</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span className="text-gray-700">99.9% on-time delivery rate</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span className="text-gray-700">24/7 customer support</span>
                </div>
              </div>
            </div>
            <div className="bg-blue-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Our Mission</h3>
              <p className="text-gray-600 mb-6">
                To revolutionize global logistics by providing innovative, reliable, and sustainable supply chain solutions that enable businesses to reach their full potential while contributing to a more connected world.
              </p>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the world's most trusted logistics partner, setting industry standards for excellence, innovation, and sustainability while fostering long-term relationships with our clients and communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="bg-blue-100 p-4 rounded-full w-fit mx-auto mb-6">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Reliability</h3>
              <p className="text-gray-600">We deliver on our promises with consistent, dependable service that our clients can count on.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="bg-orange-100 p-4 rounded-full w-fit mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Innovation</h3>
              <p className="text-gray-600">We continuously invest in cutting-edge technology and creative solutions to stay ahead.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="bg-green-100 p-4 rounded-full w-fit mx-auto mb-6">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Partnership</h3>
              <p className="text-gray-600">We build lasting relationships based on trust, transparency, and mutual success.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="bg-purple-100 p-4 rounded-full w-fit mx-auto mb-6">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Excellence</h3>
              <p className="text-gray-600">We strive for the highest standards in everything we do, from service to safety.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600">Experienced professionals driving logistics innovation</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center border border-blue-100">
              <div className="w-24 h-24 bg-blue-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Users className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">David Martinez</h3>
              <p className="text-orange-500 font-medium mb-4">Chief Executive Officer</p>
              <p className="text-gray-600">20+ years in logistics and supply chain management, leading digital transformation initiatives across the industry.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center border border-blue-100">
              <div className="w-24 h-24 bg-orange-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                <TrendingUp className="h-12 w-12 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Lisa Thompson</h3>
              <p className="text-orange-500 font-medium mb-4">Chief Operations Officer</p>
              <p className="text-gray-600">Expert in operational excellence and process optimization with global logistics experience spanning 18 years.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center border border-blue-100">
              <div className="w-24 h-24 bg-green-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Award className="h-12 w-12 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Robert Kim</h3>
              <p className="text-orange-500 font-medium mb-4">Chief Technology Officer</p>
              <p className="text-gray-600">Technology visionary specializing in logistics analytics and automation solutions with 15 years of experience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats and Achievements */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Our Achievements</h2>
            <p className="text-xl text-gray-600">Milestones that define our success</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-900 mb-2">15+</div>
              <div className="text-gray-600">Years of Excellence</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-900 mb-2">50K+</div>
              <div className="text-gray-600">Successful Deliveries</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-900 mb-2">150+</div>
              <div className="text-gray-600">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-900 mb-2">99.9%</div>
              <div className="text-gray-600">Customer Satisfaction</div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h4 className="font-bold text-blue-900 mb-2">ISO 9001:2015</h4>
              <p className="text-gray-600 text-sm">Quality Management Certification</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h4 className="font-bold text-blue-900 mb-2">C-TPAT Certified</h4>
              <p className="text-gray-600 text-sm">Customs-Trade Partnership</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h4 className="font-bold text-blue-900 mb-2">IATA Member</h4>
              <p className="text-gray-600 text-sm">International Air Transport Association</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h4 className="font-bold text-blue-900 mb-2">Green Logistics</h4>
              <p className="text-gray-600 text-sm">Sustainability Award 2023</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Partner with Us?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of businesses that trust NDH Logistic for their supply chain needs
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-medium text-lg transition-colors">
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;