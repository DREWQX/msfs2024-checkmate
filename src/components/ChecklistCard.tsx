import { useState } from "react";
import { Check } from "lucide-react";
import type { ChecklistPhase } from "@/data/checklists";

interface ChecklistCardProps {
  phase: ChecklistPhase;
}

export const ChecklistCard = ({ phase }: ChecklistCardProps) => {
  const [checked, setChecked] = useState<Set<number>>(new Set());
  const [isOpen, setIsOpen] = useState(false);

  const allChecked = checked.size === phase.items.length;
  const progress = phase.items.length > 0 ? (checked.size / phase.items.length) * 100 : 0;

  const toggle = (index: number) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  return (
    <div className="border border-border rounded-lg overflow-hidden bg-card">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-3 hover:bg-secondary/50 transition-colors"
      >
        <div className="flex items-center gap-3">
          <div
            className={`w-2.5 h-2.5 rounded-full ${
              allChecked
                ? "bg-accent"
                : checked.size > 0
                ? "bg-primary"
                : "bg-muted-foreground/30"
            }`}
          />
          <span className="font-mono text-sm font-semibold tracking-wide">
            {phase.phase}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs text-muted-foreground font-mono">
            {checked.size}/{phase.items.length}
          </span>
          <svg
            className={`w-4 h-4 text-muted-foreground transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      {/* Progress bar */}
      <div className="h-0.5 bg-muted">
        <div
          className={`h-full transition-all duration-300 ${
            allChecked ? "bg-accent" : "bg-primary"
          }`}
          style={{ width: `${progress}%` }}
        />
      </div>

      {isOpen && (
        <div className="divide-y divide-border/50">
          {phase.items.map((item, i) => {
            const isChecked = checked.has(i);
            return (
              <button
                key={i}
                onClick={() => toggle(i)}
                className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors hover:bg-secondary/30 ${
                  isChecked ? "opacity-50" : ""
                }`}
              >
                <div
                  className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                    isChecked
                      ? "bg-accent border-accent"
                      : "border-muted-foreground/40"
                  }`}
                >
                  {isChecked && (
                    <Check className="w-3 h-3 text-accent-foreground animate-check-in" />
                  )}
                </div>
                <span
                  className={`flex-1 text-sm font-mono ${
                    isChecked ? "line-through" : ""
                  }`}
                >
                  {item.action}
                </span>
                <span
                  className={`text-sm font-mono font-semibold ${
                    isChecked ? "text-muted-foreground line-through" : "text-primary"
                  }`}
                >
                  {item.expected}
                </span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
