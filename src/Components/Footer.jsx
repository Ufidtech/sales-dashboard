function Footer() {
  // We use a dynamic year calculation to keep the copyright perfectly updated
  const currentYear = new Date().getFullYear();

  return (
    // Top border separates the footer elegantly from your main content area
    <footer className="bg-slate-950 border-t border-slate-900 text-slate-500 text-xs py-12 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left Side: Brand Name & Copyright */}
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-blue-500" />
          <p className="font-medium text-slate-400">
            © {currentYear} ZullyScale. All rights reserved.
          </p>
        </div>

        {/* Right Side: Quick Compliance & Social Links */}
        <ul className="flex flex-row gap-6 font-medium">
          <li>
            <a href="/privacy" className="hover:text-slate-300 transition-colors duration-200">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="/terms" className="hover:text-slate-300 transition-colors duration-200">
              Terms of Service
            </a>
          </li>
          <li>
            <a href="https://github.com/Ufidtech" target="_blank" rel="noreferrer" className="hover:text-slate-300 transition-colors duration-200">
              GitHub
            </a>
          </li>
        </ul>

      </div>
    </footer>
  );
}

export default Footer;
