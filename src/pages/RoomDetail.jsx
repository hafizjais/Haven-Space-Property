import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Maximize, ShieldAlert, DoorClosed, Wind, ShowerHead, HelpCircle, Check, BedSingle } from 'lucide-react';
import houses from '../data/houses';
import RoomCard from '../components/RoomCard';
import Breadcrumb from '../components/Breadcrumb';
import ImageGallery from '../components/ImageGallery';
import AvailabilityBadge from '../components/AvailabilityBadge';
import WhatsAppButton from '../components/WhatsAppButton';

// Utility helper to map amenities to corresponding Lucide icons
function getAmenityIcon(amenity) {
  const am = amenity.toLowerCase();
  if (am.includes('air-conditioning') || am.includes('ac')) {
    return <Wind className="w-4.5 h-4.5 text-sage-500" />;
  }
  if (am.includes('bathroom') || am.includes('shower') || am.includes('toilet')) {
    return <ShowerHead className="w-4.5 h-4.5 text-sage-500" />;
  }
  if (am.includes('bed')) {
    return <BedSingle className="w-4.5 h-4.5 text-sage-500" />;
  }
  if (am.includes('wardrobe') || am.includes('closet')) {
    return <DoorClosed className="w-4.5 h-4.5 text-sage-500" />;
  }
  return <Check className="w-4.5 h-4.5 text-sage-500" />;
}

export default function RoomDetail() {
  const { roomId } = useParams();

  // Find the parent house and room by roomId
  const { house, room } = useMemo(() => {
    for (const h of houses) {
      const r = h.rooms.find((rm) => rm.id === roomId);
      if (r) return { house: h, room: r };
    }
    return { house: null, room: null };
  }, [roomId]);

  // Extract other rooms in this house for recommendation section
  const otherRooms = useMemo(() => {
    if (!house || !room) return [];
    return house.rooms.filter((rm) => rm.id !== room.id);
  }, [house, room]);

  if (!room || !house) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-charcoal mb-4">Room Listing Not Found</h2>
        <p className="text-sm text-charcoal-500 mb-6">The listing ID you requested does not exist or has been rented out.</p>
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

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-10 relative">
      
      {/* Navigation Breadcrumb */}
      <div>
        <Breadcrumb 
          items={[
            { label: 'Browse Rooms', path: '/rooms' },
            { label: `${house.code} - ${room.roomNo}`, path: `/rooms/${room.id}` }
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

      {/* Main Details Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Column: Image Gallery */}
        <div className="lg:col-span-7 space-y-4">
          <ImageGallery images={room.images} title={`${house.code} - ${room.roomNo} (${room.type})`} />
        </div>

        {/* Right Column: Room Config & Booking details */}
        <div className="lg:col-span-5 bg-white border border-cream-200/80 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
          
          {/* Header */}
          <div className="space-y-3">
            <div className="flex flex-wrap gap-2 items-center">
              <AvailabilityBadge status={room.availability} />
              <Link 
                to={`/houses/${house.id}`}
                className="text-xs font-semibold text-terracotta-500 hover:text-terracotta-600 bg-terracotta-50 hover:bg-terracotta-100/80 px-2.5 py-1 rounded-full transition-colors"
              >
                {house.fullTitle}
              </Link>
            </div>
            
            <h1 className="text-2xl sm:text-3xl font-extrabold text-charcoal font-serif">
              {room.roomNo} <span className="font-normal font-sans text-lg text-charcoal-400">({room.type})</span>
            </h1>

            <div className="flex items-baseline space-x-1">
              <span className="text-3xl font-extrabold text-sage-600">RM {room.price}</span>
              <span className="text-xs text-charcoal-400">/ month</span>
            </div>
          </div>

          {/* Quick specs grid */}
          <div className="py-4 border-y border-cream-200/60 text-xs">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-lg bg-cream-100 flex items-center justify-center flex-shrink-0">
                <Maximize className="w-4 h-4 text-sage-600" />
              </div>
              <div>
                <p className="text-[10px] text-charcoal-400 font-medium uppercase tracking-wider">Room Dimensions</p>
                <p className="font-semibold text-charcoal">{room.size}</p>
              </div>
            </div>
          </div>

          {/* Amenities details */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-charcoal uppercase tracking-wider">Room Amenities</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {room.amenities.map((amenity, idx) => (
                <div key={idx} className="flex items-center space-x-2.5 bg-cream-50/50 border border-cream-100 p-2.5 rounded-xl text-xs text-charcoal-600">
                  <div className="flex-shrink-0">
                    {getAmenityIcon(amenity)}
                  </div>
                  <span className="font-light">{amenity}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2 border-t border-cream-200/60 pt-4">
            <h3 className="text-xs font-bold text-charcoal uppercase tracking-wider">Description</h3>
            <p className="text-xs sm:text-sm text-charcoal-500 font-light leading-relaxed">
              {room.description}
            </p>
          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-cream-200/60 space-y-3">
            <WhatsAppButton
              roomType={room.type}
              houseCode={house.code}
              houseName={house.name}
              price={room.price}
              label="Inquire via WhatsApp Now"
              className="w-full text-sm py-3.5 shadow-lg"
            />
            <p className="text-[10px] text-center text-charcoal-400 leading-normal font-light">
              Deals are made directly with the property management company. No hidden agency commissions.
            </p>
          </div>

        </div>
      </section>

      {/* Other rooms in this house */}
      {otherRooms.length > 0 && (
        <section className="space-y-6 border-t border-cream-200/80 pt-10">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-charcoal font-serif">Other Rooms in {house.code}</h2>
            <p className="text-xs text-charcoal-500 font-light mt-1">
              Explore alternative layouts inside this building block.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherRooms.slice(0, 3).map((rm) => (
              <RoomCard
                key={rm.id}
                room={rm}
                houseCode={house.code}
                houseName={house.name}
              />
            ))}
          </div>
        </section>
      )}

      {/* Floating Inquiry Bar on Mobile */}
      <div className="lg:hidden fixed bottom-0 left-0 w-full bg-white border-t border-cream-200/80 shadow-2xl p-4 z-30 flex items-center justify-between gap-4">
        <div>
          <span className="text-[10px] text-charcoal-400 block uppercase font-medium">Rent Price</span>
          <span className="text-lg font-bold text-sage-600">RM {room.price}<span className="text-[10px] text-charcoal-400 font-normal">/mo</span></span>
        </div>
        
        <WhatsAppButton
          roomType={room.type}
          houseCode={house.code}
          houseName={house.name}
          price={room.price}
          label="Book Now"
          className="text-xs px-4 py-3"
        />
      </div>

    </div>
  );
}
