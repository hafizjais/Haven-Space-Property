import React from 'react';
import { MapPin, ExternalLink } from 'lucide-react';

/**
 * MapEmbed safely loads a Google Maps embed iframe, or provides coordinates linking.
 * @param {Object} props
 * @param {string} props.mapEmbedUrl - Google Maps embed src URL
 * @param {number} props.lat - Latitude coordinate
 * @param {number} props.lng - Longitude coordinate
 * @param {string} props.address - Property address text
 */
export default function MapEmbed({ mapEmbedUrl, lat, lng, address }) {
  const mapLink = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;

  return (
    <div className="bg-white rounded-2xl border border-cream-200/80 p-5 shadow-sm">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-base font-semibold text-charcoal flex items-center space-x-1.5">
            <MapPin className="w-5 h-5 text-terracotta-500" />
            <span>Property Location</span>
          </h3>
          <p className="text-xs text-charcoal-500 mt-1 font-light leading-relaxed max-w-md">
            {address}
          </p>
        </div>
        <a 
          href={mapLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center text-xs font-semibold text-terracotta-500 hover:text-terracotta-600 space-x-1 border border-terracotta-200 hover:border-terracotta-300 rounded-lg px-2.5 py-1.5 bg-terracotta-50/50 transition-colors"
        >
          <span>Open Map</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-cream-100 border border-cream-200">
        {mapEmbedUrl ? (
          <iframe
            src={mapEmbedUrl}
            title="Google Maps Embed Location"
            className="absolute top-0 left-0 w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-cream-50">
            <MapPin className="w-10 h-10 text-sage-400 mb-2 animate-bounce" />
            <span className="font-semibold text-sm text-charcoal mb-1">Interactive Map Placeholder</span>
            <p className="text-xs text-charcoal-400 max-w-xs leading-relaxed mb-4">
              Coordinates: {lat}, {lng}. A real Google Maps embed widget can be added by updating `houses.js` with an embed URL.
            </p>
            <a 
              href={mapLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-sage-500 hover:bg-sage-600 text-white font-medium text-xs px-4 py-2 rounded-lg transition-colors flex items-center space-x-1"
            >
              <span>View Location on Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
