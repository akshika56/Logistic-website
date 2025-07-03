import { BarChart3, TrendingUp, Target, Zap, CheckCircle, Star, PieChart, LineChart } from "lucide-react";

const LogisticsAnalytics = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <BarChart3 className="h-16 w-16 mx-auto mb-6 text-orange-400" />
          <h1 className="text-5xl font-bold mb-6">Logistics Analytics</h1>
          <p className="text-xl text-blue-100 mb-8">
            Data-driven insights and advanced analytics to optimize your logistics operations, reduce costs, and drive strategic decision-making.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium text-lg transition-colors">
            Start Analytics Journey
          </button>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">Transform Data Into Competitive Advantage</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Intelligent Logistics Analytics Solutions</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                NDH Logistic's analytics platform transforms logistics data into insights that drive operational excellence, cost optimization, and strategy.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our team builds tailored solutions from dashboards to AI-powered models to optimize routes, predict demand, and improve service.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Powered by AI, ML, and big data, we uncover patterns, optimize operations, and forecast trends for smarter logistics management.
              </p>
            </div>
            <div className="bg-blue-50 p-8 rounded-xl">
              <h4 className="text-xl font-bold text-blue-900 mb-4">Analytics Impact</h4>
              <ul className="space-y-3">
                {[
                  "20-40% reduction in logistics costs",
                  "95%+ forecast accuracy improvement",
                  "Real-time operational visibility",
                  "Predictive problem resolution",
                  "Enhanced customer satisfaction"
                ].map((point, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-orange-500" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Core Analytics Services */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
                title: "Performance Metrics",
                color: "bg-blue-100",
                points: [
                  "Real-time dashboards",
                  "KPI monitoring",
                  "Performance benchmarking",
                  "Trend analysis"
                ]
              },
              {
                icon: <TrendingUp className="h-8 w-8 text-orange-600" />,
                title: "Cost Analysis",
                color: "bg-orange-100",
                points: [
                  "Cost breakdown analysis",
                  "Spend optimization",
                  "ROI calculations",
                  "Budget forecasting"
                ]
              },
              {
                icon: <Target className="h-8 w-8 text-green-600" />,
                title: "Route Optimization",
                color: "bg-green-100",
                points: [
                  "Dynamic routing",
                  "Traffic optimization",
                  "Fuel efficiency",
                  "Delivery windows"
                ]
              },
              {
                icon: <Zap className="h-8 w-8 text-purple-600" />,
                title: "Predictive Analytics",
                color: "bg-purple-100",
                points: [
                  "Demand forecasting",
                  "Delay prediction",
                  "Risk assessment",
                  "Capacity planning"
                ]
              }
            ].map((service, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-lg border border-blue-100 hover:shadow-xl transition-shadow">
                <div className={`${service.color} p-3 rounded-lg w-fit mb-4`}>{service.icon}</div>
                <h4 className="text-xl font-bold text-blue-900 mb-3">{service.title}</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  {service.points.map((pt, j) => (
                    <li key={j}>• {pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Platform Features */}
          <div className="bg-gradient-to-r from-blue-50 to-orange-50 p-12 rounded-2xl mb-16 text-center grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <LineChart className="h-8 w-8 text-white" />,
                title: "Real-Time Analytics",
                bg: "bg-blue-600",
                text: "Live data processing providing instant logistics insights."
              },
              {
                icon: <PieChart className="h-8 w-8 text-white" />,
                title: "Custom Dashboards",
                bg: "bg-orange-600",
                text: "Tailored KPIs and metrics relevant to your operations."
              },
              {
                icon: <Zap className="h-8 w-8 text-white" />,
                title: "AI-Powered Insights",
                bg: "bg-green-600",
                text: "Machine learning reveals trends and opportunities automatically."
              }
            ].map((f, i) => (
              <div key={i} className="p-6 bg-white rounded-xl shadow-md">
                <div className={`${f.bg} p-4 rounded-full w-fit mx-auto mb-4`}>{f.icon}</div>
                <h4 className="text-xl font-bold text-blue-900 mb-3">{f.title}</h4>
                <p className="text-gray-700">{f.text}</p>
              </div>
            ))}
          </div>

          {/* Use Cases */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-blue-900 mb-8 text-center">Key Use Cases & Applications</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: <BarChart3 className="h-10 w-10 text-blue-600" />, title: "Transportation Optimization" },
                { icon: <TrendingUp className="h-10 w-10 text-orange-600" />, title: "Inventory Analytics" },
                { icon: <Target className="h-10 w-10 text-green-600" />, title: "Customer Analytics" },
                { icon: <Zap className="h-10 w-10 text-purple-600" />, title: "Risk Analytics" },
                { icon: <PieChart className="h-10 w-10 text-blue-600" />, title: "Warehouse Analytics" },
                { icon: <LineChart className="h-10 w-10 text-orange-600" />, title: "Network Analytics" }
              ].map((u, i) => (
                <div key={i} className="bg-white p-6 rounded-xl shadow-lg border border-blue-100 text-center">
                  {u.icon}
                  <h4 className="text-xl font-bold text-blue-900 mb-3">{u.title}</h4>
                  <p className="text-gray-700">Powerful insights tailored to real-world logistics applications.</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Stack */}
          <div className="bg-white p-12 rounded-2xl shadow-lg border border-blue-100 mb-16">
            <h3 className="text-3xl font-bold text-blue-900 mb-8 text-center">Advanced Technology Stack</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Machine Learning & AI", "Big Data Processing", "Cloud Computing", "Real-Time Analytics",
                "Statistical Modeling", "Data Visualization", "IoT Integration", "Predictive Modeling"
              ].map((tech, i) => (
                <div key={i} className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-orange-500" />
                  <span className="font-medium text-blue-900">{tech}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-blue-900 text-white p-12 rounded-2xl text-center grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Star className="h-12 w-12 text-orange-400 mx-auto mb-4" />, title: "Proven ROI", text: "300% average ROI in 12 months" },
              { icon: <Zap className="h-12 w-12 text-orange-400 mx-auto mb-4" />, title: "Advanced AI", text: "Machine learning + AI insights" },
              { icon: <BarChart3 className="h-12 w-12 text-orange-400 mx-auto mb-4" />, title: "Real-Time Insights", text: "Live operational intelligence" },
              { icon: <Target className="h-12 w-12 text-orange-400 mx-auto mb-4" />, title: "Custom Solutions", text: "Tailored to your business needs" }
            ].map((item, i) => (
              <div key={i} className="text-center">
                {item.icon}
                <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                <p className="text-blue-100">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Unlock Your Data's Potential?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Transform your logistics operations with powerful analytics and insights that drive real business results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-medium text-lg hover:bg-gray-100 transition-colors">
              Start Free Analytics Audit
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium text-lg hover:bg-white hover:text-orange-600 transition-colors">
              See Platform Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LogisticsAnalytics;
