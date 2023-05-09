import { FC, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export const Navbar: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPanelOpen, setIsPanelOpen] = useState(false);


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex h-[50px] sm:h-[60px] border-b border-neutral-300 py-2 px-2 sm:px-8 items-center justify-between">
      <div className="font-bold text-2xl flex items-center">
        <Link href="/" className="flex items-center">
          {/* <Image src="/logo3.png" alt="Logo" height={40} width={40*1080/300} /> */}
          <Image src="/logo1.png" alt="Logo" width={28} height={28} />
          <span className="cursor-pointer ml-2 hover:opacity-50">ClimateQ&A</span>
        </Link>
      </div>
      <div className="hidden sm:flex items-center space-x-4">
        <div className="relative group">
          <div className="inline-flex items-center">
            <span className="cursor-pointer hover:text-blueqa-500">
              About ClimateQ&A
            </span>
            <svg
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            >
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 group-hover:opacity-100 transition duration-200">
            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              <Link href="/methodology">
                <div
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
                  role="menuitem"
                >
                  Methodology
                </div>
              </Link>
              <Link href="/carbon-footprint">
                <div
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
                  role="menuitem"
                >
                  Carbon Footprint
                </div>
              </Link>
            </div>
          </div>
        </div>
        <a
          className="hover:text-blueqa-700"
          href="https://github.com/your-username/your-repo" // Replace with the actual GitHub URL
          target="_blank"
        >
          GitHub
        </a>
        <a
          className="hover:text-blueqa-700"
          href="https://www.ekimetrics.com" // Update the href to the actual URL of Ekimetrics
          target="_blank"
        >
          Ekimetrics
        </a>
      </div>
      <div className="flex sm:hidden">
        <button onClick={() => setIsPanelOpen(!isPanelOpen)} className="rounded-md p-2">
          <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {isPanelOpen && (
        <div className="fixed inset-y-0 left-0 z-40 w-64 p-4 bg-white shadow-lg transition-all duration-300 sm:hidden">
          <div className="flex flex-col space-y-4">
            <div className="relative group">
              <div className="flex flex-col space-y-2">
                <div className="flex items-center cursor-pointer hover:text-blueqa-500" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                  <span>About ClimateQ&A</span>
                  <svg
                    className={`w-4 h-4 ml-1 transition-transform duration-200 ${isMenuOpen ? 'transform rotate-180' : ''}`}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                {isMenuOpen && (
                  <div className="flex flex-col space-y-1">
                    <Link href="/methodology">
                      <div
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
                        role="menuitem"
                      >
                        Methodology
                      </div>
                    </Link>
                    <Link href="/carbon-footprint">
                      <div
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
                        role="menuitem"
                      >
                        Carbon Footprint
                      </div>
                    </Link>
                  </div>
                )}
              </div>
            </div>
            <a
              className="hover:text-blueqa-700"
              href="https://github.com/your-username/your-repo" // Replace with the actual GitHub URL
              target="_blank"
          >
              GitHub
            </a>
            <a
              className="hover:text-blueqa-700"
              href="https://www.ekimetrics.com" // Update the href to the actual URL of Ekimetrics
              target="_blank"
            >
              Ekimetrics
            </a>
          </div>
        </div>
      )}
    </div>
  );
};