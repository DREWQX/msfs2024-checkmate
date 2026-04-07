import type { Aircraft } from "@/data/checklists";

interface AircraftCardProps {
  aircraft: Aircraft;
  onClick: () => void;
}

export const AircraftCard = ({ aircraft, onClick }: AircraftCardProps) => {
  const phaseCount = aircraft.checklists.length;
  const itemCount = aircraft.checklists.reduce((sum, p) => sum + p.items.length, 0);

  return (
    <button
      onClick={onClick}
      className="w-full text-left border border-border rounded-lg p-4 bg-card hover:border-primary/50 hover:bg-secondary/30 transition-all group"
    >
      <div className="flex items-start gap-3">
        <span className="text-2xl">{aircraft.imageEmoji}</span>
        <div className="flex-1 min-w-0">
          <h3 className="font-mono font-bold text-sm truncate group-hover:text-primary transition-colors">
            {aircraft.name}
          </h3>
          <p className="text-xs text-muted-foreground mt-0.5">
            {aircraft.manufacturer}
          </p>
          <div className="flex gap-3 mt-2">
            <span className="text-xs font-mono text-muted-foreground">
              {phaseCount} phases
            </span>
            <span className="text-xs font-mono text-muted-foreground">
              {itemCount} items
            </span>
          </div>
        </div>
        <svg
          className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors mt-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </button>
  );
};
