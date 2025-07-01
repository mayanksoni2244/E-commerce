import React, { useCallback, useState } from 'react'
import Card from './card.jsx'
import products from './product.js'
import { UseSearch } from './searchbar/search.jsx'
import Carousel from './Carousel.jsx'
import CategoryGrid from './CategoryGrid.jsx'

const Home = () => {
  const { search, setsearch } = UseSearch()
  const [selcat, setselcat] = useState('All')
  const productlist = products[0].products || []
  const filtered = selcat === 'All' ? productlist : productlist.filter((item) => item.category.name === selcat)
  const finalfiltered = filtered.filter((item) => item.title.toLowerCase().includes(search.toLowerCase()))
  function handlesearch(e) {
    debouncedSearch(e.target.value);
  }

  function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func(...args), delay);
    }
  }
  const debouncedSearch = useCallback(
    debounce((value) => {
      setsearch(value);
    }, 300),
    []);
  return (
    <>
      <div className="bg-zinc-300 min-h-screen pb-10">
        {/* Carousel */}
        <Carousel />

        {/* Category Grid */}
        <CategoryGrid setselcat={setselcat} />

        {/* Search + Filter Box */}
        <div className="combo flex justify-center mt-4 sticky top-15 z-10">
          <div
            className="backdrop-blur-md bg-white/30 border border-white/50 rounded-2xl p-4 flex flex-row flex-wrap items-center gap-2 w-full max-w-2xl shadow-lg"
          >

            {/* Filter */}
            <div className="flex items-center gap-2">
              <label className="text-gray-700 font-semibold">Filter:</label>
              <select
                name="filter"
                className="border rounded p-1"
                value={selcat}
                onChange={(e) => setselcat(e.target.value)}
              >
                <option value="All">All</option>
                <option value="Clothes">Clothes</option>
                <option value="Electronics">Electronics</option>
                <option value="Furniture">Furniture</option>
                <option value="Shoes">Shoes</option>
                <option value="Miscellaneous">Miscellaneous</option>
              </select>
            </div>

            {/* Search */}
            <input
              type="text"
              name="search"
              placeholder="Search products..."
              defaultValue={search}
              onChange={handlesearch}
              className="flex-1 min-w-[60px] p-2 rounded-xl border border-gray-300 bg-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>

        {/* Featured Products */}
        <div className="max-w-screen-2xl mx-auto mt-8 px-2">
          <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
          <div className="flex justify-center flex-wrap gap-5 bg-gradient-to-br from-yellow-400 via-yellow-200 to-yellow-500 rounded-xl">
            {productlist.slice(10, 14).map((product) => (
              <Card key={product.id} productObj={product} isFeatured />
            ))}
          </div>
        </div>

        {/* All Products */}
        <div className="max-w-screen-2xl mx-auto mt-8 px-2">
          <h2 className="text-2xl font-bold mb-4">All Products</h2>
          <div className="flex flex-wrap justify-center items-stretch gap-6">
            {finalfiltered.map((product) => (
              <Card key={product.id} productObj={product} />
            ))}
          </div>
        </div>
      </div>
    </>

  )
}

export default Home 
