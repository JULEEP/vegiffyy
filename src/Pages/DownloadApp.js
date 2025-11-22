import React, { useState, useEffect } from 'react';

const DownloadApp = () => {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [isPhoneHovered, setIsPhoneHovered] = useState(false);

  const features = [
    {
      icon: '🥗',
      title: 'Pure Vegetarian',
      description: '100% vegetarian food from verified vendors',
      color: 'bg-green-500'
    },
    {
      icon: '🚚',
      title: 'Fast Delivery',
      description: 'Quick food delivery in 30 minutes',
      color: 'bg-green-600'
    },
    {
      icon: '💰',
      title: 'Best Prices',
      description: 'Great deals and discounts on food',
      color: 'bg-green-700'
    },
    {
      icon: '📱',
      title: 'Easy to Use',
      description: 'Simple and user-friendly app interface',
      color: 'bg-green-800'
    }
  ];

  const appStats = [
    { number: '4.8', label: 'App Rating', icon: '⭐' },
    { number: '10K+', label: 'Downloads', icon: '📥' },
    { number: '95%', label: 'Satisfaction', icon: '😊' },
    { number: '24/7', label: 'Support', icon: '🛡️' }
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
            <span className="text-green-700 font-medium">Available on iOS & Android</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Download{' '}
            <span className="text-green-600">
              VEGIFFYY App
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get the best vegetarian food experience on your phone. Order food, track delivery, 
            and enjoy great deals with our easy-to-use mobile app.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className={`bg-green-50 rounded-xl p-6 border border-green-200 transition-all duration-300 ${
                    index === currentFeature ? 'scale-105 bg-green-100' : 'scale-100'
                  } hover:scale-105 hover:bg-green-100 group`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-14 h-14 ${feature.color} rounded-2xl flex items-center justify-center text-2xl text-white`}>
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="text-gray-900 font-bold text-lg">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600 text-sm mt-1">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* App Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {appStats.map((stat, index) => (
                <div 
                  key={index}
                  className="text-center p-4 bg-green-50 rounded-lg border border-green-200 hover:bg-green-100 transition-all duration-300 group"
                >
                  <div className="text-2xl mb-2">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-green-600">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 text-xs mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Download Buttons */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                {/* App Store Button */}
                <button className="flex items-center justify-center space-x-3 bg-black hover:bg-gray-800 text-white py-4 px-6 rounded-xl transition-all duration-300 hover:scale-105 group border border-gray-300">
                  <div className="text-3xl">📱</div>
                  <div className="text-left">
                    <div className="text-xs text-gray-400">Download on the</div>
                    <div className="text-lg font-bold">App Store</div>
                  </div>
                </button>

                {/* Google Play Button */}
                <button className="flex items-center justify-center space-x-3 bg-green-600 hover:bg-green-700 text-white py-4 px-6 rounded-xl transition-all duration-300 hover:scale-105 group border border-green-500">
                  <div className="text-3xl">🤖</div>
                  <div className="text-left">
                    <div className="text-xs text-green-200">Get it on</div>
                    <div className="text-lg font-bold">Google Play</div>
                  </div>
                </button>
              </div>

              {/* QR Code Section */}
              <div className="bg-green-50 rounded-xl p-6 border border-green-200 text-center">
                <h4 className="text-gray-900 font-semibold mb-3">Scan to Download</h4>
                <div className="bg-white p-4 rounded-lg inline-block">
                  <div className="w-32 h-32 bg-green-500 rounded-lg flex items-center justify-center text-white text-4xl">
                    📲
                  </div>
                </div>
                <p className="text-gray-600 text-sm mt-3">
                  Point your camera at the QR code to download
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Phone Mockup */}
          <div className="relative">
            {/* Phone Mockup */}
            <div 
              className={`relative mx-auto w-80 h-[600px] bg-gray-800 rounded-[3rem] border-[14px] border-gray-700 shadow-xl transform transition-all duration-300 ${
                isPhoneHovered ? 'scale-105' : 'scale-100'
              }`}
              onMouseEnter={() => setIsPhoneHovered(true)}
              onMouseLeave={() => setIsPhoneHovered(false)}
            >
              {/* Phone Notch */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-6 bg-gray-700 rounded-b-2xl z-20"></div>
              
              {/* Phone Screen */}
              <div className="absolute inset-4 bg-white rounded-3xl overflow-hidden border border-gray-200">
                {/* App Interface Simulation */}
                <div className="p-6 h-full flex flex-col">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">🥗</span>
                      </div>
                      <span className="text-gray-900 font-bold">VEGIFFYY</span>
                    </div>
                    <div className="text-gray-600 text-sm">12:30</div>
                  </div>

                  {/* Main Content */}
                  <div className="flex-1 space-y-4">
                    {/* Welcome Message */}
                    <div className="bg-green-50 rounded-xl p-4">
                      <h3 className="text-gray-900 font-bold text-lg mb-2">Hungry? Order Now!</h3>
                      <p className="text-gray-600 text-sm">Get 40% off on your first order</p>
                    </div>

                    {/* Quick Actions */}
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { icon: '🍕', label: 'Pizza', color: 'bg-green-500' },
                        { icon: '🍔', label: 'Burgers', color: 'bg-green-600' },
                        { icon: '🍜', label: 'Chinese', color: 'bg-green-700' },
                        { icon: '🍦', label: 'Desserts', color: 'bg-green-800' }
                      ].map((action, index) => (
                        <div 
                          key={index}
                          className={`${action.color} rounded-xl p-3 text-center cursor-pointer`}
                        >
                          <div className="text-2xl mb-1 text-white">{action.icon}</div>
                          <div className="text-white text-xs font-semibold">{action.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Recent Orders */}
                    <div className="bg-gray-50 rounded-xl p-4">
                      <h4 className="text-gray-900 font-semibold mb-3">Recent Orders</h4>
                      <div className="space-y-2">
                        {['Veg Pizza - Delivered', 'Paneer Burger - Cooking', 'Noodles - On the way'].map((item, index) => (
                          <div key={index} className="flex items-center space-x-2 text-gray-600 text-sm">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Navigation Bar */}
                  <div className="flex justify-around pt-4 border-t border-gray-200">
                    {['🏠', '🔍', '🛒', '👤'].map((icon, index) => (
                      <button key={index} className="text-2xl text-gray-400 hover:text-green-600 transition-colors duration-200">
                        {icon}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Home Indicator */}
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-400 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Platform Badges */}
        <div className="mt-20 text-center">
          <div className="bg-green-50 rounded-2xl p-8 border border-green-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose VEGIFFYY App?</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { icon: '🥗', text: 'Pure Vegetarian' },
                { icon: '🚚', text: 'Fast Delivery' },
                { icon: '💰', text: 'Best Prices' },
                { icon: '🛡️', text: 'Secure Payment' },
                { icon: '⭐', text: 'Verified Vendors' }
              ].map((badge, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-3 bg-white rounded-lg px-4 py-3 border border-green-200 hover:bg-green-100 transition-all duration-300 group"
                >
                  <span className="text-2xl">{badge.icon}</span>
                  <span className="text-gray-900 font-semibold">{badge.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;