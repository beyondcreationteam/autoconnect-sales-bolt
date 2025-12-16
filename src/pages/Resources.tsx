import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Video, 
  FileText, 
  Download, 
  ArrowRight, 
  Calendar,
  Users,
  Clock,
  Tag,
  Search
} from 'lucide-react';

const Resources = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Resources' },
    { id: 'guides', name: 'Implementation Guides' },
    { id: 'whitepapers', name: 'Whitepapers' },
    { id: 'webinars', name: 'Webinars' },
    { id: 'case-studies', name: 'Case Studies' }
  ];

  const resources = [
    {
      id: 1,
      title: 'The Complete Guide to Automotive CX in MENA',
      description: 'Comprehensive guide covering regional preferences, cultural considerations, and best practices for automotive customer experience.',
      category: 'guides',
      type: 'PDF Guide',
      readTime: '25 min read',
      downloadCount: '2.5K+',
      image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['Strategy', 'MENA', 'Best Practices']
    },
    {
      id: 2,
      title: 'DMS Integration Whitepaper: Zero-Disruption Approach',
      description: 'Technical deep-dive into seamless DMS integration methodologies that ensure business continuity.',
      category: 'whitepapers',
      type: 'Technical Whitepaper',
      readTime: '15 min read',
      downloadCount: '1.8K+',
      image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['Integration', 'Technical', 'DMS']
    },
    {
      id: 3,
      title: 'Arabic UX Design Principles for Automotive Apps',
      description: 'Essential design principles for creating culturally relevant and effective Arabic user experiences.',
      category: 'guides',
      type: 'Design Guide',
      readTime: '20 min read',
      downloadCount: '3.2K+',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['UX Design', 'Arabic', 'Mobile']
    },
    {
      id: 4,
      title: 'ROI Calculator: Measuring CX Investment Returns',
      description: 'Interactive tool to calculate potential ROI from customer experience improvements in automotive businesses.',
      category: 'guides',
      type: 'Interactive Tool',
      readTime: '10 min use',
      downloadCount: '1.5K+',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['ROI', 'Calculator', 'Business Case']
    },
    {
      id: 5,
      title: 'Webinar: Future of Automotive CX in GCC Markets',
      description: 'Expert panel discussion on emerging trends, technologies, and opportunities in Gulf automotive markets.',
      category: 'webinars',
      type: 'Live Webinar',
      readTime: '60 min watch',
      downloadCount: '950+',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['Trends', 'GCC', 'Future']
    },
    {
      id: 6,
      title: 'Premium Auto Group: 45-Dealership Transformation',
      description: 'Detailed case study of multi-brand, multi-location CX transformation across 45 dealerships.',
      category: 'case-studies',
      type: 'Case Study',
      readTime: '12 min read',
      downloadCount: '2.1K+',
      image: 'https://images.pexels.com/photos/97050/pexels-photo-97050.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['Multi-Brand', 'Scale', 'Success Story']
    }
  ];

  const featuredResource = {
    title: 'State of Automotive CX in MENA 2025',
    description: 'Comprehensive industry report analyzing customer experience trends, challenges, and opportunities across MENA automotive markets.',
    image: 'https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg?auto=compress&cs=tinysrgb&w=800',
    highlights: [
      '500+ automotive professionals surveyed',
      'Regional market analysis across 8 countries',
      'Actionable insights and recommendations',
      'Exclusive data on customer preferences'
    ]
  };

  const filteredResources = activeCategory === 'all' 
    ? resources 
    : resources.filter(resource => resource.category === activeCategory);

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
              Resources & Insights for
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {' '}Automotive Excellence
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Expert guides, case studies, and tools to help you master customer experience 
              in MENA automotive markets.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search resources..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Resource */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <span className="bg-white bg-opacity-20 text-white text-sm font-medium px-3 py-1 rounded-full">
                    Featured Report
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  {featuredResource.title}
                </h2>
                <p className="text-blue-100 mb-6 text-lg">
                  {featuredResource.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {featuredResource.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      <span className="text-blue-100">{highlight}</span>
                    </li>
                  ))}
                </ul>
                <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-105 flex items-center space-x-2">
                  <Download className="h-5 w-5" />
                  <span>Download Free Report</span>
                </button>
              </div>
              <div>
                <img 
                  src={featuredResource.image}
                  alt={featuredResource.title}
                  className="w-full h-80 object-cover rounded-xl"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredResources.map((resource, index) => (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
              >
                <img 
                  src={resource.image}
                  alt={resource.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
                      {resource.type}
                    </span>
                    <div className="flex items-center text-sm text-gray-500">
                      <Download className="h-4 w-4 mr-1" />
                      {resource.downloadCount}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {resource.description}
                  </p>
                  
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Clock className="h-4 w-4 mr-1" />
                    {resource.readTime}
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {resource.tags.map((tag, i) => (
                      <span key={i} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 flex items-center justify-center space-x-2">
                    <span>Access Resource</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-900 rounded-2xl p-8 md:p-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Stay Updated with Latest Insights
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Get the latest automotive CX insights, trends, and resources delivered to your inbox monthly.
              </p>
              <div className="max-w-md mx-auto flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200">
                  Subscribe
                </button>
              </div>
              <p className="text-sm text-gray-400 mt-4">
                No spam. Unsubscribe anytime.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;