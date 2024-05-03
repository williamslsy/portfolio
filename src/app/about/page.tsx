import React from 'react';
import { Metadata } from 'next';
import About from '../components/pages/about';

export const metadata: Metadata = {
  title: 'Sylvester Olawale',
  description: 'A full-stack developer portfolio built with Next.js',
  keywords: 'web development, web design, react, javascript, nextjs, typescript, solidity, node.js, html, css, styled-components, tailwind',
  openGraph: {
    title: 'Sylvester Olawale | About me',
    description: 'A full-stack developer portfolio built with Next.js',
    type: 'website',
    url: '/about',
    images: ['/images/olawale.JPG'],
    siteName: 'Sylvester Olawale',
    locale: 'en_US',
  },
};

const AboutPage = () => {
  return (
    <>
      <About />
    </>
  );
};

export default AboutPage;
