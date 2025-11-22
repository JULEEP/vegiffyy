import React, { useState, useEffect } from 'react';

const AboutVegiffy = () => {
  const [currentMilestone, setCurrentMilestone] = useState(0);
  
  const milestones = [
    {
      year: '2022',
      title: 'Foundation',
      description: 'VEGIFFYY was founded with a vision to create India\'s largest pure vegetarian food platform.',
      icon: '🚀'
    },
    {
      year: '2023',
      title: 'Platform Launch',
      description: 'Launched our mobile app and website, connecting customers with vegetarian food vendors.',
      icon: '📱'
    },
    {
      year: '2024',
      title: 'Expansion',
      description: 'Expanded to 10+ cities with 500+ verified vegetarian food vendors.',
      icon: '🏪'
    },
    {
      year: '2025',
      title: 'Community Growth',
      description: 'Reached 10,000+ happy customers and 1,000+ delivery partners.',
      icon: '👥'
    }
  ];

  const teamMembers = [
    {
      name: 'Rahul Verma',
      role: 'Founder & CEO',
      expertise: 'Food Technology & Business',
      avatar: '👨‍💼',
      color: 'bg-green-500'
    },
    {
      name: 'Priya Sharma',
      role: 'Head of Operations',
      expertise: 'Supply Chain & Logistics',
      avatar: '👩‍💼',
      color: 'bg-green-600'
    },
    {
      name: 'Amit Patel',
      role: 'Technology Head',
      expertise: 'Platform Development',
      avatar: '👨‍💻',
      color: 'bg-green-700'
    },
    {
      name: 'Neha Gupta',
      role: 'Marketing Director',
      expertise: 'Brand & Community',
      avatar: '👩‍🎨',
      color: 'bg-green-800'
    }
  ];

  const values = [
    {
      icon: '🥗',
      title: 'Pure Vegetarian',
      description: '100% vegetarian food with complete quality assurance and hygiene standards.'
    },
    {
      icon: '🤝',
      title: 'Trust & Quality',
      description: 'Verified vendors and reliable service you can trust for your daily meals.'
    },
    {
      icon: '💰',
      title: 'Value for Money',
      description: 'Best prices with great deals and discounts for our customers.'
    },
    {
      icon: '🚚',
      title: 'Fast Delivery',
      description: 'Quick and reliable food delivery to satisfy your hunger cravings.'
    }
  ];

  useEffect(() => {
    const milestoneInterval = setInterval(() => {
      setCurrentMilestone((prev) => (prev + 1) % milestones.length);
    }, 4000);

    return () => clearInterval(milestoneInterval);
  }, []);

  return (
    <div className="min-h-screen bg-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-50 rounded-full px-6 py-3 border border-green-200 mb-8">
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            <span className="text-green-700 font-medium">India\'s Trusted Vegetarian Food Platform</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            About{' '}
            <span className="text-green-600">
              VEGIFFYY
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            VEGIFFYY is India\'s fastest growing vegetarian food platform, connecting customers with the best 
            vegetarian food vendors, delivery partners, and creating opportunities for everyone.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          <div className="bg-green-50 rounded-2xl p-8 border border-green-200 shadow-lg">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center text-2xl text-white">
                🎯
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
                <div className="flex space-x-1 mt-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
              </div>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed">
              To make pure vegetarian food accessible to everyone with the best quality, fastest delivery, 
              and most affordable prices while creating earning opportunities for vendors and delivery partners.
            </p>
          </div>

          <div className="bg-green-50 rounded-2xl p-8 border border-green-200 shadow-lg">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center text-2xl text-white">
                🔭
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
                <div className="flex space-x-1 mt-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
              </div>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed">
              To become India\'s most trusted vegetarian food ecosystem where customers get the best food experience, 
              vendors grow their business, and delivery partners earn well - all while promoting healthy vegetarian lifestyle.
            </p>
          </div>
        </div>

        {/* Our Journey - Timeline */}
        <div className="bg-green-50 rounded-2xl p-8 border border-green-200 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Our{' '}
              <span className="text-green-600">
                Journey
              </span>
            </h3>
            <p className="text-gray-600 text-lg">
              From a simple idea to India\'s favorite vegetarian food platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((milestone, index) => (
              <div 
                key={index}
                className={`text-center p-6 bg-white rounded-xl border border-green-200 transition-all duration-300 ${
                  index === currentMilestone ? 'scale-105 bg-green-100' : 'scale-100'
                } hover:scale-105 hover:bg-green-100 group`}
              >
                <div className="text-4xl mb-4">
                  {milestone.icon}
                </div>
                <div className="text-green-600 font-bold text-2xl mb-2">{milestone.year}</div>
                <div className="text-gray-900 font-semibold text-lg mb-3">{milestone.title}</div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {milestone.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership Team */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Meet Our{' '}
              <span className="text-green-600">
                Team
              </span>
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Passionate individuals working together to build India\'s best vegetarian food platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 border border-green-200 hover:shadow-lg transition-all duration-300 hover:scale-105 group text-center"
              >
                <div className={`w-20 h-20 mx-auto ${member.color} rounded-2xl flex items-center justify-center text-3xl mb-4`}>
                  {member.avatar}
                </div>
                <h4 className="text-gray-900 font-bold text-lg mb-2">{member.name}</h4>
                <div className="text-green-600 font-semibold mb-2">{member.role}</div>
                <div className="text-gray-600 text-sm">{member.expertise}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Our Values */}
        <div className="bg-green-50 rounded-2xl p-8 border border-green-200 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Our{' '}
              <span className="text-green-600">
                Values
              </span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div 
                key={index}
                className="flex items-start space-x-4 p-6 bg-white rounded-xl border border-green-200 hover:bg-green-100 transition-all duration-300 group"
              >
                <div className="text-3xl">
                  {value.icon}
                </div>
                <div>
                  <h4 className="text-gray-900 font-bold text-xl mb-2">{value.title}</h4>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { number: '10K+', label: 'Happy Customers', icon: '😊' },
            { number: '500+', label: 'Food Vendors', icon: '🏪' },
            { number: '1K+', label: 'Delivery Partners', icon: '🚴' },
            { number: '10+', label: 'Cities', icon: '🏙️' }
          ].map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-green-50 rounded-2xl border border-green-200 hover:bg-green-100 transition-all duration-300 group"
            >
              <div className="text-3xl mb-2">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-green-600">
                {stat.number}
              </div>
              <div className="text-gray-700 mt-2 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <div className="bg-green-50 rounded-2xl p-8 border border-green-200">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Join the VEGIFFYY Family
            </h3>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Whether you want to order food, become a vendor, or join as delivery partner - 
              there\'s a place for everyone in the VEGIFFYY community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center">
                <span className="mr-3">📱</span>
                Download App
              </button>
              <button className="border-2 border-green-600 text-green-600 hover:bg-green-50 font-semibold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center">
                <span className="mr-3">👥</span>
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