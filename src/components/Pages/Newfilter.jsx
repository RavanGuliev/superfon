import { useState, useEffect } from "react";
import axios from "axios";
import { CiSearch } from "react-icons/ci";

const Bestfilter = ({ onFilterChange }) => {
  const [data, setData] = useState(null);
  const [openSections, setOpenSections] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [filters, setFilters] = useState({
    categories: [],
    brands: [],
    priceRange: { min: 0, max: 200 }, 
  });

  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  useEffect(() => {
    axios
      .get("https://superfondatamain.vercel.app/bestfilter")
      .then((res) => {
        const filtersData = res.data[0]?.data?.filters;
        setData(filtersData);
      })
      .catch(() => setError("Filterlər yüklənmədi."))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    onFilterChange(filters);
  }, [filters, onFilterChange]);

  const toggleSection = (key) => {
    setOpenSections((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleCategoryChange = (id) => {
    setFilters((prev) => ({
      ...prev,
      categories: prev.categories.includes(id)
        ? prev.categories.filter((c) => c !== id)
        : [...prev.categories, id],
    }));
  };

  const handleBrandChange = (id) => {
    setFilters((prev) => ({
      ...prev,
      brands: prev.brands.includes(id)
        ? prev.brands.filter((b) => b !== id)
        : [...prev.brands, id],
    }));
  };

  const handlePriceSearch = () => {
    const min = minPrice ? Number(minPrice) : 0;
    const max = maxPrice ? Number(maxPrice) : 200;
    setFilters((prev) => ({ ...prev, priceRange: { min, max } }));
  };

  if (loading) return <div className="text-center py-4">Yüklənir...</div>;
  if (error) return <div className="text-red-500 text-center py-4">{error}</div>;
  if (!data) return null;

  return (
    <div className="w-full max-w-md mx-auto space-y-4">
     
      <div className="border rounded">
        <button
          onClick={() => toggleSection("cats")}
          className="w-full text-left px-4 py-2 bg-gray-100 font-semibold flex justify-between items-center"
        >
          {data.cats.title}
          <span>{openSections["cats"] ? "▲" : "▼"}</span>
        </button>
        {openSections["cats"] && (
          <div className="px-4 py-2 space-y-2">
            {data.cats.items.map((category) => (
              <div key={category.id}>
                <div className="font-medium">{category.title}</div>
                <div className="ml-4 space-y-1">
                  {category.children.map((child) => (
                    <label key={child.id} className="block text-sm">
                      <input
                        type="checkbox"
                        className="mr-2"
                        value={child.id}
                        onChange={() => handleCategoryChange(child.id)}
                        checked={filters.categories.includes(child.id)}
                      />
                      {child.title}
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

     
      <div className="border rounded">
        <button
          onClick={() => toggleSection("brands")}
          className="w-full text-left px-4 py-2 bg-gray-100 font-semibold flex justify-between items-center"
        >
          {data.brands.title}
          <span>{openSections["brands"] ? "▲" : "▼"}</span>
        </button>
        {openSections["brands"] && (
          <div className="px-4 py-2 space-y-2 max-h-60 overflow-y-auto">
            {data.brands.items.map((brand) => (
              <label key={brand.id} className="block text-sm">
                <input
                  type="checkbox"
                  className="mr-2"
                  value={brand.id}
                  onChange={() => handleBrandChange(brand.id)}
                  checked={filters.brands.includes(brand.id)}
                />
                {brand.title} ({brand.total})
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Price */}
      <div className="border rounded">
        <button
          onClick={() => toggleSection("prices")}
          className="w-full text-left px-4 py-2 bg-gray-100 font-semibold flex justify-between items-center"
        >
          Qiymət
          <span>{openSections["prices"] ? "−" : "+"}</span>
        </button>
        {openSections["prices"] && (
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
