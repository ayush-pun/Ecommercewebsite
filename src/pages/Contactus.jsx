import React from "react";

const Contactus = () => {
  return (
    <main className="min-h-screen bg-white text-zinc-900">

      {/* HERO */}
      <section className="border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28 text-center">

          <span className="text-sm tracking-[0.3em] uppercase text-zinc-500">
            Contact Us
          </span>

          <h1 className="mt-6 text-5xl md:text-6xl font-black leading-tight">
            Let’s Talk Fashion
          </h1>

          <p className="mt-6 text-zinc-500 max-w-2xl mx-auto leading-relaxed">
            Have questions about your order, sizing, or our collections?
            We’re here to help you with anything you need.
          </p>

        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-2 gap-12">

          {/* FORM (UI ONLY) */}
          <div className="space-y-6">

            <div>
              <label className="text-sm text-zinc-600">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full mt-2 px-4 py-3 border border-zinc-200 rounded-xl focus:outline-none focus:border-zinc-900 transition"
              />
            </div>

            <div>
              <label className="text-sm text-zinc-600">Email</label>
              <input
                type="email"
                placeholder="Your email"
                className="w-full mt-2 px-4 py-3 border border-zinc-200 rounded-xl focus:outline-none focus:border-zinc-900 transition"
              />
            </div>

            <div>
              <label className="text-sm text-zinc-600">Message</label>
              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full mt-2 px-4 py-3 border border-zinc-200 rounded-xl focus:outline-none focus:border-zinc-900 transition resize-none"
              />
            </div>

            <button className="
              bg-zinc-900 text-white
              px-8 py-4 rounded-full
              font-medium
              hover:bg-zinc-700 hover:scale-105
              transition-all duration-300
            ">
              Send Message
            </button>

          </div>

          {/* INFO PANEL */}
          <div className="space-y-8">

            <div className="bg-zinc-50 border border-zinc-200 rounded-3xl p-8">
              <h2 className="text-xl font-bold">Customer Support</h2>
              <p className="text-zinc-500 mt-3">
                We respond within 24–48 hours for all inquiries.
              </p>
            </div>

            <div className="bg-white border border-zinc-200 rounded-3xl p-8">
              <h2 className="text-xl font-bold">Email</h2>
              <p className="text-zinc-500 mt-3">
                support@yourbrand.com
              </p>
            </div>

            <div className="bg-white border border-zinc-200 rounded-3xl p-8">
              <h2 className="text-xl font-bold">Working Hours</h2>
              <p className="text-zinc-500 mt-3">
                Monday – Friday<br />
                9:00 AM – 6:00 PM
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="border-t border-zinc-200">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">

          <h2 className="text-4xl font-bold">
            We’re Here to Help
          </h2>

          <p className="text-zinc-500 mt-4">
            Fashion questions, order help, or collaboration — reach out anytime.
          </p>

        </div>
      </section>

    </main>
  );
};

export default Contactus;