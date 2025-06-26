import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Target, Eye, MapPin, Building, Users, Award, Zap, TrendingUp, Shield, Clock } from 'lucide-react';

const About = () => {
  const [introRef, introInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [missionRef, missionInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [yeidaRef, yeidaInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [statsRef, statsInView] = useInView({ threshold: 0.3, triggerOnce: true });

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
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 left-20 w-64 h-64 bg-red-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.1, 0.3],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.05, 0.2],
            }}
            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.h1 
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              About{' '}
              <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                SGB Group
              </span>{' '}
              Of Real Estate
            </motion.h1>
            <motion.p 
              className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Building trust through expertise, dedication, and unparalleled service in real estate
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                animate={statsInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <motion.div
                  className={`w-20 h-20 mx-auto mb-4 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <stat.icon className="h-8 w-8 text-white" />
                </motion.div>
                <motion.div 
                  className="text-4xl font-bold text-gray-900 mb-2"
                  initial={{ opacity: 0 }}
                  animate={statsInView ? { opacity: 1 } : {}}
                  transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section ref={introRef} className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={introInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              data-aos="fade-right"
            >
              <motion.h2 
                className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8"
                initial={{ opacity: 0, y: 50 }}
                animate={introInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                Our Story & <span className="text-red-600">Vision</span>
              </motion.h2>
              <motion.p 
                className="text-lg text-gray-600 mb-6 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={introInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                At SGB Group Of Real Estate, we understand that real estate transactions can be 
                daunting and stressful. That's why we go above and beyond to ensure that our 
                clients have a seamless and hassle-free experience.
              </motion.p>
              <motion.p 
                className="text-lg text-gray-600 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={introInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Our team of experienced agents is dedicated to understanding your unique needs 
                and helping you achieve your real estate goals. With years of industry experience 
                and deep knowledge of the Yamuna Expressway region, we are your trusted partner 
                in property investment.
              </motion.p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={introInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                    className="text-center group"
                  >
                    <motion.div
                      className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${value.color} rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <value.icon className="h-6 w-6 text-white" />
                    </motion.div>
                    <h3 className="font-bold text-gray-900 mb-2">{value.title}</h3>
                    <p className="text-sm text-gray-600">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={introInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
              data-aos="fade-left"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="About Us"
                  className="w-full h-96 object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <motion.div
                  className="absolute bottom-6 left-6 text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={introInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <h3 className="text-xl font-bold mb-2">Excellence in Service</h3>
                  <p className="text-gray-200">Building dreams, creating futures</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section ref={missionRef} className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={missionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
            data-aos="fade-up"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-red-600">Mission & Vision</span>
            </h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-400 mx-auto rounded-full"
              initial={{ scaleX: 0 }}
              animate={missionInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={missionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative group"
              data-aos="fade-right"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-red-600/10 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
                <motion.div
                  className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-6"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Target className="h-8 w-8 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Our <span className="text-red-600 border-b-2 border-red-600">Mission</span>
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  To provide exceptional real estate services that exceed our clients' expectations 
                  while maintaining the highest standards of integrity, professionalism, and expertise. 
                  We strive to make every property transaction smooth, transparent, and successful.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={missionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative group"
              data-aos="fade-left"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-blue-600/10 rounded-2xl transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
                <motion.div
                  className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Eye className="h-8 w-8 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Our <span className="text-blue-600 border-b-2 border-blue-600">Vision</span>
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  To become the most trusted and preferred real estate partner in the Yamuna Expressway 
                  region, known for our expertise, reliability, and commitment to client satisfaction. 
                  We envision a future where every property investment creates lasting value.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* YEIDA Focus Section */}
      <section ref={yeidaRef} className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={yeidaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
            data-aos="fade-up"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              YEIDA <span className="text-red-600">Expertise</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized knowledge in key YEIDA sectors for optimal investment opportunities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={yeidaInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative group"
              data-aos="fade-right"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-pink-500/10 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <MapPin className="h-6 w-6 text-red-600 mr-3" />
                  Residential Sectors
                </h3>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {sectors.residential.map((sector, index) => (
                    <motion.div
                      key={sector}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={yeidaInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                      className="bg-gradient-to-r from-red-50 to-red-100 rounded-xl p-4 text-center shadow-md hover:shadow-lg transition-all duration-300 group/card"
                      whileHover={{ scale: 1.05, y: -5 }}
                    >
                      <div className="text-xl font-bold text-red-600 group-hover/card:scale-110 transition-transform">
                        Sector {sector}
                      </div>
                      <div className="text-sm text-gray-600">Residential</div>
                    </motion.div>
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Prime residential plots with plot sizes ranging from 60 to 4000 sqm, 
                  perfect for housing development and family homes.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={yeidaInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative group"
              data-aos="fade-left"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-2xl transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Building className="h-6 w-6 text-blue-600 mr-3" />
                  Industrial Sectors
                </h3>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {sectors.industrial.map((sector, index) => (
                    <motion.div
                      key={sector}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={yeidaInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.6 }}
                      className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-4 text-center shadow-md hover:shadow-lg transition-all duration-300 group/card"
                      whileHover={{ scale: 1.05, y: -5 }}
                    >
                      <div className="text-xl font-bold text-blue-600 group-hover/card:scale-110 transition-transform">
                        Sector {sector}
                      </div>
                      <div className="text-sm text-gray-600">Industrial</div>
                    </motion.div>
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Strategic industrial plots ranging from 300 to 4000+ sqm, 
                  ideal for manufacturing, warehousing, and distribution facilities.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={yeidaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative overflow-hidden rounded-2xl shadow-2xl"
            data-aos="fade-up"
          >
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-16 text-center">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <MapPin className="h-20 w-20 text-gray-500 mx-auto mb-6" />
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-700 mb-4">YEIDA Sectors Interactive Map</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Comprehensive map showing all residential and industrial sectors with detailed 
                information about plot sizes, amenities, and development status.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;