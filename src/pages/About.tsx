import React from 'react';
import { Target, Eye, MapPin, Building, Users, Award, Zap, TrendingUp, Shield, Clock, Phone, Mail, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const sectors = {
    residential: ['18', '20', '17', '17A', '22D'],
    industrial: ['28', '29', '32', '33'],
  };

  const stats = [
    { icon: Users, number: '10000+', label: 'Satisfied Clients', color: 'from-blue-500 to-blue-600' },
    { icon: Award, number: '20+', label: 'Years of Excellence', color: 'from-green-500 to-green-600' },
    { icon: MapPin, number: '5000+', label: 'Properties Delivered', color: 'from-red-500 to-red-600' },
    { icon: Building, number: '100+', label: 'Active Projects', color: 'from-purple-500 to-purple-600' },
  ];

  const values = [
    {
      icon: Shield,
      title: 'Trust & Transparency',
      description: 'Building lasting relationships through honest dealings and complete transparency in all transactions.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Zap,
      title: 'Innovation & Technology',
      description: 'Leveraging cutting-edge technology and innovative solutions to deliver superior real estate experiences.',
      color: 'from-yellow-500 to-orange-600'
    },
    {
      icon: TrendingUp,
      title: 'Market Excellence',
      description: 'Deep market knowledge and strategic insights to maximize value for our clients and investors.',
      color: 'from-green-500 to-green-600'
    },
  ];

  const services = [
    'Property Investment Consulting',
    'Real Estate Development',
    'Property Management Services',
    'Legal Documentation Support',
    'Market Analysis & Valuation',
    'End-to-End Transaction Support'
  ];

  const expertise = [
    {
      title: 'Residential Excellence',
      sectors: sectors.residential,
      description: 'Premium residential developments in prime sectors of Yamuna Expressway'
    },
    {
      title: 'Industrial Solutions',
      sectors: sectors.industrial,
      description: 'Strategic industrial properties for manufacturing and logistics operations'
    }
  ];

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section - Fixed for iOS */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url('https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
            minHeight: '100vh'
          }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-red-500/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-40 right-32 w-24 h-24 bg-blue-500/10 rounded-full blur-xl animate-pulse" />
        
        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold mb-8 leading-tight">
            Welcome To <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">SBP Group</span>
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
            We have invited you to Yamuna Expressway with SBP Group of Real Estate
          </p>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Track Record</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Numbers that reflect our commitment to excellence and client satisfaction
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center group">
                <div className={`w-20 h-20 mx-auto mb-4 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About & Vision Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                About <span className="text-red-600">SBP Group</span>
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                SBP Group stands as a premier real estate development and investment company, specializing in the rapidly growing Yamuna Expressway corridor. With over a decade of experience, we have established ourselves as trusted advisors in the real estate sector.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Our comprehensive approach encompasses residential and industrial real estate solutions, backed by deep market insights and a commitment to delivering exceptional value to our clients and investors.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                {values.map((value) => (
                  <div key={value.title} className="text-center group">
                    <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${value.color} rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                      <value.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{value.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="SBP Group Office"
                  className="w-full h-96 object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Professional Excellence</h3>
                  <p className="text-gray-200">Building tomorrow's landmarks today</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive real estate solutions tailored to your investment goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={service} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">{service}</h3>
                </div>
                <p className="text-gray-600">Professional service with end-to-end support for all your real estate needs.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Expertise</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Specialized knowledge across key sectors of Yamuna Expressway
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {expertise.map((area) => (
              <div key={area.title} className="bg-gray-800/50 rounded-2xl p-8 backdrop-blur-sm border border-gray-700">
                <h3 className="text-2xl font-bold mb-4 text-red-400">{area.title}</h3>
                <p className="text-gray-300 mb-6">{area.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-white">Key Sectors:</h4>
                  <div className="flex flex-wrap gap-2">
                    {area.sectors.map((sector) => (
                      <span key={sector} className="bg-gradient-to-r from-red-500 to-red-600 px-3 py-1 rounded-full text-sm font-medium">
                        Sector {sector}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Location</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strategically positioned along the Yamuna Expressway for easy accessibility
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Visit Our Office</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-6 w-6 text-red-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Address</h4>
                    <p className="text-gray-600">608 6th floor
                      Tradex tower 2 alpha 1
                      commercial belt
                      Gr noida
                      201310 </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="h-6 w-6 text-red-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <p className="text-gray-600">+91-9818319219</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="h-6 w-6 text-red-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">sbpgroupofrealestate@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="h-6 w-6 text-red-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Business Hours</h4>
                    <p className="text-gray-600">Monday - Sunday: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>

              <button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Get Directions
              </button>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.0123456789!2d77.51480102539062!3d28.47271728515625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI4JzIxLjgiTiA3N8KwMzAnNTMuMyJF!5e0!3m2!1sen!2sin!4v1640000000000!5m2!1sen!2sin"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="SBP Group Location"
                  className="w-full h-96"
                />
              </div>
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse" />
                  <span className="text-sm font-semibold text-gray-900">SBP Group Office</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Ready to Invest in Your Future?</h2>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
            Join hundreds of satisfied investors who have trusted SBP Group with their real estate investments
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <button className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Contact Us Today
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;