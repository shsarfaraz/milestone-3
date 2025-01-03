import React from 'react';
import Image from 'next/image';

const Page = () => {
  return (
    <div>
      <Image
        height={210}
        width={720}
        alt="Current Offers"
        className="lg:h-48 md:h-36 w-1/4 object-cover object-center"
        src="https://di-uploads-development.dealerinspire.com/parksbuickgmcnc/uploads/2024/07/cta-current-offers-720x400-1.jpg"
        priority 
      />
    </div>
  );
};

export default Page;
