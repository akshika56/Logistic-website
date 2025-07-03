import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

import logo from "@/assets/logo 2.jpg"; // Make sure this path and file exist

const Header = () => {
  return (
    <>
      {/* Top Header */}
      <header className="bg-blue-900 text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>contact@ndhlogistic.com</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo and Brand */}
            <Link to="/" className="flex items-center space-x-3">
              <img src={logo} alt="NDH Logo" className="h-12 w-auto" />
              <div>
                <h1 className="text-2xl font-bold text-blue-900">NDH Logistic</h1>
                <p className="text-sm text-orange-500 font-medium">
                  Professional Solutions
                </p>
              </div>
            </Link>

            {/* Navigation Menu */}
            <NavigationMenu className="relative z-50">
              <NavigationMenuList className="flex space-x-8 items-center">
                {/* Home */}
                <NavigationMenuItem>
                  <Link
                    to="/"
                    className="text-blue-900 hover:text-orange-500 font-medium transition-colors"
                  >
                    Home
                  </Link>
                </NavigationMenuItem>

                {/* Services Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-blue-900 hover:text-orange-500 font-medium">
                    Services
                  </NavigationMenuTrigger>

                  <NavigationMenuContent className="absolute mt-2 bg-white shadow-xl rounded-lg w-80 p-4 z-50">
                    <div className="grid gap-2">
                      {[
                        {
                          to: "/services",
                          title: "All Services",
                          desc: "View all our logistics solutions",
                        },
                        {
                          to: "/services/ground-transportation",
                          title: "Ground Transportation",
                          desc: "FTL, LTL, and Express Delivery",
                        },
                        {
                          to: "/services/ocean-freight",
                          title: "Ocean Freight",
                          desc: "FCL & LCL International Shipping",
                        },
                        {
                          to: "/services/air-cargo",
                          title: "Air Cargo",
                          desc: "Express & Charter Air Services",
                        },
                        {
                          to: "/services/warehousing",
                          title: "Warehousing & Distribution",
                          desc: "Storage & Inventory Management",
                        },
                        {
                          to: "/services/supply-chain",
                          title: "Supply Chain Management",
                          desc: "End-to-End Optimization",
                        },
                        {
                          to: "/services/logistics-analytics",
                          title: "Logistics Analytics",
                          desc: "Data-Driven Insights",
                        },
                      ].map((item, idx) => (
                        <NavigationMenuLink asChild key={idx}>
                          <Link
                            to={item.to}
                            className="block p-3 hover:bg-blue-50 rounded-lg transition-colors"
                          >
                            <div className="font-medium text-blue-900">{item.title}</div>
                            <div className="text-sm text-gray-600">{item.desc}</div>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* About */}
                <NavigationMenuItem>
                  <Link
                    to="/about"
                    className="text-blue-900 hover:text-orange-500 font-medium transition-colors"
                  >
                    About
                  </Link>
                </NavigationMenuItem>

                {/* Contact */}
                <NavigationMenuItem>
                  <Link
                    to="/contact"
                    className="text-blue-900 hover:text-orange-500 font-medium transition-colors"
                  >
                    Contact
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>

              {/* Required Viewport (handles positioning/animation) */}
              <NavigationMenuViewport className="absolute top-full left-0 w-full" />
            </NavigationMenu>

            {/* Get Quote Button */}
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-medium transition-colors">
              <Link to="/get-quote" className="text-white">
                Get Quote
              </Link>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
