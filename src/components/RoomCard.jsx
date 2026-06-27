import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import AvailabilityBadge from './AvailabilityBadge';
import WhatsAppButton from './WhatsAppButton';

/**
 * RoomCard displays single room details in catalog grid format.
 * @param {Object} props
 * @param {Object} props.room - Room data object
 * @param {string} props.houseCode - Parent house code (e.g., "HS 1")
 * @param {string} props.houseName - Parent house name
 */
export default function RoomCard({ room, houseCode, houseName }) {
  const coverImg = room.images && room.images.length > 0 
    ? room.images[0] 
    : 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=600&q=80';

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-cream-200/80 hover:border-terracotta-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      {/* Image Area */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-cream-200">
        <img
          src={coverImg}
          alt={`${room.type} - ${room.roomNo}`}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Availability Badge */}
        <div className="absolute top-3 left-3 z-10">
          <AvailabilityBadge status={room.availability} />
        </div>
        {/* Price Tag Overlay */}
        <div className="absolute bottom-3 right-3 bg-sage-500 text-white font-medium text-sm px-3 py-1.5 rounded-lg shadow-md">
          RM {room.price}/mo
        </div>
      </div>

      {/* Content Area */}
      <div className="p-5 flex-grow flex flex-col">
        {/* House info */}
        <div className="flex items-center space-x-1.5 text-xs text-sage-600 mb-2 font-medium">
          <Home className="w-3.5 h-3.5 flex-shrink-0" />
          <span className="truncate">{houseCode} - {houseName}</span>
        </div>

        {/* Room Title */}
        <h3 className="text-lg font-semibold text-charcoal mb-2 leading-snug">
          {room.roomNo} <span className="text-sm font-normal text-charcoal-400">({room.type})</span>
        </h3>



        {/* Action Row */}
        <div className="mt-auto pt-3 border-t border-cream-200/60 grid grid-cols-2 gap-2.5">
          <Link
            to={`/rooms/${room.id}`}
            className="inline-flex items-center justify-center border border-sage-500 text-sage-600 hover:bg-sage-50 text-xs font-semibold py-2.5 px-3 rounded-lg active:scale-98 transition-all"
          >
            View Details
          </Link>
          <WhatsAppButton
            roomType={room.type}
            houseCode={houseCode}
            houseName={houseName}
            price={room.price}
            label="Inquire"
            className="text-xs py-2.5 px-3"
          />
        </div>
      </div>
    </div>
  );
}
