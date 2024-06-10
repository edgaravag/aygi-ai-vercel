'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import NotFoundImage from '@public/plants/notfound.webp';
import Footer from './_components/footer/Footer';
import Header from './(mainPages)/_components/header/Header';

const NotFound = () => {
  return (
    <>
      <Header />
      <div className="pt-[104px] mx-auto px-4 sm:px-8 md:px-16 lg:px-32 xl:px-56 2xl:px-72 text-center mb-10">
        <Image src={NotFoundImage} layout="responsive" width={536} height={443} alt="Not Found" />
        <div className="mt-8 flex justify-center">
          <Link href="/mygarden" passHref>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
              Go to My Garden
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
