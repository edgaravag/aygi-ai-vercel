import React from 'react';
import Image from 'next/image';
import NotFoundImage from '@public/plants/notfound.webp';

const NotFound = () => {
  return (
    <>
      <div className="mx-auto max-w-max">
        <Image src={NotFoundImage} width={988} height={817} alt="Not Found" />
      </div>
    </>
  );
};

export default NotFound;
