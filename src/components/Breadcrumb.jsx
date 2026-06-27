import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

/**
 * Breadcrumb component for clean page navigation hierarchies.
 * @param {Object} props
 * @param {Array<{label: string, path: string}>} props.items - Array of navigation path objects
 */
export default function Breadcrumb({ items = [] }) {
  return (
    <nav className="flex items-center space-x-2 text-xs md:text-sm text-charcoal-500 py-3" aria-label="Breadcrumb">
      {/* Home link */}
      <Link 
        to="/" 
        className="flex items-center space-x-1.5 hover:text-terracotta-500 font-medium transition-colors"
      >
        <Home className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">Home</span>
      </Link>

      {items.map((item, idx) => {
        const isLast = idx === items.length - 1;
        return (
          <React.Fragment key={idx}>
            <ChevronRight className="w-3.5 h-3.5 text-cream-400 flex-shrink-0" />
            {isLast ? (
              <span className="text-charcoal-700 font-semibold truncate" aria-current="page">
                {item.label}
              </span>
            ) : (
              <Link 
                to={item.path} 
                className="hover:text-terracotta-500 font-medium transition-colors truncate"
              >
                {item.label}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
