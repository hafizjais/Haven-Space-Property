import React, { useState, useMemo, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, ArrowUpDown, RefreshCw, Eye, EyeOff, Search } from 'lucide-react';
import houses from '../data/houses';
import RoomCard from '../components/RoomCard';
import Breadcrumb from '../components/Breadcrumb';

export default function BrowseRooms() {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  // Search keyword state (synced with URL query)
  const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '');
  
  // Mobile filter drawer state
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // Active filter states
  const [selectedHouse, setSelectedHouse] = useState(searchParams.get('house') || 'all');
  const [selectedType, setSelectedType] = useState(searchParams.get('type') || 'all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [priceRange, setPriceRange] = useState(800); // Max RM 800
  const [sortBy, setSortBy] = useState('price-low'); // price-low | price-high

  // Keep search input synced with URL parameter updates
  useEffect(() => {
    setSearchTerm(searchParams.get('search') || '');
  }, [searchParams]);

  // Synchronize filter values with URL query when changed externally if needed
  useEffect(() => {
    const houseParam = searchParams.get('house');
    const typeParam = searchParams.get('type');
    if (houseParam) setSelectedHouse(houseParam);
    if (typeParam) setSelectedType(typeParam);
  }, [location.search]);

  // Extract all rooms from all houses
  const allRooms = useMemo(() => {
    return houses.flatMap((house) =>
      house.rooms.map((room) => ({
        ...room,
        houseId: house.id,
        houseCode: house.code,
        houseName: house.name,
        houseFullTitle: house.fullTitle,
      }))
    );
  }, []);

  // Filtered rooms selector
  const filteredRooms = useMemo(() => {
    let result = [...allRooms];

    // Search query match (search by house name, house code, room number, room type, or facilities)
    if (searchTerm.trim()) {
      const query = searchTerm.toLowerCase();
      result = result.filter(
        (room) =>
          room.houseName.toLowerCase().includes(query) ||
          room.houseCode.toLowerCase().includes(query) ||
          room.roomNo.toLowerCase().includes(query) ||
          room.type.toLowerCase().includes(query) ||
          room.description.toLowerCase().includes(query)
      );
    }

    // House Filter
    if (selectedHouse !== 'all') {
      result = result.filter((room) => room.houseId === selectedHouse);
    }

    // Room Type Filter
    if (selectedType !== 'all') {
      result = result.filter((room) => room.type === selectedType);
    }

    // Status Filter
    if (selectedStatus !== 'all') {
      result = result.filter((room) => room.availability === selectedStatus);
    }

    // Price Filter
    result = result.filter((room) => room.price <= priceRange);

    // Sorting logic
    if (sortBy === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [allRooms, searchTerm, selectedHouse, selectedType, selectedStatus, priceRange, sortBy]);

  const handleResetFilters = () => {
    setSearchTerm('');
    setSelectedHouse('all');
    setSelectedType('all');
    setSelectedStatus('all');
    setPriceRange(800);
    setSortBy('price-low');
    setSearchParams({});
  };

  const handleSearchChange = (e) => {
    const val = e.target.value;
    setSearchTerm(val);
    if (val.trim()) {
      setSearchParams({ search: val });
    } else {
      setSearchParams({});
    }
  };

  const roomTypes = ['Master Room', 'Medium Room', 'Single Room', 'Sharing Room'];
  const availabilityTypes = ['Available', 'Occupied', 'Reserved'];

  // Filter sidebar element
  const SidebarContent = () => (
    <div className="space-y-6">
      {/* Search Input */}
      <div>
        <label className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-2">
          Search Directory
        </label>
        <div className="relative">
          <Search className="w-4 h-4 text-sage-400 absolute left-3 top-3.5" />
          <input
            type="text"
            placeholder="Type code, type, area..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full bg-cream-50 border border-cream-200 focus:border-terracotta-400 rounded-xl pl-9 pr-4 py-2.5 text-xs text-charcoal outline-none transition-colors"
          />
        </div>
      </div>

      {/* House Filter */}
      <div>
        <label className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-2">
          Co-Living House
        </label>
        <select
          value={selectedHouse}
          onChange={(e) => setSelectedHouse(e.target.value)}
          className="w-full bg-cream-50 border border-cream-200 focus:border-terracotta-400 rounded-xl px-3 py-2.5 text-xs text-charcoal outline-none transition-colors"
        >
          <option value="all">All Houses (HS1 - HS6)</option>
          {houses.map((house) => (
            <option key={house.id} value={house.id}>
              {house.code} — {house.name}
            </option>
          ))}
        </select>
      </div>

      {/* Room Type */}
      <div>
        <label className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-2">
          Room Type
        </label>
        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          className="w-full bg-cream-50 border border-cream-200 focus:border-terracotta-400 rounded-xl px-3 py-2.5 text-xs text-charcoal outline-none transition-colors"
        >
          <option value="all">All Types</option>
          {roomTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>



      {/* Price Slider */}
      <div>
        <div className="flex justify-between items-center mb-2">
          <label className="text-xs font-semibold text-charcoal uppercase tracking-wider">
            Max Monthly Rent
          </label>
          <span className="text-xs font-semibold text-terracotta-500">RM {priceRange}</span>
        </div>
        <input
          type="range"
          min="300"
          max="800"
          step="10"
          value={priceRange}
          onChange={(e) => setPriceRange(Number(e.target.value))}
          className="w-full accent-terracotta-500 cursor-pointer"
        />
        <div className="flex justify-between text-[10px] text-charcoal-400 mt-1">
          <span>RM 300</span>
          <span>RM 800</span>
        </div>
      </div>

      {/* Availability Status */}
      <div>
        <label className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-2">
          Availability Status
        </label>
        <div className="space-y-1.5 mt-1">
          <label className="flex items-center text-xs text-charcoal-600 font-light cursor-pointer">
            <input
              type="radio"
              checked={selectedStatus === 'all'}
              onChange={() => setSelectedStatus('all')}
              className="mr-2 text-terracotta-500 focus:ring-terracotta-400"
            />
            All Statuses
          </label>
          {availabilityTypes.map((status) => (
            <label key={status} className="flex items-center text-xs text-charcoal-600 font-light cursor-pointer">
              <input
                type="radio"
                checked={selectedStatus === status}
                onChange={() => setSelectedStatus(status)}
                className="mr-2 text-terracotta-500 focus:ring-terracotta-400"
              />
              {status}
            </label>
          ))}
        </div>
      </div>

      {/* Reset Button */}
      <button
        onClick={handleResetFilters}
        className="w-full flex items-center justify-center space-x-2 text-xs font-semibold text-sage-600 bg-sage-50 border border-sage-200 hover:bg-sage-100 hover:border-sage-300 py-3 rounded-xl transition-all"
      >
        <RefreshCw className="w-3.5 h-3.5" />
        <span>Reset All Filters</span>
      </button>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      
      {/* Header and Breadcrumbs */}
      <div>
        <Breadcrumb items={[{ label: 'Browse Rooms', path: '/rooms' }]} />
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mt-2 gap-4">
          <div>
            <h1 className="text-3xl font-extrabold text-charcoal font-serif">Room rental directory</h1>
            <p className="text-sm text-charcoal-500 mt-1 font-light">
              Showing {filteredRooms.length} of {allRooms.length} rentable rooms across Johor Bahru.
            </p>
          </div>
          
          {/* Sorting and Mobile Filter toggler */}
          <div className="flex items-center space-x-3 self-start md:self-end">
            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="md:hidden flex items-center space-x-1.5 bg-white border border-cream-200 rounded-xl px-4 py-2.5 text-xs font-medium text-charcoal hover:bg-cream-50"
            >
              <SlidersHorizontal className="w-4 h-4 text-sage-500" />
              <span>Filters</span>
            </button>

            <div className="flex items-center space-x-2 bg-white border border-cream-200 rounded-xl px-3 py-1.5">
              <ArrowUpDown className="w-3.5 h-3.5 text-sage-400" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent border-0 text-xs font-medium text-charcoal outline-none cursor-pointer focus:ring-0"
              >
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
        {/* Desktop Filter Sidebar */}
        <aside className="hidden md:block bg-white border border-cream-200/80 rounded-2xl p-6 shadow-sm sticky top-24">
          <h2 className="text-sm font-bold text-charcoal border-b border-cream-200/60 pb-3 mb-4">
            Filter Catalog
          </h2>
          <SidebarContent />
        </aside>

        {/* Room Directory Grid */}
        <main className="md:col-span-3">
          {filteredRooms.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRooms.map((room) => (
                <RoomCard
                  key={room.id}
                  room={room}
                  houseCode={room.houseCode}
                  houseName={room.houseName}
                />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-cream-200/80 p-16 text-center shadow-sm">
              <div className="w-16 h-16 bg-cream-100 rounded-full flex items-center justify-center mx-auto mb-4 text-sage-400">
                <SlidersHorizontal className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-charcoal mb-1">No Rooms Match Filters</h3>
              <p className="text-sm text-charcoal-500 font-light max-w-sm mx-auto mb-6">
                Try widening your price range, clearing your search query, or choosing other options.
              </p>
              <button
                onClick={handleResetFilters}
                className="bg-sage-500 hover:bg-sage-600 text-white text-xs font-semibold px-5 py-2.5 rounded-xl shadow-md transition-all active:scale-95"
              >
                Reset Filter Settings
              </button>
            </div>
          )}
        </main>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden md:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300"
            onClick={() => setMobileFiltersOpen(false)}
          />
          
          <div className="absolute inset-y-0 right-0 max-w-full flex">
            <div className="w-screen max-w-xs bg-white flex flex-col shadow-2xl animate-in slide-in-from-right duration-300">
              
              {/* Drawer Header */}
              <div className="flex justify-between items-center px-5 py-4 border-b border-cream-200/60 bg-cream-50">
                <h3 className="text-sm font-bold text-charcoal">Filter Options</h3>
                <button
                  onClick={() => setMobileFiltersOpen(false)}
                  className="text-charcoal-400 hover:text-charcoal p-1.5 rounded-lg hover:bg-cream-100/50"
                >
                  <EyeOff className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer Body */}
              <div className="flex-1 py-6 px-5 overflow-y-auto">
                <SidebarContent />
              </div>

              {/* Drawer Footer */}
              <div className="p-4 border-t border-cream-200/60 bg-cream-50 flex items-center gap-2">
                <button
                  onClick={() => setMobileFiltersOpen(false)}
                  className="flex-1 bg-terracotta-500 hover:bg-terracotta-600 text-white font-semibold text-xs py-3 rounded-xl transition-all shadow-md"
                >
                  Apply Filters
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  );
}
