/* =========================================================
   ANTERIOR WOOD WORKS — PRODUCT DATABASE
========================================================= */

const PRODUCTS = [

  /* ---------------- SOFAS ---------------- */
  {
    id: "sf-01", category: "sofas", name: "Luxe Corner Sofa",
    price: 699.00, oldPrice: 799.00, rating: 4.5,
    image: "https://arabelladesigns.co.uk/cdn/shop/files/LuxeCorner1.png?v=1781262866&width=1122",
    images: [
      "https://arabelladesigns.co.uk/cdn/shop/files/LuxeCorner1.png?v=1781262866&width=1122",
      "https://arabelladesigns.co.uk/cdn/shop/files/LuxeCorner1.png?v=1781262866&width=1122"
    ],
    colors: ["#7a4b3a", "#3b2e25", "#cabba0"], material: "Solid oak frame, premium linen upholstery",
    desc: "An L-shaped corner sofa built on a solid oak frame, dressed in premium linen upholstery. Deep seats and plush cushions make it the anchor piece your living room has been missing."
  },
  {
    id: "sf-02", category: "sofas", name: "Heritage 3-Seater Sofa",
    price: 549.00, rating: 4.7,
    image: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=900&auto=format&fit=crop",
    images: ["https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=1200&auto=format&fit=crop"],
    colors: ["#5b2e2e", "#3b2e25"], material: "Kiln-dried hardwood, velvet upholstery",
    desc: "A classic three-seater with rolled arms and turned wooden legs, upholstered in a rich velvet that ages beautifully with use."
  },
  {
    id: "sf-03", category: "sofas", name: "Velvet Lounge Sofa",
    price: 629.00, rating: 4.4,
    image: "https://kateandmark.in/cdn/shop/files/velvet-sofa-tuscany-sofa-set-3-seater-couch-luxury-sofa-lounge-sofa-set-of-sofa-01-9fb1-4815-a03b-7cd1b0f1aa10.webp?v=1781941007",
    images: ["https://kateandmark.in/cdn/shop/files/velvet-sofa-tuscany-sofa-set-3-seater-couch-luxury-sofa-lounge-sofa-set-of-sofa-01-9fb1-4815-a03b-7cd1b0f1aa10.webp?v=1781941007"],
    colors: ["#7a4b3a", "#5b2e2e"], material: "Beechwood frame, soft velvet finish",
    desc: "Low-slung and lounge-ready, this sofa pairs a beechwood frame with a soft velvet finish for a relaxed, modern silhouette."
  },
  {
    id: "sf-04", category: "sofas", name: "Mid-Century Loveseat",
    price: 389.00, rating: 4.6,
    image: "https://habitt.com/cdn/shop/files/h_6a425bde-25e0-48e1-a6a6-6ec3b9cf879a.jpg?v=1778070734",
    images: ["https://habitt.com/cdn/shop/files/h_6a425bde-25e0-48e1-a6a6-6ec3b9cf879a.jpg?v=1778070734"],
    colors: ["#cabba0", "#7a4b3a"], material: "Walnut legs, textured weave fabric",
    desc: "A compact two-seater with tapered walnut legs and a textured weave fabric — ideal for smaller spaces that still want presence."
  },
  {
    id: "sf-05", category: "sofas", name: "Chesterfield Sofa",
    price: 749.00, rating: 4.8,
    image: "https://sofasofa.co.uk/cdn/shop/files/GrandChest3V.Chestnut_frontangle.jpg?v=1776160866",
    images: ["https://sofasofa.co.uk/cdn/shop/files/GrandChest3V.Chestnut_frontangle.jpg?v=1776160866"],
    colors: ["#5b2e2e", "#3b2e25"], material: "Solid hardwood frame, tufted leatherette",
    desc: "The timeless Chesterfield silhouette with deep button-tufting and rolled arms, built on a solid hardwood frame."
  },

  /* ---------------- DINING SETS ---------------- */
  {
    id: "dn-01", category: "dining", name: "Oakland Dining Set",
    price: 549.00, rating: 4.6,
    image: "https://d2kz53n3bzvihv.cloudfront.net/resized/790_395_0_255_255_255/media/gbu0/categoryxxl/image/Headers_Header_Tile_Newton_1000x500px.png.jpeg",
    images: ["https://d2kz53n3bzvihv.cloudfront.net/resized/790_395_0_255_255_255/media/gbu0/categoryxxl/image/Headers_Header_Tile_Newton_1000x500px.png.jpeg"],
    colors: ["#5b3a26", "#3b2e25"], material: "Solid oak table, upholstered chairs (set of 6)",
    desc: "A six-seater dining set in solid oak with a hand-rubbed finish, paired with upholstered chairs built for long dinners and longer conversations."
  },
  {
    id: "dn-02", category: "dining", name: "Round Walnut Table Set",
    price: 489.00, rating: 4.5,
    image: "https://m.media-amazon.com/images/I/71Hd+qHm0OL._AC_SX569_.jpg",
    images: ["https://m.media-amazon.com/images/I/71Hd+qHm0OL._AC_SX569_.jpg"],
    colors: ["#5b3a26"], material: "Walnut veneer top, solid wood base",
    desc: "A round walnut-veneer table on a sculpted solid wood base, paired with four matching chairs for an intimate dining setup."
  },
  {
    id: "dn-03", category: "dining", name: "Farmhouse Bench Dining Set",
    price: 599.00, rating: 4.7,
    image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=900&auto=format&fit=crop",
    images: ["https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=1200&auto=format&fit=crop"],
    colors: ["#7a4b3a", "#3b2e25"], material: "Reclaimed pine, iron accents",
    desc: "A long farmhouse table in reclaimed pine, paired with matching benches and iron-accented legs for a warm, communal feel."
  },
  {
    id: "dn-04", category: "dining", name: "Compact 4-Seater Dining Set",
    price: 379.00, rating: 4.4,
    image: "https://images.woodenstreet.de/image/data/dining-set/4-seater/adolph-compact-4-seater-dining-set-with-4-chairs-walnut-finish/updated/updated/new-logo/1.jpg",
    images: ["https://images.woodenstreet.de/image/data/dining-set/4-seater/adolph-compact-4-seater-dining-set-with-4-chairs-walnut-finish/updated/updated/new-logo/1.jpg"],
    colors: ["#5b3a26"], material: "Solid mango wood",
    desc: "A space-conscious four-seater set in solid mango wood, finished with clean lines for compact dining areas."
  },
  {
    id: "dn-05", category: "dining", name: "Extendable Dining Table Set",
    price: 649.00, rating: 4.6,
    image: "https://uk.transformertable.com/cdn/shop/files/Transformer-round-table-scandinavian-oak-the-family-functionality-lifestyle-model-4x3.jpg?v=1751657228&width=1000",
    images: ["https://uk.transformertable.com/cdn/shop/files/Transformer-round-table-scandinavian-oak-the-family-functionality-lifestyle-model-4x3.jpg?v=1751657228&width=1000"],
    colors: ["#3b2e25", "#5b3a26"], material: "Solid teak, butterfly extension leaf",
    desc: "A solid teak dining table with a hidden butterfly extension leaf, expanding from six to eight seats when you need it."
  },

  /* ---------------- BEDS ---------------- */
  {
    id: "bd-01", category: "beds", name: "Modern Platform Bed",
    price: 449.00, rating: 4.8,
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=900&auto=format&fit=crop",
    images: ["https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop"],
    colors: ["#cabba0", "#3b2e25"], material: "Solid pine platform, upholstered headboard",
    desc: "A low-profile platform bed with a padded headboard and solid pine slats — no box spring required, just clean modern lines."
  },
  {
    id: "bd-02", category: "beds", name: "Classic Sleigh Bed",
    price: 529.00, rating: 4.6,
    image: "https://www.ashleyhomestorenorth.ca/cdn/shop/files/B376-81-96-ALT_3a10c84d-1501-4a38-b4e0-aaf11e585564_1024x1024@2x.jpg?v=1687634413",
    images: ["https://www.ashleyhomestorenorth.ca/cdn/shop/files/B376-81-96-ALT_3a10c84d-1501-4a38-b4e0-aaf11e585564_1024x1024@2x.jpg?v=1687634413"],
    colors: ["#5b3a26", "#3b2e25"], material: "Solid mahogany, curved frame",
    desc: "A curved sleigh-style bed frame in solid mahogany, bringing a traditional silhouette into a contemporary bedroom."
  },
  {
    id: "bd-03", category: "beds", name: "Storage Bed Frame",
    price: 489.00, rating: 4.5,
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=900&auto=format&fit=crop",
    images: ["https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1200&auto=format&fit=crop"],
    colors: ["#3b2e25"], material: "Engineered wood, hydraulic lift storage",
    desc: "A hydraulic lift-up storage bed that hides a full underbed compartment beneath a clean, minimal frame."
  },
  {
    id: "bd-04", category: "beds", name: "Upholstered Bed with Headboard",
    price: 469.00, rating: 4.7,
    image: "https://habitt.com/cdn/shop/files/ChatGPT_Image_Jun_5_2026_03_27_23_PM.png?v=1780899081",
    images: ["https://habitt.com/cdn/shop/files/ChatGPT_Image_Jun_5_2026_03_27_23_PM.png?v=1780899081"],
    colors: ["#7a4b3a", "#cabba0"], material: "Solid wood frame, channel-tufted headboard",
    desc: "A tall channel-tufted headboard atop a solid wood frame, built to be the focal point of a calm, considered bedroom."
  },
  {
    id: "bd-05", category: "beds", name: "Rustic Wood Canopy Bed",
    price: 599.00, rating: 4.6,
    image: "https://freerangingdesigns.com/cdn/shop/files/rustic-oak-four-poster-tree-bed-7189653.jpg?v=1759412233&width=2048",
    images: ["https://freerangingdesigns.com/cdn/shop/files/rustic-oak-four-poster-tree-bed-7189653.jpg?v=1759412233&width=2048"],
    colors: ["#5b3a26"], material: "Solid acacia wood",
    desc: "A four-post canopy bed in solid acacia wood, left with a raw, textured finish that brings rustic warmth to any bedroom."
  },

  /* ---------------- WARDROBES ---------------- */
  {
    id: "wd-01", category: "wardrobes", name: "2-Door Wardrobe",
    price: 279.00, rating: 4.5,
    image: "https://roco.pk/wp-content/uploads/2026/04/Frost-Wardrobe-Grey.webp",
    images: ["https://roco.pk/wp-content/uploads/2026/04/Frost-Wardrobe-Grey.webp"],
    colors: ["#cabba0", "#5b3a26"], material: "Engineered wood, soft-close hinges",
    desc: "A practical two-door wardrobe with internal shelving and a hanging rail, finished with soft-close hinges for quiet daily use."
  },
  {
    id: "wd-02", category: "wardrobes", name: "3-Door Sliding Wardrobe",
    price: 389.00, rating: 4.6,
    image: "https://cdn11.bigcommerce.com/s-zllqv0a9td/images/stencil/1000w/products/6675/982989/c6ad406253b661e43e0c78d91805595e6109d68a__82722.1720032222.jpg",
    images: ["https://cdn11.bigcommerce.com/s-zllqv0a9td/images/stencil/1000w/products/6675/982989/c6ad406253b661e43e0c78d91805595e6109d68a__82722.1720032222.jpg"],
    colors: ["#3b2e25"], material: "Solid wood frame, mirrored sliding panels",
    desc: "A wide sliding wardrobe with mirrored panels that save floor space while doubling as a full-length mirror."
  },
  {
    id: "wd-03", category: "wardrobes", name: "Walk-In Closet Unit",
    price: 549.00, rating: 4.7,
    image: "https://www.creativeclosetsme.com/media/ni4jxda3/img_6836.jpg?rmode=max&width=500",
    images: ["https://www.creativeclosetsme.com/media/ni4jxda3/img_6836.jpg?rmode=max&width=500"],
    colors: ["#5b3a26", "#cabba0"], material: "Modular solid wood shelving",
    desc: "A modular open wardrobe system with adjustable shelving, drawers, and a hanging rail — built to be configured around your wardrobe."
  },
  {
    id: "wd-04", category: "wardrobes", name: "Compact Single Wardrobe",
    price: 199.00, rating: 4.3,
    image: "https://images.woodenstreet.de/image/cache/data/wardrobe/holden-single-door-wardrobe/revised/revised/honey/updated/new-logo/1-750x650.jpg",
    images: ["https://images.woodenstreet.de/image/cache/data/wardrobe/holden-single-door-wardrobe/revised/revised/honey/updated/new-logo/1-750x650.jpg"],
    colors: ["#cabba0"], material: "Engineered wood",
    desc: "A single-door wardrobe sized for compact bedrooms, with one hanging section and two internal shelves."
  },
  {
    id: "wd-05", category: "wardrobes", name: "Rustic Armoire",
    price: 459.00, rating: 4.5,
    image: "https://www.therusticmile.com/cdn/shop/files/TRADITIONALSIERRAGARAGESTORAGEUNIT.jpg?v=1778269564",
    images: ["https://www.therusticmile.com/cdn/shop/files/TRADITIONALSIERRAGARAGESTORAGEUNIT.jpg?v=1778269564"],
    colors: ["#5b3a26", "#3b2e25"], material: "Solid reclaimed wood",
    desc: "A freestanding armoire in reclaimed solid wood, with iron handles and a weathered finish that brings character to any room."
  },

  /* ---------------- TV UNITS ---------------- */
  {
    id: "tv-01", category: "tv-units", name: "Media TV Unit",
    price: 219.00, rating: 4.6,
    image: "https://interwood.pk/cdn/shop/files/ChatGPT_Image_Aug_8_2025_03_04_18_PM.png?v=1757336084",
    images: ["https://interwood.pk/cdn/shop/files/ChatGPT_Image_Aug_8_2025_03_04_18_PM.png?v=1757336084"],
    colors: ["#3b2e25", "#5b3a26"], material: "Solid wood, cable management routing",
    desc: "A low-profile media unit with open shelving and built-in cable routing, sized to fit screens up to 65 inches."
  },
  {
    id: "tv-02", category: "tv-units", name: "Floating TV Console",
    price: 259.00, rating: 4.5,
    image: "https://walkeredison.com/cdn/shop/files/SFLMF3FCO_ALL_US_LS_01_e42a9d40-1286-4c07-a70c-b0b9c321aae8.jpg?v=1753129796&width=1000",
    images: ["https://walkeredison.com/cdn/shop/files/SFLMF3FCO_ALL_US_LS_01_e42a9d40-1286-4c07-a70c-b0b9c321aae8.jpg?v=1753129796&width=1000"],
    colors: ["#cabba0"], material: "Wall-mounted solid wood",
    desc: "A wall-mounted floating console that keeps the floor clear, with two soft-close drawers for hiding media clutter."
  },
  {
    id: "tv-03", category: "tv-units", name: "Wood & Iron TV Stand",
    price: 239.00, rating: 4.4,
    image: "https://ak1.ostkcdn.com/images/products/is/images/direct/66d6ca4bc9bb96bb8f7632e901dca504f5ecae96/TV-Table-with-Storage-Shelves.jpg?impolicy=medium",
    images: ["https://ak1.ostkcdn.com/images/products/is/images/direct/66d6ca4bc9bb96bb8f7632e901dca504f5ecae96/TV-Table-with-Storage-Shelves.jpg?impolicy=medium"],
    colors: ["#5b3a26", "#3b2e25"], material: "Solid wood top, powder-coated iron frame",
    desc: "An industrial-leaning TV stand pairing a solid wood top with a powder-coated iron frame for an understated, sturdy base."
  },
  {
    id: "tv-04", category: "tv-units", name: "Tall TV Entertainment Unit",
    price: 329.00, rating: 4.7,
    image: "https://elyfarmhousefurniture.co.uk/cdn/shop/files/TV_Media_Storage_Unit_1_large.jpg?v=1729003029",
    images: ["https://elyfarmhousefurniture.co.uk/cdn/shop/files/TV_Media_Storage_Unit_1_large.jpg?v=1729003029"],
    colors: ["#3b2e25"], material: "Engineered wood, glass shelving",
    desc: "A tall entertainment unit combining closed cabinets and open glass shelves — built to hold the TV and everything around it."
  },
  {
    id: "tv-05", category: "tv-units", name: "Compact Corner TV Unit",
    price: 189.00, rating: 4.3,
    image: "https://www.aldiss.com/images/products/standard/8830_30766.jpg",
    images: ["https://www.aldiss.com/images/products/standard/8830_30766.jpg"],
    colors: ["#cabba0", "#5b3a26"], material: "Solid wood",
    desc: "A corner-fit TV unit designed to make use of awkward room angles without losing storage or style."
  },

  /* ---------------- ACCENT CHAIRS ---------------- */
  {
    id: "ac-01", category: "recliners", name: "Velvet Wingback Chair",
    price: 219.00, rating: 4.6,
    image: "https://i5.walmartimages.com/seo/Furniliving-Velvet-Wingback-Chair-Tufted-Button-Back-Accent-Chair-Contemporary-Leisure-Chair-Pink_eea1c6f3-cedb-4e37-8049-96c304866e33.e36b1be16e04439aeb2567efe015dd25.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
    images: ["https://i5.walmartimages.com/seo/Furniliving-Velvet-Wingback-Chair-Tufted-Button-Back-Accent-Chair-Contemporary-Leisure-Chair-Pink_eea1c6f3-cedb-4e37-8049-96c304866e33.e36b1be16e04439aeb2567efe015dd25.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF"],
    colors: ["#5b2e2e", "#3b2e25"], material: "Solid wood legs, velvet upholstery",
    desc: "A wingback accent chair in soft velvet, raised on tapered solid wood legs — a statement seat for a reading corner."
  },
  {
    id: "ac-02", category: "recliners", name: "Rattan Accent Chair",
    price: 169.00, rating: 4.4,
    image: "https://www.thebaliconcept.co.uk/cdn/shop/files/Rattan-Accent-Chair-2026-7-2.jpg?v=1773773670&width=1946",
    images: ["https://www.thebaliconcept.co.uk/cdn/shop/files/Rattan-Accent-Chair-2026-7-2.jpg?v=1773773670&width=1946"],
    colors: ["#cabba0"], material: "Hand-woven rattan, solid wood frame",
    desc: "A hand-woven rattan accent chair on a solid wood frame, light enough to move from room to room as the mood calls for it."
  },
  {
    id: "ac-03", category: "recliners", name: "Bouclé Swivel Chair",
    price: 249.00, rating: 4.7,
    image: "https://www.luxoliving.com.au/cdn/shop/files/LZBEARE-CWT_2.jpg?v=1751006506&width=1946",
    images: ["https://www.luxoliving.com.au/cdn/shop/files/LZBEARE-CWT_2.jpg?v=1751006506&width=1946"],
    colors: ["#cabba0", "#7a4b3a"], material: "Bouclé fabric, swivel base",
    desc: "A rounded, textured bouclé chair on a smooth swivel base — soft to the touch and easy to turn toward the conversation."
  },
  {
    id: "ac-04", category: "recliners", name: "Leather Accent Armchair",
    price: 289.00, rating: 4.8,
    image: "https://img5.su-cdn.com/cdn-cgi/image/width=750,height=750/mall/file/2024/01/31/4ab4592aee6bb18cda1ecc9e524e126a.jpg",
    images: ["https://img5.su-cdn.com/cdn-cgi/image/width=750,height=750/mall/file/2024/01/31/4ab4592aee6bb18cda1ecc9e524e126a.jpg"],
    colors: ["#5b2e2e", "#3b2e25"], material: "Top-grain leather, solid wood frame",
    desc: "A top-grain leather armchair on a solid wood frame, designed to soften and deepen in color with years of use."
  },
  {
    id: "ac-05", category: "recliners", name: "Carved Wood Accent Chair",
    price: 199.00, rating: 4.5,
    image: "https://cdn2.panhomestores.com/media/catalog/product/0/3/033ALJ2000015_01_4.JPG",
    images: ["https://cdn2.panhomestores.com/media/catalog/product/0/3/033ALJ2000015_01_4.JPG"],
    colors: ["#5b3a26"], material: "Hand-carved solid wood, cushioned seat",
    desc: "A hand-carved solid wood accent chair with a cushioned seat pad — equal parts sculpture and seating."
  },

  /* ---------------- COFFEE TABLES ---------------- */
  {
    id: "ct-01", category: "coffee-tables", name: "Live-Edge Coffee Table",
    price: 229.00, rating: 4.7,
    image: "https://images.unsplash.com/photo-1499933374294-4584851497cc?q=80&w=900&auto=format&fit=crop",
    images: ["https://images.unsplash.com/photo-1499933374294-4584851497cc?q=80&w=1200&auto=format&fit=crop"],
    colors: ["#5b3a26"], material: "Solid live-edge walnut, iron hairpin legs",
    desc: "A live-edge walnut coffee table that keeps the tree's natural silhouette, set on slim iron hairpin legs."
  },
  {
    id: "ct-02", category: "coffee-tables", name: "Round Wood Coffee Table",
    price: 179.00, rating: 4.5,
    image: "https://shopkeel.com/cdn/shop/files/PXL-20221107-062521519-01-_1.jpg?v=1736159393",
    images: ["https://shopkeel.com/cdn/shop/files/PXL-20221107-062521519-01-_1.jpg?v=1736159393"],
    colors: ["#7a4b3a", "#3b2e25"], material: "Solid mango wood",
    desc: "A round coffee table in solid mango wood with a softly turned base, sized to anchor any seating arrangement."
  },
  {
    id: "ct-03", category: "coffee-tables", name: "Nesting Coffee Table Set",
    price: 199.00, rating: 4.4,
    image: "https://www.ritconcept.com/cdn/shop/files/Avery_Nesting_Coffee_Table_Set_Round_With_Storage_Glass_5e95c459-b6a8-4b60-96e0-76bde2df3d2c.png?v=1781172552",
    images: ["https://www.ritconcept.com/cdn/shop/files/Avery_Nesting_Coffee_Table_Set_Round_With_Storage_Glass_5e95c459-b6a8-4b60-96e0-76bde2df3d2c.png?v=1781172552"],
    colors: ["#3b2e25", "#cabba0"], material: "Engineered wood, powder-coated steel frame",
    desc: "A set of two nesting tables that tuck neatly together, finished in wood and slim steel for a light footprint."
  },
  {
    id: "ct-04", category: "coffee-tables", name: "Marble-Top Coffee Table",
    price: 269.00, rating: 4.8,
    image: "https://www.woodenbazar.com/cdn/shop/files/sumoo-35-5-wood-brown-round-coffee-table-faux-marble-top-and-center-343.webp?v=1756945751",
    images: ["https://www.woodenbazar.com/cdn/shop/files/sumoo-35-5-wood-brown-round-coffee-table-faux-marble-top-and-center-343.webp?v=1756945751"],
    colors: ["#cabba0"], material: "Genuine marble top, solid wood base",
    desc: "A genuine marble-top coffee table set on a solid wood base — cool to the touch and built to be the room's centerpiece."
  },

  /* ---------------- DOORS ---------------- */
  {
    id: "dr-01", category: "doors", name: "Solid Wood Panel Door",
    price: 349.00, rating: 4.6,
    image: "https://img.yfisher.com/m0/1765425053213-1/jpg70-t4-width720.webp",
    images: ["https://img.yfisher.com/m0/1765425053213-1/jpg70-t4-width720.webp"],
    colors: ["#5b3a26", "#3b2e25"], material: "Solid teak panel construction",
    desc: "A solid teak panel door with a hand-rubbed finish, built to the weight and feel of a piece meant to last decades."
  },
  {
    id: "dr-02", category: "doors", name: "French Glass Door",
    price: 389.00, rating: 4.7,
    image: "https://www.masterpiecedoors.com/wp-content/uploads/2025/09/Door-102-Modern-French-6-Lite-Painted-Agreeable-Grey.webp",
    images: ["https://www.masterpiecedoors.com/wp-content/uploads/2025/09/Door-102-Modern-French-6-Lite-Painted-Agreeable-Grey.webp"],
    colors: ["#cabba0", "#3b2e25"], material: "Solid wood frame, tempered glass panels",
    desc: "A French-style double door with tempered glass panes set in a solid wood frame, bringing light between rooms."
  },
  {
    id: "dr-03", category: "doors", name: "Sliding Barn Door",
    price: 299.00, rating: 4.5,
    image: "https://barndooroutlet.com.au/cdn/shop/articles/barn_door.jpg?v=1743131246",
    images: ["https://barndooroutlet.com.au/cdn/shop/articles/barn_door.jpg?v=1743131246"],
    colors: ["#5b3a26"], material: "Reclaimed wood, iron sliding track",
    desc: "A reclaimed wood sliding barn door with a black iron track — rustic character with a smooth, space-saving glide."
  },
  {
    id: "dr-04", category: "doors", name: "Carved Wooden Entry Door",
    price: 459.00, rating: 4.8,
    image: "https://i.etsystatic.com/60065108/r/il/3a8c31/7966112755/il_fullxfull.7966112755_9qc3.jpg",
    images: ["https://i.etsystatic.com/60065108/r/il/3a8c31/7966112755/il_fullxfull.7966112755_9qc3.jpg"],
    colors: ["#3b2e25"], material: "Hand-carved solid hardwood",
    desc: "A hand-carved solid hardwood entry door with detailed relief work, made as a statement piece for a grand entrance."
  }
];

const CATEGORY_META = {
  sofas: {
    title: "Sofas", tagline: "Deep seats and solid frames, built to anchor your living room for years.",
    hero: "https://roco.pk/wp-content/uploads/2024/09/Lavender-Pure-Leather-Sofa.webp",
    video: "videos/SOFA.mp4", from: 389
  },
  dining: {
    title: "Dining Sets", tagline: "Tables and chairs crafted in solid wood, made for long meals and longer memories.",
    hero: "https://habitt.com/cdn/shop/files/19_3b2856a1-2a1c-4239-8387-b42849d54d58.jpg?v=1775045029",
    video: "videos/Diningnew.mp4", from: 379
  },
  beds: {
    title: "Beds", tagline: "Frames and headboards built from solid timber, designed around real rest.",
    hero: "https://atozfurniture.ae/images/products/prod_777/margaret-modern-and-contemporary-bed-main.jpg",
    video: "videos/BED.mp4", from: 449
  },
  wardrobes: {
    title: "Wardrobes", tagline: "Storage built to last, with finishes that fit any bedroom.",
    hero: "https://media.istockphoto.com/id/2157081744/photo/modern-built-in-wardrobe-closet-with-personal-accessories.jpg?s=612x612&w=0&k=20&c=fC5Z3S3cOmudbTzvc8fvK9ph18LlNBOUYnFc70QuyBE=",
    video: "videos/Wardrobenew.mp4", from: 199
  },
  "coffee-tables": {
    title: "Coffee Tables", tagline: "Centerpiece tables in solid wood, marble, and stone for every living room.",
    hero: "https://i5.walmartimages.com/asr/2c936db8-b9c3-4946-b090-eeea95de556e.61786b68a2400c057197079ebff88573.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
    video: "videos/Coffeenew.mp4", from: 179
  },
  recliners: {
    title: "Recliners", tagline: "Statement seating in wood, leather, rattan, and velvet — built to relax into.",
    hero: "https://www.nilkamalhomes.com/cdn/shop/articles/What_Are_Recliners_and_What_Are_The_Types_Of_It_a8b90922-6bc8-47fd-99fa-d512405c15e9.jpg?v=1777545592&width=750",
    video: "videos/Recnew.mp4", from: 169
  },
  "tv-units": {
    title: "TV Units", tagline: "Media furniture that hides the clutter and keeps the focus on the screen.",
    hero: "https://img.interiorcompany.com/interior/webproduct/contemporary-canadian-walnut-tv-unit-design-with-marble-inspired-panels.png",
    video: "videos/Tvnew.mp4", from: 189
  },
  doors: {
    title: "Doors", tagline: "Solid wood entry, sliding, and panel doors finished by hand.",
    hero: "https://i.pinimg.com/originals/05/d2/bc/05d2bccbd0c62c2cf5f6edd3692222ae.jpg",
    video: "videos/DOOR.mp4", from: 299
  }
};

const HERO_VIDEO = "https://assets.mixkit.co/videos/3091/3091-360.mp4";

function getProductById(id){ return PRODUCTS.find(p => p.id === id); }
function getProductsByCategory(cat){ return PRODUCTS.filter(p => p.category === cat); }
