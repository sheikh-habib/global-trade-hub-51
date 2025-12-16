// Product data with 36 products across 6 categories
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  country: string;
  image: string;
  minOrder: number;
  supplier: string;
}

export const categories = [
  "Agriculture",
  "Electronics",
  "Machinery",
  "Chemicals",
  "Textiles",
  "Construction"
];

export const countries = [
  "China",
  "United States",
  "Germany",
  "India",
  "Brazil",
  "Japan"
];

export const products: Product[] = [
  // Agriculture (6 products)
  {
    id: 1,
    name: "Organic Wheat Seeds",
    description: "High-yield organic wheat seeds for commercial farming. Certified GMO-free with excellent germination rates.",
    price: 450,
    category: "Agriculture",
    country: "United States",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400",
    minOrder: 100,
    supplier: "AgriPro Farms"
  },
  {
    id: 2,
    name: "Industrial Rice Harvester",
    description: "Fully automated rice harvesting machine with GPS tracking and real-time yield monitoring.",
    price: 85000,
    category: "Agriculture",
    country: "Japan",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400",
    minOrder: 1,
    supplier: "Nippon Agri Tech"
  },
  {
    id: 3,
    name: "Premium Coffee Beans",
    description: "Single-origin Arabica coffee beans from highland farms. Perfect for wholesale distribution.",
    price: 12,
    category: "Agriculture",
    country: "Brazil",
    image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400",
    minOrder: 500,
    supplier: "Brazilian Coffee Co."
  },
  {
    id: 4,
    name: "Organic Fertilizer",
    description: "Eco-friendly NPK fertilizer made from natural ingredients. Improves soil health and crop yield.",
    price: 280,
    category: "Agriculture",
    country: "India",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400",
    minOrder: 50,
    supplier: "GreenGrow India"
  },
  {
    id: 5,
    name: "Soybean Oil Press Machine",
    description: "Industrial-grade oil extraction machine. High efficiency with minimal waste.",
    price: 15000,
    category: "Agriculture",
    country: "China",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400",
    minOrder: 1,
    supplier: "Henan Machinery"
  },
  {
    id: 6,
    name: "Greenhouse Irrigation System",
    description: "Smart drip irrigation with moisture sensors and automated scheduling.",
    price: 3200,
    category: "Agriculture",
    country: "Germany",
    image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=400",
    minOrder: 5,
    supplier: "AquaTech Systems"
  },
  
  // Electronics (6 products)
  {
    id: 7,
    name: "LED Display Panels",
    description: "4K Ultra HD LED panels for commercial displays. Long lifespan with vibrant colors.",
    price: 890,
    category: "Electronics",
    country: "China",
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=400",
    minOrder: 10,
    supplier: "Shenzhen Display Tech"
  },
  {
    id: 8,
    name: "Industrial Sensors Kit",
    description: "Complete sensor package including temperature, pressure, and humidity sensors.",
    price: 450,
    category: "Electronics",
    country: "Germany",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400",
    minOrder: 25,
    supplier: "Siemens Components"
  },
  {
    id: 9,
    name: "Solar Panel Modules",
    description: "High-efficiency monocrystalline solar panels with 25-year warranty.",
    price: 320,
    category: "Electronics",
    country: "Japan",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400",
    minOrder: 50,
    supplier: "SunPower Asia"
  },
  {
    id: 10,
    name: "Circuit Board Assembly",
    description: "Custom PCB manufacturing and assembly services. Quick turnaround available.",
    price: 15,
    category: "Electronics",
    country: "China",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400",
    minOrder: 100,
    supplier: "PCB World Factory"
  },
  {
    id: 11,
    name: "Industrial Battery Packs",
    description: "Lithium-ion battery packs for industrial equipment. High capacity and safety certified.",
    price: 1200,
    category: "Electronics",
    country: "United States",
    image: "https://images.unsplash.com/photo-1619641805634-98e068a5e0af?w=400",
    minOrder: 20,
    supplier: "PowerCell Inc."
  },
  {
    id: 12,
    name: "Wireless Communication Modules",
    description: "5G and IoT communication modules for smart devices and industrial automation.",
    price: 85,
    category: "Electronics",
    country: "India",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400",
    minOrder: 100,
    supplier: "TechWave India"
  },
  
  // Machinery (6 products)
  {
    id: 13,
    name: "CNC Milling Machine",
    description: "5-axis CNC milling center with high precision and automatic tool changer.",
    price: 125000,
    category: "Machinery",
    country: "Germany",
    image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=400",
    minOrder: 1,
    supplier: "DMG Mori"
  },
  {
    id: 14,
    name: "Industrial Robot Arm",
    description: "6-axis robotic arm for assembly line automation. Programmable with AI capabilities.",
    price: 45000,
    category: "Machinery",
    country: "Japan",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400",
    minOrder: 2,
    supplier: "Fanuc Robotics"
  },
  {
    id: 15,
    name: "Hydraulic Press Machine",
    description: "500-ton hydraulic press for metal forming and stamping operations.",
    price: 78000,
    category: "Machinery",
    country: "China",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=400",
    minOrder: 1,
    supplier: "Jiangsu Heavy Industries"
  },
  {
    id: 16,
    name: "Conveyor Belt System",
    description: "Modular conveyor system for warehouse and manufacturing automation.",
    price: 12000,
    category: "Machinery",
    country: "United States",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400",
    minOrder: 3,
    supplier: "Flexlink America"
  },
  {
    id: 17,
    name: "Packaging Machine",
    description: "Automatic packaging machine for food and pharmaceutical industries.",
    price: 35000,
    category: "Machinery",
    country: "India",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400",
    minOrder: 1,
    supplier: "PackTech India"
  },
  {
    id: 18,
    name: "Industrial Compressor",
    description: "Rotary screw air compressor for heavy-duty industrial applications.",
    price: 8500,
    category: "Machinery",
    country: "Brazil",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=400",
    minOrder: 2,
    supplier: "Atlas Copco Brazil"
  },
  
  // Chemicals (6 products)
  {
    id: 19,
    name: "Industrial Solvents",
    description: "High-purity industrial solvents for cleaning and manufacturing processes.",
    price: 180,
    category: "Chemicals",
    country: "Germany",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400",
    minOrder: 50,
    supplier: "BASF Chemicals"
  },
  {
    id: 20,
    name: "Polymer Resins",
    description: "Engineering-grade polymer resins for injection molding and extrusion.",
    price: 2200,
    category: "Chemicals",
    country: "United States",
    image: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?w=400",
    minOrder: 20,
    supplier: "DuPont Materials"
  },
  {
    id: 21,
    name: "Industrial Adhesives",
    description: "High-strength structural adhesives for automotive and aerospace applications.",
    price: 85,
    category: "Chemicals",
    country: "Japan",
    image: "https://images.unsplash.com/photo-1616400619175-5beda3a17896?w=400",
    minOrder: 100,
    supplier: "Henkel Japan"
  },
  {
    id: 22,
    name: "Water Treatment Chemicals",
    description: "Complete water treatment solution including coagulants and disinfectants.",
    price: 350,
    category: "Chemicals",
    country: "China",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400",
    minOrder: 25,
    supplier: "ChinaChem Industries"
  },
  {
    id: 23,
    name: "Specialty Coatings",
    description: "Industrial protective coatings with anti-corrosion and UV resistance.",
    price: 420,
    category: "Chemicals",
    country: "India",
    image: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?w=400",
    minOrder: 30,
    supplier: "Asian Paints Industrial"
  },
  {
    id: 24,
    name: "Pharmaceutical Intermediates",
    description: "API intermediates for pharmaceutical manufacturing. cGMP certified.",
    price: 5500,
    category: "Chemicals",
    country: "Brazil",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400",
    minOrder: 10,
    supplier: "PharmaBrazil"
  },
  
  // Textiles (6 products)
  {
    id: 25,
    name: "Cotton Fabric Rolls",
    description: "Premium quality cotton fabric for garment manufacturing. Multiple colors available.",
    price: 8,
    category: "Textiles",
    country: "India",
    image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=400",
    minOrder: 500,
    supplier: "Mumbai Textiles"
  },
  {
    id: 26,
    name: "Polyester Yarn",
    description: "High-tenacity polyester yarn for industrial and apparel applications.",
    price: 3,
    category: "Textiles",
    country: "China",
    image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=400",
    minOrder: 1000,
    supplier: "Zhejiang Fibers"
  },
  {
    id: 27,
    name: "Denim Fabric",
    description: "Premium selvedge denim fabric for jeans and fashion apparel.",
    price: 12,
    category: "Textiles",
    country: "Japan",
    image: "https://images.unsplash.com/photo-1565084888279-aca607ecce0c?w=400",
    minOrder: 200,
    supplier: "Kurabo Denim"
  },
  {
    id: 28,
    name: "Industrial Webbing",
    description: "Heavy-duty nylon webbing for safety equipment and cargo straps.",
    price: 2,
    category: "Textiles",
    country: "United States",
    image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=400",
    minOrder: 2000,
    supplier: "SafetyFirst USA"
  },
  {
    id: 29,
    name: "Technical Fabrics",
    description: "High-performance fabrics for sportswear and outdoor gear.",
    price: 25,
    category: "Textiles",
    country: "Germany",
    image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=400",
    minOrder: 100,
    supplier: "Gore-Tex Europe"
  },
  {
    id: 30,
    name: "Silk Materials",
    description: "Pure silk fabric for luxury fashion and home textiles.",
    price: 45,
    category: "Textiles",
    country: "Brazil",
    image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=400",
    minOrder: 50,
    supplier: "Silk Brasil"
  },
  
  // Construction (6 products)
  {
    id: 31,
    name: "Steel Reinforcement Bars",
    description: "High-strength steel rebar for concrete reinforcement. Various sizes available.",
    price: 680,
    category: "Construction",
    country: "China",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400",
    minOrder: 100,
    supplier: "Baosteel Group"
  },
  {
    id: 32,
    name: "Cement Portland Type I",
    description: "General-purpose portland cement for construction projects.",
    price: 95,
    category: "Construction",
    country: "India",
    image: "https://images.unsplash.com/photo-1590414299242-4c8c3a27e813?w=400",
    minOrder: 200,
    supplier: "UltraTech Cement"
  },
  {
    id: 33,
    name: "Prefab Steel Structures",
    description: "Pre-engineered steel buildings for warehouses and factories.",
    price: 45000,
    category: "Construction",
    country: "United States",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400",
    minOrder: 1,
    supplier: "American Buildings"
  },
  {
    id: 34,
    name: "Glass Curtain Walls",
    description: "Architectural glass panels for modern building facades.",
    price: 320,
    category: "Construction",
    country: "Germany",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=400",
    minOrder: 50,
    supplier: "Schott Glass"
  },
  {
    id: 35,
    name: "Ceramic Tiles",
    description: "Premium porcelain tiles for floors and walls. Multiple designs.",
    price: 18,
    category: "Construction",
    country: "Brazil",
    image: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=400",
    minOrder: 500,
    supplier: "Ceramica Brasil"
  },
  {
    id: 36,
    name: "Insulation Materials",
    description: "Thermal and acoustic insulation for energy-efficient buildings.",
    price: 45,
    category: "Construction",
    country: "Japan",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400",
    minOrder: 100,
    supplier: "Rockwool Japan"
  }
];
