import type { Aircraft } from "@/data/checklists";
import { aircraftImages } from "@/data/aircraftImages";

interface AircraftCardProps {
  aircraft: Aircraft;
  onClick: () => void;
}

export const AircraftCard = ({ aircraft, onClick }: AircraftCardProps) => {
  const phaseCount = aircraft.checklists.length;
  const itemCount = aircraft.checklists.reduce((sum, p) => sum + p.items.length, 0);
  const image = aircraftImages[aircraft.id];

  return (
    <button
      onClick={onClick}
      className="w-full text-left border border-border rounded-lg overflow-hidden bg-card hover:border-primary/50 hover:bg-secondary/30 transition-all group"
    >
      {/* Aircraft image */}
      <div className="aspect-[16/9] bg-secondary/50 relative overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={aircraft.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
            width={768}
            height={512}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-secondary to-muted">
            <span className="text-5xl">{aircraft.imageEmoji}</span>
          </div>
        )}
        {/* Type badge */}
        <div className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] font-mono text-muted-foreground uppercase tracking-wider">
          {aircraft.type.replace("-", " ")}
        </div>
      </div>

      {/* Card content */}
      <div className="p-3">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <h3 className="font-mono font-bold text-sm truncate group-hover:text-primary transition-colors">
              {aircraft.name}
            </h3>
            <p className="text-xs text-muted-foreground mt-0.5">
              {aircraft.manufacturer}
            </p>
          </div>
          <svg
            className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors mt-1 flex-shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
        <div className="flex gap-3 mt-2">
          <span className="text-xs font-mono text-muted-foreground">
            {phaseCount} phases
          </span>
          <span className="text-xs font-mono text-muted-foreground">
            {itemCount} items
          </span>
        </div>
      </div>
    </button>
  );
};
