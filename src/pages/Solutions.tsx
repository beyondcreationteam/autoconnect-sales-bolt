import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Store, 
  Wrench, 
  ArrowRight, 
  CheckCircle,
  Users,
  BarChart3,
  Clock,
  Star
} from 'lucide-react';

const Solutions = () => {
  const solutions = [
    {
      id: 'oem',
      icon: Building2,
      title: 'OEM Solutions',
      description: 'Comprehensive CX orchestration for automotive manufacturers',
      challenges: [
        'Managing multi-brand dealership networks',
        'Ensuring consistent customer experience across regions',
        'Coordinating warranty and service communications'
      ],
      features: [
        'Multi-brand campaign management',
        'Dealership performance analytics',
        'Regional compliance automation',
        'Brand consistency enforcement',
        'Arabic localization for all touchpoints'
      ],
      results: {
        satisfaction: '96%',
        efficiency: '+45%',
        coverage: '15+ brands'
      },
      image: 'https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'dealership',
      icon: Store,
      title: 'Dealership Solutions',
      description: 'End-to-end customer experience management for automotive dealers',
      challenges: [
        'Converting leads to sales effectively',
        'Managing service appointments and follow-ups',
        'Building long-term customer relationships'
      ],
      features: [
        'Lead nurturing automation',
        'Service reminder management',
        'Customer loyalty programs',
        'Sales process optimization',
        'WhatsApp Business integration'
      ],
      results: {
        conversion: '+38%',
        retention: '89%',
        response: '2min avg'
      },
      image: 'https://images.pexels.com/photos/97075/pexels-photo-97075.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'service',
      icon: Wrench,
      title: 'Service Centers',
      description: 'Streamlined service operations and customer communication',
      challenges: [
        'Scheduling and managing service appointments',
        'Keeping customers informed during service',
        'Following up on service satisfaction'
      ],
      features: [
        'Automated appointment booking',
        'Real-time service updates',
        'Customer feedback collection',
        'Technician scheduling optimization',
        'Parts availability notifications'
      ],
      results: {
        satisfaction: '94%',
        utilization: '+32%',
        nps: '8.7/10'
      },
      image: 'https://images.pexels.com/photos/13065/pexels-photo-13065.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const industryStats = [
    { icon: Users, value: '250+', label: 'Active Dealerships', color: 'blue' },
    { icon: Building2, value: '15+', label: 'Automotive Brands', color: 'purple' },
    { icon: BarChart3, value: '35%', label: 'Average ROI Increase', color: 'green' },
    { icon: Clock, value: '90 days', label: 'Average Deployment', color: 'orange' }
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
              Tailored Solutions for
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {' '}Every Automotive Business
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From OEMs to service centers, AutoConnect delivers specialized CX solutions 
              designed for each segment of the automotive industry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industry Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {industryStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className={`bg-${stat.color}-100 p-3 rounded-full`}>
                    <stat.icon className={`h-6 w-6 text-${stat.color}-600`} />
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Detail */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.id}
                id={solution.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                    <solution.icon className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{solution.title}</h2>
                  <p className="text-xl text-gray-600 mb-8">{solution.description}</p>

                  {/* Challenges */}
                  <div className="mb-8">
                    <h3 className="font-semibold text-gray-900 mb-4">Common Challenges</h3>
                    <ul className="space-y-2">
                      {solution.challenges.map((challenge, i) => (
                        <li key={i} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                          <span className="text-gray-700">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Features */}
                  <div className="mb-8">
                    <h3 className="font-semibold text-gray-900 mb-4">AutoConnect Solutions</h3>
                    <ul className="space-y-3">
                      {solution.features.map((feature, i) => (
                        <li key={i} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Results */}
                  <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
                    <h4 className="font-semibold text-gray-900 mb-4">Typical Results</h4>
                    <div className="grid grid-cols-3 gap-4">
                      {Object.entries(solution.results).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-2xl font-bold text-blue-600">{value}</div>
                          <div className="text-xs text-gray-600 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-105 flex items-center space-x-2">
                    <span>Learn More</span>
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <img 
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-96 object-cover rounded-xl shadow-lg"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Advantage */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Built for MENA Automotive Markets
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Every solution is designed with deep understanding of regional preferences, 
                regulations, and business practices.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Arabic-First Design</h3>
                    <p className="text-gray-600">Native RTL support, cultural customization, and Arabic NLP</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">GCC Compliance</h3>
                    <p className="text-gray-600">Built-in adherence to regional data protection and automotive regulations</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Local Expertise</h3>
                    <p className="text-gray-600">Regional support teams and automotive industry specialists</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img 
                src="https://images.pexels.com/photos/97077/pexels-photo-97077.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="MENA automotive market"
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />
            </motion.div>
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
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Discover how AutoConnect can address your specific automotive industry challenges
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Schedule Consultation</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/customers"
                className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <span>View Case Studies</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;