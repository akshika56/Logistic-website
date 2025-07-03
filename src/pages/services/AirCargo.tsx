import { Link } from "react-router-dom";
import {
  Plane,
  Clock,
  Shield,
  Globe,
  CheckCircle,
  Star,
  Zap,
  Package,
} from "lucide-react";

const AirCargo = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Plane className="h-16 w-16 mx-auto mb-6 text-orange-400" />
            <h1 className="text-5xl font-bold mb-6">Air Cargo Services</h1>
            <p className="text-xl text-blue-100 mb-8">
              Fast and reliable air freight services for time-sensitive shipments worldwide with express delivery and specialized handling options.
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium text-lg transition-colors">
              Get Air Freight Quote
            </button>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">
              Premium Air Freight Solutions
            </h2>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-2xl font-bold text-blue-900 mb-6">
                  Speed Meets Reliability in Air Transport
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  When time is critical and reliability is paramount, NDH Logistic's air cargo services deliver unmatched speed and precision...
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  We partner with leading airlines and cargo carriers to provide flexible, reliable air transport...
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Our experienced air freight team manages every aspect of your shipment...
                </p>
              </div>
              <div className="bg-blue-50 p-8 rounded-xl">
                <h4 className="text-xl font-bold text-blue-900 mb-4">
                  Air Cargo Advantages
                </h4>
                <ul className="space-y-3">
                  {[
                    "Fastest international shipping method",
                    "Highest security and safety standards",
                    "Global reach to 1000+ destinations",
                    "Minimal handling reduces damage risk",
                    "Predictable and reliable schedules",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-orange-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Service Types */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {/* Each service card */}
              {[
                {
                  icon: <Zap className="h-8 w-8 text-blue-600" />,
                  bg: "bg-blue-100",
                  title: "Express Air Service",
                  description:
                    "Fastest air freight option for urgent shipments...",
                  points: [
                    "Next-day delivery available",
                    "Priority handling",
                    "Dedicated flights",
                    "Express customs clearance",
                  ],
                },
                {
                  icon: <Plane className="h-8 w-8 text-orange-600" />,
                  bg: "bg-orange-100",
                  title: "Charter Services",
                  description:
                    "Dedicated aircraft charter for large, urgent, or specialized cargo...",
                  points: [
                    "Entire aircraft capacity",
                    "Custom scheduling",
                    "Oversized cargo capability",
                    "Direct routing",
                  ],
                },
                {
                  icon: <Shield className="h-8 w-8 text-red-600" />,
                  bg: "bg-red-100",
                  title: "Dangerous Goods",
                  description:
                    "Specialized handling and transport of hazardous materials...",
                  points: [
                    "IATA DGR certified",
                    "Hazmat documentation",
                    "Special packaging",
                    "Trained personnel",
                  ],
                },
                {
                  icon: <Package className="h-8 w-8 text-green-600" />,
                  bg: "bg-green-100",
                  title: "Perishable Cargo",
                  description:
                    "Temperature-controlled air transport for perishables...",
                  points: [
                    "Temperature monitoring",
                    "Cold chain compliance",
                    "Fresh produce expertise",
                    "Pharmaceutical handling",
                  ],
                },
              ].map(({ icon, bg, title, description, points }, i) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-xl shadow-lg border border-blue-100 hover:shadow-xl transition-shadow"
                >
                  <div className={`${bg} p-3 rounded-lg w-fit mb-4`}>
                    {icon}
                  </div>
                  <h4 className="text-xl font-bold text-blue-900 mb-3">
                    {title}
                  </h4>
                  <p className="text-gray-700 mb-4">{description}</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {points.map((point, j) => (
                      <li key={j}>• {point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Specialized Solutions */}
            <div className="bg-gradient-to-r from-blue-50 to-orange-50 p-12 rounded-2xl mb-16">
              <h3 className="text-3xl font-bold text-blue-900 mb-8 text-center">
                Specialized Air Cargo Solutions
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: <Clock className="h-8 w-8 text-white" />,
                    bg: "bg-blue-600",
                    title: "Time-Definite Services",
                    text: "Guaranteed delivery times with same-day, next-day, and 48-hour options.",
                  },
                  {
                    icon: <Globe className="h-8 w-8 text-white" />,
                    bg: "bg-orange-600",
                    title: "Global Network",
                    text: "Access to 1000+ destinations worldwide through our airline partners.",
                  },
                  {
                    icon: <Shield className="h-8 w-8 text-white" />,
                    bg: "bg-green-600",
                    title: "High-Value Cargo",
                    text: "Secure handling of electronics, jewelry, and artwork.",
                  },
                ].map(({ icon, bg, title, text }, i) => (
                  <div
                    key={i}
                    className="text-center p-6 bg-white rounded-xl shadow-md"
                  >
                    <div className={`${bg} p-4 rounded-full w-fit mx-auto mb-4`}>
                      {icon}
                    </div>
                    <h4 className="text-xl font-bold text-blue-900 mb-3">
                      {title}
                    </h4>
                    <p className="text-gray-700">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Industries Served */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-blue-900 mb-8 text-center">
                Industries We Serve
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  "Automotive & Spare Parts",
                  "Electronics & Technology",
                  "Pharmaceuticals & Healthcare",
                  "Fashion & Apparel",
                  "Aerospace & Defense",
                  "Fresh Produce & Perishables",
                  "Emergency & Humanitarian",
                  "Oil & Gas Equipment",
                  "High-Value Commodities",
                ].map((industry, i) => (
                  <div
                    key={i}
                    className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg"
                  >
                    <Plane className="h-5 w-5 text-orange-500" />
                    <span className="font-medium text-blue-900">{industry}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Transit Times */}
            <div className="bg-white p-12 rounded-2xl shadow-lg border border-blue-100 mb-16">
              <h3 className="text-3xl font-bold text-blue-900 mb-8 text-center">
                Typical Transit Times
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { region: "North America", time: "1-3 days", color: "blue" },
                  { region: "Europe", time: "2-4 days", color: "orange" },
                  { region: "Asia-Pacific", time: "2-5 days", color: "green" },
                  { region: "Global", time: "1-7 days", color: "purple" },
                ].map(({ region, time, color }, i) => (
                  <div
                    key={i}
                    className={`text-center p-4 bg-${color}-50 rounded-xl`}
                  >
                    <Clock className={`h-10 w-10 text-${color}-600 mx-auto mb-3`} />
                    <h4 className="text-lg font-bold text-blue-900 mb-2">
                      {region}
                    </h4>
                    <p className="text-gray-700">{time}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-blue-900 text-white p-12 rounded-2xl">
              <h3 className="text-3xl font-bold mb-8 text-center">
                Why Choose NDH Air Cargo
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    icon: <Zap className="h-12 w-12 text-orange-400 mx-auto mb-4" />,
                    title: "Unmatched Speed",
                    desc: "Fastest shipping method with express options.",
                  },
                  {
                    icon: <Globe className="h-12 w-12 text-orange-400 mx-auto mb-4" />,
                    title: "Global Reach",
                    desc: "Access to 1000+ destinations through partnerships.",
                  },
                  {
                    icon: <Shield className="h-12 w-12 text-orange-400 mx-auto mb-4" />,
                    title: "Maximum Security",
                    desc: "Highest security with tracking and minimal handling.",
                  },
                  {
                    icon: <Star className="h-12 w-12 text-orange-400 mx-auto mb-4" />,
                    title: "Expert Handling",
                    desc: "Specialized expertise for sensitive cargo.",
                  },
                ].map(({ icon, title, desc }, i) => (
                  <div key={i} className="text-center">
                    {icon}
                    <h4 className="text-xl font-bold mb-3">{title}</h4>
                    <p className="text-blue-100">{desc}</p>
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
          <h2 className="text-4xl font-bold mb-6">Need Urgent Air Freight?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            When speed matters most, trust our air cargo experts to deliver your time-sensitive shipments safely and on schedule.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-medium text-lg hover:bg-gray-100 transition-colors">
              Get Express Quote
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium text-lg hover:bg-white hover:text-orange-600 transition-colors">
              Emergency Hotline
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AirCargo;
