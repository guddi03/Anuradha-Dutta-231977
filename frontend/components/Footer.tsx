import { Link } from "react-router-dom";
import { Facebook, Instagram, Phone, Mail } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/gallery", label: "Gallery" },
    { path: "/faq", label: "FAQ" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <footer className="bg-gradient-to-r from-orange-900 to-red-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Anuradha Dutta</h3>
            <p className="text-orange-100 mb-4">
              Astrologer | Vaastu Specialist | Spiritual Healer | Tantra Expert
            </p>
            <p className="text-sm text-orange-200">
              All consultations are confidential and conducted with complete privacy.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-orange-100 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <a href="tel:918910920188" className="flex items-center gap-2 text-orange-100 hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
                <span>89109 20188</span>
              </a>
              <a href="mailto:duttaanuradha26@gmail.com" className="flex items-center gap-2 text-orange-100 hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
                <span>duttaanuradha26@gmail.com</span>
              </a>
              <div className="flex gap-4 pt-2">
                <a
                  href="https://www.facebook.com/anuradha.dutta.339183"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-100 hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a
                  href="https://www.instagram.com/proudy_peacock/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-100 hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-orange-800 mt-8 pt-6 text-center text-orange-200 text-sm">
          <p>&copy; {new Date().getFullYear()} Anuradha Dutta. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
