import React, { useState, useEffect } from 'react';

const KeyFeatures = () => {
  const [currentFeature, setCurrentFeature] = useState(0);
  
  const features = [
    {
      icon: '🥗',
      title: 'Pure Vegetarian Food',
      description: '100% vegetarian food with quality assurance and hygiene standards',
      color: 'bg-green-500',
      stats: '100% Veg'
    },
    {
      icon: '🏪',
      title: 'Vendor Network',
      description: 'Connect with verified vegetarian food vendors and restaurants',
      color: 'bg-green-600',
      stats: '500+ Vendors'
    },
    {
      icon: '🚴',
      title: 'Fast Delivery',
      description: 'Quick and reliable food delivery by our dedicated partners',
      color: 'bg-green-700',
      stats: '30 Min Delivery'
    },
    {
      icon: '💰',
      title: 'Best Prices',
      description: 'Affordable pricing with great deals and discounts',
      color: 'bg-green-800',
      stats: 'Save 40%'
    },
    {
      icon: '🌟',
      title: 'Ambassador Program',
      description: 'Earn by promoting healthy vegetarian lifestyle',
      color: 'bg-green-500',
      stats: 'Earn Money'
    },
    {
      icon: '📱',
      title: 'Easy to Use',
      description: 'User-friendly app for seamless food ordering experience',
      color: 'bg-green-600',
      stats: 'Easy App'
    }
  ];

  useEffect(() => {
    const featureInterval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 4000);

    return () => clearInterval(featureInterval);
  }, []);

  return (
    <div className="min-h-screen bg-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-50 rounded-full px-6 py-3 border border-green-200 mb-8">
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            <span className="text-green-700 font-medium">India's Leading Vegetarian Food Platform</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Why Choose{' '}
            <span className="text-green-600">
              VEGIFFYY?
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience the complete vegetarian food ecosystem with verified vendors, 
            fast delivery, and the best prices for pure vegetarian food.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative"
            >
              <div className="bg-white rounded-2xl p-8 border border-green-200 shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 h-full">
                {/* Icon Container */}
                <div className="relative mb-6">
                  <div className={`w-20 h-20 ${feature.color} rounded-2xl flex items-center justify-center text-3xl text-white transform group-hover:scale-110 transition-all duration-300`}>
                    {feature.icon}
                  </div>
                </div>

                {/* Feature Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {feature.description}
                </p>

                {/* Stats Badge */}
                <div className="inline-flex items-center space-x-2 bg-green-50 rounded-full px-4 py-2 border border-green-200">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span className="text-green-700 font-semibold text-sm">{feature.stats}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Platform Benefits Section */}
        <div className="bg-green-50 rounded-3xl p-8 border border-green-200">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Side - Benefits Content */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">
                Complete{' '}
                <span className="text-green-600">
                  Food Ecosystem
                </span>
              </h3>
              
              <p className="text-gray-600 text-lg leading-relaxed">
                VEGIFFYY brings together customers, vendors, delivery partners, and ambassadors 
                to create India's most trusted vegetarian food platform.
              </p>

              {/* Benefits List */}
              <div className="space-y-4">
                {[
                  'Verified vegetarian food vendors',
                  'Quick and reliable delivery',
                  'Safe and hygienic food',
                  'Best prices and deals',
                  'Earn as delivery partner',
                  'Promote as ambassador'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 flex items-center">
                <span className="mr-3">🚀</span>
                Join VEGIFFYY Now
              </button>
            </div>

            {/* Right Side - Platform Stats */}
            <div className="relative">
              <div className="bg-white rounded-2xl p-6 border border-green-200">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-gray-900 font-semibold">Platform Growth</div>
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                </div>
                
                {/* Progress Bars */}
                <div className="space-y-3">
                  {['Customer Satisfaction', 'Vendor Network', 'Delivery Speed', 'Food Quality'].map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>{item}</span>
                        <span className="text-green-600 font-semibold">
                          {['95%', '90%', '88%', '96%'][index]}
                        </span>
                      </div>
                      <div className="w-full bg-green-100 rounded-full h-2">
                        <div 
                          className="bg-green-500 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ 
                            width: ['95%', '90%', '88%', '96%'][index]
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Footer */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { number: '10K+', label: 'Happy Customers', icon: '😊' },
            { number: '500+', label: 'Food Vendors', icon: '🏪' },
            { number: '1K+', label: 'Delivery Partners', icon: '🚴' },
            { number: '100+', label: 'Ambassadors', icon: '🌟' }
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
      </div>
    </div>
  );
};

export default KeyFeatures;