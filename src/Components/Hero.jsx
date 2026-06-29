function Hero() {
  return (
    <section className="bg-slate-950 text-slate-100 min-h-[85vh] flex flex-col justify-center items-center px-4 py-16 relative overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center flex flex-col items-center relative z-10">
        <span className="inline-flex items-center gap-2 bg-slate-900 border border-slate-800 text-blue-400 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-6 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          ZullyScale v4.0 is live
        </span>

        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.15] max-w-3xl">
          Close 40% more deals before your{" "}
          <span className="bg-linear-to-r from-blue-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            morning coffee.
          </span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed">
          Stop fighting messy spreadsheets. Get real-time pipeline analytics,
          automated lead scoring, and instant forecasting in one beautiful
          dashboard.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a
            href="/signup"
            className="bg-blue-600 text-white font-semibold px-8 py-4 rounded-xl hover:bg-blue-500 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 shadow-lg shadow-blue-600/20 text-center"
          >
            Boost My Revenue Now →
          </a>

          <a
            href="/demo"
            className="bg-slate-900 border border-slate-800 text-slate-300 font-semibold px-8 py-4 rounded-xl hover:bg-slate-800 hover:text-white transition-all duration-200 text-center"
          >
            Watch 2-Min Demo
          </a>
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-slate-500 font-medium">
          <span>✓ 14-day free trial</span>
          <span>✓ No credit card required</span>
          <span>✓ Setup in 60 seconds</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
