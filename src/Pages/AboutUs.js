import React, { useState, useEffect } from 'react';
import founderImage from '../images/founder.jpeg'; // Adjust path as needed

const AboutVegiffy = () => {
  const [currentMilestone, setCurrentMilestone] = useState(0);
  
  const milestones = [
    {
      year: '2025',
      title: 'Foundation',
      description: 'VEGIFFYY was founded with a vision to create India\'s largest pure vegetarian food platform.',
      icon: '🚀',
      color: 'bg-gradient-to-br from-green-500 to-green-600'
    },
    {
      year: '2025',
      title: 'Platform Launch',
      description: 'Launched our mobile app and website, connecting customers with vegetarian food vendors.',
      icon: '📱',
      color: 'bg-gradient-to-br from-green-600 to-green-700'
    },
    {
      year: '2025',
      title: 'Expansion',
      description: 'Expanded to 10+ cities with 500+ verified vegetarian food vendors.',
      icon: '🏪',
      color: 'bg-gradient-to-br from-green-700 to-green-800'
    },
    {
      year: '2025',
      title: 'Community Growth',
      description: 'Reached 10,000+ happy customers and 1,000+ delivery partners.',
      icon: '👥',
      color: 'bg-gradient-to-br from-green-800 to-green-900'
    }
  ];

  const teamMembers = [
    {
      name: 'Rahul Jain',
      role: 'Founder & President',
      expertise: 'Visionary Leader & Business Strategist',
      image: founderImage,
      color: 'bg-gradient-to-br from-green-600 to-green-800'
    }
  ];

  const values = [
    {
      icon: '🥗',
      title: 'Pure Vegetarian',
      description: '100% vegetarian food with complete quality assurance and hygiene standards.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: '🤝',
      title: 'Trust & Quality',
      description: 'Verified vendors and reliable service you can trust for your daily meals.',
      color: 'from-green-600 to-green-700'
    },
    {
      icon: '💰',
      title: 'Value for Money',
      description: 'Best prices with great deals and discounts for our customers.',
      color: 'from-green-700 to-green-800'
    },
    {
      icon: '🚚',
      title: 'Fast Delivery',
      description: 'Quick and reliable food delivery to satisfy your hunger cravings.',
      color: 'from-green-800 to-green-900'
    }
  ];

  useEffect(() => {
    const milestoneInterval = setInterval(() => {
      setCurrentMilestone((prev) => (prev + 1) % milestones.length);
    }, 4000);

    return () => clearInterval(milestoneInterval);
  }, []);

  return (
    <div id="about" className="min-h-screen bg-gradient-to-br from-white to-green-50 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-3 bg-white rounded-full px-8 py-4 border-2 border-green-200 shadow-2xl mb-8 animate-pulse">
            <span className="w-3 h-3 bg-green-500 rounded-full animate-bounce"></span>
            <span className="text-green-800 font-bold text-lg">India's Trusted Vegetarian Food Platform</span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-8">
            About{' '}
            <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
              VEGIFFYY
            </span>
          </h2>
          
          <p className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
            VEGIFFYY is India's fastest growing vegetarian food platform, connecting customers with the best 
            vegetarian food vendors, delivery partners, and creating opportunities for everyone.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          <div className="bg-white rounded-3xl p-8 border-2 border-green-200 shadow-2xl hover:shadow-3xl transform transition-all duration-500 hover:scale-105 group">
            <div className="flex items-center space-x-6 mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-3xl flex items-center justify-center text-3xl text-white transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-2xl">
                🎯
              </div>
              <div>
                <h3 className="text-3xl font-black text-gray-900">Our Mission</h3>
                <div className="flex space-x-2 mt-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                </div>
              </div>
            </div>
            <p className="text-gray-700 text-xl leading-relaxed font-medium">
              To make pure vegetarian food accessible to everyone with the best quality, fastest delivery, 
              and most affordable prices while creating earning opportunities for vendors and delivery partners.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border-2 border-green-200 shadow-2xl hover:shadow-3xl transform transition-all duration-500 hover:scale-105 group">
            <div className="flex items-center space-x-6 mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-green-700 rounded-3xl flex items-center justify-center text-3xl text-white transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-2xl">
                🔭
              </div>
              <div>
                <h3 className="text-3xl font-black text-gray-900">Our Vision</h3>
                <div className="flex space-x-2 mt-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                </div>
              </div>
            </div>
            <p className="text-gray-700 text-xl leading-relaxed font-medium">
              To become India's most trusted vegetarian food ecosystem where customers get the best food experience, 
              vendors grow their business, and delivery partners earn well - all while promoting healthy vegetarian lifestyle.
            </p>
          </div>
        </div>

        {/* Our Journey - Timeline */}
        <div className="bg-white rounded-3xl p-12 border-2 border-green-200 shadow-2xl mb-20">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-black text-gray-900 mb-6">
              Our{' '}
              <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
                Journey
              </span>
            </h3>
            <p className="text-xl text-gray-700 font-medium">
              From a simple idea to India's favorite vegetarian food platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <div 
                key={index}
                className={`text-center p-8 bg-gradient-to-br from-green-50 to-white rounded-3xl border-2 border-green-200 shadow-2xl transition-all duration-500 group ${
                  index === currentMilestone ? 'scale-110 bg-green-100 shadow-3xl' : 'scale-100'
                } hover:scale-110 hover:shadow-3xl`}
              >
                <div className={`w-20 h-20 mx-auto ${milestone.color} rounded-3xl flex items-center justify-center text-4xl text-white mb-6 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-2xl`}>
                  {milestone.icon}
                </div>
                <div className="text-green-600 font-black text-3xl mb-3">{milestone.year}</div>
                <div className="text-gray-900 font-black text-xl mb-4">{milestone.title}</div>
                <p className="text-gray-700 leading-relaxed font-medium">
                  {milestone.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership Team */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-black text-gray-900 mb-6">
              Meet Our{' '}
              <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
                Founder
              </span>
            </h3>
            <p className="text-xl text-gray-700 font-medium max-w-2xl mx-auto">
              The visionary behind India's best vegetarian food platform
            </p>
          </div>

          <div className="flex justify-center">
            <div className="bg-white rounded-3xl p-12 border-2 border-green-200 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 group text-center max-w-md w-full relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
              
              {/* Founder Image with Better Cropping */}
              <div className="relative mx-auto mb-8">
                <div className="w-48 h-48 mx-auto bg-gradient-to-br from-green-500 to-green-700 rounded-full p-2 shadow-2xl transform group-hover:scale-110 transition-all duration-500">
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-inner">
                    <img 
                      src={teamMembers[0].image} 
                      alt={teamMembers[0].name}
                      className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-all duration-500"
                      style={{ objectPosition: 'center 25%' }} // Adjust this to show face properly
                    />
                  </div>
                </div>
                {/* Decorative Elements */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-400 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-green-300 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
              </div>
              
              <h4 className="text-gray-900 font-black text-3xl mb-4 relative z-10">{teamMembers[0].name}</h4>
              <div className="text-green-600 font-bold text-xl mb-4 relative z-10">{teamMembers[0].role}</div>
              <div className="text-gray-700 text-lg font-medium mb-6 relative z-10">{teamMembers[0].expertise}</div>
              <div className="flex justify-center space-x-4 mt-8 relative z-10">
                <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="bg-white rounded-3xl p-12 border-2 border-green-200 shadow-2xl mb-20">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-black text-gray-900 mb-6">
              Our{' '}
              <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
                Values
              </span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="flex items-start space-x-6 p-8 bg-gradient-to-br from-green-50 to-white rounded-3xl border-2 border-green-200 hover:shadow-2xl transition-all duration-500 hover:scale-105 group"
              >
                <div className="text-4xl transform group-hover:scale-110 transition-all duration-500">
                  {value.icon}
                </div>
                <div className="flex-1">
                  <h4 className="text-gray-900 font-black text-2xl mb-4">{value.title}</h4>
                  <p className="text-gray-700 leading-relaxed text-lg font-medium">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {[
            { number: '10K+', label: 'Happy Customers', icon: '😊', color: 'bg-gradient-to-br from-green-500 to-green-600' },
            { number: '500+', label: 'Food Vendors', icon: '🏪', color: 'bg-gradient-to-br from-green-600 to-green-700' },
            { number: '1K+', label: 'Delivery Partners', icon: '🚴', color: 'bg-gradient-to-br from-green-700 to-green-800' },
            { number: '10+', label: 'Cities', icon: '🏙️', color: 'bg-gradient-to-br from-green-800 to-green-900' }
          ].map((stat, index) => (
            <div 
              key={index}
              className="text-center p-8 bg-white rounded-3xl border-2 border-green-200 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 group"
            >
              <div className={`w-20 h-20 mx-auto mb-6 ${stat.color} rounded-3xl flex items-center justify-center text-3xl text-white shadow-2xl group-hover:scale-110 transition-all duration-500`}>
                {stat.icon}
              </div>
              <div className="text-4xl font-black text-green-600 mb-3">
                {stat.number}
              </div>
              <div className="text-gray-800 font-bold text-lg">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-green-50 to-white rounded-3xl p-12 border-2 border-green-200 shadow-2xl">
            <h3 className="text-4xl font-black text-gray-900 mb-6">
              Join the VEGIFFYY Family
            </h3>
            <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto font-medium">
              Whether you want to order food, become a vendor, or join as delivery partner - 
              there's a place for everyone in the VEGIFFYY community.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-gradient-to-r from-green-600 to-green-800 hover:from-green-700 hover:to-green-900 text-white font-black py-5 px-12 rounded-2xl transition-all duration-300 flex items-center shadow-2xl hover:shadow-3xl transform hover:scale-105">
                <span className="mr-3 text-xl">📱</span>
                Download App
                <span className="ml-3 text-xl animate-pulse">→</span>
              </button>
              <button className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-black py-5 px-12 rounded-2xl transition-all duration-300 flex items-center shadow-2xl hover:shadow-3xl transform hover:scale-105">
                <span className="mr-3 text-xl">👥</span>
                Become Partner
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutVegiffy;