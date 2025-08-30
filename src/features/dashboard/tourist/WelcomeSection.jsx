export default function WelcomeSection({ user, quickLinks }) {
  return (
    <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div className="mb-6 lg:mb-0">
          <h1 className="text-4xl font-bold mb-2">
            <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
              Welcome back, {user.name}!
            </span>
          </h1>
          <p className="text-slate-300 text-lg">Ready for your next wildlife adventure?</p>
        </div>

        <div className="flex flex-wrap gap-3">
          {quickLinks.map((link, index) => (
            <button
              key={index}
              onClick={() => window.location.href = link.path}
              className="flex items-center space-x-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
            >
              <span>{link.icon}</span>
              <span>{link.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
