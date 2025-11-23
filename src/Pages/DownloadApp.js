import React, { useState, useEffect } from 'react';
import homeImage from '../images/home.jpeg'; // Adjust path as needed

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
    <div className="min-h-screen bg-gradient-to-br from-white to-green-50 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 bg-white rounded-full px-8 py-4 border-2 border-green-200 shadow-2xl mb-8 animate-pulse">
            <span className="w-3 h-3 bg-green-500 rounded-full animate-bounce"></span>
            <span className="text-green-800 font-bold text-lg">Available on iOS & Android</span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-8">
            Download{' '}
            <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
              VEGIFFYY App
            </span>
          </h2>
          
          <p className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
            Get the best vegetarian food experience on your phone. Order food, track delivery, 
            and enjoy great deals with our easy-to-use mobile app.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <div className="space-y-10">
            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className={`bg-white rounded-2xl p-6 border-2 border-green-200 shadow-2xl transition-all duration-500 group ${
                    index === currentFeature ? 'scale-105 bg-green-50 shadow-3xl' : 'scale-100'
                  } hover:scale-105 hover:shadow-3xl`}
                >
                  <div className="flex items-center space-x-5">
                    <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center text-3xl text-white transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg`}>
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="text-gray-900 font-black text-xl mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-gray-700 font-medium">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* App Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {appStats.map((stat, index) => (
                <div 
                  key={index}
                  className="text-center p-6 bg-white rounded-2xl border-2 border-green-200 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 group"
                >
                  <div className="text-3xl mb-3 transform group-hover:scale-110 transition-all duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-black text-green-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-800 font-bold text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Download Buttons */}
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-6">
                {/* App Store Button */}
                <button className="flex items-center justify-center space-x-4 bg-black hover:bg-gray-800 text-white py-5 px-8 rounded-2xl transition-all duration-300 hover:scale-105 group border-2 border-gray-700 shadow-2xl hover:shadow-3xl">
                  <div className="text-4xl">📱</div>
                  <div className="text-left">
                    <div className="text-sm text-gray-400">Download on the</div>
                    <div className="text-xl font-black">App Store</div>
                  </div>
                </button>

                {/* Google Play Button */}
                <button className="flex items-center justify-center space-x-4 bg-gradient-to-r from-green-600 to-green-800 hover:from-green-700 hover:to-green-900 text-white py-5 px-8 rounded-2xl transition-all duration-300 hover:scale-105 group border-2 border-green-500 shadow-2xl hover:shadow-3xl">
                  <div className="text-4xl">🤖</div>
                  <div className="text-left">
                    <div className="text-sm text-green-200">Get it on</div>
                    <div className="text-xl font-black">Google Play</div>
                  </div>
                </button>
              </div>

              {/* QR Code Section */}
              <div className="bg-white rounded-2xl p-8 border-2 border-green-200 shadow-2xl text-center">
                <h4 className="text-gray-900 font-black text-xl mb-4">Scan to Download</h4>
                <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-2xl inline-block border-2 border-green-200">
                  <div className="w-40 h-40 bg-green-500 rounded-2xl flex items-center justify-center text-white text-6xl shadow-2xl">
                    📲
                  </div>
                </div>
                <p className="text-gray-700 font-medium text-lg mt-4">
                  Point your camera at the QR code to download
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Phone Mockup */}
          <div className="relative">
            {/* Phone Mockup */}
            <div 
              className={`relative mx-auto w-80 h-[600px] bg-gray-800 rounded-[3rem] border-[14px] border-gray-700 shadow-2xl transform transition-all duration-500 ${
                isPhoneHovered ? 'scale-110' : 'scale-100'
              }`}
              onMouseEnter={() => setIsPhoneHovered(true)}
              onMouseLeave={() => setIsPhoneHovered(false)}
            >
              {/* Phone Notch */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-6 bg-gray-700 rounded-b-2xl z-20"></div>
              
              {/* Phone Screen */}
              <div className="absolute inset-4 bg-white rounded-3xl overflow-hidden border-2 border-gray-200">
                {/* App Interface with Home Image */}
                <div className="h-full w-full">
                  <img 
                    src={homeImage} 
                    alt="VEGIFFYY App Home Screen" 
                    className="w-full h-full object-cover rounded-2xl"
                  />
                  {/* Overlay for better visibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                </div>
              </div>

              {/* Home Indicator */}
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-400 rounded-full"></div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-400 rounded-full animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-300 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
          </div>
        </div>

        {/* Platform Badges */}
        <div className="mt-20 text-center">
          <div className="bg-white rounded-3xl p-12 border-2 border-green-200 shadow-2xl">
            <h3 className="text-4xl font-black text-gray-900 mb-10">Why Choose VEGIFFYY App?</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { icon: '🥗', text: 'Pure Vegetarian' },
                { icon: '🚚', text: 'Fast Delivery' },
                { icon: '💰', text: 'Best Prices' },
                { icon: '🛡️', text: 'Secure Payment' },
                { icon: '⭐', text: 'Verified Vendors' },
                { icon: '🎁', text: 'Daily Offers' }
              ].map((badge, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-4 bg-gradient-to-br from-green-50 to-white rounded-2xl px-6 py-4 border-2 border-green-200 hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
                >
                  <span className="text-3xl transform group-hover:scale-110 transition-all duration-300">{badge.icon}</span>
                  <span className="text-gray-900 font-black text-lg">{badge.text}</span>
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