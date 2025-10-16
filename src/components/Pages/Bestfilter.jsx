import { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";

const Bestfilter = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    categories: [],
    brands: [],
    priceRange: { min: 0, max: 200 },
  });

  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [priceOpen, setPriceOpen] = useState(true); 

  useEffect(() => {
    onFilterChange(filters);
  }, [filters, onFilterChange]);

  const handlePriceSearch = () => {
    const min = minPrice ? Number(minPrice) : 0;
    const max = maxPrice ? Number(maxPrice) : 200;
    setFilters((prev) => ({ ...prev, priceRange: { min, max } }));
  };

  return (
    <div className="w-full max-w-md mx-auto space-y-4">
    
      <div className="pt-10 rounded">
        <button
          onClick={() => setPriceOpen(!priceOpen)}
          className="w-full text-left px-4 py-2  font-semibold flex justify-between items-center"
        >
          Qiymət
          <span>{priceOpen ? "−" : "+"}</span>
        </button>
        {priceOpen && (
          <div className="px-4 py-3 border-t border-gray-200">
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
                onClick={handlePriceSearch}
                className="w-[80px] flex justify-center items-center bg-[#041E42] text-white py-1.5 rounded border border-gray-300"
              >
                <CiSearch size={20} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Bestfilter;
