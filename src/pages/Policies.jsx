import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// ============ DATA ============

const policies = [
  {
    id: 'privacy',
    label: 'Privacy Policy',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    sections: [
      {
        title: 'Information We Collect',
        content: 'We may collect the following information to provide and improve our services:',
        list: [
          'Full name and email address',
          'Phone number and profile information',
          'Property listing information and photos',
          'Location information and device data',
          'App usage data and in-platform messages',
        ],
      },
      {
        title: 'How We Use Your Information',
        content: 'Collected information is used to:',
        list: [
          'Provide rental marketplace services',
          'Connect tenants with landlords and brokers',
          'Verify users and listings',
          'Prevent fraud, abuse, and ensure platform security',
          'Respond to support requests and improve user experience',
        ],
      },
      {
        title: 'User-Generated Content',
        content:
          'Users may upload listings, descriptions, images, messages, and profile information. Users are fully responsible for the content they upload. We reserve the right to remove any content that violates our policies, is misleading, promotes fraud, or creates safety concerns.',
      },
      {
        title: 'Data Sharing',
        content:
          'We do not sell personal information. We may share limited information with trusted service providers, where required by law, or to protect users and platform safety.',
      },
      {
        title: 'Data Security',
        content:
          'We implement reasonable administrative and technical measures to protect user information. However, no online platform can guarantee absolute security.',
      },
      {
        title: 'User Rights',
        content: 'Users may:',
        list: [
          'Access their personal information',
          'Update account details at any time',
          'Request account deletion',
          'Contact support regarding their data',
        ],
      },
      {
        title: 'Account Deletion',
        content:
          'Users may request deletion of their account through app settings or by contacting info@tizaksoftware.com. Upon deletion, user information may be removed or anonymized in accordance with legal and operational obligations.',
      },
      {
        title: "Children's Privacy",
        content:
          'Pangisa is not intended for children under the age of 18. The platform is designed for individuals seeking housing, property listings, and rental-related services. Users under 18 should not create accounts or use Pangisa without parental or guardian supervision.',
      },
      {
        title: 'Changes to This Policy',
        content:
          'We may update this Privacy Policy periodically. Users are encouraged to review this page regularly to stay informed of any changes.',
      },
    ],
  },
  {
    id: 'terms',
    label: 'Terms & Conditions',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    sections: [
      {
        title: 'Platform Purpose',
        content:
          'Pangisa is a rental marketplace platform connecting tenants, landlords, brokers, and housing-related service providers across Uganda.',
      },
      {
        title: 'Eligibility',
        content:
          'Users must provide accurate information during registration and use the platform lawfully. By accessing Pangisa, you confirm you meet eligibility requirements.',
      },
      {
        title: 'User Responsibilities',
        content: 'By using Pangisa, users agree to:',
        list: [
          'Provide truthful and accurate information',
          'Post only genuine and verified listings',
          'Communicate respectfully with all platform users',
          'Avoid fraudulent or misleading activity',
          'Comply with all applicable laws and regulations',
        ],
      },
      {
        title: 'Prohibited Activities',
        content: 'Users must not:',
        list: [
          'Post fake or misleading property listings',
          'Impersonate other users or organizations',
          'Upload illegal, harmful, or offensive content',
          'Engage in fraud, scams, or financial deception',
          'Harass, spam, or abuse platform users',
          'Misuse Pangisa services in any way',
        ],
      },
      {
        title: 'Listings and User Content',
        content:
          'Users are solely responsible for listing accuracy, uploaded images, pricing, descriptions, and communications. Pangisa reserves the right to remove content that violates policies or creates safety concerns.',
      },
      {
        title: 'Account Suspension',
        content:
          'We may suspend or terminate accounts involved in fraud, fake listings, abuse, repeated policy violations, or illegal activity. Suspended users may lose access to all platform features.',
      },
      {
        title: 'Limitation of Liability',
        content:
          'Pangisa serves as a digital marketplace platform. TIZAK SOFTWARE SOLUTIONS LIMITED is not responsible for agreements between users, rental disputes, property conditions, or financial transactions outside the platform.',
      },
      {
        title: 'Modifications',
        content:
          'We may modify these Terms at any time. Continued use of Pangisa indicates acceptance of the updated terms. Users are encouraged to review this page periodically.',
      },
    ],
  },
  {
    id: 'community',
    label: 'Community Guidelines',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    sections: [
      {
        title: 'Our Commitment',
        content:
          'Pangisa is committed to maintaining a safe, honest, and trustworthy rental marketplace. These guidelines exist to protect every user — tenants, landlords, and brokers alike.',
      },
      {
        title: 'Allowed Content',
        content: 'Users may post:',
        list: [
          'Genuine and verified property listings',
          'Accurate rental pricing and descriptions',
          'Lawful housing advertisements',
          'Respectful and professional communication',
        ],
      },
      {
        title: 'Prohibited Content',
        content: 'The following are strictly prohibited on Pangisa:',
        list: [
          'Fake, fraudulent, or scam listings',
          'Duplicate or spam listings',
          'Misleading pricing or property descriptions',
          'Offensive, abusive, or discriminatory content',
          'Impersonation of other users or organizations',
          'Illegal activity or harassment of any kind',
          'Harmful behavior that endangers platform users',
        ],
      },
      {
        title: 'Reporting & Moderation',
        content:
          'Users may report suspicious listings, fake brokers, abusive behavior, or unsafe activity. Pangisa reserves the right to review content, remove listings, suspend accounts, or permanently ban users who violate these guidelines.',
      },
      {
        title: 'Safety Recommendations',
        content: 'For your protection, users are encouraged to:',
        list: [
          'Verify property information before making payments',
          'Avoid suspicious payment requests outside the platform',
          'Meet in safe, public locations when conducting transactions',
          'Report any suspicious behavior immediately',
        ],
      },
    ],
  },
];

// ============ POLICY SECTION COMPONENT ============

const PolicySection = ({ section, index }) => (
  <div
    className="reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700 py-6 border-b border-gray-100 last:border-0"
    style={{ transitionDelay: `${index * 80}ms` }}
  >
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0 w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center mt-0.5">
        <span className="text-blue-600 font-bold text-xs">{index + 1}</span>
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">{section.title}</h3>
        {section.content && (
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-3">{section.content}</p>
        )}
        {section.list && (
          <ul className="space-y-2">
            {section.list.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm sm:text-base text-gray-600">
                <svg
                  className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  </div>
);

// ============ MAIN POLICIES PAGE COMPONENT ============

export default function Policies() {
  const [activePolicy, setActivePolicy] = useState('privacy');

  const currentPolicy = policies.find((p) => p.id === activePolicy);

  // Scroll reveal effect — mirrors homepage
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.reveal-on-scroll').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [activePolicy]);

  return (
    <div className="overflow-x-hidden">

      {/* ========== PAGE HERO ========== */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-16 sm:py-20 md:py-24 overflow-hidden">
        {/* Dot grid overlay */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        {/* Grid lines overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f1a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1a_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
            <svg className="w-4 h-4 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span className="text-white/90 text-xs sm:text-sm font-medium tracking-wide">Pangisa by TIZAK Software Solutions</span>
          </span>

          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            Policies &amp;{' '}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Legal Documents
            </span>
          </h1>
          <p className="text-blue-100 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            We believe in full transparency. Read our Privacy Policy, Terms &amp; Conditions, and Community Guidelines that govern your use of Pangisa.
          </p>

          


        </div>
      </section>

      {/* ========== POLICY TABS + CONTENT ========== */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50 relative">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:40px_40px] opacity-30 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-10">

            {/* ---- LEFT: Sticky Sidebar (desktop) / Tab bar (mobile) ---- */}
            <aside className="lg:col-span-3 mb-8 lg:mb-0">
              {/* Mobile: horizontal scroll tabs */}
              <div className="lg:hidden flex gap-2 overflow-x-auto pb-2 no-scrollbar">
                {policies.map((policy) => (
                  <button
                    key={policy.id}
                    onClick={() => setActivePolicy(policy.id)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm whitespace-nowrap transition-all duration-200 flex-shrink-0 ${
                      activePolicy === policy.id
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'bg-white text-gray-600 border border-gray-200 hover:border-blue-300 hover:text-blue-600'
                    }`}
                  >
                    <span>{policy.icon}</span>
                    <span>{policy.label}</span>
                  </button>
                ))}
              </div>

              {/* Desktop: sticky card sidebar */}
              <div className="hidden lg:block sticky top-24">
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                  <div className="px-5 py-4 border-b border-gray-100">
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Documents</p>
                  </div>
                  <nav className="p-2">
                    {policies.map((policy) => (
                      <button
                        key={policy.id}
                        onClick={() => setActivePolicy(policy.id)}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left font-semibold text-sm transition-all duration-200 mb-1 last:mb-0 ${
                          activePolicy === policy.id
                            ? 'bg-blue-600 text-white shadow-sm'
                            : 'text-gray-600 hover:bg-gray-50 hover:text-blue-600'
                        }`}
                      >
                        <span className={activePolicy === policy.id ? 'text-white' : 'text-blue-500'}>
                          {policy.icon}
                        </span>
                        {policy.label}
                        {activePolicy === policy.id && (
                          <svg className="w-4 h-4 ml-auto text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        )}
                      </button>
                    ))}
                  </nav>

                  {/* Contact card inside sidebar */}
                  <div className="mx-3 mb-3 mt-1 bg-blue-50 rounded-xl p-4">
                    <p className="text-xs font-semibold text-blue-700 mb-1">Need help?</p>
                    <p className="text-xs text-blue-600 leading-relaxed mb-3">
                      Contact us if you have any questions about our policies.
                    </p>
                    <a
                      href="mailto:info@tizaksoftware.com"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-700 hover:text-blue-800 transition-colors"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      info@tizaksoftware.com
                    </a>
                  </div>
                </div>
              </div>
            </aside>

            {/* ---- RIGHT: Policy Content ---- */}
            <main className="lg:col-span-9">
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                {/* Policy header */}
                <div className="px-6 sm:px-8 py-6 sm:py-8 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
                      {currentPolicy.icon}
                    </div>
                    <div>
                      <span className="text-blue-600 font-semibold text-xs uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">
                        Pangisa
                      </span>
                    </div>
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                    {currentPolicy.label}
                  </h2>
                  <p className="text-gray-500 text-sm sm:text-base">
                    Last updated: May 2026 &nbsp;·&nbsp; TIZAK Software Solutions Limited
                  </p>
                </div>

                {/* Intro notice */}
                <div className="mx-6 sm:mx-8 mt-6 bg-blue-50 border border-blue-100 rounded-xl px-5 py-4 flex items-start gap-3">
                  <svg className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-sm text-blue-700 leading-relaxed">
                    By using <strong>Pangisa</strong>, you agree to the terms outlined in this document. Pangisa is owned and operated by{' '}
                    <strong>TIZAK SOFTWARE SOLUTIONS LIMITED</strong>, Kampala, Uganda.
                  </p>
                </div>

                {/* Policy sections */}
                <div className="px-6 sm:px-8 pb-8 mt-2">
                  {currentPolicy.sections.map((section, index) => (
                    <PolicySection key={section.title} section={section} index={index} />
                  ))}
                </div>

                {/* Footer strip */}
                <div className="px-6 sm:px-8 py-5 bg-gray-50 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <p className="text-xs text-gray-400">
                    © 2026 TIZAK SOFTWARE SOLUTIONS LIMITED. All Rights Reserved.
                  </p>
                  <a
                    href="https://tizaksoftware.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    tizaksoftware.com
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Navigation between policies */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
                {policies.map((policy) => (
                  <button
                    key={policy.id}
                    onClick={() => setActivePolicy(policy.id)}
                    className={`flex items-center gap-3 p-4 rounded-xl border transition-all duration-200 text-left ${
                      activePolicy === policy.id
                        ? 'bg-blue-600 border-blue-600 text-white shadow-md'
                        : 'bg-white border-gray-200 text-gray-700 hover:border-blue-300 hover:shadow-sm'
                    }`}
                  >
                    <span className={activePolicy === policy.id ? 'text-white' : 'text-blue-500'}>
                      {policy.icon}
                    </span>
                    <div>
                      <p className={`text-xs font-semibold ${activePolicy === policy.id ? 'text-blue-100' : 'text-gray-400'}`}>
                        {activePolicy === policy.id ? 'Currently Viewing' : 'View Document'}
                      </p>
                      <p className={`text-sm font-bold ${activePolicy === policy.id ? 'text-white' : 'text-gray-800'}`}>
                        {policy.label}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </main>
          </div>
        </div>
      </section>

      {/* ========== COMPANY INFO SECTION ========== */}
      <section className="py-12 sm:py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">

            {/* Company card */}
            <div className="reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700 bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">TIZAK Software Solutions</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Blue Room, Kisenyi I<br />
                P.O. Box 201946<br />
                Kampala, Uganda
              </p>
            </div>

            {/* Contact card */}
            <div className="reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-100 bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Contact Us</h3>
              <p className="text-sm text-gray-500 mb-3">
                Have questions about our policies or your data?
              </p>
              <a
                href="mailto:info@tizaksoftware.com"
                className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
              >
                info@tizaksoftware.com
              </a>
            </div>

            {/* Website card */}
            <div className="reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-200 bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Our Home Page</h3>
              <p className="text-sm text-gray-500 mb-3">
                Learn more about our services and solutions.
              </p>
              <a
                href="https://tizaksoftware.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
              >
                tizaksoftware.com ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========== CTA SECTION ========== */}
      <section className="py-14 sm:py-16 bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&h=400&fit=crop')] bg-cover bg-center opacity-10 pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started with Pangisa?
          </h2>
          <p className="text-blue-100 text-sm sm:text-base mb-6 sm:mb-8 max-w-xl mx-auto">
            Find your next rental property or list yours on Uganda's trusted rental marketplace.
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            <Link
              to="/contact"
              className="group px-6 sm:px-8 py-3 sm:py-3.5 bg-white text-blue-700 font-bold rounded-xl hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl flex items-center gap-2 text-sm sm:text-base"
            >
              <span>Contact Us</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              to="/"
              className="px-6 sm:px-8 py-3 sm:py-3.5 border-2 border-white/40 text-white font-semibold rounded-xl hover:bg-white/10 transition-all text-sm sm:text-base"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}