import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MessageSquare, 
  BarChart3, 
  Users, 
  Zap, 
  Globe, 
  Shield, 
  CheckCircle, 
  ArrowRight,
  Brain,
  Smartphone,
  Settings,
  Database
} from 'lucide-react';

const Features = () => {
  const [activeTab, setActiveTab] = useState(0);

  const featureTabs = [
    {
      id: 'customer-journey',
      title: 'Customer Journey Orchestration',
      icon: Users,
      description: 'Map, optimize, and automate every touchpoint in the automotive customer lifecycle',
      features: [
        'Visual journey mapping with drag-and-drop interface',
        'Real-time journey analytics and optimization',
        'Automated trigger-based communications',
        'Cross-channel experience consistency',
        'Arabic and English journey templates'
      ],
      metrics: ['65% increase in customer satisfaction', '40% reduction in service response time'],
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'commerce',
      title: 'Automotive E-Commerce',
      icon: MessageSquare,
      description: 'Give customers a smooth, flexible path from build to buy',
      features: [
        'Seamless End-to-End Flow: From vehicle configuration to confirmed order in one smooth journey',
        'Multiple Buying Paths: Direct purchase, reservation, or quotation—whatever the customer prefers.',
        'Flexible Payments: Integrated gateways for card, split payments, bank transfer, and more.'
      ],
      metrics: ['85% qualified leads', '3x faster sales cylce'],
      image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
      {
      id: 'Financing & Insurance',
      title: 'Financing & Insurance',
      icon: BarChart3,
      description: 'Give customers a smoother buying journey from application to approval.',
      features: [
        'Real-time Financing Options: Instant offers powered by a configurable financing engine.',
        'Real-Time Partner Integration: Connect directly with banks and finance partners for instant approvals.',
        'Fully Digital Process: Credit application, document uploads, and status tracking—all online',
        'Fraud detection and prevention'
      ],
      metrics: ['92% prediction accuracy', '30% improvement in customer retention'],
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
      {
      id: 'After-Sales Experience',
      title: 'After-Sales Experience',
      icon: BarChart3,
      description: 'Give customers a smoother buying journey from application to approval.',
      features: [
        'Effortless Service Booking: Schedule appointments with real-time availability.',
        'Convenience at Every Step: Pickup & delivery, courtesy vehicles, and one-click invoice approval.',
        'All-in-One Service Hub: Access full vehicle history, make digital payments, and share feedback.',
        'Shop Parts & Accessories Online: Seamless e-commerce for parts & accessories.'
      ],
      metrics: ['92% prediction accuracy', '30% improvement in customer retention'],
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'analytics',
      title: 'Advanced Analytics & AI',
      icon: BarChart3,
      description: 'Predictive insights and customer behavior analysis for automotive businesses',
      features: [
        'Real-time customer sentiment analysis',
        'Predictive maintenance recommendations',
        'Customer lifetime value modeling',
        'Churn prediction and prevention',
        'Performance dashboards with Arabic localization'
      ],
      metrics: ['92% prediction accuracy', '30% improvement in customer retention'],
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    
    {
      id: 'automation',
      title: 'Intelligent Automation',
      icon: Zap,
      description: 'Smart workflows and automated responses that learn from customer interactions',
      features: [
        'AI-powered chatbots with Arabic NLP',
        'Automated appointment scheduling',
        'Smart routing and escalation',
        'Dynamic content personalization',
        'Workflow automation with business rules'
      ],
      metrics: ['70% automation rate', '50% reduction in manual tasks'],
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];
  const coreCapabilities = [
    {
      icon: Globe,
      title: 'Arabic-First Design',
      description: 'Native RTL support, cultural customization, and regional compliance'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'SOC2 compliance, data encryption, and GCC regulatory adherence'
    },
    {
      icon: Database,
      title: 'Seamless Integration',
      description: 'API-first architecture with 50+ pre-built automotive integrations'
    },
    {
      icon: Smartphone,
      title: 'Mobile-First Experience',
      description: 'Responsive design optimized for MENA mobile usage patterns'
    }
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
              Powerful Features for
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {' '}Automotive Excellence
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every feature designed with MENA automotive markets in mind. 
              From Arabic UX to DMS integration, we've got you covered.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Feature Tabs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center mb-12 border-b border-gray-200">
            {featureTabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(index)}
                className={`flex items-center space-x-2 px-6 py-4 border-b-2 font-medium transition-colors ${
                  activeTab === index
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <tab.icon className="h-5 w-5" />
                <span className="hidden sm:inline">{tab.title}</span>
              </button>
            ))}
          </div>

          {/* Active Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {featureTabs[activeTab].title}
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  {featureTabs[activeTab].description}
                </p>
                
                <div className="space-y-4 mb-8">
                  {featureTabs[activeTab].features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-500 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-blue-50 p-6 rounded-lg mb-8">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Metrics</h4>
                  <ul className="space-y-2">
                    {featureTabs[activeTab].metrics.map((metric, index) => (
                      <li key={index} className="text-blue-700 font-medium">{metric}</li>
                    ))}
                  </ul>
                </div>

                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-105 flex items-center space-x-2">
                  <span>Explore This Feature</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
              
              <div>
                <img 
                  src={featureTabs[activeTab].image}
                  alt={featureTabs[activeTab].title}
                  className="w-full h-96 object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Built for MENA Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Core capabilities that make AutoConnect the perfect fit for automotive businesses in the region
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreCapabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow"
              >
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <capability.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{capability.title}</h3>
                <p className="text-gray-600 text-sm">{capability.description}</p>
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
              Ready to Experience These Features?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              See how AutoConnect's features can transform your automotive customer experience
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2">
                <span>Request Demo</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200 flex items-center justify-center space-x-2">
                <span>View Pricing</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Features;