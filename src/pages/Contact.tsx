import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  Calendar,
  Users,
  Building,
  MessageSquare,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    jobTitle: '',
    businessType: '',
    dealerships: '',
    challenges: '',
    timeline: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const offices = [
    {
      city: 'Dubai',
      country: 'UAE',
      address: 'DMCC Business Centre, AG Tower',
      phone: '+971 4 123 4567',
      email: 'dubai@autoconnect.com',
      timezone: 'GMT+4',
      hours: '9:00 AM - 6:00 PM (Sun - Thu)',
      icon: MapPin,
      image: 'https://www.visitdubai.com/-/media/images/leisure/detail-pages/explore-dubai/1-3-dubai-neighbourhoods-t34/dubai-neighborhood-business-bay.jpg?rev=d940b398612f40179ba13112e1150898&cx=0.53&cy=0.4&cw=1556&ch=690?auto=compress'
    },
    {
      city: 'Cairo',
      country: 'Egypt',
      address: '95D, El-Marghany St., Heliopolis',
      phone: '+20 2 1234 5678',
      email: 'cairo@autoconnect.com',
      timezone: 'GMT+2',
      hours: '9:00 AM - 6:00 PM (Sun - Thu)',
      icon: MapPin,
      image: 'https://dar.com/CMS/Content/ResizedImages/1287x10000xi/190206101948048~hero-image.jpg?auto=compress'
    }
  ];

  const contactOptions = [
    {
      icon: Calendar,
      title: 'Book a Demo',
      description: 'Schedule a personalized demo to see AutoConnect in action',
      action: 'Schedule Demo',
      color: 'blue'
    },
    {
      icon: MessageSquare,
      title: 'Live Chat',
      description: 'Chat with our experts for immediate assistance',
      action: 'Start Chat',
      color: 'green'
    },
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Speak directly with our automotive CX specialists',
      action: 'Call Now',
      color: 'black'
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
              Ready to Transform Your
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {' '}Customer Experience?
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect with our automotive CX experts to discover how AutoConnect 
              can revolutionize your customer journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactOptions.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg border hover:shadow-xl transition-shadow text-center"
              >
                <div className={`bg-${option.color}-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <option.icon className={`h-8 w-8 text-${option.color}-600`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{option.title}</h3>
                <p className="text-gray-600 mb-6">{option.description}</p>
                <button className={`bg-gradient-to-r from-${option.color}-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2 mx-auto`}>
                  <span>{option.action}</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Request Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Request a Personalized Demo
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                See AutoConnect in action with a customized demonstration tailored to your 
                automotive business needs and use cases.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Custom Demo Environment</h4>
                    <p className="text-gray-600">Demo configured with your brand and sample data</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Arabic UX Preview</h4>
                    <p className="text-gray-600">Experience our native Arabic interface and RTL design</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Integration Discussion</h4>
                    <p className="text-gray-600">Review compatibility with your existing systems</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">ROI Calculator</h4>
                    <p className="text-gray-600">Personalized ROI projections for your business</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">What happens next?</h4>
                <ol className="space-y-2 text-sm text-gray-700">
                  <li>1. We'll contact you within 24 hours to schedule your demo</li>
                  <li>2. Our team will prepare a customized demonstration</li>
                  <li>3. 60-minute interactive demo session with Q&A</li>
                  <li>4. Follow-up with detailed proposal and next steps</li>
                </ol>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Business Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Job Title
                    </label>
                    <input
                      type="text"
                      name="jobTitle"
                      value={formData.jobTitle}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Business Type *
                    </label>
                    <select
                      name="businessType"
                      value={formData.businessType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    >
                      <option value="">Select Type</option>
                      <option value="oem">OEM/Manufacturer</option>
                      <option value="dealership">Dealership Group</option>
                      <option value="service-center">Service Center</option>
                      <option value="independent">Independent Dealer</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Number of Dealerships
                    </label>
                    <select
                      name="dealerships"
                      value={formData.dealerships}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select Range</option>
                      <option value="1-5">1-5</option>
                      <option value="6-25">6-25</option>
                      <option value="26-100">26-100</option>
                      <option value="100+">100+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Primary CX Challenges
                  </label>
                  <select
                    name="challenges"
                    value={formData.challenges}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select Primary Challenge</option>
                    <option value="lead-conversion">Lead Conversion</option>
                    <option value="service-communication">Service Communication</option>
                    <option value="customer-retention">Customer Retention</option>
                    <option value="arabic-support">Arabic Language Support</option>
                    <option value="system-integration">System Integration</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Implementation Timeline
                  </label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select Timeline</option>
                    <option value="immediate">Immediate (within 30 days)</option>
                    <option value="short-term">Short-term (1-3 months)</option>
                    <option value="medium-term">Medium-term (3-6 months)</option>
                    <option value="long-term">Long-term (6+ months)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Information
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="Tell us about your specific needs, current systems, or any questions..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Request Demo</span>
                </button>

                <p className="text-sm text-gray-500 text-center">
                  By submitting this form, you agree to receive communications from AutoConnect. 
                  We respect your privacy and will never share your information.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Regional Offices */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Visit Our Regional Offices
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meet our team in person at our MENA headquarters
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={office.city}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <img 
                  src={office.image}
                  alt={`${office.city} office`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <MapPin className="h-6 w-6 text-blue-600 mr-3" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{office.city}, {office.country}</h3>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <p className="text-gray-700">{office.address}</p>
                    <div className="flex items-center text-gray-600">
                      <Phone className="h-4 w-4 mr-2" />
                      <span>{office.phone}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Mail className="h-4 w-4 mr-2" />
                      <span>{office.email}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>{office.hours} ({office.timezone})</span>
                    </div>
                  </div>

                  <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-105 flex items-center space-x-2">
                    <span>Get Directions</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;