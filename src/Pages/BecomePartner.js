import React, { useState, useEffect } from 'react';

const BecomePartner = () => {
  const [activeTab, setActiveTab] = useState('vendor');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const partnerTypes = [
    {
      id: 'vendor',
      title: 'Become a Vendor',
      icon: '🏪',
      description: 'Join as a restaurant partner and grow your business',
      color: 'bg-orange-500',
      gradient: 'from-orange-500 to-orange-600',
      features: [
        'Reach 10K+ hungry customers',
        'Zero commission for first month',
        'Free marketing and promotions',
        'Real-time order management',
        '24/7 partner support',
        'Weekly payments'
      ],
      stats: [
        { number: '500+', label: 'Active Vendors' },
        { number: '₹2.5L+', label: 'Avg. Monthly Revenue' },
        { number: '4.8★', label: 'Vendor Rating' }
      ]
    },
    {
      id: 'ambassador',
      title: 'Become Ambassador',
      icon: '🌟',
      description: 'Join our ambassador program and earn while promoting',
      color: 'bg-purple-500',
      gradient: 'from-purple-500 to-purple-600',
      features: [
        'Earn up to ₹15,000 per month',
        'Flexible working hours',
        'Free merchandise kit',
        'Performance bonuses',
        'Social media recognition',
        'Career growth opportunities'
      ],
      stats: [
        { number: '200+', label: 'Ambassadors' },
        { number: '₹50K+', label: 'Top Monthly Earnings' },
        { number: '95%', label: 'Satisfaction Rate' }
      ]
    }
  ];

  const successStories = [
    {
      name: 'Green Bites Cafe',
      role: 'Vendor Partner',
      image: '🍕',
      story: 'Joined 6 months ago, now serving 200+ orders daily with 40% revenue growth!',
      earnings: '₹8L/month'
    },
    {
      name: 'Priya Sharma',
      role: 'Campus Ambassador',
      image: '👩‍🎓',
      story: 'Earned ₹45,000 in 3 months while studying. Perfect side hustle!',
      earnings: '₹15K/month'
    },
    {
      name: 'Spice Garden',
      role: 'Premium Vendor',
      image: '🍛',
      story: 'From small kitchen to 3 branches with VEGIFFYY partnership',
      earnings: '₹12L/month'
    }
  ];

  const currentPartner = partnerTypes.find(partner => partner.id === activeTab);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-orange-50 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-flex items-center space-x-2 bg-white rounded-full px-6 py-3 border border-green-200 shadow-lg mb-8">
            <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-green-700 font-bold">Limited Spots Available</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            Join{' '}
            <span className="bg-gradient-to-r from-green-600 to-orange-600 bg-clip-text text-transparent">
              VEGIFFYY Family
            </span>
          </h1>
          
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
            Grow your business or start earning with India's fastest growing vegetarian food platform. 
            Be part of our success story!
          </p>
        </div>

        {/* Partner Type Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-2xl p-2 shadow-xl border border-gray-200">
            {partnerTypes.map((partner) => (
              <button
                key={partner.id}
                onClick={() => setActiveTab(partner.id)}
                className={`px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                  activeTab === partner.id
                    ? `bg-gradient-to-r ${partner.gradient} text-white shadow-lg transform scale-105`
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <span className="text-2xl mr-3">{partner.icon}</span>
                {partner.title}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Side - Content */}
          <div className="space-y-8">
            {/* Main Card */}
            <div className={`bg-gradient-to-br ${currentPartner.gradient} rounded-3xl p-8 text-white shadow-2xl transform transition-all duration-500 hover:scale-105`}>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-20 h-20 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center text-3xl backdrop-blur-sm">
                  {currentPartner.icon}
                </div>
                <div>
                  <h2 className="text-4xl font-bold mb-2">{currentPartner.title}</h2>
                  <p className="text-white text-opacity-90 text-lg">{currentPartner.description}</p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {currentPartner.stats.map((stat, index) => (
                  <div key={index} className="text-center bg-white bg-opacity-20 rounded-xl p-4 backdrop-blur-sm">
                    <div className="text-2xl font-bold">{stat.number}</div>
                    <div className="text-white text-opacity-80 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button className="w-full bg-white text-gray-900 py-4 px-6 rounded-xl font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg">
                Join Now - It's FREE! 🚀
              </button>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {currentPartner.features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 ${currentPartner.color} rounded-xl flex items-center justify-center text-white text-xl group-hover:scale-110 transition-transform duration-300`}>
                      ✓
                    </div>
                    <span className="text-gray-900 font-semibold text-lg">{feature}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Success Stories & Form */}
          <div className="space-y-8">
            {/* Success Stories */}
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-xl">
              <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                Success Stories ✨
              </h3>
              <div className="space-y-6">
                {successStories.map((story, index) => (
                  <div 
                    key={index}
                    className="bg-gradient-to-r from-green-50 to-orange-50 rounded-2xl p-6 border border-green-200 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center text-2xl text-white">
                        {story.image}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-bold text-gray-900 text-lg">{story.name}</h4>
                            <p className="text-green-600 text-sm font-medium">{story.role}</p>
                          </div>
                          <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold">
                            {story.earnings}
                          </div>
                        </div>
                        <p className="text-gray-600 mt-2 text-sm">{story.story}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Join Form */}
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-xl">
              <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                Start Your Journey Today! 🎯
              </h3>
              
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="Your Name"
                    className="col-span-2 md:col-span-1 bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                  <input 
                    type="tel" 
                    placeholder="Phone Number"
                    className="col-span-2 md:col-span-1 bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                
                <input 
                  type="email" 
                  placeholder="Email Address"
                  className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                
                <select className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent">
                  <option>Select Partner Type</option>
                  <option>Restaurant Vendor</option>
                  <option>Home Chef</option>
                  <option>Campus Ambassador</option>
                  <option>City Ambassador</option>
                </select>

                <button className="w-full bg-gradient-to-r from-green-600 to-orange-600 text-white py-4 px-6 rounded-xl font-bold text-lg hover:from-green-700 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
                  Apply Now - Get Instant Response! 📲
                </button>

                <p className="text-center text-gray-500 text-sm">
                  ⚡ Our team will contact you within 2 hours
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-green-600 to-orange-600 rounded-3xl p-12 text-white shadow-2xl">
            <h2 className="text-4xl font-bold mb-4">
              Ready to Start Your Success Story?
            </h2>
            <p className="text-xl text-white text-opacity-90 mb-8 max-w-2xl mx-auto">
              Join 1000+ successful partners who are growing with VEGIFFYY. 
              Don't miss this opportunity to be part of India's vegetarian food revolution!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg">
                📞 Call Us: +91-9876543210
              </button>
              <button className="bg-black text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-800 transform hover:scale-105 transition-all duration-300 shadow-lg border border-white">
                💬 WhatsApp Quick Apply
              </button>
            </div>

            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              {[
                { number: '0₹', text: 'No Registration Fees' },
                { number: '2hrs', text: 'Quick Onboarding' },
                { number: '24/7', text: 'Dedicated Support' },
                { number: '100%', text: 'Vegetarian Promise' }
              ].map((item, index) => (
                <div key={index} className="bg-white bg-opacity-20 rounded-xl p-4 backdrop-blur-sm">
                  <div className="text-2xl font-bold">{item.number}</div>
                  <div className="text-white text-opacity-80 text-sm">{item.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BecomePartner;