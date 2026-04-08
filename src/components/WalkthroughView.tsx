import type { WalkthroughStep } from "@/data/walkthroughSteps";
import { Camera } from "lucide-react";

interface WalkthroughViewProps {
  steps: WalkthroughStep[];
  aircraftName: string;
}

export const WalkthroughView = ({ steps, aircraftName }: WalkthroughViewProps) => {
  return (
    <div className="space-y-4">
      <p className="text-xs text-muted-foreground font-mono px-1">
        Step-by-step visual guide for {aircraftName}
      </p>
      {steps.map((step) => (
        <div key={step.step} className="border border-border rounded-lg overflow-hidden bg-card">
          {/* Step image area */}
          <div className="aspect-video bg-secondary/50 flex items-center justify-center relative">
            {step.imageUrl ? (
              <img
                src={step.imageUrl}
                alt={step.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            ) : (
              <div className="flex flex-col items-center gap-2 text-muted-foreground/40">
                <Camera className="w-8 h-8" />
                <span className="text-xs font-mono">Screenshot placeholder</span>
              </div>
            )}
            {/* Step number badge */}
            <div className="absolute top-3 left-3 bg-primary text-primary-foreground px-2.5 py-1 rounded-md text-xs font-mono font-bold">
              STEP {step.step}
            </div>
          </div>

          {/* Step content */}
          <div className="p-4">
            <h3 className="font-mono font-bold text-sm mb-1.5">{step.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {step.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
