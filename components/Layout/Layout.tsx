import { FC } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import Head from "next/head";

interface LayoutProps {
  title?: string;
  description?: string;
}

export const Layout: FC<LayoutProps> = ({ title, description, children }) => {
  return (
    <>
      <Head>
        <title>{title || 'ClimateQ&A'}</title>
        <meta
          name="description"
          content={
            description ||
            "A simple chatbot starter kit for OpenAI's chat model using Next.js, TypeScript, and Tailwind CSS."
          }
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="icon"
          href="/logo1.png"
        />
      </Head>

      <div className="flex flex-col h-screen">
        <Navbar />
        <div className="flex-1 overflow-auto sm:px-10 pb-2 sm:pb-10">
          {children}
        </div>
        {/* <Footer /> */}
      </div>
    </>
  );
};
