import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  Truck,
  Clock,
  Shield,
  MapPin,
  CheckCircle,
  Star,
} from "lucide-react";

const GroundTransportation = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Truck className="h-16 w-16 mx-auto mb-6 text-orange-400" />
            <h1 className="text-5xl font-bold mb-6">Ground Transportation Services</h1>
            <p className="text-xl text-blue-100 mb-8">
              Comprehensive trucking solutions for domestic and cross-border deliveries with real-time tracking and guaranteed reliability.
            </p>
            <Link
              to="/get-quote"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium text-lg transition-colors"
            >
              Get Quote Now
            </Link>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">
              Complete Ground Transportation Solutions
            </h2>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-2xl font-bold text-blue-900 mb-6">
                  Reliable Road Freight Services
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  NDH Logistic's ground transportation services form the backbone of North American commerce, providing reliable, cost-effective solutions for businesses of all sizes. Our comprehensive fleet management and strategic partnerships ensure your cargo reaches its destination safely and on time, every time.
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  With over two decades of experience in the transportation industry, we understand the critical importance of timing, reliability, and cost-effectiveness in ground freight. Our advanced tracking systems provide real-time visibility into your shipments, while our experienced drivers and logistics coordinators ensure smooth operations from pickup to delivery.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">99.9% On-Time Delivery</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Shield className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Fully Insured</span>
                  </div>
                </div>
              </div>
              <div className="bg-blue-50 p-8 rounded-xl">
                <h4 className="text-xl font-bold text-blue-900 mb-4">
                  Service Highlights
                </h4>
                <ul className="space-y-3">
                  {[
                    "24/7 Real-time tracking",
                    "Temperature-controlled transport",
                    "Expedited delivery options",
                    "Cross-border expertise",
                    "Specialized equipment available",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-orange-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Service Types */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {[
                {
                  icon: <Truck className="h-8 w-8 text-blue-600" />,
                  color: "bg-blue-100",
                  title: "Full Truckload (FTL)",
                  desc:
                    "Dedicated truck service for large shipments requiring the entire trailer capacity. Ideal for urgent deliveries and fragile cargo.",
                  bullets: [
                    "Exclusive truck use",
                    "Direct routing",
                    "Faster transit times",
                    "Enhanced security",
                  ],
                },
                {
                  icon: <MapPin className="h-8 w-8 text-orange-600" />,
                  color: "bg-orange-100",
                  title: "Less Than Truckload (LTL)",
                  desc:
                    "Cost-effective solution for smaller shipments that don't require a full truck. Share space with other shippers while maintaining quality.",
                  bullets: [
                    "Cost-effective pricing",
                    "Flexible scheduling",
                    "Terminal networks",
                    "Consolidated shipping",
                  ],
                },
                {
                  icon: <Clock className="h-8 w-8 text-green-600" />,
                  color: "bg-green-100",
                  title: "Express Delivery",
                  desc:
                    "Time-critical shipments with guaranteed delivery windows. Perfect for urgent business needs and just-in-time manufacturing.",
                  bullets: [
                    "Same-day delivery",
                    "Time-definite service",
                    "Priority handling",
                    "Emergency logistics",
                  ],
                },
                {
                  icon: <Shield className="h-8 w-8 text-purple-600" />,
                  color: "bg-purple-100",
                  title: "Temperature Controlled",
                  desc:
                    "Specialized refrigerated and heated transport for temperature-sensitive goods including pharmaceuticals, food, and chemicals.",
                  bullets: [
                    "Refrigerated transport",
                    "Heated cargo options",
                    "Temperature monitoring",
                    "Compliance certified",
                  ],
                },
              ].map((service, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-xl shadow-lg border border-blue-100 hover:shadow-xl transition-shadow"
                >
                  <div className={`${service.color} p-3 rounded-lg w-fit mb-4`}>
                    {service.icon}
                  </div>
                  <h4 className="text-xl font-bold text-blue-900 mb-3">
                    {service.title}
                  </h4>
                  <p className="text-gray-700 mb-4">{service.desc}</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {service.bullets.map((b, i) => (
                      <li key={i}>• {b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Tracking */}
            <div className="bg-gradient-to-r from-blue-50 to-orange-50 p-12 rounded-2xl mb-16">
              <h3 className="text-3xl font-bold text-blue-900 mb-8 text-center">
                Advanced Tracking & Technology
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    icon: <MapPin className="h-8 w-8 text-white" />,
                    bg: "bg-blue-600",
                    title: "Real-Time GPS Tracking",
                    desc:
                      "Monitor your shipment's exact location 24/7 with our advanced GPS tracking system.",
                  },
                  {
                    icon: <Clock className="h-8 w-8 text-white" />,
                    bg: "bg-orange-600",
                    title: "Automated Notifications",
                    desc:
                      "Receive automatic alerts for pickup confirmation, in-transit updates, and delivery notifications.",
                  },
                  {
                    icon: <Shield className="h-8 w-8 text-white" />,
                    bg: "bg-green-600",
                    title: "Secure Documentation",
                    desc:
                      "Digital proof of delivery and electronic bills of lading ensure full transparency.",
                  },
                ].map((tech, i) => (
                  <div key={i} className="text-center">
                    <div className={`${tech.bg} p-4 rounded-full w-fit mx-auto mb-4`}>
                      {tech.icon}
                    </div>
                    <h4 className="text-xl font-bold text-blue-900 mb-3">
                      {tech.title}
                    </h4>
                    <p className="text-gray-700">{tech.desc}</p>
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
                  "Manufacturing & Industrial",
                  "Retail & E-commerce",
                  "Automotive Parts",
                  "Food & Beverage",
                  "Pharmaceuticals",
                  "Construction Materials",
                  "Technology & Electronics",
                  "Textiles & Apparel",
                  "Chemical & Hazmat",
                ].map((industry, i) => (
                  <div
                    key={i}
                    className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg"
                  >
                    <CheckCircle className="h-5 w-5 text-orange-500" />
                    <span className="font-medium text-blue-900">{industry}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-blue-900 text-white p-12 rounded-2xl">
              <h3 className="text-3xl font-bold mb-8 text-center">
                Why Choose NDH Logistic Ground Transportation
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    icon: <Star className="h-12 w-12 text-orange-400 mx-auto mb-4" />,
                    title: "Proven Reliability",
                    desc:
                      "99.9% on-time delivery rate with over 20 years of industry experience",
                  },
                  {
                    icon: <Shield className="h-12 w-12 text-orange-400 mx-auto mb-4" />,
                    title: "Comprehensive Insurance",
                    desc:
                      "Full cargo insurance coverage and liability protection for peace of mind",
                  },
                  {
                    icon: <Clock className="h-12 w-12 text-orange-400 mx-auto mb-4" />,
                    title: "24/7 Support",
                    desc:
                      "Round-the-clock customer service and emergency support for all your needs",
                  },
                  {
                    icon: <Truck className="h-12 w-12 text-orange-400 mx-auto mb-4" />,
                    title: "Modern Fleet",
                    desc:
                      "Well-maintained vehicles with latest safety features and environmental standards",
                  },
                ].map((item, i) => (
                  <div key={i} className="text-center">
                    {item.icon}
                    <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                    <p className="text-blue-100">{item.desc}</p>
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
          <h2 className="text-4xl font-bold mb-6">Ready to Ship with Confidence?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get a customized quote for your ground transportation needs. Our logistics experts are standing by to help optimize your shipping strategy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/get-quote"
              className="bg-white text-orange-600 px-8 py-3 rounded-lg font-medium text-lg hover:bg-gray-100 transition-colors"
            >
              Get Instant Quote
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium text-lg hover:bg-white hover:text-orange-600 transition-colors"
            >
              Speak with Expert
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GroundTransportation;
