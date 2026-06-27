import React, { useState } from 'react';
import { Phone, Mail, Clock, MapPin, MessageSquare, ArrowRight } from 'lucide-react';
import houses from '../data/houses';
import Breadcrumb from '../components/Breadcrumb';

const AGENT_PHONE = "60138968430";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    property: 'general',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const { name, phone, property, message } = formData;

    if (!name || !phone) {
      alert("Please fill in your Name and Phone Number.");
      return;
    }

    // Build the pre-filled text
    let targetPropertyText = "";
    if (property !== 'general') {
      const matchedHouse = houses.find(h => h.id === property);
      if (matchedHouse) {
        targetPropertyText = ` regarding *${matchedHouse.code} - ${matchedHouse.name}*`;
      }
    }

    const messageTemplate = `Hi, my name is ${name}. my phone number is ${phone}. I would like to make an inquiry${targetPropertyText}.\n\nMessage: ${message || 'No additional message.'}`;
    
    // Open in a new tab
    const waUrl = `https://wa.me/${AGENT_PHONE}?text=${encodeURIComponent(messageTemplate)}`;
    window.open(waUrl, '_blank');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-10">
      
      {/* Navigation & Header */}
      <div>
        <Breadcrumb items={[{ label: 'Contact Us', path: '/contact' }]} />
        <h1 className="text-3xl font-extrabold text-charcoal font-serif mt-2">Get in Touch</h1>
        <p className="text-sm text-charcoal-500 font-light mt-1">
          Have questions about our rental rooms? Fill out the form or chat with us.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Column: Contact details details */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white border border-cream-200/80 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
            <h2 className="text-lg font-bold text-charcoal font-serif border-b border-cream-200/60 pb-3">
              Direct Contact Details
            </h2>

            <div className="space-y-5">
              {/* Phone info */}
              <div className="flex items-start space-x-3.5">
                <div className="w-9 h-9 rounded-xl bg-sage-50 border border-sage-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone className="w-4.5 h-4.5 text-sage-600" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-charcoal uppercase tracking-wider">Phone / WhatsApp</h3>
                  <a href="tel:+60138968430" className="text-sm text-charcoal-600 hover:text-terracotta-500 transition-colors font-medium">
                    +60 13-896 8430
                  </a>
                </div>
              </div>

              {/* Email info */}
              <div className="flex items-start space-x-3.5">
                <div className="w-9 h-9 rounded-xl bg-sage-50 border border-sage-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail className="w-4.5 h-4.5 text-sage-600" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-charcoal uppercase tracking-wider">Email Inquiry</h3>
                  <a href="mailto:info@havenspace.com" className="text-sm text-charcoal-600 hover:text-terracotta-500 transition-colors font-medium">
                    info@havenspace.com
                  </a>
                </div>
              </div>

              {/* Operating hours */}
              <div className="flex items-start space-x-3.5">
                <div className="w-9 h-9 rounded-xl bg-sage-50 border border-sage-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Clock className="w-4.5 h-4.5 text-sage-600" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-charcoal uppercase tracking-wider">Response Hours</h3>
                  <p className="text-sm text-charcoal-600 font-light">
                    Mon - Sun: 9:00 AM - 6:00 PM (MYT)
                  </p>
                </div>
              </div>

              {/* HQ location */}
              <div className="flex items-start space-x-3.5">
                <div className="w-9 h-9 rounded-xl bg-sage-50 border border-sage-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-4.5 h-4.5 text-sage-600" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-charcoal uppercase tracking-wider">Service Coverage</h3>
                  <p className="text-sm text-charcoal-600 font-light leading-relaxed">
                    Kangkar Pulai, Taman Universiti, Pulai Flora, Villa Krystal, Johor Bahru.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Right Column: Contact Inquiry Form */}
        <div className="lg:col-span-7">
          <form 
            onSubmit={handleSubmit}
            className="bg-white border border-cream-200/80 rounded-3xl p-6 sm:p-8 shadow-sm space-y-5"
          >
            <h2 className="text-lg font-bold text-charcoal font-serif border-b border-cream-200/60 pb-3 flex items-center space-x-2">
              <MessageSquare className="w-5 h-5 text-terracotta-500" />
              <span>Property Inquiry Form</span>
            </h2>

            {/* Input name */}
            <div>
              <label htmlFor="name" className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-2">
                Your Full Name <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Ahmad Hafiz"
                className="w-full bg-cream-50/50 border border-cream-200 focus:border-terracotta-400 focus:ring-1 focus:ring-terracotta-100 rounded-xl px-4 py-3 text-xs text-charcoal outline-none transition-all"
              />
            </div>

            {/* Input Phone */}
            <div>
              <label htmlFor="phone" className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-2">
                Mobile Number <span className="text-rose-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g. +60123456789"
                className="w-full bg-cream-50/50 border border-cream-200 focus:border-terracotta-400 focus:ring-1 focus:ring-terracotta-100 rounded-xl px-4 py-3 text-xs text-charcoal outline-none transition-all"
              />
            </div>

            {/* Select Property */}
            <div>
              <label htmlFor="property" className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-2">
                Interested Property / House
              </label>
              <select
                id="property"
                name="property"
                value={formData.property}
                onChange={handleChange}
                className="w-full bg-cream-50/50 border border-cream-200 focus:border-terracotta-400 rounded-xl px-3 py-3 text-xs text-charcoal outline-none transition-colors"
              >
                <option value="general">General Inquiry (Any available room)</option>
                {houses.map((house) => (
                  <option key={house.id} value={house.id}>
                    {house.code} - {house.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Input message */}
            <div>
              <label htmlFor="message" className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your questions or desired move-in dates..."
                className="w-full bg-cream-50/50 border border-cream-200 focus:border-terracotta-400 focus:ring-1 focus:ring-terracotta-100 rounded-xl px-4 py-3 text-xs text-charcoal outline-none transition-all resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-emerald-500 hover:bg-emerald-600 active:scale-[0.99] text-white font-semibold text-sm py-3.5 px-6 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center space-x-2"
              >
                <span>Submit Inquiry via WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </form>
        </div>

      </div>

    </div>
  );
}
