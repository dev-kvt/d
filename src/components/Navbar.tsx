
import { Star } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 px-8 py-6 flex justify-between items-center">
      {/* Left side - Icon */}
      <div className="flex items-center">
        <Star className="w-6 h-6 text-white/80" />
      </div>

      {/* Center - Navigation Links */}
      <div className="flex space-x-8">
        <a href="#about" className="font-manrope font-normal text-white/80 hover:text-white transition-colors">
          About
        </a>
        <a href="#projects" className="font-manrope font-normal text-white/80 hover:text-white transition-colors">
          Projects
        </a>
        <a href="#contact" className="font-manrope font-normal text-white/80 hover:text-white transition-colors">
          Contact
        </a>
      </div>

      {/* Right side - Social Links */}
      <div className="flex space-x-4">
        <a href="https://github.com/dev-kvt" target="_blank" rel="noopener noreferrer" className="font-manrope font-normal text-white/80 hover:text-white transition-colors text-sm">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/divyansh-singh-045236323/" target="_blank" rel="noopener noreferrer" className="font-manrope font-normal text-white/80 hover:text-white transition-colors text-sm">
          LinkedIn
        </a>
        <a href="https://instagram.com/devkvt" target="_blank" rel="noopener noreferrer" className="font-manrope font-normal text-white/80 hover:text-white transition-colors text-sm">
          Instagram
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
