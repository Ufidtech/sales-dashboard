function Welcome() {
  return (
    // The main navigation wrapper that stretches across the screen
    <nav className="bg-slate-950 border-b border-slate-900 w-full sticky top-0 z-50 backdrop-blur-md bg-opacity-80">
      
      {/* Centered layout container with padding */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* 1. BRAND LOGO */}
        <div className="flex items-center gap-2">
          {/* Decorative glowing dot representing dynamic activity */}
          <span className="w-3 h-3 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-400 shadow-md shadow-blue-500/50" />
          <span className="text-xl font-bold tracking-tight text-white">
            Zully<span className="text-blue-500">Scale</span>
          </span>
        </div>

        {/* 2. NAVIGATION LINKS */}
        <ul className="hidden md:flex flex-row items-center gap-8 text-sm font-medium">
          <li>
            {/* Active page style: Pure white text */}
            <a href="/" className="text-white hover:text-blue-400 transition-colors duration-200">
              Home
            </a>
          </li>
          <li>
            {/* Standard link style: Muted slate-400 color that brightens on hover */}
            <a href="/features" className="text-slate-400 hover:text-white transition-colors duration-200">
              Features
            </a>
          </li>
          <li>
            <a href="/pricing" className="text-slate-400 hover:text-white transition-colors duration-200">
              Pricing
            </a>
          </li>
          <li>
            <a href="/docs" className="text-slate-400 hover:text-white transition-colors duration-200">
              Docs
            </a>
          </li>
        </ul>

        {/* 3. CALL TO ACTION (CTA) BUTTONS */}
        <div className="flex items-center gap-4">
          {/* Subtle text link for returning users */}
          <a href="/login" className="text-sm font-medium text-slate-400 hover:text-white transition-colors duration-200">
            Sign In
          </a>
          
          {/* High-contrast action button designed to convert clicks */}
          <a 
            href="/signup" 
            className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-200 shadow-md shadow-blue-600/10 hover:shadow-blue-600/20 hover:-translate-y-0.5 active:translate-y-0"
          >
            Start Free
          </a>
        </div>

      </div>
    </nav>
  );
}

export default Welcome;
