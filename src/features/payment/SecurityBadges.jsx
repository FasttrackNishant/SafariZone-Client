export default function SecurityBadges({ badges }) {
  return (
    <div className="flex justify-center space-x-8 mb-8">
      {badges.map((badge, index) => (
        <div key={index} className="text-center">
          <div className="text-3xl mb-2">{badge.icon}</div>
          <h4 className="text-slate-200 font-semibold text-sm">{badge.text}</h4>
          <p className="text-slate-400 text-xs">{badge.description}</p>
        </div>
      ))}
    </div>
  );
}
