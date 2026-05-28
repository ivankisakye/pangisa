import { Link } from 'react-router-dom'

const footerLinks = [
  {
    title: 'Platform',
    links: [
      { label: 'Features', to: '/#features' },
      { label: 'How It Works', to: '/#how-it-works' },
      { label: 'Who It\'s For', to: '/#who-its-for' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', to: '/policies' },
      { label: 'Terms & Conditions', to: '/policies' },
      { label: 'Community Guidelines', to: '/policies' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About TIZAK', to: 'https://tizaksoftware.com/about', external: true },
      { label: 'Contact Us', to: '/contact' },
      { label: 'Main Website', to: 'https://tizaksoftware.com', external: true },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-black text-lg">P</span>
              </div>
              <div>
                <span className="font-black text-xl tracking-tight">Pangisa</span>
                <span className="block text-xs text-blue-400 font-medium leading-none">by TIZAK</span>
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Uganda's modern rental marketplace. Connecting tenants, landlords, brokers, and estate managers on one platform.
            </p>

            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-green-400 text-xs font-medium">Coming Soon</span>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map(group => (
            <div key={group.title}>
              <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">
                {group.title}
              </h4>

              <ul className="space-y-3">
                {group.links.map(link => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.to}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-200"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.to}
                        className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Pangisa by{' '}
            
            <a
              href="https://tizaksoftware.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              TIZAK Software Solutions
            </a>

            . All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <Link
              to="/policies"
              className="text-gray-500 hover:text-gray-300 text-xs transition-colors"
            >
              Privacy
            </Link>

            <Link
              to="/policies"
              className="text-gray-500 hover:text-gray-300 text-xs transition-colors"
            >
              Terms
            </Link>

            <Link
              to="/contact"
              className="text-gray-500 hover:text-gray-300 text-xs transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}