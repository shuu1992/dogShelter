import './globals.css';
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';
import { CssBaseline } from '@mui/material';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Dog Shelter',
  description: 'Adopt adorable dogs from our shelter',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className={inter.className}>
        <DefaultSeo {...SEO} />
        <CssBaseline />
        {children}
      </body>
    </html>
  );
}
