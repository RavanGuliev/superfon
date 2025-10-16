import { useEffect, useState } from "react";
import { getAllCategory } from "../../services";
import React from 'react';
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router";

function Menu() {
  const [data, setData] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    getAllCategory().then(items => {
      setData(items);
      setLoading(false); 
    });
  }, []);

  const visibleItems = showAll ? data : data.slice(0, 8);

 
  if (loading) return (
    <div className="w-[350px] bg-white rounded-md border border-[#e5e8ec] p-4 space-y-2">
      {Array.from({ length: 14 }).map((_, idx) => (
        <div key={idx} className="h-6 bg-gray-200 rounded animate-pulse"></div>
      ))}
    </div>
  );

  return (
    <div className="w-[350px] bg-white rounded-md border border-[#e5e8ec] transition-all duration-300 text-[14.4px] rubik hidden sm:hidden md:hidden lg:inline xl:inline">
      {visibleItems.map((item, index) => (
        <div key={index} className="relative group">
          <Link to="/watch">
            <div className="px-4 py-4.5 hover:bg-[#021523] flex justify-between hover:text-white cursor-pointer border-b border-[#e5e8ec]">
              {item.title} <IoIosArrowForward />
            </div>
          </Link>

          {Array.isArray(item.children) && item.children.length > 0 && (
            <div className="absolute h-[420px] overflow-y-auto top-0 left-full ml-2 w-64 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
              <div className="px-4 py-4.5 cursor-pointer hover:underline underline-offset-4 text-[#3c1e6e] font-medium border-b border-[#e5e8ec]">
                <Link to="/watch">{item.title}</Link>
              </div>
              {item.children.map((child, childIndex) => (
                <div key={childIndex} className="px-4 py-4.5 hover:underline underline-offset-3 cursor-pointer">
                  <Link to="/watch">{child.title}</Link>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}

      {data.length > 7 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="w-full py-3 text-center hover:underline"
        >
          {showAll ? "Daha az göstər" : "Daha çox göstər"}
        </button>
      )}
    </div>
  );
}

export default Menu;
