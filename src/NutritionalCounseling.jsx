import React, { useState } from 'react';

const ConsultationForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredTime: '',
    concerns: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      preferredTime: '',
      concerns: ''
    });
    onClose();
    alert('Thank you! We will contact you shortly to schedule your consultation.');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-6 md:p-8 w-full max-w-md">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold text-rose-800">Schedule Consultation</h3>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2">Name</label>
            <input
              type="text"
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rose-500/50"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rose-500/50"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Phone</label>
            <input
              type="tel"
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rose-500/50"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Preferred Time for Contact</label>
            <select
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rose-500/50"
              value={formData.preferredTime}
              onChange={(e) => setFormData({...formData, preferredTime: e.target.value})}
            >
              <option value="">Select a time</option>
              <option value="morning">Morning (9AM - 12PM)</option>
              <option value="afternoon">Afternoon (12PM - 4PM)</option>
              <option value="evening">Evening (4PM - 7PM)</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Specific Concerns or Questions</label>
            <textarea
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rose-500/50"
              rows="3"
              value={formData.concerns}
              onChange={(e) => setFormData({...formData, concerns: e.target.value})}
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-rose-600 text-white py-2 rounded-lg hover:bg-rose-700 transition-colors duration-300"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
};

const InfoModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-6 md:p-8 w-full max-w-2xl">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold text-rose-800">About Our Nutritional Counseling</h3>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>
        <div className="space-y-4 text-gray-600">
          <p>Our nutritional counseling service provides personalized guidance throughout your pregnancy and postpartum journey. We focus on:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Evidence-based nutrition recommendations</li>
            <li>Customized meal plans for each trimester</li>
            <li>Management of pregnancy-related nutritional concerns</li>
            <li>Postpartum nutrition and breastfeeding support</li>
            <li>Regular monitoring and plan adjustments</li>
            <li>Access to certified nutritionists specialized in maternal health</li>
          </ul>
          <p className="mt-4">All consultations are conducted by registered dietitians with specialized training in prenatal and postnatal nutrition.</p>
          <p className="font-medium mt-4">Insurance: We accept most major insurance plans. Please contact us for verification of coverage.</p>
        </div>
        <button
          onClick={onClose}
          className="mt-6 w-full bg-rose-600 text-white py-2 rounded-lg hover:bg-rose-700 transition-colors duration-300"
        >
          Close
        </button>
      </div>
    </div>
  );
};

const NutritionalCounseling = () => {
  const [showConsultationForm, setShowConsultationForm] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);

  const benefits = [
    {
      title: "Personalized Nutrition Plans",
      description: "Custom meal plans tailored to your specific needs during pregnancy and postpartum.",
      icon: "🍎"
    },
    {
      title: "Expert Guidance",
      description: "Access to certified nutritionists specializing in maternal health.",
      icon: "👩‍⚕️"
    },
    {
      title: "Regular Monitoring",
      description: "Track your progress and adjust plans as needed throughout your journey.",
      icon: "📊"
    },
    {
      title: "Dietary Support",
      description: "Help with managing pregnancy-related dietary challenges and restrictions.",
      icon: "🥗"
    }
  ];

  const services = [
    {
      title: "Initial Consultation",
      duration: "60 minutes",
      includes: [
        "Complete health history review",
        "Current diet assessment",
        "Nutritional goals discussion",
        "Initial recommendations"
      ],
      icon: "📋"
    },
    {
      title: "Follow-up Sessions",
      duration: "30 minutes",
      includes: [
        "Progress evaluation",
        "Plan adjustments",
        "Address concerns",
        "Ongoing support"
      ],
      icon: "🤝"
    },
    {
      title: "Meal Planning",
      duration: "Customized",
      includes: [
        "Weekly meal plans",
        "Shopping lists",
        "Recipe suggestions",
        "Dietary modifications"
      ],
      icon: "📝"
    },
    {
      title: "Group Workshops",
      duration: "90 minutes",
      includes: [
        "Nutrition education",
        "Cooking demonstrations",
        "Peer support",
        "Q&A sessions"
      ],
      icon: "👥"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-white to-rose-50">
      <ConsultationForm 
        isOpen={showConsultationForm} 
        onClose={() => setShowConsultationForm(false)} 
      />
      <InfoModal 
        isOpen={showInfoModal} 
        onClose={() => setShowInfoModal(false)} 
      />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-rose-100/30 to-pink-100/30" />
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-rose-900 mb-6">
              Nutritional Counseling
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Expert guidance for a healthy pregnancy and postpartum journey through personalized nutrition
            </p>
            <button 
              onClick={() => setShowConsultationForm(true)}
              className="bg-rose-600 text-white px-8 py-3 rounded-full font-medium hover:bg-rose-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-rose-800 mb-12">
            Benefits of Nutritional Counseling
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-rose-700 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gradient-to-b from-white to-rose-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-rose-800 mb-12">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start">
                  <div className="text-4xl mr-4">{service.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-rose-700 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-500 mb-4">Duration: {service.duration}</p>
                    <ul className="space-y-2">
                      {service.includes.map((item, i) => (
                        <li key={i} className="flex items-center text-gray-600">
                          <span className="text-rose-500 mr-2">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-rose-500 to-pink-500 rounded-3xl p-8 md:p-12 text-center text-white shadow-xl">
            <h2 className="text-3xl font-bold mb-4">
              Start Your Nutrition Journey Today
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Take the first step towards a healthier pregnancy and postpartum experience.
            </p>
            <div className="space-x-4">
              <button 
                onClick={() => setShowConsultationForm(true)}
                className="bg-white text-rose-600 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors duration-300"
              >
                Book Appointment
              </button>
              <button 
                onClick={() => setShowInfoModal(true)}
                className="border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-rose-600 transition-colors duration-300"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NutritionalCounseling;