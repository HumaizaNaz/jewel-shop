"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaTachometerAlt, FaBox, FaCog, FaUserCircle, FaBars, FaFilter, FaSearch } from "react-icons/fa"; // React Icons for sidebar

const products = [
  { id: 1, name: 'Raj Ratan Necklace', price: 100, imageUrl: '/jw-1.jpg' }, 
  { id: 2, name: 'Golden Halo Necklace', price: 150, imageUrl: '/jw-2.jpg' },
  { id: 3, name: 'Sapphire Glow Necklace', price: 200, imageUrl: '/jw-3.jpg' },
  { id: 4, name: 'Golden Royal Bangles', price: 250, imageUrl: '/jw-4.jpg' }, 
  { id: 5, name: 'Golden Princess Bridal Set', price: 300, imageUrl: '/jw-5.jpg' }, 
  { id: 6, name: 'Majestic  Bridal  Choker', price: 350, imageUrl: '/jw-6.jpg' }, 
  { id: 7, name: 'Sapphire Bridal Necklace', price: 200, imageUrl: '/jw-7.jpg' }, 
  { id: 8, name: 'Bridal Empress Bangles', price: 300, imageUrl: '/jw-8.jpg' }, 
  { id: 9, name: "Limited Edition Gold Watch", price: 300, imageUrl: "/jw-9.jpg" },
  { id: 10, name: "Rare Diamond Watch", price: 800, imageUrl: "/jw-10.jpg" },
  { id: 11, name: "Ultra 7 Strap Watch", price: 1000, imageUrl: "/jw-11.jpg" },
  { id: 12, name: "Ultra S12 Watch", price: 1000, imageUrl: "/jw-12.jpg" },
  { id: 13, name: "X100 Ultra Watch", price: 400, imageUrl: "/jw-13.jpg" },
  { id: 14, name: "S20 Ultra Watch", price: 150, imageUrl: "/jw-14.jpg" },
  { id: 15, name: "Limited Edition Gold Watch", price: 460, imageUrl: "/jw-15.jpg" },
  { id: 16, name: "Rare Diamond Watch", price: 1000, imageUrl: "/jw-16.jpg" },
];

const AllProducts = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false); // Sidebar closed initially
  const [sortOption, setSortOption] = useState("default");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 1000]); // Price filter range (min, max)

  const sortedProducts = [...products]
    .filter((product) => categoryFilter === "all" || product.name.toLowerCase().includes(categoryFilter))
    .filter((product) => product.price >= priceRange[0] && product.price <= priceRange[1])
    .sort((a, b) => {
      if (sortOption === "low-high") return a.price - b.price;
      if (sortOption === "high-low") return b.price - a.price;
      return 0;
    });

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`${
          sidebarOpen ? "w-64" : "w-0"
        } bg-orange-950 text-white p-6 space-y-6 transition-all duration-300 overflow-hidden md:w-64 sm:w-64 hidden md:hidden lg:block`} // Hidden on small screens
      >
        <h3 className="text-2xl font-semibold mb-4">Dashboard</h3>
        <ul className="space-y-4">
  <li className="md:hidden sm:hidden">
    <Link href="/dashboard" passHref>
      <div className="flex items-center space-x-2 text-lg hover:text-blue-400">
        <FaTachometerAlt />
        <span>Dashboard</span>
      </div>
    </Link>
  </li>
  <li>
    <Link href="/products" passHref>
      <div className="flex items-center space-x-2 text-lg hover:text-orange-400">
        <FaBox className='text-orange-200'/>
        <span>All Products</span>
      </div>
    </Link>
  </li>
  <li>
    <Link href="/orders" passHref>
      <div className="flex items-center space-x-2 text-lg hover:text-orange-400">
        <FaBox className='text-orange-200'/>
        <span>Orders</span>
      </div>
    </Link>
  </li>
  <li>
    <Link href="/analytics" passHref>
      <div className="flex items-center space-x-2 text-lg hover:text-orange-400">
        <FaCog className='text-orange-200' />
        <span>Analytics</span>
      </div>
    </Link>
  </li>
  <li>
    <Link href="/help" passHref>
      <div className="flex items-center space-x-2 text-lg hover:text-orange-400">
        <FaCog className='text-orange-200'/>
        <span>Help</span>
      </div>
    </Link>
  </li>
  <li>
    <Link href="/reviews" passHref>
      <div className="flex items-center space-x-2 text-lg hover:text-orange-400">
        <FaUserCircle className='text-orange-200' />
        <span>Reviews</span>
      </div>
    </Link>
  </li>
  <li>
    <Link href="/faq" passHref>
      <div className="flex items-center space-x-2 text-lg hover:text-orange-400">
        <FaUserCircle className='text-orange-200'/>
        <span>FAQ</span>
      </div>
    </Link>
  </li>
</ul>

        <div className="border-t-2 border-gray-600 mt-4 pt-4" />
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="mt-6 py-2 px-4 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 md:hidden"
        >
          {sidebarOpen ? "Close Sidebar" : <FaBars />}
        </button>
      </div>

      {/* Main Content */}
      <div className="w-full p-10">
        {/* Heading */}
        <motion.h2
          className="text-4xl font-extrabold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-800 to-orange-950"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          All Products
        </motion.h2>

        {/* Filters and Price Range */}
        <div className="mb-6 flex flex-col sm:flex-row justify-between items-center space-x-0 sm:space-x-4">
          <div className="flex items-center mb-4 sm:mb-0">
            <FaFilter className="mr-2 text-xl" />
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="py-2 px-4 rounded-lg bg-gray-200 text-gray-700"
            >
              <option value="default">Sort By</option>
              <option value="low-high">Price: Low to High</option>
              <option value="high-low">Price: High to Low</option>
            </select>
          </div>

          <div className="flex items-center mb-4 sm:mb-0">
            <label htmlFor="price-range" className="mr-2 text-lg">Price Range</label>
            <input
              type="range"
              id="price-range"
              min="0"
              max="1000"
              step="10"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
              className="w-32 "
            />
            <span className="ml-2 text-gray-700">${priceRange[1]}</span>
          </div>

          {/* Search Bar */}
          <div className="flex items-center mb-4 sm:mb-0 w-full sm:w-auto">
            <FaSearch className="mr-2 text-xl" />
            <input
              type="text"
              placeholder="Search Products"
              className="py-2 px-4 rounded-lg bg-gray-200 text-gray-700 w-full sm:w-[100%] md:w-[20vw] lg:w-64"
              onChange={(e) => setCategoryFilter(e.target.value.toLowerCase())}
            />
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedProducts.map((product) => (
            <motion.div
              key={product.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transform transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
            >
              <div className="overflow-hidden rounded-t-xl">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  width={200}
                  height={200}
                  className="w-full h-56 object-cover mb-4 transition-transform duration-300 transform hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-orange-950">{product.name}</h3>
                <p className="text-lg font-medium text-orange-600 mb-4">${product.price}</p>
                <Link href={`/product/${product.id}`} passHref>
                  <button className="w-full bg-gradient-to-r from-orange-800 to-orange-950 text-white py-2 rounded-lg shadow-md hover:bg-blue-500 transition-all duration-300">
                    View Details
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
