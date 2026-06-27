import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Info, ArrowLeft, CheckCircle2, MessageCircle } from 'lucide-react';
import houses from '../data/houses';
import RoomCard from '../components/RoomCard';
import Breadcrumb from '../components/Breadcrumb';
import MapEmbed from '../components/MapEmbed';

export default function HouseDetail() {
  const { houseId } = useParams();
  
  // Find the exact house
  const house = houses.find((h) => h.id === houseId);

  if (!house) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-charcoal mb-4">Property House Not Found</h2>
        <p className="text-sm text-charcoal-500 mb-6">The property code you requested does not exist or has been modified.</p>
        <Link 
          to="/rooms" 
          className="inline-flex items-center space-x-1.5 bg-sage-500 hover:bg-sage-600 text-white font-medium text-xs px-5 py-2.5 rounded-xl shadow-md transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Room Directory</span>
        </Link>
      </div>
    );
  }

  // Pre-filled WhatsApp message URL for the entire house inquiry
  const houseWaUrl = `https://wa.me/60138968430?text=${encodeURIComponent(`Hi, I'm interested in renting rooms at ${house.code} - ${house.name}. Are there any available spaces left?`)}`;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">
      
      {/* Navigation & Breadcrumbs */}
      <div>
        <Breadcrumb 
          items={[
            { label: 'Browse Rooms', path: '/rooms' },
            { label: house.fullTitle, path: `/houses/${house.id}` }
          ]} 
        />
        <Link 
          to="/rooms" 
          className="inline-flex items-center text-xs font-semibold text-sage-600 hover:text-terracotta-500 transition-colors mt-2"
        >
          <ArrowLeft className="w-3.5 h-3.5 mr-1" />
          <span>Back to Room Directory</span>
        </Link>
      </div>

      {/* House Hero Banner Grid */}
      <section className="bg-white rounded-3xl overflow-hidden border border-cream-200/80 shadow-md">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          
          {/* Cover image */}
          <div className="relative aspect-video lg:aspect-auto min-h-[300px] lg:h-full bg-cream-200">
            <img 
              src={house.coverImage} 
              alt={house.name} 
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 bg-sage-600 text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-md">
              {house.code}
            </div>
          </div>

          {/* Core Info */}
          <div className="p-8 sm:p-10 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <h1 className="text-3xl font-extrabold text-charcoal font-serif tracking-tight leading-tight">
                {house.fullTitle}
              </h1>

              <div className="flex items-start space-x-2 text-xs text-charcoal-600">
                <MapPin className="w-4 h-4 text-terracotta-500 mt-0.5 flex-shrink-0" />
                <span className="leading-relaxed">{house.address}</span>
              </div>

              <div className="border-t border-cream-200/60 pt-4 space-y-2">
                <h3 className="text-xs font-bold text-charcoal uppercase tracking-wider">About This House</h3>
                <p className="text-xs sm:text-sm text-charcoal-500 leading-relaxed font-light">
                  {house.description}
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-cream-200/60 flex flex-col sm:flex-row gap-3">
              <a
                href={houseWaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-grow inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-xs py-3 rounded-xl transition-all shadow-md active:scale-98"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Inquire About House Availability</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Facilities & Map details block */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Facilities Checklist */}
        <div className="lg:col-span-1 bg-white rounded-2xl border border-cream-200/80 p-6 shadow-sm flex flex-col">
          <h3 className="text-base font-bold text-charcoal border-b border-cream-200/60 pb-3 mb-4 flex items-center space-x-1.5">
            <Info className="w-5 h-5 text-sage-600" />
            <span>Shared House Facilities</span>
          </h3>
          <ul className="space-y-3 flex-grow">
            {house.facilities.map((fac, index) => (
              <li key={index} className="flex items-start space-x-2.5 text-xs text-charcoal-600">
                <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed font-light">{fac}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Map Widget */}
        <div className="lg:col-span-2">
          <MapEmbed 
            mapEmbedUrl={house.location.mapEmbedUrl} 
            lat={house.location.lat} 
            lng={house.location.lng} 
            address={house.address} 
          />
        </div>

      </section>

      {/* Rooms listings grid inside house */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-extrabold text-charcoal font-serif">Rooms in {house.code}</h2>
          <p className="text-xs text-charcoal-500 font-light mt-1">
            Browse through the available rooms in this block. Deal direct with management.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {house.rooms.map((room) => (
            <RoomCard
              key={room.id}
              room={room}
              houseCode={house.code}
              houseName={house.name}
            />
          ))}
        </div>
      </section>

    </div>
  );
}
