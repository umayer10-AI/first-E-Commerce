const baseProducts = [
  {
    id: "reebok-velocity",
    name: "Reebok: The Velocity",
    price: 180,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD3P8ozWPIz2eUHauQqUNNEOzf0Y-6MSpnrf1-hEGooAFwPjjW3RuCHus5c9m7Yu_l1zx6kU-vB248wBM3CnQrvSsXLSUJlHtbUcNZfiNgN26brV0cFhTe77faeAbjDP-gxF9xd3mYoAesQad6h-7ewmUKd5D3tpwLL_d8v7h3MOM4lBLGuYu5QwbtBsoljt7eAwDohWmZ7x-s0WDUKXdhg_XdEZrWO0dwCy6zLGrNZddSywnoBYZl3mqqisiKnSZFo4-qZCMTffzo",
    category: "Footwear",
    subtext: "Brand Collaboration Sneaker",
    description: "A premium, studio-lit photograph of a sleek Reebok sneaker showcased in a minimalist concrete environment. The design is dramatic and high-contrast, emphasizing sharp geometric textures and monochromatic black and white materials. It offers supreme performance-focused cushioning wrapped in uncompromising designer brand aesthetics.",
    sizes: ["8.0", "9.0", "9.5", "10.0", "10.5", "11.0", "12.0"],
    colors: ["Concrete Black", "Chalk White"],
    features: [
      "Dynamic high-contrast shock absorbing midsole",
      "Monochromatic multi-layered premium mesh and leather top overlay",
      "Custom textured grip rubber outsole optimized for urban terrain",
      "Exclusive BR.F studio collaboration engraving on insole"
    ],
    rating: 4.9
  },
  {
    id: "nexus-tech-shell",
    name: "Nexus Geometric Shell",
    price: 295,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAE9J_ydYUbbdFrQwJk0Cplj56jVsHeKjhSJsas44TdQMm77sAkN6MDNiMhLhrCKw32q3YoY9_kLDepjmpM84Aqe7KzEIkEdDzUROaOijD3YKvlnRGnOzDfCNUIUDjkp-ruQRVjPgXTJdyAkGX_nTVuEIoiBydTUtjbqIt1W_6f8BPdgJtotyACyvYE-7pYYsjaTyqqfGmnx6srRFYtwgcgNRBbcip5pM-Ixlk_JZRx8ardEG0yiyfeaJbIVy_FofQOeueS0uCeREo",
    category: "Apparel",
    subtext: "High-Performance Weatherproof Jacket",
    description: "Engineered from triple-layered waterproof laminates, the Nexus Geometric Shell provides unconditional protection from wind and rain. The silhouette is heavily detailed with asymmetric pockets, magnetic hood clips, and water-sealed zippers, reflecting modern techwear philosophies without sacrificing clean editorial lines.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Obsidian Slate", "Stealth Grey"],
    features: [
      "3-Layer breathable windproof and waterproof laminate shell",
      "Ergonomic sleeves with articulating elbows for maximum mobility",
      "6-pocket layout with custom waterproof zippers and media outputs",
      "Magnetic storm flap locks at throat and hem"
    ],
    rating: 4.8
  },
  {
    id: "fluidity-editorial-print",
    name: "Fluidity Generative Print",
    price: 85,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA9vbr-KBMEk7R0PJEJwKlR2OSQSQSmKP4CZmHwh-5teG0jBSU2Y1uIw5Fv6UwuTOp9T719JZLZcnrA-JdJSgkIFmy3ejngsl-EDFU546FL1_k7J3qBQD1h3sa4yAvE5UnNHkjchfeZd487w3gW0hkv2gaTeNTaZzzq3HZqSQKLh-hkc4U5gGDCHPdqC0RsDoDq72IxQj0MW2SOGTyHAT0yL_aVqOGmRbUIwwPgbVRfvyQvkyIKyJa2b4LSUkRVSxzwmczZWHLJemM",
    category: "Accessories",
    subtext: "Generative Art Studio Poster",
    description: "Crafted via algorithmic canvas manipulation, 'Fluidity' maps liquid inertia in high-contrast ink patterns. Printed on heavyweight, acid-free editorial cotton stock, this limited artwork brings movement and architectural depth into minimalist spaces.",
    sizes: ["18\" x 24\"", "24\" x 36\""],
    colors: ["Ink Monochromatic", "Amber Inversion"],
    features: [
      "Museum-grade 300gsm 100% fine art rag cotton paper",
      "Archival giclée pigment printing (rated 150+ years color stability)",
      "Numbered and signed strictly inside a limited batch of 100 prints",
      "Delivered in protective heavy-duty structural cardboard tube"
    ],
    rating: 4.7
  },
  {
    id: "luxe-minimal-wallet",
    name: "Nexus Steel Wallet",
    price: 120,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDuphH0vMBf8yizIXD33EBe6QaI7AAn3737nzUQAj83Knn7KpfIBl-vfwAttLjd190FW818bFI5n-oL0ITRDa5mo5rFSiatng2wdgEUnbFXtVVcsQgm1ctyIYYAnuzMYSsXpMAkD5XlmW84EJevOVpG33smSbzsicJnRd2OfAyZ135d1EudZfQEOByFGGi21DORlPYQlWkxUtgrLKQHdtV2bGBqQdzkIabPJANnwUfGNxa8uvBnClHLhKsgwXBePvqDgGanQ6arYhw",
    category: "Accessories",
    subtext: "RFID-Blocking Card Console",
    description: "Crafted from structural anodized aluminum and carbon polymer straps, this ultra-slim wallet protects your credit cards in a compact, architectural form. The intuitive spring-loaded trigger releases card drawers with a single button press.",
    sizes: ["Standard Slim"],
    colors: ["Anodized Obsidian", "Titanium Raw"],
    features: [
      "Holds 1 to 12 cards without stretching the tension bands",
      "Military-grade RFID-blocking technology against scan theft",
      "Integrated heavy-duty matte spring steel cash clip on reverse",
      "Weighs only 2.1 ounces with sleek beveled corners"
    ],
    rating: 4.9
  },
  {
    id: "luxe-concept-bag",
    name: "Luxe Minimalist Tote",
    price: 240,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBvnb07rVi3uOQKGk2ZfOQ348SuQUH_eQTgxZ4DJYgdWoIIlmYHIVersYxnDPA8CG0Aa1WmU0uluBG2f2eSQvmna2OfKybKVoHIKFFMHsLg_5nnxLBny02X-M-CnjDcerz4PoFHGmr0jB3zoNgloffOKUWaV-F4gmeG1W001vp7tYbxixSivV0E2Uhper-ptdw4eiOpdSiRBlSv7OxE0Mb72eLM3if_yDEpUIJDpPcyeZDDF-x7ziDyhFAbNoJRtOxx1iUCgduAN0w",
    category: "Accessories",
    subtext: "Curated Travel Carry-On",
    description: "An elegant, structural travel companion styled for contemporary commutes. Featuring waterproof matte fabrics, a padded 16-inch laptop pocket, and comfortable full-grain leather handle grips, it redefines professional cargo utilities.",
    sizes: ["22 Liters"],
    colors: ["Deep Carbon", "Off-White Chalk"],
    features: [
      "Structured bottom layer protects internal items from shock",
      "Padded neoprene chamber holds laptops up to 16 inches securely",
      "Pass-through back sleeve slips easily over luggage handles",
      "Internal dynamic key rings and hidden zipper pockets"
    ],
    rating: 4.9
  },
  {
    id: "linen-button-shirt",
    name: "Classic Linen Button Shirt",
    price: 95,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=600&q=80",
    category: "Apparel",
    subtext: "Relaxed Fit Linen Top",
    description: "Crafted from highly breathable organic European linen, this casual button-up features a tailored structured collar and an asymmetric hem. Designed to offer maximum comfort and cool airflow in high-temperature environments.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Chalk White", "Silt Khaki"],
    features: [
      "100% Organic European flax linen weave structure",
      "Asymmetrical split side-hem for comfortable modern fit",
      "Tonal natural pearl button accents on cuffs and front",
      "Pre-washed to resist shrinkage and maintain soft drape"
    ],
    rating: 4.6
  },
  {
    id: "heavy-boxy-tshirt",
    name: "Heavyweight Boxy T-Shirt",
    price: 65,
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=600&q=80",
    category: "Apparel",
    subtext: "Minimal Heavy Cotton Tee",
    description: "An essential heavy-cotton t-shirt styled with a boxy, oversized streetwear cut and a high mock collar. Its dense structural weight holds its shape beautifully over repeated washes, representing pure structural intent.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Alabaster White", "Obsidian Black"],
    features: [
      "Dense 280gsm 100% structural cotton knit",
      "Reinforced high-collar mock neck ribbing",
      "Oversized dropped shoulder drop boxy profile",
      "Clean double-needle stitched hems"
    ],
    rating: 4.7
  },
  {
    id: "cargo-pants-stealth",
    name: "Articulated Cargo Pants",
    price: 155,
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=600&q=80",
    category: "Apparel",
    subtext: "Stealth Tech Cargo Trousers",
    description: "Designed with articulating geometric knee joints and heavy-duty storage cargo panels, these pants combine functionality with editorial style. Water-resistant matte nylon keeps cargo protected during active daily urban pursuits.",
    sizes: ["30", "32", "34", "36"],
    colors: ["Obsidian Slate", "Army Olive"],
    features: [
      "Highly durable water-resistant technical cotton-nylon canvas",
      "Articulated knees for complete, unhindered range of leg movement",
      "4-compartment cargo pockets with hidden water-sealed zippers",
      "Adjustable bungee drawstrings at waist and ankle openings"
    ],
    rating: 4.8
  },
  {
    id: "oversized-cotton-hoodie",
    name: "Organic Loopback Hoodie",
    price: 135,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=600&q=80",
    category: "Apparel",
    subtext: "Heavy Cotton Loopback Hoodie",
    description: "Crafted from exceptionally heavy loopback French terry, this hoodie features clean, double-lined hood shells and holds a drop-shoulder boxy drape. Free from drawstrings for a truly minimal, architectural streetwear profile.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Sage Green", "Charcoal Slate"],
    features: [
      "Thick 450gsm 100% organic cotton loopback French terry",
      "Double-layered structured hood stands rigid on shoulders",
      "Clean side seam pockets rather than standard front pouch pouch",
      "Heavy ribbed cuffs and waistband for optimal shape hold"
    ],
    rating: 4.9
  },
  {
    id: "suede-chelsea-boots",
    name: "Suede Chelsea Boots",
    price: 215,
    image: "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?auto=format&fit=crop&w=600&q=80",
    category: "Footwear",
    subtext: "Luxury Suede Ankle Boots",
    description: "Styled with elegant tapered silhouettes and stacked leather heels, these boots are crafted in Italy from water-repellent suede. Stretchy side gussets and pull-loops make slipping them on and off incredibly fast and comfortable.",
    sizes: ["8.0", "9.0", "10.0", "11.0", "12.0"],
    colors: ["Sandstone Suede", "Espresso Brown"],
    features: [
      "100% Premium Italian water-repellent calf suede upper",
      "Flexible Goodyear welt stacked leather sole with rubber grip grips",
      "Breathable full-grain glove leather interior lining",
      "Heavy-duty elastic double-gussets and reinforced woven pull tags"
    ],
    rating: 4.8
  },
  {
    id: "concrete-lowtop-shoes",
    name: "Concrete Court Sneakers",
    price: 165,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=600&q=80",
    category: "Footwear",
    subtext: "Minimalist Low-top Court Shoes",
    description: "An exceptionally clean court sneaker crafted from full-grain leather, featuring a concrete-textured vulcanized rubber cupsole. Sleek retro lines and hidden stitching represent a premium contemporary aesthetic.",
    sizes: ["8.0", "9.0", "9.5", "10.0", "10.5", "11.0", "12.0"],
    colors: ["Chalk White", "Cement Slate"],
    features: [
      "Supple full-grain calfskin leather upper with double seams",
      "Recycled vulcanized rubber cupsole with custom brick pattern tread",
      "Padded tongue and ankle collar lined in ultra-soft mesh",
      "Hidden lace loops for a completely clean clean top profile"
    ],
    rating: 4.7
  },
  {
    id: "acetate-sunglasses",
    name: "Acetate Square Sunglasses",
    price: 195,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=600&q=80",
    category: "Accessories",
    subtext: "Matte Black Designer Eyewear",
    description: "Designed with architectural thick matte-black cellulose acetate frames, these square sunglasses incorporate high-definition Carl Zeiss lenses to deliver full UV400 coverage with striking structural lines.",
    sizes: ["Standard", "Wide Fit"],
    colors: ["Matte Charcoal", "Amber Translucent"],
    features: [
      "Eco-friendly thick biodegradable cellulose acetate block frame",
      "Scratch-resistant polarized Carl Zeiss nylon lenses",
      "Reinforced 5-barrel metal hinges for ultimate open/close durability",
      "Embossed laser-etched internal BR.F logo signature"
    ],
    rating: 4.8
  },
  {
    id: "anodized-wrist-watch",
    name: "Anodized Analog Watch",
    price: 260,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80",
    category: "Accessories",
    subtext: "Structural Steel Analog Watch",
    description: "A minimal watch engineered inside a 40mm block of raw anodized stainless steel. Its high-contrast face features clean line indicators and custom hands powered by a highly reliable Japanese quartz movement.",
    sizes: ["40mm Case"],
    colors: ["Brushed Titanium", "Stealth Black"],
    features: [
      "Hardened 316L aerospace-grade anodized stainless steel case",
      "Ultra-scratch-resistant sapphire crystal dome cover face",
      "5ATM water-resistant sealing (depth up to 50 meters)",
      "Premium vegetable-tanned full-grain leather strap closure"
    ],
    rating: 4.9
  },
  {
    id: "ecofiber-backpack",
    name: "Structured Commute Pack",
    price: 190,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80",
    category: "Accessories",
    subtext: "Weatherproof Commute Backpack",
    description: "An architectural commuter pack built with high-density ballistic nylon and custom matte leather flaps. Offers structural side panels to preserve its sleek geometry even when packed with heavy digital equipment.",
    sizes: ["20 Liters"],
    colors: ["Carbon Black", "Slate Grey"],
    features: [
      "High-density 1680D bulletproof ballistic nylon construction",
      "Fully padded laptop vault compartment holding up to 16\" devices",
      "Fidlock magnetic snap quick-release buckle closures",
      "Hidden water-resistant stash pocket located on back panel"
    ],
    rating: 4.8
  },
  {
    id: "wool-knit-coat",
    name: "Editorial Wool Coat",
    price: 340,
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80",
    category: "Apparel",
    subtext: "Double-Breasted Wool Overcoat",
    description: "A gorgeous structured long overcoat styled with classic double-breasted buttoning and wide notch lapels. Crafted from high-density milled sheep wool, it wraps you in incredible architectural warmth.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Camel Tan", "Obsidian Black"],
    features: [
      "Heavyweight 80% sheep wool, 20% cashmere milled blend",
      "Premium silky cupro-lining for extremely smooth friction layering",
      "Oversized notched lapels with optional high-collar throat latch button",
      "Hand-sewn tailored shoulders and back center wind vent slit"
    ],
    rating: 4.9
  }
];

// Initialize dynamic array with core catalog templates
export const products = [];

// Colorways definitions for programmatic replication
const colorways = [
  { suffix: "Obsidian Black", hexLabel: "Slate Black", priceOffset: 0, ratingOffset: 0 },
  { suffix: "Alabaster Chalk", hexLabel: "Chalk White", priceOffset: 5, ratingOffset: -0.1 },
  { suffix: "Cement Slate", hexLabel: "Slate Grey", priceOffset: -10, ratingOffset: 0.1 },
  { suffix: "Sage Green", hexLabel: "Sage Green", priceOffset: 15, ratingOffset: 0.0 },
  { suffix: "Rust Terracotta", hexLabel: "Rust Orange", priceOffset: 10, ratingOffset: -0.2 },
  { suffix: "Indigo Marine", hexLabel: "Indigo Blue", priceOffset: 20, ratingOffset: 0.1 },
  { suffix: "Silt Khaki", hexLabel: "Silt Khaki", priceOffset: -5, ratingOffset: 0.0 }
];

// Replicate 7 color/style variants of each of the 15 base items to reach exactly 105 unique e-commerce items
baseProducts.forEach((base) => {
  colorways.forEach((cw, idx) => {
    const isPrimary = idx === 0;
    const finalId = isPrimary ? base.id : `${base.id}-${cw.suffix.toLowerCase().replace(/\s+/g, '-')}`;
    const finalName = isPrimary ? base.name : `${base.name} - ${cw.suffix}`;
    const finalPrice = Math.max(45, base.price + cw.priceOffset);
    const finalRating = parseFloat(Math.min(5.0, base.rating + cw.ratingOffset).toFixed(1));
    
    // Inject distinct details
    products.push({
      ...base,
      id: finalId,
      name: finalName,
      price: finalPrice,
      rating: finalRating,
      images: base.images || [base.image],
      colors: [cw.hexLabel, ...base.colors.filter(c => c !== cw.hexLabel)].slice(0, 2),
      subtext: `${base.subtext} &bull; ${cw.suffix} Edition`,
      features: [
        `Limited edition release: ${cw.suffix} series`,
        ...base.features.slice(0, 3)
      ]
    });
  });
});

export const getProductById = (id) => {
  return products.find((product) => product.id === id);
};

export const getProductsByCategory = (category) => {
  if (!category || category === "All") return products;
  return products.filter((product) => product.category.toLowerCase() === category.toLowerCase());
};
