import React, { useState, useEffect } from 'react';

const VegiffyHomepage = () => {
  const [currentUser, setCurrentUser] = useState(0);

  const userTypes = [
    { 
      type: "Customers", 
      description: "Order fresh, healthy vegetarian food",
      icon: "👨‍🍳",
      color: "bg-green-500"
    },
    { 
      type: "Vendors", 
      description: "Sell your delicious vegetarian dishes",
      icon: "🏪",
      color: "bg-green-600"
    },
    { 
      type: "Delivery Partners", 
      description: "Earn by delivering food to customers",
      icon: "🚴",
      color: "bg-green-700"
    },
    { 
      type: "Ambassadors", 
      description: "Promote healthy vegetarian lifestyle",
      icon: "🌟",
      color: "bg-green-800"
    }
  ];

  useEffect(() => {
    const userInterval = setInterval(() => {
      setCurrentUser((prev) => (prev + 1) % userTypes.length);
    }, 3000);

    return () => clearInterval(userInterval);
  }, []);

  return (
    <div id="home" className="min-h-screen bg-white pt-20 overflow-hidden">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Content */}
          <div className="space-y-8">
            {/* Main Heading */}
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-green-50 rounded-full px-4 py-2 border border-green-200">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="text-sm text-green-700 font-medium">Trusted by 10,000+ Vegetarian Food Lovers</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Your Platform for 
                <span className="text-green-600 block">Pure Vegetarian Food</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                VEGIFFYY connects customers with the best vegetarian food vendors, 
                delivery partners, and ambassadors for a complete vegetarian food experience.
              </p>

              {/* User Type */}
              <div className="flex items-center space-x-4 p-6 bg-green-50 rounded-2xl border border-green-200">
                <div className={`text-4xl ${userTypes[currentUser].color} text-white p-3 rounded-xl`}>
                  {userTypes[currentUser].icon}
                </div>
                <div>
                  <div className="text-gray-900 font-semibold text-lg">
                    Perfect for {userTypes[currentUser].type}
                  </div>
                  <div className="text-gray-600">
                    {userTypes[currentUser].description}
                  </div>
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: '🥗', text: 'Pure Vegetarian', sub: '100% veg food' },
                { icon: '⚡', text: 'Fast Delivery', sub: 'Quick service' },
                { icon: '🔒', text: 'Safe & Hygienic', sub: 'Quality assured' },
                { icon: '💰', text: 'Best Prices', sub: 'Affordable rates' }
              ].map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-4 p-4 bg-green-50 rounded-xl border border-green-200 hover:bg-green-100 transition-all duration-300 group"
                >
                  <span className="text-2xl">{feature.icon}</span>
                  <div>
                    <div className="text-gray-900 font-semibold">{feature.text}</div>
                    <div className="text-gray-600 text-sm">{feature.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center">
                <span className="mr-3">🚀</span>
                Get Started
                <span className="ml-3">→</span>
              </button>
              <button className="border-2 border-green-600 text-green-600 hover:bg-green-50 font-semibold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center">
                <span className="mr-3">📱</span>
                Download App
              </button>
            </div>
          </div>

          {/* Right Side - Platform Cards */}
          <div className="relative">
            {/* Main Platform Card */}
            <div className="bg-white rounded-3xl p-8 border border-green-200 shadow-lg">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: '👥', title: 'Customers', desc: 'Order food', color: 'bg-green-500' },
                  { icon: '🏪', title: 'Vendors', desc: 'Sell food', color: 'bg-green-600' },
                  { icon: '🚴', title: 'Delivery', desc: 'Earn money', color: 'bg-green-700' },
                  { icon: '🌟', title: 'Ambassadors', desc: 'Promote platform', color: 'bg-green-800' },
                  { icon: '🥗', title: 'Food Variety', desc: 'Multiple cuisines', color: 'bg-green-500' },
                  { icon: '📱', title: 'Easy App', desc: 'User friendly', color: 'bg-green-600' }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="text-center group cursor-pointer"
                  >
                    <div className={`relative w-20 h-20 mx-auto ${item.color} rounded-2xl flex items-center justify-center text-3xl text-white mb-3`}>
                      {item.icon}
                    </div>
                    <p className="text-gray-900 font-semibold">
                      {item.title}
                    </p>
                    <p className="text-gray-600 text-sm mt-1">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {[
            { number: '10K+', label: 'Happy Customers', icon: '😊', color: 'bg-green-500' },
            { number: '500+', label: 'Food Vendors', icon: '🏪', color: 'bg-green-600' },
            { number: '1K+', label: 'Delivery Partners', icon: '🚴', color: 'bg-green-700' },
            { number: '100+', label: 'Ambassadors', icon: '🌟', color: 'bg-green-800' }
          ].map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-green-50 rounded-2xl border border-green-200 hover:bg-green-100 transition-all duration-300 group"
            >
              <div className={`w-16 h-16 mx-auto mb-4 ${stat.color} rounded-2xl flex items-center justify-center text-2xl text-white`}>
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

export default VegiffyHomepage;