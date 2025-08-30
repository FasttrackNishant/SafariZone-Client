// components/BackgroundOrbs.jsx
export default function BackgroundOrbs({ mousePosition }) {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      <div 
        className="absolute w-96 h-96 bg-orange-400/20 rounded-full blur-3xl animate-pulse"
        style={{
          left: `${20 + mousePosition.x * 0.05}%`,
          top: `${30 + mousePosition.y * 0.03}%`,
        }}
      ></div>
      <div 
        className="absolute w-[32rem] h-[32rem] bg-emerald-500/15 rounded-full blur-3xl animate-pulse delay-1000"
        style={{
          right: `${15 + mousePosition.x * 0.03}%`,
          bottom: `${20 + mousePosition.y * 0.04}%`,
        }}
      ></div>
      <div 
        className="absolute w-80 h-80 bg-amber-500/10 rounded-full blur-2xl animate-pulse delay-500"
        style={{
          left: `${50 + mousePosition.x * 0.02}%`,
          top: `${50 + mousePosition.y * 0.02}%`,
        }}
      ></div>
    </div>
  );
}
