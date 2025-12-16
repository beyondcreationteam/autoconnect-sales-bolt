import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  Users, 
  Globe, 
  Target, 
  ArrowRight,
  MapPin,
  Linkedin,
  Mail,
  Calendar,
  Building,
  Heart,
  Zap
} from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, value: '250+', label: 'Satisfied Customers', color: 'blue' },
    { icon: Building, value: '15+', label: 'Automotive Brands', color: 'purple' },
    { icon: Globe, value: '8', label: 'MENA Countries', color: 'green' },
    { icon: Calendar, value: '2019', label: 'Founded', color: 'orange' }
  ];

  const values = [
    {
      icon: Target,
      title: 'Customer-Centric Innovation',
      description: 'Every feature and solution we build starts with understanding our customers\' unique challenges and goals.'
    },
    {
      icon: Heart,
      title: 'Cultural Excellence',
      description: 'Deep respect for regional culture, language, and business practices drives our approach to product development.'
    },
    {
      icon: Zap,
      title: 'Rapid Value Delivery',
      description: 'We believe in fast deployment, immediate impact, and continuous value creation for our automotive partners.'
    },
    {
      icon: Award,
      title: 'Quality Without Compromise',
      description: 'Enterprise-grade security, reliability, and performance are non-negotiable in everything we deliver.'
    }
  ];

  const team = [
    {
      name: 'Ahmed Yaseen',
      position: 'Chief Executive Officer',
      bio: 'Former automotive industry executive with 15+ years leading digital transformation initiatives across MENA.',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=300',
      linkedin: '#'
    },
    {
      name: 'Mostafa Yaseen',
      position: 'Chief Technology Officer',
      bio: 'Technology visionary with expertise in enterprise software architecture and Arabic-first digital experiences.',
      image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=300',
      linkedin: '#'
    },
    {
      name: 'Eyad',
      position: 'VP of Customer Success',
      bio: 'Customer experience expert focused on delivering exceptional outcomes for automotive businesses.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=300',
      linkedin: '#'
    },
    {
      name: 'Name',
      position: 'Head of Regional Operations',
      bio: 'Regional operations leader with deep understanding of GCC automotive market dynamics.',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=300',
      linkedin: '#'
    }
  ];

  const timeline = [
    {
      year: '2019',
      title: 'Company Founded',
      description: 'AutoConnect established with mission to revolutionize automotive CX in MENA region.'
    },
    {
      year: '2020',
      title: 'First Customer Success',
      description: 'Successfully deployed first multi-dealership CX platform for leading automotive group.'
    },
    {
      year: '2021',
      title: 'Regional Expansion',
      description: 'Expanded operations to Dubai and secured partnerships with major automotive brands.'
    },
    {
      year: '2022',
      title: 'Platform Evolution',
      description: 'Launched AI-powered analytics and Arabic-first mobile experience platform.'
    },
    {
      year: '2023',
      title: 'Market Leadership',
      description: 'Achieved 50+ customer milestone and recognized as MENA automotive CX leader.'
    },
    {
      year: '2024',
      title: 'Innovation Focus',
      description: 'Introduced predictive customer insights and advanced automation capabilities.'
    },
      {
      year: '2025',
      title: 'Innovation Focus',
      description: 'Introduced predictive customer insights and advanced automation capabilities.'
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
              Pioneering Automotive CX
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {' '}Innovation in MENA
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Since 2019, we've been dedicated to transforming how automotive businesses 
              connect with their customers across the Middle East and North Africa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
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
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-6">
                To empower automotive businesses across MENA with the world's most 
                culturally intelligent and technically sophisticated customer experience platform.
              </p>
              <p className="text-gray-600">
                We believe that exceptional customer experience should be accessible to every 
                automotive business, regardless of size or technical complexity. Our platform 
                bridges the gap between global-grade technology and regional expertise.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-lg text-gray-700 mb-6">
                To become the definitive standard for automotive customer experience 
                across emerging markets, starting with MENA.
              </p>
              <p className="text-gray-600">
                We envision a future where every automotive touchpoint is personalized, 
                culturally relevant, and seamlessly connected - creating extraordinary 
                experiences that build lasting customer relationships.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide every decision and drive our commitment to excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg border hover:shadow-xl transition-shadow"
              >
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experienced leaders combining automotive industry expertise with technology innovation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg text-center"
              >
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.position}</p>
                <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                <div className="flex justify-center space-x-3">
                  <a href={member.linkedin} className="text-gray-400 hover:text-blue-600 transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Key milestones in our mission to transform automotive customer experience
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-0.5 h-full w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>
            <div className="space-y-12">
              {timeline.map((event, index) => (
                <motion.div
                  key={event.year}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-lg border">
                      <div className="text-2xl font-bold text-blue-600 mb-2">{event.year}</div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{event.title}</h3>
                      <p className="text-gray-600">{event.description}</p>
                    </div>
                  </div>
                  <div className="w-2/12 flex justify-center">
                    <div className="w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                  </div>
                  <div className="w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Regional Presence */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Regional Presence
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Strategically positioned to serve automotive businesses across MENA
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <div className="flex items-center mb-6">
                <MapPin className="h-8 w-8 text-blue-600 mr-3" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Dubai, UAE</h3>
                  <p className="text-gray-600">Regional Headquarters</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                DMCC Business Centre<br/>
                AG Tower<br/>
                Dubai, United Arab Emirates
              </p>
              <div className="text-sm text-gray-500">
                <p>GCC Operations Hub</p>
                <p>Sales & Customer Success</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <div className="flex items-center mb-6">
                <MapPin className="h-8 w-8 text-purple-600 mr-3" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Cairo, Egypt</h3>
                  <p className="text-gray-600">Technology Center</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Heliopolis<br/>
                95D, El-Marghany St.<br/>
                Cairo, Egypt
              </p>
              <div className="text-sm text-gray-500">
                <p>Product Development</p>
                <p>Arabic Localization Hub</p>
              </div>
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
              Ready to Join Our Success Story?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Discover how AutoConnect can transform your automotive customer experience
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2">
                <span>Get Started Today</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200 flex items-center justify-center space-x-2">
                <span>Meet Our Team</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;