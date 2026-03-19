import { Twitter, Github, Linkedin, Mail } from 'lucide-react';
import logo from 'figma:asset/89833372778998a6811c9f4a260b84efd75a8c1c.png';

export function Footer() {
  const footerLinks = {
    product: [
      { label: 'Contests', href: '#contests' },
      { label: 'Hackathons', href: '#hackathons' },
      { label: 'About', href: '#about' },
    ],
  };

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: '#', label: 'Email' },
  ];

  return (
    <footer className="bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 mb-12">
          {/* Brand */}
          <div className="max-w-md">
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="DevArena Logo" className="h-6 w-auto dark:invert" />
              <span className="text-gray-900 dark:text-white font-semibold tracking-tight">DevArena</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Your gateway to coding contests worldwide.
            </p>
          </div>

          {/* Links - Horizontal Layout */}
          <div className="flex flex-wrap gap-8 md:gap-12">
            {footerLinks.product.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors font-medium hover:underline underline-offset-4"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Social Links */}
        <div className="flex gap-4 mb-8">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              aria-label={social.label}
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all duration-300 hover:scale-110"
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-gray-600 dark:text-gray-400 mb-2">
            Built with ❤️ for developers. © 2025
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            DevArena - Aggregate. Compete. Grow.
          </p>
        </div>
      </div>
    </footer>
  );
}