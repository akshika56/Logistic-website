import { Ship, Globe, Clock, Shield, CheckCircle, Star, Anchor, Container } from "lucide-react";

const OceanFreight = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Ship className="h-16 w-16 mx-auto mb-6 text-orange-400" />
            <h1 className="text-5xl font-bold mb-6">Ocean Freight Services</h1>
            <p className="text-xl text-blue-100 mb-8">
              Cost-effective sea shipping solutions for international cargo with comprehensive port-to-port and door-to-door services worldwide.
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium text-lg transition-colors">
              Get Shipping Quote
            </button>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">Global Ocean Freight Solutions</h2>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-2xl font-bold text-blue-900 mb-6">International Shipping Excellence</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  NDH Logistic's ocean freight services connect your business to global markets through our extensive network of shipping partnerships and port facilities.
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Our experienced team manages every aspect of your ocean shipment, ensuring competitive rates, reliable service, and comprehensive coverage.
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  We offer cargo insurance, documentation management, and end-to-end tracking for visibility and peace of mind.
                </p>
              </div>
              <div className="bg-blue-50 p-8 rounded-xl">
                <h4 className="text-xl font-bold text-blue-900 mb-4">Ocean Freight Advantages</h4>
                <ul className="space-y-3">
                  {["Most cost-effective for large shipments", "Environmentally friendly shipping", "Handle oversized and heavy cargo", "Global reach to all major ports", "Flexible container options"].map((item, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-orange-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Service Types */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {[{
                title: "Full Container Load (FCL)",
                icon: <Container className="h-10 w-10 text-blue-600" />,
                bg: "bg-blue-100",
                points: [
                  "20ft and 40ft containers available",
                  "High cube and specialized containers",
                  "Refrigerated (reefer) containers",
                  "Enhanced cargo security",
                  "Direct loading and unloading"
                ],
                description: "Exclusive use of a complete container for your shipment."
              }, {
                title: "Less Container Load (LCL)",
                icon: <Anchor className="h-10 w-10 text-orange-600" />,
                bg: "bg-orange-100",
                points: [
                  "Minimum volume requirements",
                  "Consolidated shipping savings",
                  "Regular sailing schedules",
                  "Professional cargo handling",
                  "Flexible shipping options"
                ],
                description: "Cost-effective solution for smaller shipments that don't require a full container."
              }].map((type, idx) => (
                <div key={idx} className="bg-white p-8 rounded-xl shadow-lg border border-blue-100 hover:shadow-xl transition-shadow">
                  <div className={`${type.bg} p-4 rounded-lg w-fit mb-6`}>{type.icon}</div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-4">{type.title}</h3>
                  <p className="text-gray-700 mb-6">{type.description}</p>
                  <ul className="space-y-2 text-gray-600">
                    {type.points.map((pt, i) => (
                      <li key={i} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Additional Services */}
            <div className="bg-gradient-to-r from-blue-50 to-orange-50 p-12 rounded-2xl mb-16">
              <h3 className="text-3xl font-bold text-blue-900 mb-8 text-center">Comprehensive Ocean Freight Services</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[{ icon: Globe, color: "bg-blue-600", title: "Customs Clearance" }, { icon: Shield, color: "bg-orange-600", title: "Cargo Insurance" }, { icon: Clock, color: "bg-green-600", title: "Documentation" }, { icon: Container, color: "bg-purple-600", title: "Port Services" }].map((s, idx) => (
                  <div key={idx} className="text-center">
                    <div className={`${s.color} p-4 rounded-full w-fit mx-auto mb-4`}><s.icon className="h-8 w-8 text-white" /></div>
                    <h4 className="text-lg font-bold text-blue-900 mb-3">{s.title}</h4>
                    <p className="text-gray-700 text-sm">Professional handling of {s.title.toLowerCase()} to ensure smooth operations.</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Global Routes */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-blue-900 mb-8 text-center">Major Shipping Routes</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {["North America - Europe", "North America - Asia", "North America - South America", "Trans-Pacific Routes", "Trans-Atlantic Routes", "Asia - Europe", "Middle East - Americas", "Africa - Global Routes", "Intra-Asia Services"].map((route, i) => (
                  <div key={i} className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg">
                    <Ship className="h-5 w-5 text-orange-500" />
                    <span className="font-medium text-blue-900">{route}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Container Types */}
            <div className="bg-white p-12 rounded-2xl shadow-lg border border-blue-100 mb-16">
              <h3 className="text-3xl font-bold text-blue-900 mb-8 text-center">Container Options Available</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="text-center p-6 bg-blue-50 rounded-xl">
                  <Container className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-blue-900 mb-3">Standard Dry Containers</h4>
                  <p className="text-gray-700 mb-4">20ft and 40ft containers for general cargo.</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 20ft: 33.2 CBM capacity</li>
                    <li>• 40ft: 67.7 CBM capacity</li>
                    <li>• Steel construction</li>
                    <li>• Weather-resistant</li>
                  </ul>
                </div>
                <div className="text-center p-6 bg-orange-50 rounded-xl">
                  <Shield className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-blue-900 mb-3">Refrigerated Containers</h4>
                  <p className="text-gray-700 mb-4">Reefer containers for temperature-sensitive goods.</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• -30°C to +30°C range</li>
                    <li>• Humidity control</li>
                    <li>• Monitoring</li>
                    <li>• Backup systems</li>
                  </ul>
                </div>
                <div className="text-center p-6 bg-green-50 rounded-xl">
                  <Globe className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-blue-900 mb-3">Specialized Containers</h4>
                  <p className="text-gray-700 mb-4">For oversized or liquid cargo — high cube, open top, flat rack, and tank.</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• High cube</li>
                    <li>• Open top</li>
                    <li>• Flat rack</li>
                    <li>• Tank</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-blue-900 text-white p-12 rounded-2xl">
              <h3 className="text-3xl font-bold mb-8 text-center">Why Choose NDH Ocean Freight</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <Star className="h-12 w-12 text-orange-400 mx-auto mb-4" />
                  <h4 className="text-xl font-bold mb-3">Global Network</h4>
                  <p className="text-blue-100">Partnerships with major shipping lines serving 150+ countries worldwide</p>
                </div>
                <div className="text-center">
                  <Shield className="h-12 w-12 text-orange-400 mx-auto mb-4" />
                  <h4 className="text-xl font-bold mb-3">Competitive Rates</h4>
                  <p className="text-blue-100">Leverage our volume discounts for the most competitive ocean freight pricing</p>
                </div>
                <div className="text-center">
                  <Clock className="h-12 w-12 text-orange-400 mx-auto mb-4" />
                  <h4 className="text-xl font-bold mb-3">Reliable Schedules</h4>
                  <p className="text-blue-100">Regular sailing schedules with reliable departure and arrival times</p>
                </div>
                <div className="text-center">
                  <Globe className="h-12 w-12 text-orange-400 mx-auto mb-4" />
                  <h4 className="text-xl font-bold mb-3">Complete Solutions</h4>
                  <p className="text-blue-100">End-to-end services including customs, documentation, and final delivery</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Ship Globally?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Connect to international markets with reliable and efficient ocean freight services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-medium text-lg hover:bg-gray-100 transition-colors">
              Get Ocean Freight Quote
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium text-lg hover:bg-white hover:text-orange-600 transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OceanFreight;
