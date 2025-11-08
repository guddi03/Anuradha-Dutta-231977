import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/gallery", label: "Gallery" },
    { path: "/achievements", label: "Achievements" },
    { path: "/faq", label: "FAQ" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex flex-col">
            <h1 className="text-2xl font-bold text-orange-700">Anuradha Dutta</h1>
            <p className="text-sm text-gray-600">Spiritual Guide & Healer</p>
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors hover:text-orange-700 ${
                  isActive(link.path) ? "text-orange-700 border-b-2 border-orange-700" : "text-gray-700"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:918910920188" className="flex items-center gap-2 text-gray-700 hover:text-orange-700 transition-colors">
              <Phone className="w-4 h-4" />
              <span className="text-sm">89109 20188</span>
            </a>
            <a href="mailto:duttaanuradha26@gmail.com" className="flex items-center gap-2 text-gray-700 hover:text-orange-700 transition-colors">
              <Mail className="w-4 h-4" />
            </a>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="lg:hidden pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-2 px-4 rounded transition-colors ${
                  isActive(link.path)
                    ? "bg-orange-100 text-orange-700 font-medium"
                    : "text-gray-700 hover:bg-orange-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 space-y-2 border-t">
              <a href="tel:918910920188" className="flex items-center gap-2 py-2 px-4 text-gray-700">
                <Phone className="w-4 h-4" />
                <span>89109 20188</span>
              </a>
              <a href="mailto:duttaanuradha26@gmail.com" className="flex items-center gap-2 py-2 px-4 text-gray-700">
                <Mail className="w-4 h-4" />
                <span>duttaanuradha26@gmail.com</span>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
