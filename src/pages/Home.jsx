import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

// ============ DATA ============

const userTypes = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    title: 'Tenants',
    color: 'bg-blue-100 text-blue-600',
    description: 'Search, filter, and view available rental houses near you — all from your phone.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: 'Landlords',
    color: 'bg-indigo-100 text-indigo-600',
    description: 'List your properties, upload photos, and connect directly with verified tenants.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Brokers & Agents',
    color: 'bg-purple-100 text-purple-600',
    description: 'Promote properties, manage listings, and grow your client base on one platform.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: 'Estate Managers',
    color: 'bg-emerald-100 text-emerald-600',
    description: 'Manage multiple properties on behalf of landlords from a single dashboard.',
  },
]

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    title: 'Smart Property Search',
    description: 'Find rental houses by location, price range, and property type — instantly.',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L13 13.414V19a1 1 0 01-.553.894l-4 2A1 1 0 017 21v-7.586L3.293 6.707A1 1 0 013 6V4z" />
      </svg>
    ),
    title: 'Advanced Filters',
    description: 'Narrow your search by neighbourhood, price, bedrooms, and amenities.',
    color: 'from-indigo-500 to-indigo-600',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Real Property Photos',
    description: "Every listing includes verified images so you know exactly what you're viewing.",
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Location-Based Discovery',
    description: 'Browse properties on a map and discover rentals close to where you need to be.',
    color: 'from-cyan-500 to-cyan-600',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: 'Direct Contact',
    description: 'Message landlords and agents directly — no middlemen, no delays.',
    color: 'from-emerald-500 to-emerald-600',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Verified Listings',
    description: 'Listings are reviewed for accuracy — no fake properties, no outdated ads.',
    color: 'from-rose-500 to-rose-600',
  },
]

const problems = [
  { label: 'Scattered listings', sub: 'across brokers, signposts & social media' },
  { label: 'Physical searching', sub: 'walking neighbourhoods to find houses' },
  { label: 'Outdated info', sub: 'houses already taken still advertised' },
  { label: 'No direct contact', sub: 'multiple middlemen slow everything down' },
]

const solutions = [
  { label: 'Centralized marketplace', sub: 'all properties in one trusted place' },
  { label: 'Search from anywhere', sub: 'browse on your phone in seconds' },
  { label: 'Accurate & verified', sub: 'listings reviewed for honesty' },
  { label: 'Contact owners directly', sub: 'chat with landlords instantly' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: 'easeOut' },
  }),
}

// ============ HERO — dark background so navbar is always visible ============

function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-900 min-h-screen flex items-center overflow-hidden">

      {/* Dot grid */}
      <div className="absolute inset-0 opacity-20 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      {/* Glow blobs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT */}
          <div>
            <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-blue-200 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
              By TIZAK Software Solutions · Uganda
            </motion.div>

            <motion.h1 variants={fadeUp} initial="hidden" animate="visible" custom={1}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Find Your
              <span className="block text-blue-400"> Perfect Rental</span>
              Anywhere in Uganda
            </motion.h1>

            <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={2}
              className="text-lg text-blue-100/80 leading-relaxed mb-8 max-w-xl">
              Pangisa connects tenants, landlords, brokers, and estate managers
              on one modern platform — making house hunting easier, faster, and smarter.
            </motion.p>

            <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={3}
              className="flex flex-col sm:flex-row gap-4 mb-10">
              <a href="#features"
                className="inline-flex items-center justify-center bg-blue-500 hover:bg-blue-400 text-white px-7 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-blue-400/40">
                Explore Features
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <Link to="/contact"
                className="inline-flex items-center justify-center border border-white/30 hover:border-white/60 hover:bg-white/10 text-white px-7 py-4 rounded-xl font-semibold transition-all duration-300">
                Contact Us
              </Link>
            </motion.div>

            {/* Social proof */}
            <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={4}
              className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[
                  'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=80&q=80',
                  'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=80&q=80',
                  'https://images.unsplash.com/photo-1507152832244-10d45c7eda57?w=80&q=80',
                ].map((img, i) => (
                  <img key={i} src={img} alt="user"
                    className="w-10 h-10 rounded-full border-2 border-white/30 object-cover" />
                ))}
              </div>
              <div>
                <div className="flex text-yellow-400 text-sm">★★★★★</div>
                <p className="text-sm text-blue-200/70">Trusted by tenants & landlords across Uganda</p>
              </div>
            </motion.div>
          </div>

          {/* RIGHT — image card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block">

            <div className="overflow-hidden rounded-3xl shadow-2xl ring-1 ring-white/10">
              <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80"
                alt="Rental House" className="w-full h-[520px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
            </div>

            {/* Floating Card 1 */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="absolute top-8 -left-10 bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-4 border border-white/50">
              <p className="text-xs text-gray-400 mb-1 font-medium">Properties Listed</p>
              <p className="text-3xl font-bold text-gray-900">120+</p>
              <p className="text-xs text-blue-600 font-semibold mt-0.5">↑ New this week</p>
            </motion.div>

            {/* Floating Card 2 */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="absolute bottom-8 -right-10 bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-4 border border-white/50 w-56">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-xl bg-blue-100 flex items-center justify-center text-lg">🏠</div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">House Found</p>
                  <p className="text-xs text-gray-400">Ntinda, Kampala</p>
                </div>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-1.5">
                <div className="bg-blue-600 h-1.5 rounded-full w-4/5" />
              </div>
              <p className="text-xs text-gray-400 mt-1.5">Move-in ready · 2 bedrooms</p>
            </motion.div>

            {/* Floating badge */}
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.3 }}
              className="absolute top-1/2 -right-5 -translate-y-1/2 bg-blue-600 text-white rounded-2xl shadow-xl p-3 flex flex-col items-center">
              <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-xs font-bold">Verified</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: '120+', label: 'Properties Listed' },
            { value: '4', label: 'Districts Covered' },
            { value: '100%', label: 'Verified Listings' },
            { value: 'Free', label: 'To Get Started' },
          ].map((stat, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl px-5 py-4 text-center">
              <p className="text-2xl font-bold text-white">{stat.value}</p>
              <p className="text-blue-200/70 text-sm mt-0.5">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// ============ WHAT IS PANGISA ============

function WhatIsPangisa() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest bg-blue-50 px-4 py-1.5 rounded-full inline-block mb-4">
              What Is Pangisa?
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 leading-tight">
              Rental Discovery, <span className="text-blue-600">Simplified</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              In Uganda, finding a rental house still means walking streets, calling brokers, and checking scattered WhatsApp groups. It's slow, unreliable, and frustrating.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              <strong className="text-gray-900">Pangisa changes that.</strong> Just like ride-hailing apps replaced street taxis, Pangisa centralizes Uganda's rental market into one clean, digital platform — where tenants search, landlords list, and everyone connects in seconds.
            </p>
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 flex items-start gap-4">
              <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-blue-800 mb-1">The Pangisa Idea</p>
                <p className="text-sm text-blue-700 leading-relaxed">
                  Transportation moved from street taxis to apps. Rentals in Uganda are making the same leap — and Pangisa is leading it.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-2xl p-5 border border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm font-bold text-gray-700 uppercase tracking-wide">Before Pangisa</span>
                </div>
                <div className="space-y-2.5">
                  {problems.map(p => (
                    <div key={p.label} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                      <div>
                        <span className="text-sm font-semibold text-gray-800">{p.label}</span>
                        <span className="text-xs text-gray-500 ml-2">— {p.sub}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center shadow-md">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              </div>
              <div className="bg-blue-600 rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm font-bold text-white uppercase tracking-wide">With Pangisa</span>
                </div>
                <div className="space-y-2.5">
                  {solutions.map(s => (
                    <div key={s.label} className="flex items-start gap-3">
                      <svg className="w-4 h-4 text-green-300 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <span className="text-sm font-semibold text-white">{s.label}</span>
                        <span className="text-xs text-blue-200 ml-2">— {s.sub}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ============ WHO IT'S FOR ============

function WhoItsFor() {
  return (
    <section id="who-its-for" className="py-20 md:py-28 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:40px_40px] opacity-30 pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-14">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest bg-blue-50 px-4 py-1.5 rounded-full">Who It's For</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-4">
            Built for Everyone in the Rental Chain
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto mt-4">
            Whether you're searching for a house, listing a property, or managing dozens of units — Pangisa has a place for you.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {userTypes.map((user, i) => (
            <motion.div key={user.title}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-md p-6 transition-all duration-300">
              <div className={`w-12 h-12 rounded-xl ${user.color} flex items-center justify-center mb-4`}>
                {user.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{user.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{user.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============ FEATURES ============

function Features() {
  return (
    <section id="features" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-14">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest bg-blue-50 px-4 py-1.5 rounded-full">Platform Features</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-4">
            Everything You Need to Find Home
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto mt-4">
            Pangisa packs the tools tenants, landlords, and agents need into one clean, fast mobile experience.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div key={feature.title}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-white rounded-2xl border border-gray-200 hover:border-blue-400 hover:shadow-md p-6 transition-all duration-300">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 text-white shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============ HOW IT WORKS ============

function HowItWorks() {
  const steps = [
    {
      step: '01',
      title: 'Create Your Account',
      desc: 'Sign up as a tenant, landlord, or agent in under a minute.',
      icon: (
        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
        </svg>
      ),
    },
    {
      step: '02',
      title: 'Search or List',
      desc: 'Tenants search by location and filters. Landlords post listings with photos and pricing.',
      icon: (
        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
    },
    {
      step: '03',
      title: 'Connect & Move In',
      desc: 'Contact the landlord or agent directly and arrange your visit — no broker fees needed.',
      icon: (
        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
    },
  ]

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-gradient-to-br from-blue-900 to-indigo-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, white 1.5px, transparent 1.5px)', backgroundSize: '30px 30px' }} />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-14">
          <span className="text-blue-300 font-semibold text-sm uppercase tracking-widest bg-white/10 px-4 py-1.5 rounded-full">How It Works</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4">
            Get a Rental in 3 Simple Steps
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-14 left-[calc(16.66%+2rem)] right-[calc(16.66%+2rem)] h-px bg-white/20" />
          {steps.map((step, i) => (
            <motion.div key={step.step}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.15 }}
              className="text-center">
              <div className="relative inline-flex mb-5">
                <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center mx-auto">
                  {step.icon}
                </div>
                <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-blue-400 text-white text-xs font-bold flex items-center justify-center">
                  {step.step.slice(1)}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-blue-100 leading-relaxed max-w-xs mx-auto">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============ CTA ============



// ============ PAGE ============

export default function Home() {
  return (
    <>
      <Hero />
      <WhatIsPangisa />
      <WhoItsFor />
      <Features />
      <HowItWorks />
      
    </>
  )
}