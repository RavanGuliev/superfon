import React, { useContext, useEffect, useState } from "react";
import { getAllWatch } from "../../services";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { useNavigate } from "react-router";
import { CartContext } from "../../context/CartContext";
import toast from "react-hot-toast";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import WatchFilter from "./WatchFilters";
import { BsFilterRight } from "react-icons/bs";

function WatchPage() {
  const [watch, setWatch] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 200 });
  const [filterOpen, setFilterOpen] = useState(false);
  const navigate = useNavigate();
  const { addToCart, toggleFavorite, isFavorite } = useContext(CartContext);

  useEffect(() => {
    getAllWatch().then((items) => setWatch(items));
  }, []);

  const handleAddToCart = (e, item) => {
    e.stopPropagation();
    addToCart({
      id: item.id,
      name: item.title,
      price: item.price,
      image: `https://cdn.superfon.az/i/p/300/${item.image}`,
      type: "watch",
    });
    toast.success(`${item.title} səbətə əlavə olundu!`);
  };

  const handleFavoriteClick = (e, item) => {
    e.stopPropagation();
    toggleFavorite({
      id: item.id,
      title: item.title,
      price: item.price,
      image: `https://cdn.superfon.az/i/p/300/${item.image}`,
    });
    toast.success(
      isFavorite(item.id)
        ? "Məhsul favoridən silindi!"
        : "Məhsul favorilərə əlavə olundu!"
    );
  };

  const filteredWatch = watch
    .filter((item) => item.price >= priceRange.min && item.price <= priceRange.max)
    .sort((a, b) => a.price - b.price);

  return (
    <div className="max-w-[1400px] mx-auto pt-10 pb-10 px-4 relative">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Saatlar</h1>
        <BsFilterRight className="text-2xl cursor-pointer lg:hidden" onClick={() => setFilterOpen(true)} />
      </div>
      <div className="w-full h-px bg-gray-200 mb-10" />

      <div className="flex gap-8">
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white p-4 transform transition-transform duration-300 z-50 lg:relative lg:translate-x-0 ${
            filterOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-end mb-4 lg:hidden">
            <button className="text-xl font-bold" onClick={() => setFilterOpen(false)}>×</button>
          </div>
          <WatchFilter setPriceRange={setPriceRange} />
        </div>

        <div className="flex flex-wrap justify-center items-center gap-3 flex-1">
          {filteredWatch.length > 0 ? (
            filteredWatch.map((item, index) => (
              <div
                key={index}
                onClick={() => navigate(`/watch/${item.id}`)}
                className="group relative border border-[#e5e8ec] rounded-lg p-4 flex flex-col items-center shadow hover:shadow-lg transition w-[311px] h-[427px]"
              >
                <div className="w-[215px] h-[215px] overflow-hidden flex items-center justify-center">
                  <img
                    src={`https://cdn.superfon.az/i/p/300/${item.image}`}
                    alt={item.title}
                    className="object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                <button
                  onClick={(e) => handleFavoriteClick(e, item)}
                  className="absolute top-4 right-4 bg-white shadow-2xl border border-gray-200 p-2 rounded-full hover:text-red-500 hover:border-red-500 text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  {isFavorite(item.id) ? <FaHeart className="text-red-500" /> : <FaRegHeart />}
                </button>

                <p className="mt-4 pt-10 text-sm font-semibold text-left leading-tight">{item.title}</p>
                <div className="mt-auto w-full flex justify-between items-center">
                  <p className="text-lg font-medium">{item.price} ₼</p>
                  <button
                    onClick={(e) => handleAddToCart(e, item)}
                    className="w-10 group-hover:w-[150px] h-10 bg-green-500 text-white rounded flex items-center overflow-hidden transition-all duration-300 ease-in-out px-2"
                  >
                    <HiOutlineShoppingCart className="w-5 h-5 min-w-[20px]" />
                    <span className="ml-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      Səbətə əlavə et
                    </span>
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-lg mt-10">Axtarışa uyğun heç nə tapılmadı</p>
          )}
        </div>
      </div>

      {filterOpen && (
        <div
          className="fixed inset-0 bg-black opacity-30 z-40 lg:hidden"
          onClick={() => setFilterOpen(false)}
        ></div>
      )}
    </div>
  );
}

export default WatchPage;
