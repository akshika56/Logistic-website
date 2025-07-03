import {
  Warehouse,
  Package,
  Shield,
  BarChart3,
  CheckCircle,
  Star,
  Thermometer,
  Clock,
} from "lucide-react";

const Warehousing = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Warehouse className="h-16 w-16 mx-auto mb-6 text-orange-400" />
            <h1 className="text-5xl font-bold mb-6">Warehousing & Distribution</h1>
            <p className="text-xl text-blue-100 mb-8">
              Modern warehouse facilities with advanced inventory management, climate control, and comprehensive distribution services.
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium text-lg transition-colors">
              Tour Our Facilities
            </button>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">
              Comprehensive Storage & Distribution Solutions
            </h2>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-2xl font-bold text-blue-900 mb-6">
                  Strategic Warehouse Solutions
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  NDH Logistic's state-of-the-art warehousing facilities provide secure, efficient storage and distribution solutions that keep your supply chain moving smoothly...
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  With over 2 million square feet of warehouse space across multiple locations, we provide scalable solutions that grow with your business...
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Our experienced warehouse management team utilizes cutting-edge technology including warehouse management systems (WMS), radio frequency identification (RFID)...
                </p>
              </div>
              <div className="bg-blue-50 p-8 rounded-xl">
                <h4 className="text-xl font-bold text-blue-900 mb-4">
                  Warehouse Features
                </h4>
                <ul className="space-y-3">
                  {[
                    "2M+ sq ft of modern warehouse space",
                    "Climate-controlled environments",
                    "24/7 security and monitoring",
                    "Advanced WMS technology",
                    "Flexible storage configurations",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-orange-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Core Services */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {[
                {
                  icon: <Thermometer className="h-8 w-8 text-blue-600" />,
                  bg: "bg-blue-100",
                  title: "Climate Controlled",
                  description:
                    "Storage for sensitive products including pharmaceuticals, electronics, and food items.",
                  bullets: [
                    "Temperature range: -20°F to 80°F",
                    "Humidity control systems",
                    "Continuous monitoring",
                    "Alarm systems",
                  ],
                },
                {
                  icon: <BarChart3 className="h-8 w-8 text-orange-600" />,
                  bg: "bg-orange-100",
                  title: "Inventory Management",
                  description:
                    "Real-time visibility and control over your stock levels.",
                  bullets: [
                    "Real-time inventory tracking",
                    "Automated reorder points",
                    "Cycle counting programs",
                    "Integration capabilities",
                  ],
                },
                {
                  icon: <Package className="h-8 w-8 text-green-600" />,
                  bg: "bg-green-100",
                  title: "Pick & Pack",
                  description:
                    "Efficient order fulfillment services including picking, packing, and shipping.",
                  bullets: [
                    "Order processing",
                    "Custom packaging",
                    "Kitting services",
                    "Quality control",
                  ],
                },
                {
                  icon: <Clock className="h-8 w-8 text-purple-600" />,
                  bg: "bg-purple-100",
                  title: "Cross Docking",
                  description:
                    "Transfer goods from inbound to outbound transportation with minimal storage time.",
                  bullets: [
                    "Rapid turnaround",
                    "Reduced handling costs",
                    "Consolidation services",
                    "Same-day processing",
                  ],
                },
              ].map((service, i) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-xl shadow-lg border border-blue-100 hover:shadow-xl transition-shadow"
                >
                  <div className={`${service.bg} p-3 rounded-lg w-fit mb-4`}>
                    {service.icon}
                  </div>
                  <h4 className="text-xl font-bold text-blue-900 mb-3">{service.title}</h4>
                  <p className="text-gray-700 mb-4">{service.description}</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {service.bullets.map((b, j) => (
                      <li key={j}>• {b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Technology */}
            <div className="bg-gradient-to-r from-blue-50 to-orange-50 p-12 rounded-2xl mb-16">
              <h3 className="text-3xl font-bold text-blue-900 mb-8 text-center">
                Advanced Warehouse Technology
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    icon: <BarChart3 className="h-8 w-8 text-white" />,
                    bg: "bg-blue-600",
                    title: "Warehouse Management System",
                    text: "Real-time inventory control, automated workflows, and reporting.",
                  },
                  {
                    icon: <Shield className="h-8 w-8 text-white" />,
                    bg: "bg-orange-600",
                    title: "RFID Technology",
                    text: "Enhanced inventory tracking and reduced errors.",
                  },
                  {
                    icon: <Package className="h-8 w-8 text-white" />,
                    bg: "bg-green-600",
                    title: "Automated Systems",
                    text: "Conveyors, picking, and sortation to boost efficiency.",
                  },
                ].map((item, i) => (
                  <div key={i} className="text-center p-6 bg-white rounded-xl shadow-md">
                    <div className={`${item.bg} p-4 rounded-full w-fit mx-auto mb-4`}>
                      {item.icon}
                    </div>
                    <h4 className="text-xl font-bold text-blue-900 mb-3">{item.title}</h4>
                    <p className="text-gray-700">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Value-Added Services */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-blue-900 mb-8 text-center">
                Value-Added Services
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  "Custom Packaging & Labeling",
                  "Product Assembly & Kitting",
                  "Quality Inspection & Testing",
                  "Returns Processing",
                  "Inventory Optimization",
                  "EDI Integration",
                  "Vendor Managed Inventory",
                  "Postponement Services",
                  "Co-Packing Services",
                ].map((service, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg"
                  >
                    <CheckCircle className="h-5 w-5 text-orange-500" />
                    <span className="font-medium text-blue-900">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Facility Locations */}
            <div className="bg-white p-12 rounded-2xl shadow-lg border border-blue-100 mb-16">
              <h3 className="text-3xl font-bold text-blue-900 mb-8 text-center">
                Strategic Facility Locations
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    name: "East Coast Hub",
                    desc: "500,000 sq ft facility near ports and metro areas.",
                    iconColor: "text-blue-600",
                    bg: "bg-blue-50",
                    bullets: [
                      "Climate-controlled zones",
                      "Rail and truck access",
                      "Port proximity",
                      "Cross-docking capabilities",
                    ],
                  },
                  {
                    name: "Central Distribution",
                    desc: "750,000 sq ft automated facility for rapid nationwide delivery.",
                    iconColor: "text-orange-600",
                    bg: "bg-orange-50",
                    bullets: [
                      "Automated systems",
                      "Multi-modal access",
                      "Same-day processing",
                      "E-commerce fulfillment",
                    ],
                  },
                  {
                    name: "West Coast Gateway",
                    desc: "600,000 sq ft facility linked to Pacific ports.",
                    iconColor: "text-green-600",
                    bg: "bg-green-50",
                    bullets: [
                      "Port integration",
                      "Intermodal connections",
                      "Customs processing",
                      "Value-added services",
                    ],
                  },
                ].map((loc, i) => (
                  <div key={i} className={`text-center p-6 rounded-xl ${loc.bg}`}>
                    <Warehouse className={`h-12 w-12 ${loc.iconColor} mx-auto mb-4`} />
                    <h4 className="text-xl font-bold text-blue-900 mb-3">{loc.name}</h4>
                    <p className="text-gray-700 mb-4">{loc.desc}</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {loc.bullets.map((b, j) => (
                        <li key={j}>• {b}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-blue-900 text-white p-12 rounded-2xl">
              <h3 className="text-3xl font-bold mb-8 text-center">Why Choose NDH Warehousing</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    icon: <Star className="h-12 w-12 text-orange-400 mx-auto mb-4" />,
                    title: "Modern Facilities",
                    text: "Advanced technology and security systems.",
                  },
                  {
                    icon: <Shield className="h-12 w-12 text-orange-400 mx-auto mb-4" />,
                    title: "Secure Storage",
                    text: "24/7 monitoring and full insurance coverage.",
                  },
                  {
                    icon: <BarChart3 className="h-12 w-12 text-orange-400 mx-auto mb-4" />,
                    title: "Real-Time Visibility",
                    text: "Inventory tracking with online access.",
                  },
                  {
                    icon: <Package className="h-12 w-12 text-orange-400 mx-auto mb-4" />,
                    title: "Flexible Solutions",
                    text: "Scalable services for changing needs.",
                  },
                ].map((item, i) => (
                  <div key={i} className="text-center">
                    {item.icon}
                    <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                    <p className="text-blue-100">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Optimize Your Inventory Management</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let our warehousing experts design a custom storage and distribution solution that reduces costs and improves efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-medium text-lg hover:bg-gray-100 transition-colors">
              Request Facility Tour
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium text-lg hover:bg-white hover:text-orange-600 transition-colors">
              Get Storage Quote
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Warehousing;
