import { useState, useMemo } from "react";
import { aircraft, aircraftTypes } from "@/data/checklists";
import type { Aircraft } from "@/data/checklists";
import { aircraftImages } from "@/data/aircraftImages";
import { getWalkthroughSteps } from "@/data/walkthroughSteps";
import { AircraftCard } from "@/components/AircraftCard";
import { ChecklistCard } from "@/components/ChecklistCard";
import { WalkthroughView } from "@/components/WalkthroughView";
import { ArrowLeft, Search, Plane, ClipboardList, Images } from "lucide-react";

const Index = () => {
  const [selectedAircraft, setSelectedAircraft] = useState<Aircraft | null>(null);
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [activeTab, setActiveTab] = useState<"checklist" | "walkthrough">("checklist");

  const filtered = useMemo(() => {
    return aircraft.filter((a) => {
      const matchesSearch =
        a.name.toLowerCase().includes(search.toLowerCase()) ||
        a.manufacturer.toLowerCase().includes(search.toLowerCase());
      const matchesType = typeFilter === "all" || a.type === typeFilter;
      return matchesSearch && matchesType;
    });
  }, [search, typeFilter]);

  if (selectedAircraft) {
    const image = aircraftImages[selectedAircraft.id];
    const walkthroughSteps = getWalkthroughSteps(selectedAircraft.type);

    return (
      <div className="min-h-screen">
        {/* Hero image */}
        <div className="relative h-48 sm:h-64 bg-secondary overflow-hidden">
          {image ? (
            <img
              src={image}
              alt={selectedAircraft.name}
              className="w-full h-full object-cover"
              width={768}
              height={512}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-secondary to-muted">
              <span className="text-8xl">{selectedAircraft.imageEmoji}</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          <button
            onClick={() => { setSelectedAircraft(null); setActiveTab("checklist"); }}
            className="absolute top-4 left-4 flex items-center gap-1.5 text-sm font-mono text-foreground/80 hover:text-foreground transition-colors bg-background/50 backdrop-blur-sm px-3 py-1.5 rounded-md"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-2xl">{selectedAircraft.imageEmoji}</span>
              <h1 className="font-mono font-bold text-lg text-foreground drop-shadow-lg">
                {selectedAircraft.name}
              </h1>
            </div>
            <p className="text-xs font-mono text-foreground/70">{selectedAircraft.manufacturer}</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="sticky top-0 z-10 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
          <div className="max-w-3xl mx-auto px-4 flex">
            <button
              onClick={() => setActiveTab("checklist")}
              className={`flex items-center gap-2 px-4 py-3 text-sm font-mono font-semibold border-b-2 transition-colors ${
                activeTab === "checklist"
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              <ClipboardList className="w-4 h-4" />
              Checklist
            </button>
            <button
              onClick={() => setActiveTab("walkthrough")}
              className={`flex items-center gap-2 px-4 py-3 text-sm font-mono font-semibold border-b-2 transition-colors ${
                activeTab === "walkthrough"
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              <Images className="w-4 h-4" />
              Walkthrough
            </button>
          </div>
        </div>

        {/* Tab content */}
        <main className="max-w-3xl mx-auto px-4 py-6 space-y-3">
          {activeTab === "checklist" ? (
            selectedAircraft.checklists.map((phase, i) => (
              <ChecklistCard key={i} phase={phase} />
            ))
          ) : (
            <WalkthroughView steps={walkthroughSteps} aircraftName={selectedAircraft.name} />
          )}
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <header className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 py-8">
          <div className="flex items-center gap-3 mb-1">
            <Plane className="w-6 h-6 text-primary" />
            <h1 className="font-mono font-bold text-xl tracking-tight">
              MSFS 2024 Checklists
            </h1>
          </div>
          <p className="text-muted-foreground text-sm font-mono">
            Realistic, full checklists for every aircraft in Microsoft Flight Simulator 2024
          </p>
        </div>
      </header>

      {/* Filters */}
      <div className="sticky top-0 z-10 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="max-w-3xl mx-auto px-4 py-3 space-y-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search aircraft..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-secondary border border-border rounded-md pl-9 pr-4 py-2 text-sm font-mono placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
            {aircraftTypes.map((type) => (
              <button
                key={type.value}
                onClick={() => setTypeFilter(type.value)}
                className={`px-3 py-1 rounded-full text-xs font-mono whitespace-nowrap border transition-colors ${
                  typeFilter === type.value
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-secondary text-muted-foreground border-border hover:border-primary/50"
                }`}
              >
                {type.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Aircraft Grid */}
      <main className="max-w-3xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {filtered.map((a) => (
            <AircraftCard
              key={a.id}
              aircraft={a}
              onClick={() => setSelectedAircraft(a)}
            />
          ))}
        </div>
        {filtered.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground font-mono text-sm">
              No aircraft found matching your search.
            </p>
          </div>
        )}
        <div className="text-center mt-8 text-xs text-muted-foreground font-mono">
          {aircraft.length} aircraft • Realistic procedures based on real-world POH data
        </div>
      </main>
    </div>
  );
};

export default Index;
