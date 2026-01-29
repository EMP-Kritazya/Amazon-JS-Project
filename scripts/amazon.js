//  This kinda works like products database

const products = [
  {
    image: "images/athletic-cotton-socks-6-pairs.jpg",
    name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
    rating: {
      stars: 4.5,
      count: 87,
    },
    priceCents: 1090,
  },
  {
    image: "images/intermediate-composite-basketball.jpg",
    name: "Intermediate Size Basketball",
    rating: {
      stars: 4,
      count: 127,
    },
    priceCents: 2095,
  },
  {
    image: "images/adults-plain-cotton-tshirt-2-pack-teal.jpg",
    name: "Adults Plain Cotton T-Shirt - 2 Pack",
    rating: {
      stars: 4.5,
      count: 56,
    },
    priceCents: 799,
  },
  {
    image: "images/black-2-slot-toaster.jpg",
    name: "2 Slot Toaster - Black",
    rating: {
      stars: 5,
      count: 2197,
    },
    priceCents: 1899,
  },
  {
    image: "images/6-piece-white-dinner-plate-set.jpg",
    name: "6 Piece White Dinner Plate Set",
    rating: {
      stars: 4,
      count: 37,
    },
    priceCents: 2067,
  },
  {
    image: "images/6-piece-non-stick-baking-set.webp",
    name: "6-Piece Nonstick, Carbon Steel Oven Bakeware Baking Set",
    rating: {
      stars: 4.5,
      count: 175,
    },
    priceCents: 3499,
  },
  {
    image: "images/plain-hooded-fleece-sweatshirt-yellow.jpg",
    name: "Plain Hooded Fleece Sweatshirt",
    rating: {
      stars: 4.5,
      count: 317,
    },
    priceCents: 2400,
  },
  {
    image: "images/luxury-tower-set-6-piece.jpg",
    name: "Luxury Towel Set - Graphite Gray",
    rating: {
      stars: 4.5,
      count: 144,
    },
    priceCents: 3599,
  },
  {
    image: "images/liquid-laundry-detergent-plain.jpg",
    name: "Liquid Laundry Detergent, 110 Loads, 82.5 Fl Oz",
    rating: {
      stars: 4.5,
      count: 305,
    },
    priceCents: 2899,
  },
  {
    image: "images/knit-athletic-sneakers-gray.jpg",
    name: "Waterproof Knit Athletic Sneakers - Gray",
    rating: {
      stars: 4,
      count: 89,
    },
    priceCents: 3390,
  },
  {
    image: "images/women-chiffon-beachwear-coverup-black.jpg",
    name: "Women's Chiffon Beachwear Cover Up - Black",
    rating: {
      stars: 4.5,
      count: 235,
    },
    priceCents: 2070,
  },
  {
    image: "images/round-sunglasses-black.jpg",
    name: "Round Sunglasses",
    rating: {
      stars: 4.5,
      count: 30,
    },
    priceCents: 1560,
  },
  {
    image: "images/women-beach-sandals.jpg",
    name: "Women's Two Strap Buckle Sandals - Tan",
    rating: {
      stars: 4.5,
      count: 562,
    },
    priceCents: 2499,
  },
  {
    image: "images/blackout-curtain-set-beige.webp",
    name: "Blackout Curtains Set 4-Pack - Beige",
    rating: {
      stars: 4.5,
      count: 232,
    },
    priceCents: 4599,
  },
  {
    image: "images/men-slim-fit-summer-shorts-gray.jpg",
    name: "Men's Slim-Fit Summer Shorts",
    rating: {
      stars: 4,
      count: 160,
    },
    priceCents: 1699,
  },
  {
    image: "images/electric-glass-and-steel-hot-water-kettle.webp",
    name: "Electric Glass and Steel Hot Tea Water Kettle - 1.7-Liter",
    rating: {
      stars: 5,
      count: 846,
    },
    priceCents: 3074,
  },
  {
    image: "images/facial-tissue-2-ply-18-boxes.jpg",
    name: "Ultra Soft Tissue 2-Ply - 18 Box",
    rating: {
      stars: 4,
      count: 99,
    },
    priceCents: 2374,
  },
  {
    image: "images/straw-sunhat.webp",
    name: "Straw Lifeguard Sun Hat",
    rating: {
      stars: 4,
      count: 215,
    },
    priceCents: 2200,
  },
  {
    image: "images/sky-flower-stud-earrings.webp",
    name: "Sterling Silver Sky Flower Stud Earrings",
    rating: {
      stars: 4.5,
      count: 52,
    },
    priceCents: 1799,
  },
  {
    image: "images/women-stretch-popover-hoodie-black.jpg",
    name: "Women's Stretch Popover Hoodie",
    rating: {
      stars: 4.5,
      count: 2465,
    },
    priceCents: 1374,
  },
  {
    image: "images/bathroom-rug.jpg",
    name: "Bathroom Bath Rug Mat 20 x 31 Inch - Grey",
    rating: {
      stars: 4.5,
      count: 119,
    },
    priceCents: 1250,
  },
  {
    image: "images/women-knit-ballet-flat-black.jpg",
    name: "Women's Knit Ballet Flat",
    rating: {
      stars: 4,
      count: 326,
    },
    priceCents: 2640,
  },
  {
    image: "images/men-golf-polo-t-shirt-blue.jpg",
    name: "Men's Regular-Fit Quick-Dry Golf Polo Shirt",
    rating: {
      stars: 4.5,
      count: 2556,
    },
    priceCents: 1599,
  },
  {
    image: "images/trash-can-with-foot-pedal-50-liter.jpg",
    name: "Trash Can with Foot Pedal Brushed Stainless Steel",
    rating: {
      stars: 4.5,
      count: 2286,
    },
    priceCents: 8300,
  },
  {
    image: "images/duvet-cover-set-blue-twin.jpg",
    name: "Duvet Cover Set with Zipper Closure",
    rating: {
      stars: 4,
      count: 456,
    },
    priceCents: 2399,
  },
  {
    image: "images/women-chunky-beanie-gray.webp",
    name: "Women's Chunky Cable Beanie - Gray",
    rating: {
      stars: 5,
      count: 83,
    },
    priceCents: 1250,
  },
  {
    image: "images/men-chino-pants-beige.jpg",
    name: "Men's Classic-fit Pleated Chino Pants",
    rating: {
      stars: 4.5,
      count: 9017,
    },
    priceCents: 2290,
  },
  {
    image: "images/men-athletic-shoes-green.jpg",
    name: "Men's Athletic Sneaker",
    rating: {
      stars: 4,
      count: 229,
    },
    priceCents: 3890,
  },
  {
    image: "images/men-navigator-sunglasses-brown.jpg",
    name: "Men's Navigator Sunglasses Pilot",
    rating: {
      stars: 3.5,
      count: 42,
    },
    priceCents: 1690,
  },
  {
    image: "images/non-stick-cooking-set-15-pieces.webp",
    name: "Non-Stick Cookware Set, Pots, Pans and Utensils - 15 Pieces",
    rating: {
      stars: 4.5,
      count: 511,
    },
    priceCents: 6797,
  },
  {
    image: "images/vanity-mirror-silver.jpg",
    name: "Vanity Mirror with Heavy Base - Chrome",
    rating: {
      stars: 4.5,
      count: 130,
    },
    priceCents: 1649,
  },
  {
    image: "images/women-french-terry-fleece-jogger-camo.jpg",
    name: "Women's Fleece Jogger Sweatpant",
    rating: {
      stars: 4.5,
      count: 248,
    },
    priceCents: 2400,
  },
  {
    image: "images/double-elongated-twist-french-wire-earrings.webp",
    name: "Double Oval Twist French Wire Earrings - Gold",
    rating: {
      stars: 4.5,
      count: 117,
    },
    priceCents: 2400,
  },
  {
    image: "images/round-airtight-food-storage-containers.jpg",
    name: "Round Airtight Food Storage Containers - 5 Pieces",
    rating: {
      stars: 4,
      count: 126,
    },
    priceCents: 2899,
  },
  {
    image: "images/coffeemaker-with-glass-carafe-black.jpg",
    name: "Coffeemaker with Glass Carafe and Reusable Filter - 25 Oz, Black",
    rating: {
      stars: 4.5,
      count: 1211,
    },
    priceCents: 2250,
  },
  {
    image: "images/blackout-curtains-black.jpg",
    name: "Blackout Curtains Set 42 x 84-Inch - Black, 2 Panels",
    rating: {
      stars: 4.5,
      count: 363,
    },
    priceCents: 3099,
  },
  {
    image: "images/cotton-bath-towels-teal.webp",
    name: "100% Cotton Bath Towels - 2 Pack, Light Teal",
    rating: {
      stars: 4.5,
      count: 93,
    },
    priceCents: 2110,
  },
  {
    image: "images/knit-athletic-sneakers-pink.webp",
    name: "Waterproof Knit Athletic Sneakers - Pink",
    rating: {
      stars: 4,
      count: 89,
    },
    priceCents: 3390,
  },
  {
    image: "images/countertop-blender-64-oz.jpg",
    name: "Countertop Blender - 64oz, 1400 Watts",
    rating: {
      stars: 4,
      count: 3,
    },
    priceCents: 10747,
  },
  {
    image: "images/floral-mixing-bowl-set.jpg",
    name: "10-Piece Mixing Bowl Set with Lids - Floral",
    rating: {
      stars: 5,
      count: 679,
    },
    priceCents: 3899,
  },
  {
    image: "images/kitchen-paper-towels-30-pack.jpg",
    name: "2-Ply Kitchen Paper Towels - 30 Pack",
    rating: {
      stars: 4.5,
      count: 1045,
    },
    priceCents: 5799,
  },
  {
    image: "images/men-cozy-fleece-zip-up-hoodie-red.jpg",
    name: "Men's Full-Zip Hooded Fleece Sweatshirt",
    rating: {
      stars: 4.5,
      count: 3157,
    },
    priceCents: 2400,
  },
];

let productsHTML = "";

products.forEach((product) => {
  productsHTML += `
    <div class="product-area">
      <div class="product-details">
        <div class="product-image">
          <img src="${product.image}" alt="" />
        </div>
        <div class="product-description limit-to-two-lines">
          ${product.name}
        </div>
        <div class="product-rating">
          <div class="stars">
            <img src="images/rating-${product.rating.stars * 10}.png" alt="" />
          </div>
          <div class="number-bought">${product.rating.count}</div>
        </div>
        <div class="product-price">$${product.priceCents / 100}</div>
        <div class="product-quantity-container">
          <select>
            <option selected value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
      </div>
      <div class="added-to-cart">
        <img src="images/checkmark.png" alt="" />
        <div class="added-text">Added</div>
      </div>
      <button class="add-to-cart">Add to Cart</button>
    </div>
  `;
});

document.querySelector(".js-products-grid").innerHTML = productsHTML;
