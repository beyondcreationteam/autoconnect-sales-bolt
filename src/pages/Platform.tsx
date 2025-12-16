import React from 'react';
import { motion } from 'framer-motion';
import { 
  Layers, 
  Zap, 
  Shield, 
  Globe, 
  BarChart3, 
  Users, 
  Settings, 
  ArrowRight,
  CheckCircle,
  Database,
  Smartphone,
  Brain
} from 'lucide-react';

const Platform = () => {
  const platformLayers = [
    {
      icon: Database,
      title: 'Data Integration Layer',
      description: 'Seamless connectivity with existing DMS, CRM, and business systems',
      features: ['Real-time data sync', 'API-first architecture', 'Zero downtime migration']
    },
    {
      icon: Brain,
      title: 'AI-Powered Analytics',
      description: 'Intelligent insights and predictive customer behavior modeling',
      features: ['Predictive analytics', 'Customer sentiment analysis', 'Automated recommendations']
    },
    {
      icon: Smartphone,
      title: 'Omnichannel Orchestration',
      description: 'Unified customer experience across all touchpoints and channels',
      features: ['Multi-channel coordination', 'Consistent messaging', 'Context preservation']
    }
  ];

  const capabilities = [
    { icon: Zap, title: '90-Day Deployment', value: '60% faster than competitors' },
    { icon: Shield, title: 'Enterprise Security', value: 'SOC2 + GCC compliant' },
    { icon: Globe, title: 'Regional Expertise', value: 'Arabic-first design' },
    { icon: Users, title: 'Scalable Architecture', value: 'Handles 10M+ interactions/month' }
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
              The Complete CX Orchestration
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {' '}Platform
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Built from the ground up for automotive excellence in MENA markets. 
              Seamless integration, intelligent orchestration, and measurable results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Platform Architecture */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Three-Layer Architecture
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A robust, scalable platform designed for enterprise automotive operations
            </p>
          </motion.div>

          <div className="space-y-8">
            {platformLayers.map((layer, index) => (
              <motion.div
                key={layer.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex flex-col lg:flex-row items-center gap-12 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="lg:w-1/2">
                  <div className="bg-white rounded-2xl shadow-xl p-8 border">
                    <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                      <layer.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{layer.title}</h3>
                    <p className="text-gray-600 mb-6">{layer.description}</p>
                    <ul className="space-y-3">
                      {layer.features.map((feature, i) => (
                        <li key={i} className="flex items-center space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <img 
                    src={`https://images.pexels.com/photos/${
                      index === 0 ? '546819' : index === 1 ? '8386440' : '3182796'
                    }/pexels-photo-${
                      index === 0 ? '546819' : index === 1 ? '8386440' : '3182796'
                    }.jpeg?auto=compress&cs=tinysrgb&w=800`}
                    alt={layer.title}
                    className="w-full h-80 object-cover rounded-xl shadow-lg"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Capabilities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Platform Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Built for performance, security, and scale in automotive environments
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg text-center"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <capability.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{capability.title}</h3>
                <p className="text-blue-600 font-medium">{capability.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                No Rip-and-Replace Required
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                AutoConnect integrates seamlessly with your existing DMS, CRM, and business systems. 
                Our API-first architecture ensures smooth deployment without disrupting operations.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span className="text-gray-700">Compatible with 50+ automotive DMS platforms</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span className="text-gray-700">Real-time bidirectional data synchronization</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span className="text-gray-700">Zero downtime deployment process</span>
                </div>
              </div>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-105 flex items-center space-x-2">
                <span>View Integration Catalog</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img 
                src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="System integration dashboard"
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Platform;