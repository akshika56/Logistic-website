import { Network, TrendingUp, Shield, Users, CheckCircle, Star, Target, BarChart3 } from "lucide-react";

const SupplyChain = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Network className="h-16 w-16 mx-auto mb-6 text-orange-400" />
            <h1 className="text-5xl font-bold mb-6">Supply Chain Management</h1>
            <p className="text-xl text-blue-100 mb-8">
              End-to-end supply chain optimization and management solutions designed to enhance efficiency, reduce costs, and drive business growth.
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium text-lg transition-colors">
              Optimize My Supply Chain
            </button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">Strategic Supply Chain Excellence</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Comprehensive Supply Chain Solutions</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                NDH Logistic's supply chain management services transform complex logistics networks into streamlined, efficient operations that deliver competitive advantages.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our team of certified supply chain professionals works closely with your organization to design and implement customized solutions that reduce costs, improve service levels, and enhance competitiveness.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                From strategy to execution, we provide end-to-end support that ensures measurable improvements in operational efficiency and customer satisfaction.
              </p>
            </div>
            <div className="bg-blue-50 p-8 rounded-xl">
              <h4 className="text-xl font-bold text-blue-900 mb-4">Supply Chain Benefits</h4>
              <ul className="space-y-3">
                {[
                  "15-30% cost reduction average",
                  "Improved inventory turnover",
                  "Enhanced customer satisfaction",
                  "Reduced lead times",
                  "Risk mitigation strategies"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
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
                title: "Supply Chain Design",
                icon: <Target className="h-8 w-8 text-blue-600" />,
                color: "bg-blue-100",
                bullets: ["Network optimization", "Facility location analysis", "Capacity planning", "Flow optimization"]
              },
              {
                title: "Vendor Management",
                icon: <Users className="h-8 w-8 text-orange-600" />,
                color: "bg-orange-100",
                bullets: ["Supplier selection", "Performance monitoring", "Relationship management", "Contract negotiation"]
              },
              {
                title: "Risk Assessment",
                icon: <Shield className="h-8 w-8 text-green-600" />,
                color: "bg-green-100",
                bullets: ["Risk identification", "Impact assessment", "Mitigation strategies", "Contingency planning"]
              },
              {
                title: "Cost Optimization",
                icon: <TrendingUp className="h-8 w-8 text-purple-600" />,
                color: "bg-purple-100",
                bullets: ["Cost analysis", "Savings identification", "Process optimization", "ROI measurement"]
              }
            ].map(({ title, icon, color, bullets }, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-lg border border-blue-100 hover:shadow-xl transition-shadow">
                <div className={`${color} p-3 rounded-lg w-fit mb-4`}>{icon}</div>
                <h4 className="text-xl font-bold text-blue-900 mb-3">{title}</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  {bullets.map((b, i) => (
                    <li key={i}>• {b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Additional Sections (you can repeat this pattern) */}
          {/* ... your other sections like implementation process, key focus areas, etc. ... */}
        </div>
      </section>
    </div>
  );
};

export default SupplyChain;
