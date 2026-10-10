export const CHARGING_SOLUTIONS = [
  {
    id: 'city',
    title: 'City Charging Station',
    description: 'Compact and efficient charging stations for urban locations.',
    metaFootprint: 'Minimum 2,000 sq ft',
    metaType: 'DC Fast Charging',
    iconType: 'building',
    defaultImage: '/@fs/C:/Users/HP/.gemini/antigravity-ide/brain/88ea3da1-c9fb-4709-939c-d6f7654c576e/city_charging_station_v2_1791609738179.jpg',
    fallbackImage: '/city-charging.jpg',
  },
  {
    id: 'highway',
    title: 'Highway Charging Station',
    description: 'Strategically located stations for long-distance travel.',
    metaFootprint: 'Minimum 1 acre',
    metaType: 'DC Fast Charging',
    iconType: 'highway',
    defaultImage: '/@fs/C:/Users/HP/.gemini/antigravity-ide/brain/88ea3da1-c9fb-4709-939c-d6f7654c576e/highway_charging_station_v2_1791609769117.jpg',
    fallbackImage: '/highway-hub.jpg',
  },
  {
    id: 'hub',
    title: 'EV Highway Hubs',
    description: 'Charging stations with optional cafeteria, restaurant, gaming/play zone and traveller rest facilities.',
    metaFootprint: 'Minimum 1 acre',
    metaType: 'DC Fast Charging',
    iconType: 'hub',
    defaultImage: '/destination-lounge.jpg',
    fallbackImage: '/destination-lounge.jpg',
  },
];

export const POWER_SPECIFICATIONS = {
  '60 kW': {
    label: '60 kW DC Fast',
    vehicles: 'Urban EVs, Light Fleets, Cabs',
    time: '35 - 45 mins (20% - 80%)',
    idealFor: 'City malls, office parking, commercial retail complexes.',
  },
  '120 kW': {
    label: '120 kW High-Speed DC',
    vehicles: 'SUVs, Sedans, Commercial Fleets',
    time: '25 - 30 mins (20% - 80%)',
    idealFor: 'City fast hubs, supermarkets, arterial roads.',
  },
  '180 kW': {
    label: '180 kW Ultra-Fast DC',
    vehicles: 'Long-range Premium EVs & Light Commercial',
    time: '18 - 22 mins (20% - 80%)',
    idealFor: 'Major highway transit corridors & expressways.',
  },
  '240 kW': {
    label: '240 kW High-Power Hub',
    vehicles: 'Heavy EV Fleets, Luxury Performance EVs',
    time: '14 - 18 mins (20% - 80%)',
    idealFor: 'Express toll plazas, logistics hubs, transit centers.',
  },
  '360 kW': {
    label: '360 kW Hyper-Charger',
    vehicles: '800V Architecture EVs & Electric Buses',
    time: '10 - 14 mins (20% - 80%)',
    idealFor: 'Flagship highway lifestyle hubs & intercity routes.',
  },
  '480 kW': {
    label: '480 kW Megawatt-Ready MegaCharger',
    vehicles: 'Commercial Electric Buses & Heavy Duty Trucks',
    time: 'Sub-10 mins rapid top-up',
    idealFor: 'Interstate commercial fleet depots and hyper hubs.',
  },
};

export const EV_SERVICES_LIST = [
  {
    title: 'Installation & Setup',
    iconKey: 'wrench',
    desc: 'Professional and safe installation.',
  },
  {
    title: 'Network Management',
    iconKey: 'network',
    desc: 'Real-time monitoring and control.',
  },
  {
    title: 'Maintenance & Support',
    iconKey: 'shield',
    desc: 'Maximum uptime, minimal downtime.',
  },
  {
    title: 'Charging Software',
    iconKey: 'smartphone',
    desc: 'Smart, seamless user experience.',
  },
  {
    title: 'Custom Solutions',
    iconKey: 'settings',
    desc: 'Tailored to your location and needs.',
  },
  {
    title: 'Consulting & Planning',
    iconKey: 'consulting',
    desc: 'Expert guidance for better results.',
  },
];

export const PROCESS_STEPS = [
  {
    num: '01',
    title: 'Consultation',
    desc: 'Understand your needs and goals.',
    iconKey: 'message',
  },
  {
    num: '02',
    title: 'Site Assessment',
    desc: 'Evaluate the best location and feasibility.',
    iconKey: 'map',
  },
  {
    num: '03',
    title: 'Design & Plan',
    desc: 'Create a customized solution.',
    iconKey: 'fileEdit',
  },
  {
    num: '04',
    title: 'Installation & Ongoing Support',
    desc: 'Set up and ensure long-term performance.',
    iconKey: 'wrench',
  },
];

