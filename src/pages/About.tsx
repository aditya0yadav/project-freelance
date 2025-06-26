import React from 'react';
import { Target, Eye, MapPin, Building, Users, Award, Zap, TrendingUp, Shield, Clock } from 'lucide-react';

const About = () => {
  const sectors = {
    residential: ['18', '20', '17', '17A', '22D'],
    industrial: ['28', '29', '32', '33'],
  };

  const stats = [
    { icon: Users, number: '500+', label: 'Happy Clients', color: 'from-blue-500 to-blue-600' },
    { icon: Award, number: '10+', label: 'Years Experience', color: 'from-green-500 to-green-600' },
    { icon: MapPin, number: '1000+', label: 'Properties Sold', color: 'from-red-500 to-red-600' },
    { icon: Clock, number: '24/7', label: 'Support Available', color: 'from-purple-500 to-purple-600' },
  ];

  const values = [
    {
      icon: Shield,
      title: 'Trust & Integrity',
      description: 'We build lasting relationships through honest and transparent dealings.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Leveraging cutting-edge technology to provide superior real estate solutions.',
      color: 'from-yellow-500 to-orange-600'
    },
    {
      icon: TrendingUp,
      title: 'Excellence',
      description: 'Committed to delivering exceptional results that exceed expectations.',
      color: 'from-green-500 to-green-600'
    },
  ];

  return (
    <div className="pt-16 lg:pt-20 overflow-x-hidden">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center bg-fixed" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url('https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=1920')` }}>
        <div className="absolute top-20 left-20 w-32 h-32 bg-red-500/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-40 right-32 w-24 h-24 bg-blue-500/10 rounded-full blur-xl animate-pulse" />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold mb-8 leading-tight">
            Welcome To <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">SGB Group</span>
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
            We have invited you to Yamuna Expressway with SGB Group of Real Estate
          </p>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center group">
                <div className={`w-20 h-20 mx-auto mb-4 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                Our Story & <span className="text-red-600">Vision</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At SGB Group Of Real Estate, we understand that real estate transactions can be daunting and stressful...
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our team of experienced agents is dedicated to understanding your unique needs...
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {values.map((value) => (
                  <div key={value.title} className="text-center group">
                    <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${value.color} rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                      <value.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{value.title}</h3>
                    <p className="text-sm text-gray-600">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="About Us"
                className="w-full h-96 object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-bold mb-2">Excellence in Service</h3>
                <p className="text-gray-200">Building dreams, creating futures</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
