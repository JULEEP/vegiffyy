import React, { useState, useEffect } from 'react';

const WhyChooseVegiffy = () => {
  const [activeReason, setActiveReason] = useState(0);
  
  const reasons = [
    {
      icon: '🥗',
      title: '100% Vegetarian',
      description: 'Complete vegetarian food platform with verified vendors and quality assurance.',
      color: 'bg-green-500',
      features: ['Pure Veg Food Only', 'Quality Verified', 'Hygiene Standards']
    },
    {
      icon: '💰',
      title: 'Best Prices',
      description: 'Affordable pricing with great deals and discounts for everyone.',
      color: 'bg-green-600',
      features: ['Lowest Prices', 'Daily Deals', 'Save 40%']
    },
    {
      icon: '🚚',
      title: 'Fast Delivery',
      description: 'Quick and reliable food delivery by our dedicated partners.',
      color: 'bg-green-700',
      features: ['30 Min Delivery', 'Live Tracking', 'Reliable Service']
    },
    {
      icon: '🌟',
      title: 'Earn Opportunities',
      description: 'Multiple ways to earn - as delivery partner or brand ambassador.',
      color: 'bg-green-800',
      features: ['Delivery Partner', 'Brand Ambassador', 'Refer & Earn']
    }
  ];

  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Regular Customer",
      text: "VEGIFFYY has amazing food quality and fast delivery. Love the pure vegetarian assurance!",
      avatar: "😊"
    },
    {
      name: "Priya Patel",
      role: "Food Vendor",
      text: "Great platform for vegetarian food businesses. Helped me reach more customers easily.",
      avatar: "👩‍🍳"
    },
    {
      name: "Amit Kumar",
      role: "Delivery Partner",
      text: "Good earning opportunities with flexible timing. Perfect part-time job for students.",
      avatar: "🚴"
    }
  ];

  useEffect(() => {
    const reasonInterval = setInterval(() => {
      setActiveReason((prev) => (prev + 1) % reasons.length);
    }, 5000);

    return () => clearInterval(reasonInterval);
  }, []);

  return (
    <div className="min-h-screen bg-white pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-50 rounded-full px-6 py-3 border border-green-200 mb-8">
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            <span className="text-green-700 font-medium">India's Favorite Vegetarian Food Platform</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Join{' '}
            <span className="text-green-600">
              VEGIFFYY?
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join thousands of happy customers, vendors, and delivery partners who trust VEGIFFYY 
            for the best vegetarian food experience.
          </p>
        </div>

        {/* Main Reasons Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-500 ${
                index === activeReason ? 'scale-105' : 'scale-100'
              }`}
            >
              <div className="bg-white rounded-2xl p-8 border border-green-200 shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 h-full">
                {/* Icon and Header */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-16 h-16 ${reason.color} rounded-2xl flex items-center justify-center text-2xl text-white transform group-hover:scale-110 transition-all duration-300`}>
                    {reason.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {reason.title}
                    </h3>
                    <div className="flex space-x-1 mt-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                  {reason.description}
                </p>

                {/* Features List */}
                <div className="space-y-3">
                  {reason.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <span className="text-gray-700">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Platform Benefits Section */}
        <div className="bg-green-50 rounded-3xl p-8 border border-green-200 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              The{' '}
              <span className="text-green-600">
                VEGIFFYY Advantage
              </span>
            </h3>
            <p className="text-gray-600 text-lg">
              See how VEGIFFYY benefits everyone in the food ecosystem
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                metric: 'Delivery Time',
                vegiffy: '30 minutes',
                others: '45+ minutes',
                improvement: '33% faster',
                color: 'text-green-600'
              },
              {
                metric: 'Food Quality',
                vegiffy: '4.9/5 rating',
                others: '4.2/5 rating',
                improvement: 'Better quality',
                color: 'text-green-600'
              },
              {
                metric: 'Price Saving',
                vegiffy: 'Save 40%',
                others: 'Save 20%',
                improvement: 'Double savings',
                color: 'text-green-600'
              }
            ].map((item, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-2xl border border-green-200 hover:bg-green-100 transition-all duration-300 hover:scale-105">
                <div className="text-2xl font-bold text-gray-900 mb-4">{item.metric}</div>
                <div className="space-y-3">
                  <div className="bg-green-500 p-4 rounded-xl">
                    <div className="text-white font-bold text-lg">VEGIFFYY</div>
                    <div className="text-white text-xl font-semibold">{item.vegiffy}</div>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-xl">
                    <div className="text-gray-600">Others</div>
                    <div className="text-gray-700">{item.others}</div>
                  </div>
                  <div className={`text-sm font-semibold ${item.color}`}>
                    {item.improvement}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 border border-green-200 hover:shadow-lg transition-all duration-300 hover:scale-105 group"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center text-2xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="text-gray-900 font-bold text-lg">{testimonial.name}</div>
                  <div className="text-green-600 text-sm">{testimonial.role}</div>
                </div>
              </div>
              <p className="text-gray-600 italic leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="flex space-x-1 mt-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-yellow-400">⭐</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16">
          <div className="bg-green-50 rounded-3xl p-8 border border-green-200">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Join VEGIFFYY?
            </h3>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Whether you're a customer, vendor, or delivery partner - VEGIFFYY has something for everyone.
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

export default WhyChooseVegiffy;