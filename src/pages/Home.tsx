import React, { useEffect, useState, useRef } from 'react';
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
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};
const fadeInContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      ease: 'easeOut'
    }
  }
};


const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);
  const industrialRef = useRef(null);
  const [industrialInView, setIndustrialInView] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) setIndustrialInView(true);
  }, [inView]);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttledScroll);
  }, []);

  // Intersection Observer for animations
  const [visibleSections, setVisibleSections] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, [mounted]);

  const services = [
    {
      icon: Landmark,
      title: 'Acquisition Land',
      description: 'Acquiring land involves navigating complex processes that require a deep understanding of zoning laws, land-use planning, environmental regulations, and market dynamics. At SBP Group, we provide expert guidance to ensure seamless acquisition of the right land at the right price. Our team performs in-depth due diligence, including legal verification, feasibility studies, and risk assessments to help you make confident investment decisions and unlock maximum value from your purchase.',
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
      description: 'Industrial plots offered by us are situated in designated industrial zones and special economic areas developed to boost manufacturing and logistics. These plots are suitable for warehouses, factories, logistics hubs, and production units, with access to wide roads, power supply, water facilities, and government incentives. Ideal for MSMEs and large-scale industries looking to expand operations in North India most promising corridor.',
      image: 'https://images.pexels.com/photos/4476374/pexels-photo-4476374.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'bg-black/40'
    },
    {
      icon: Building,
      title: 'Semi-Commercial Plots',
      description: 'Semi-commercial plots provide the flexibility of developing both residential and commercial structures on the same parcel of land. Whether it a residential complex with ground-floor retail or small office spaces above living units, these plots are highly versatile. Located in mixed-use zones, they attract both investors and business owners seeking long-term rental income and business-friendly surroundings with excellent footfall.',
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

  // Parallax calculations
  const heroTransform = scrollY * 0.5;
  const heroOpacity = Math.max(0.3, 1 - scrollY / 400);

  return (
    <>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-60px) scale(0.8);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(60px) scale(0.8);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.2);
          }
        }

        @keyframes scrollIndicator {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(10px);
          }
        }

        @keyframes planeMove {
          0%, 100% {
            transform: translateX(0) rotate(0deg);
          }
          50% {
            transform: translateX(50px) rotate(10deg);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-fadeInLeft {
          animation: fadeInLeft 0.8s ease-out forwards;
        }

        .animate-fadeInRight {
          animation: fadeInRight 0.8s ease-out forwards;
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out forwards;
        }

        .animate-slideInRight {
          animation: slideInRight 0.8s ease-out forwards;
        }

        .animate-float {
          animation: float 2s ease-in-out infinite;
        }

        .animate-pulse-bg {
          animation: pulse 4s ease-in-out infinite;
        }

        .animate-scroll {
          animation: scrollIndicator 2s ease-in-out infinite;
        }

        .animate-plane {
          animation: planeMove 6s ease-in-out infinite;
        }

        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.2s; }
        .stagger-3 { animation-delay: 0.3s; }
        .stagger-4 { animation-delay: 0.4s; }
        .stagger-5 { animation-delay: 0.5s; }

        .visible {
          opacity: 1;
          transform: translateY(0) translateX(0) scale(1);
        }

        .hidden-animate {
          opacity: 0;
        }

        /* iOS Fixed Background Fix */
        .ios-bg-fix {
          background-attachment: scroll !important;
          -webkit-background-attachment: scroll !important;
        }

        @media (max-width: 768px) {
          .ios-bg-fix {
            background-attachment: scroll;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
          }
        }

        /* Hardware acceleration for smooth animations */
        .hw-accelerate {
          transform: translateZ(0);
          -webkit-transform: translateZ(0);
          will-change: transform;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }

        /* Smooth transitions */
        .smooth-transition {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .service-card {
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), 
                     box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .service-card:hover {
          transform: translateY(-16px) scale(1.02);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }

        .service-card img {
          transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .service-card:hover img {
          transform: scale(1.15);
        }
      `}</style>

      <div className="overflow-x-hidden">
        {/* Hero Section */}
        <section
          id="hero"
          data-animate
          className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
          {/* Background with iOS-friendly parallax */}
          <div
            className="absolute inset-0 z-0 hw-accelerate ios-bg-fix"
            style={{
              transform: `translateY(${heroTransform}px)`,
              opacity: heroOpacity,
              backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url('https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />

          {/* Enhanced background elements */}
          <div className="absolute inset-0 z-10 pointer-events-none">
            <div className="absolute top-20 left-20 w-32 h-32 bg-red-500/10 rounded-full blur-xl animate-pulse-bg" />
            <div className="absolute bottom-40 right-32 w-24 h-24 bg-blue-500/10 rounded-full blur-xl animate-pulse-bg stagger-2" />
            <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-green-500/10 rounded-full blur-xl animate-pulse-bg stagger-3" />
          </div>

          {/* Hero Content */}
          <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className={`${visibleSections.has('hero') ? 'visible' : 'hidden-animate'}`}>
              <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold text-white mb-8 leading-tight animate-fadeInUp">
                Welcome To{' '}
                <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                  SBP Group
                </span>
              </h1>

              <p className="text-xl sm:text-2xl lg:text-3xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed animate-fadeInUp stagger-1">
                We have invited you to Yamuna Expressway with SBP Group of Real Estate
              </p>
            </div>
          </div>

          {/* Enhanced scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-scroll">
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section
          id="whatwedo"
          data-animate
          className="py-20 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div className={`${visibleSections.has('whatwedo') ? 'visible' : 'hidden-animate'}`}>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 animate-fadeInLeft">
                  What <span className="text-red-600">We Do</span>
                </h2>

                <p className="text-lg text-gray-600 mb-10 leading-relaxed animate-fadeInLeft stagger-1">
                  At SBP Group Of Real Estate, we understand that real estate transactions can be
                  daunting and stressful. That's why we go above and beyond to ensure that our
                  clients have a seamless and hassle-free experience.
                </p>

                <div className="space-y-6">
                  {whatWeDoItems.map((item, index) => (
                    <div
                      key={item.text}
                      className={`flex items-center space-x-4 group hover:transform hover:translate-x-2 smooth-transition animate-fadeInLeft stagger-${index + 2}`}
                    >
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-gray-100 to-gray-200 flex items-center justify-center group-hover:scale-110 smooth-transition">
                        <item.icon className={`h-6 w-6 ${item.color}`} />
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span className="text-lg font-semibold text-gray-800 group-hover:text-red-600 smooth-transition">
                          {item.text}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Image */}
              <div className={`relative ${visibleSections.has('whatwedo') ? 'visible' : 'hidden-animate'}`}>
                <div className="relative overflow-hidden rounded-2xl shadow-2xl group animate-fadeInRight">
                  <img
                    src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Modern Home"
                    className="w-full h-96 object-cover group-hover:scale-105 smooth-transition"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-xl font-bold mb-2">Premium Properties</h3>
                    <p className="text-gray-200">Your dream home awaits</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Services Section */}
        <section
          id="services"
          data-animate
          className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`text-center mb-16 transition-all duration-1000 cubic-bezier(0.4, 0, 0.2, 1) ${visibleSections.has('services') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 transition-all duration-500 hover:scale-105">
                Our <span className="text-red-600">Services</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4 transition-all delay-150 duration-1000 ease-out">
                Best Plot In Yamuna Expressway
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-400 mx-auto rounded-full transition-all delay-300 duration-1000 ease-out transform" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className={`service-card group relative overflow-hidden bg-white rounded-2xl shadow-xl flex flex-col transition-all duration-700 cubic-bezier(0.4, 0, 0.2, 1) transform ${visibleSections.has('services')
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                    }`}
                  style={{
                    transitionDelay: `${index * 150}ms`,
                    backfaceVisibility: 'hidden',
                    transform: 'translateZ(0)'
                  }}
                >
                  <div className="relative overflow-hidden h-48 flex-shrink-0">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 cubic-bezier(0.4, 0, 0.2, 1) group-hover:scale-110"
                      loading="lazy"
                      style={{ backfaceVisibility: 'hidden' }}
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1)" />
                    <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-white/40 transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1)">
                      {React.createElement(service.icon, { className: 'h-6 w-6 text-white transition-transform duration-300 group-hover:rotate-12' })}
                    </div>
                  </div>

                  <div className="p-6 flex flex-col justify-between h-full">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 transition-colors duration-300 cubic-bezier(0.4, 0, 0.2, 1) group-hover:text-red-600">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-6">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industrial Plots Section */}
        <section
          ref={industrialRef}
          className="relative py-32 min-h-[80vh] overflow-hidden"
        >
          {/* Fixed background image for all devices */}
          <div className="absolute inset-0 z-0">
            <div
              className="w-full h-full bg-no-repeat bg-cover bg-center sm:bg-fixed"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url('https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=1920')`
              }}
            />
          </div>

          {/* Content */}
          <div
            ref={ref}
            className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          >
            <motion.div
              initial="hidden"
              animate={industrialInView ? 'visible' : 'hidden'}
              variants={fadeInContainer}
            >
              <motion.h2
                className="text-4xl lg:text-6xl font-bold text-white mb-6"
                variants={fadeInUp}
                transition={{ duration: 0.7, ease: 'easeOut' }}
              >
                Industrial Plot in{' '}
                <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                  Yamuna & Greater Noida
                </span>
              </motion.h2>

              <motion.p
                className="text-xl lg:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto"
                variants={fadeInUp}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
              >
                You get very low price industrial plot near Yamuna expressway
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                variants={fadeInUp}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
              >
                {/* buttons */}
              </motion.div>
            </motion.div>

          </div>
        </section>


        {/* Noida International Airport Section */}
        <section
          id="airport"
          data-animate
          className="py-20 bg-gradient-to-br from-white via-blue-50 to-white relative overflow-hidden"
        >
          {/* Animated background elements */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="absolute w-32 h-32 bg-blue-100/20 rounded-full blur-xl animate-pulse-bg"
                style={{
                  left: `${10 + i * 20}%`,
                  top: `${20 + i * 15}%`,
                  animationDelay: `${i * 0.5}s`
                }}
              />
            ))}
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className={`text-center mb-16 ${visibleSections.has('airport') ? 'visible' : 'hidden-animate'}`}>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 animate-fadeInUp hover:scale-105 smooth-transition">
                <span className="text-blue-600">Noida International</span> Airport
              </h2>

              {/* Animated plane icon */}
              <div className="flex justify-center mb-8">
                <Plane className="h-12 w-12 text-blue-500 animate-plane" />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Content */}
              <div className={`${visibleSections.has('airport') ? 'visible' : 'hidden-animate'}`}>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed animate-fadeInLeft">
                  Set to be India's largest airport in Jewar along the Yamuna Expressway.
                  Over 5,000 acres with sustainability focus and world-class infrastructure.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {airportFeatures.map((feature, index) => (
                    <div
                      key={feature}
                      className={`flex items-center space-x-3 group hover:translate-x-2 smooth-transition animate-fadeInLeft stagger-${index + 1}`}
                    >
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-120 smooth-transition">
                        <CheckCircle className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-gray-700 text-sm group-hover:text-blue-600 smooth-transition">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Image */}
              <div className={`relative ${visibleSections.has('airport') ? 'visible' : 'hidden-animate'}`}>
                <div className="relative overflow-hidden rounded-2xl shadow-2xl group animate-fadeInRight">
                  <img
                    src="https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Airport Development"
                    className="w-full h-96 object-cover group-hover:scale-105 smooth-transition"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-xl font-bold mb-2">Noida International Airport</h3>
                    <p className="text-gray-200">A gateway to global connectivity</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        {/* Testimonials Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Real experiences from satisfied clients who trusted us with their property investments
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {[
                {
                  name: "Ravi Sharma",
                  content:
                    "Working with SBP Group Of Real Estate was an absolute game-changer. Their team made my property purchase near Jewar, Noida International Airport feel effortless. Truly a world-class experience with unmatched professionalism!",
                },
                {
                  name: "Sneha Verma",
                  content:
                    "I've never felt so confident making a real estate decision. SBP Group's team guided me with care, clarity, and expertise. The entire journey, from viewing to possession near Noida, was smooth and surprisingly joyful!",
                },
                {
                  name: "Amit Khurana",
                  content:
                    "SBP Group went above and beyond in helping me find the perfect property near the upcoming Noida International Airport. Their attention to detail, honesty, and dedication made it an unforgettable experience.",
                },
                {
                  name: "Pooja Mehta",
                  content:
                    "Investing near Jewar and Noida was a big decision, but SBP Group made it exciting and stress-free. Their personalized approach, prompt communication, and deep market knowledge truly amazed me!",
                },
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                >
                  <div className="flex items-start space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>

                  <blockquote className="text-gray-700 mb-6 leading-relaxed italic">
                    "{testimonial.content}"
                  </blockquote>

                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-gray-500 text-sm">Satisfied Client</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>


        {/* Call to Action Section */}
        <section
          id="cta"
          data-animate
          className="py-20 bg-gradient-to-r from-red-600 to-red-700 text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-10 right-20 w-40 h-40 bg-red-400/20 rounded-full blur-3xl animate-pulse-bg" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className={`${visibleSections.has('cta') ? 'visible' : 'hidden-animate'}`}>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 animate-fadeInUp">
                Ready to Invest in Your Future?
              </h2>
              <p className="text-xl mb-10 max-w-3xl mx-auto animate-fadeInUp stagger-1">
                Join thousands of satisfied clients who have trusted SBP Group to secure prime real estate opportunities along the Yamuna Expressway.
              </p>
              <Link
                to="/contact"
                className="group relative overflow-hidden bg-white text-red-600 px-10 py-4 rounded-full text-lg font-bold shadow-2xl hover:shadow-white/25 smooth-transition hover:scale-105 animate-fadeInUp stagger-2"
              >
                <span className="relative z-10 flex items-center">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 smooth-transition" />
                </span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;