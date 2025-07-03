
import React from 'react';
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-blue-600 text-white px-3 py-2 rounded-lg font-bold text-xl">
                NDH
              </div>
              <div>
                <h3 className="text-xl font-bold">NDH Logistic</h3>
                <p className="text-sm text-orange-400">Professional Solutions</p>
              </div>
            </div>
            <p className="text-blue-200 mb-4">Leading the future of global logistics with innovative solutions and unmatched reliability.</p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-blue-200">
              <li><Link to="/services/ground-transportation" className="hover:text-white transition-colors">Ground Transportation</Link></li>
              <li><Link to="/services/ocean-freight" className="hover:text-white transition-colors">Ocean Freight</Link></li>
              <li><Link to="/services/air-cargo" className="hover:text-white transition-colors">Air Cargo</Link></li>
              <li><Link to="/services/warehousing" className="hover:text-white transition-colors">Warehousing</Link></li>
              <li><Link to="/services/supply-chain" className="hover:text-white transition-colors">Supply Chain</Link></li>
              <li><Link to="/services/logistics-analytics" className="hover:text-white transition-colors">Analytics</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-blue-200">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <div className="space-y-3 text-blue-200">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>contact@ndhlogistic.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>123 Logistics Blvd, Commerce City</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-blue-800 pt-8 text-center text-blue-300">
          <p>&copy; 2024 NDH Logistic. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
