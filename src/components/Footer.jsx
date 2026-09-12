import { Link } from 'react-router-dom';
import { GraduationCap, Mail, Phone, MapPin, Globe, MessageCircle, Share2, Link2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">Eduactly</span>
            </div>
            <p className="text-gray-400 mb-4">Empowering students worldwide with quality education and skills for the future.</p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition"><Globe className="w-4 h-4" /></a>
              <a href="#" className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition"><MessageCircle className="w-4 h-4" /></a>
              <a href="#" className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition"><Share2 className="w-4 h-4" /></a>
              <a href="#" className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition"><Link2 className="w-4 h-4" /></a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/" className="hover:text-primary transition">Home</Link></li>
              <li><Link to="/courses" className="hover:text-primary transition">Courses</Link></li>
              <li><Link to="/register" className="hover:text-primary transition">Register</Link></li>
              <li><Link to="/login" className="hover:text-primary transition">Login</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Categories</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/courses" className="hover:text-primary transition">Web Development</Link></li>
              <li><Link to="/courses" className="hover:text-primary transition">Data Science</Link></li>
              <li><Link to="/courses" className="hover:text-primary transition">UI/UX Design</Link></li>
              <li><Link to="/courses" className="hover:text-primary transition">Digital Marketing</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-primary" /> support@eduactly.com</li>
              <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary" /> +1 (555) 123-4567</li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> 123 Education St, Learning City</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2026 Eduactly. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
