import React from 'react';

/**
 * AvailabilityBadge component to display room availability status with proper color coding.
 * @param {Object} props
 * @param {'Available'|'Occupied'|'Reserved'} props.status - Room availability status
 * @param {string} [props.className] - Additional styles
 */
export default function AvailabilityBadge({ status, className = '' }) {
  let colors = 'bg-gray-100 text-gray-800 border-gray-200';
  
  if (status === 'Available') {
    colors = 'bg-emerald-50 text-emerald-700 border-emerald-200';
  } else if (status === 'Occupied') {
    colors = 'bg-rose-50 text-rose-700 border-rose-200';
  } else if (status === 'Reserved') {
    colors = 'bg-amber-50 text-amber-700 border-amber-200';
  }

  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold border ${colors} ${className}`}>
      <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${
        status === 'Available' ? 'bg-emerald-500' : 
        status === 'Occupied' ? 'bg-rose-500' : 'bg-amber-500'
      }`}></span>
      {status}
    </span>
  );
}
