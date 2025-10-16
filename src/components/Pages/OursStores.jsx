import React, { useEffect, useState } from 'react';
import { BiPhoneCall } from 'react-icons/bi';
import { IoLocationOutline } from 'react-icons/io5';
import { getAllAddress } from '../../services';

function OurStores() {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    getAllAddress().then((data) => {
      setStores(data);
    });
  }, []);

  const bakuStores = stores.filter(store => store.city.title === 'Bakı');
  const otherStores = stores.filter(store => store.city.title !== 'Bakı');

  const StoreCard = ({ item }) => (
    <div className='w-[215px] border border-gray-200 py-[15px] px-[20px] shadow-lg rounded-md hover:border-[#0070dc]'>
      <p className='text-[#0070dc] font-semibold'>{item.title}</p>
      <div className='flex items-start gap-2 pt-[20px] pb-[5px]'>
        <IoLocationOutline className='text-[20px] mt-[2px]' />
        <p className='text-[14.4px]'>{item.city.title}, {item.address}</p>
      </div>
      <div className='flex items-center gap-2'>
        <BiPhoneCall />
        <p className='text-[14.4px] hover:text-[#0070dc]'>{item.mobiles?.[0]?.mobile}</p>
      </div>
    </div>
  );

  return (
    <div className='max-w-[1400px] mx-auto rubik'>
      <h1 className='pt-5 px-4 text-[22.4px] font-semibold'>Mağazalarımız</h1>
      <div className="w-[100px] h-px bg-gray-200 my-3   " />
        <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97253.10945067908!2d49.759169698703694!3d40.383153673420985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d2f8c5608d1%3A0xf81a4107d2f23293!2sSuperfon%2028%20May!5e0!3m2!1sen!2saz!4v1756307692570!5m2!1sen!2saz" className=" max-w-[450px] w-full pt-3 mx-auto h-[400px] border-0 rounded-lg shadow-md" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" ></iframe>

    
      {bakuStores.length > 0 && (
        <>
          <p className='text-[20px] px-4 mt-8 mb-4 max-w-[618px] mx-auto'>Bakı şəhəri</p>
          <div className='flex flex-wrap max-w-[618px] mx-auto  gap-4 px-4'>
            {bakuStores.map(item => (
              <StoreCard key={item.id} item={item} />
            ))}
          </div>
        </>
      )}

 
      {otherStores.length > 0 && (
        <>
          <p className='text-[20px] max-w-[618px] mx-auto  px-4 mt-10 mb-4'>Digər şəhər və rayonlar</p>
          <div className='flex flex-wrap max-w-[618px] mx-auto gap-4 px-4 pb-13'>
            {otherStores.map(item => (
              <StoreCard key={item.id} item={item} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default OurStores;
