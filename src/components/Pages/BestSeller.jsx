import React, { useEffect, useState } from "react";
import { getAllBest } from "../../services";
import BestCard from "../Main/BestCard";
import Bestfilter from "./Bestfilter";

function BestSeller() {
  const [best, setBest] = useState([]);
  const [filteredBest, setFilteredBest] = useState([]);
  const [loading, setLoading] = useState(true);

  const [activeFilters, setActiveFilters] = useState({
    categories: [],
    brands: [],
    priceRange: { min: 0, max: 500 },
  });

  useEffect(() => {
    getAllBest().then((items) => {
      setBest(items);
      setFilteredBest(items); 
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    let filtered = best;

    if (activeFilters.categories.length > 0) {
      filtered = filtered.filter((item) =>
        activeFilters.categories.includes(item.categoryId)
      );
    }

    if (activeFilters.brands.length > 0) {
      filtered = filtered.filter((item) =>
        activeFilters.brands.includes(item.brandId)
      );
    }

    filtered = filtered.filter(
      (item) =>
        item.price >= activeFilters.priceRange.min &&
        item.price <= activeFilters.priceRange.max
    );

    setFilteredBest(filtered);
  }, [activeFilters, best]);

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-16 h-16 border-4 border-t-[#3c1e6e] border-b-[#3c1e6e] border-gray-200 rounded-full animate-spin"></div>
      </div>
    );

  return (
    <div className="max-w-[1400px] mx-auto px-4 rubik">
      <h2 className="text-[22.4px] leading-relaxed font-semibold py-2 mb-3">
        Ən çox satılanlar
      </h2>
      <div className="w-full h-px bg-gray-200" />
      <div className="flex gap-10">
      
        <div className="w-[350px]">
          <Bestfilter onFilterChange={setActiveFilters} />
        </div>

      
        <div className="flex-1">
          <p className="pt-[70px] pb-[30px] text-[16px] font-light">
            {filteredBest.length} məhsul
          </p>

        
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBest.map((best) => (
              <BestCard key={best.id} best={best} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BestSeller;
