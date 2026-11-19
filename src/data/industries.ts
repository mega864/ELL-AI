export interface Industry {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  systems: string[];
  metrics: string[];
}

export const INDUSTRIES_DATA: Industry[] = [
  {
    id: "automotive",
    number: "01",
    title: "Automotive",
    subtitle: "ECUs, Sensors & Embedded Electronics",
    description:
      "Validating electronic control units, ultrasonic and radar sensor arrays, ADAS sub-assemblies, and in-vehicle bus communications under severe physical boundary scenarios.",
    systems: ["Radar & Ultrasonic Sensors", "Vehicle Control ECUs", "CAN / LIN Bus Gateways", "Powertrain Interfaces"],
    metrics: ["Signal jitter tolerances", "Thermal degradation thresholds", "Response latency at edge boundaries"],
  },
  {
    id: "robotics",
    number: "02",
    title: "Robotics & Automation",
    subtitle: "Navigation, Sensing & Motion Control",
    description:
      "Exploring operating frontiers for autonomous mobile robots, robotic arm actuators, and LiDAR-driven spatial detection where environmental noise challenges deterministic control.",
    systems: ["Multi-Axis Actuators", "LiDAR Spatial Arrays", "Autonomous Navigation Nodes", "Kinematic Controllers"],
    metrics: ["Obstacle detection margin", "Torque limit saturation", "Inertial feedback drift"],
  },
  {
    id: "aerospace",
    number: "03",
    title: "Aerospace",
    subtitle: "Mission-Critical Physical Reliability",
    description:
      "Stress-evaluating physical instrumentation, redundant sensor channels, and avionics bus nodes against extreme atmospheric pressure, vibration, and thermal operational limits.",
    systems: ["Avionics Bus Interfaces", "Telemetry Transducers", "Environmental Sensors", "Actuation Regulators"],
    metrics: ["Boundary pressure variance", "Signal integrity envelope", "Fail-operational transitions"],
  },
  {
    id: "industrial",
    number: "04",
    title: "Industrial Automation",
    subtitle: "Controllers, Sensors & Machinery",
    description:
      "Validating Programmable Logic Controllers (PLCs), high-speed optical inspection rigs, and industrial transducers under high electrical noise and operational wear boundaries.",
    systems: ["Fieldbus PLCs", "Industrial Vision Modules", "Pneumatic Valves", "Thermal Feedback Loops"],
    metrics: ["Cycle-time edge stability", "EMI noise immunity bounds", "Overload thermal trip-points"],
  },
  {
    id: "energy",
    number: "05",
    title: "Energy & Power Systems",
    subtitle: "Critical Condition Monitoring",
    description:
      "Assessing high-voltage inverters, grid synchronisation nodes, and battery management systems (BMS) where slight boundary deviations lead to critical protection trips.",
    systems: ["Battery Management Systems", "Grid Tie Inverters", "Current Transducers", "Thermal Dissipation Arrays"],
    metrics: ["Over-voltage transient limit", "Cell thermal gradient limit", "Fault-current response delay"],
  },
  {
    id: "consumer",
    number: "06",
    title: "Consumer Electronics",
    subtitle: "Connected Physical Product Reliability",
    description:
      "Testing smart hardware, wearable sensor suites, and connected IoT devices through rapid power cycling, mechanical drop tolerances, and signal attenuation limits.",
    systems: ["Wearable Sensor Hubs", "RF & Antenna Modems", "Smart Power Management", "Haptic Drivers"],
    metrics: ["Brownout recovery thresholds", "Antenna detuning boundaries", "Sensor sleep-wake latency"],
  },
];
