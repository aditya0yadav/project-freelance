import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import {
  Home as HomeIcon,
  Factory,
  Tractor,
  Building,
  Landmark,
  Plane,
  Film,
  MapPin,
  TrendingUp,
  Users,
  Award,
  Clock,
  CheckCircle,
  ArrowRight,
  Star,
  Zap,
  Target
} from 'lucide-react';

const Home = () => {
  const { scrollY } = useScroll();

  // Simplified parallax - only essential transforms
  const heroY = useTransform(scrollY, [0, 800], [0, -100]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0.3]);

  // Simplified intersection observers with higher threshold for better performance
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [servicesRef, servicesInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [whatWeDoRef, whatWeDoInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [industrialRef, industrialInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [airportRef, airportInView] = useInView({ threshold: 0.1, triggerOnce: true });

  const services = [
    {
      icon: Landmark,
      title: 'Acquisition Land',
      description: 'Acquiring land involves navigating complex processes that require a deep understanding of zoning laws, land-use planning, environmental regulations, and market dynamics. At SGB Group, we provide expert guidance to ensure seamless acquisition of the right land at the right price. Our team performs in-depth due diligence, including legal verification, feasibility studies, and risk assessments to help you make confident investment decisions and unlock maximum value from your purchase.',
      image: 'https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'bg-black/40'
    },
    {
      icon: HomeIcon,
      title: 'Residential Plots',
      description: 'Our residential plots are strategically located in developed sectors of the Yamuna Expressway, offering access to premium infrastructure, modern amenities, and tranquil living environments. These plots are perfect for families looking to build their dream homes or investors seeking long-term capital appreciation. Whether you prefer a compact plot for a cozy home or a larger one for a luxurious villa, we offer a wide range of sizes to suit diverse lifestyle needs.',
      image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'bg-black/40'
    },
    {
      icon: Tractor,
      title: 'Farming Land',
      description: 'Our farming lands are located in fertile zones ideal for diverse agricultural purposes such as crop cultivation, dairy farming, organic farming, and livestock management. These plots offer high productivity, good irrigation facilities, and connectivity to major rural markets. With growing demand for sustainable food sources and agri-business opportunities, investing in farming land ensures long-term returns and supports ecological balance.',
      image: 'https://images.pexels.com/photos/974314/pexels-photo-974314.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'bg-black/40'
    },
    {
      icon: Factory,
      title: 'Industrial Plots',
      description: 'Industrial plots offered by us are situated in designated industrial zones and special economic areas developed to boost manufacturing and logistics. These plots are suitable for warehouses, factories, logistics hubs, and production units, with access to wide roads, power supply, water facilities, and government incentives. Ideal for MSMEs and large-scale industries looking to expand operations in North India’s most promising corridor.',
      image: 'https://images.pexels.com/photos/4476374/pexels-photo-4476374.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'bg-black/40'
    },
    {
      icon: Building,
      title: 'Semi-Commercial Plots',
      description: 'Semi-commercial plots provide the flexibility of developing both residential and commercial structures on the same parcel of land. Whether it’s a residential complex with ground-floor retail or small office spaces above living units, these plots are highly versatile. Located in mixed-use zones, they attract both investors and business owners seeking long-term rental income and business-friendly surroundings with excellent footfall.',
      image: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'bg-black/40'
    }
  ];

  const whatWeDoItems = [
    { icon: HomeIcon, text: 'Residential Plots', color: 'text-blue-600' },
    { icon: Building, text: 'Semi-Commercial Plots', color: 'text-green-600' },
    { icon: Tractor, text: 'Farming Land', color: 'text-yellow-600' },
    { icon: Factory, text: 'Industrial Plots', color: 'text-red-600' },
  ];

  const airportFeatures = [
    'India\'s largest upcoming airport',
    '6 runways planned for maximum capacity',
    'Over 5,000 acres of development area',
    'Opening April 17, 2025',
    'IATA code "DXN" assigned',
    'Net-zero emissions goal'
  ];

  // Simplified animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background with simplified parallax */}
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 z-0"
        >
          <div
            className="w-full h-full bg-cover bg-center bg-fixed"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url('https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=1920')`
            }}
          />
        </motion.div>

        {/* Simplified background elements */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <div className="absolute top-20 left-20 w-32 h-32 bg-red-500/10 rounded-full blur-xl animate-pulse" />
          <div className="absolute bottom-40 right-32 w-24 h-24 bg-blue-500/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
            }}
          >
            <motion.h1
              className="text-5xl sm:text-6xl lg:text-8xl font-bold text-white mb-8 leading-tight"
              variants={fadeInUp}
              transition={{ duration: 0.8 }}
            >
              Welcome To{' '}
              <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                SGB Group
              </span>
            </motion.h1>

            <motion.p
              className="text-xl sm:text-2xl lg:text-3xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed"
              variants={fadeInUp}
              transition={{ duration: 0.8 }}
            >
              We have invited you to Yamuna Expressway with SGB Group of Real Estate
            </motion.p>
          </motion.div>
        </div>

        {/* Simplified scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section
        ref={whatWeDoRef}
        className="py-20 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial="hidden"
              animate={whatWeDoInView ? "visible" : "hidden"}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
              }}
            >
              <motion.h2
                className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8"
                variants={slideInLeft}
                transition={{ duration: 0.6 }}
              >
                What <span className="text-red-600">We Do</span>
              </motion.h2>

              <motion.p
                className="text-lg text-gray-600 mb-10 leading-relaxed"
                variants={slideInLeft}
                transition={{ duration: 0.6 }}
              >
                At SGB Group Of Real Estate, we understand that real estate transactions can be
                daunting and stressful. That's why we go above and beyond to ensure that our
                clients have a seamless and hassle-free experience.
              </motion.p>

              <div className="space-y-6">
                {whatWeDoItems.map((item, index) => (
                  <motion.div
                    key={item.text}
                    variants={slideInLeft}
                    transition={{ duration: 0.6 }}
                    className="flex items-center space-x-4 group hover:transform hover:translate-x-2 transition-transform duration-300"
                  >
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r from-gray-100 to-gray-200 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className={`h-6 w-6 ${item.color}`} />
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-lg font-semibold text-gray-800 group-hover:text-red-600 transition-colors duration-300">
                        {item.text}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial="hidden"
              animate={whatWeDoInView ? "visible" : "hidden"}
              variants={slideInRight}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
                <img
                  src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Modern Home"
                  className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Premium Properties</h3>
                  <p className="text-gray-200">Your dream home awaits</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section
        id="services"
        ref={servicesRef}
        className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
            }}
            className="text-center mb-16"
          >
            <motion.h2
              className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              Our <span className="text-red-600">Services</span>
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-4"
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              Best Plot In Yamuna Expressway
            </motion.p>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-400 mx-auto rounded-full"
              variants={fadeIn}
              transition={{ duration: 0.8 }}
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial="hidden"
                animate={servicesInView ? "visible" : "hidden"}
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden bg-white rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col"
              >
                {/* Image */}
                <div className="relative overflow-hidden h-48 flex-shrink-0">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                    {React.createElement(service.icon, { className: 'h-6 w-6 text-white' })}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col justify-between h-full">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-6">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>


        </div>
      </section>

      {/* Industrial Plots Section */}
      <section
        ref={industrialRef}
        className="relative py-32 overflow-hidden"
      >
        {/* Static background for better performance */}
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center bg-fixed"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url('https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=1920')`
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            animate={industrialInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
            }}
          >
            <motion.h2
              className="text-4xl lg:text-6xl font-bold text-white mb-6"
              variants={fadeInUp}
              transition={{ duration: 0.8 }}
            >
              Industrial Plot in{' '}
              <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                Yamuna & Greater Noida
              </span>
            </motion.h2>

            <motion.p
              className="text-xl lg:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto"
              variants={fadeInUp}
              transition={{ duration: 0.8 }}
            >
              You get very low price industrial plot near Yamuna expressway
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              variants={fadeInUp}
              transition={{ duration: 0.8 }}
            >
              <Link
                to="/contact"
                className="group relative overflow-hidden bg-gradient-to-r from-red-600 to-red-700 text-white px-10 py-4 rounded-full text-lg font-bold shadow-2xl hover:shadow-red-500/25 hover:scale-105 transition-all duration-300"
              >
                <span className="relative z-10 flex items-center">
                  ENQUIRY NOW
                  <Zap className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                </span>
              </Link>

              <Link
                to="/about"
                className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-700 text-white px-10 py-4 rounded-full text-lg font-bold shadow-2xl hover:shadow-blue-500/25 hover:scale-105 transition-all duration-300"
              >
                <span className="relative z-10 flex items-center">
                  ABOUT US
                  <Target className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Noida International Airport Section */}
      <section
        ref={airportRef}
        className="py-20 bg-gradient-to-br from-white via-blue-50 to-white relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate={airportInView ? "visible" : "hidden"}
            variants={fadeInUp}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-blue-600">Noida International</span> Airport
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <motion.div
              initial="hidden"
              animate={airportInView ? "visible" : "hidden"}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
              }}
            >
              <motion.p
                className="text-lg text-gray-600 mb-8 leading-relaxed"
                variants={slideInLeft}
                transition={{ duration: 0.6 }}
              >
                Set to be India's largest airport in Jewar along the Yamuna Expressway.
                Over 5,000 acres with sustainability focus and world-class infrastructure.
              </motion.p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {airportFeatures.map((feature, index) => (
                  <motion.div
                    key={feature}
                    variants={slideInLeft}
                    transition={{ duration: 0.6 }}
                    className="flex items-center space-x-3 group"
                  >
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Star className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-gray-700 group-hover:text-blue-600 transition-colors duration-300">
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                variants={slideInLeft}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-100"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">Key Highlights</h3>
                <p className="text-gray-600">
                  First flight test in December 2024 • IATA code "DXN" •
                  Launch airlines: IndiGo, Akasa Air • Built with net-zero emissions goal
                </p>
              </motion.div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial="hidden"
              animate={airportInView ? "visible" : "hidden"}
              variants={slideInRight}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
                <img
                  src="https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Airport Development"
                  className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Future Ready Infrastructure</h3>
                  <p className="text-gray-200">Opening April 17, 2025</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;