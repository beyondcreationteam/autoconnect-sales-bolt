import React from 'react';
import { motion } from 'framer-motion';
import { 
  Quote, 
  ArrowRight, 
  Star, 
  BarChart3, 
  TrendingUp, 
  Users,
  Award,
  Building2,
  Store,
  Wrench
} from 'lucide-react';

const Customers = () => {
  const testimonials = [
    {
      quote: "AutoConnect transformed our customer experience across 45 dealerships. The Arabic UX and seamless DMS integration made deployment effortless.",
      author: "Ahmed Al-Rashid",
      position: "Regional CX Director",
      company: "BMW Middle East",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/BMW_logo_%28gray%29.svg/1024px-BMW_logo_%28gray%29.svg.png?auto=compress&cs=tinysrgb&w=200",
      metrics: ["45% increase in customer satisfaction", "60% faster service response", "250% ROI in year one"],
      category: "OEM"
    },
    {
      quote: "The WhatsApp integration and automated service reminders have revolutionized how we connect with customers. Our retention rates have never been higher.",
      author: "Sarah Mohammad",
      position: "Customer Experience Manager",
      company: "Mohamed Yousuf Naghi Motors Co.",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP0A25-APlIIgAXoagCzUhrhhlg7gvk6enjQ&s?auto=compress&cs=tinysrgb&w=200",
      metrics: ["89% customer retention", "3x faster lead conversion", "40% increase in service bookings"],
      category: "Dealership"
    },
    {
      quote: "AutoConnect's predictive analytics helped us identify at-risk customers and prevent churn. The ROI has exceeded all expectations.",
      author: "Khalid bin Zayed",
      position: "Operations Director",
      company: "Mansour Automotive",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUuBf7qzniKKqERNKWNeaQDjL5p_wrTD8YHQ&s?auto=compress&cs=tinysrgb&w=200",
      metrics: ["32% reduction in customer churn", "94% service satisfaction", "8.7/10 NPS score"],
      category: "Service"
    }
  ];

  const caseStudies = [
    {
      title: "Mohamed Yousuf Naghi Motors Co.: Multi-Brand CX Transformation",
      description: "How a leading automotive group unified customer experience across 10 brands and 45 dealerships",
      category: "Dealership Success Story",
      icon: Building2,
      metrics: {
        satisfaction: "96%",
        deployment: "90 days",
        roi: "250%"
      },
      challenges: [
        "Inconsistent customer experience across brands",
        "Complex multi-DMS integration requirements",
        "Arabic localization for all touchpoints"
      ],
      solutions: [
        "Unified omnichannel orchestration platform",
        "Custom Arabic UX with cultural optimization",
        "Seamless integration with 5 different DMS systems"
      ],
      image: "https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Mansour Automotive: Service Excellence Through Automation",
      description: "Transforming service operations with intelligent automation and customer communication",
      category: "Dealership Success Story",
      icon: Store,
      metrics: {
        efficiency: "+45%",
        satisfaction: "94%",
        automation: "70%"
      },
      challenges: [
        "Manual service scheduling and follow-ups",
        "Inconsistent customer communication",
        "Limited visibility into customer satisfaction"
      ],
      solutions: [
        "Automated appointment booking and reminders",
        "Real-time service status updates via WhatsApp",
        "AI-powered sentiment analysis and feedback collection"
      ],
      image: "https://images.pexels.com/photos/97075/pexels-photo-97075.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  const successMetrics = [
    { icon: Users, value: "250+", label: "Active Customers", description: "Dealerships and service centers" },
    { icon: Award, value: "96%", label: "Customer Satisfaction", description: "Average across all deployments" },
    { icon: TrendingUp, value: "35%", label: "Average ROI", description: "Return on investment in first year" },
    { icon: BarChart3, value: "60%", label: "Faster Deployment", description: "Compared to traditional solutions" }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Trusted by Leading
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {' '}Automotive Brands
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From OEMs to service centers across MENA, AutoConnect powers exceptional 
              customer experiences for the automotive industry's most demanding businesses.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {successMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <metric.icon className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{metric.value}</div>
                <div className="font-medium text-gray-900 mb-1">{metric.label}</div>
                <div className="text-sm text-gray-600">{metric.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real results from automotive businesses across the MENA region
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-6">
                  <Quote className="h-8 w-8 text-blue-600 mr-3" />
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
                    {testimonial.category}
                  </span>
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.quote}"</p>
                
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.logo} 
                    alt={testimonial.company}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.position}</div>
                    <div className="text-sm text-blue-600">{testimonial.company}</div>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Results</h4>
                  <ul className="space-y-2">
                    {testimonial.metrics.map((metric, i) => (
                      <li key={i} className="text-sm text-gray-700 flex items-center">
                        <Star className="h-4 w-4 text-yellow-500 mr-2" />
                        {metric}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories in Detail
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Deep dives into how AutoConnect transformed automotive businesses
            </p>
          </motion.div>

          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.3 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                      <study.icon className="h-6 w-6 text-white" />
                    </div>
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                      {study.category}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{study.title}</h3>
                  <p className="text-lg text-gray-600 mb-8">{study.description}</p>

                  {/* Key Metrics */}
                  <div className="bg-gray-50 p-6 rounded-lg mb-8">
                    <h4 className="font-semibold text-gray-900 mb-4">Key Results</h4>
                    <div className="grid grid-cols-3 gap-4">
                      {Object.entries(study.metrics).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-2xl font-bold text-blue-600">{value}</div>
                          <div className="text-sm text-gray-600 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Challenges & Solutions */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Challenges</h4>
                      <ul className="space-y-2">
                        {study.challenges.map((challenge, i) => (
                          <li key={i} className="text-sm text-gray-700 flex items-start">
                            <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-2"></div>
                            {challenge}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Solutions</h4>
                      <ul className="space-y-2">
                        {study.solutions.map((solution, i) => (
                          <li key={i} className="text-sm text-gray-700 flex items-start">
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-2"></div>
                            {solution}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-105 flex items-center space-x-2">
                    <span>Read Full Case Study</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <img 
                    src={study.image}
                    alt={study.title}
                    className="w-full h-80 object-cover rounded-xl shadow-lg"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Join Our Growing Community
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              See why 250+ automotive businesses across MENA trust AutoConnect for their CX transformation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2">
                <span>Request Demo</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200 flex items-center justify-center space-x-2">
                <span>View More Case Studies</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Customers;