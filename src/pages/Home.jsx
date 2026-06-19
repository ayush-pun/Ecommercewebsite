import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="min-h-screen bg-white text-zinc-900">

      {/* HERO */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* LEFT */}
            <div className="space-y-8">

              <div>
                <span className="text-sm tracking-[0.3em] uppercase text-zinc-500">
                  Summer of 2026
                </span>

                <h1 className="mt-4 text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
                  NEW SUMMER
                  <br />
                  COLLECTION
                </h1>

                <h2 className="mt-4 text-2xl md:text-3xl font-light text-zinc-700">
                  30% OFF 2026
                </h2>

                <p className="mt-6 text-zinc-500 max-w-lg leading-relaxed">
                  Discover refined essentials designed for modern simplicity.
                  A curated collection focused on comfort and timeless style.
                </p>
              </div>

              <Link to="/products">
                <button className="bg-zinc-900 text-white px-8 py-4 rounded-full font-medium hover:bg-zinc-700 hover:scale-105 transition">
                  Shop Now
                </button>
              </Link>
            </div>

            {/* RIGHT IMAGE */}
            <div>
              <div className="h-130 bg-zinc-100 border border-zinc-200 rounded-3xl overflow-hidden">
                <img
                  src="src/assets/gandypic.jpg"
                  className="w-full h-full object-cover object-top hover:scale-105 transition duration-700"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* COLLECTION */}
      <section className="bg-white w-full">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 pb-24">

          <div className="mb-12">
            <h2 className="text-4xl font-bold">
              Shop By Collection
            </h2>
            <p className="text-zinc-500 mt-3">
              Explore curated categories designed for every style.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* MEN */}
            <Link
              to="/products?category=men"
              className="bg-white border border-zinc-200 rounded-3xl overflow-hidden hover:-translate-y-2 hover:shadow-lg transition"
            >
              <div className="h-80 bg-zinc-100 overflow-hidden">
                <img
                  src="src/assets/gandyformale.jpg"
                  className="w-full h-full object-cover object-top hover:scale-105 transition duration-700"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold">Men</h3>
                <p className="text-zinc-500 mt-2">Modern essentials for men.</p>
              </div>
            </Link>

            {/* WOMEN */}
            <Link
              to="/products?category=women"
              className="bg-white border border-zinc-200 rounded-3xl overflow-hidden hover:-translate-y-2 hover:shadow-lg transition"
            >
              <div className="h-80 bg-zinc-100 overflow-hidden">
                <img
                  src="src/assets/gigihadid.jpg"
                  className="w-full h-full object-cover object-top hover:scale-105 transition duration-700"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold">Women</h3>
                <p className="text-zinc-500 mt-2">Elegant everyday fashion.</p>
              </div>
            </Link>

            {/* ACCESSORIES */}
            <Link
              to="/products?category=accessories"
              className="bg-white border border-zinc-200 rounded-3xl overflow-hidden hover:-translate-y-2 hover:shadow-lg transition"
            >
              <div className="h-80 bg-zinc-100 overflow-hidden">
                <img
                  src="src/assets/watch.avif"
                  className="w-full h-full object-cover object-top hover:scale-105 transition duration-700"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold">Accessories</h3>
                <p className="text-zinc-500 mt-2">Watches, bags, sunglasses and more.</p>
              </div>
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
};

export default Home;