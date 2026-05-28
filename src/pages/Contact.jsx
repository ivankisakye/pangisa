import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const contactInfo = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Email Us',
    value: 'info@tizaksoftware.com',
    href: 'mailto:info@tizaksoftware.com',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: 'Call Us',
    value: '+256 705 495 970',
    href: 'tel:+256705495970',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: 'Location',
    value: 'Kampala, Uganda',
    href: 'https://maps.google.com/?q=Kampala,Uganda',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    label: 'Website',
    value: 'tizaksoftware.com',
    href: 'https://tizaksoftware.com',
  },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', subject: '', message: '', role: 'tenant',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-900 to-indigo-900 pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle, white 1.5px, transparent 1.5px)', backgroundSize: '30px 30px' }} />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-blue-200 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
              Get In Touch
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Contact <span className="text-blue-300">TIZAK</span>
            </h1>
            <p className="text-blue-100 text-lg max-w-xl mx-auto">
              Have questions about Pangisa? Want to partner with us or list your property?
              We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-start">

            {/* Left — Info */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                Let's Build Uganda's Rental Future Together
              </h2>
              <p className="text-gray-500 leading-relaxed mb-10">
                Whether you're a tenant looking for a house, a landlord wanting to list,
                or a developer interested in partnering — reach out and we'll get back to you promptly.
              </p>

              <div className="space-y-5 mb-10">
                {contactInfo.map((item) => (
                  <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-300 rounded-2xl transition-all duration-300 group">
                    <div className="w-12 h-12 bg-blue-100 group-hover:bg-blue-600 text-blue-600 group-hover:text-white rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">{item.label}</p>
                      <p className="text-gray-900 font-semibold text-sm mt-0.5">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Back to TIZAK */}
              <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5">
                <p className="text-sm text-blue-800 font-semibold mb-1">Part of TIZAK Software Solutions</p>
                <p className="text-sm text-blue-600 mb-3">
                  Pangisa is a product by TIZAK. Visit our main website to learn more about what we build.
                </p>
                <a href="https://tizaksoftware.com" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-700 font-semibold text-sm hover:gap-3 transition-all">
                  Visit tizaksoftware.com
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </motion.div>

            {/* Right — Form */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}>
              {submitted ? (
                <div className="bg-blue-50 border border-blue-200 rounded-3xl p-12 text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-500 mb-6">
                    Thanks for reaching out. Our team will get back to you within 24 hours.
                  </p>
                  <button onClick={() => setSubmitted(false)}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-all">
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}
                  className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm space-y-5">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Send Us a Message</h3>

                  {/* Role */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">I am a...</label>
                    <div className="grid grid-cols-2 gap-2">
                      {['tenant', 'landlord', 'broker', 'other'].map(role => (
                        <button key={role} type="button"
                          onClick={() => setFormData({ ...formData, role })}
                          className={`py-2.5 px-4 rounded-xl text-sm font-semibold capitalize border transition-all ${
                            formData.role === role
                              ? 'bg-blue-600 text-white border-blue-600'
                              : 'bg-gray-50 text-gray-600 border-gray-200 hover:border-blue-300'
                          }`}>
                          {role}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name & Email */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Full Name</label>
                      <input type="text" name="name" required value={formData.name}
                        onChange={handleChange} placeholder="Kemani Mukisa"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email</label>
                      <input type="email" name="email" required value={formData.email}
                        onChange={handleChange} placeholder="kemani@gmail.com"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all" />
                    </div>
                  </div>

                  {/* Phone & Subject */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Phone</label>
                      <input type="tel" name="phone" value={formData.phone}
                        onChange={handleChange} placeholder="+256 705 496 970"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Subject</label>
                      <input type="text" name="subject" value={formData.subject}
                        onChange={handleChange} placeholder="e.g. List my property"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all" />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Message</label>
                    <textarea name="message" required rows={5} value={formData.message}
                      onChange={handleChange} placeholder="Tell us how we can help..."
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all resize-none" />
                  </div>

                  <button type="submit" disabled={loading}
                    className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-70 text-white font-bold py-4 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2">
                    {loading ? (
                      <>
                        <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </>
                    ) : 'Send Message'}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}