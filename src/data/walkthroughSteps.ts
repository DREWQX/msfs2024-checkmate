// Walkthrough steps for each aircraft - step-by-step cockpit procedures
// Each step describes what to do with an optional image

export type WalkthroughStep = {
  step: number;
  title: string;
  description: string;
  imageUrl?: string; // Optional - can be uploaded later
};

// Generic walkthrough templates by aircraft type
const singlePropWalkthrough: WalkthroughStep[] = [
  { step: 1, title: "Exterior Walkaround", description: "Begin at the left side of the aircraft. Check the overall condition, look for any visible damage, fluid leaks, or loose panels. Check tire pressure and condition." },
  { step: 2, title: "Fuel Check", description: "Drain fuel samples from sumps to check for water contamination. Verify fuel quantity visually and compare with fuel gauges. Check fuel caps are secure." },
  { step: 3, title: "Control Surfaces", description: "Check ailerons, elevators, and rudder for free and correct movement. Inspect hinges, cables, and control rods. Ensure no obstructions." },
  { step: 4, title: "Engine Compartment", description: "Open cowling and check oil level. Inspect belts, hoses, and wiring. Look for bird nests, loose objects, or fluid leaks. Check air filter." },
  { step: 5, title: "Cockpit Setup", description: "Adjust seat and rudder pedals. Fasten seatbelt and shoulder harness. Set parking brake. Check all circuit breakers are in." },
  { step: 6, title: "Avionics Power Up", description: "Master switch ON. Check fuel gauges, oil pressure, and warning lights. Turn on avionics master. Set COM/NAV frequencies." },
  { step: 7, title: "Engine Start", description: "Mixture RICH. Fuel pump ON (if equipped). Primer as needed. Throttle slightly open. Yell 'CLEAR PROP' and engage starter." },
  { step: 8, title: "Post-Start Checks", description: "Check oil pressure rising within 30 seconds. Set RPM to 1000. Check ammeter for positive charge. Lean mixture for taxi if at altitude." },
  { step: 9, title: "Taxi & Run-Up", description: "Release parking brake. Taxi to runway using nosewheel steering and differential braking. At run-up area: check magnetos, carb heat, vacuum, and instruments." },
  { step: 10, title: "Takeoff", description: "Line up on centerline. Full throttle smoothly. Check engine instruments in the green. Rotate at Vr. Climb at Vy. Retract flaps when safe." },
];

const airlinerWalkthrough: WalkthroughStep[] = [
  { step: 1, title: "Flight Deck Preparation", description: "Enter the cockpit. Verify emergency equipment. Set up cockpit with charts, approach plates, and flight plan. Battery switch ON." },
  { step: 2, title: "Overhead Panel Setup", description: "Configure overhead panel from left to right. Set hydraulic pumps, electrical buses, air conditioning packs, and pressurization. Check fire detection systems." },
  { step: 3, title: "FMS Programming", description: "Enter flight plan into the Flight Management System. Input departure runway, SID, route, STAR, and approach. Verify waypoints and fuel predictions." },
  { step: 4, title: "Performance Calculations", description: "Calculate takeoff speeds (V1, Vr, V2) based on weight, temperature, and runway length. Set trim. Configure flex/derate thrust if applicable." },
  { step: 5, title: "Systems Checks", description: "Check flight controls for full and free movement. Test spoilers, flaps, and slats. Verify hydraulic pressures and brake accumulator. Check APU running." },
  { step: 6, title: "Engine Start", description: "Request pushback and engine start clearance. Start engines using APU bleed air. Monitor N1, N2, EGT, and oil pressure during start sequence." },
  { step: 7, title: "After Start & Taxi", description: "Configure flaps for takeoff. Set takeoff trim. Arm spoilers. Test flight controls. Request taxi clearance. Brief the departure." },
  { step: 8, title: "Before Takeoff", description: "Complete before-takeoff checklist. Verify takeoff configuration warning system. Set transponder. Arm auto-throttle. Select takeoff thrust mode." },
  { step: 9, title: "Takeoff Roll", description: "Advance thrust levers to TOGA or FLEX. Monitor engine parameters. PNF calls '80 knots', 'V1', 'Rotate'. Rotate smoothly to 15° pitch." },
  { step: 10, title: "Initial Climb", description: "Positive rate - gear up. Follow SID. Engage autopilot above 400ft AGL. Retract flaps on schedule. Set climb thrust. Contact departure." },
];

const helicopterWalkthrough: WalkthroughStep[] = [
  { step: 1, title: "Exterior Inspection", description: "Walk around checking main rotor blades, tail rotor, landing gear/skids. Check engine intakes for FOD. Verify fluid levels and check for leaks." },
  { step: 2, title: "Cockpit Setup", description: "Adjust seat and pedals. Strap in with 4/5-point harness. Check all circuit breakers. Set friction on collective and cyclic." },
  { step: 3, title: "Pre-Start", description: "Battery ON. Check caution/warning panel. Fuel quantity check. Set radio frequencies. Check weather and NOTAMs." },
  { step: 4, title: "Engine Start", description: "Throttle to idle detent. Engage starter. Monitor TOT/TGT, N1/Ng, and oil pressure. Allow engine to stabilize at ground idle." },
  { step: 5, title: "Rotor Engagement", description: "Increase throttle to flight idle. Main rotor begins turning. Monitor rotor RPM. Wait for rotors to reach operating speed. Check all instruments." },
  { step: 6, title: "Systems Check", description: "Check hydraulics, governor, and caution panel. Test instruments. Check cyclic, collective, and pedal response. Verify fuel flow." },
  { step: 7, title: "Hover Check", description: "Slowly raise collective while applying left pedal. Establish a 3-5ft hover. Check power margin. Note wind direction and hover attitude." },
  { step: 8, title: "Takeoff", description: "From hover, lower nose slightly with cyclic. As airspeed increases through ETL, adjust collective and pedals. Climb at best rate of climb speed." },
];

const militaryWalkthrough: WalkthroughStep[] = [
  { step: 1, title: "Crew Brief", description: "Review mission objectives, threat assessment, weather, and emergency procedures. Verify ordnance loading (if applicable). Check survival equipment." },
  { step: 2, title: "Exterior Inspection", description: "Thorough walkaround checking control surfaces, landing gear, weapons stations, engine intakes/exhausts. Check for FOD, leaks, and damage." },
  { step: 3, title: "Cockpit Entry & Strap-In", description: "Climb ladder, settle into ejection seat. Connect G-suit, oxygen mask, comm cord. Strap into ejection seat harness. Pin removal check." },
  { step: 4, title: "Power Up", description: "Battery ON. APU/JFS start. Check electrical buses. Power up avionics, radar, and defensive systems. Run BIT (Built-In Test) checks." },
  { step: 5, title: "Engine Start", description: "Throttle to IDLE. Engage starter. Monitor engine instruments (RPM, EGT, oil pressure). Let engine stabilize. Start second engine if twin." },
  { step: 6, title: "Navigation & Weapons", description: "Align INS/GPS. Load mission data. Configure radar modes. Arm countermeasures. Set weapons master switch as briefed." },
  { step: 7, title: "Taxi & Arming", description: "Request taxi clearance. Taxi to EOR (End of Runway) for final checks. Ground crew removes safety pins. Final weapons check." },
  { step: 8, title: "Takeoff", description: "Line up. Run up engines to military/afterburner power. Release brakes. Monitor instruments. Rotate at computed speed. Gear up, flaps up." },
];

const gliderWalkthrough: WalkthroughStep[] = [
  { step: 1, title: "Assembly & Inspection", description: "If disassembled, connect wings to fuselage. Pin control linkages. Verify positive control of all surfaces. Check total energy probe and pitot." },
  { step: 2, title: "Cockpit Setup", description: "Adjust seat, pedals, and harness. Connect variometer, radio, and flight computer. Stow water ballast valves. Set trim for CG." },
  { step: 3, title: "Pre-Launch Checks", description: "CBSIFTCBE check: Controls, Ballast, Straps, Instruments, Flaps, Trim, Canopy, Brakes, Eventualities. Clear canopy and lock." },
  { step: 4, title: "Launch", description: "Signal readiness to tow pilot/winch. Maintain wings level on ground roll. Rotate gently. Fly in low tow or high tow position behind tug." },
  { step: 5, title: "Release & Soar", description: "Release tow at agreed altitude. Turn away from tug. Begin searching for thermals using variometer. Circle in lift to gain altitude." },
];

const aerobticWalkthrough: WalkthroughStep[] = [
  { step: 1, title: "Pre-Aerobatic Check", description: "HASELL check: Height sufficient, Airframe limits known, Security of loose objects, Engine (temps, pressures, fuel), Location (clear of built-up areas), Lookout (clear airspace)." },
  { step: 2, title: "Cockpit Preparation", description: "Tighten harness extra tight. Stow all loose objects. Check G-meter if installed. Set mixture and prop for full power. Check canopy locked." },
  { step: 3, title: "Entry Speed Check", description: "Establish correct entry speed for the planned maneuver. Check fuel state. Clear the area with two 180° turns while scanning for traffic." },
  { step: 4, title: "Warm-Up Maneuvers", description: "Perform gentle rolls and loops to warm up. Check aircraft response. Verify G-limits. Gradually increase intensity of maneuvers." },
  { step: 5, title: "Recovery & Cooldown", description: "After sequence, return to straight and level. Check instruments and fuel. Allow engine to cool. Perform post-aerobatic inspection." },
];

const balloonWalkthrough: WalkthroughStep[] = [
  { step: 1, title: "Envelope Layout", description: "Lay out the envelope downwind from the basket. Connect envelope to basket with cables and carabiners. Inspect for tears or damage." },
  { step: 2, title: "Cold Inflation", description: "Use the fan to inflate the envelope with cold air. Have crew hold the mouth open. Check crown line for tangles." },
  { step: 3, title: "Hot Inflation", description: "Engage burner in short blasts to heat air inside envelope. The balloon will slowly stand upright. Control with crown line." },
  { step: 4, title: "Pre-Flight Checks", description: "Check fuel supply and valve operation. Test both burners. Verify altimeter, variometer, and radio. Check wind conditions at surface and aloft." },
  { step: 5, title: "Launch", description: "With crew holding basket, release tether. Controlled burn to achieve positive buoyancy. Gentle ascent. Communicate with chase crew." },
];

const evtolWalkthrough: WalkthroughStep[] = [
  { step: 1, title: "Battery & Systems Check", description: "Verify battery charge level and health. Check all motor controllers. Run system diagnostics. Verify navigation and communication systems." },
  { step: 2, title: "Motor Test", description: "Run low-power motor test sequence. Verify all rotors spinning correctly. Check for vibrations or unusual sounds. Verify thrust readings." },
  { step: 3, title: "Flight Computer Setup", description: "Enter destination and flight plan. Verify obstacle database current. Check weather feed. Set altitude and speed constraints." },
  { step: 4, title: "Vertical Takeoff", description: "Engage all motors to hover. Verify stable hover at 3-5 feet. Check all systems green. Begin vertical climb to transition altitude." },
  { step: 5, title: "Transition to Forward Flight", description: "Tilt rotors or engage forward propulsion. Transition from vertical lift to wing-borne flight. Retract landing gear if applicable." },
];

const historicWalkthrough: WalkthroughStep[] = [
  { step: 1, title: "Historical Context", description: "Review the aircraft's unique operating characteristics and limitations. Many historic aircraft have no electrical systems and require hand-propping." },
  { step: 2, title: "Exterior Inspection", description: "Check fabric covering for tears. Inspect wire bracing and turnbuckles. Check wooden propeller for cracks. Verify fuel and oil levels." },
  { step: 3, title: "Cockpit Familiarization", description: "Review the limited instrument panel. Set fuel valve and mixture. Check control cables for proper tension and routing." },
  { step: 4, title: "Engine Start", description: "Follow aircraft-specific starting procedure. Many require hand-propping with care. Set switches as required. Monitor for smooth running." },
  { step: 5, title: "Takeoff", description: "Use full rudder authority for directional control. Many historic aircraft have limited forward visibility - S-turn while taxiing. Apply power smoothly." },
];

const amphibiousWalkthrough: WalkthroughStep[] = [
  { step: 1, title: "Hull/Float Inspection", description: "Check hull for damage, cracks, or water intrusion. Inspect step area. Verify drain plugs are secure. Check sponsons and float attachments." },
  { step: 2, title: "Water Operations Brief", description: "Check water conditions: wave height, current, debris, boat traffic. Plan takeoff and landing direction relative to wind and waves." },
  { step: 3, title: "Gear Configuration", description: "Verify gear position for intended operation (UP for water, DOWN for land). Double-check with visual indicators. Critical - wrong configuration = accident." },
  { step: 4, title: "Water Takeoff", description: "Get on the step by applying back pressure then releasing. Once on the step, the aircraft will accelerate. Add power smoothly. Watch for porpoising." },
  { step: 5, title: "Water Landing", description: "Approach into wind. Flare slightly higher than land. Touch down on the step. Reduce power and settle off the step. Taxi to dock/beach." },
];

// Map aircraft types to walkthrough templates
const walkthroughByType: Record<string, WalkthroughStep[]> = {
  "single-prop": singlePropWalkthrough,
  "twin-prop": singlePropWalkthrough,
  "turboprop": singlePropWalkthrough,
  "jet": singlePropWalkthrough,
  "airliner": airlinerWalkthrough,
  "helicopter": helicopterWalkthrough,
  "military": militaryWalkthrough,
  "cargo": airlinerWalkthrough,
  "glider": gliderWalkthrough,
  "ultralight": singlePropWalkthrough,
  "aerobatic": aerobticWalkthrough,
  "amphibious": amphibiousWalkthrough,
  "evtol": evtolWalkthrough,
  "balloon": balloonWalkthrough,
  "gyrocopter": helicopterWalkthrough,
  "historic": historicWalkthrough,
};

export function getWalkthroughSteps(aircraftType: string): WalkthroughStep[] {
  return walkthroughByType[aircraftType] || singlePropWalkthrough;
}
