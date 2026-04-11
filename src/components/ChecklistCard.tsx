import { useState } from "react";
import { Check, ChevronDown, AlertTriangle, ShieldAlert, Info } from "lucide-react";
import type { ChecklistPhase, ChecklistItemPriority } from "@/data/checklists";

interface ChecklistCardProps {
  phase: ChecklistPhase;
}

const priorityStyles: Record<ChecklistItemPriority, string> = {
  caution: "border-l-2 border-l-yellow-500 bg-yellow-500/5",
  warning: "border-l-2 border-l-orange-500 bg-orange-500/5",
  emergency: "border-l-2 border-l-red-500 bg-red-500/5",
};

const priorityIcons: Record<ChecklistItemPriority, typeof AlertTriangle> = {
  caution: Info,
  warning: AlertTriangle,
  emergency: ShieldAlert,
};

export const ChecklistCard = ({ phase }: ChecklistCardProps) => {
  const [checked, setChecked] = useState<Set<number>>(new Set());
  const [isOpen, setIsOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());

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

  const toggleExpand = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedItems((prev) => {
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
          <ChevronDown
            className={`w-4 h-4 text-muted-foreground transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
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
          {phase.items.map((item, idx) => {
            const isChecked = checked.has(idx);
            const isExpanded = expandedItems.has(idx);
            const hasDetails = item.condition || item.callout || item.priority || item.system || item.blocking;
            const PriorityIcon = item.priority ? priorityIcons[item.priority] : null;

            return (
              <div key={idx} className={item.priority && !isChecked ? priorityStyles[item.priority] : ""}>
                <button
                  onClick={() => toggle(idx)}
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
                      <Check className="w-3 h-3 text-accent-foreground" />
                    )}
                  </div>
                  <span
                    className={`flex-1 text-sm font-mono ${
                      isChecked ? "line-through" : ""
                    }`}
                  >
                    {item.action}
                    {PriorityIcon && !isChecked && (
                      <PriorityIcon className="w-3.5 h-3.5 inline ml-1.5 -mt-0.5 text-current opacity-60" />
                    )}
                  </span>
                  <span
                    className={`text-sm font-mono font-semibold text-right max-w-[45%] ${
                      isChecked ? "text-muted-foreground line-through" : "text-primary"
                    }`}
                  >
                    {item.expected}
                  </span>
                  {hasDetails && (
                    <ChevronDown
                      className={`w-3.5 h-3.5 text-muted-foreground/60 flex-shrink-0 transition-transform ${
                        isExpanded ? "rotate-180" : ""
                      }`}
                      onClick={(e) => toggleExpand(idx, e)}
                    />
                  )}
                </button>
                {isExpanded && hasDetails && (
                  <div className="px-4 pb-2.5 pl-12 space-y-1">
                    {item.condition && (
                      <p className="text-xs font-mono text-muted-foreground">
                        <span className="text-yellow-500">⚡ IF:</span> {item.condition}
                      </p>
                    )}
                    {item.callout && (
                      <p className="text-xs font-mono text-muted-foreground">
                        <span className="text-blue-400">📢 CALLOUT:</span> "{item.callout}"
                      </p>
                    )}
                    {item.priority && (
                      <p className={`text-xs font-mono ${
                        item.priority === "emergency" ? "text-red-400" :
                        item.priority === "warning" ? "text-orange-400" : "text-yellow-400"
                      }`}>
                        ⚠ Priority: {item.priority.toUpperCase()}
                      </p>
                    )}
                    <div className="flex gap-2 mt-1">
                      {item.system && (
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-secondary text-muted-foreground border border-border">
                          {item.system}
                        </span>
                      )}
                      {item.blocking && (
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-red-500/10 text-red-400 border border-red-500/20">
                          BLOCKING
                        </span>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
