'use client';

import { useState } from 'react';
import { FaBars, FaTimes, FaHome, FaStore, FaInfoCircle, FaPhone,FaCartPlus } from 'react-icons/fa';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="bg-gradient-to-br from-red-900 via-orange-950 to-orange-900 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        <div className="text-2xl font-bold">
          <Link href="/">
            <li className="flex items-center space-x-2">
              <FaStore className="text-3xl text-orange-400" />
              <span>Gold Aura</span> {/* Updated name */}
            </li>
          </Link>
        </div>

        <button
          className="block md:hidden text-2xl transition-transform duration-300 hover:scale-110"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <nav className="hidden md:flex space-x-6 items-center">
          <Link href="/">
            <li className="flex items-center space-x-2 hover:text-orange-400 transition-colors duration-300">
              <FaHome className='text-orange-200'/>
              <span>Home</span>
            </li>
          </Link>
          <Link href="/Shop">
            <li className="flex items-center space-x-2 hover:text-orange-400 transition-colors duration-300">
              <FaStore className='text-orange-200' />
              <span>Shop</span>
            </li>
          </Link>
          <Link href="/About">
            <li className="flex items-center space-x-2 hover:text-orange-400 transition-colors duration-300">
              <FaInfoCircle className='text-orange-200'/>
              <span>About</span>
            </li>
          </Link>
          <Link href="/Contact">
            <li className="flex items-center space-x-2 hover:text-orange-400 transition-colors duration-300">
              <FaPhone className='text-orange-200' />
              <span>Contact</span>
            </li>
          </Link>
            <Link href="/cart">
      <li
        onClick={toggleMenu}
        className="flex items-center space-x-2 text-lg hover:text-orange-400 transition-colors duration-300"
      >
        <FaCartPlus className="text-orange-200" />
        <span>Cart</span>
      </li>
    </Link>
        </nav>
      </div>

      <div
        className={`absolute top-0 left-0 w-full bg-gradient-to-br from-red-900 via-orange-950 to-orange-900  text-white shadow-lg transform ${
          isMenuOpen ? 'translate-y-12' : '-translate-y-full'
        } transition-transform duration-500 ease-in-out md:hidden`} 
      >
        <nav className="flex flex-col items-center space-y-6 py-8">
          <Link href="/">
            <li
              onClick={toggleMenu}
              className="flex items-center space-x-2 text-lg hover:text-orange-400 transition-colors duration-300"
            >
              <FaHome className='text-orange-200'/>
              <span>Home</span>
            </li>
          </Link>
          <Link href="/Shop">
            <li
              onClick={toggleMenu}
              className="flex items-center space-x-2 text-lg hover:text-orange-400 transition-colors duration-300"
            >
              <FaStore className='text-orange-200'/>
              <span>Shop</span>
            </li>
          </Link>
          <Link href="/About">
            <li
              onClick={toggleMenu}
              className="flex items-center space-x-2 text-lg hover:text-orange-400 transition-colors duration-300"
            >
              <FaInfoCircle className='text-orange-200' />
              <span>About</span>
            </li>
          </Link>
          <Link href="/Contact">
            <li
              onClick={toggleMenu}
              className="flex items-center space-x-2 text-lg hover:text-orange-400 transition-colors duration-300"
            >
              <FaPhone className='text-orange-200'/>
              <span>Contact</span>
            </li>
          </Link>
          <Link href="/cart">
      <li
        onClick={toggleMenu}
        className="flex items-center space-x-2 text-lg hover:text-orange-400 transition-colors duration-300"
      >
        <FaCartPlus className="text-orange-200" />
        <span>Cart</span>
      </li>
    </Link>
        </nav>
      </div>
    </header>
  );
}
