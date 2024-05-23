'use client';
import RightAside from './_components/rightAside/RightAside';
import Header from './_components/header/Header';
import LeftAside from './_components/leftAside/LeftAside';
import dynamic from 'next/dynamic';
import { usePathname, useRouter } from 'next/navigation';
const Footer = dynamic(() => import('../_components/footer/Footer'));

export default function RootLayout({ children }) {
  const router = usePathname();
  const path = useRouter();

  const accessToken = localStorage.getItem('accessToken');

  if (accessToken) {
    return (
      <div className='bg-[#F7F7F7]'>
        <Header />
        <div className='w-full flex pt-[104px]'>
          <LeftAside path={router} />
          <main className='px-8 py-9 mx-auto'>{children}</main>
          {router.includes('/faq/questions') ||
          router.includes('/library') ? null : (
            <RightAside />
          )}
        </div>
        {router.includes('/faq/questions') || router.includes('/library') ? (
          <Footer />
        ) : null}
      </div>
    );
  } else {
    path.push('/');
  }
}
