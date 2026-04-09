export type ChecklistItem = {
  action: string;
  expected: string;
};

export type ChecklistPhase = {
  phase: string;
  items: ChecklistItem[];
};

export type Aircraft = {
  id: string;
  name: string;
  manufacturer: string;
  type: "single-prop" | "twin-prop" | "turboprop" | "jet" | "airliner" | "helicopter" | "military" | "cargo" | "glider" | "ultralight" | "aerobatic" | "amphibious" | "evtol" | "balloon" | "gyrocopter" | "historic";
  imageEmoji: string;
  checklists: ChecklistPhase[];
};

export const aircraft: Aircraft[] = [
  {
    id: "cessna-172",
    name: "Cessna 172 Skyhawk",
    manufacturer: "Cessna",
    type: "single-prop",
    imageEmoji: "🛩️",
    checklists: [
      {
        phase: "Preflight Inspection",
        items: [
          { action: "Cabin Door", expected: "OPEN" },
          { action: "Control Lock", expected: "REMOVE" },
          { action: "Ignition Switch", expected: "OFF" },
          { action: "Avionics Master Switch", expected: "OFF" },
          { action: "Master Switch", expected: "ON" },
          { action: "Fuel Quantity Indicators", expected: "CHECK QUANTITY" },
          { action: "Flaps", expected: "EXTEND FULL" },
          { action: "Master Switch", expected: "OFF" },
          { action: "Fuel Shutoff Valve", expected: "ON (PUSH IN)" },
          { action: "Fuel Selector Valve", expected: "BOTH" },
        ],
      },
      {
        phase: "Before Engine Start",
        items: [
          { action: "Preflight Inspection", expected: "COMPLETE" },
          { action: "Seats, Belts, Harnesses", expected: "ADJUST & LOCK" },
          { action: "Brakes", expected: "TEST & SET" },
          { action: "Circuit Breakers", expected: "CHECK IN" },
          { action: "Electrical Equipment", expected: "OFF" },
          { action: "Avionics Master Switch", expected: "OFF" },
          { action: "Fuel Selector Valve", expected: "BOTH" },
        ],
      },
      {
        phase: "Engine Start",
        items: [
          { action: "Mixture", expected: "RICH" },
          { action: "Carburetor Heat", expected: "COLD" },
          { action: "Prime", expected: "AS REQUIRED (2-6)" },
          { action: "Throttle", expected: "OPEN 1/4 INCH" },
          { action: "Master Switch", expected: "ON" },
          { action: "Beacon Light", expected: "ON" },
          { action: "Ignition Switch", expected: "START (release when engine fires)" },
          { action: "Oil Pressure", expected: "CHECK (green arc)" },
          { action: "Navigation Lights", expected: "ON (as required)" },
          { action: "Avionics Master Switch", expected: "ON" },
        ],
      },
      {
        phase: "Taxi",
        items: [
          { action: "Brakes", expected: "RELEASE" },
          { action: "Taxi Light", expected: "ON" },
          { action: "Throttle", expected: "1000 RPM" },
          { action: "Brakes", expected: "CHECK" },
          { action: "Flight Instruments", expected: "CHECK" },
          { action: "Heading Indicator", expected: "SET TO COMPASS" },
          { action: "Altimeter", expected: "SET" },
        ],
      },
      {
        phase: "Before Takeoff (Run-Up)",
        items: [
          { action: "Parking Brake", expected: "SET" },
          { action: "Seats, Belts, Harnesses", expected: "CHECK SECURE" },
          { action: "Flight Controls", expected: "FREE & CORRECT" },
          { action: "Flight Instruments", expected: "CHECK & SET" },
          { action: "Fuel Selector Valve", expected: "BOTH" },
          { action: "Mixture", expected: "RICH" },
          { action: "Throttle", expected: "1800 RPM" },
          { action: "Magnetos", expected: "CHECK (max 125 RPM drop)" },
          { action: "Carburetor Heat", expected: "CHECK (apply, note RPM drop)" },
          { action: "Engine Instruments", expected: "CHECK (green arc)" },
          { action: "Throttle", expected: "1000 RPM / CHECK IDLE" },
          { action: "Throttle Friction Lock", expected: "ADJUST" },
          { action: "Radios / Avionics", expected: "SET" },
          { action: "Autopilot", expected: "OFF" },
          { action: "Elevator Trim", expected: "TAKEOFF POSITION" },
          { action: "Flaps", expected: "SET (0° - 10°)" },
          { action: "Strobe Lights", expected: "ON" },
          { action: "Landing Light", expected: "ON" },
        ],
      },
      {
        phase: "Takeoff (Normal)",
        items: [
          { action: "Flaps", expected: "0° - 10°" },
          { action: "Carburetor Heat", expected: "COLD" },
          { action: "Throttle", expected: "FULL OPEN" },
          { action: "Mixture", expected: "RICH" },
          { action: "Elevator Control", expected: "LIFT NOSEWHEEL at 55 KIAS" },
          { action: "Climb Speed", expected: "70-80 KIAS" },
        ],
      },
      {
        phase: "Climb",
        items: [
          { action: "Airspeed", expected: "70-85 KIAS" },
          { action: "Throttle", expected: "FULL" },
          { action: "Mixture", expected: "RICH (below 3,000 ft)" },
          { action: "Engine Instruments", expected: "MONITOR" },
          { action: "Flaps", expected: "UP (above 60 KIAS)" },
        ],
      },
      {
        phase: "Cruise",
        items: [
          { action: "Power", expected: "SET (2100-2500 RPM)" },
          { action: "Elevator Trim", expected: "ADJUST" },
          { action: "Mixture", expected: "LEAN as required" },
          { action: "Engine Instruments", expected: "MONITOR" },
          { action: "Fuel Selector Valve", expected: "BOTH" },
        ],
      },
      {
        phase: "Descent",
        items: [
          { action: "Fuel Selector Valve", expected: "BOTH" },
          { action: "Mixture", expected: "ENRICHEN as required" },
          { action: "Power", expected: "AS DESIRED" },
          { action: "Carburetor Heat", expected: "ON (as required)" },
          { action: "Altimeter", expected: "SET" },
        ],
      },
      {
        phase: "Before Landing",
        items: [
          { action: "Seats, Belts, Harnesses", expected: "SECURE" },
          { action: "Fuel Selector Valve", expected: "BOTH" },
          { action: "Mixture", expected: "RICH" },
          { action: "Carburetor Heat", expected: "ON" },
          { action: "Landing Light", expected: "ON" },
          { action: "Autopilot", expected: "OFF" },
        ],
      },
      {
        phase: "Landing (Normal)",
        items: [
          { action: "Airspeed", expected: "65-75 KIAS (flaps UP)" },
          { action: "Flaps", expected: "FULL (as desired)" },
          { action: "Airspeed", expected: "60-70 KIAS (flaps DOWN)" },
          { action: "Touchdown", expected: "MAIN WHEELS FIRST" },
          { action: "Braking", expected: "MINIMUM REQUIRED" },
        ],
      },
      {
        phase: "After Landing",
        items: [
          { action: "Flaps", expected: "UP" },
          { action: "Carburetor Heat", expected: "COLD" },
          { action: "Landing Light", expected: "OFF" },
          { action: "Strobe Lights", expected: "OFF" },
          { action: "Taxi Light", expected: "ON" },
          { action: "Transponder", expected: "STANDBY" },
        ],
      },
      {
        phase: "Engine Shutdown",
        items: [
          { action: "Parking Brake", expected: "SET" },
          { action: "Throttle", expected: "IDLE (1000 RPM)" },
          { action: "Electrical Equipment", expected: "OFF" },
          { action: "Avionics Master Switch", expected: "OFF" },
          { action: "Mixture", expected: "IDLE CUT-OFF (pull full out)" },
          { action: "Ignition Switch", expected: "OFF" },
          { action: "Master Switch", expected: "OFF" },
        ],
      },
    ],
  },
  {
    id: "da40-ng",
    name: "Diamond DA40 NG",
    manufacturer: "Diamond",
    type: "single-prop",
    imageEmoji: "🛩️",
    checklists: [
      {
        phase: "Preflight",
        items: [
          { action: "Hobbs / Tach", expected: "RECORD" },
          { action: "Required Documents", expected: "ON BOARD" },
          { action: "Circuit Breakers", expected: "IN" },
          { action: "Avionics", expected: "OFF" },
          { action: "Master Switch", expected: "ON" },
          { action: "Fuel Quantity", expected: "CHECK" },
          { action: "Flaps", expected: "EXTEND & CHECK" },
          { action: "Lights", expected: "TEST" },
          { action: "Stall Warning", expected: "TEST" },
          { action: "Master Switch", expected: "OFF" },
        ],
      },
      {
        phase: "Engine Start",
        items: [
          { action: "Parking Brake", expected: "SET" },
          { action: "Seat Belts", expected: "FASTENED" },
          { action: "ECU A + ECU B", expected: "ON" },
          { action: "Master Switch", expected: "ON" },
          { action: "Beacon", expected: "ON" },
          { action: "Throttle", expected: "IDLE" },
          { action: "Glow Plug", expected: "WAIT FOR ANNUNCIATOR" },
          { action: "Starter", expected: "ENGAGE" },
          { action: "Engine Parameters", expected: "CHECK" },
          { action: "Avionics", expected: "ON" },
        ],
      },
      {
        phase: "Before Takeoff",
        items: [
          { action: "Flight Controls", expected: "FREE & CORRECT" },
          { action: "Trims", expected: "SET TAKEOFF" },
          { action: "Instruments", expected: "CHECK & SET" },
          { action: "Fuel Selector", expected: "ON" },
          { action: "Flaps", expected: "T/O POSITION" },
          { action: "Engine Instruments", expected: "GREEN" },
          { action: "Doors & Canopy", expected: "LOCKED" },
          { action: "Transponder", expected: "ALT" },
          { action: "Lights", expected: "AS REQUIRED" },
        ],
      },
      {
        phase: "Takeoff",
        items: [
          { action: "Power", expected: "MAX" },
          { action: "Engine Instruments", expected: "GREEN" },
          { action: "Rotate", expected: "59 KIAS" },
          { action: "Climb", expected: "73 KIAS (Vy)" },
        ],
      },
      {
        phase: "Cruise",
        items: [
          { action: "Power", expected: "SET DESIRED" },
          { action: "Trim", expected: "ADJUST" },
          { action: "Engine Instruments", expected: "MONITOR" },
          { action: "Fuel", expected: "MONITOR QUANTITY" },
        ],
      },
      {
        phase: "Approach & Landing",
        items: [
          { action: "ATIS", expected: "OBTAIN" },
          { action: "Altimeter", expected: "SET" },
          { action: "Fuel Selector", expected: "ON" },
          { action: "Flaps", expected: "AS REQUIRED" },
          { action: "Speed", expected: "73 KIAS (final)" },
          { action: "Landing Light", expected: "ON" },
        ],
      },
      {
        phase: "Shutdown",
        items: [
          { action: "Parking Brake", expected: "SET" },
          { action: "Avionics", expected: "OFF" },
          { action: "Throttle", expected: "IDLE" },
          { action: "Engine", expected: "SHUT DOWN" },
          { action: "ECU A + ECU B", expected: "OFF" },
          { action: "Master Switch", expected: "OFF" },
        ],
      },
    ],
  },
  {
    id: "da62",
    name: "Diamond DA62",
    manufacturer: "Diamond",
    type: "twin-prop",
    imageEmoji: "✈️",
    checklists: [
      {
        phase: "Preflight",
        items: [
          { action: "Documents", expected: "ON BOARD" },
          { action: "Circuit Breakers", expected: "IN" },
          { action: "Master Switch", expected: "ON" },
          { action: "Fuel Quantity", expected: "CHECK BOTH TANKS" },
          { action: "Flaps", expected: "EXTEND & CHECK" },
          { action: "Master Switch", expected: "OFF" },
          { action: "Fuel Caps", expected: "SECURE" },
          { action: "External Walk-Around", expected: "COMPLETE" },
        ],
      },
      {
        phase: "Engine Start",
        items: [
          { action: "Parking Brake", expected: "SET" },
          { action: "Seats & Belts", expected: "ADJUSTED" },
          { action: "ECU A + ECU B (Both Engines)", expected: "ON" },
          { action: "Master Switch", expected: "ON" },
          { action: "Beacon", expected: "ON" },
          { action: "Left Engine Glow", expected: "WAIT" },
          { action: "Left Engine Starter", expected: "ENGAGE" },
          { action: "Right Engine Glow", expected: "WAIT" },
          { action: "Right Engine Starter", expected: "ENGAGE" },
          { action: "Engine Parameters", expected: "CHECK BOTH" },
          { action: "Avionics", expected: "ON" },
          { action: "Generators", expected: "ON (both)" },
        ],
      },
      {
        phase: "Before Takeoff",
        items: [
          { action: "Flight Controls", expected: "FREE & CORRECT" },
          { action: "Trim", expected: "TAKEOFF" },
          { action: "Flaps", expected: "TAKEOFF" },
          { action: "Instruments", expected: "SET" },
          { action: "Engine Instruments", expected: "GREEN (both)" },
          { action: "Fuel Selectors", expected: "ON (both)" },
          { action: "De-ice", expected: "AS REQUIRED" },
          { action: "Doors", expected: "CLOSED & LOCKED" },
          { action: "Transponder", expected: "ALT" },
        ],
      },
      {
        phase: "Takeoff",
        items: [
          { action: "Power (Both)", expected: "MAX" },
          { action: "Engine Instruments", expected: "GREEN" },
          { action: "Rotate", expected: "74 KIAS" },
          { action: "Climb Speed", expected: "85 KIAS (Vy)" },
          { action: "Flaps", expected: "RETRACT (safe altitude)" },
        ],
      },
      {
        phase: "Cruise",
        items: [
          { action: "Power", expected: "SET DESIRED (both)" },
          { action: "Trim", expected: "ADJUST" },
          { action: "Fuel", expected: "MONITOR BOTH TANKS" },
          { action: "Engine Instruments", expected: "MONITOR" },
        ],
      },
      {
        phase: "Approach & Landing",
        items: [
          { action: "ATIS", expected: "OBTAIN" },
          { action: "Altimeter", expected: "SET" },
          { action: "Fuel Selectors", expected: "ON (both)" },
          { action: "Flaps", expected: "AS REQUIRED" },
          { action: "Speed", expected: "82 KIAS (final)" },
          { action: "Gear", expected: "CHECK (fixed)" },
          { action: "Landing Lights", expected: "ON" },
        ],
      },
      {
        phase: "Shutdown",
        items: [
          { action: "Parking Brake", expected: "SET" },
          { action: "Avionics", expected: "OFF" },
          { action: "Both Engines", expected: "SHUTDOWN" },
          { action: "ECU A + ECU B", expected: "OFF (both)" },
          { action: "Generators", expected: "OFF" },
          { action: "Master Switch", expected: "OFF" },
        ],
      },
    ],
  },
  {
    id: "tbm-930",
    name: "Daher TBM 930",
    manufacturer: "Daher",
    type: "turboprop",
    imageEmoji: "🛫",
    checklists: [
      {
        phase: "Preflight",
        items: [
          { action: "Battery Voltage", expected: "CHECK (≥24V)" },
          { action: "Fuel Quantity", expected: "CHECK" },
          { action: "Inertial Separator", expected: "OPEN" },
          { action: "External Inspection", expected: "COMPLETE" },
          { action: "Propeller Area", expected: "CLEAR" },
          { action: "Chocks / Tie-Downs", expected: "REMOVED" },
        ],
      },
      {
        phase: "Engine Start",
        items: [
          { action: "Parking Brake", expected: "SET" },
          { action: "Seats / Belts", expected: "ADJUSTED" },
          { action: "Battery / Generator", expected: "ON" },
          { action: "Beacon", expected: "ON" },
          { action: "Condition Lever", expected: "LOW IDLE" },
          { action: "Power Lever", expected: "CUT OFF" },
          { action: "Ignition", expected: "AUTO" },
          { action: "Starter", expected: "ON (wait for Ng 13%)" },
          { action: "Power Lever", expected: "ADVANCE TO LOW IDLE" },
          { action: "ITT", expected: "MONITOR (≤1000°C)" },
          { action: "Oil Pressure", expected: "CHECK (green)" },
          { action: "Generator", expected: "ON" },
          { action: "Avionics", expected: "ON" },
          { action: "Condition Lever", expected: "HIGH IDLE (after warm-up)" },
        ],
      },
      {
        phase: "Before Takeoff",
        items: [
          { action: "Flight Controls", expected: "FREE & CORRECT" },
          { action: "Trims", expected: "SET TAKEOFF" },
          { action: "Flaps", expected: "TAKEOFF" },
          { action: "Autopilot", expected: "CHECK / OFF" },
          { action: "Oxygen", expected: "ON / CHECK" },
          { action: "Pressurization", expected: "SET" },
          { action: "De-ice", expected: "CHECK" },
          { action: "Fuel Selector", expected: "AUTO" },
          { action: "Inertial Separator", expected: "AS REQUIRED" },
          { action: "Transponder", expected: "ALT" },
          { action: "Condition Lever", expected: "HIGH RPM" },
          { action: "Lights", expected: "ON" },
        ],
      },
      {
        phase: "Takeoff",
        items: [
          { action: "Power Lever", expected: "TAKEOFF (torque check)" },
          { action: "Engine Instruments", expected: "CHECK (green)" },
          { action: "Rotate", expected: "90 KIAS" },
          { action: "Climb Speed", expected: "124 KIAS" },
          { action: "Flaps", expected: "RETRACT (above 500 ft AGL)" },
          { action: "Landing Gear", expected: "UP" },
        ],
      },
      {
        phase: "Climb",
        items: [
          { action: "Power", expected: "MAX CONTINUOUS" },
          { action: "Airspeed", expected: "124 KIAS" },
          { action: "Engine Instruments", expected: "MONITOR" },
          { action: "Pressurization", expected: "CHECK" },
        ],
      },
      {
        phase: "Cruise",
        items: [
          { action: "Power", expected: "SET DESIRED" },
          { action: "Condition Lever", expected: "SET RPM" },
          { action: "Trim", expected: "ADJUST" },
          { action: "Pressurization", expected: "MONITOR" },
          { action: "Fuel", expected: "MONITOR" },
          { action: "Engine Instruments", expected: "MONITOR" },
          { action: "Oxygen", expected: "MONITOR" },
        ],
      },
      {
        phase: "Descent & Approach",
        items: [
          { action: "ATIS / Weather", expected: "OBTAIN" },
          { action: "Altimeter", expected: "SET" },
          { action: "Pressurization", expected: "SET FOR LANDING FIELD" },
          { action: "Speed", expected: "REDUCE BELOW 178 KIAS" },
          { action: "Landing Gear", expected: "DOWN (3 GREEN)" },
          { action: "Flaps", expected: "APPROACH / FULL" },
          { action: "Speed", expected: "85 KIAS (Vref)" },
          { action: "Inertial Separator", expected: "AS REQUIRED" },
          { action: "Landing Lights", expected: "ON" },
        ],
      },
      {
        phase: "After Landing",
        items: [
          { action: "Flaps", expected: "UP" },
          { action: "Condition Lever", expected: "LOW IDLE" },
          { action: "Landing / Strobe Lights", expected: "OFF" },
          { action: "Transponder", expected: "STANDBY" },
          { action: "Taxi Light", expected: "ON" },
        ],
      },
      {
        phase: "Shutdown",
        items: [
          { action: "Parking Brake", expected: "SET" },
          { action: "Avionics", expected: "OFF" },
          { action: "Condition Lever", expected: "LOW IDLE" },
          { action: "Power Lever", expected: "CUT OFF" },
          { action: "Generator", expected: "OFF" },
          { action: "Battery", expected: "OFF" },
          { action: "Beacon", expected: "OFF" },
        ],
      },
    ],
  },
  {
    id: "king-air-350i",
    name: "Beechcraft King Air 350i",
    manufacturer: "Beechcraft",
    type: "turboprop",
    imageEmoji: "🛫",
    checklists: [
      {
        phase: "Preflight",
        items: [
          { action: "Battery Switch", expected: "ON" },
          { action: "Fuel Quantity", expected: "CHECK BOTH" },
          { action: "Exterior Inspection", expected: "COMPLETE" },
          { action: "Propeller Area", expected: "CLEAR" },
          { action: "Battery Switch", expected: "OFF" },
        ],
      },
      {
        phase: "Engine Start (Left then Right)",
        items: [
          { action: "Parking Brake", expected: "SET" },
          { action: "Battery", expected: "ON" },
          { action: "Beacon", expected: "ON" },
          { action: "Condition Levers", expected: "FUEL CUT OFF" },
          { action: "Power Levers", expected: "IDLE" },
          { action: "Prop Levers", expected: "FULL FORWARD" },
          { action: "Start Left Engine", expected: "ENGAGE STARTER" },
          { action: "ITT", expected: "MONITOR (limits)" },
          { action: "Condition Lever (L)", expected: "LOW IDLE" },
          { action: "Generator (L)", expected: "ON" },
          { action: "Start Right Engine", expected: "REPEAT PROCEDURE" },
          { action: "Avionics", expected: "ON" },
        ],
      },
      {
        phase: "Before Takeoff",
        items: [
          { action: "Flight Controls", expected: "FREE & CORRECT" },
          { action: "Trims", expected: "SET" },
          { action: "Flaps", expected: "APPROACH" },
          { action: "Pressurization", expected: "SET" },
          { action: "De-Ice / Anti-Ice", expected: "AS REQUIRED" },
          { action: "Autofeather", expected: "ARM" },
          { action: "Yaw Damper", expected: "ON" },
          { action: "Transponder", expected: "ALT" },
          { action: "Lights", expected: "AS REQUIRED" },
        ],
      },
      {
        phase: "Takeoff",
        items: [
          { action: "Condition Levers", expected: "HIGH RPM" },
          { action: "Power Levers", expected: "TAKEOFF" },
          { action: "Rotate", expected: "107 KIAS" },
          { action: "Landing Gear", expected: "UP" },
          { action: "Flaps", expected: "UP (Vy+)" },
          { action: "Climb Speed", expected: "160 KIAS" },
        ],
      },
      {
        phase: "Cruise",
        items: [
          { action: "Power", expected: "SET (both)" },
          { action: "Prop RPM", expected: "SET" },
          { action: "Condition Levers", expected: "SET" },
          { action: "Pressurization", expected: "MONITOR" },
          { action: "Fuel", expected: "MONITOR" },
        ],
      },
      {
        phase: "Approach & Landing",
        items: [
          { action: "Altimeter", expected: "SET" },
          { action: "Condition Levers", expected: "HIGH RPM" },
          { action: "Landing Gear", expected: "DOWN (3 GREEN)" },
          { action: "Flaps", expected: "FULL" },
          { action: "Speed", expected: "107 KIAS (Vref)" },
          { action: "Autofeather", expected: "OFF" },
          { action: "Landing Lights", expected: "ON" },
        ],
      },
      {
        phase: "Shutdown",
        items: [
          { action: "Parking Brake", expected: "SET" },
          { action: "Avionics", expected: "OFF" },
          { action: "Condition Levers", expected: "FUEL CUT OFF" },
          { action: "Prop Levers", expected: "FEATHER" },
          { action: "Generators", expected: "OFF" },
          { action: "Battery", expected: "OFF" },
        ],
      },
    ],
  },
  {
    id: "cj4",
    name: "Cessna Citation CJ4",
    manufacturer: "Cessna",
    type: "jet",
    imageEmoji: "✈️",
    checklists: [
      {
        phase: "Preflight",
        items: [
          { action: "Battery", expected: "ON" },
          { action: "External Power", expected: "AS AVAILABLE" },
          { action: "Fuel Quantity", expected: "CHECK" },
          { action: "Exterior Walk-Around", expected: "COMPLETE" },
        ],
      },
      {
        phase: "Engine Start",
        items: [
          { action: "Parking Brake", expected: "SET" },
          { action: "Seats / Belts", expected: "ADJUSTED" },
          { action: "Battery / External Power", expected: "ON" },
          { action: "Beacon", expected: "ON" },
          { action: "Throttles", expected: "IDLE" },
          { action: "Engine 1 Start/Stop", expected: "START" },
          { action: "N2 at 20%", expected: "INTRODUCE FUEL" },
          { action: "ITT", expected: "MONITOR" },
          { action: "Engine 1 Stabilized", expected: "CHECK" },
          { action: "Engine 2", expected: "REPEAT" },
          { action: "Generators", expected: "ON (both)" },
          { action: "Avionics", expected: "ON" },
          { action: "Pressurization", expected: "SET" },
        ],
      },
      {
        phase: "Before Takeoff",
        items: [
          { action: "Flight Controls", expected: "FREE & CORRECT" },
          { action: "Trims", expected: "SET (green band)" },
          { action: "Flaps", expected: "15°" },
          { action: "Speedbrakes", expected: "RETRACTED" },
          { action: "Pressurization", expected: "SET" },
          { action: "Anti-Ice", expected: "AS REQUIRED" },
          { action: "Transponder", expected: "ALT / TA-RA" },
          { action: "Autopilot", expected: "CHECK / DISENGAGE" },
          { action: "Takeoff Speeds", expected: "V1 / VR / V2 SET" },
          { action: "Lights", expected: "ON" },
        ],
      },
      {
        phase: "Takeoff",
        items: [
          { action: "Throttles", expected: "TAKEOFF THRUST" },
          { action: "Engine Instruments", expected: "CHECK" },
          { action: "V1", expected: "CHECK" },
          { action: "VR", expected: "ROTATE" },
          { action: "V2", expected: "MAINTAIN" },
          { action: "Gear", expected: "UP" },
          { action: "Flaps", expected: "RETRACT (above V2 + 10)" },
          { action: "Climb Speed", expected: "200 KIAS" },
        ],
      },
      {
        phase: "Climb",
        items: [
          { action: "Thrust", expected: "CLIMB" },
          { action: "Speed", expected: "200 KIAS / M.64" },
          { action: "Pressurization", expected: "CHECK" },
          { action: "Engine Instruments", expected: "MONITOR" },
        ],
      },
      {
        phase: "Cruise",
        items: [
          { action: "Thrust", expected: "SET" },
          { action: "Trim", expected: "ADJUST" },
          { action: "Pressurization", expected: "MONITOR" },
          { action: "Fuel Balance", expected: "MONITOR" },
          { action: "Engine Instruments", expected: "MONITOR" },
        ],
      },
      {
        phase: "Descent & Approach",
        items: [
          { action: "ATIS", expected: "OBTAIN" },
          { action: "Altimeter", expected: "SET" },
          { action: "Pressurization", expected: "SET FOR FIELD" },
          { action: "Speed", expected: "REDUCE TO 200 KIAS" },
          { action: "Landing Gear", expected: "DOWN (3 GREEN)" },
          { action: "Flaps", expected: "FULL (35°)" },
          { action: "Speed", expected: "Vref" },
          { action: "Speedbrakes", expected: "ARMED" },
          { action: "Landing Lights", expected: "ON" },
        ],
      },
      {
        phase: "After Landing",
        items: [
          { action: "Speedbrakes", expected: "RETRACTED" },
          { action: "Flaps", expected: "UP" },
          { action: "Lights", expected: "AS REQUIRED" },
          { action: "Transponder", expected: "STANDBY" },
          { action: "Anti-Ice", expected: "OFF" },
        ],
      },
      {
        phase: "Shutdown",
        items: [
          { action: "Parking Brake", expected: "SET" },
          { action: "Avionics", expected: "OFF" },
          { action: "Throttles", expected: "IDLE / CUT OFF" },
          { action: "Generators", expected: "OFF" },
          { action: "Battery", expected: "OFF" },
          { action: "Beacon", expected: "OFF" },
        ],
      },
    ],
  },
  {
    id: "longitude",
    name: "Cessna Citation Longitude",
    manufacturer: "Cessna",
    type: "jet",
    imageEmoji: "✈️",
    checklists: [
      {
        phase: "Preflight",
        items: [
          { action: "Battery 1 & 2", expected: "ON" },
          { action: "Fuel Quantity", expected: "CHECK" },
          { action: "Exterior Inspection", expected: "COMPLETE" },
          { action: "Emergency Equipment", expected: "CHECK" },
        ],
      },
      {
        phase: "Engine Start",
        items: [
          { action: "Parking Brake", expected: "SET" },
          { action: "Batteries", expected: "ON" },
          { action: "Beacon", expected: "ON" },
          { action: "Thrust Levers", expected: "IDLE" },
          { action: "Engine 1 Start", expected: "PRESS" },
          { action: "N2 at 20%", expected: "FUEL ON" },
          { action: "ITT", expected: "MONITOR (limits)" },
          { action: "Engine 1 Idle", expected: "STABLE" },
          { action: "Engine 2", expected: "REPEAT" },
          { action: "Generators", expected: "ON" },
          { action: "Avionics / FMS", expected: "ON & PROGRAM" },
          { action: "Pressurization", expected: "AUTO" },
        ],
      },
      {
        phase: "Before Takeoff",
        items: [
          { action: "Flight Controls", expected: "FREE & CORRECT" },
          { action: "Trims", expected: "SET T/O" },
          { action: "Flaps", expected: "T/O" },
          { action: "Speedbrakes", expected: "RETRACTED" },
          { action: "Pressurization", expected: "SET" },
          { action: "Anti-Ice", expected: "AS REQUIRED" },
          { action: "Transponder", expected: "TA/RA" },
          { action: "T/O Speeds", expected: "V1/VR/V2 CONFIRMED" },
          { action: "Lights", expected: "ALL ON" },
        ],
      },
      {
        phase: "Takeoff",
        items: [
          { action: "Thrust Levers", expected: "T/O THRUST" },
          { action: "Engines", expected: "CHECK" },
          { action: "V1", expected: "CALL" },
          { action: "VR", expected: "ROTATE" },
          { action: "Gear", expected: "UP" },
          { action: "Flaps", expected: "UP (accel altitude)" },
        ],
      },
      {
        phase: "Cruise",
        items: [
          { action: "Thrust", expected: "SET" },
          { action: "Pressurization", expected: "MONITOR" },
          { action: "Fuel Balance", expected: "CHECK" },
          { action: "Engine Instruments", expected: "MONITOR" },
        ],
      },
      {
        phase: "Approach & Landing",
        items: [
          { action: "Altimeter", expected: "SET" },
          { action: "Speed", expected: "REDUCE" },
          { action: "Gear", expected: "DOWN (3 GREEN)" },
          { action: "Flaps", expected: "FULL" },
          { action: "Speed", expected: "Vref" },
          { action: "Speedbrakes", expected: "ARMED" },
          { action: "Landing Lights", expected: "ON" },
        ],
      },
      {
        phase: "Shutdown",
        items: [
          { action: "Parking Brake", expected: "SET" },
          { action: "Avionics", expected: "OFF" },
          { action: "Engines", expected: "SHUTDOWN" },
          { action: "Generators", expected: "OFF" },
          { action: "Batteries", expected: "OFF" },
        ],
      },
    ],
  },
  {
    id: "baron-58",
    name: "Beechcraft Baron G58",
    manufacturer: "Beechcraft",
    type: "twin-prop",
    imageEmoji: "🛩️",
    checklists: [
      {
        phase: "Preflight",
        items: [
          { action: "Master Switch", expected: "ON" },
          { action: "Fuel Quantity", expected: "CHECK BOTH" },
          { action: "Flaps", expected: "EXTEND & CHECK" },
          { action: "Master Switch", expected: "OFF" },
          { action: "External Inspection", expected: "COMPLETE" },
        ],
      },
      {
        phase: "Engine Start",
        items: [
          { action: "Parking Brake", expected: "SET" },
          { action: "Mixtures", expected: "RICH" },
          { action: "Props", expected: "HIGH RPM" },
          { action: "Throttles", expected: "IDLE" },
          { action: "Master Switch", expected: "ON" },
          { action: "Beacon", expected: "ON" },
          { action: "Left Engine", expected: "START" },
          { action: "Right Engine", expected: "START" },
          { action: "Oil Pressure", expected: "CHECK (both)" },
          { action: "Alternators", expected: "ON (both)" },
          { action: "Avionics", expected: "ON" },
        ],
      },
      {
        phase: "Before Takeoff",
        items: [
          { action: "Flight Controls", expected: "FREE & CORRECT" },
          { action: "Trims", expected: "SET" },
          { action: "Props", expected: "EXERCISE / HIGH RPM" },
          { action: "Magnetos", expected: "CHECK (both engines)" },
          { action: "Mixtures", expected: "RICH" },
          { action: "Fuel Selectors", expected: "ON (both)" },
          { action: "Flaps", expected: "SET (T/O)" },
          { action: "Instruments", expected: "SET" },
          { action: "Lights", expected: "ON" },
        ],
      },
      {
        phase: "Takeoff",
        items: [
          { action: "Throttles", expected: "FULL" },
          { action: "Props", expected: "FULL FORWARD" },
          { action: "Mixtures", expected: "RICH" },
          { action: "Engine Instruments", expected: "CHECK" },
          { action: "Rotate", expected: "84 KIAS" },
          { action: "Gear", expected: "UP" },
          { action: "Climb Speed", expected: "100 KIAS (Vy)" },
          { action: "Flaps", expected: "UP" },
        ],
      },
      {
        phase: "Cruise",
        items: [
          { action: "Power", expected: "SET (both)" },
          { action: "Props", expected: "SET RPM" },
          { action: "Mixtures", expected: "LEAN" },
          { action: "Fuel", expected: "MONITOR (both)" },
          { action: "Engine Instruments", expected: "MONITOR" },
        ],
      },
      {
        phase: "Approach & Landing",
        items: [
          { action: "Mixtures", expected: "RICH" },
          { action: "Props", expected: "HIGH RPM" },
          { action: "Gear", expected: "DOWN (3 GREEN)" },
          { action: "Flaps", expected: "AS REQUIRED" },
          { action: "Speed", expected: "95 KIAS (final)" },
          { action: "Landing Lights", expected: "ON" },
        ],
      },
      {
        phase: "Shutdown",
        items: [
          { action: "Parking Brake", expected: "SET" },
          { action: "Avionics", expected: "OFF" },
          { action: "Mixtures", expected: "IDLE CUT OFF" },
          { action: "Magnetos", expected: "OFF (both)" },
          { action: "Alternators", expected: "OFF" },
          { action: "Master Switch", expected: "OFF" },
        ],
      },
    ],
  },
  {
    id: "bonanza-g36",
    name: "Beechcraft Bonanza G36",
    manufacturer: "Beechcraft",
    type: "single-prop",
    imageEmoji: "🛩️",
    checklists: [
      {
        phase: "Preflight",
        items: [
          { action: "Master Switch", expected: "ON" },
          { action: "Fuel Quantity", expected: "CHECK" },
          { action: "Flaps", expected: "EXTEND & CHECK" },
          { action: "Master Switch", expected: "OFF" },
          { action: "External Inspection", expected: "COMPLETE" },
        ],
      },
      {
        phase: "Engine Start",
        items: [
          { action: "Parking Brake", expected: "SET" },
          { action: "Mixture", expected: "RICH" },
          { action: "Prop", expected: "HIGH RPM" },
          { action: "Throttle", expected: "OPEN 1/4\"" },
          { action: "Master Switch", expected: "ON" },
          { action: "Beacon", expected: "ON" },
          { action: "Ignition", expected: "START" },
          { action: "Oil Pressure", expected: "CHECK" },
          { action: "Alternator", expected: "ON" },
          { action: "Avionics", expected: "ON" },
        ],
      },
      {
        phase: "Before Takeoff",
        items: [
          { action: "Flight Controls", expected: "FREE & CORRECT" },
          { action: "Trim", expected: "TAKEOFF" },
          { action: "Prop", expected: "EXERCISE & HIGH RPM" },
          { action: "Magnetos", expected: "CHECK" },
          { action: "Mixture", expected: "RICH" },
          { action: "Fuel Selector", expected: "FULLEST TANK" },
          { action: "Flaps", expected: "APPROACH" },
          { action: "Instruments", expected: "SET" },
          { action: "Lights", expected: "ON" },
        ],
      },
      {
        phase: "Takeoff",
        items: [
          { action: "Throttle", expected: "FULL" },
          { action: "Prop", expected: "FULL FORWARD" },
          { action: "Rotate", expected: "71 KIAS" },
          { action: "Gear", expected: "UP (positive climb)" },
          { action: "Climb Speed", expected: "100 KIAS (Vy)" },
          { action: "Flaps", expected: "UP" },
        ],
      },
      {
        phase: "Cruise",
        items: [
          { action: "Power", expected: "SET" },
          { action: "Prop RPM", expected: "SET" },
          { action: "Mixture", expected: "LEAN" },
          { action: "Trim", expected: "ADJUST" },
          { action: "Fuel", expected: "MONITOR / SWITCH TANKS" },
        ],
      },
      {
        phase: "Approach & Landing",
        items: [
          { action: "Mixture", expected: "RICH" },
          { action: "Prop", expected: "HIGH RPM" },
          { action: "Gear", expected: "DOWN (3 GREEN)" },
          { action: "Flaps", expected: "AS REQUIRED" },
          { action: "Speed", expected: "80 KIAS (final)" },
          { action: "Landing Light", expected: "ON" },
        ],
      },
      {
        phase: "Shutdown",
        items: [
          { action: "Parking Brake", expected: "SET" },
          { action: "Avionics", expected: "OFF" },
          { action: "Mixture", expected: "IDLE CUT OFF" },
          { action: "Magnetos", expected: "OFF" },
          { action: "Master Switch", expected: "OFF" },
        ],
      },
    ],
  },
  {
    id: "sr22",
    name: "Cirrus SR22",
    manufacturer: "Cirrus",
    type: "single-prop",
    imageEmoji: "🛩️",
    checklists: [
      {
        phase: "Preflight",
        items: [
          { action: "Battery Master", expected: "ON" },
          { action: "Fuel Quantity", expected: "CHECK (both)" },
          { action: "Flaps", expected: "EXTEND (50%)" },
          { action: "Stall Warning", expected: "TEST" },
          { action: "Avionics Fan", expected: "CHECK" },
          { action: "Battery Master", expected: "OFF" },
          { action: "External Walk-Around", expected: "COMPLETE" },
          { action: "CAPS Pin", expected: "CHECK (ARMED)" },
        ],
      },
      {
        phase: "Engine Start",
        items: [
          { action: "Parking Brake", expected: "SET" },
          { action: "Seat Belts", expected: "ON" },
          { action: "Battery Master", expected: "ON" },
          { action: "Alternator Master", expected: "ON" },
          { action: "Beacon", expected: "ON" },
          { action: "Mixture", expected: "RICH" },
          { action: "Throttle", expected: "OPEN 1/4\"" },
          { action: "Fuel Pump", expected: "BOOST" },
          { action: "Ignition", expected: "START" },
          { action: "Oil Pressure", expected: "CHECK" },
          { action: "Fuel Pump", expected: "OFF" },
          { action: "Avionics", expected: "ON" },
        ],
      },
      {
        phase: "Before Takeoff",
        items: [
          { action: "Flight Controls", expected: "FREE & CORRECT" },
          { action: "Trim", expected: "TAKEOFF" },
          { action: "Flaps", expected: "50%" },
          { action: "Fuel Selector", expected: "FULLEST TANK" },
          { action: "Mixture", expected: "RICH" },
          { action: "Prop", expected: "CYCLE" },
          { action: "Magnetos", expected: "CHECK" },
          { action: "Engine Instruments", expected: "GREEN" },
          { action: "Fuel Pump", expected: "BOOST" },
          { action: "Autopilot", expected: "CHECK / OFF" },
          { action: "Transponder", expected: "ALT" },
          { action: "Lights", expected: "ON" },
        ],
      },
      {
        phase: "Takeoff",
        items: [
          { action: "Throttle", expected: "FULL" },
          { action: "Engine Instruments", expected: "CHECK" },
          { action: "Rotate", expected: "73 KIAS" },
          { action: "Climb Speed", expected: "88 KIAS (Vy)" },
          { action: "Flaps", expected: "UP" },
          { action: "Fuel Pump", expected: "OFF (1000 ft AGL)" },
        ],
      },
      {
        phase: "Cruise",
        items: [
          { action: "Power", expected: "SET (% power)" },
          { action: "Mixture", expected: "LEAN (peak/LOP)" },
          { action: "Trim", expected: "ADJUST" },
          { action: "Fuel", expected: "SWITCH TANKS hourly" },
          { action: "Engine Monitor", expected: "CHECK" },
        ],
      },
      {
        phase: "Approach & Landing",
        items: [
          { action: "Fuel Pump", expected: "BOOST" },
          { action: "Mixture", expected: "RICH" },
          { action: "Flaps", expected: "AS REQUIRED" },
          { action: "Speed", expected: "80 KIAS (final)" },
          { action: "Landing Light", expected: "ON" },
        ],
      },
      {
        phase: "Shutdown",
        items: [
          { action: "Parking Brake", expected: "SET" },
          { action: "Avionics", expected: "OFF" },
          { action: "Mixture", expected: "IDLE CUT OFF" },
          { action: "Ignition", expected: "OFF" },
          { action: "Alternator Master", expected: "OFF" },
          { action: "Battery Master", expected: "OFF" },
        ],
      },
    ],
  },
  {
    id: "caravan",
    name: "Cessna 208B Grand Caravan",
    manufacturer: "Cessna",
    type: "turboprop",
    imageEmoji: "🛫",
    checklists: [
      {
        phase: "Preflight",
        items: [
          { action: "Battery", expected: "ON" },
          { action: "Fuel Quantity", expected: "CHECK" },
          { action: "Flaps", expected: "CHECK" },
          { action: "Lights", expected: "TEST" },
          { action: "Battery", expected: "OFF" },
          { action: "External Inspection", expected: "COMPLETE" },
        ],
      },
      {
        phase: "Engine Start",
        items: [
          { action: "Parking Brake", expected: "SET" },
          { action: "Battery / Generator", expected: "ON" },
          { action: "Beacon", expected: "ON" },
          { action: "Condition Lever", expected: "CUT OFF" },
          { action: "Power Lever", expected: "IDLE" },
          { action: "Prop Lever", expected: "FULL FORWARD" },
          { action: "Starter", expected: "ON (Ng 13%)" },
          { action: "Condition Lever", expected: "LOW IDLE" },
          { action: "ITT", expected: "MONITOR" },
          { action: "Oil Pressure", expected: "CHECK" },
          { action: "Generator", expected: "ON" },
          { action: "Avionics", expected: "ON" },
        ],
      },
      {
        phase: "Before Takeoff",
        items: [
          { action: "Flight Controls", expected: "FREE & CORRECT" },
          { action: "Trim", expected: "SET" },
          { action: "Flaps", expected: "20°" },
          { action: "Condition Lever", expected: "MAX RPM" },
          { action: "Instruments", expected: "SET" },
          { action: "Transponder", expected: "ALT" },
          { action: "Lights", expected: "ON" },
        ],
      },
      {
        phase: "Takeoff",
        items: [
          { action: "Power Lever", expected: "MAX ALLOWABLE" },
          { action: "Engine Instruments", expected: "GREEN" },
          { action: "Rotate", expected: "80 KIAS" },
          { action: "Climb Speed", expected: "110 KIAS" },
          { action: "Flaps", expected: "RETRACT" },
        ],
      },
      {
        phase: "Cruise",
        items: [
          { action: "Power", expected: "SET" },
          { action: "Condition Lever", expected: "SET RPM" },
          { action: "Trim", expected: "ADJUST" },
          { action: "Fuel", expected: "MONITOR" },
        ],
      },
      {
        phase: "Approach & Landing",
        items: [
          { action: "Condition Lever", expected: "MAX RPM" },
          { action: "Flaps", expected: "AS REQUIRED" },
          { action: "Speed", expected: "85 KIAS (Vref)" },
          { action: "Landing Light", expected: "ON" },
        ],
      },
      {
        phase: "Shutdown",
        items: [
          { action: "Parking Brake", expected: "SET" },
          { action: "Avionics", expected: "OFF" },
          { action: "Condition Lever", expected: "CUT OFF" },
          { action: "Generator", expected: "OFF" },
          { action: "Battery", expected: "OFF" },
        ],
      },
    ],
  },
  {
    id: "xcub",
    name: "CubCrafters XCub",
    manufacturer: "CubCrafters",
    type: "single-prop",
    imageEmoji: "🛩️",
    checklists: [
      {
        phase: "Preflight",
        items: [
          { action: "Master Switch", expected: "ON" },
          { action: "Fuel Quantity", expected: "CHECK" },
          { action: "Master Switch", expected: "OFF" },
          { action: "External Inspection", expected: "COMPLETE" },
          { action: "Fuel Caps", expected: "SECURE" },
        ],
      },
      {
        phase: "Engine Start",
        items: [
          { action: "Brakes", expected: "HOLD" },
          { action: "Mixture", expected: "RICH" },
          { action: "Throttle", expected: "CRACKED" },
          { action: "Master Switch", expected: "ON" },
          { action: "Ignition", expected: "START" },
          { action: "Oil Pressure", expected: "CHECK" },
        ],
      },
      {
        phase: "Before Takeoff",
        items: [
          { action: "Controls", expected: "FREE & CORRECT" },
          { action: "Trim", expected: "TAKEOFF" },
          { action: "Mixture", expected: "RICH" },
          { action: "Magnetos", expected: "CHECK" },
          { action: "Fuel Selector", expected: "BOTH" },
        ],
      },
      {
        phase: "Takeoff",
        items: [
          { action: "Throttle", expected: "FULL" },
          { action: "Tail Up", expected: "40 KIAS" },
          { action: "Rotate", expected: "55 KIAS" },
          { action: "Climb", expected: "65 KIAS (Vy)" },
        ],
      },
      {
        phase: "Cruise",
        items: [
          { action: "Power", expected: "SET" },
          { action: "Mixture", expected: "LEAN" },
          { action: "Trim", expected: "ADJUST" },
        ],
      },
      {
        phase: "Landing",
        items: [
          { action: "Mixture", expected: "RICH" },
          { action: "Carburetor Heat", expected: "ON" },
          { action: "Speed", expected: "55-60 KIAS" },
          { action: "Flaps", expected: "AS REQUIRED" },
        ],
      },
      {
        phase: "Shutdown",
        items: [
          { action: "Mixture", expected: "IDLE CUT OFF" },
          { action: "Magnetos", expected: "OFF" },
          { action: "Master Switch", expected: "OFF" },
        ],
      },
    ],
  },
  {
    id: "pc-6",
    name: "Pilatus PC-6 Porter",
    manufacturer: "Pilatus",
    type: "turboprop",
    imageEmoji: "🛫",
    checklists: [
      {
        phase: "Preflight",
        items: [
          { action: "Battery", expected: "ON" },
          { action: "Fuel", expected: "CHECK" },
          { action: "Battery", expected: "OFF" },
          { action: "External Inspection", expected: "COMPLETE" },
        ],
      },
      {
        phase: "Engine Start",
        items: [
          { action: "Parking Brake", expected: "SET" },
          { action: "Battery / Generator", expected: "ON" },
          { action: "Beacon", expected: "ON" },
          { action: "Condition Lever", expected: "GROUND IDLE" },
          { action: "Starter", expected: "ENGAGE" },
          { action: "ITT", expected: "MONITOR" },
          { action: "Oil Pressure", expected: "CHECK" },
          { action: "Generator", expected: "ON" },
        ],
      },
      {
        phase: "Before Takeoff",
        items: [
          { action: "Controls", expected: "FREE & CORRECT" },
          { action: "Trim", expected: "SET" },
          { action: "Flaps", expected: "TAKEOFF" },
          { action: "Condition Lever", expected: "FLIGHT IDLE" },
          { action: "Instruments", expected: "SET" },
        ],
      },
      {
        phase: "Takeoff",
        items: [
          { action: "Power Lever", expected: "MAX" },
          { action: "Rotate", expected: "55 KIAS" },
          { action: "Climb", expected: "80 KIAS" },
        ],
      },
      {
        phase: "Cruise",
        items: [
          { action: "Power", expected: "SET" },
          { action: "Trim", expected: "ADJUST" },
        ],
      },
      {
        phase: "Landing",
        items: [
          { action: "Condition Lever", expected: "MAX RPM" },
          { action: "Flaps", expected: "FULL" },
          { action: "Speed", expected: "60 KIAS" },
        ],
      },
      {
        phase: "Shutdown",
        items: [
          { action: "Condition Lever", expected: "CUT OFF" },
          { action: "Generator", expected: "OFF" },
          { action: "Battery", expected: "OFF" },
        ],
      },
    ],
  },
  {
    id: "h135",
    name: "Airbus H135",
    manufacturer: "Airbus Helicopters",
    type: "helicopter",
    imageEmoji: "🚁",
    checklists: [
      {
        phase: "Preflight",
        items: [
          { action: "Battery 1 & 2", expected: "ON" },
          { action: "Fuel Quantity", expected: "CHECK" },
          { action: "Caution/Warning Panel", expected: "CHECK" },
          { action: "External Inspection", expected: "COMPLETE" },
          { action: "Rotor Area", expected: "CLEAR" },
        ],
      },
      {
        phase: "Engine Start (Engine 1 then 2)",
        items: [
          { action: "Batteries", expected: "ON" },
          { action: "Beacon", expected: "ON" },
          { action: "Rotor Brake", expected: "OFF" },
          { action: "Engine 1 Start", expected: "PRESS & HOLD" },
          { action: "Ng rising", expected: "MONITOR" },
          { action: "TOT", expected: "MONITOR (limits)" },
          { action: "Engine 1 Idle", expected: "STABLE" },
          { action: "Engine 2", expected: "REPEAT" },
          { action: "Nr", expected: "100% (both engines)" },
          { action: "Generators", expected: "ON" },
          { action: "Avionics", expected: "ON" },
        ],
      },
      {
        phase: "Before Takeoff",
        items: [
          { action: "Flight Controls", expected: "CHECK (full travel)" },
          { action: "Instruments", expected: "CHECK" },
          { action: "Caution Panel", expected: "NO WARNINGS" },
          { action: "Hydraulics", expected: "CHECK" },
          { action: "Nr", expected: "100%" },
          { action: "Doors", expected: "CLOSED & LOCKED" },
          { action: "Transponder", expected: "ALT" },
          { action: "Lights", expected: "AS REQUIRED" },
        ],
      },
      {
        phase: "Takeoff",
        items: [
          { action: "Collective", expected: "INCREASE SMOOTHLY" },
          { action: "Pedals", expected: "MAINTAIN HEADING" },
          { action: "Hover Check", expected: "STABLE" },
          { action: "Instruments", expected: "GREEN" },
          { action: "Transition", expected: "FORWARD FLIGHT" },
        ],
      },
      {
        phase: "Cruise",
        items: [
          { action: "Power", expected: "SET (both engines)" },
          { action: "Nr", expected: "100%" },
          { action: "Engine Instruments", expected: "MONITOR" },
          { action: "Fuel", expected: "MONITOR" },
        ],
      },
      {
        phase: "Approach & Landing",
        items: [
          { action: "Landing Area", expected: "IDENTIFY & CLEAR" },
          { action: "Speed", expected: "REDUCE" },
          { action: "Hover", expected: "ESTABLISH" },
          { action: "Collective", expected: "REDUCE SMOOTHLY" },
          { action: "Touchdown", expected: "SMOOTH & LEVEL" },
          { action: "Landing Light", expected: "ON" },
        ],
      },
      {
        phase: "Shutdown",
        items: [
          { action: "Collective", expected: "FULL DOWN" },
          { action: "Avionics", expected: "OFF" },
          { action: "Engine 1", expected: "SHUTDOWN" },
          { action: "Engine 2", expected: "SHUTDOWN" },
          { action: "Nr", expected: "DECREASING" },
          { action: "Rotor Brake", expected: "APPLY (below 130 Nr)" },
          { action: "Generators", expected: "OFF" },
          { action: "Batteries", expected: "OFF" },
        ],
      },
    ],
  },
  {
    id: "h225",
    name: "Airbus H225 Super Puma",
    manufacturer: "Airbus Helicopters",
    type: "helicopter",
    imageEmoji: "🚁",
    checklists: [
      {
        phase: "Preflight",
        items: [
          { action: "Batteries", expected: "ON" },
          { action: "Fuel Quantity", expected: "CHECK" },
          { action: "Hydraulic Levels", expected: "CHECK" },
          { action: "External Inspection", expected: "COMPLETE" },
          { action: "Rotor Area", expected: "CLEAR" },
        ],
      },
      {
        phase: "Engine Start",
        items: [
          { action: "Batteries", expected: "ON" },
          { action: "Beacon", expected: "ON" },
          { action: "APU", expected: "START" },
          { action: "Engine 1 Start", expected: "ENGAGE" },
          { action: "TGT", expected: "MONITOR" },
          { action: "Engine 1 Idle", expected: "STABLE" },
          { action: "Engine 2", expected: "REPEAT" },
          { action: "Nr", expected: "100%" },
          { action: "Generators", expected: "ON" },
          { action: "APU", expected: "OFF" },
        ],
      },
      {
        phase: "Before Takeoff",
        items: [
          { action: "Flight Controls", expected: "FULL TRAVEL" },
          { action: "Hydraulics", expected: "CHECK" },
          { action: "Instruments", expected: "SET" },
          { action: "Nr", expected: "100%" },
          { action: "Doors", expected: "CLOSED" },
          { action: "AFCS", expected: "ENGAGED" },
          { action: "Transponder", expected: "ALT" },
        ],
      },
      {
        phase: "Takeoff",
        items: [
          { action: "Collective", expected: "INCREASE" },
          { action: "Hover", expected: "ESTABLISH" },
          { action: "Power Check", expected: "WITHIN LIMITS" },
          { action: "Transition", expected: "FORWARD FLIGHT" },
        ],
      },
      {
        phase: "Cruise",
        items: [
          { action: "Power", expected: "SET" },
          { action: "Engine Instruments", expected: "MONITOR" },
          { action: "Fuel", expected: "MONITOR & BALANCE" },
          { action: "AFCS", expected: "CHECK" },
        ],
      },
      {
        phase: "Approach & Landing",
        items: [
          { action: "Speed", expected: "REDUCE" },
          { action: "Hover", expected: "ESTABLISH" },
          { action: "Landing Area", expected: "CLEAR" },
          { action: "Touchdown", expected: "SMOOTH" },
        ],
      },
      {
        phase: "Shutdown",
        items: [
          { action: "Collective", expected: "FULL DOWN" },
          { action: "Engines", expected: "SHUTDOWN" },
          { action: "Rotor Brake", expected: "APPLY" },
          { action: "Generators", expected: "OFF" },
          { action: "Batteries", expected: "OFF" },
        ],
      },
    ],
  },
  {
    id: "a320neo",
    name: "Airbus A320neo",
    manufacturer: "Airbus",
    type: "airliner",
    imageEmoji: "🛫",
    checklists: [
      {
        phase: "Cockpit Preparation",
        items: [
          { action: "Battery 1 & 2", expected: "ON" },
          { action: "External Power", expected: "ON (if available)" },
          { action: "APU Master", expected: "ON" },
          { action: "APU Start", expected: "ON" },
          { action: "APU Bleed", expected: "ON (when available)" },
          { action: "NAV & Logo Lights", expected: "ON" },
          { action: "No Smoking / Seatbelt Signs", expected: "ON" },
          { action: "ADIRS 1+2+3", expected: "NAV" },
          { action: "Emergency Exit Lights", expected: "ARM" },
          { action: "Cockpit Lights", expected: "AS REQUIRED" },
        ],
      },
      {
        phase: "FMGC Programming",
        items: [
          { action: "FROM/TO", expected: "ENTER" },
          { action: "Flight Number", expected: "ENTER" },
          { action: "Cost Index", expected: "ENTER" },
          { action: "CRZ FL", expected: "ENTER" },
          { action: "Route", expected: "ENTER / VERIFY" },
          { action: "PERF / T.O. Page", expected: "SET (V1/VR/V2, FLEX, FLAPS)" },
          { action: "Fuel & Payload", expected: "ENTER / VERIFY" },
          { action: "Secondary Flight Plan", expected: "VERIFY" },
        ],
      },
      {
        phase: "Before Engine Start",
        items: [
          { action: "Parking Brake", expected: "SET" },
          { action: "Beacon", expected: "ON" },
          { action: "Windows / Doors", expected: "CLOSED" },
          { action: "Fuel Quantity / FOB", expected: "CHECK" },
          { action: "TO DATA", expected: "SET (FLEX TEMP, V-SPEEDS)" },
          { action: "Slides", expected: "ARMED" },
          { action: "ATC Clearance", expected: "OBTAINED" },
          { action: "Transponder", expected: "SET" },
        ],
      },
      {
        phase: "Engine Start",
        items: [
          { action: "Engine Mode Selector", expected: "IGN/START" },
          { action: "Engine 2 Master", expected: "ON" },
          { action: "N2 rising", expected: "CHECK" },
          { action: "Engine 2 Stable", expected: "CHECK (idle)" },
          { action: "Engine 1 Master", expected: "ON" },
          { action: "Engine 1 Stable", expected: "CHECK (idle)" },
          { action: "Engine Mode Selector", expected: "NORM" },
          { action: "APU Bleed", expected: "OFF" },
          { action: "APU Master", expected: "OFF" },
          { action: "External Power", expected: "OFF" },
        ],
      },
      {
        phase: "After Engine Start",
        items: [
          { action: "Anti-Ice", expected: "AS REQUIRED" },
          { action: "Rudder Trim", expected: "ZERO" },
          { action: "Pitch Trim", expected: "SET (for CG)" },
          { action: "Flight Controls", expected: "CHECK (full deflection)" },
          { action: "Flaps", expected: "SET (T.O. config)" },
          { action: "Autobrake", expected: "MAX (or RTO)" },
          { action: "ECAM Status", expected: "CHECK" },
          { action: "Ground Crew", expected: "CLEARED / DISCONNECT" },
        ],
      },
      {
        phase: "Taxi",
        items: [
          { action: "Parking Brake", expected: "RELEASE" },
          { action: "Nose Light", expected: "TAXI" },
          { action: "Runway Turn Off Lights", expected: "ON" },
          { action: "Brakes", expected: "CHECK" },
          { action: "Flight Instruments", expected: "CHECK DURING TAXI" },
        ],
      },
      {
        phase: "Before Takeoff",
        items: [
          { action: "T.O. Config", expected: "PRESS (no warnings)" },
          { action: "ECAM Memo", expected: "T.O. NO BLUE" },
          { action: "Cabin", expected: "READY" },
          { action: "TCAS", expected: "TA/RA" },
          { action: "Packs", expected: "AS REQUIRED" },
          { action: "Strobe Lights", expected: "ON" },
          { action: "Landing Lights", expected: "ON" },
          { action: "Nose Light", expected: "T.O." },
        ],
      },
      {
        phase: "Takeoff",
        items: [
          { action: "Thrust Levers", expected: "FLEX/TOGA" },
          { action: "FMA", expected: "CHECK (SRS, RWY)" },
          { action: "Engines", expected: "CHECK (N1, EGT)" },
          { action: "100 kt", expected: "CALL" },
          { action: "V1", expected: "CALL" },
          { action: "VR", expected: "ROTATE" },
          { action: "Positive Climb", expected: "GEAR UP" },
          { action: "Thrust Reduction Alt", expected: "CLB THRUST" },
          { action: "Autopilot", expected: "ENGAGE" },
        ],
      },
      {
        phase: "Climb",
        items: [
          { action: "Landing Gear", expected: "UP & OFF" },
          { action: "Flaps", expected: "RETRACT ON SCHEDULE" },
          { action: "Autopilot / Autothrust", expected: "ENGAGED" },
          { action: "Altimeter", expected: "STD (above transition)" },
          { action: "Landing Lights", expected: "OFF (above 10,000 ft)" },
          { action: "Seatbelt Signs", expected: "AS REQUIRED" },
        ],
      },
      {
        phase: "Cruise",
        items: [
          { action: "Autopilot / FD / Autothrust", expected: "ENGAGED" },
          { action: "ECAM", expected: "MONITOR" },
          { action: "Fuel", expected: "MONITOR" },
          { action: "FMS Progress", expected: "MONITOR" },
          { action: "Altimeter", expected: "STD" },
        ],
      },
      {
        phase: "Descent Preparation",
        items: [
          { action: "ATIS / Weather", expected: "OBTAIN" },
          { action: "Landing Data", expected: "ENTER (VAPP, MDA/DH)" },
          { action: "Approach Briefing", expected: "COMPLETE" },
          { action: "PERF APPR Page", expected: "SET" },
          { action: "Autobrake", expected: "SET (MED/LO)" },
          { action: "Landing Elevation", expected: "SET" },
        ],
      },
      {
        phase: "Descent",
        items: [
          { action: "Altimeter", expected: "SET (below transition)" },
          { action: "Landing Lights", expected: "ON (below 10,000 ft)" },
          { action: "Seatbelt Signs", expected: "ON" },
          { action: "Cabin", expected: "NOTIFIED" },
          { action: "ECAM", expected: "CHECK" },
        ],
      },
      {
        phase: "Approach",
        items: [
          { action: "Approach Phase", expected: "ACTIVATED" },
          { action: "LS / ILS", expected: "SET" },
          { action: "Speed", expected: "MANAGED" },
          { action: "Flaps", expected: "EXTEND ON SCHEDULE (1→2→3→FULL)" },
          { action: "Landing Gear", expected: "DOWN (3 GREEN)" },
          { action: "Autobrake", expected: "ARMED" },
          { action: "Ground Spoilers", expected: "ARMED" },
          { action: "ECAM Memo", expected: "LDG NO BLUE" },
          { action: "Runway", expected: "IN SIGHT" },
        ],
      },
      {
        phase: "Landing",
        items: [
          { action: "At 30 ft", expected: "RETARD (idle thrust)" },
          { action: "Touchdown", expected: "MAIN GEAR FIRST" },
          { action: "Reverse Thrust", expected: "AS REQUIRED" },
          { action: "Spoilers", expected: "DEPLOYED (auto)" },
          { action: "Autobrake", expected: "DECEL CHECK" },
          { action: "Nosewheel", expected: "LOWER" },
          { action: "Reverse", expected: "IDLE (at 70 kt)" },
          { action: "Braking", expected: "AS REQUIRED" },
        ],
      },
      {
        phase: "After Landing",
        items: [
          { action: "Spoilers", expected: "RETRACT" },
          { action: "Flaps", expected: "RETRACT" },
          { action: "Strobe Lights", expected: "OFF" },
          { action: "Nose Light", expected: "TAXI" },
          { action: "Landing Lights", expected: "OFF" },
          { action: "APU", expected: "START" },
          { action: "Radar / PWS", expected: "OFF" },
          { action: "Transponder", expected: "STANDBY" },
          { action: "Anti-Ice", expected: "OFF" },
        ],
      },
      {
        phase: "Parking & Shutdown",
        items: [
          { action: "Parking Brake", expected: "SET" },
          { action: "APU Bleed", expected: "ON" },
          { action: "Engine 1 Master", expected: "OFF" },
          { action: "Engine 2 Master", expected: "OFF" },
          { action: "Seatbelt Signs", expected: "OFF" },
          { action: "Fuel Pumps", expected: "OFF" },
          { action: "External Power", expected: "ON (if available)" },
          { action: "APU Master", expected: "OFF" },
          { action: "Batteries", expected: "OFF" },
        ],
      },
    ],
  },
  {
    id: "b747-8i",
    name: "Boeing 747-8 Intercontinental",
    manufacturer: "Boeing",
    type: "airliner",
    imageEmoji: "🛫",
    checklists: [
      {
        phase: "Cockpit Preparation",
        items: [
          { action: "Battery Switch", expected: "ON" },
          { action: "External Power", expected: "CONNECTED (if avail)" },
          { action: "APU", expected: "START" },
          { action: "APU Bleed", expected: "ON (when APU running)" },
          { action: "IRS", expected: "NAV (all)" },
          { action: "Emergency Lights", expected: "ARM" },
          { action: "No Smoking / Seatbelt", expected: "ON" },
          { action: "Window Heat", expected: "ON" },
          { action: "Hydraulic Pumps", expected: "ON" },
          { action: "Fuel Panel", expected: "SET" },
        ],
      },
      {
        phase: "FMC Programming",
        items: [
          { action: "IDENT Page", expected: "VERIFY" },
          { action: "POS INIT", expected: "ENTER" },
          { action: "ROUTE", expected: "ENTER" },
          { action: "PERF INIT", expected: "ENTER (ZFW, CRZ ALT, CI)" },
          { action: "TAKEOFF REF", expected: "SET (V-SPEEDS, FLAPS)" },
          { action: "DEP/ARR", expected: "SELECT" },
        ],
      },
      {
        phase: "Before Engine Start",
        items: [
          { action: "Parking Brake", expected: "SET" },
          { action: "Beacon", expected: "ON" },
          { action: "Doors", expected: "CLOSED" },
          { action: "Fuel Quantity", expected: "CHECKED" },
          { action: "Transponder", expected: "SET" },
          { action: "Pushback Clearance", expected: "OBTAINED" },
        ],
      },
      {
        phase: "Engine Start (4-3-2-1)",
        items: [
          { action: "Engine 4 Start", expected: "ENGAGE" },
          { action: "N2 rising", expected: "CHECK" },
          { action: "Fuel Lever 4", expected: "ON" },
          { action: "Engine 4 Stable", expected: "CHECK" },
          { action: "Engine 3, 2, 1", expected: "REPEAT" },
          { action: "Generators", expected: "ON (all)" },
          { action: "APU", expected: "OFF" },
          { action: "Hydraulic Pumps", expected: "ALL ON" },
        ],
      },
      {
        phase: "Before Takeoff",
        items: [
          { action: "Flight Controls", expected: "CHECKED" },
          { action: "Flaps", expected: "T/O (10/20)" },
          { action: "Trim", expected: "SET (green band)" },
          { action: "Autobrake", expected: "RTO" },
          { action: "Speedbrakes", expected: "ARMED" },
          { action: "T/O Config Warning", expected: "CHECK" },
          { action: "Transponder", expected: "TA/RA" },
          { action: "Strobes", expected: "ON" },
          { action: "Landing Lights", expected: "ON" },
        ],
      },
      {
        phase: "Takeoff",
        items: [
          { action: "Thrust Levers", expected: "T/O (TO/GA)" },
          { action: "Engines", expected: "ALL CHECK" },
          { action: "80 Knots", expected: "CALL" },
          { action: "V1", expected: "CALL" },
          { action: "VR", expected: "ROTATE" },
          { action: "V2", expected: "CHECK" },
          { action: "Positive Climb", expected: "GEAR UP" },
        ],
      },
      {
        phase: "Climb",
        items: [
          { action: "Thrust", expected: "CLIMB" },
          { action: "Flaps", expected: "RETRACT ON SCHEDULE" },
          { action: "Autopilot", expected: "ENGAGE" },
          { action: "Altimeter", expected: "STD (above trans alt)" },
          { action: "Landing Lights", expected: "OFF (10,000 ft)" },
        ],
      },
      {
        phase: "Cruise",
        items: [
          { action: "AP / AT", expected: "ENGAGED" },
          { action: "Fuel", expected: "MONITOR / BALANCE" },
          { action: "Engine Instruments", expected: "MONITOR" },
        ],
      },
      {
        phase: "Descent & Approach",
        items: [
          { action: "ATIS / STAR", expected: "SET" },
          { action: "APPR Briefing", expected: "COMPLETE" },
          { action: "Approach Ref", expected: "SET (Vref)" },
          { action: "Autobrake", expected: "SET" },
          { action: "Altimeter", expected: "SET (below trans lvl)" },
          { action: "Landing Lights", expected: "ON (10,000 ft)" },
          { action: "Seatbelt Sign", expected: "ON" },
          { action: "Landing Gear", expected: "DOWN (3 GREEN)" },
          { action: "Flaps", expected: "EXTEND ON SCHEDULE" },
          { action: "Speedbrakes", expected: "ARMED" },
        ],
      },
      {
        phase: "Landing",
        items: [
          { action: "Threshold", expected: "ON SPEED (Vref + wind)" },
          { action: "50 ft", expected: "STABLE" },
          { action: "Touchdown", expected: "MAIN GEAR" },
          { action: "Reverse Thrust", expected: "ENGAGE (all 4)" },
          { action: "Speedbrakes", expected: "UP (auto)" },
          { action: "Autobrake", expected: "CHECK" },
          { action: "60 kt", expected: "REVERSE IDLE" },
        ],
      },
      {
        phase: "Parking & Shutdown",
        items: [
          { action: "Parking Brake", expected: "SET" },
          { action: "APU", expected: "START" },
          { action: "APU Bleed", expected: "ON" },
          { action: "Fuel Levers", expected: "CUT OFF (all)" },
          { action: "Seatbelt Sign", expected: "OFF" },
          { action: "Flaps", expected: "UP" },
          { action: "Fuel Pumps", expected: "OFF" },
          { action: "Hydraulic Pumps", expected: "OFF" },
          { action: "Window Heat", expected: "OFF" },
          { action: "APU Bleed", expected: "OFF" },
          { action: "APU", expected: "OFF" },
          { action: "Battery", expected: "OFF" },
        ],
      },
    ],
  },
  {
    id: "b787-10",
    name: "Boeing 787-10 Dreamliner",
    manufacturer: "Boeing",
    type: "airliner",
    imageEmoji: "🛫",
    checklists: [
      {
        phase: "Cockpit Preparation",
        items: [
          { action: "Battery Switch", expected: "ON" },
          { action: "External Power", expected: "ON (if available)" },
          { action: "APU", expected: "START" },
          { action: "APU Bleed", expected: "ON (when APU running)" },
          { action: "IRS", expected: "ON (align)" },
          { action: "Emergency Lights", expected: "ARM" },
          { action: "No Smoking / Seatbelt", expected: "ON" },
          { action: "Window Heat", expected: "AUTO" },
          { action: "Hydraulics", expected: "ON" },
        ],
      },
      {
        phase: "FMC Programming",
        items: [
          { action: "IDENT", expected: "VERIFY" },
          { action: "Position", expected: "ENTER / GPS" },
          { action: "Route", expected: "ENTER" },
          { action: "Performance", expected: "ENTER (CI, CRZ, ZFW)" },
          { action: "Takeoff Ref", expected: "SET (V-SPEEDS, FLAPS)" },
        ],
      },
      {
        phase: "Engine Start",
        items: [
          { action: "Parking Brake", expected: "SET" },
          { action: "Beacon", expected: "ON" },
          { action: "Engine Start R", expected: "ENGAGE" },
          { action: "Fuel Control R", expected: "RUN" },
          { action: "Engine R Stable", expected: "CHECK" },
          { action: "Engine Start L", expected: "REPEAT" },
          { action: "Generators", expected: "ON" },
          { action: "APU", expected: "OFF" },
        ],
      },
      {
        phase: "Before Takeoff",
        items: [
          { action: "Flight Controls", expected: "CHECKED" },
          { action: "Flaps", expected: "SET (T/O)" },
          { action: "Trim", expected: "SET" },
          { action: "Autobrake", expected: "RTO" },
          { action: "Speedbrakes", expected: "ARMED" },
          { action: "T/O Config", expected: "CHECK (no warnings)" },
          { action: "Transponder", expected: "TA/RA" },
          { action: "Lights", expected: "ON" },
        ],
      },
      {
        phase: "Takeoff",
        items: [
          { action: "Thrust", expected: "T/O" },
          { action: "80 kt", expected: "CALL" },
          { action: "V1", expected: "CALL" },
          { action: "VR", expected: "ROTATE" },
          { action: "Positive Climb", expected: "GEAR UP" },
          { action: "Flaps", expected: "RETRACT ON SCHEDULE" },
        ],
      },
      {
        phase: "Cruise",
        items: [
          { action: "AP / AT", expected: "ENGAGED" },
          { action: "Fuel", expected: "MONITOR" },
          { action: "Systems", expected: "MONITOR" },
        ],
      },
      {
        phase: "Approach & Landing",
        items: [
          { action: "Approach Briefing", expected: "COMPLETE" },
          { action: "Approach Ref", expected: "SET" },
          { action: "Autobrake", expected: "SET" },
          { action: "Landing Gear", expected: "DOWN" },
          { action: "Flaps", expected: "FULL" },
          { action: "Speedbrakes", expected: "ARMED" },
          { action: "Landing Lights", expected: "ON" },
        ],
      },
      {
        phase: "Shutdown",
        items: [
          { action: "Parking Brake", expected: "SET" },
          { action: "APU", expected: "START" },
          { action: "Fuel Controls", expected: "CUT OFF" },
          { action: "Seatbelt Sign", expected: "OFF" },
          { action: "APU", expected: "OFF (after ext power)" },
          { action: "Battery", expected: "OFF" },
        ],
      },
    ],
  },
  // ═══════════════════════════════════════════════════════════
  // Airbus A330-900neo
  // ═══════════════════════════════════════════════════════════
  {
    id: "a330-900neo",
    name: "Airbus A330-900neo",
    manufacturer: "Airbus",
    type: "airliner",
    imageEmoji: "✈️",
    checklists: [
      {
        phase: "Preflight / Cockpit Preparation",
        items: [
          { action: "Battery 1 + 2", expected: "ON" },
          { action: "External Power", expected: "CONNECT / ON" },
          { action: "APU Master", expected: "ON" },
          { action: "APU Start", expected: "ON" },
          { action: "APU Bleed", expected: "ON (after start)" },
          { action: "ADIRS 1+2+3", expected: "NAV" },
          { action: "ECAM Memo / Status", expected: "CHECK" },
          { action: "Flight Management System", expected: "INITIALIZE" },
          { action: "Fuel Quantity", expected: "CHECK & CONFIRM" },
        ],
      },
      {
        phase: "Before Engine Start",
        items: [
          { action: "Beacon", expected: "ON" },
          { action: "Parking Brake", expected: "SET" },
          { action: "Thrust Levers", expected: "IDLE" },
          { action: "Windows / Doors", expected: "CLOSED" },
          { action: "Fuel Pumps", expected: "ON" },
          { action: "Signs", expected: "ON" },
          { action: "ATC Clearance", expected: "OBTAINED" },
        ],
      },
      {
        phase: "Engine Start",
        items: [
          { action: "Engine Mode Selector", expected: "IGN/START" },
          { action: "Engine 1 Master", expected: "ON" },
          { action: "N2 Rising", expected: "CONFIRM" },
          { action: "Engine 1 Parameters", expected: "STABILIZE (check EGT)" },
          { action: "Engine 2 Master", expected: "ON" },
          { action: "Engine 2 Parameters", expected: "STABILIZE" },
          { action: "Engine Mode Selector", expected: "NORM" },
          { action: "APU Bleed", expected: "OFF" },
          { action: "APU Master", expected: "OFF" },
          { action: "External Power", expected: "DISCONNECT" },
        ],
      },
      {
        phase: "After Engine Start",
        items: [
          { action: "Generators", expected: "CHECK ON" },
          { action: "Anti-ice", expected: "AS REQUIRED" },
          { action: "Ground Spoilers", expected: "ARMED" },
          { action: "Flaps", expected: "SET T/O CONFIG" },
          { action: "Pitch Trim", expected: "SET" },
          { action: "Flight Controls", expected: "CHECK" },
          { action: "Rudder Trim", expected: "ZERO" },
        ],
      },
      {
        phase: "Before Takeoff",
        items: [
          { action: "T/O Config", expected: "TEST (no warnings)" },
          { action: "Autobrake", expected: "MAX" },
          { action: "Speedbrakes", expected: "RETRACTED" },
          { action: "TCAS", expected: "TA/RA" },
          { action: "Packs", expected: "AS REQUIRED" },
          { action: "Takeoff Data", expected: "CONFIRMED (V1/VR/V2)" },
          { action: "Exterior Lights", expected: "ON" },
          { action: "Weather Radar", expected: "ON" },
        ],
      },
      {
        phase: "Takeoff",
        items: [
          { action: "Thrust Levers", expected: "FLEX/TOGA" },
          { action: "100 kt", expected: "CALL" },
          { action: "V1", expected: "CALL" },
          { action: "VR", expected: "ROTATE" },
          { action: "Positive Climb", expected: "GEAR UP" },
          { action: "Flaps", expected: "RETRACT ON SCHEDULE" },
        ],
      },
      {
        phase: "Climb",
        items: [
          { action: "Thrust", expected: "CLB" },
          { action: "Autopilot 1", expected: "ENGAGE" },
          { action: "Autothrust", expected: "ACTIVE" },
          { action: "Altimeter", expected: "STD (above transition altitude)" },
          { action: "Lights", expected: "AS REQUIRED" },
        ],
      },
      {
        phase: "Cruise",
        items: [
          { action: "Systems", expected: "MONITOR ECAM" },
          { action: "Fuel", expected: "MONITOR & BALANCE" },
          { action: "Cabin Pressure", expected: "CHECK" },
          { action: "Progress Page", expected: "MONITOR" },
        ],
      },
      {
        phase: "Descent / Approach",
        items: [
          { action: "ATIS / Weather", expected: "OBTAIN" },
          { action: "Approach Briefing", expected: "COMPLETE" },
          { action: "MCDU Approach", expected: "SELECT & ACTIVATE" },
          { action: "Autobrake", expected: "SET (MED or as required)" },
          { action: "Seatbelt Signs", expected: "ON" },
          { action: "Altimeter", expected: "SET QNH" },
        ],
      },
      {
        phase: "Landing",
        items: [
          { action: "Landing Gear", expected: "DOWN (3 green)" },
          { action: "Flaps", expected: "FULL" },
          { action: "Speedbrakes", expected: "ARMED" },
          { action: "Go-Around Altitude", expected: "SET" },
          { action: "Landing Lights", expected: "ON" },
          { action: "ECAM Memo", expected: "LDG — NO BLUE" },
        ],
      },
      {
        phase: "After Landing",
        items: [
          { action: "Spoilers", expected: "DISARMED" },
          { action: "Flaps", expected: "RETRACT" },
          { action: "APU", expected: "START" },
          { action: "Exterior Lights", expected: "AS REQUIRED" },
          { action: "Radar", expected: "OFF" },
        ],
      },
      {
        phase: "Shutdown",
        items: [
          { action: "Parking Brake", expected: "SET" },
          { action: "APU Bleed", expected: "ON" },
          { action: "Engine 1 + 2 Masters", expected: "OFF" },
          { action: "Fuel Pumps", expected: "OFF" },
          { action: "Seat Belt Signs", expected: "OFF" },
          { action: "External Power", expected: "CONNECT (if available)" },
          { action: "APU", expected: "OFF (when ext power available)" },
          { action: "Batteries", expected: "OFF" },
        ],
      },
    ],
  },
  // ═══════════════════════════════════════════════════════════
  // Boeing C-17 Globemaster III
  // ═══════════════════════════════════════════════════════════
  {
    id: "c-17",
    name: "Boeing C-17 Globemaster III",
    manufacturer: "Boeing",
    type: "military",
    imageEmoji: "🛦",
    checklists: [
      {
        phase: "Interior Inspection",
        items: [
          { action: "Battery Switch", expected: "ON" },
          { action: "APU", expected: "START" },
          { action: "Flight Instruments", expected: "CHECK" },
          { action: "Warning Systems", expected: "TEST" },
          { action: "Oxygen", expected: "CHECK SUPPLY & CONNECTIONS" },
          { action: "Cargo Compartment", expected: "CONFIGURED" },
          { action: "Hydraulic Panel", expected: "CHECK (4 systems)" },
        ],
      },
      {
        phase: "Before Engine Start",
        items: [
          { action: "Parking Brake", expected: "SET" },
          { action: "Throttles", expected: "OFF" },
          { action: "Beacon", expected: "ON" },
          { action: "Fuel Quantity", expected: "VERIFY" },
          { action: "Fuel Panel", expected: "SET" },
          { action: "Crew Briefing", expected: "COMPLETE" },
        ],
      },
      {
        phase: "Engine Start (1-2-3-4)",
        items: [
          { action: "Engine Start Switch", expected: "GRD (each engine)" },
          { action: "EGT", expected: "MONITOR (each engine)" },
          { action: "Idle RPM", expected: "STABILIZE (each engine)" },
          { action: "Generator", expected: "ON (each engine)" },
          { action: "Hydraulic Pumps", expected: "VERIFY PRESSURE" },
          { action: "APU", expected: "OFF (after all engines running)" },
        ],
      },
      {
        phase: "Before Taxi",
        items: [
          { action: "Flight Controls", expected: "CHECK (all axes)" },
          { action: "Flaps", expected: "SET TAKEOFF" },
          { action: "Trim", expected: "SET" },
          { action: "Anti-ice", expected: "AS REQUIRED" },
          { action: "Transponder", expected: "SET" },
          { action: "Nosewheel Steering", expected: "CHECK" },
        ],
      },
      {
        phase: "Before Takeoff",
        items: [
          { action: "Takeoff Data", expected: "CONFIRMED" },
          { action: "Autobrake", expected: "RTO" },
          { action: "Speedbrakes", expected: "ARMED" },
          { action: "Warning Systems", expected: "CHECK CLEAR" },
          { action: "Exterior Lights", expected: "ON" },
          { action: "T/O Config", expected: "VERIFY" },
        ],
      },
      {
        phase: "Takeoff",
        items: [
          { action: "Throttles", expected: "T/O THRUST" },
          { action: "Engine Instruments", expected: "CHECK" },
          { action: "80 kt", expected: "CALL" },
          { action: "V1 / VR", expected: "ROTATE" },
          { action: "Positive Climb", expected: "GEAR UP" },
          { action: "Flaps", expected: "RETRACT ON SCHEDULE" },
        ],
      },
      {
        phase: "Climb / Cruise",
        items: [
          { action: "Climb Power", expected: "SET" },
          { action: "Autopilot", expected: "ENGAGE" },
          { action: "Pressurization", expected: "CHECK" },
          { action: "Fuel", expected: "MONITOR & BALANCE" },
          { action: "Systems", expected: "MONITOR" },
        ],
      },
      {
        phase: "Approach & Landing",
        items: [
          { action: "Approach Briefing", expected: "COMPLETE" },
          { action: "Altimeter", expected: "SET" },
          { action: "Landing Gear", expected: "DOWN (all green)" },
          { action: "Flaps", expected: "FULL" },
          { action: "Speedbrakes", expected: "ARMED" },
          { action: "Landing/Taxi Lights", expected: "ON" },
          { action: "Reversers", expected: "ARMED" },
        ],
      },
      {
        phase: "Shutdown",
        items: [
          { action: "Parking Brake", expected: "SET" },
          { action: "APU", expected: "START" },
          { action: "Throttles", expected: "OFF (all 4)" },
          { action: "Generators", expected: "OFF" },
          { action: "Fuel Pumps", expected: "OFF" },
          { action: "Battery", expected: "OFF" },
        ],
      },
    ],
  },
  // ═══════════════════════════════════════════════════════════
  // Bell 429 GlobalRanger
  // ═══════════════════════════════════════════════════════════
  {
    id: "bell-429",
    name: "Bell 429 GlobalRanger",
    manufacturer: "Bell",
    type: "helicopter",
    imageEmoji: "🚁",
    checklists: [
      {
        phase: "Preflight",
        items: [
          { action: "Battery 1 + 2", expected: "ON" },
          { action: "Fuel Quantity", expected: "CHECK" },
          { action: "Caution/Advisory Panel", expected: "TEST" },
          { action: "VEMD", expected: "CHECK" },
          { action: "Flight Controls", expected: "CHECK FREEDOM" },
          { action: "External Inspection", expected: "COMPLETE" },
          { action: "Rotor / Tail Rotor", expected: "INSPECT" },
        ],
      },
      {
        phase: "Engine Start (Dual Engine)",
        items: [
          { action: "Area", expected: "CLEAR" },
          { action: "Beacon", expected: "ON" },
          { action: "Throttle 1", expected: "IDLE" },
          { action: "Engine 1 Start", expected: "PRESS" },
          { action: "Ng / TOT", expected: "MONITOR" },
          { action: "Engine 1 Idle", expected: "STABLE" },
          { action: "Throttle 2", expected: "IDLE" },
          { action: "Engine 2 Start", expected: "PRESS" },
          { action: "Engine 2 Idle", expected: "STABLE" },
          { action: "Generators", expected: "ON (both)" },
          { action: "Avionics", expected: "ON" },
        ],
      },
      {
        phase: "Before Takeoff",
        items: [
          { action: "Throttles", expected: "FLY" },
          { action: "Nr (Rotor RPM)", expected: "100% (both engines)" },
          { action: "Caution Panel", expected: "CLEAR" },
          { action: "Flight Controls", expected: "CHECK" },
          { action: "Instruments", expected: "SET" },
          { action: "Doors", expected: "CLOSED & LOCKED" },
          { action: "AFCS", expected: "AS REQUIRED" },
        ],
      },
      {
        phase: "Takeoff",
        items: [
          { action: "Collective", expected: "INCREASE SMOOTHLY" },
          { action: "Pedals", expected: "MAINTAIN HEADING" },
          { action: "Hover Check", expected: "POWER MARGIN OK" },
          { action: "Torque", expected: "CHECK LIMITS" },
          { action: "Transition", expected: "ACCELERATE FORWARD" },
        ],
      },
      {
        phase: "Cruise",
        items: [
          { action: "Airspeed", expected: "SET DESIRED" },
          { action: "Power", expected: "SET" },
          { action: "Fuel", expected: "MONITOR" },
          { action: "Engine Instruments", expected: "MONITOR (both)" },
          { action: "AFCS", expected: "ENGAGED (as required)" },
        ],
      },
      {
        phase: "Approach & Landing",
        items: [
          { action: "Speed", expected: "REDUCE" },
          { action: "Landing Area", expected: "ASSESS" },
          { action: "Approach Angle", expected: "ESTABLISH" },
          { action: "Hover", expected: "STABILIZE" },
          { action: "Collective", expected: "LOWER SLOWLY" },
          { action: "Skids / Wheels", expected: "GROUND CONTACT" },
        ],
      },
      {
        phase: "Shutdown",
        items: [
          { action: "Throttles", expected: "IDLE (both)" },
          { action: "Cool Down", expected: "2 MINUTES" },
          { action: "Engine 1", expected: "OFF" },
          { action: "Engine 2", expected: "OFF" },
          { action: "Rotor Brake", expected: "APPLY (when Nr < 130)" },
          { action: "Avionics", expected: "OFF" },
          { action: "Battery", expected: "OFF" },
        ],
      },
    ],
  },
  // ═══════════════════════════════════════════════════════════
  // Dassault Rafale M
  // ═══════════════════════════════════════════════════════════
  {
    id: "rafale-m",
    name: "Dassault Rafale M",
    manufacturer: "Dassault",
    type: "military",
    imageEmoji: "🛩️",
    checklists: [
      {
        phase: "Cockpit Preparation",
        items: [
          { action: "Battery", expected: "ON" },
          { action: "External Power", expected: "CONNECTED" },
          { action: "Warning Panel", expected: "TEST" },
          { action: "INS / GPS", expected: "ALIGN" },
          { action: "Oxygen", expected: "ON / CHECK" },
          { action: "Ejection Seat", expected: "ARMED" },
          { action: "SPECTRA (EW Suite)", expected: "STANDBY" },
          { action: "HUD / MFDs", expected: "CHECK" },
        ],
      },
      {
        phase: "Engine Start",
        items: [
          { action: "Throttle (Left)", expected: "OFF then IDLE" },
          { action: "Left Engine Start", expected: "PRESS" },
          { action: "EGT / RPM", expected: "MONITOR" },
          { action: "Left Engine", expected: "STABLE AT IDLE" },
          { action: "Throttle (Right)", expected: "OFF then IDLE" },
          { action: "Right Engine Start", expected: "PRESS" },
          { action: "Right Engine", expected: "STABLE AT IDLE" },
          { action: "Generators", expected: "ON (both)" },
          { action: "Hydraulics", expected: "CHECK PRESSURE" },
        ],
      },
      {
        phase: "Before Taxi",
        items: [
          { action: "Flight Controls", expected: "CHECK (FBW full deflection)" },
          { action: "Trim", expected: "SET" },
          { action: "Flaps / Slats", expected: "AUTO" },
          { action: "Nosewheel Steering", expected: "CHECK" },
          { action: "Radar", expected: "STANDBY" },
          { action: "TACAN / IFF", expected: "SET" },
          { action: "Canopy", expected: "CLOSED & LOCKED" },
        ],
      },
      {
        phase: "Before Takeoff",
        items: [
          { action: "Takeoff Trim", expected: "SET" },
          { action: "Anti-ice", expected: "AS REQUIRED" },
          { action: "Afterburner", expected: "CHECK AVAILABLE" },
          { action: "Lights", expected: "AS REQUIRED" },
          { action: "Warning Panel", expected: "CLEAR" },
        ],
      },
      {
        phase: "Takeoff",
        items: [
          { action: "Throttles", expected: "MIL or AB" },
          { action: "Engine Instruments", expected: "CHECK" },
          { action: "Rotate", expected: "AT COMPUTED SPEED" },
          { action: "Gear", expected: "UP" },
          { action: "Flaps/Slats", expected: "AUTO/RETRACT" },
        ],
      },
      {
        phase: "Cruise",
        items: [
          { action: "Throttles", expected: "SET CRUISE" },
          { action: "Autopilot", expected: "AS REQUIRED" },
          { action: "Fuel", expected: "MONITOR & BALANCE" },
          { action: "Systems", expected: "MONITOR" },
          { action: "Navigation", expected: "VERIFY" },
        ],
      },
      {
        phase: "Approach & Landing",
        items: [
          { action: "Speed", expected: "REDUCE TO APPROACH" },
          { action: "Landing Gear", expected: "DOWN (3 green)" },
          { action: "Flaps/Slats", expected: "AUTO" },
          { action: "Hook", expected: "AS REQUIRED (carrier)" },
          { action: "Approach Speed", expected: "PER WEIGHT" },
          { action: "Landing Lights", expected: "ON" },
        ],
      },
      {
        phase: "Shutdown",
        items: [
          { action: "Parking Brake", expected: "SET" },
          { action: "Throttles", expected: "OFF (both)" },
          { action: "Systems", expected: "OFF" },
          { action: "Ejection Seat", expected: "SAFE" },
          { action: "Canopy", expected: "OPEN" },
          { action: "Battery", expected: "OFF" },
        ],
      },
    ],
  },
  // ═══════════════════════════════════════════════════════════
  // Airbus A321LR neo
  // ═══════════════════════════════════════════════════════════
  {
    id: "a321lr-neo",
    name: "Airbus A321LR neo",
    manufacturer: "Airbus",
    type: "airliner",
    imageEmoji: "✈️",
    checklists: [
      {
        phase: "Cockpit Preparation",
        items: [
          { action: "Battery 1 + 2", expected: "ON" },
          { action: "External Power", expected: "ON (if available)" },
          { action: "APU Master + Start", expected: "ON" },
          { action: "APU Bleed", expected: "ON" },
          { action: "ADIRS 1+2+3", expected: "NAV" },
          { action: "FMGC", expected: "INITIALIZE" },
          { action: "ECAM", expected: "CHECK" },
        ],
      },
      {
        phase: "Before Engine Start",
        items: [
          { action: "Beacon", expected: "ON" },
          { action: "Fuel Pumps", expected: "ON" },
          { action: "Doors", expected: "CLOSED" },
          { action: "Thrust Levers", expected: "IDLE" },
          { action: "Parking Brake", expected: "SET" },
        ],
      },
      {
        phase: "Engine Start",
        items: [
          { action: "Engine Mode Selector", expected: "IGN/START" },
          { action: "Engine 1 Master", expected: "ON" },
          { action: "Engine 1 N2 / EGT", expected: "MONITOR" },
          { action: "Engine 2 Master", expected: "ON" },
          { action: "Engine 2 N2 / EGT", expected: "MONITOR" },
          { action: "Engine Mode", expected: "NORM" },
          { action: "APU Bleed", expected: "OFF" },
        ],
      },
      {
        phase: "Before Takeoff",
        items: [
          { action: "Flight Controls", expected: "CHECK" },
          { action: "Flaps", expected: "SET (1+F or 2)" },
          { action: "Trim", expected: "SET" },
          { action: "Autobrake", expected: "MAX" },
          { action: "Speedbrakes", expected: "RETRACTED" },
          { action: "T/O Config", expected: "TEST" },
          { action: "TCAS", expected: "TA/RA" },
          { action: "Takeoff Speeds", expected: "SET & CROSS-CHECK" },
        ],
      },
      {
        phase: "Takeoff",
        items: [
          { action: "Thrust", expected: "FLEX/TOGA" },
          { action: "100 kt", expected: "CALL" },
          { action: "V1", expected: "CALL" },
          { action: "VR", expected: "ROTATE" },
          { action: "Positive Climb", expected: "GEAR UP" },
          { action: "Flaps", expected: "RETRACT ON SCHEDULE" },
        ],
      },
      {
        phase: "Cruise",
        items: [
          { action: "AP / Autothrust", expected: "ENGAGED" },
          { action: "Fuel", expected: "MONITOR" },
          { action: "ECAM", expected: "MONITOR" },
          { action: "Cabin Pressure", expected: "CHECK" },
        ],
      },
      {
        phase: "Approach & Landing",
        items: [
          { action: "Approach Briefing", expected: "COMPLETE" },
          { action: "MCDU Approach", expected: "SELECTED" },
          { action: "Autobrake", expected: "SET" },
          { action: "Landing Gear", expected: "DOWN (3 green)" },
          { action: "Flaps", expected: "FULL" },
          { action: "Speedbrakes", expected: "ARMED" },
          { action: "Landing Lights", expected: "ON" },
        ],
      },
      {
        phase: "Shutdown",
        items: [
          { action: "Parking Brake", expected: "SET" },
          { action: "APU", expected: "START" },
          { action: "Engines", expected: "OFF (both masters)" },
          { action: "Fuel Pumps", expected: "OFF" },
          { action: "Signs", expected: "OFF" },
          { action: "APU + Battery", expected: "OFF (after ext power)" },
        ],
      },
    ],
  },
  // ═══════════════════════════════════════════════════════════
  // Boeing KC-135R Stratotanker
  // ═══════════════════════════════════════════════════════════
  {
    id: "kc-135r",
    name: "Boeing KC-135R Stratotanker",
    manufacturer: "Boeing",
    type: "military",
    imageEmoji: "✈️",
    checklists: [
      {
        phase: "Preflight / Interior",
        items: [
          { action: "Battery", expected: "ON" },
          { action: "Emergency Equipment", expected: "CHECK" },
          { action: "Oxygen", expected: "CHECK ALL STATIONS" },
          { action: "Fuel Panel", expected: "CHECK QUANTITY & CONFIG" },
          { action: "Boom Operator Station", expected: "CHECK" },
          { action: "External Inspection", expected: "COMPLETE" },
        ],
      },
      {
        phase: "Engine Start",
        items: [
          { action: "Parking Brake", expected: "SET" },
          { action: "Beacon", expected: "ON" },
          { action: "Air Source", expected: "SELECTED (APU or ground)" },
          { action: "Start Engine 3", expected: "START (crosswind engine)" },
          { action: "Start Engine 4", expected: "START" },
          { action: "Start Engine 2", expected: "START" },
          { action: "Start Engine 1", expected: "START" },
          { action: "EGT / RPM", expected: "MONITOR ALL" },
          { action: "Generators", expected: "ON (all)" },
        ],
      },
      {
        phase: "Before Takeoff",
        items: [
          { action: "Flight Controls", expected: "CHECK" },
          { action: "Trim", expected: "SET" },
          { action: "Flaps", expected: "TAKEOFF" },
          { action: "Autobrake", expected: "RTO" },
          { action: "Spoilers", expected: "ARMED" },
          { action: "Takeoff Data", expected: "CONFIRMED" },
          { action: "Transponder", expected: "SET" },
        ],
      },
      {
        phase: "Takeoff",
        items: [
          { action: "Throttles", expected: "T/O THRUST" },
          { action: "Engine Instruments", expected: "CHECK" },
          { action: "V1 / VR", expected: "ROTATE" },
          { action: "Positive Climb", expected: "GEAR UP" },
          { action: "Flaps", expected: "RETRACT" },
        ],
      },
      {
        phase: "Cruise / Refueling",
        items: [
          { action: "Autopilot", expected: "ENGAGE" },
          { action: "Power", expected: "SET CRUISE" },
          { action: "Fuel", expected: "MONITOR & BALANCE" },
          { action: "Boom", expected: "EXTEND (when refueling)" },
          { action: "Refueling Lights", expected: "ON (when refueling)" },
          { action: "Systems", expected: "MONITOR" },
        ],
      },
      {
        phase: "Approach & Landing",
        items: [
          { action: "Approach Briefing", expected: "COMPLETE" },
          { action: "Altimeter", expected: "SET" },
          { action: "Landing Gear", expected: "DOWN" },
          { action: "Flaps", expected: "FULL" },
          { action: "Spoilers", expected: "ARMED" },
          { action: "Reversers", expected: "ARMED" },
          { action: "Landing Lights", expected: "ON" },
        ],
      },
      {
        phase: "Shutdown",
        items: [
          { action: "Parking Brake", expected: "SET" },
          { action: "Throttles", expected: "OFF (all 4)" },
          { action: "Fuel Pumps", expected: "OFF" },
          { action: "APU", expected: "AS REQUIRED" },
          { action: "Battery", expected: "OFF" },
        ],
      },
    ],
  },
  // ═══════════════════════════════════════════════════════════
  // Boeing 737-8 MAX
  // ═══════════════════════════════════════════════════════════
  {
    id: "b737-8max",
    name: "Boeing 737-8 MAX",
    manufacturer: "Boeing",
    type: "airliner",
    imageEmoji: "✈️",
    checklists: [
      {
        phase: "Preflight",
        items: [
          { action: "Battery", expected: "ON" },
          { action: "External Power", expected: "CONNECT" },
          { action: "IRS", expected: "NAV" },
          { action: "FMC", expected: "INITIALIZE" },
          { action: "Fuel Quantity", expected: "CHECK" },
          { action: "Emergency Equipment", expected: "CHECK" },
          { action: "Oxygen", expected: "CHECK & TEST" },
        ],
      },
      {
        phase: "Before Engine Start",
        items: [
          { action: "APU", expected: "START" },
          { action: "APU Bleed", expected: "ON (when APU running)" },
          { action: "Parking Brake", expected: "SET" },
          { action: "Beacon", expected: "ON" },
          { action: "Hydraulic Pumps", expected: "ON" },
          { action: "Fuel Pumps", expected: "ON" },
          { action: "Doors", expected: "CLOSED" },
        ],
      },
      {
        phase: "Engine Start",
        items: [
          { action: "Engine 1 Start Switch", expected: "GRD" },
          { action: "Engine 1 N2 ≥ 20%", expected: "FUEL LEVER — RUN" },
          { action: "Engine 1 EGT / N1", expected: "MONITOR" },
          { action: "Engine 2 Start Switch", expected: "GRD" },
          { action: "Engine 2 N2 ≥ 20%", expected: "FUEL LEVER — RUN" },
          { action: "Engine 2 EGT / N1", expected: "MONITOR" },
          { action: "Generators", expected: "ON" },
          { action: "APU Bleed", expected: "OFF" },
        ],
      },
      {
        phase: "Before Takeoff",
        items: [
          { action: "Flight Controls", expected: "CHECK" },
          { action: "Flaps", expected: "SET (1-25)" },
          { action: "Trim", expected: "SET (green band)" },
          { action: "Autobrake", expected: "RTO" },
          { action: "Speedbrake", expected: "ARMED" },
          { action: "T/O Speeds", expected: "V1/VR/V2 SET" },
          { action: "Transponder", expected: "TA/RA" },
          { action: "Exterior Lights", expected: "ON" },
        ],
      },
      {
        phase: "Takeoff",
        items: [
          { action: "Thrust", expected: "TO/GA" },
          { action: "80 kt", expected: "CALL" },
          { action: "V1", expected: "CALL" },
          { action: "VR", expected: "ROTATE" },
          { action: "Positive Climb", expected: "GEAR UP" },
          { action: "Flaps", expected: "RETRACT ON SCHEDULE" },
        ],
      },
      {
        phase: "Climb / Cruise",
        items: [
          { action: "Autopilot", expected: "ENGAGE" },
          { action: "Autothrottle", expected: "ARM" },
          { action: "Pressurization", expected: "CHECK" },
          { action: "Fuel", expected: "MONITOR" },
          { action: "Altimeter", expected: "STD (above transition)" },
        ],
      },
      {
        phase: "Approach & Landing",
        items: [
          { action: "Approach Briefing", expected: "COMPLETE" },
          { action: "Autobrake", expected: "SET" },
          { action: "Landing Gear", expected: "DOWN (3 green)" },
          { action: "Flaps", expected: "FULL (40 or 30)" },
          { action: "Speedbrake", expected: "ARMED" },
          { action: "Landing Lights", expected: "ON" },
          { action: "Go-Around Altitude", expected: "SET" },
        ],
      },
      {
        phase: "Shutdown",
        items: [
          { action: "Parking Brake", expected: "SET" },
          { action: "APU", expected: "START" },
          { action: "Fuel Levers", expected: "OFF (both)" },
          { action: "Seatbelt Sign", expected: "OFF" },
          { action: "Fuel Pumps", expected: "OFF" },
          { action: "IRS", expected: "OFF" },
          { action: "Battery", expected: "OFF" },
        ],
      },
    ],
  },
  // ═══════════════════════════════════════════════════════════
  // Daher TBM 930 (Kodiak 100 variant placeholder — user said "tbm 930 k 1300")
  // Already exists as "tbm-930", skipping duplicate
  // ═══════════════════════════════════════════════════════════

  // ═══════════════════════════════════════════════════════════
  // Daher Kodiak 100 Series III
  // ═══════════════════════════════════════════════════════════
  {
    id: "kodiak-100",
    name: "Daher Kodiak 100 Series III",
    manufacturer: "Daher",
    type: "turboprop",
    imageEmoji: "🛫",
    checklists: [
      {
        phase: "Preflight",
        items: [
          { action: "Battery", expected: "ON" },
          { action: "Fuel Quantity", expected: "CHECK" },
          { action: "Flaps", expected: "CHECK" },
          { action: "Control Surfaces", expected: "FREE & CORRECT" },
          { action: "External Walk-Around", expected: "COMPLETE" },
          { action: "Propeller", expected: "INSPECT" },
          { action: "Fuel Caps", expected: "SECURE" },
        ],
      },
      {
        phase: "Engine Start",
        items: [
          { action: "Parking Brake", expected: "SET" },
          { action: "Condition Lever", expected: "FUEL CUTOFF" },
          { action: "Power Lever", expected: "IDLE" },
          { action: "Ignition", expected: "ON" },
          { action: "Starter", expected: "ENGAGE" },
          { action: "Ng 13%", expected: "CONDITION LEVER → LOW IDLE" },
          { action: "ITT", expected: "MONITOR" },
          { action: "Oil Pressure", expected: "CHECK GREEN" },
          { action: "Generator", expected: "ON" },
          { action: "Avionics", expected: "ON" },
        ],
      },
      {
        phase: "Before Takeoff",
        items: [
          { action: "Flight Controls", expected: "FREE & CORRECT" },
          { action: "Trim", expected: "SET TAKEOFF" },
          { action: "Flaps", expected: "TAKEOFF" },
          { action: "Condition Lever", expected: "MAX RPM" },
          { action: "Instruments", expected: "CHECK" },
          { action: "Transponder", expected: "ALT" },
          { action: "Lights", expected: "ON" },
        ],
      },
      {
        phase: "Takeoff",
        items: [
          { action: "Power Lever", expected: "TAKEOFF" },
          { action: "Engine Instruments", expected: "GREEN" },
          { action: "Rotate", expected: "65 KIAS" },
          { action: "Climb", expected: "85 KIAS (Vy)" },
          { action: "Flaps", expected: "RETRACT" },
        ],
      },
      {
        phase: "Cruise",
        items: [
          { action: "Power", expected: "SET CRUISE" },
          { action: "Condition Lever", expected: "ADJUST" },
          { action: "Fuel", expected: "MONITOR" },
          { action: "Trim", expected: "ADJUST" },
        ],
      },
      {
        phase: "Approach & Landing",
        items: [
          { action: "ATIS", expected: "OBTAIN" },
          { action: "Altimeter", expected: "SET" },
          { action: "Flaps", expected: "AS REQUIRED" },
          { action: "Approach Speed", expected: "80 KIAS" },
          { action: "Landing Light", expected: "ON" },
        ],
      },
      {
        phase: "Shutdown",
        items: [
          { action: "Parking Brake", expected: "SET" },
          { action: "Condition Lever", expected: "FUEL CUTOFF" },
          { action: "Avionics", expected: "OFF" },
          { action: "Generator", expected: "OFF" },
          { action: "Battery", expected: "OFF" },
        ],
      },
    ],
  },
  // ═══════════════════════════════════════════════════════════
  // Airbus A310-300
  // ═══════════════════════════════════════════════════════════
  {
    id: "a310-300",
    name: "Airbus A310-300",
    manufacturer: "Airbus",
    type: "airliner",
    imageEmoji: "✈️",
    checklists: [
      {
        phase: "Cockpit Preparation",
        items: [
          { action: "Battery", expected: "ON" },
          { action: "External Power", expected: "ON" },
          { action: "APU", expected: "START" },
          { action: "APU Bleed", expected: "ON (when APU running)" },
          { action: "IRS 1+2", expected: "NAV" },
          { action: "FMS", expected: "INITIALIZE" },
          { action: "Fuel Quantity", expected: "CHECK" },
          { action: "Hydraulic Panel", expected: "CHECK" },
          { action: "ECAM", expected: "CHECK" },
        ],
      },
      {
        phase: "Engine Start",
        items: [
          { action: "Beacon", expected: "ON" },
          { action: "Parking Brake", expected: "SET" },
          { action: "Engine 1 Start", expected: "ON" },
          { action: "EGT / N2", expected: "MONITOR" },
          { action: "Engine 2 Start", expected: "ON" },
          { action: "Both Engines", expected: "STABLE" },
          { action: "APU", expected: "OFF" },
        ],
      },
      {
        phase: "Before Takeoff",
        items: [
          { action: "Flight Controls", expected: "CHECK" },
          { action: "Flaps / Slats", expected: "SET" },
          { action: "Trim", expected: "SET" },
          { action: "Autobrake", expected: "RTO" },
          { action: "Spoilers", expected: "ARMED" },
          { action: "T/O Config", expected: "CHECK" },
          { action: "Transponder", expected: "TA/RA" },
          { action: "Lights", expected: "ON" },
        ],
      },
      {
        phase: "Takeoff",
        items: [
          { action: "Thrust", expected: "T/O" },
          { action: "V1 / VR", expected: "ROTATE" },
          { action: "Positive Climb", expected: "GEAR UP" },
          { action: "Flaps", expected: "RETRACT ON SCHEDULE" },
        ],
      },
      {
        phase: "Cruise",
        items: [
          { action: "AP / AT", expected: "ENGAGED" },
          { action: "Fuel", expected: "MONITOR & BALANCE" },
          { action: "Systems", expected: "MONITOR" },
        ],
      },
      {
        phase: "Approach & Landing",
        items: [
          { action: "Approach Briefing", expected: "COMPLETE" },
          { action: "Autobrake", expected: "SET" },
          { action: "Landing Gear", expected: "DOWN" },
          { action: "Flaps", expected: "FULL" },
          { action: "Spoilers", expected: "ARMED" },
          { action: "Landing Lights", expected: "ON" },
        ],
      },
      {
        phase: "Shutdown",
        items: [
          { action: "Parking Brake", expected: "SET" },
          { action: "APU", expected: "START" },
          { action: "Engines", expected: "OFF" },
          { action: "Battery", expected: "OFF" },
        ],
      },
    ],
  },
  // ═══════════════════════════════════════════════════════════
  // Cessna T-37B Tweet
  // ═══════════════════════════════════════════════════════════
  {
    id: "t-37b",
    name: "Cessna T-37B Tweet",
    manufacturer: "Cessna",
    type: "military",
    imageEmoji: "🛩️",
    checklists: [
      {
        phase: "Preflight",
        items: [
          { action: "Battery", expected: "ON" },
          { action: "Inverter", expected: "ON" },
          { action: "Warning Lights", expected: "TEST" },
          { action: "Fuel Quantity", expected: "CHECK BOTH" },
          { action: "Oxygen", expected: "CHECK" },
          { action: "Ejection Seat", expected: "CHECK / ARM" },
          { action: "Canopy", expected: "INSPECT" },
          { action: "Walk-Around", expected: "COMPLETE" },
        ],
      },
      {
        phase: "Engine Start",
        items: [
          { action: "Throttles", expected: "OFF" },
          { action: "Left Engine Start", expected: "PRESS" },
          { action: "Left Throttle", expected: "ADVANCE TO IDLE" },
          { action: "Left EGT / RPM", expected: "MONITOR" },
          { action: "Right Engine Start", expected: "PRESS" },
          { action: "Right Throttle", expected: "ADVANCE TO IDLE" },
          { action: "Right EGT / RPM", expected: "MONITOR" },
          { action: "Generators", expected: "ON (both)" },
        ],
      },
      {
        phase: "Before Takeoff",
        items: [
          { action: "Flight Controls", expected: "FREE & CORRECT" },
          { action: "Trim", expected: "SET TAKEOFF" },
          { action: "Flaps", expected: "SET" },
          { action: "Canopy", expected: "CLOSED & LOCKED" },
          { action: "Speed Brake", expected: "IN" },
          { action: "Engine Instruments", expected: "CHECK" },
          { action: "Lights", expected: "AS REQUIRED" },
        ],
      },
      {
        phase: "Takeoff",
        items: [
          { action: "Throttles", expected: "FULL (both)" },
          { action: "Engine Instruments", expected: "CHECK" },
          { action: "Rotate", expected: "85 KIAS" },
          { action: "Gear", expected: "UP" },
          { action: "Flaps", expected: "UP" },
        ],
      },
      {
        phase: "Cruise",
        items: [
          { action: "Throttles", expected: "SET CRUISE" },
          { action: "Trim", expected: "ADJUST" },
          { action: "Fuel", expected: "MONITOR BOTH" },
          { action: "Engine Instruments", expected: "MONITOR" },
        ],
      },
      {
        phase: "Approach & Landing",
        items: [
          { action: "Speed", expected: "REDUCE" },
          { action: "Gear", expected: "DOWN (2 green)" },
          { action: "Flaps", expected: "FULL" },
          { action: "Speed Brake", expected: "AS REQUIRED" },
          { action: "Final Speed", expected: "110 KIAS" },
        ],
      },
      {
        phase: "Shutdown",
        items: [
          { action: "Throttles", expected: "OFF (both)" },
          { action: "Generators", expected: "OFF" },
          { action: "Inverter", expected: "OFF" },
          { action: "Battery", expected: "OFF" },
          { action: "Ejection Seat", expected: "SAFE" },
        ],
      },
    ],
  },
  // ═══════════════════════════════════════════════════════════
  // Aero Vodochody L-39 Albatros
  // ═══════════════════════════════════════════════════════════
  {
    id: "l-39",
    name: "Aero Vodochody L-39 Albatros",
    manufacturer: "Aero Vodochody",
    type: "military",
    imageEmoji: "🛩️",
    checklists: [
      {
        phase: "Preflight",
        items: [
          { action: "Battery", expected: "ON" },
          { action: "Warning Panel", expected: "TEST" },
          { action: "Fuel Quantity", expected: "CHECK" },
          { action: "Oxygen", expected: "CHECK" },
          { action: "Ejection Seat", expected: "CHECK" },
          { action: "Hydraulics", expected: "CHECK" },
          { action: "Walk-Around", expected: "COMPLETE" },
        ],
      },
      {
        phase: "Engine Start",
        items: [
          { action: "Throttle", expected: "STOP" },
          { action: "Start Button", expected: "PRESS" },
          { action: "Throttle", expected: "IDLE (at 5% RPM)" },
          { action: "EGT / RPM", expected: "MONITOR" },
          { action: "Generator", expected: "ON" },
          { action: "Hydraulic Pressure", expected: "CHECK" },
          { action: "Avionics", expected: "ON" },
        ],
      },
      {
        phase: "Before Takeoff",
        items: [
          { action: "Flight Controls", expected: "FREE & CORRECT" },
          { action: "Trim", expected: "SET TAKEOFF" },
          { action: "Flaps", expected: "TAKEOFF (25°)" },
          { action: "Speed Brake", expected: "IN" },
          { action: "Canopy", expected: "CLOSED & LOCKED" },
          { action: "Ejection Seat", expected: "ARMED" },
          { action: "Engine Instruments", expected: "CHECK" },
        ],
      },
      {
        phase: "Takeoff",
        items: [
          { action: "Throttle", expected: "FULL" },
          { action: "Engine Instruments", expected: "CHECK" },
          { action: "Rotate", expected: "100 KIAS" },
          { action: "Gear", expected: "UP" },
          { action: "Flaps", expected: "UP (above 160 KIAS)" },
        ],
      },
      {
        phase: "Cruise",
        items: [
          { action: "Throttle", expected: "SET CRUISE" },
          { action: "Trim", expected: "ADJUST" },
          { action: "Fuel", expected: "MONITOR" },
          { action: "Systems", expected: "MONITOR" },
        ],
      },
      {
        phase: "Approach & Landing",
        items: [
          { action: "Speed", expected: "REDUCE" },
          { action: "Gear", expected: "DOWN (green)" },
          { action: "Flaps", expected: "FULL (44°)" },
          { action: "Speed Brake", expected: "AS REQUIRED" },
          { action: "Final Speed", expected: "105 KIAS" },
          { action: "Landing Light", expected: "ON" },
        ],
      },
      {
        phase: "Shutdown",
        items: [
          { action: "Throttle", expected: "STOP" },
          { action: "Generator", expected: "OFF" },
          { action: "Avionics", expected: "OFF" },
          { action: "Battery", expected: "OFF" },
          { action: "Ejection Seat", expected: "SAFE" },
        ],
      },
    ],
  },
  // ═══════════════════════════════════════════════════════════
  // Airbus A330-743L Beluga XL
  // ═══════════════════════════════════════════════════════════
  {
    id: "beluga-xl",
    name: "Airbus A330-743L Beluga XL",
    manufacturer: "Airbus",
    type: "cargo",
    imageEmoji: "🐋",
    checklists: [
      {
        phase: "Cockpit Preparation",
        items: [
          { action: "Battery 1+2", expected: "ON" },
          { action: "External Power", expected: "ON" },
          { action: "APU", expected: "START" },
          { action: "APU Bleed", expected: "ON (when APU running)" },
          { action: "ADIRS", expected: "NAV" },
          { action: "FMS", expected: "INITIALIZE" },
          { action: "Cargo Door", expected: "VERIFY CLOSED & LOCKED" },
          { action: "Cargo Load", expected: "VERIFY W&B" },
          { action: "ECAM", expected: "CHECK" },
        ],
      },
      {
        phase: "Engine Start",
        items: [
          { action: "Beacon", expected: "ON" },
          { action: "Engine Mode", expected: "IGN/START" },
          { action: "Engine 1 Master", expected: "ON" },
          { action: "Engine 1 Params", expected: "MONITOR" },
          { action: "Engine 2 Master", expected: "ON" },
          { action: "Engine 2 Params", expected: "MONITOR" },
          { action: "Engine Mode", expected: "NORM" },
          { action: "APU", expected: "OFF" },
        ],
      },
      {
        phase: "Before Takeoff",
        items: [
          { action: "Flight Controls", expected: "CHECK" },
          { action: "Flaps / Slats", expected: "SET T/O" },
          { action: "Trim", expected: "SET" },
          { action: "Autobrake", expected: "MAX" },
          { action: "Speedbrakes", expected: "RETRACTED" },
          { action: "T/O Config", expected: "TEST" },
          { action: "Exterior Lights", expected: "ON" },
        ],
      },
      {
        phase: "Takeoff",
        items: [
          { action: "Thrust", expected: "FLEX/TOGA" },
          { action: "V1 / VR", expected: "ROTATE" },
          { action: "Positive Climb", expected: "GEAR UP" },
          { action: "Flaps", expected: "RETRACT ON SCHEDULE" },
        ],
      },
      {
        phase: "Cruise",
        items: [
          { action: "AP / AT", expected: "ENGAGED" },
          { action: "Fuel", expected: "MONITOR" },
          { action: "Pressurization", expected: "CHECK" },
          { action: "Systems", expected: "MONITOR" },
        ],
      },
      {
        phase: "Approach & Landing",
        items: [
          { action: "Approach Briefing", expected: "COMPLETE" },
          { action: "Autobrake", expected: "SET" },
          { action: "Gear", expected: "DOWN (3 green)" },
          { action: "Flaps", expected: "FULL" },
          { action: "Speedbrakes", expected: "ARMED" },
          { action: "Landing Lights", expected: "ON" },
        ],
      },
      {
        phase: "Shutdown",
        items: [
          { action: "Parking Brake", expected: "SET" },
          { action: "APU", expected: "START" },
          { action: "Engines", expected: "OFF" },
          { action: "Battery", expected: "OFF" },
        ],
      },
    ],
  },
  // ═══════════════════════════════════════════════════════════
  // Airbus A400M Atlas
  // ═══════════════════════════════════════════════════════════
  {
    id: "a400m",
    name: "Airbus A400M Atlas",
    manufacturer: "Airbus",
    type: "military",
    imageEmoji: "✈️",
    checklists: [
      {
        phase: "Cockpit Preparation",
        items: [
          { action: "Battery", expected: "ON" },
          { action: "APU", expected: "START" },
          { action: "Warning Systems", expected: "TEST" },
          { action: "FMS", expected: "INITIALIZE" },
          { action: "Fuel Quantity", expected: "CHECK" },
          { action: "Cargo / Load", expected: "VERIFY SECURE" },
          { action: "Oxygen", expected: "CHECK ALL CREW" },
        ],
      },
      {
        phase: "Engine Start (4 Turboprops)",
        items: [
          { action: "Start Engine 3", expected: "START" },
          { action: "Engine 3 ITT / Np", expected: "MONITOR" },
          { action: "Start Engine 4", expected: "START" },
          { action: "Start Engine 2", expected: "START" },
          { action: "Start Engine 1", expected: "START" },
          { action: "All Engines", expected: "STABLE" },
          { action: "Generators", expected: "ON (all)" },
          { action: "APU", expected: "OFF" },
        ],
      },
      {
        phase: "Before Takeoff",
        items: [
          { action: "Flight Controls", expected: "CHECK (FBW)" },
          { action: "Trim", expected: "SET" },
          { action: "Flaps", expected: "TAKEOFF" },
          { action: "Props", expected: "FULL RPM" },
          { action: "Autobrake", expected: "RTO" },
          { action: "T/O Config", expected: "CHECK" },
          { action: "Lights", expected: "ON" },
        ],
      },
      {
        phase: "Takeoff",
        items: [
          { action: "Power Levers", expected: "TAKEOFF" },
          { action: "Engine Instruments", expected: "CHECK" },
          { action: "V1 / VR", expected: "ROTATE" },
          { action: "Positive Climb", expected: "GEAR UP" },
          { action: "Flaps", expected: "RETRACT" },
        ],
      },
      {
        phase: "Cruise",
        items: [
          { action: "Autopilot", expected: "ENGAGE" },
          { action: "Power", expected: "SET CRUISE" },
          { action: "Fuel", expected: "MONITOR & BALANCE" },
          { action: "Pressurization", expected: "CHECK" },
          { action: "Systems", expected: "MONITOR" },
        ],
      },
      {
        phase: "Approach & Landing",
        items: [
          { action: "Approach Briefing", expected: "COMPLETE" },
          { action: "Gear", expected: "DOWN" },
          { action: "Flaps", expected: "FULL" },
          { action: "Props", expected: "FULL RPM" },
          { action: "Landing Lights", expected: "ON" },
        ],
      },
      {
        phase: "Shutdown",
        items: [
          { action: "Parking Brake", expected: "SET" },
          { action: "APU", expected: "START" },
          { action: "Power Levers", expected: "FUEL CUTOFF (all 4)" },
          { action: "Battery", expected: "OFF" },
        ],
      },
    ],
  },
  // ═══════════════════════════════════════════════════════════
  // Cessna 152
  // ═══════════════════════════════════════════════════════════
  {
    id: "cessna-152",
    name: "Cessna 152",
    manufacturer: "Cessna",
    type: "single-prop",
    imageEmoji: "🛩️",
    checklists: [
      {
        phase: "Preflight",
        items: [
          { action: "Control Lock", expected: "REMOVE" },
          { action: "Ignition Switch", expected: "OFF" },
          { action: "Master Switch", expected: "ON" },
          { action: "Fuel Quantity", expected: "CHECK" },
          { action: "Flaps", expected: "EXTEND & CHECK" },
          { action: "Master Switch", expected: "OFF" },
          { action: "Fuel Shutoff Valve", expected: "ON" },
          { action: "Walk-Around", expected: "COMPLETE" },
        ],
      },
      {
        phase: "Engine Start",
        items: [
          { action: "Parking Brake", expected: "SET" },
          { action: "Mixture", expected: "RICH" },
          { action: "Carburetor Heat", expected: "COLD" },
          { action: "Primer", expected: "AS REQUIRED (2-4)" },
          { action: "Throttle", expected: "OPEN 1/4 INCH" },
          { action: "Master Switch", expected: "ON" },
          { action: "Ignition", expected: "START" },
          { action: "Oil Pressure", expected: "CHECK GREEN" },
          { action: "Avionics", expected: "ON" },
        ],
      },
      {
        phase: "Run-Up / Before Takeoff",
        items: [
          { action: "Parking Brake", expected: "SET" },
          { action: "Flight Controls", expected: "FREE & CORRECT" },
          { action: "Instruments", expected: "CHECK & SET" },
          { action: "Throttle", expected: "1700 RPM" },
          { action: "Magnetos", expected: "CHECK (max 125 RPM drop)" },
          { action: "Carburetor Heat", expected: "CHECK" },
          { action: "Throttle", expected: "IDLE CHECK" },
          { action: "Trim", expected: "TAKEOFF" },
          { action: "Flaps", expected: "SET (0°-10°)" },
          { action: "Lights", expected: "ON" },
        ],
      },
      {
        phase: "Takeoff",
        items: [
          { action: "Carburetor Heat", expected: "COLD" },
          { action: "Throttle", expected: "FULL" },
          { action: "Mixture", expected: "RICH" },
          { action: "Rotate", expected: "50 KIAS" },
          { action: "Climb", expected: "60-70 KIAS" },
        ],
      },
      {
        phase: "Cruise",
        items: [
          { action: "Power", expected: "2100-2400 RPM" },
          { action: "Mixture", expected: "LEAN" },
          { action: "Trim", expected: "ADJUST" },
          { action: "Engine Instruments", expected: "MONITOR" },
        ],
      },
      {
        phase: "Approach & Landing",
        items: [
          { action: "Mixture", expected: "RICH" },
          { action: "Carburetor Heat", expected: "ON" },
          { action: "Flaps", expected: "AS REQUIRED" },
          { action: "Speed", expected: "60-70 KIAS (final)" },
          { action: "Landing Light", expected: "ON" },
        ],
      },
      {
        phase: "Shutdown",
        items: [
          { action: "Parking Brake", expected: "SET" },
          { action: "Avionics", expected: "OFF" },
          { action: "Mixture", expected: "IDLE CUT-OFF" },
          { action: "Ignition", expected: "OFF" },
          { action: "Master Switch", expected: "OFF" },
        ],
      },
    ],
  },
  // ═══════════════════════════════════════════════════════════
  // Boeing F/A-18E Super Hornet
  // ═══════════════════════════════════════════════════════════
  {
    id: "fa-18e",
    name: "Boeing F/A-18E Super Hornet",
    manufacturer: "Boeing",
    type: "military",
    imageEmoji: "🛩️",
    checklists: [
      {
        phase: "Cockpit Preparation",
        items: [
          { action: "Battery", expected: "ON" },
          { action: "APU", expected: "START" },
          { action: "Warning / Caution Lights", expected: "TEST" },
          { action: "Oxygen", expected: "ON / CHECK" },
          { action: "Ejection Seat", expected: "ARM" },
          { action: "INS / GPS", expected: "ALIGN" },
          { action: "HUD / MFDs", expected: "CHECK" },
          { action: "Radios", expected: "SET" },
        ],
      },
      {
        phase: "Engine Start",
        items: [
          { action: "Throttle Left", expected: "OFF → IDLE" },
          { action: "Left Engine Start", expected: "PRESS" },
          { action: "Left Engine RPM / EGT", expected: "MONITOR" },
          { action: "Throttle Right", expected: "OFF → IDLE" },
          { action: "Right Engine Start", expected: "PRESS" },
          { action: "Right Engine RPM / EGT", expected: "MONITOR" },
          { action: "Generators", expected: "ON (both)" },
          { action: "Hydraulics", expected: "CHECK (both)" },
          { action: "APU", expected: "OFF" },
        ],
      },
      {
        phase: "Before Taxi",
        items: [
          { action: "Flight Controls", expected: "CYCLE & CHECK (FBW)" },
          { action: "Trim", expected: "SET" },
          { action: "Flaps", expected: "AUTO / HALF" },
          { action: "Nosewheel Steering", expected: "CHECK" },
          { action: "Radar", expected: "STANDBY" },
          { action: "Canopy", expected: "CLOSED & LOCKED" },
          { action: "TACAN / IFF", expected: "SET" },
        ],
      },
      {
        phase: "Before Takeoff",
        items: [
          { action: "Launch Bar", expected: "UP (field) / DOWN (carrier)" },
          { action: "Flaps", expected: "HALF (field) / FULL (carrier)" },
          { action: "Trim", expected: "SET" },
          { action: "Warning Panel", expected: "CLEAR" },
          { action: "Exterior Lights", expected: "AS REQUIRED" },
        ],
      },
      {
        phase: "Takeoff",
        items: [
          { action: "Throttles", expected: "MIL / AB" },
          { action: "Engine Instruments", expected: "CHECK" },
          { action: "Rotate", expected: "AT COMPUTED SPEED" },
          { action: "Gear", expected: "UP" },
          { action: "Flaps", expected: "AUTO" },
        ],
      },
      {
        phase: "Cruise",
        items: [
          { action: "Throttles", expected: "SET CRUISE" },
          { action: "Autopilot", expected: "AS REQUIRED" },
          { action: "Fuel", expected: "MONITOR & BALANCE" },
          { action: "Systems", expected: "MONITOR" },
        ],
      },
      {
        phase: "Approach & Landing",
        items: [
          { action: "Speed", expected: "ON-SPEED AOA" },
          { action: "Gear", expected: "DOWN (3 green)" },
          { action: "Flaps", expected: "FULL" },
          { action: "Hook", expected: "DOWN (carrier) / UP (field)" },
          { action: "Landing Lights", expected: "ON" },
        ],
      },
      {
        phase: "Shutdown",
        items: [
          { action: "Parking Brake", expected: "SET" },
          { action: "Throttles", expected: "OFF (both)" },
          { action: "Ejection Seat", expected: "SAFE" },
          { action: "Canopy", expected: "OPEN" },
          { action: "Battery", expected: "OFF" },
        ],
      },
    ],
  },
  // ═══════════════════════════════════════════════════════════
  // Lockheed Martin F-22 Raptor
  // ═══════════════════════════════════════════════════════════
  {
    id: "f-22",
    name: "Lockheed Martin F-22 Raptor",
    manufacturer: "Lockheed Martin",
    type: "military",
    imageEmoji: "🛩️",
    checklists: [
      {
        phase: "Cockpit Preparation",
        items: [
          { action: "Battery / Main Power", expected: "ON" },
          { action: "JFS (Jet Fuel Starter)", expected: "READY" },
          { action: "Warning Panel", expected: "TEST" },
          { action: "Oxygen", expected: "ON" },
          { action: "Ejection Seat", expected: "ARM" },
          { action: "INS / GPS", expected: "ALIGN" },
          { action: "Avionics", expected: "ON" },
          { action: "HUD / MFDs", expected: "CHECK" },
        ],
      },
      {
        phase: "Engine Start",
        items: [
          { action: "JFS", expected: "START" },
          { action: "Right Throttle", expected: "IDLE" },
          { action: "Right Engine RPM / EGT", expected: "MONITOR" },
          { action: "Left Throttle", expected: "IDLE" },
          { action: "Left Engine RPM / EGT", expected: "MONITOR" },
          { action: "JFS", expected: "OFF" },
          { action: "Generators", expected: "ON (both)" },
          { action: "Hydraulics", expected: "CHECK" },
        ],
      },
      {
        phase: "Before Takeoff",
        items: [
          { action: "Flight Controls", expected: "CHECK (FBW)" },
          { action: "Trim", expected: "SET" },
          { action: "Flaps / LEFs", expected: "AUTO" },
          { action: "Canopy", expected: "CLOSED & LOCKED" },
          { action: "Warning Panel", expected: "CLEAR" },
          { action: "Nosewheel Steering", expected: "CHECK" },
          { action: "Lights", expected: "AS REQUIRED" },
        ],
      },
      {
        phase: "Takeoff",
        items: [
          { action: "Throttles", expected: "MIL / AB" },
          { action: "Engine Instruments", expected: "CHECK" },
          { action: "Rotate", expected: "AT COMPUTED SPEED" },
          { action: "Gear", expected: "UP" },
        ],
      },
      {
        phase: "Cruise",
        items: [
          { action: "Throttles", expected: "SET (supercruise capable)" },
          { action: "Autopilot", expected: "AS REQUIRED" },
          { action: "Fuel", expected: "MONITOR" },
          { action: "Stealth Systems", expected: "CHECK" },
          { action: "Systems", expected: "MONITOR" },
        ],
      },
      {
        phase: "Approach & Landing",
        items: [
          { action: "Speed", expected: "REDUCE TO APPROACH" },
          { action: "Gear", expected: "DOWN (3 green)" },
          { action: "Flaps / LEFs", expected: "AUTO" },
          { action: "Speed Brake", expected: "AS REQUIRED" },
          { action: "Approach Speed", expected: "PER WEIGHT" },
          { action: "Landing Lights", expected: "ON" },
        ],
      },
      {
        phase: "Shutdown",
        items: [
          { action: "Parking Brake", expected: "SET" },
          { action: "Throttles", expected: "OFF (both)" },
          { action: "Avionics", expected: "OFF" },
          { action: "Ejection Seat", expected: "SAFE" },
          { action: "Canopy", expected: "OPEN" },
          { action: "Battery", expected: "OFF" },
        ],
      },
    ],
  },
  // ═══════════════════════════════════════════════════════════
  // North American P-51D Mustang
  // ═══════════════════════════════════════════════════════════
  {
    id: "p-51d",
    name: "North American P-51D Mustang",
    manufacturer: "North American",
    type: "single-prop",
    imageEmoji: "🛩️",
    checklists: [
      {
        phase: "Preflight",
        items: [
          { action: "Walk-Around", expected: "COMPLETE" },
          { action: "Fuel Quantity", expected: "CHECK (fuselage + wing)" },
          { action: "Oil Level", expected: "CHECK" },
          { action: "Coolant Level", expected: "CHECK" },
          { action: "Propeller", expected: "INSPECT" },
          { action: "Control Surfaces", expected: "FREE & CORRECT" },
          { action: "Pitot Cover", expected: "REMOVE" },
        ],
      },
      {
        phase: "Engine Start",
        items: [
          { action: "Battery", expected: "ON" },
          { action: "Fuel Selector", expected: "FUSELAGE TANK" },
          { action: "Mixture", expected: "FULL RICH" },
          { action: "Propeller", expected: "FULL INCREASE" },
          { action: "Throttle", expected: "1 INCH OPEN" },
          { action: "Prime", expected: "3-6 STROKES" },
          { action: "Starter", expected: "ENGAGE" },
          { action: "Oil Pressure", expected: "CHECK (30 sec)" },
          { action: "Coolant Temp", expected: "MONITOR" },
        ],
      },
      {
        phase: "Before Takeoff",
        items: [
          { action: "Trim", expected: "6° RIGHT RUDDER, SLIGHT NOSE UP" },
          { action: "Flaps", expected: "UP or 20°" },
          { action: "Propeller", expected: "FULL INCREASE" },
          { action: "Mixture", expected: "RICH" },
          { action: "Magnetos", expected: "CHECK BOTH" },
          { action: "Supercharger", expected: "LOW BLOWER" },
          { action: "Coolant / Oil Temps", expected: "GREEN" },
          { action: "Canopy", expected: "LOCKED" },
        ],
      },
      {
        phase: "Takeoff",
        items: [
          { action: "Throttle", expected: "FULL (46\" Hg)" },
          { action: "Manifold Pressure", expected: "CHECK" },
          { action: "Right Rudder", expected: "MAINTAIN CENTERLINE" },
          { action: "Tail Up", expected: "~60 MPH" },
          { action: "Lift Off", expected: "~100 MPH" },
          { action: "Gear", expected: "UP" },
          { action: "Flaps", expected: "UP" },
        ],
      },
      {
        phase: "Cruise",
        items: [
          { action: "Power", expected: "SET (36\" Hg / 2300 RPM typical)" },
          { action: "Mixture", expected: "LEAN (auto lean)" },
          { action: "Trim", expected: "ADJUST" },
          { action: "Fuel Selector", expected: "SWITCH TANKS AS NEEDED" },
          { action: "Temps", expected: "MONITOR (coolant / oil)" },
        ],
      },
      {
        phase: "Approach & Landing",
        items: [
          { action: "Mixture", expected: "RICH" },
          { action: "Propeller", expected: "FULL INCREASE" },
          { action: "Speed", expected: "BELOW 170 MPH" },
          { action: "Gear", expected: "DOWN" },
          { action: "Flaps", expected: "FULL" },
          { action: "Final Speed", expected: "~100 MPH" },
          { action: "Touchdown", expected: "THREE POINT or WHEEL LANDING" },
        ],
      },
      {
        phase: "Shutdown",
        items: [
          { action: "Parking Brake", expected: "SET" },
          { action: "Throttle", expected: "1000 RPM" },
          { action: "Cool Down", expected: "2 MINUTES" },
          { action: "Mixture", expected: "IDLE CUT-OFF" },
          { action: "Magnetos", expected: "OFF" },
          { action: "Battery", expected: "OFF" },
        ],
      },
    ],
  },
  // ═══════════════════════════════════════════════════════════
  // Fairchild Republic A-10 Thunderbolt II
  // ═══════════════════════════════════════════════════════════
  {
    id: "a-10",
    name: "Fairchild Republic A-10 Thunderbolt II",
    manufacturer: "Fairchild Republic",
    type: "military",
    imageEmoji: "🛩️",
    checklists: [
      {
        phase: "Cockpit Preparation",
        items: [
          { action: "Battery", expected: "ON" },
          { action: "APU", expected: "START" },
          { action: "Warning Panel", expected: "TEST" },
          { action: "Oxygen", expected: "ON / CHECK" },
          { action: "Ejection Seat", expected: "ARM" },
          { action: "Fuel Quantity", expected: "CHECK" },
          { action: "INS", expected: "ALIGN" },
          { action: "HUD", expected: "CHECK" },
        ],
      },
      {
        phase: "Engine Start",
        items: [
          { action: "Left Throttle", expected: "OFF → IDLE" },
          { action: "Left Engine Start", expected: "PRESS" },
          { action: "Left Engine EGT / RPM", expected: "MONITOR" },
          { action: "Right Throttle", expected: "OFF → IDLE" },
          { action: "Right Engine Start", expected: "PRESS" },
          { action: "Right Engine EGT / RPM", expected: "MONITOR" },
          { action: "Generators", expected: "ON (both)" },
          { action: "Hydraulics", expected: "CHECK (both)" },
          { action: "APU", expected: "OFF" },
        ],
      },
      {
        phase: "Before Takeoff",
        items: [
          { action: "Flight Controls", expected: "CHECK" },
          { action: "Trim", expected: "SET" },
          { action: "Flaps", expected: "SET (7° or 20°)" },
          { action: "Speed Brake", expected: "RETRACTED" },
          { action: "Canopy", expected: "CLOSED & LOCKED" },
          { action: "Engine Instruments", expected: "CHECK" },
          { action: "Lights", expected: "AS REQUIRED" },
        ],
      },
      {
        phase: "Takeoff",
        items: [
          { action: "Throttles", expected: "MAX" },
          { action: "Engine Instruments", expected: "CHECK" },
          { action: "Rotate", expected: "120 KIAS" },
          { action: "Gear", expected: "UP" },
          { action: "Flaps", expected: "UP" },
        ],
      },
      {
        phase: "Cruise",
        items: [
          { action: "Throttles", expected: "SET CRUISE" },
          { action: "Autopilot", expected: "AS REQUIRED" },
          { action: "Fuel", expected: "MONITOR & BALANCE" },
          { action: "Systems", expected: "MONITOR" },
        ],
      },
      {
        phase: "Approach & Landing",
        items: [
          { action: "Speed", expected: "REDUCE" },
          { action: "Gear", expected: "DOWN (3 green)" },
          { action: "Flaps", expected: "FULL (20°)" },
          { action: "Speed Brake", expected: "AS REQUIRED" },
          { action: "Final Speed", expected: "130 KIAS" },
          { action: "Landing Lights", expected: "ON" },
        ],
      },
      {
        phase: "Shutdown",
        items: [
          { action: "Parking Brake", expected: "SET" },
          { action: "Throttles", expected: "OFF (both)" },
          { action: "Generators", expected: "OFF" },
          { action: "Ejection Seat", expected: "SAFE" },
          { action: "Canopy", expected: "OPEN" },
          { action: "Battery", expected: "OFF" },
        ],
      },
    ],
  },
  // ═══════════════════════════════════════════════════════════
  // Cirrus Vision SF50 (VisionJet)
  // ═══════════════════════════════════════════════════════════
  {
    id: "sf50",
    name: "Cirrus Vision SF50 (VisionJet)",
    manufacturer: "Cirrus",
    type: "jet",
    imageEmoji: "🛩️",
    checklists: [
      {
        phase: "Preflight",
        items: [
          { action: "Battery", expected: "ON" },
          { action: "Fuel Quantity", expected: "CHECK" },
          { action: "CAPS (Parachute)", expected: "CHECK INDICATOR" },
          { action: "Avionics", expected: "CHECK" },
          { action: "Flaps", expected: "CHECK" },
          { action: "External Walk-Around", expected: "COMPLETE" },
          { action: "Pitot / Static Covers", expected: "REMOVE" },
        ],
      },
      {
        phase: "Engine Start",
        items: [
          { action: "Parking Brake", expected: "SET" },
          { action: "Seat Belts", expected: "FASTENED" },
          { action: "Battery", expected: "ON" },
          { action: "Beacon", expected: "ON" },
          { action: "Throttle", expected: "IDLE" },
          { action: "Engine Start", expected: "PRESS" },
          { action: "N1 / ITT", expected: "MONITOR" },
          { action: "Engine Stable", expected: "CONFIRM" },
          { action: "Generator", expected: "ON" },
          { action: "Avionics", expected: "ON" },
        ],
      },
      {
        phase: "Before Takeoff",
        items: [
          { action: "Flight Controls", expected: "FREE & CORRECT" },
          { action: "Trim", expected: "SET TAKEOFF" },
          { action: "Flaps", expected: "50%" },
          { action: "Autopilot", expected: "CHECK / OFF" },
          { action: "CAPS", expected: "ARMED" },
          { action: "Transponder", expected: "ALT" },
          { action: "Lights", expected: "ON" },
          { action: "Engine Instruments", expected: "GREEN" },
        ],
      },
      {
        phase: "Takeoff",
        items: [
          { action: "Throttle", expected: "FULL" },
          { action: "Engine Instruments", expected: "CHECK" },
          { action: "Rotate", expected: "85 KIAS" },
          { action: "Climb Speed", expected: "120 KIAS" },
          { action: "Flaps", expected: "RETRACT" },
          { action: "Gear", expected: "UP" },
        ],
      },
      {
        phase: "Cruise",
        items: [
          { action: "Power", expected: "SET CRUISE" },
          { action: "Autopilot", expected: "ENGAGE" },
          { action: "Fuel", expected: "MONITOR" },
          { action: "Trim", expected: "ADJUST" },
          { action: "Engine Instruments", expected: "MONITOR" },
        ],
      },
      {
        phase: "Approach & Landing",
        items: [
          { action: "ATIS", expected: "OBTAIN" },
          { action: "Altimeter", expected: "SET" },
          { action: "Landing Gear", expected: "DOWN (3 green)" },
          { action: "Flaps", expected: "100%" },
          { action: "Speed", expected: "95 KIAS (final)" },
          { action: "Landing Light", expected: "ON" },
        ],
      },
      {
        phase: "Shutdown",
        items: [
          { action: "Parking Brake", expected: "SET" },
          { action: "Avionics", expected: "OFF" },
          { action: "Throttle", expected: "IDLE CUT-OFF" },
          { action: "Generator", expected: "OFF" },
          { action: "Battery", expected: "OFF" },
        ],
      },
    ],
  },
  // ═══════════════════════════════════════════════════════════
  // AeroElvira Optica
  // ═══════════════════════════════════════════════════════════
  {
    id: "optica",
    name: "AeroElvira Optica",
    manufacturer: "AeroElvira",
    type: "single-prop",
    imageEmoji: "🔭",
    checklists: [
      { phase: "Preflight", items: [
        { action: "Walk-Around", expected: "COMPLETE" },
        { action: "Fuel Quantity", expected: "CHECK" },
        { action: "Oil Level", expected: "CHECK" },
        { action: "Ducted Fan", expected: "INSPECT" },
        { action: "Bubble Canopy", expected: "INSPECT / CLEAN" },
        { action: "Control Surfaces", expected: "FREE & CORRECT" },
      ]},
      { phase: "Engine Start", items: [
        { action: "Battery", expected: "ON" },
        { action: "Mixture", expected: "RICH" },
        { action: "Throttle", expected: "IDLE" },
        { action: "Ignition", expected: "START" },
        { action: "Oil Pressure", expected: "CHECK GREEN" },
        { action: "Avionics", expected: "ON" },
      ]},
      { phase: "Before Takeoff", items: [
        { action: "Flight Controls", expected: "FREE & CORRECT" },
        { action: "Trim", expected: "SET TAKEOFF" },
        { action: "Magnetos", expected: "CHECK" },
        { action: "Canopy", expected: "CLOSED & LOCKED" },
        { action: "Lights", expected: "ON" },
      ]},
      { phase: "Takeoff", items: [
        { action: "Throttle", expected: "FULL" },
        { action: "Rotate", expected: "55 KIAS" },
        { action: "Climb", expected: "70 KIAS" },
      ]},
      { phase: "Cruise", items: [
        { action: "Power", expected: "SET CRUISE" },
        { action: "Mixture", expected: "LEAN" },
        { action: "Trim", expected: "ADJUST" },
        { action: "Fuel", expected: "MONITOR" },
      ]},
      { phase: "Approach & Landing", items: [
        { action: "Mixture", expected: "RICH" },
        { action: "Speed", expected: "65 KIAS (final)" },
        { action: "Flaps", expected: "AS REQUIRED" },
      ]},
      { phase: "Shutdown", items: [
        { action: "Mixture", expected: "IDLE CUT-OFF" },
        { action: "Ignition", expected: "OFF" },
        { action: "Battery", expected: "OFF" },
      ]},
    ],
  },
  // ═══════════════════════════════════════════════════════════
  // Air Tractor AT-802
  // ═══════════════════════════════════════════════════════════
  {
    id: "at-802",
    name: "Air Tractor AT-802",
    manufacturer: "Air Tractor",
    type: "turboprop",
    imageEmoji: "🌾",
    checklists: [
      { phase: "Preflight", items: [
        { action: "Walk-Around", expected: "COMPLETE" },
        { action: "Hopper / Tank", expected: "CHECK LOAD" },
        { action: "Fuel Quantity", expected: "CHECK" },
        { action: "Spray System", expected: "CHECK" },
        { action: "Propeller", expected: "INSPECT" },
      ]},
      { phase: "Engine Start", items: [
        { action: "Battery", expected: "ON" },
        { action: "Condition Lever", expected: "FUEL CUTOFF" },
        { action: "Starter", expected: "ENGAGE" },
        { action: "Condition Lever", expected: "LOW IDLE (at Ng 13%)" },
        { action: "ITT", expected: "MONITOR" },
        { action: "Oil Pressure", expected: "CHECK GREEN" },
        { action: "Generator", expected: "ON" },
      ]},
      { phase: "Before Takeoff", items: [
        { action: "Controls", expected: "FREE & CORRECT" },
        { action: "Trim", expected: "SET" },
        { action: "Flaps", expected: "TAKEOFF" },
        { action: "Condition Lever", expected: "MAX RPM" },
        { action: "Dispersal System", expected: "OFF" },
      ]},
      { phase: "Takeoff", items: [
        { action: "Power Lever", expected: "TAKEOFF" },
        { action: "Rotate", expected: "75 KIAS" },
        { action: "Climb", expected: "100 KIAS" },
      ]},
      { phase: "Working / Cruise", items: [
        { action: "Power", expected: "SET AS REQUIRED" },
        { action: "Dispersal System", expected: "ARM / ON" },
        { action: "Fuel", expected: "MONITOR" },
      ]},
      { phase: "Approach & Landing", items: [
        { action: "Flaps", expected: "AS REQUIRED" },
        { action: "Speed", expected: "80 KIAS" },
        { action: "Dispersal", expected: "OFF" },
      ]},
      { phase: "Shutdown", items: [
        { action: "Condition Lever", expected: "FUEL CUTOFF" },
        { action: "Generator", expected: "OFF" },
        { action: "Battery", expected: "OFF" },
      ]},
    ],
  },
  // ═══════════════════════════════════════════════════════════
  // Airbus A330 (-200/-300/300P2F)
  // ═══════════════════════════════════════════════════════════
  {
    id: "a330-classic",
    name: "Airbus A330 (-200/-300/300P2F)",
    manufacturer: "Airbus",
    type: "airliner",
    imageEmoji: "✈️",
    checklists: [
      { phase: "Cockpit Preparation", items: [
        { action: "Battery 1+2", expected: "ON" },
        { action: "External Power", expected: "ON" },
        { action: "APU", expected: "START" },
        { action: "APU Bleed", expected: "ON (when APU running)" },
        { action: "ADIRS 1+2+3", expected: "NAV" },
        { action: "FMS", expected: "INITIALIZE" },
        { action: "Fuel Quantity", expected: "CHECK" },
        { action: "ECAM", expected: "CHECK" },
      ]},
      { phase: "Engine Start", items: [
        { action: "Beacon", expected: "ON" },
        { action: "Engine Mode", expected: "IGN/START" },
        { action: "Engine 1 Master", expected: "ON" },
        { action: "Engine 1 N2/EGT", expected: "MONITOR" },
        { action: "Engine 2 Master", expected: "ON" },
        { action: "Engine 2 N2/EGT", expected: "MONITOR" },
        { action: "Engine Mode", expected: "NORM" },
        { action: "APU", expected: "OFF" },
      ]},
      { phase: "Before Takeoff", items: [
        { action: "Flight Controls", expected: "CHECK" },
        { action: "Flaps/Slats", expected: "SET T/O" },
        { action: "Trim", expected: "SET" },
        { action: "Autobrake", expected: "MAX" },
        { action: "T/O Config", expected: "TEST" },
        { action: "TCAS", expected: "TA/RA" },
        { action: "Lights", expected: "ON" },
      ]},
      { phase: "Takeoff", items: [
        { action: "Thrust", expected: "FLEX/TOGA" },
        { action: "V1/VR", expected: "ROTATE" },
        { action: "Positive Climb", expected: "GEAR UP" },
        { action: "Flaps", expected: "RETRACT ON SCHEDULE" },
      ]},
      { phase: "Cruise", items: [
        { action: "AP/AT", expected: "ENGAGED" },
        { action: "Fuel", expected: "MONITOR & BALANCE" },
        { action: "Systems", expected: "MONITOR" },
      ]},
      { phase: "Approach & Landing", items: [
        { action: "Approach Briefing", expected: "COMPLETE" },
        { action: "Gear", expected: "DOWN (3 green)" },
        { action: "Flaps", expected: "FULL" },
        { action: "Speedbrakes", expected: "ARMED" },
        { action: "Landing Lights", expected: "ON" },
      ]},
      { phase: "Shutdown", items: [
        { action: "Parking Brake", expected: "SET" },
        { action: "APU", expected: "START" },
        { action: "Engines", expected: "OFF" },
        { action: "Battery", expected: "OFF" },
      ]},
    ],
  },
  // ═══════════════════════════════════════════════════════════
  // Airbus Helicopter H125
  // ═══════════════════════════════════════════════════════════
  {
    id: "h125",
    name: "Airbus Helicopter H125",
    manufacturer: "Airbus Helicopters",
    type: "helicopter",
    imageEmoji: "🚁",
    checklists: [
      { phase: "Preflight", items: [
        { action: "Battery", expected: "ON" },
        { action: "Fuel Quantity", expected: "CHECK" },
        { action: "VEMD", expected: "CHECK" },
        { action: "Caution Panel", expected: "TEST" },
        { action: "Rotor / Tail Rotor", expected: "INSPECT" },
        { action: "Walk-Around", expected: "COMPLETE" },
      ]},
      { phase: "Engine Start", items: [
        { action: "Area", expected: "CLEAR" },
        { action: "Beacon", expected: "ON" },
        { action: "Twist Grip Throttle", expected: "FLIGHT IDLE" },
        { action: "Starter", expected: "ENGAGE" },
        { action: "Ng / TOT", expected: "MONITOR" },
        { action: "Engine", expected: "STABILIZE AT IDLE" },
        { action: "Generator", expected: "ON" },
        { action: "Avionics", expected: "ON" },
      ]},
      { phase: "Before Takeoff", items: [
        { action: "Throttle", expected: "FLY (full open)" },
        { action: "Nr", expected: "CHECK 100%" },
        { action: "Caution Panel", expected: "CLEAR" },
        { action: "Flight Controls", expected: "CHECK" },
        { action: "Doors", expected: "CLOSED" },
      ]},
      { phase: "Takeoff", items: [
        { action: "Collective", expected: "INCREASE SMOOTHLY" },
        { action: "Hover Check", expected: "POWER MARGIN OK" },
        { action: "Torque", expected: "CHECK LIMITS" },
        { action: "Transition", expected: "ACCELERATE FORWARD" },
      ]},
      { phase: "Cruise", items: [
        { action: "Airspeed", expected: "SET DESIRED" },
        { action: "Power", expected: "SET" },
        { action: "Fuel", expected: "MONITOR" },
      ]},
      { phase: "Approach & Landing", items: [
        { action: "Speed", expected: "REDUCE" },
        { action: "Hover", expected: "STABILIZE" },
        { action: "Collective", expected: "LOWER SLOWLY" },
        { action: "Skids", expected: "GROUND CONTACT" },
      ]},
      { phase: "Shutdown", items: [
        { action: "Throttle", expected: "FLIGHT IDLE" },
        { action: "Cool Down", expected: "2 MINUTES" },
        { action: "Throttle", expected: "CUTOFF" },
        { action: "Rotor Brake", expected: "APPLY" },
        { action: "Battery", expected: "OFF" },
      ]},
    ],
  },
  // ═══════════════════════════════════════════════════════════
  // Airship Industries Skyship 600
  // ═══════════════════════════════════════════════════════════
  {
    id: "skyship-600",
    name: "Airship Industries Skyship 600",
    manufacturer: "Airship Industries",
    type: "ultralight",
    imageEmoji: "🎈",
    checklists: [
      { phase: "Pre-Departure", items: [
        { action: "Envelope Pressure", expected: "CHECK" },
        { action: "Ballonets", expected: "CHECK BALANCE" },
        { action: "Helium", expected: "CHECK PURITY & VOLUME" },
        { action: "Engines 1+2", expected: "PREFLIGHT COMPLETE" },
        { action: "Fuel Quantity", expected: "CHECK" },
      ]},
      { phase: "Engine Start", items: [
        { action: "Battery", expected: "ON" },
        { action: "Engine 1", expected: "START" },
        { action: "Engine 2", expected: "START" },
        { action: "Avionics", expected: "ON" },
      ]},
      { phase: "Launch", items: [
        { action: "Ballast", expected: "ADJUST" },
        { action: "Ground Lines", expected: "RELEASE" },
        { action: "Thrust", expected: "INCREASE" },
        { action: "Climb", expected: "ESTABLISH" },
      ]},
      { phase: "Cruise", items: [
        { action: "Power", expected: "SET" },
        { action: "Pressure Height", expected: "MONITOR" },
        { action: "Ballonets", expected: "MONITOR" },
        { action: "Fuel", expected: "MONITOR" },
      ]},
      { phase: "Approach & Landing", items: [
        { action: "Speed", expected: "REDUCE" },
        { action: "Buoyancy", expected: "ADJUST" },
        { action: "Ground Crew", expected: "READY" },
        { action: "Mast", expected: "APPROACH" },
      ]},
      { phase: "Shutdown", items: [
        { action: "Mooring Lines", expected: "SECURE" },
        { action: "Engines", expected: "OFF" },
        { action: "Battery", expected: "OFF" },
      ]},
    ],
  },
  // ═══════════════════════════════════════════════════════════
  // Archer Midnight (eVTOL)
  // ═══════════════════════════════════════════════════════════
  {
    id: "archer-midnight",
    name: "Archer Midnight",
    manufacturer: "Archer Aviation",
    type: "evtol",
    imageEmoji: "⚡",
    checklists: [
      { phase: "Preflight", items: [
        { action: "Battery SOC", expected: "CHECK (sufficient range)" },
        { action: "Motor Systems", expected: "SELF-TEST" },
        { action: "Tilt Rotors", expected: "INSPECT / CYCLE" },
        { action: "Flight Computer", expected: "INITIALIZE" },
        { action: "External Inspection", expected: "COMPLETE" },
      ]},
      { phase: "Power Up", items: [
        { action: "Master Power", expected: "ON" },
        { action: "Avionics", expected: "ON" },
        { action: "Motor Controllers", expected: "ONLINE" },
        { action: "Doors", expected: "CLOSED" },
      ]},
      { phase: "Takeoff (Vertical)", items: [
        { action: "Rotors", expected: "VERTICAL MODE" },
        { action: "Thrust", expected: "INCREASE" },
        { action: "Hover", expected: "STABILIZE" },
        { action: "Transition", expected: "TILT FORWARD" },
      ]},
      { phase: "Cruise", items: [
        { action: "Rotors", expected: "CRUISE MODE" },
        { action: "Speed", expected: "SET" },
        { action: "Battery SOC", expected: "MONITOR" },
      ]},
      { phase: "Approach & Landing", items: [
        { action: "Rotors", expected: "TRANSITION VERTICAL" },
        { action: "Hover", expected: "STABILIZE" },
        { action: "Descend", expected: "SLOWLY" },
        { action: "Motors", expected: "OFF after touchdown" },
      ]},
    ],
  },
  // ═══════════════════════════════════════════════════════════
  // Aviat Pitts Special S1S
  // ═══════════════════════════════════════════════════════════
  {
    id: "pitts-s1s",
    name: "Aviat Pitts Special S1S",
    manufacturer: "Aviat",
    type: "aerobatic",
    imageEmoji: "🔄",
    checklists: [
      { phase: "Preflight", items: [
        { action: "Walk-Around", expected: "COMPLETE" },
        { action: "Fuel Quantity", expected: "CHECK" },
        { action: "Oil", expected: "CHECK" },
        { action: "Wires & Struts", expected: "INSPECT" },
        { action: "Harness (5-point)", expected: "INSPECT" },
      ]},
      { phase: "Engine Start", items: [
        { action: "Mixture", expected: "RICH" },
        { action: "Throttle", expected: "CRACKED" },
        { action: "Magnetos", expected: "BOTH" },
        { action: "Starter", expected: "ENGAGE" },
        { action: "Oil Pressure", expected: "CHECK" },
      ]},
      { phase: "Before Takeoff", items: [
        { action: "Harness", expected: "TIGHT" },
        { action: "Controls", expected: "FREE & CORRECT" },
        { action: "Magnetos", expected: "CHECK" },
        { action: "Trim", expected: "SET" },
        { action: "Canopy", expected: "CLOSED" },
      ]},
      { phase: "Takeoff", items: [
        { action: "Throttle", expected: "FULL" },
        { action: "Right Rudder", expected: "MAINTAIN CENTERLINE" },
        { action: "Rotate", expected: "~55 KIAS" },
        { action: "Climb", expected: "80 KIAS" },
      ]},
      { phase: "Aerobatic Check", items: [
        { action: "Altitude", expected: "ABOVE 3000 AGL" },
        { action: "Area", expected: "CLEAR" },
        { action: "Harness", expected: "TIGHT" },
        { action: "Fuel", expected: "ADEQUATE" },
        { action: "Mixture", expected: "RICH" },
      ]},
      { phase: "Approach & Landing", items: [
        { action: "Speed", expected: "75 KIAS (final)" },
        { action: "Approach", expected: "WHEEL or 3-POINT" },
      ]},
      { phase: "Shutdown", items: [
        { action: "Mixture", expected: "IDLE CUT-OFF" },
        { action: "Magnetos", expected: "OFF" },
        { action: "Master", expected: "OFF" },
      ]},
    ],
  },
  // ═══════════════════════════════════════════════════════════
  // Aviat Pitts Special S2S
  // ═══════════════════════════════════════════════════════════
  {
    id: "pitts-s2s",
    name: "Aviat Pitts Special S2S",
    manufacturer: "Aviat",
    type: "aerobatic",
    imageEmoji: "🔄",
    checklists: [
      { phase: "Preflight", items: [
        { action: "Walk-Around", expected: "COMPLETE" },
        { action: "Fuel (inverted system)", expected: "CHECK" },
        { action: "Oil (aerobatic sump)", expected: "CHECK" },
        { action: "Smoke System", expected: "CHECK (if installed)" },
        { action: "Harness (both seats)", expected: "INSPECT" },
      ]},
      { phase: "Engine Start", items: [
        { action: "Mixture", expected: "RICH" },
        { action: "Throttle", expected: "CRACKED" },
        { action: "Starter", expected: "ENGAGE" },
        { action: "Oil Pressure", expected: "CHECK" },
      ]},
      { phase: "Before Takeoff", items: [
        { action: "Harness", expected: "TIGHT (both occupants)" },
        { action: "Controls", expected: "FREE & CORRECT" },
        { action: "Magnetos", expected: "CHECK" },
        { action: "Inverted Fuel", expected: "CHECK VALVE" },
        { action: "Canopy", expected: "CLOSED" },
      ]},
      { phase: "Takeoff", items: [
        { action: "Throttle", expected: "FULL" },
        { action: "Rotate", expected: "~60 KIAS" },
        { action: "Climb", expected: "85 KIAS" },
      ]},
      { phase: "Aerobatic Check", items: [
        { action: "Altitude", expected: "ABOVE 3000 AGL" },
        { action: "Area", expected: "CLEAR" },
        { action: "Harness", expected: "TIGHT" },
        { action: "Smoke", expected: "ON (if desired)" },
      ]},
      { phase: "Approach & Landing", items: [
        { action: "Speed", expected: "80 KIAS (final)" },
      ]},
      { phase: "Shutdown", items: [
        { action: "Mixture", expected: "IDLE CUT-OFF" },
        { action: "Magnetos", expected: "OFF" },
        { action: "Master", expected: "OFF" },
      ]},
    ],
  },
  // ═══════════════════════════════════════════════════════════
  // Bell 407
  // ═══════════════════════════════════════════════════════════
  {
    id: "bell-407",
    name: "Bell 407",
    manufacturer: "Bell",
    type: "helicopter",
    imageEmoji: "🚁",
    checklists: [
      { phase: "Preflight", items: [
        { action: "Battery", expected: "ON" },
        { action: "Fuel Quantity", expected: "CHECK" },
        { action: "Caution Panel", expected: "TEST" },
        { action: "Rotor / Tail Rotor", expected: "INSPECT" },
        { action: "Walk-Around", expected: "COMPLETE" },
      ]},
      { phase: "Engine Start", items: [
        { action: "Area", expected: "CLEAR" },
        { action: "Beacon", expected: "ON" },
        { action: "Throttle", expected: "IDLE" },
        { action: "Starter", expected: "ENGAGE" },
        { action: "Ng / TOT", expected: "MONITOR" },
        { action: "Generator", expected: "ON" },
        { action: "Avionics", expected: "ON" },
      ]},
      { phase: "Before Takeoff", items: [
        { action: "Throttle", expected: "FLY" },
        { action: "Nr", expected: "100%" },
        { action: "Controls", expected: "CHECK" },
        { action: "Doors", expected: "CLOSED" },
      ]},
      { phase: "Takeoff", items: [
        { action: "Collective", expected: "INCREASE SMOOTHLY" },
        { action: "Hover Check", expected: "POWER MARGIN OK" },
        { action: "Transition", expected: "ACCELERATE FORWARD" },
      ]},
      { phase: "Cruise", items: [
        { action: "Airspeed", expected: "SET DESIRED" },
        { action: "Power", expected: "SET" },
        { action: "Fuel", expected: "MONITOR" },
      ]},
      { phase: "Approach & Landing", items: [
        { action: "Speed", expected: "REDUCE" },
        { action: "Hover", expected: "STABILIZE" },
        { action: "Collective", expected: "LOWER SLOWLY" },
      ]},
      { phase: "Shutdown", items: [
        { action: "Throttle", expected: "IDLE" },
        { action: "Cool Down", expected: "2 MINUTES" },
        { action: "Throttle", expected: "CUTOFF" },
        { action: "Battery", expected: "OFF" },
      ]},
    ],
  },
  // ═══════════════════════════════════════════════════════════
  // CGS Hawk Arrow II
  // ═══════════════════════════════════════════════════════════
  {
    id: "hawk-arrow-ii",
    name: "CGS Hawk Arrow II",
    manufacturer: "CGS Aviation",
    type: "ultralight",
    imageEmoji: "🪂",
    checklists: [
      { phase: "Preflight", items: [
        { action: "Wing Fabric", expected: "INSPECT" },
        { action: "Control Cables", expected: "CHECK TENSION" },
        { action: "Fuel", expected: "CHECK" },
        { action: "Engine", expected: "INSPECT" },
        { action: "Propeller", expected: "INSPECT" },
      ]},
      { phase: "Engine Start", items: [
        { action: "Choke", expected: "SET" },
        { action: "Throttle", expected: "IDLE" },
        { action: "Ignition", expected: "ON" },
        { action: "Start", expected: "PULL / ELECTRIC" },
        { action: "RPM", expected: "CHECK IDLE" },
      ]},
      { phase: "Before Takeoff", items: [
        { action: "Controls", expected: "FREE & CORRECT" },
        { action: "Wind", expected: "CHECK DIRECTION" },
        { action: "Engine", expected: "WARM" },
      ]},
      { phase: "Takeoff", items: [
        { action: "Throttle", expected: "FULL" },
        { action: "Lift Off", expected: "~30 MPH" },
        { action: "Climb", expected: "45 MPH" },
      ]},
      { phase: "Cruise", items: [
        { action: "Throttle", expected: "SET CRUISE" },
        { action: "Fuel", expected: "MONITOR" },
      ]},
      { phase: "Landing", items: [
        { action: "Throttle", expected: "REDUCE" },
        { action: "Speed", expected: "35 MPH" },
        { action: "Flare", expected: "GENTLY" },
      ]},
      { phase: "Shutdown", items: [
        { action: "Ignition", expected: "OFF" },
      ]},
    ],
  },
  // ═══════════════════════════════════════════════════════════
  // Cessna 400 Corvalis TT
  // ═══════════════════════════════════════════════════════════
  {
    id: "cessna-400",
    name: "Cessna 400 Corvalis TT",
    manufacturer: "Cessna",
    type: "single-prop",
    imageEmoji: "🛩️",
    checklists: [
      { phase: "Preflight", items: [
        { action: "Walk-Around", expected: "COMPLETE" },
        { action: "Fuel", expected: "CHECK" },
        { action: "Oil", expected: "CHECK" },
        { action: "Turbocharger", expected: "INSPECT" },
        { action: "Control Surfaces", expected: "FREE & CORRECT" },
      ]},
      { phase: "Engine Start", items: [
        { action: "Battery / Alt", expected: "ON" },
        { action: "Fuel Pump", expected: "ON" },
        { action: "Mixture", expected: "RICH" },
        { action: "Ignition", expected: "START" },
        { action: "Oil Pressure", expected: "CHECK GREEN" },
        { action: "Avionics", expected: "ON" },
      ]},
      { phase: "Before Takeoff", items: [
        { action: "Controls", expected: "FREE & CORRECT" },
        { action: "Flaps", expected: "SET T/O" },
        { action: "Trim", expected: "TAKEOFF" },
        { action: "Prop", expected: "FULL FORWARD" },
        { action: "Transponder", expected: "ALT" },
      ]},
      { phase: "Takeoff", items: [
        { action: "Throttle", expected: "FULL" },
        { action: "Rotate", expected: "70 KIAS" },
        { action: "Climb", expected: "100 KIAS" },
        { action: "Gear", expected: "UP" },
      ]},
      { phase: "Cruise", items: [
        { action: "Power", expected: "SET" },
        { action: "Mixture", expected: "LEAN" },
        { action: "Fuel", expected: "SWITCH TANKS" },
      ]},
      { phase: "Approach & Landing", items: [
        { action: "Mixture", expected: "RICH" },
        { action: "Gear", expected: "DOWN" },
        { action: "Flaps", expected: "FULL" },
        { action: "Speed", expected: "80 KIAS" },
      ]},
      { phase: "Shutdown", items: [
        { action: "Avionics", expected: "OFF" },
        { action: "Mixture", expected: "IDLE CUT-OFF" },
        { action: "Battery", expected: "OFF" },
      ]},
    ],
  },
  // ═══════════════════════════════════════════════════════════
  // CubCrafters NX Cub
  // ═══════════════════════════════════════════════════════════
  {
    id: "nxcub",
    name: "CubCrafters NX Cub",
    manufacturer: "CubCrafters",
    type: "single-prop",
    imageEmoji: "🏔️",
    checklists: [
      { phase: "Preflight", items: [
        { action: "Walk-Around", expected: "COMPLETE" },
        { action: "Fuel (both wings)", expected: "CHECK" },
        { action: "Oil", expected: "CHECK" },
        { action: "Tires / Tailwheel", expected: "CHECK" },
        { action: "Control Surfaces", expected: "FREE & CORRECT" },
      ]},
      { phase: "Engine Start", items: [
        { action: "Battery", expected: "ON" },
        { action: "Mixture", expected: "RICH" },
        { action: "Primer", expected: "AS REQUIRED" },
        { action: "Starter", expected: "ENGAGE" },
        { action: "Oil Pressure", expected: "CHECK" },
      ]},
      { phase: "Before Takeoff", items: [
        { action: "Controls", expected: "FREE & CORRECT" },
        { action: "Magnetos", expected: "CHECK" },
        { action: "Trim", expected: "SET TAKEOFF" },
        { action: "Carb Heat", expected: "CHECK" },
      ]},
      { phase: "Takeoff", items: [
        { action: "Throttle", expected: "FULL" },
        { action: "Tail Up", expected: "~30 KIAS" },
        { action: "Rotate", expected: "~45 KIAS" },
        { action: "Climb", expected: "60 KIAS" },
      ]},
      { phase: "Cruise", items: [
        { action: "Power", expected: "SET" },
        { action: "Mixture", expected: "LEAN" },
        { action: "Fuel", expected: "MONITOR" },
      ]},
      { phase: "Approach & Landing", items: [
        { action: "Mixture", expected: "RICH" },
        { action: "Carb Heat", expected: "ON" },
        { action: "Speed", expected: "50 KIAS" },
      ]},
      { phase: "Shutdown", items: [
        { action: "Mixture", expected: "IDLE CUT-OFF" },
        { action: "Magnetos", expected: "OFF" },
        { action: "Battery", expected: "OFF" },
      ]},
    ],
  },
  // ═══════════════════════════════════════════════════════════
  // Curtiss JN-4 Jenny
  // ═══════════════════════════════════════════════════════════
  {
    id: "jn4-jenny",
    name: "Curtiss JN-4 Jenny",
    manufacturer: "Curtiss",
    type: "historic",
    imageEmoji: "🏛️",
    checklists: [
      { phase: "Preflight", items: [
        { action: "Walk-Around", expected: "COMPLETE" },
        { action: "Fabric / Wires", expected: "INSPECT" },
        { action: "Fuel", expected: "CHECK" },
        { action: "Oil", expected: "CHECK" },
        { action: "Control Cables", expected: "CHECK TENSION" },
      ]},
      { phase: "Engine Start", items: [
        { action: "Fuel Valve", expected: "ON" },
        { action: "Throttle", expected: "CRACKED" },
        { action: "Magneto", expected: "ON" },
        { action: "Propeller", expected: "HAND PROP" },
        { action: "Oil Pressure", expected: "CHECK" },
      ]},
      { phase: "Takeoff", items: [
        { action: "Throttle", expected: "FULL" },
        { action: "Rudder", expected: "MAINTAIN DIRECTION" },
        { action: "Lift Off", expected: "~45 MPH" },
      ]},
      { phase: "Cruise", items: [
        { action: "Throttle", expected: "SET" },
        { action: "Oil / Temp", expected: "MONITOR" },
      ]},
      { phase: "Landing", items: [
        { action: "Throttle", expected: "REDUCE" },
        { action: "Speed", expected: "~40 MPH" },
        { action: "Three-Point", expected: "TOUCHDOWN" },
      ]},
      { phase: "Shutdown", items: [
        { action: "Magneto", expected: "OFF" },
        { action: "Fuel Valve", expected: "OFF" },
      ]},
    ],
  },
  // ═══════════════════════════════════════════════════════════
  // DG Aviation DG-1001E
  // ═══════════════════════════════════════════════════════════
  {
    id: "dg-1001e",
    name: "DG Aviation DG-1001E",
    manufacturer: "DG Aviation",
    type: "glider",
    imageEmoji: "🪶",
    checklists: [
      { phase: "Preflight", items: [
        { action: "Walk-Around", expected: "COMPLETE" },
        { action: "Control Surfaces", expected: "FREE & CORRECT" },
        { action: "Canopy", expected: "CLEAN & INSPECT" },
        { action: "Motor (sustainer)", expected: "CHECK" },
        { action: "Ballast", expected: "AS REQUIRED" },
        { action: "CG / Belly Hook", expected: "CHECK" },
      ]},
      { phase: "Before Launch (CBSIFTCB)", items: [
        { action: "C - Controls", expected: "FREE & CORRECT" },
        { action: "B - Ballast", expected: "CORRECT" },
        { action: "S - Straps", expected: "SECURE" },
        { action: "I - Instruments", expected: "SET" },
        { action: "F - Flaps", expected: "TAKEOFF" },
        { action: "T - Trim", expected: "SET" },
        { action: "C - Canopy", expected: "LOCKED" },
        { action: "B - Brakes (airbrake)", expected: "CLOSED" },
      ]},
      { phase: "Tow / Winch Launch", items: [
        { action: "Rope", expected: "ATTACHED" },
        { action: "Signal", expected: "ALL CLEAR" },
        { action: "Rotate", expected: "~45 KIAS" },
        { action: "Release", expected: "AT ALTITUDE" },
      ]},
      { phase: "Soaring", items: [
        { action: "Thermals", expected: "SEEK & CENTER" },
        { action: "Airspeed", expected: "BEST L/D" },
        { action: "Vario", expected: "MONITOR" },
      ]},
      { phase: "Approach & Landing", items: [
        { action: "Airbrakes", expected: "AS REQUIRED" },
        { action: "Speed", expected: "55-60 KIAS" },
        { action: "Wheel Brake", expected: "AFTER TOUCHDOWN" },
      ]},
    ],
  },
  // ═══════════════════════════════════════════════════════════
  // DG Aviation LS8-18
  // ═══════════════════════════════════════════════════════════
  {
    id: "ls8-18",
    name: "DG Aviation LS8-18",
    manufacturer: "DG Aviation",
    type: "glider",
    imageEmoji: "🪶",
    checklists: [
      { phase: "Preflight", items: [
        { action: "Walk-Around", expected: "COMPLETE" },
        { action: "Control Surfaces", expected: "FREE & CORRECT" },
        { action: "Water Ballast", expected: "AS REQUIRED" },
        { action: "Tow Hook", expected: "CHECK" },
      ]},
      { phase: "Before Launch (CBSIFTCB)", items: [
        { action: "Controls", expected: "FREE & CORRECT" },
        { action: "Straps", expected: "SECURE" },
        { action: "Instruments", expected: "SET" },
        { action: "Flaps", expected: "TAKEOFF" },
        { action: "Canopy", expected: "LOCKED" },
        { action: "Brakes", expected: "CLOSED" },
      ]},
      { phase: "Tow Launch", items: [
        { action: "Rope", expected: "ATTACHED" },
        { action: "Rotate", expected: "~40 KIAS" },
        { action: "Release", expected: "AT ALTITUDE" },
      ]},
      { phase: "Soaring", items: [
        { action: "Flap Setting", expected: "PER SPEED" },
        { action: "Thermals", expected: "CENTER" },
        { action: "Vario", expected: "MONITOR" },
      ]},
      { phase: "Approach & Landing", items: [
        { action: "Water Ballast", expected: "DUMP (if loaded)" },
        { action: "Airbrakes", expected: "AS REQUIRED" },
        { action: "Speed", expected: "52-58 KIAS" },
      ]},
    ],
  },
  // ═══════════════════════════════════════════════════════════
  // De Havilland Canada CL-415
  // ═══════════════════════════════════════════════════════════
  {
    id: "cl-415",
    name: "De Havilland Canada CL-415",
    manufacturer: "De Havilland Canada",
    type: "amphibious",
    imageEmoji: "🌊",
    checklists: [
      { phase: "Preflight", items: [
        { action: "Walk-Around", expected: "COMPLETE" },
        { action: "Hull", expected: "INSPECT" },
        { action: "Water Scoops & Tanks", expected: "CHECK" },
        { action: "Fuel", expected: "CHECK" },
        { action: "Engines / Props", expected: "INSPECT" },
      ]},
      { phase: "Engine Start", items: [
        { action: "Battery", expected: "ON" },
        { action: "Engine 1+2", expected: "START" },
        { action: "Condition Levers", expected: "LOW IDLE" },
        { action: "Generators", expected: "ON" },
      ]},
      { phase: "Before Takeoff", items: [
        { action: "Controls", expected: "FREE & CORRECT" },
        { action: "Flaps", expected: "TAKEOFF" },
        { action: "Props", expected: "FULL RPM" },
        { action: "Water Doors", expected: "CLOSED" },
        { action: "Gear", expected: "UP (water) / DOWN (land)" },
      ]},
      { phase: "Takeoff (Water)", items: [
        { action: "Power", expected: "TAKEOFF" },
        { action: "On Step", expected: "MAINTAIN" },
        { action: "Rotate", expected: "AT SPEED" },
        { action: "Flaps", expected: "RETRACT" },
      ]},
      { phase: "Water Scooping", items: [
        { action: "Approach Lake", expected: "LEVEL, INTO WIND" },
        { action: "Scoops", expected: "OPEN" },
        { action: "Tanks Full", expected: "SCOOPS CLOSE" },
        { action: "Power", expected: "TAKEOFF — CLIMB AWAY" },
      ]},
      { phase: "Water Drop", items: [
        { action: "Target", expected: "IDENTIFY" },
        { action: "Doors", expected: "OPEN (RELEASE)" },
        { action: "Doors", expected: "CLOSE" },
      ]},
      { phase: "Approach & Landing", items: [
        { action: "Gear", expected: "DOWN (land) / UP (water)" },
        { action: "Flaps", expected: "FULL" },
        { action: "Speed", expected: "PER WEIGHT" },
      ]},
      { phase: "Shutdown", items: [
        { action: "Condition Levers", expected: "FUEL CUTOFF" },
        { action: "Battery", expected: "OFF" },
      ]},
    ],
  },
  // ═══════════════════════════════════════════════════════════
  // De Havilland Canada DHC-2 Beaver
  // ═══════════════════════════════════════════════════════════
  {
    id: "dhc-2",
    name: "De Havilland Canada DHC-2 Beaver",
    manufacturer: "De Havilland Canada",
    type: "single-prop",
    imageEmoji: "🏔️",
    checklists: [
      { phase: "Preflight", items: [
        { action: "Walk-Around", expected: "COMPLETE" },
        { action: "Fuel", expected: "CHECK" },
        { action: "Oil (R-985 radial)", expected: "CHECK" },
        { action: "Floats / Wheels", expected: "INSPECT" },
        { action: "Propeller", expected: "INSPECT" },
      ]},
      { phase: "Engine Start", items: [
        { action: "Battery / Master", expected: "ON" },
        { action: "Mixture", expected: "RICH" },
        { action: "Prop", expected: "FULL FINE" },
        { action: "Primer", expected: "AS REQUIRED" },
        { action: "Starter", expected: "ENGAGE" },
        { action: "Oil Pressure", expected: "CHECK (30 sec)" },
      ]},
      { phase: "Before Takeoff", items: [
        { action: "Controls", expected: "FREE & CORRECT" },
        { action: "Trim", expected: "SET" },
        { action: "Flaps", expected: "TAKEOFF" },
        { action: "Prop", expected: "CYCLE" },
        { action: "Magnetos", expected: "CHECK" },
        { action: "Carb Heat", expected: "CHECK" },
      ]},
      { phase: "Takeoff", items: [
        { action: "Throttle", expected: "FULL" },
        { action: "Rotate", expected: "~55 MPH" },
        { action: "Climb", expected: "~80 MPH" },
        { action: "Flaps", expected: "RETRACT" },
      ]},
      { phase: "Cruise", items: [
        { action: "Power", expected: "SET (30\"/2000 RPM)" },
        { action: "Mixture", expected: "LEAN" },
        { action: "Fuel", expected: "MONITOR" },
      ]},
      { phase: "Approach & Landing", items: [
        { action: "Mixture", expected: "RICH" },
        { action: "Carb Heat", expected: "ON" },
        { action: "Flaps", expected: "FULL" },
        { action: "Speed", expected: "~65 MPH" },
      ]},
      { phase: "Shutdown", items: [
        { action: "Mixture", expected: "IDLE CUT-OFF" },
        { action: "Magnetos", expected: "OFF" },
        { action: "Master", expected: "OFF" },
      ]},
    ],
  },
  // ═══════════════════════════════════════════════════════════
  // De Havilland Canada DHC-6 Twin Otter
  // ═══════════════════════════════════════════════════════════
  {
    id: "dhc-6",
    name: "De Havilland Canada DHC-6 Twin Otter",
    manufacturer: "De Havilland Canada",
    type: "turboprop",
    imageEmoji: "🏔️",
    checklists: [
      { phase: "Preflight", items: [
        { action: "Walk-Around", expected: "COMPLETE" },
        { action: "Fuel", expected: "CHECK BOTH" },
        { action: "Engines / Props", expected: "INSPECT" },
        { action: "Floats / Gear", expected: "CHECK" },
      ]},
      { phase: "Engine Start", items: [
        { action: "Battery", expected: "ON" },
        { action: "Left Engine", expected: "START" },
        { action: "Left ITT/Ng", expected: "MONITOR" },
        { action: "Right Engine", expected: "START" },
        { action: "Generators", expected: "ON (both)" },
      ]},
      { phase: "Before Takeoff", items: [
        { action: "Controls", expected: "FREE & CORRECT" },
        { action: "Flaps", expected: "TAKEOFF (20°)" },
        { action: "Condition Levers", expected: "MAX RPM" },
        { action: "Trim", expected: "SET" },
        { action: "Lights", expected: "ON" },
      ]},
      { phase: "Takeoff", items: [
        { action: "Power Levers", expected: "TAKEOFF" },
        { action: "Rotate", expected: "60 KIAS" },
        { action: "Climb", expected: "85 KIAS" },
        { action: "Flaps", expected: "RETRACT" },
      ]},
      { phase: "Cruise", items: [
        { action: "Power", expected: "SET CRUISE" },
        { action: "Fuel", expected: "MONITOR" },
      ]},
      { phase: "Approach & Landing", items: [
        { action: "Flaps", expected: "FULL (40°)" },
        { action: "Speed", expected: "70 KIAS" },
        { action: "Landing Light", expected: "ON" },
      ]},
      { phase: "Shutdown", items: [
        { action: "Condition Levers", expected: "FUEL CUTOFF" },
        { action: "Battery", expected: "OFF" },
      ]},
    ],
  },
  // ═══════════════════════════════════════════════════════════
  // Douglas DC-3
  // ═══════════════════════════════════════════════════════════
  {
    id: "dc-3",
    name: "Douglas DC-3",
    manufacturer: "Douglas",
    type: "historic",
    imageEmoji: "🏛️",
    checklists: [
      { phase: "Preflight", items: [
        { action: "Walk-Around", expected: "COMPLETE" },
        { action: "Fuel (both tanks)", expected: "CHECK" },
        { action: "Oil (both R-1830s)", expected: "CHECK (min 20 qt)" },
        { action: "Tailwheel", expected: "CHECK" },
        { action: "Props", expected: "INSPECT" },
      ]},
      { phase: "Engine Start", items: [
        { action: "Battery", expected: "ON" },
        { action: "Mixture L+R", expected: "RICH" },
        { action: "Prime L", expected: "3-5 STROKES" },
        { action: "Starter L", expected: "ENGAGE & MESH" },
        { action: "Oil Pressure L", expected: "CHECK" },
        { action: "Repeat", expected: "RIGHT ENGINE" },
      ]},
      { phase: "Before Takeoff", items: [
        { action: "Controls", expected: "FREE & CORRECT" },
        { action: "Trim", expected: "SET (tail heavy)" },
        { action: "Flaps", expected: "¼ to ½" },
        { action: "Magnetos", expected: "CHECK BOTH ENGINES" },
        { action: "Cowl Flaps", expected: "OPEN" },
        { action: "Tailwheel Lock", expected: "LOCKED" },
      ]},
      { phase: "Takeoff", items: [
        { action: "Throttles", expected: "FULL (36\" Hg)" },
        { action: "Rudder", expected: "MAINTAIN CENTERLINE" },
        { action: "Lift Off", expected: "~84 MPH" },
        { action: "Gear", expected: "UP" },
        { action: "Climb", expected: "~120 MPH" },
      ]},
      { phase: "Cruise", items: [
        { action: "Power", expected: "SET (28-30\"/2050 RPM)" },
        { action: "Mixture", expected: "LEAN" },
        { action: "Cowl Flaps", expected: "AS REQUIRED" },
        { action: "Fuel", expected: "MONITOR BOTH" },
      ]},
      { phase: "Approach & Landing", items: [
        { action: "Mixture", expected: "RICH (both)" },
        { action: "Gear", expected: "DOWN" },
        { action: "Flaps", expected: "FULL" },
        { action: "Speed", expected: "~80 MPH" },
        { action: "Tailwheel Lock", expected: "LOCKED" },
      ]},
      { phase: "Shutdown", items: [
        { action: "Mixture L+R", expected: "IDLE CUT-OFF" },
        { action: "Magnetos", expected: "OFF (both)" },
        { action: "Battery", expected: "OFF" },
      ]},
    ],
  },
  // ═══════════════════════════════════════════════════════════
  // Draco X
  // ═══════════════════════════════════════════════════════════
  {
    id: "draco-x",
    name: "Draco X",
    manufacturer: "Draco",
    type: "turboprop",
    imageEmoji: "🐉",
    checklists: [
      { phase: "Preflight", items: [
        { action: "Walk-Around", expected: "COMPLETE" },
        { action: "Fuel", expected: "CHECK" },
        { action: "STOL Modifications", expected: "INSPECT" },
        { action: "Bush Tires", expected: "CHECK" },
      ]},
      { phase: "Engine Start", items: [
        { action: "Battery", expected: "ON" },
        { action: "Condition Lever", expected: "FUEL CUTOFF" },
        { action: "Starter", expected: "ENGAGE" },
        { action: "Condition Lever", expected: "LOW IDLE (Ng 13%)" },
        { action: "ITT", expected: "MONITOR" },
        { action: "Generator", expected: "ON" },
      ]},
      { phase: "Before Takeoff", items: [
        { action: "Controls", expected: "FREE & CORRECT" },
        { action: "Flaps", expected: "FULL (STOL)" },
        { action: "Condition Lever", expected: "MAX RPM" },
      ]},
      { phase: "Takeoff (STOL)", items: [
        { action: "Power", expected: "FULL" },
        { action: "Rotate", expected: "~45 KIAS" },
        { action: "Climb", expected: "STEEP ANGLE" },
      ]},
      { phase: "Cruise", items: [
        { action: "Power", expected: "SET CRUISE" },
        { action: "Fuel", expected: "MONITOR" },
      ]},
      { phase: "Approach & Landing", items: [
        { action: "Flaps", expected: "FULL" },
        { action: "Speed", expected: "~50 KIAS" },
      ]},
      { phase: "Shutdown", items: [
        { action: "Condition Lever", expected: "FUEL CUTOFF" },
        { action: "Battery", expected: "OFF" },
      ]},
    ],
  },
  // ═══════════════════════════════════════════════════════════
  // EXTRA 330LT
  // ═══════════════════════════════════════════════════════════
  {
    id: "extra-330lt",
    name: "EXTRA 330LT",
    manufacturer: "Extra Aircraft",
    type: "aerobatic",
    imageEmoji: "🔄",
    checklists: [
      { phase: "Preflight", items: [
        { action: "Walk-Around", expected: "COMPLETE" },
        { action: "Fuel (aerobatic)", expected: "CHECK" },
        { action: "Oil", expected: "CHECK" },
        { action: "Smoke System", expected: "CHECK" },
        { action: "Harness", expected: "INSPECT" },
      ]},
      { phase: "Engine Start", items: [
        { action: "Mixture", expected: "RICH" },
        { action: "Fuel Pump", expected: "ON" },
        { action: "Starter", expected: "ENGAGE" },
        { action: "Oil Pressure", expected: "CHECK" },
      ]},
      { phase: "Before Takeoff", items: [
        { action: "Harness", expected: "TIGHT" },
        { action: "Controls", expected: "FREE & CORRECT" },
        { action: "Magnetos", expected: "CHECK" },
        { action: "Canopy", expected: "LOCKED" },
      ]},
      { phase: "Takeoff", items: [
        { action: "Throttle", expected: "FULL" },
        { action: "Rotate", expected: "60 KIAS" },
        { action: "Climb", expected: "100 KIAS" },
      ]},
      { phase: "Aerobatic Check", items: [
        { action: "Altitude", expected: ">3000 AGL" },
        { action: "Area", expected: "CLEAR" },
        { action: "Harness", expected: "TIGHT" },
      ]},
      { phase: "Approach & Landing", items: [
        { action: "Speed", expected: "75 KIAS" },
      ]},
      { phase: "Shutdown", items: [
        { action: "Mixture", expected: "IDLE CUT-OFF" },
        { action: "Magnetos", expected: "OFF" },
        { action: "Master", expected: "OFF" },
      ]},
    ],
  },
  // ═══════════════════════════════════════════════════════════
  // Erickson S-64F Aircrane
  // ═══════════════════════════════════════════════════════════
  {
    id: "s-64f",
    name: "Erickson S-64F Aircrane",
    manufacturer: "Erickson",
    type: "helicopter",
    imageEmoji: "🚁",
    checklists: [
      { phase: "Preflight", items: [
        { action: "Walk-Around", expected: "COMPLETE" },
        { action: "Rotor System", expected: "INSPECT" },
        { action: "Water Tank", expected: "CHECK / FILL" },
        { action: "Sling / Hook", expected: "INSPECT" },
        { action: "Engines (2x T73)", expected: "INSPECT" },
      ]},
      { phase: "Engine Start", items: [
        { action: "Battery", expected: "ON" },
        { action: "APU", expected: "START" },
        { action: "Engine 1+2", expected: "START" },
        { action: "Rotor RPM", expected: "100%" },
      ]},
      { phase: "Takeoff", items: [
        { action: "Collective", expected: "INCREASE" },
        { action: "Hover Check", expected: "POWER / LOAD" },
        { action: "Transition", expected: "FORWARD FLIGHT" },
      ]},
      { phase: "Water Drop / Sling Ops", items: [
        { action: "Target", expected: "IDENTIFY" },
        { action: "Water Tank", expected: "RELEASE" },
        { action: "Sling Load", expected: "RELEASE / PICK UP" },
      ]},
      { phase: "Landing", items: [
        { action: "Hover", expected: "STABILIZE" },
        { action: "Collective", expected: "LOWER" },
      ]},
      { phase: "Shutdown", items: [
        { action: "Engines", expected: "IDLE 2 MIN then OFF" },
        { action: "Rotor Brake", expected: "APPLY" },
        { action: "Battery", expected: "OFF" },
      ]},
    ],
  },
  // ═══════════════════════════════════════════════════════════
  // Flight Design CTSL
  // ═══════════════════════════════════════════════════════════
  {
    id: "ctsl",
    name: "Flight Design CTSL",
    manufacturer: "Flight Design",
    type: "ultralight",
    imageEmoji: "🪂",
    checklists: [
      { phase: "Preflight", items: [
        { action: "Walk-Around", expected: "COMPLETE" },
        { action: "Fuel", expected: "CHECK" },
        { action: "BRS (Parachute)", expected: "CHECK INDICATOR" },
        { action: "Control Surfaces", expected: "FREE & CORRECT" },
      ]},
      { phase: "Engine Start", items: [
        { action: "Master", expected: "ON" },
        { action: "Fuel Pump", expected: "ON" },
        { action: "Starter", expected: "ENGAGE" },
        { action: "RPM", expected: "CHECK IDLE" },
      ]},
      { phase: "Before Takeoff", items: [
        { action: "Controls", expected: "FREE & CORRECT" },
        { action: "Flaps", expected: "TAKEOFF (15°)" },
        { action: "BRS", expected: "ARMED" },
      ]},
      { phase: "Takeoff", items: [
        { action: "Throttle", expected: "FULL" },
        { action: "Rotate", expected: "45 KIAS" },
        { action: "Climb", expected: "65 KIAS" },
      ]},
      { phase: "Cruise", items: [
        { action: "Power", expected: "SET" },
        { action: "Trim", expected: "ADJUST" },
        { action: "Fuel", expected: "MONITOR" },
      ]},
      { phase: "Approach & Landing", items: [
        { action: "Flaps", expected: "FULL" },
        { action: "Speed", expected: "50 KIAS" },
      ]},
      { phase: "Shutdown", items: [
        { action: "Ignition", expected: "OFF" },
        { action: "Master", expected: "OFF" },
      ]},
    ],
  },
  // ═══════════════════════════════════════════════════════════
  // FlyDoo Hot Air Balloon
  // ═══════════════════════════════════════════════════════════
  {
    id: "flydoo-balloon",
    name: "FlyDoo Hot Air Balloon",
    manufacturer: "FlyDoo",
    type: "balloon",
    imageEmoji: "🎈",
    checklists: [
      { phase: "Pre-Inflation", items: [
        { action: "Wind Conditions", expected: "CHECK (<10 kt)" },
        { action: "Envelope", expected: "SPREAD & INSPECT" },
        { action: "Burner", expected: "CONNECT & TEST" },
        { action: "Fuel (Propane)", expected: "CHECK QUANTITY" },
      ]},
      { phase: "Inflation & Launch", items: [
        { action: "Fan", expected: "COLD INFLATE" },
        { action: "Burner", expected: "HEAT ENVELOPE" },
        { action: "Passengers", expected: "ABOARD & BRIEFED" },
        { action: "Tether", expected: "RELEASE" },
      ]},
      { phase: "Flight", items: [
        { action: "Altitude", expected: "CONTROL WITH BURNER" },
        { action: "Direction", expected: "VIA ALTITUDE (wind layers)" },
        { action: "Fuel", expected: "MONITOR" },
      ]},
      { phase: "Landing", items: [
        { action: "Landing Site", expected: "SELECT" },
        { action: "Vent", expected: "OPEN (descend)" },
        { action: "Passengers", expected: "BRACE" },
        { action: "Deflation Port", expected: "OPEN FULLY" },
      ]},
    ],
  },
  // ═══════════════════════════════════════════════════════════
  // Hot Air Balloon (Generic)
  // ═══════════════════════════════════════════════════════════
  {
    id: "hot-air-balloon",
    name: "Hot Air Balloon",
    manufacturer: "Various",
    type: "balloon",
    imageEmoji: "🎈",
    checklists: [
      { phase: "Pre-Inflation", items: [
        { action: "Weather / Wind", expected: "CHECK" },
        { action: "Envelope", expected: "INSPECT & SPREAD" },
        { action: "Basket & Burner", expected: "CONNECT" },
        { action: "Fuel", expected: "CHECK PROPANE" },
      ]},
      { phase: "Inflation & Launch", items: [
        { action: "Cold Inflate", expected: "FAN" },
        { action: "Burner", expected: "HEAT ENVELOPE" },
        { action: "Lines", expected: "RELEASE" },
      ]},
      { phase: "Flight", items: [
        { action: "Altitude", expected: "CONTROL (burner)" },
        { action: "Fuel", expected: "MONITOR" },
      ]},
      { phase: "Landing", items: [
        { action: "Site", expected: "SELECT" },
        { action: "Vent", expected: "OPEN (descend)" },
        { action: "Deflate", expected: "AFTER LANDING" },
      ]},
    ],
  },
  // ═══════════════════════════════════════════════════════════
  // Grumman G-21A Goose
  // ═══════════════════════════════════════════════════════════
  {
    id: "g21a-goose",
    name: "Grumman G-21A Goose",
    manufacturer: "Grumman",
    type: "amphibious",
    imageEmoji: "🌊",
    checklists: [
      { phase: "Preflight", items: [
        { action: "Walk-Around", expected: "COMPLETE" },
        { action: "Hull", expected: "INSPECT (no leaks)" },
        { action: "Fuel", expected: "CHECK BOTH" },
        { action: "Oil (both engines)", expected: "CHECK" },
      ]},
      { phase: "Engine Start", items: [
        { action: "Battery", expected: "ON" },
        { action: "Mixture L+R", expected: "RICH" },
        { action: "Primer L", expected: "3-5 STROKES" },
        { action: "Starter L", expected: "ENGAGE" },
        { action: "Repeat", expected: "RIGHT ENGINE" },
        { action: "Oil Pressure", expected: "CHECK BOTH" },
      ]},
      { phase: "Takeoff (Water)", items: [
        { action: "Gear", expected: "UP" },
        { action: "Throttles", expected: "FULL" },
        { action: "On Step", expected: "MAINTAIN" },
        { action: "Rotate", expected: "AT SPEED" },
        { action: "Flaps", expected: "RETRACT" },
      ]},
      { phase: "Cruise", items: [
        { action: "Power", expected: "SET (both)" },
        { action: "Mixture", expected: "LEAN" },
        { action: "Fuel", expected: "MONITOR" },
      ]},
      { phase: "Approach & Landing", items: [
        { action: "Gear", expected: "DOWN (land) / UP (water)" },
        { action: "Flaps", expected: "FULL" },
        { action: "Speed", expected: "~75 MPH" },
      ]},
      { phase: "Shutdown", items: [
        { action: "Mixture", expected: "IDLE CUT-OFF (both)" },
        { action: "Magnetos", expected: "OFF" },
        { action: "Battery", expected: "OFF" },
      ]},
    ],
  },
  // ═══════════════════════════════════════════════════════════
  // Guimbal Cabri G2
  // ═══════════════════════════════════════════════════════════
  {
    id: "cabri-g2",
    name: "Guimbal Cabri G2",
    manufacturer: "Guimbal",
    type: "helicopter",
    imageEmoji: "🚁",
    checklists: [
      { phase: "Preflight", items: [
        { action: "Walk-Around", expected: "COMPLETE" },
        { action: "Fuel", expected: "CHECK" },
        { action: "Rotor / Fenestron", expected: "INSPECT" },
        { action: "VEMD", expected: "CHECK" },
      ]},
      { phase: "Engine Start", items: [
        { action: "Battery", expected: "ON" },
        { action: "Beacon", expected: "ON" },
        { action: "Throttle", expected: "IDLE STOP" },
        { action: "Starter", expected: "PRESS" },
        { action: "Alternator", expected: "ON" },
      ]},
      { phase: "Takeoff", items: [
        { action: "Throttle", expected: "FULL OPEN (governor)" },
        { action: "Nr", expected: "510 RPM" },
        { action: "Collective", expected: "INCREASE" },
        { action: "Hover", expected: "STABILIZE" },
      ]},
      { phase: "Cruise", items: [
        { action: "Airspeed", expected: "SET" },
        { action: "Fuel", expected: "MONITOR" },
      ]},
      { phase: "Landing", items: [
        { action: "Hover", expected: "STABILIZE" },
        { action: "Collective", expected: "LOWER" },
      ]},
      { phase: "Shutdown", items: [
        { action: "Throttle", expected: "IDLE then CUTOFF" },
        { action: "Battery", expected: "OFF" },
      ]},
    ],
  },
  // ═══════════════════════════════════════════════════════════
  // Heart Aerospace ES-30
  // ═══════════════════════════════════════════════════════════
  {
    id: "es-30",
    name: "Heart Aerospace ES-30",
    manufacturer: "Heart Aerospace",
    type: "airliner",
    imageEmoji: "⚡",
    checklists: [
      { phase: "Cockpit Preparation", items: [
        { action: "Battery / Hybrid System", expected: "ON" },
        { action: "Battery SOC", expected: "CHECK" },
        { action: "Range Extender (turbine)", expected: "STANDBY" },
        { action: "Avionics", expected: "INITIALIZE" },
        { action: "Flight Plan", expected: "LOAD" },
      ]},
      { phase: "Motor Start", items: [
        { action: "Electric Motors", expected: "ARM" },
        { action: "Motor Self-Test", expected: "PASS" },
        { action: "Turbine Range Extender", expected: "START (if needed)" },
      ]},
      { phase: "Before Takeoff", items: [
        { action: "Flight Controls", expected: "CHECK" },
        { action: "Flaps", expected: "TAKEOFF" },
        { action: "Trim", expected: "SET" },
        { action: "Lights", expected: "ON" },
      ]},
      { phase: "Takeoff", items: [
        { action: "Power", expected: "TAKEOFF (electric)" },
        { action: "Rotate", expected: "AT SPEED" },
        { action: "Gear", expected: "UP" },
      ]},
      { phase: "Cruise", items: [
        { action: "Power Mode", expected: "ELECTRIC or HYBRID" },
        { action: "Battery SOC", expected: "MONITOR" },
      ]},
      { phase: "Approach & Landing", items: [
        { action: "Gear", expected: "DOWN" },
        { action: "Flaps", expected: "FULL" },
        { action: "Landing Lights", expected: "ON" },
      ]},
      { phase: "Shutdown", items: [
        { action: "Motors", expected: "OFF" },
        { action: "Range Extender", expected: "OFF" },
        { action: "Battery", expected: "SAFE MODE" },
      ]},
    ],
  },
  // ═══════════════════════════════════════════════════════════
  // Hughes H-4 Hercules (Spruce Goose)
  // ═══════════════════════════════════════════════════════════
  {
    id: "h4-hercules",
    name: "Hughes H-4 Hercules (Spruce Goose)",
    manufacturer: "Hughes Aircraft",
    type: "historic",
    imageEmoji: "🏛️",
    checklists: [
      { phase: "Preflight", items: [
        { action: "Walk-Around (massive)", expected: "COMPLETE" },
        { action: "All 8 Engines (R-4360)", expected: "INSPECT" },
        { action: "Hull", expected: "CHECK" },
        { action: "Fuel (all tanks)", expected: "CHECK" },
      ]},
      { phase: "Engine Start (8 Engines)", items: [
        { action: "Engines 1-8", expected: "START SEQUENTIALLY" },
        { action: "Oil Pressure (each)", expected: "CHECK" },
        { action: "Magnetos (each)", expected: "CHECK" },
      ]},
      { phase: "Takeoff (Water)", items: [
        { action: "Throttles (all 8)", expected: "FULL POWER" },
        { action: "On Step", expected: "MAINTAIN" },
        { action: "Rotate", expected: "GENTLE BACK PRESSURE" },
        { action: "Altitude", expected: "70 FEET (historic max)" },
      ]},
      { phase: "Landing", items: [
        { action: "Throttles", expected: "REDUCE" },
        { action: "Hull Contact", expected: "WATER" },
      ]},
      { phase: "Shutdown", items: [
        { action: "All Engines", expected: "MIXTURE CUT-OFF" },
        { action: "Magnetos", expected: "OFF (all)" },
        { action: "Battery", expected: "OFF" },
      ]},
    ],
  },
  // ═══════════════════════════════════════════════════════════
  // ICON A5
  // ═══════════════════════════════════════════════════════════
  {
    id: "icon-a5",
    name: "ICON Aircraft ICON A5",
    manufacturer: "ICON Aircraft",
    type: "amphibious",
    imageEmoji: "🌊",
    checklists: [
      { phase: "Preflight", items: [
        { action: "Walk-Around", expected: "COMPLETE" },
        { action: "Fuel", expected: "CHECK" },
        { action: "Hull / Floats", expected: "INSPECT" },
        { action: "Folding Wings", expected: "LOCKED" },
        { action: "AOA Indicator", expected: "CHECK" },
      ]},
      { phase: "Engine Start", items: [
        { action: "Master", expected: "ON" },
        { action: "Fuel Pump", expected: "ON" },
        { action: "Starter", expected: "ENGAGE" },
        { action: "RPM", expected: "CHECK IDLE" },
      ]},
      { phase: "Takeoff", items: [
        { action: "Throttle", expected: "FULL" },
        { action: "Rotate", expected: "~45 KIAS" },
        { action: "Climb", expected: "65 KIAS" },
      ]},
      { phase: "Cruise", items: [
        { action: "Power", expected: "SET" },
        { action: "AOA", expected: "MONITOR" },
        { action: "Fuel", expected: "MONITOR" },
      ]},
      { phase: "Approach & Landing", items: [
        { action: "Gear", expected: "AS REQUIRED" },
        { action: "Flaps", expected: "FULL" },
        { action: "Speed", expected: "50 KIAS" },
      ]},
      { phase: "Shutdown", items: [
        { action: "Ignition", expected: "OFF" },
        { action: "Master", expected: "OFF" },
      ]},
    ],
  },
  // ═══════════════════════════════════════════════════════════
  // JMB Aircraft VL-3
  // ═══════════════════════════════════════════════════════════
  {
    id: "vl-3",
    name: "JMB Aircraft VL-3",
    manufacturer: "JMB Aircraft",
    type: "ultralight",
    imageEmoji: "🪂",
    checklists: [
      { phase: "Preflight", items: [
        { action: "Walk-Around", expected: "COMPLETE" },
        { action: "Fuel", expected: "CHECK" },
        { action: "BRS", expected: "CHECK" },
        { action: "Controls", expected: "FREE & CORRECT" },
      ]},
      { phase: "Engine Start", items: [
        { action: "Master", expected: "ON" },
        { action: "Fuel Pump", expected: "ON" },
        { action: "Starter", expected: "ENGAGE" },
      ]},
      { phase: "Takeoff", items: [
        { action: "Throttle", expected: "FULL" },
        { action: "Rotate", expected: "55 KIAS" },
        { action: "Gear", expected: "UP" },
      ]},
      { phase: "Cruise", items: [
        { action: "Power", expected: "SET" },
        { action: "Fuel", expected: "MONITOR" },
      ]},
      { phase: "Approach & Landing", items: [
        { action: "Gear", expected: "DOWN" },
        { action: "Flaps", expected: "FULL" },
        { action: "Speed", expected: "55 KIAS" },
      ]},
      { phase: "Shutdown", items: [
        { action: "Ignition", expected: "OFF" },
        { action: "Master", expected: "OFF" },
      ]},
    ],
  },
  // ═══════════════════════════════════════════════════════════
  // Jetson ONE
  // ═══════════════════════════════════════════════════════════
  {
    id: "jetson-one",
    name: "Jetson ONE",
    manufacturer: "Jetson",
    type: "evtol",
    imageEmoji: "⚡",
    checklists: [
      { phase: "Preflight", items: [
        { action: "Battery SOC", expected: "CHECK" },
        { action: "Rotors (8)", expected: "INSPECT" },
        { action: "Harness", expected: "CHECK" },
        { action: "Sensors", expected: "CHECK" },
      ]},
      { phase: "Power Up", items: [
        { action: "Master Switch", expected: "ON" },
        { action: "System Self-Test", expected: "PASS" },
        { action: "Harness", expected: "FASTENED" },
      ]},
      { phase: "Flight", items: [
        { action: "Throttle", expected: "INCREASE" },
        { action: "Hover", expected: "STABILIZE (auto)" },
        { action: "Battery", expected: "MONITOR" },
      ]},
      { phase: "Landing", items: [
        { action: "Hover", expected: "STABILIZE" },
        { action: "Throttle", expected: "REDUCE TO LAND" },
        { action: "Master", expected: "OFF" },
      ]},
    ],
  },
  // ═══════════════════════════════════════════════════════════
  // Joby S4
  // ═══════════════════════════════════════════════════════════
  {
    id: "joby-s4",
    name: "Joby Aviation Joby S4",
    manufacturer: "Joby Aviation",
    type: "evtol",
    imageEmoji: "⚡",
    checklists: [
      { phase: "Preflight", items: [
        { action: "Battery SOC", expected: "CHECK" },
        { action: "Tilt-Rotors (6)", expected: "INSPECT" },
        { action: "Flight Computer", expected: "SELF-TEST" },
        { action: "External Inspection", expected: "COMPLETE" },
      ]},
      { phase: "Power Up", items: [
        { action: "Master Power", expected: "ON" },
        { action: "Motor Controllers", expected: "ONLINE" },
        { action: "Flight Plan", expected: "LOADED" },
        { action: "Doors", expected: "CLOSED" },
      ]},
      { phase: "Takeoff (Vertical)", items: [
        { action: "Rotors", expected: "VERTICAL MODE" },
        { action: "Thrust", expected: "INCREASE" },
        { action: "Hover", expected: "STABILIZE" },
        { action: "Transition", expected: "TILT TO CRUISE" },
      ]},
      { phase: "Cruise", items: [
        { action: "Speed", expected: "SET" },
        { action: "Battery SOC", expected: "MONITOR" },
      ]},
      { phase: "Landing", items: [
        { action: "Rotors", expected: "TRANSITION VERTICAL" },
        { action: "Hover", expected: "STABILIZE" },
        { action: "Descend", expected: "LAND" },
        { action: "Master", expected: "OFF" },
      ]},
    ],
  },
  // ═══════════════════════════════════════════════════════════
  // MX Aircraft MXS-R
  // ═══════════════════════════════════════════════════════════
  {
    id: "mxs-r",
    name: "MX Aircraft MXS-R",
    manufacturer: "MX Aircraft",
    type: "aerobatic",
    imageEmoji: "🔄",
    checklists: [
      { phase: "Preflight", items: [
        { action: "Walk-Around", expected: "COMPLETE" },
        { action: "Fuel (aerobatic)", expected: "CHECK" },
        { action: "Harness", expected: "INSPECT" },
      ]},
      { phase: "Engine Start", items: [
        { action: "Mixture", expected: "RICH" },
        { action: "Starter", expected: "ENGAGE" },
        { action: "Oil Pressure", expected: "CHECK" },
      ]},
      { phase: "Before Takeoff", items: [
        { action: "Harness", expected: "TIGHT" },
        { action: "Controls", expected: "FREE & CORRECT" },
        { action: "Magnetos", expected: "CHECK" },
        { action: "Canopy", expected: "LOCKED" },
      ]},
      { phase: "Takeoff", items: [
        { action: "Throttle", expected: "FULL" },
        { action: "Rotate", expected: "65 KIAS" },
        { action: "Climb", expected: "110 KIAS" },
      ]},
      { phase: "Aerobatic Check", items: [
        { action: "Altitude", expected: ">3000 AGL" },
        { action: "Area", expected: "CLEAR" },
        { action: "Harness", expected: "TIGHT" },
      ]},
      { phase: "Approach & Landing", items: [
        { action: "Speed", expected: "80 KIAS" },
      ]},
      { phase: "Shutdown", items: [
        { action: "Mixture", expected: "IDLE CUT-OFF" },
        { action: "Magnetos", expected: "OFF" },
        { action: "Master", expected: "OFF" },
      ]},
    ],
  },
  // ═══════════════════════════════════════════════════════════
  // Magni Gyro M-24 Orion
  // ═══════════════════════════════════════════════════════════
  {
    id: "m24-orion",
    name: "Magni Gyro M-24 Orion",
    manufacturer: "Magni Gyro",
    type: "gyrocopter",
    imageEmoji: "🌀",
    checklists: [
      { phase: "Preflight", items: [
        { action: "Rotor Blades", expected: "INSPECT" },
        { action: "Propeller", expected: "INSPECT" },
        { action: "Fuel", expected: "CHECK" },
        { action: "Controls", expected: "CHECK" },
      ]},
      { phase: "Engine Start", items: [
        { action: "Master", expected: "ON" },
        { action: "Starter", expected: "ENGAGE" },
        { action: "Oil Pressure", expected: "CHECK" },
      ]},
      { phase: "Takeoff", items: [
        { action: "Rotor Pre-Rotate", expected: "ENGAGE" },
        { action: "Throttle", expected: "FULL" },
        { action: "Lift Off", expected: "~35 MPH" },
      ]},
      { phase: "Cruise", items: [
        { action: "Power", expected: "SET" },
        { action: "Rotor RPM", expected: "MONITOR" },
        { action: "Fuel", expected: "MONITOR" },
      ]},
      { phase: "Landing", items: [
        { action: "Throttle", expected: "REDUCE" },
        { action: "Speed", expected: "~40 MPH" },
        { action: "Flare", expected: "GENTLY" },
      ]},
      { phase: "Shutdown", items: [
        { action: "Ignition", expected: "OFF" },
        { action: "Master", expected: "OFF" },
      ]},
    ],
  },
  // ═══════════════════════════════════════════════════════════
  // North American T-6 Texan
  // ═══════════════════════════════════════════════════════════
  {
    id: "t6-texan",
    name: "North American T-6 Texan",
    manufacturer: "North American",
    type: "historic",
    imageEmoji: "🏛️",
    checklists: [
      { phase: "Preflight", items: [
        { action: "Walk-Around", expected: "COMPLETE" },
        { action: "Fuel", expected: "CHECK" },
        { action: "Oil (R-1340)", expected: "CHECK" },
        { action: "Hydraulic Fluid", expected: "CHECK" },
        { action: "Prop", expected: "INSPECT" },
      ]},
      { phase: "Engine Start", items: [
        { action: "Battery", expected: "ON" },
        { action: "Mixture", expected: "RICH" },
        { action: "Primer", expected: "3-5 STROKES" },
        { action: "Starter", expected: "ENGAGE & MESH" },
        { action: "Oil Pressure", expected: "CHECK (30 sec)" },
      ]},
      { phase: "Before Takeoff", items: [
        { action: "Controls", expected: "FREE & CORRECT" },
        { action: "Trim", expected: "SET (right rudder)" },
        { action: "Prop", expected: "CYCLE" },
        { action: "Magnetos", expected: "CHECK" },
        { action: "Canopy", expected: "LOCKED" },
      ]},
      { phase: "Takeoff", items: [
        { action: "Throttle", expected: "FULL" },
        { action: "Rudder", expected: "MAINTAIN CENTERLINE (torque!)" },
        { action: "Rotate", expected: "~70 MPH" },
        { action: "Gear", expected: "UP" },
        { action: "Climb", expected: "~110 MPH" },
      ]},
      { phase: "Cruise", items: [
        { action: "Power", expected: "SET (30\"/1850 RPM)" },
        { action: "Mixture", expected: "LEAN" },
        { action: "Fuel", expected: "MONITOR" },
      ]},
      { phase: "Approach & Landing", items: [
        { action: "Mixture", expected: "RICH" },
        { action: "Gear", expected: "DOWN" },
        { action: "Flaps", expected: "FULL" },
        { action: "Speed", expected: "~80 MPH" },
      ]},
      { phase: "Shutdown", items: [
        { action: "Mixture", expected: "IDLE CUT-OFF" },
        { action: "Magnetos", expected: "OFF" },
        { action: "Battery", expected: "OFF" },
      ]},
    ],
  },
  // ═══════════════════════════════════════════════════════════
  // Pilatus PC-12 NGX
  // ═══════════════════════════════════════════════════════════
  {
    id: "pc-12-ngx",
    name: "Pilatus PC-12 NGX",
    manufacturer: "Pilatus",
    type: "turboprop",
    imageEmoji: "🛫",
    checklists: [
      { phase: "Preflight", items: [
        { action: "Walk-Around", expected: "COMPLETE" },
        { action: "Fuel", expected: "CHECK" },
        { action: "Battery Voltage", expected: "CHECK (≥24V)" },
        { action: "Cargo Door", expected: "SECURE" },
      ]},
      { phase: "Engine Start", items: [
        { action: "Battery / Generator", expected: "ON" },
        { action: "Beacon", expected: "ON" },
        { action: "Condition Lever", expected: "FUEL CUTOFF" },
        { action: "Starter", expected: "ON" },
        { action: "Condition Lever", expected: "LOW IDLE (Ng 13%)" },
        { action: "ITT", expected: "MONITOR" },
        { action: "Oil Pressure", expected: "GREEN" },
        { action: "Avionics", expected: "ON" },
      ]},
      { phase: "Before Takeoff", items: [
        { action: "Controls", expected: "FREE & CORRECT" },
        { action: "Trim", expected: "SET" },
        { action: "Flaps", expected: "15°" },
        { action: "Condition Lever", expected: "MAX RPM" },
        { action: "Pressurization", expected: "SET" },
        { action: "Lights", expected: "ON" },
      ]},
      { phase: "Takeoff", items: [
        { action: "Power Lever", expected: "TAKEOFF" },
        { action: "Rotate", expected: "80 KIAS" },
        { action: "Gear", expected: "UP" },
        { action: "Flaps", expected: "RETRACT" },
        { action: "Climb", expected: "120 KIAS" },
      ]},
      { phase: "Cruise", items: [
        { action: "Power", expected: "SET CRUISE" },
        { action: "Autopilot", expected: "ENGAGE" },
        { action: "Fuel", expected: "MONITOR" },
        { action: "Pressurization", expected: "CHECK" },
      ]},
      { phase: "Approach & Landing", items: [
        { action: "Gear", expected: "DOWN" },
        { action: "Flaps", expected: "40°" },
        { action: "Speed", expected: "90 KIAS" },
        { action: "Landing Light", expected: "ON" },
      ]},
      { phase: "Shutdown", items: [
        { action: "Condition Lever", expected: "FUEL CUTOFF" },
        { action: "Avionics", expected: "OFF" },
        { action: "Battery", expected: "OFF" },
      ]},
    ],
  },
  // ═══════════════════════════════════════════════════════════
  // Powrachute Sky Rascal
  // ═══════════════════════════════════════════════════════════
  {
    id: "sky-rascal",
    name: "Powrachute Sky Rascal",
    manufacturer: "Powrachute",
    type: "ultralight",
    imageEmoji: "🪂",
    checklists: [
      { phase: "Preflight", items: [
        { action: "Chute", expected: "INSPECT & SPREAD" },
        { action: "Lines", expected: "NO TANGLES" },
        { action: "Engine", expected: "CHECK" },
        { action: "Fuel", expected: "CHECK" },
      ]},
      { phase: "Launch", items: [
        { action: "Engine", expected: "START & WARM" },
        { action: "Wind", expected: "INTO WIND" },
        { action: "Throttle", expected: "FULL" },
        { action: "Chute Inflates", expected: "OVERHEAD" },
        { action: "Lift Off", expected: "~25 MPH" },
      ]},
      { phase: "Flight", items: [
        { action: "Altitude", expected: "SET" },
        { action: "Throttle", expected: "CRUISE" },
        { action: "Fuel", expected: "MONITOR" },
      ]},
      { phase: "Landing", items: [
        { action: "Into Wind", expected: "ALIGN" },
        { action: "Throttle", expected: "REDUCE" },
        { action: "Flare", expected: "BRAKES AT 10 FT" },
        { action: "Engine", expected: "OFF" },
      ]},
    ],
  },
  // ═══════════════════════════════════════════════════════════
  // Robin CAP 10
  // ═══════════════════════════════════════════════════════════
  {
    id: "cap-10",
    name: "Robin CAP 10",
    manufacturer: "Robin Aircraft",
    type: "aerobatic",
    imageEmoji: "🔄",
    checklists: [
      { phase: "Preflight", items: [
        { action: "Walk-Around", expected: "COMPLETE" },
        { action: "Fuel (aerobatic)", expected: "CHECK" },
        { action: "Harness", expected: "INSPECT" },
      ]},
      { phase: "Engine Start", items: [
        { action: "Mixture", expected: "RICH" },
        { action: "Magnetos", expected: "BOTH" },
        { action: "Starter", expected: "ENGAGE" },
        { action: "Oil Pressure", expected: "CHECK" },
      ]},
      { phase: "Before Takeoff", items: [
        { action: "Harness", expected: "TIGHT" },
        { action: "Controls", expected: "FREE & CORRECT" },
        { action: "Magnetos", expected: "CHECK" },
        { action: "Canopy", expected: "LOCKED" },
      ]},
      { phase: "Takeoff", items: [
        { action: "Throttle", expected: "FULL" },
        { action: "Rotate", expected: "55 KIAS" },
        { action: "Climb", expected: "75 KIAS" },
      ]},
      { phase: "Aerobatic Check", items: [
        { action: "Altitude", expected: ">3000 AGL" },
        { action: "Area", expected: "CLEAR" },
        { action: "Harness", expected: "TIGHT" },
      ]},
      { phase: "Approach & Landing", items: [
        { action: "Speed", expected: "65 KIAS" },
      ]},
      { phase: "Shutdown", items: [
        { action: "Mixture", expected: "IDLE CUT-OFF" },
        { action: "Magnetos", expected: "OFF" },
        { action: "Master", expected: "OFF" },
      ]},
    ],
  },
  // ═══════════════════════════════════════════════════════════
  // Robin DR400-100 Cadet
  // ═══════════════════════════════════════════════════════════
  {
    id: "dr400-100",
    name: "Robin DR400-100 Cadet",
    manufacturer: "Robin Aircraft",
    type: "single-prop",
    imageEmoji: "🛩️",
    checklists: [
      { phase: "Preflight", items: [
        { action: "Walk-Around", expected: "COMPLETE" },
        { action: "Fuel", expected: "CHECK" },
        { action: "Oil", expected: "CHECK" },
        { action: "Canopy", expected: "CLEAN" },
      ]},
      { phase: "Engine Start", items: [
        { action: "Mixture", expected: "RICH" },
        { action: "Carb Heat", expected: "COLD" },
        { action: "Primer", expected: "AS REQUIRED" },
        { action: "Starter", expected: "ENGAGE" },
        { action: "Oil Pressure", expected: "CHECK" },
      ]},
      { phase: "Before Takeoff", items: [
        { action: "Controls", expected: "FREE & CORRECT" },
        { action: "Magnetos", expected: "CHECK" },
        { action: "Trim", expected: "SET" },
        { action: "Canopy", expected: "LOCKED" },
      ]},
      { phase: "Takeoff", items: [
        { action: "Throttle", expected: "FULL" },
        { action: "Rotate", expected: "55 KIAS" },
        { action: "Climb", expected: "65 KIAS" },
      ]},
      { phase: "Cruise", items: [
        { action: "Power", expected: "SET" },
        { action: "Mixture", expected: "LEAN" },
        { action: "Fuel", expected: "MONITOR" },
      ]},
      { phase: "Approach & Landing", items: [
        { action: "Mixture", expected: "RICH" },
        { action: "Carb Heat", expected: "ON" },
        { action: "Speed", expected: "60 KIAS" },
      ]},
      { phase: "Shutdown", items: [
        { action: "Mixture", expected: "IDLE CUT-OFF" },
        { action: "Magnetos", expected: "OFF" },
        { action: "Master", expected: "OFF" },
      ]},
    ],
  },
  // ═══════════════════════════════════════════════════════════
  // Robinson R66 Turbine
  // ═══════════════════════════════════════════════════════════
  {
    id: "r66",
    name: "Robinson R66 Turbine",
    manufacturer: "Robinson",
    type: "helicopter",
    imageEmoji: "🚁",
    checklists: [
      { phase: "Preflight", items: [
        { action: "Walk-Around", expected: "COMPLETE" },
        { action: "Fuel", expected: "CHECK" },
        { action: "Rotor / Tail", expected: "INSPECT" },
      ]},
      { phase: "Engine Start", items: [
        { action: "Battery", expected: "ON" },
        { action: "Beacon", expected: "ON" },
        { action: "Clutch", expected: "ENGAGE" },
        { action: "Starter", expected: "PRESS" },
        { action: "TOT / Ng", expected: "MONITOR" },
        { action: "Generator", expected: "ON" },
      ]},
      { phase: "Before Takeoff", items: [
        { action: "Throttle", expected: "FULL OPEN (governor)" },
        { action: "Nr", expected: "104%" },
        { action: "Controls", expected: "CHECK" },
        { action: "Doors", expected: "CLOSED" },
      ]},
      { phase: "Takeoff", items: [
        { action: "Collective", expected: "INCREASE" },
        { action: "Hover Check", expected: "POWER CHECK" },
        { action: "Transition", expected: "FORWARD" },
      ]},
      { phase: "Cruise", items: [
        { action: "Airspeed", expected: "SET" },
        { action: "Fuel", expected: "MONITOR" },
        { action: "TOT / Torque", expected: "MONITOR" },
      ]},
      { phase: "Landing", items: [
        { action: "Hover", expected: "STABILIZE" },
        { action: "Collective", expected: "LOWER" },
      ]},
      { phase: "Shutdown", items: [
        { action: "Throttle", expected: "IDLE 2 MIN" },
        { action: "Throttle", expected: "CUTOFF" },
        { action: "Battery", expected: "OFF" },
      ]},
    ],
  },
  // ═══════════════════════════════════════════════════════════
  // Ryan NYP Spirit of St. Louis
  // ═══════════════════════════════════════════════════════════
  {
    id: "ryan-nyp",
    name: "Ryan NYP 'Spirit of St. Louis'",
    manufacturer: "Ryan Aeronautical",
    type: "historic",
    imageEmoji: "🏛️",
    checklists: [
      { phase: "Preflight", items: [
        { action: "Fabric / Wire", expected: "INSPECT" },
        { action: "Fuel (all tanks)", expected: "CHECK" },
        { action: "Oil (J-5C Whirlwind)", expected: "CHECK" },
        { action: "Periscope", expected: "CHECK (no forward window)" },
        { action: "Earth Inductor Compass", expected: "SET" },
      ]},
      { phase: "Engine Start", items: [
        { action: "Fuel Valve", expected: "ON" },
        { action: "Mixture", expected: "RICH" },
        { action: "Magneto", expected: "ON" },
        { action: "Propeller", expected: "ENGAGE" },
        { action: "Oil Pressure", expected: "CHECK" },
      ]},
      { phase: "Takeoff", items: [
        { action: "Throttle", expected: "FULL" },
        { action: "Rudder", expected: "MAINTAIN DIRECTION" },
        { action: "Lift Off", expected: "HEAVY (long roll)" },
      ]},
      { phase: "Cruise", items: [
        { action: "Fuel Tank", expected: "ROTATE (balance)" },
        { action: "Compass", expected: "MONITOR" },
        { action: "Oil / Temp", expected: "MONITOR" },
      ]},
      { phase: "Landing", items: [
        { action: "Periscope", expected: "USE" },
        { action: "Three-Point", expected: "TOUCHDOWN" },
      ]},
      { phase: "Shutdown", items: [
        { action: "Mixture", expected: "CUT-OFF" },
        { action: "Magneto", expected: "OFF" },
        { action: "Fuel Valve", expected: "OFF" },
      ]},
    ],
  },
  // ═══════════════════════════════════════════════════════════
  // Stemme S12G
  // ═══════════════════════════════════════════════════════════
  {
    id: "s12g",
    name: "Stemme S12G",
    manufacturer: "Stemme",
    type: "glider",
    imageEmoji: "🪶",
    checklists: [
      { phase: "Preflight", items: [
        { action: "Walk-Around", expected: "COMPLETE" },
        { action: "Fuel", expected: "CHECK" },
        { action: "Motor (retractable prop)", expected: "CHECK" },
        { action: "Canopy", expected: "CLEAN" },
      ]},
      { phase: "Engine Start (Self-Launch)", items: [
        { action: "Propeller", expected: "EXTEND" },
        { action: "Starter", expected: "ENGAGE" },
        { action: "Oil Pressure", expected: "CHECK" },
      ]},
      { phase: "Takeoff (Powered)", items: [
        { action: "Throttle", expected: "FULL" },
        { action: "Rotate", expected: "~50 KIAS" },
        { action: "Climb", expected: "~65 KIAS" },
      ]},
      { phase: "Transition to Soaring", items: [
        { action: "Engine", expected: "OFF" },
        { action: "Propeller", expected: "RETRACT & STOW" },
        { action: "Speed", expected: "SET (best L/D)" },
      ]},
      { phase: "Soaring", items: [
        { action: "Thermals", expected: "SEEK" },
        { action: "Vario", expected: "MONITOR" },
        { action: "Flap Setting", expected: "PER SPEED" },
      ]},
      { phase: "Approach & Landing", items: [
        { action: "Airbrakes", expected: "AS REQUIRED" },
        { action: "Speed", expected: "55 KIAS" },
        { action: "Wheel Brake", expected: "AFTER TOUCHDOWN" },
      ]},
    ],
  },
  // ═══════════════════════════════════════════════════════════
  // Volocopter VoloCity
  // ═══════════════════════════════════════════════════════════
  {
    id: "volocity",
    name: "Volocopter VoloCity",
    manufacturer: "Volocopter",
    type: "evtol",
    imageEmoji: "⚡",
    checklists: [
      { phase: "Preflight", items: [
        { action: "Battery SOC", expected: "CHECK" },
        { action: "Rotors (18)", expected: "INSPECT" },
        { action: "Flight Computer", expected: "SELF-TEST" },
      ]},
      { phase: "Power Up", items: [
        { action: "Master Power", expected: "ON" },
        { action: "Motor Controllers", expected: "ONLINE" },
        { action: "Navigation", expected: "LOADED" },
        { action: "Doors", expected: "CLOSED" },
      ]},
      { phase: "Flight", items: [
        { action: "All Rotors", expected: "ARMED" },
        { action: "Thrust", expected: "INCREASE" },
        { action: "Speed", expected: "SET" },
        { action: "Battery SOC", expected: "MONITOR" },
      ]},
      { phase: "Landing", items: [
        { action: "Hover", expected: "STABILIZE" },
        { action: "Descend", expected: "SLOWLY" },
        { action: "Motors", expected: "OFF" },
        { action: "Master", expected: "OFF" },
      ]},
    ],
  },
  // ═══════════════════════════════════════════════════════════
  // Wright Flyer
  // ═══════════════════════════════════════════════════════════
  {
    id: "wright-flyer",
    name: "Wright Flyer",
    manufacturer: "Wright Cycle Company",
    type: "historic",
    imageEmoji: "🏛️",
    checklists: [
      { phase: "Preflight", items: [
        { action: "Fabric & Wood", expected: "INSPECT" },
        { action: "Wires", expected: "CHECK TENSION" },
        { action: "Chain Drive", expected: "CHECK" },
        { action: "Launch Rail", expected: "ALIGNED INTO WIND" },
        { action: "Catapult Weight", expected: "READY" },
      ]},
      { phase: "Launch", items: [
        { action: "Engine", expected: "HAND START" },
        { action: "Pilot", expected: "PRONE POSITION" },
        { action: "Catapult", expected: "RELEASE" },
        { action: "Elevator (front)", expected: "LIFT" },
      ]},
      { phase: "Flight", items: [
        { action: "Elevator (canard)", expected: "PITCH CONTROL" },
        { action: "Wing Warp (hip)", expected: "ROLL CONTROL" },
        { action: "Altitude", expected: "MAINTAIN (~10 ft)" },
      ]},
      { phase: "Landing", items: [
        { action: "Elevator", expected: "NOSE DOWN SLIGHTLY" },
        { action: "Skids", expected: "GROUND CONTACT" },
        { action: "Engine", expected: "OFF" },
      ]},
    ],
  },
  // ═══════════════════════════════════════════════════════════
  // Zivko Edge 540
  // ═══════════════════════════════════════════════════════════
  {
    id: "edge-540",
    name: "Zivko Edge 540",
    manufacturer: "Zivko Aeronautics",
    type: "aerobatic",
    imageEmoji: "🔄",
    checklists: [
      { phase: "Preflight", items: [
        { action: "Walk-Around", expected: "COMPLETE" },
        { action: "Fuel (aerobatic)", expected: "CHECK" },
        { action: "Smoke System", expected: "CHECK" },
        { action: "Harness", expected: "INSPECT" },
      ]},
      { phase: "Engine Start", items: [
        { action: "Mixture", expected: "RICH" },
        { action: "Starter", expected: "ENGAGE" },
        { action: "Oil Pressure", expected: "CHECK" },
      ]},
      { phase: "Takeoff", items: [
        { action: "Throttle", expected: "FULL" },
        { action: "Rotate", expected: "70 KIAS" },
        { action: "Climb", expected: "120 KIAS" },
      ]},
      { phase: "Aerobatic Check", items: [
        { action: "Altitude", expected: ">3000 AGL" },
        { action: "Area", expected: "CLEAR" },
        { action: "Smoke", expected: "ON (if desired)" },
      ]},
      { phase: "Landing", items: [
        { action: "Speed", expected: "80 KIAS" },
      ]},
      { phase: "Shutdown", items: [
        { action: "Mixture", expected: "IDLE CUT-OFF" },
        { action: "Magnetos", expected: "OFF" },
        { action: "Master", expected: "OFF" },
      ]},
    ],
  },
  // ═══════════════════════════════════════════════════════════
  // Zlin Aviation Savage Cub
  // ═══════════════════════════════════════════════════════════
  {
    id: "savage-cub",
    name: "Zlin Aviation Savage Cub",
    manufacturer: "Zlin Aviation",
    type: "ultralight",
    imageEmoji: "🏔️",
    checklists: [
      { phase: "Preflight", items: [
        { action: "Walk-Around", expected: "COMPLETE" },
        { action: "Fuel", expected: "CHECK" },
        { action: "Tires / Tailwheel", expected: "CHECK" },
        { action: "Controls", expected: "FREE & CORRECT" },
      ]},
      { phase: "Engine Start", items: [
        { action: "Master", expected: "ON" },
        { action: "Choke", expected: "AS REQUIRED" },
        { action: "Starter", expected: "ENGAGE" },
        { action: "RPM", expected: "CHECK IDLE" },
      ]},
      { phase: "Takeoff", items: [
        { action: "Throttle", expected: "FULL" },
        { action: "Tail Up", expected: "~25 KIAS" },
        { action: "Rotate", expected: "~35 KIAS" },
        { action: "Climb", expected: "50 KIAS" },
      ]},
      { phase: "Cruise", items: [
        { action: "Throttle", expected: "SET" },
        { action: "Fuel", expected: "MONITOR" },
      ]},
      { phase: "Landing", items: [
        { action: "Speed", expected: "~35 KIAS" },
        { action: "Three-Point", expected: "TOUCHDOWN" },
      ]},
      { phase: "Shutdown", items: [
        { action: "Ignition", expected: "OFF" },
        { action: "Master", expected: "OFF" },
      ]},
    ],
  },
];

export const aircraftTypes = [
  { value: "all", label: "All Aircraft" },
  { value: "single-prop", label: "Single Engine Piston" },
  { value: "twin-prop", label: "Twin Engine Piston" },
  { value: "turboprop", label: "Turboprop" },
  { value: "jet", label: "Business Jet" },
  { value: "airliner", label: "Airliner" },
  { value: "helicopter", label: "Helicopter" },
  { value: "military", label: "Military" },
  { value: "cargo", label: "Cargo" },
  { value: "aerobatic", label: "Aerobatic" },
  { value: "glider", label: "Glider" },
  { value: "ultralight", label: "Ultralight" },
  { value: "amphibious", label: "Amphibious" },
  { value: "evtol", label: "eVTOL" },
  { value: "balloon", label: "Balloon" },
  { value: "gyrocopter", label: "Gyrocopter" },
  { value: "historic", label: "Historic" },
] as const;
