import React from "react";

const About = () => {
  return (
    <main className="min-h-screen bg-white text-zinc-900">

      {/* HERO SECTION */}
      <section className="border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28 text-center">

          <span className="text-sm tracking-[0.3em] uppercase text-zinc-500">
            About Our Brand
          </span>

          <h1 className="mt-6 text-5xl md:text-6xl font-black leading-tight">
            Minimal Fashion,
            <br />
            Maximum Identity
          </h1>

          <p className="mt-6 text-zinc-500 max-w-2xl mx-auto leading-relaxed">
            We create timeless clothing for men and women who value simplicity,
            confidence, and modern elegance. Every piece is designed with precision,
            comfort, and a refined aesthetic in mind.
          </p>

        </div>
      </section>

      {/* MISSION SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* TEXT */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">
              Our Mission
            </h2>

            <p className="text-zinc-500 leading-relaxed">
              We believe fashion should be simple, powerful, and effortless.
              Our collections are inspired by modern streetwear and luxury minimalism,
              blending comfort with elegance.
            </p>

            <p className="text-zinc-500 leading-relaxed">
              From daily essentials to standout pieces, we focus on quality fabrics,
              clean silhouettes, and timeless design.
            </p>
          </div>

          {/* IMAGE */}
          <div className="h-[420px] bg-zinc-100 rounded-3xl overflow-hidden border border-zinc-200">
            <img
              src="src/assets/cover.avif"
              className="w-full h-full object-cover object-top hover:scale-105 transition duration-700"
            />
          </div>

        </div>
      </section>

      {/* VALUES SECTION */}
      <section className="bg-zinc-50 border-t border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-6 py-20">

          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">
              What We Stand For
            </h2>
            <p className="text-zinc-500 mt-3">
              Built on simplicity, quality, and intention.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white border border-zinc-200 rounded-3xl p-8 hover:-translate-y-2 transition duration-300">
              <h3 className="text-xl font-bold">Minimal Design</h3>
              <p className="text-zinc-500 mt-3">
                Clean silhouettes that focus on essentials, not excess.
              </p>
            </div>

            <div className="bg-white border border-zinc-200 rounded-3xl p-8 hover:-translate-y-2 transition duration-300">
              <h3 className="text-xl font-bold">Premium Quality</h3>
              <p className="text-zinc-500 mt-3">
                Carefully selected materials for long-lasting wear.
              </p>
            </div>

            <div className="bg-white border border-zinc-200 rounded-3xl p-8 hover:-translate-y-2 transition duration-300">
              <h3 className="text-xl font-bold">Modern Identity</h3>
              <p className="text-zinc-500 mt-3">
                Designed for people who express themselves through simplicity.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-24 text-center">

        <h2 className="text-4xl font-bold">
          Redefine Your Style With Us
        </h2>

        <p className="text-zinc-500 mt-4 max-w-xl mx-auto">
          Explore our collections and experience fashion built on clarity and confidence.
        </p>

        <button className="
          mt-8
          bg-zinc-900 text-white
          px-8 py-4 rounded-full
          font-medium
          hover:bg-zinc-700 hover:scale-105
          transition-all duration-300
        ">
          Explore Collection
        </button>

      </section>

    </main>
  );
};

export default About;