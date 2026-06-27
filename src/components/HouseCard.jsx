import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Layout, CheckCircle } from 'lucide-react';

/**
 * HouseCard displays a overview of a single house/property unit.
 * @param {Object} props
 * @param {Object} props.house - House data object containing rooms list
 */
export default function HouseCard({ house }) {
  const totalRooms = house.rooms.length;
  const availableRooms = house.rooms.filter(r => r.availability === 'Available').length;

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-cream-200/80 hover:border-terracotta-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row">
      {/* Cover Image */}
      <div className="relative w-full md:w-2/5 aspect-[16/10] md:aspect-auto overflow-hidden bg-cream-200">
        <img
          src={house.coverImage}
          alt={house.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* House Code Overlay */}
        <div className="absolute top-3 left-3 bg-sage-500 text-white text-xs font-semibold px-2.5 py-1.5 rounded-lg shadow-md">
          {house.code}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-grow flex flex-col justify-between">
        <div>
          {/* Title */}
          <h3 className="text-xl font-bold text-charcoal mb-2 font-serif group-hover:text-terracotta-500 transition-colors">
            {house.fullTitle}
          </h3>

          {/* Address */}
          <div className="flex items-start space-x-1.5 text-xs text-charcoal-500 mb-4">
            <MapPin className="w-4 h-4 text-terracotta-400 mt-0.5 flex-shrink-0" />
            <span className="leading-normal">{house.address}</span>
          </div>

          {/* Room Count Badges */}
          <div className="flex flex-wrap gap-2.5 mb-4">
            <span className="inline-flex items-center text-xs font-medium text-sage-700 bg-sage-50 border border-sage-200 px-2.5 py-1 rounded-lg">
              <Layout className="w-3.5 h-3.5 mr-1.5 text-sage-500" />
              {totalRooms} Rooms Total
            </span>
            <span className="inline-flex items-center text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-lg">
              <CheckCircle className="w-3.5 h-3.5 mr-1.5 text-emerald-500" />
              {availableRooms} Available Now
            </span>
          </div>

          {/* Facilities preview (up to 3) */}
          <div className="mb-6">
            <div className="flex flex-wrap gap-1.5">
              {house.facilities.slice(0, 3).map((facility, idx) => (
                <span 
                  key={idx} 
                  className="text-[10px] uppercase tracking-wider font-semibold bg-cream-200 text-charcoal-600 px-2 py-1 rounded-md"
                >
                  {facility}
                </span>
              ))}
              {house.facilities.length > 3 && (
                <span className="text-[10px] font-semibold bg-cream-200 text-charcoal-600 px-2 py-1 rounded-md">
                  +{house.facilities.length - 3} more
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Action button */}
        <div className="pt-4 border-t border-cream-200/50 mt-auto">
          <Link
            to={`/houses/${house.id}`}
            className="w-full md:w-auto inline-flex items-center justify-center bg-sage-500 hover:bg-sage-600 active:scale-95 text-white font-medium text-sm px-5 py-2.5 rounded-xl shadow-md transition-all text-center"
          >
            Explore House & Rooms
          </Link>
        </div>
      </div>
    </div>
  );
}
