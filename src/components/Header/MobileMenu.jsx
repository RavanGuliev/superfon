import { useEffect, useState } from "react";
import { getAllCategory } from "../../services";
import React from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router";

function MobileMenu() {
  const [data, setData] = useState([]);
  const [history, setHistory] = useState([]); 

  useEffect(() => {
    getAllCategory().then((items) => {
      setData(items);
      setHistory([items]); 
    });
  }, []);

  const currentMenu = history[history.length - 1]; 

  const enterSubmenu = (children) => {
    if (Array.isArray(children) && children.length > 0) {
      setHistory((prev) => [...prev, children]);
    }
  };

  const goBack = () => {
    if (history.length > 1) {
      setHistory((prev) => prev.slice(0, prev.length - 1));
    }
  };

  return (
    <div className="w-full bg-white  border-t border-[#ccc] p-2">
      {history.length > 1 && (
        <button
          onClick={goBack}
          className="flex items-center gap-2 px-4 py-2 mb-2 border-b border-[#ccc] w-full "
        >
          <IoIosArrowBack /> 
        </button>
       
      )}

      {currentMenu?.map((item, index) => (
        <div key={index}>
          <div
            className="px-4 py-3  flex justify-between items-center  cursor-pointer border-b border-[#ccc]"
            onClick={() => enterSubmenu(item.children)}
          >
            <Link to="/watch">
            {item.title}
            </Link>
            {Array.isArray(item.children) && item.children.length > 0 && (
              <IoIosArrowForward />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default MobileMenu;
