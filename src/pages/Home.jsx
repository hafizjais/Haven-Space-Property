import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Search, Shield, Zap, Sparkles, Wifi, ArrowRight } from 'lucide-react';
import houses from '../data/houses';
import RoomCard from '../components/RoomCard';
import HouseCard from '../components/HouseCard';

export default function Home() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/rooms?search=${encodeURIComponent(searchQuery)}`);
    } else {
      navigate('/rooms');
    }
  };

  // Extract all rooms from all houses
  const allRooms = houses.flatMap((house) =>
    house.rooms.map((room) => ({
      ...room,
      houseId: house.id,
      houseCode: house.code,
      houseName: house.name,
    }))
  );

  // Available now (up to 8 rooms)
  const availableRooms = allRooms
    .filter((room) => room.availability === 'Available')
    .slice(0, 8);

  const trustSignals = [
    {
      icon: Shield,
      title: 'Verified Listings',
      desc: 'No ghost listings or fake photos. Deal directly with the property manager.',
    },
    {
      icon: Zap,
      title: 'Fast Support',
      desc: 'Dedicated maintenance team resolving house repairs and issues quickly.',
    },
    {
      icon: Sparkles,
      title: 'Fully Furnished',
      desc: 'Move in immediately with beds, wardrobes, study stations, and kitchen setups.',
    },
    {
      icon: Wifi,
      title: 'WiFi Ready',
      desc: 'High-speed internet configured in all houses for study and remote work.',
    },
  ];

  return (
    <div className="space-y-20 pb-20">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-cream-200/50 via-cream-100 to-cream-50 pt-16 pb-24 rounded-b-[2rem] border-b border-cream-200/60 overflow-hidden">
        {/* Subtle decorative background circles */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-sage-50/60 blur-3xl -z-10" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-terracotta-50/60 blur-3xl -z-10" />
        
        <div className="max-w-4xl mx-auto px-4 text-center">
          {/* Badge */}
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-sage-100 text-sage-800 border border-sage-200 mb-6 animate-pulse">
            <span className="w-2 h-2 rounded-full bg-sage-500"></span>
            Comfortable Living in Johor Bahru
          </span>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-charcoal font-serif tracking-tight leading-[1.1] mb-6">
            Find Your Next Cozy Room at{' '}
            <span className="text-sage-600 font-serif">Haven Space</span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-charcoal-600 font-light leading-relaxed max-w-2xl mx-auto mb-10">
            Browse fully furnished, budget-friendly student and professional co-living rooms near UTM Skudai, Kangkar Pulai, and Selesa Jaya.
          </p>

          {/* Integrated Search Bar */}
          <form onSubmit={handleSearchSubmit} className="max-w-xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-3 bg-white p-2 rounded-2xl shadow-xl border border-cream-200/80">
              <div className="relative flex-grow flex items-center px-3">
                <Search className="w-5 h-5 text-sage-400 absolute left-4" />
                <input
                  type="text"
                  placeholder="Search rooms (e.g. Master, Single, UTM Skudai)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-8 pr-4 py-3 bg-transparent text-charcoal placeholder-charcoal-400 focus:outline-none text-sm"
                />
              </div>
              <button
                type="submit"
                className="bg-terracotta-500 hover:bg-terracotta-600 text-white font-semibold text-sm px-6 py-3.5 rounded-xl flex items-center justify-center space-x-2 transition-colors active:scale-98"
              >
                <span>Find Rooms</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* 2. AVAILABLE NOW SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-charcoal font-serif">
              Available Rooms Now
            </h2>
            <p className="text-sm text-charcoal-500 font-light mt-1.5">
              Secure these rooms before they are fully occupied for the semester.
            </p>
          </div>
          <Link
            to="/rooms"
            className="group mt-4 sm:mt-0 inline-flex items-center font-semibold text-sm text-terracotta-500 hover:text-terracotta-600 space-x-1"
          >
            <span>Browse All 31 Rooms</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {availableRooms.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {availableRooms.map((room) => (
              <RoomCard
                key={room.id}
                room={room}
                houseCode={room.houseCode}
                houseName={room.houseName}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-12 text-center border border-cream-200">
            <p className="text-charcoal-500 font-medium">All rooms are currently reserved or occupied.</p>
            <Link to="/rooms" className="text-terracotta-500 font-semibold underline mt-2 block">
              Browse Waitlist Rooms
            </Link>
          </div>
        )}
      </section>

      {/* 3. TRUST SIGNALS SECTION */}
      <section className="bg-sage-50 py-16 border-y border-sage-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-charcoal font-serif">
              Co-Living Made Simple & Secure
            </h2>
            <p className="text-sm text-charcoal-500 mt-2 font-light">
              We manage houses, so you only focus on your studies and work.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustSignals.map((sig, idx) => {
              const Icon = sig.icon;
              return (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-cream-200 shadow-sm hover:shadow-md transition-all">
                  <div className="w-10 h-10 rounded-xl bg-sage-100 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-sage-600" />
                  </div>
                  <h3 className="text-base font-semibold text-charcoal mb-2">{sig.title}</h3>
                  <p className="text-xs text-charcoal-500 leading-relaxed font-light">{sig.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. HOUSES GRID SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-charcoal font-serif">
            Our Co-Living Houses
          </h2>
          <p className="text-sm text-charcoal-500 font-light mt-1.5">
            Discover our 6 property locations across Skudai and Kangkar Pulai.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {houses.map((house) => (
            <HouseCard key={house.id} house={house} />
          ))}
        </div>
      </section>

      {/* 5. CONTACT / CALL-TO-ACTION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-sage-800 rounded-3xl overflow-hidden shadow-2xl py-12 px-6 sm:px-12 text-center sm:text-left flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8 border border-sage-700">
          <div className="absolute right-0 top-0 w-64 h-64 rounded-full bg-sage-700/30 blur-3xl -z-10" />
          
          <div className="space-y-3 max-w-xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-serif">
              Ready to Book Your Ideal Room?
            </h2>
            <p className="text-sm sm:text-base text-sage-200 font-light">
              Chat directly with our property managers on WhatsApp. No booking fees, no complications.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 flex-shrink-0">
            <a
              href="https://wa.me/60138968430"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-terracotta-500 hover:bg-terracotta-600 text-white font-semibold text-sm px-6 py-3.5 rounded-xl shadow-md transition-colors"
            >
              Contact Agent
            </a>
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center border border-white/20 hover:border-white/50 text-white hover:bg-white/5 text-sm font-medium px-6 py-3.5 rounded-xl transition-all"
            >
              Inquiry Form
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
