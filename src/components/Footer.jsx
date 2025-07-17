import React from 'react'

const navigation = [
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
  { name: 'Terms of Service', href: '/terms' },
  { name: 'Privacy Policy', href: '/privacy' },
]

const social = [
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/',
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
        <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zm15.5 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v5.61z"/>
      </svg>
    ),
  },
  {
    name: 'GitHub',
    href: 'https://github.com/',
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
        <path d="M12 0c-6.63 0-12 5.37-12 12 0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.236 1.84 1.236 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.218.694.825.576 4.765-1.587 8.2-6.086 8.2-11.385 0-6.63-5.373-12-12-12z"/>
      </svg>
    ),
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/',
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
        <path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.916 4.916 0 0 0-8.38 4.482c-4.083-.205-7.697-2.162-10.125-5.134a4.822 4.822 0 0 0-.664 2.475c0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417a9.867 9.867 0 0 1-6.102 2.104c-.396 0-.787-.023-1.175-.069a13.945 13.945 0 0 0 7.548 2.212c9.057 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636a10.012 10.012 0 0 0 2.457-2.548z"/>
      </svg>
    ),
  },
]

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-8 px-4 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between gap-8">
        {/* Left: Location & Tagline */}
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2z"/>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4.5 8-10a8 8 0 1 0-16 0c0 5.5 8 10 8 10z"/>
            </svg>
            <span className="text-sm">Chennai, India</span>
          </div>
          <p className="text-lg font-semibold mb-1">Empowering the future with AI.</p>
          <p className="text-xs text-gray-400">Building intelligent solutions for tomorrow.</p>
        </div>
        {/* Center: Navigation */}
        <nav className="flex-1 flex flex-col items-start md:items-center">
          <ul className="flex flex-col md:flex-row gap-3 md:gap-6">
            {navigation.map(link => (
              <li key={link.name}>
                <a href={link.href} className="hover:text-blue-400 transition-colors text-sm">{link.name}</a>
              </li>
            ))}
          </ul>
        </nav>
        {/* Right: Social Icons */}
        <div className="flex-1 flex flex-col items-start md:items-end gap-2">
          <span className="text-sm mb-1">Follow us</span>
          <div className="flex gap-4">
            {social.map(s => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className="hover:text-blue-400 transition-colors"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
      {/* Bottom: Copyright */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-xs text-gray-400 text-center">
        &copy; {new Date().getFullYear()} AI Website. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer