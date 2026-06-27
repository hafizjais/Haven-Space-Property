import React from 'react';
import { Shield, Users, Heart, Sparkles, MapPin } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';

export default function AboutUs() {
  const valueProps = [
    {
      icon: Shield,
      title: 'Trust & Transparancy',
      desc: 'We publish only real listings with real photos. All contract terms are clear, with direct tenancy arrangements.'
    },
    {
      icon: Users,
      title: 'Student-Friendly Living',
      desc: 'Most of our properties reside near UTM Skudai Campus. We specialize in providing peaceful environments ideal for study and group work.'
    },
    {
      icon: Heart,
      title: 'Tenant-First Care',
      desc: 'Our customer support team reacts swiftly to service inquiries, high-speed WiFi problems, plumbing issues, and housekeeping.'
    },
    {
      icon: Sparkles,
      title: 'Pre-Furnished Comfort',
      desc: 'Skip the stress of furniture shopping. Our rooms are fully optimized with solid beds, study sets, wardrobes, and ventilation systems.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-12">
      
      {/* Navigation & Title */}
      <div>
        <Breadcrumb items={[{ label: 'About Us', path: '/about' }]} />
        <h1 className="text-3xl font-extrabold text-charcoal font-serif mt-2">About Haven Space</h1>
        <p className="text-sm text-charcoal-500 font-light mt-1">
          Providing comfortable, secure, and hassle-free co-living rooms in Johor Bahru.
        </p>
      </div>

      {/* Intro section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-charcoal font-serif">
            Our Vision: Cozy Homes, Happy Communities
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-600 font-light leading-relaxed">
            At <strong>Haven Space Property</strong>, we believe that a rental room is more than just a place to sleep — it is your haven for study, work, and personal growth.
          </p>
          <p className="text-xs sm:text-sm text-charcoal-600 font-light leading-relaxed">
            Starting with a mission to help students near UTM Johor campus and local working professionals find trustworthy housing, we have expanded to manage **6 property houses containing 31 rooms**. 
          </p>
          <p className="text-xs sm:text-sm text-charcoal-600 font-light leading-relaxed font-semibold text-sage-600">
            We deal directly with tenants, eliminating complex agent negotiations, high commissions, or hidden transaction fees.
          </p>
        </div>

        {/* Brand visual showcase */}
        <div className="relative aspect-video rounded-3xl overflow-hidden bg-cream-200 shadow-md">
          <img 
            src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80" 
            alt="Beautiful co-living kitchen area" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-sage-900/35 to-transparent flex items-end p-6">
            <span className="text-white text-xs font-semibold bg-terracotta-500 px-3 py-1.5 rounded-lg">
              Est. Johor Bahru
            </span>
          </div>
        </div>
      </section>

      {/* Core Values grid */}
      <section className="bg-sage-50/50 rounded-3xl p-8 sm:p-10 border border-sage-100/50 space-y-8">
        <div className="text-center max-w-lg mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-charcoal font-serif">What Sets Us Apart</h2>
          <p className="text-xs text-charcoal-400 font-light mt-1.5">
            We design renting around the tenant's daily comfort and peace of mind.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {valueProps.map((val, idx) => {
            const Icon = val.icon;
            return (
              <div key={idx} className="bg-white p-5 rounded-2xl border border-cream-200 shadow-sm flex items-start space-x-4">
                <div className="w-9 h-9 rounded-lg bg-sage-100 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-sage-600" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-charcoal mb-1">{val.title}</h3>
                  <p className="text-xs text-charcoal-500 leading-relaxed font-light">{val.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Service locations summary */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-charcoal font-serif text-center">Locations We Serve</h2>
        <div className="flex flex-wrap justify-center gap-2">
          {['Kangkar Pulai', 'Taman Universiti', 'Skudai', 'Pulai Flora', 'Pulai Utama', 'Bandar Selesa Jaya'].map((loc) => (
            <span 
              key={loc} 
              className="inline-flex items-center text-xs font-medium text-sage-700 bg-white border border-sage-200 px-3.5 py-1.5 rounded-full"
            >
              <MapPin className="w-3.5 h-3.5 mr-1 text-terracotta-500" />
              {loc}
            </span>
          ))}
        </div>
      </section>

    </div>
  );
}
