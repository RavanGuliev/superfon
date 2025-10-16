import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

export default function Bestfilter({ setPriceRange }) {
  const [open, setOpen] = useState(false);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleSearch = () => {
    const min = minPrice ? Number(minPrice) : 0;
    const max = maxPrice ? Number(maxPrice) : 200;
    setPriceRange({ min, max });
  };

  return (
    <div className="w-full border border-gray-200 rounded overflow-hidden">
    
      <button
        className="w-full text-left px-4 py-3 flex justify-between items-center"
        onClick={() => setOpen(!open)}
      >
        <span className="font-medium">Qiymət</span>
        <span>{open ? "−" : "+"}</span>
      </button>

      
      {open && (
        <div className="px-4 py-3 border-t border-gray-200 max-h-[400px] overflow-y-auto">
          <div className="flex gap-2 mb-3">
            <input
              type="number"
              placeholder="Min"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              className="w-1/2 border border-gray-300 rounded px-2 py-1 focus:outline-none"
            />
            <input
              type="number"
              placeholder="Max"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="w-1/2 border border-gray-300 rounded px-2 py-1 focus:outline-none"
            />

            <button
              onClick={handleSearch}
              className="w-[80px] flex justify-center items-center bg-[#041E42] text-white py-1.5 rounded border border-gray-300"
            >
              <CiSearch size={30} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
