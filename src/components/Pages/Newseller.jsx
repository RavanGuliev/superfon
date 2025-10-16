import React, { useState, useEffect } from "react";
import { getAllCards } from "../../services";
import PageCard from "../Main/PageCard";
import { BsFilterRight } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";

function NewSeller() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [priceRange, setPriceRange] = useState({ min: 0, max: 200 });
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [priceOpen, setPriceOpen] = useState(false);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  useEffect(() => {
    getAllCards()
      .then((items) => setProducts(items))
      .catch((err) => console.error("Products yüklənmədi:", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-16 h-16 border-4 border-t-[#3c1e6e] border-b-[#3c1e6e] border-gray-200 rounded-full animate-spin"></div>
    </div>
  );

  const handlePriceSearch = () => {
    const min = minPrice ? Number(minPrice) : 0;
    const max = maxPrice ? Number(maxPrice) : 200;
    setPriceRange({ min, max });
  };

  const filteredProducts = products.filter(
    (p) => p.price >= priceRange.min && p.price <= priceRange.max
  );

  return (
    <div className="max-w-[1400px] mx-auto pt-10 pb-10 px-4 relative">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Yeniliklər</h1>
        <BsFilterRight
          className="text-2xl cursor-pointer lg:hidden"
          onClick={() => setSidebarOpen(true)}
        />
      </div>

      <div className="w-full h-px bg-gray-200 mb-10" />

      <div className="flex gap-8">
        <div
          className={`fixed top-0 right-0 h-full w-80 bg-white p-4 transform transition-transform duration-300 z-50 lg:relative lg:translate-x-0 ${
            sidebarOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-end mb-4 lg:hidden">
            <button
              className="text-xl font-bold"
              onClick={() => setSidebarOpen(false)}
            >
              ×
            </button>
          </div>
          <div className=" border border-gray-200 rounded">
            <button
              className="w-full text-left px-4 py-3 flex justify-between items-center"
              onClick={() => setPriceOpen((prev) => !prev)}
            >
              <span className="font-medium">Qiymət</span>
              <span>{priceOpen ? "−" : "+"}</span>
            </button>

            {priceOpen && (
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
        <div className="flex flex-wrap justify-center items-center gap-6 flex-1">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <PageCard key={product.id} product={product} />
            ))
          ) : (
            <p className="text-gray-500 text-lg mt-10">
              Axtarışa uyğun heç bir məhsul tapılmadı
            </p>
          )}
        </div>
      </div>
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-30 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
}

export default NewSeller;
