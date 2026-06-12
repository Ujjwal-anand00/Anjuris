
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Container } from './Container';
import { motion, type Variants } from 'framer-motion';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-12 pb-6 border-t border-slate-900 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-full max-w-xl h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>

      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {/* Brand Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <Link to="/" className="inline-block group mb-2">
              <div className="inline-flex transition-transform duration-300 group-hover:scale-105">
                <img
                  src="/logo.png"
                  alt="Anjuris Lifesciences Logo"
                  className="h-20 md:h-24 w-auto object-contain"
                />
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Pioneering innovative healthcare solutions. Dedicated to improving lives through advanced pharmaceutical research, uncompromising quality, and global reach.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center hover:bg-primary hover:-translate-y-1 transition-all duration-300 text-white shadow-lg border border-slate-800">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
              </a>
              <a href="#" className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center hover:bg-primary hover:-translate-y-1 transition-all duration-300 text-white shadow-lg border border-slate-800">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
              </a>
              <a href="#" className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center hover:bg-primary hover:-translate-y-1 transition-all duration-300 text-white shadow-lg border border-slate-800">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-white font-heading font-semibold text-lg mb-4 tracking-wide">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-primary transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span> About Us</Link></li>
              {/* <li><Link to="/products" className="hover:text-primary transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span> Our Products</Link></li> */}
              <li><Link to="/research" className="hover:text-primary transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span> Research & Innovation</Link></li>
              <li><Link to="/quality" className="hover:text-primary transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span> Quality Assurance</Link></li>
              <li><Link to="/wellness" className="hover:text-primary transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span> Nutraceuticals</Link></li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants}>
            <h3 className="text-white font-heading font-semibold text-lg mb-4 tracking-wide">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-3 group">
                <div className="mt-1 p-1.5 bg-slate-900 rounded-md group-hover:bg-primary/20 transition-colors">
                  <MapPin size={16} className="text-primary" />
                </div>
                <span className="leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors">
                  C/o Anil Jadhav, 45/2, <br />Bhosari Pune, Indrayaninagar, <br />Pune City, Maharashtra, <br />India – 411026
                </span>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="p-1.5 bg-slate-900 rounded-md group-hover:bg-primary/20 transition-colors">
                  <Phone size={16} className="text-primary" />
                </div>
                <span className="text-slate-400 group-hover:text-slate-300 transition-colors">+91 9473415216</span>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="p-1.5 bg-slate-900 rounded-md group-hover:bg-primary/20 transition-colors">
                  <Mail size={16} className="text-primary" />
                </div>
                <span className="text-slate-400 group-hover:text-slate-300 transition-colors">info@anjurislifesciences.com</span>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={itemVariants}>
            <h3 className="text-white font-heading font-semibold text-lg mb-4 tracking-wide">Newsletter</h3>
            <p className="text-sm text-slate-400 mb-4 leading-relaxed">
              Subscribe to our newsletter for the latest updates on healthcare innovation and product launches.
            </p>
            <form className="relative flex items-center" onSubmit={(e) => e.preventDefault()}>
              <div className="absolute left-4 text-slate-500">
                <Mail size={16} />
              </div>
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-slate-900 text-white text-sm pl-11 pr-28 py-2.5 rounded-full border border-slate-800 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary w-full transition-all"
              />
              <button
                type="submit"
                className="absolute right-1.5 bg-primary hover:bg-primary/90 text-white px-4 py-1.5 rounded-full transition-colors font-medium text-sm shadow-lg shadow-primary/20"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-10 pt-6 border-t border-slate-900 text-center text-sm text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p>&copy; {currentYear} Anjuris Lifesciences Pvt. Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </motion.div>
      </Container>
    </footer>
  );
};
