import { Twitter, Facebook, Instagram, Linkedin, Zap } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <Zap className="w-6 h-6 text-blue-400" />
              <span className="text-xl font-bold">BrandName</span>
            </div>
            <p className="text-gray-400 text-sm mt-2">
              © 2026 BrandName. All rights reserved.
            </p>
          </div>

          <div className="flex gap-6">
            <a href="#" aria-label="Twitter">
              <Twitter className="w-6 h-6 text-gray-400 hover:text-blue-400 transition" />
            </a>
            <a href="#" aria-label="Facebook">
              <Facebook className="w-6 h-6 text-gray-400 hover:text-blue-400 transition" />
            </a>
            <a href="#" aria-label="Instagram">
              <Instagram className="w-6 h-6 text-gray-400 hover:text-pink-400 transition" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <Linkedin className="w-6 h-6 text-gray-400 hover:text-blue-400 transition" />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
