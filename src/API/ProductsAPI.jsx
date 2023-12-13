const ProductsAPI = [
  {
    id: 40001,
    category: "Electronics",
    subcategory: "Mobiles",
    subSubcategory: "Android",
    name: "Example Android Smartphone A",
    brand: "DroidTech",
    model: "A500",
    description:
      "A versatile Android smartphone with a sleek design and powerful performance.",
    specifications: {
      display: "6.0-inch OLED",
      processor: "Octa-core Snapdragon 870",
      RAM: "6GB",
      storage: "128GB",
      camera: "Triple-camera setup: 48MP + 12MP + 8MP",
      battery: "4000mAh",
      operatingSystem: "Android 11",
      connectivity: "5G, Wi-Fi 6E, Bluetooth 5.1",
      color: "Silver",
      weight: "175g",
    },
    price: 799.99,
    offerPrice:762.99,
    stock: 120,
thumbnail: "https://m.media-amazon.com/images/I/61rDctkPw6L.jpg",
    images: [
      "https://m.media-amazon.com/images/I/61hlk+G9lFL.jpg",
      "https://m.media-amazon.com/images/I/61cqILly6UL.jpg",
    ],
    ratings: {
      average: 4.2,
      total: 90,
    },
    reviews: [
      {
        user: "AndroidFan123",
        rating: 4,
        comment: "Great phone with a good camera!",
      },
      {
        user: "TechEnthusiast",
        rating: 4,
        comment: "Smooth performance and long battery life.",
      },
    ],
    saleAvailable: true,
    featured: true,
  },
  {
    id: 50001,
    category: "Electronics",
    subcategory: "Mobiles",
    subSubcategory: "iOS",
    name: "Example iOS Smartphone B",
    brand: "iGadget",
    model: "B800",
    description:
      "An elegant iOS smartphone offering top-notch performance and security.",
    specifications: {
      display: "5.8-inch Super Retina XDR",
      processor: "Apple A14 Bionic",
      RAM: "4GB",
      storage: "256GB",
      camera: "Dual-camera system: 12MP + 12MP",
      battery: "3500mAh",
      operatingSystem: "iOS 14",
      connectivity: "5G, Wi-Fi 6, Bluetooth 5.0",
      color: "Gold",
      weight: "155g",
    },
    price: 1099.99,
    offerPrice:999.99,
    stock: 100,
    thumbnail: "https://www.designinfo.in/wp-content/uploads/2023/01/Apple-iPhone-14-Pro-Mobile-Phone-493177786-i-1-1200Wx1200H-optimized.jpeg",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTtozC9B3I43eNw3bFNUHTuJpQZ9ID6OmMI9RNs3AHsVLtvoSM0IPtMnJX6bY8Pc-qE34&usqp=CAU",
      "https://www.mygsm.me/media/catalog/product/cache/a1d6eef6c74f0dc23a2b42b2a746a314/i/p/iphone-14-blue_12.jpg",
    ],
    ratings: {
      average: 4.6,
      total: 110,
    },
    reviews: [
      {
        user: "AppleLover",
        rating: 5,
        comment: "Fantastic device, top-notch performance!",
      },
      {
        user: "iOSFanatic",
        rating: 4,
        comment: "Smooth interface and excellent camera quality.",
      },
   
    ],
    saleAvailable: false,
    featured: true,
  },
  {
    id: 30001,
    category: "Electronics",
    subcategory: "Mobiles",
    subSubcategory: "Feature Phones",
    name: "Example Feature Phone Z",
    brand: "TechMaster",
    model: "Z1000",
    description:
      "A reliable and easy-to-use feature phone for basic communication needs.",
    specifications: {
      display: "2.4-inch LCD",
      processor: "Single-core",
      RAM: "512MB",
      storage: "4GB (expandable)",
      camera: "2MP Rear Camera",
      battery: "2000mAh",
      operatingSystem: "Proprietary OS",
      connectivity: "2G, Bluetooth 4.0",
      color: "Black",
      weight: "90g",
    },
    price: 49.99,
    offerPrice:46.99,
    stock: 200,
    thumbnail: "https://images.ctfassets.net/wcfotm6rrl7u/4HIoKwUGQwXFBYD8YTPO60/28b1387daf0e238067ac546f0092a3ca/nokia-105-cyan-front_back-int.png",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvS5X4oL5_pLp4Dv3fXpE2cNSLZro-YaMiRJSxNTQgBwyXLHC8DMTx49qbxEME9Kcmky8&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS99RscQp_5MugJFoMU_FmN86ixlnEX77Cek-wIv6UWhgpRbE6A-ddjPSg5N2Eq9dOcEHI&usqp=CAU",
    ],
    ratings: {
      average: 4.0,
      total: 30,
    },
    reviews: [
      {
        user: "SimpleUser",
        rating: 4,
        comment: "Great as a secondary phone!",
      },
      {
        user: "TechReviewer",
        rating: 3,
        comment: "Good for basic usage, but limited features.",
      },
   
    ],
    saleAvailable: true,
    featured: false,
  },
  {
    id: 60001,
    category: "Electronics",
    subcategory: "Laptops",
    subSubcategory: "Gaming Laptops",
    name: "Example Gaming Laptop C",
    brand: "GamerTech",
    model: "C700",
    description:
      "A powerful gaming laptop built for high-performance gaming experiences.",
    specifications: {
      display: "15.6-inch Full HD IPS",
      processor: "Intel Core i7-11800H",
      RAM: "16GB DDR4",
      storage: "512GB SSD + 1TB HDD",
      graphicsCard: "NVIDIA GeForce RTX 3080",
      battery: "6-cell 70Wh",
      operatingSystem: "Windows 11",
      connectivity: "Wi-Fi 6E, Bluetooth 5.2, Gigabit Ethernet",
      color: "Black",
      weight: "2.5kg",
    },
    price: 1899.99,
    offerPrice:1699.99,
    stock: 80,
    thumbnail: "https://i5.walmartimages.com/seo/Dell-Alienware-m17-Ryzen-Edition-R5-Gaming-Laptop-2022-17-3-FHD-480Hz-Core-7-512GB-SSD-16GB-RAM-RTX-3060-8-Cores-4-7-GHz-Win-11-Home_6e4d531f-3278-4491-84f9-50072d1b9c16.3785152672a587f0993469d6b3129500.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
    images: [
      "https://i5.walmartimages.com/seo/Restored-Dell-Alienware-X14-Gaming-Laptop-2022-14-FHD-Core-i7-512GB-SSD-32GB-RAM-RTX-3060-14-Cores-4-7-GHz-12th-Gen-CPU-12GB-GDDR6-Refurbished_da20a1ef-5d16-4302-ace1-bdc62fe3e814.11fdca6d2845935e1c915542c3838799.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQId0aGB56So14cCc-uhNI4Ac0kFxiXOhnx2ICPERhvugVo_UClWuGzdR2gCGnLFFeFmbc&usqp=CAU",
    ],
    ratings: {
      average: 4.8,
      total: 65,
    },
    reviews: [
      {
        user: "GamingEnthusiast",
        rating: 5,
        comment:
          "Excellent laptop for gaming, handles high-end games flawlessly.",
      },
      {
        user: "TechGuru89",
        rating: 4,
        comment: "Impressive performance but a bit heavy to carry around.",
      },
   
    ],
    saleAvailable: true,
    featured: true,
  },
  {
    id: 70001,
    category: "Electronics",
    subcategory: "Laptops",
    subSubcategory: "Business Laptops",
    name: "Example Business Laptop D",
    brand: "BizTech",
    model: "D900",
    description:
      "A reliable business laptop tailored for professional use and productivity.",
    specifications: {
      display: "14-inch Full HD IPS",
      processor: "Intel Core i5-1135G7",
      RAM: "8GB DDR4",
      storage: "256GB NVMe SSD",
      battery: "4-cell 50Wh",
      operatingSystem: "Windows 10 Pro",
      connectivity: "Wi-Fi 6, Bluetooth 5.1, Gigabit Ethernet",
      color: "Silver",
      weight: "1.6kg",
    },
    price: 1199.99,
    offerPrice:999.99,
    stock: 100,
    thumbnail:
      "https://cdn.thewirecutter.com/wp-content/media/2020/12/macbook-2048px-4.jpg",
    images: [
      "https://i.insider.com/5beca52f8c35ab06bb70d534?width=750&format=jpeg&auto=webp",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ97DMQT-qtvxRShWYTGBGR5ufhT3e1x__GhdjLvi4Gnffi2lAVPz0mclT1tkmR2Oi4QE&usqp=CAU",
    ],
    ratings: {
      average: 4.6,
      total: 45,
    },
    reviews: [
      {
        user: "ProfessionalUser",
        rating: 5,
        comment: "Perfect for work, lightweight, and performs smoothly.",
      },
      {
        user: "BusinessExecutive",
        rating: 4,
        comment: "Good battery life and a professional look.",
      },
   
    ],
    saleAvailable: true,
    featured: false,
  },
  {
    id: 80001,
    category: "Electronics",
    subcategory: "Laptops",
    subSubcategory: "2-in-1 Laptops",
    name: "Example 2-in-1 Laptop E",
    brand: "FlexTech",
    model: "E1200",
    description:
      "A versatile 2-in-1 laptop with a convertible design for flexibility in usage.",
    specifications: {
      display: "13.3-inch Full HD Touchscreen",
      processor: "Intel Core i7-1165G7",
      RAM: "12GB LPDDR4X",
      storage: "512GB PCIe SSD",
      battery: "4-cell 60Wh",
      operatingSystem: "Windows 11",
      connectivity: "Wi-Fi 6, Bluetooth 5.2",
      color: "Gray",
      weight: "1.3kg",
    },
    price: 1499.99,
    offerPrice:1399.99,
    stock: 90,
    thumbnail: "https://5.imimg.com/data5/SELLER/Default/2023/3/294267098/OK/KE/RK/3914906/dell-xps-13-2-in-1-laptop-500x500.png",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSriouxorGaeOVazDWTEBYlXuf5d4kgF5t2Err4kI1eUT0_Mq7zC0EBTgicz3YcO70yf6s&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWcABU1r8r6GFP5ZH6lZvcn2MYSa3KmVgZaH-Imi8D5jBVvWIEL5xSRqvgLM76JDaBtaE&usqp=CAU",
    ],
    ratings: {
      average: 4.7,
      total: 55,
    },
    reviews: [
      {
        user: "TechUser567",
        rating: 5,
        comment: "Love the flexibility of using it as a tablet or laptop!",
      },
      {
        user: "VersatileTechie",
        rating: 4,
        comment: "Great performance and a sleek design.",
      },
    ],
    saleAvailable: true,
    featured: true,
  },
  {
    id: 90001,
    category: "Electronics",
    subcategory: "Cameras",
    subSubcategory: "Mirrorless",
    name: "Example Mirrorless Camera F",
    brand: "CaptureTech",
    model: "F3000",
    description:
      "A high-quality mirrorless camera offering exceptional image quality and versatility.",
    specifications: {
      sensor: "APS-C CMOS Sensor",
      resolution: "24.2 megapixels",
      ISO: "100 - 25600 (expandable to 51200)",
      focusPoints: "425-point phase detection",
      viewfinder: "2.4-million dot OLED",
      imageStabilization: "5-axis in-body stabilization",
      video: "4K UHD at 30fps",
      connectivity: "Wi-Fi, Bluetooth",
      color: "Black",
      weight: "550g",
    },
    price: 1599.99,
    offerPrice:1499.99,
    stock: 70,
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxzJjOW4xI6lF4pdg4KKgB01z0YQTEovFlaJ7tcCB0pJBdaEb5fCR98_s71tKo_Q7zKTo&usqp=CAU",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx9TrxY5AeZ0mN4WK2p-p7jUGB3VtTe9K3jxoqJhamYLnFCoMk8PYGo0If37oX4PTz8P0&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfG7Y-Bcn6A-ylAYcDws8jf8cg4XqmMmz-LaaExn8VMQ1Zpa0YP786LWv77F7aF4ISGaE&usqp=CAU",
    ],
    ratings: {
      average: 4.9,
      total: 40,
    },
    reviews: [
      {
        user: "PhotographyPro",
        rating: 5,
        comment: "Amazing image quality and a joy to use!",
      },
      {
        user: "CameraEnthusiast",
        rating: 4,
        comment: "Great features, especially the image stabilization.",
      },
   
    ],
    saleAvailable: true,
    featured: true,
  },
  {
    id: 100001,
    category: "Electronics",
    subcategory: "Cameras",
    subSubcategory: "DSLR",
    name: "Example DSLR Camera G",
    brand: "CapturePro",
    model: "G4000",
    description:
      "A professional-grade DSLR camera for exceptional photography and versatility.",
    specifications: {
      sensor: "Full-frame CMOS Sensor",
      resolution: "30.4 megapixels",
      ISO: "100 - 32000 (expandable to 102400)",
      focusPoints: "61-point AF system",
      viewfinder: "Pentaprism Optical Viewfinder",
      imageStabilization: "Not available",
      video: "4K UHD at 30fps",
      connectivity: "Wi-Fi, NFC, GPS",
      color: "Black",
      weight: "800g",
    },
    price: 2499.99,
    offerPrice:1299.99,
    stock: 50,
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgMHOoAYqNQ6U7ero-IOgvmZ5MTl6-6FRED7vaZsx8Xsrh3wGnibVcVPOlkMKhJgG4UE8&usqp=CAU",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnKVLjLkmTiw4qxI7ANkZILM32LBrWWAEzIQRYCG-fEMY4FBPguiDvF0zazLBAx1TyBB0&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn57f8QIDeCByX6CbqGJz2NInkvH0WxutAJbjKMOdXQJWRUaCWNJhLiFaGsdMA-Ud8rBs&usqp=CAU",
      // More images if available
    ],
    ratings: {
      average: 4.7,
      total: 60,
    },
    reviews: [
      {
        user: "ProfessionalPhotographer",
        rating: 5,
        comment: "Excellent DSLR for professional shoots!",
      },
      {
        user: "PhotographyEnthusiast",
        rating: 4,
        comment: "Great image quality and robust build.",
      },
   
    ],
    saleAvailable: false,
    featured: true,
  },
  {
    id: 110001,
    category: "Electronics",
    subcategory: "Cameras",
    subSubcategory: "Action Cameras",
    name: "Example Action Camera H",
    brand: "ActionTech",
    model: "H100",
    description:
      "A rugged and compact action camera built for capturing adventurous moments.",
    specifications: {
      resolution: "4K Ultra HD at 60fps",
      imageStabilization: "Electronic Image Stabilization",
      fieldOfView: "Wide-angle",
      waterproof: "Up to 10 meters without a case",
      shockproof: "Withstand drops from 2 meters",
      connectivity: "Wi-Fi, Bluetooth",
      color: "Gray",
      weight: "90g",
    },
    price: 299.99,
    offerPrice:236.99,
    stock: 80,
    thumbnail: "https://fotocentreindia.com/wp-content/uploads/2022/10/GoPro-Hero-11-Action-Camera-Online-Buy-Mumbai-India_10.jpg",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0Jehd1dSCpk17KBg6vLB0QAd1iAJM6pMUZpbRPMQ0IGPdNlQIu6hLBqSuNAX2KYrPhxY&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf24euiExigiKjN7Ev5JZyKFPVTqvkMf3EI3uZYVl8m_nYEzaJDAvbMIstE65xf0m7JFQ&usqp=CAU",
      // More images if available
    ],
    ratings: {
      average: 4.5,
      total: 75,
    },
    reviews: [
      {
        user: "AdventureSeeker",
        rating: 5,
        comment: "Perfect for capturing action-packed moments!",
      },
      {
        user: "OutdoorEnthusiast",
        rating: 4,
        comment: "Tough and reliable, great for outdoor adventures.",
      },
   
    ],
    saleAvailable: true,
    featured: false,
  },
  {
    id: 120001,
    category: "Electronics",
    subcategory: "Audio",
    subSubcategory: "Headphones",
    name: "Example Over-Ear Headphones X1",
    brand: "SoundTech",
    model: "X1",
    description: "Premium over-ear headphones for immersive sound experience.",
    specifications: {
      type: "Over-ear",
      connectivity: "Wireless",
      batteryLife: "Up to 30 hours",
      noiseCancellation: "Active Noise Cancellation",
      color: "Black",
    },
    price: 199.99,
    offerPrice:170.99,
    stock: 100,
    thumbnail: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1689156866/Croma%20Assets/Communication/Headphones%20and%20Earphones/Images/273059_0_vecjix.png",
    images: [
      "https://m.media-amazon.com/images/I/51ne5P81eHL._AC_UF1000,1000_QL80_.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx5O-wKd_XyfDbEgUSO2rhhODODmxMjWXNqC_DGDctmN5QTt8Rr9tRRqSwEvWyvQLzHPc&usqp=CAU",
    
    ],
    ratings: {
      average: 4.8,
      total: 90,
    },
    reviews: [
      {
        user: "MusicLover123",
        rating: 5,
        comment: "Excellent sound quality and comfortable fit!",
      },
      {
        user: "TechReviewer22",
        rating: 4,
        comment: "Great noise cancellation feature.",
      },
   
    ],
    saleAvailable: true,
    featured: true,
  },
  {
    id: 120002,
    category: "Electronics",
    subcategory: "Audio",
    subSubcategory: "Speakers",
    name: "Example Bluetooth Speaker Y1",
    brand: "AudioMaster",
    model: "Y1",
    description: "Portable Bluetooth speaker with powerful sound output.",
    specifications: {
      type: "Portable",
      connectivity: "Bluetooth",
      batteryLife: "Up to 10 hours",
      waterproof: "IPX5 rating",
      color: "Blue",
    },
    price: 79.99,
    offerPrice:76.99,
    stock: 150,
    thumbnail: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/2_d572d247-3257-4c1c-8729-523cfdfdacc4.png?v=1671307925",
    images: [
      "https://www.teknikproffset.eu/img/bilder/artiklar/zoom/C13568_4.jpg?m=1664797410",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXYBpc-fOOvtWv4Hh4vcFGg0j6AhtO90gUvi89vGBvR3HEiolv3dP_UetpimnArOVzpRQ&usqp=CAU",
    
    ],
    ratings: {
      average: 4.5,
      total: 120,
    },
    reviews: [
      {
        user: "OutdoorFanatic",
        rating: 5,
        comment: "Impressive sound quality for its size!",
      },
      {
        user: "MusicLover99",
        rating: 4,
        comment: "Good battery life and solid build.",
      },
   
    ],
    saleAvailable: true,
    featured: false,
  },
  {
    id: 120003,
    category: "Electronics",
    subcategory: "Audio",
    subSubcategory: "Soundbars",
    name: "Example Soundbar Z1",
    brand: "CineSound",
    model: "Z1",
    description: "High-quality soundbar for enhanced home theater experience.",
    specifications: {
      type: "Soundbar",
      connectivity: "Bluetooth, HDMI ARC",
      channels: "2.1",
      powerOutput: "120W",
      color: "Black",
    },
    price: 249.99,
    offerPrice:136.99,
    stock: 80,
    thumbnail: "https://rukminim2.flixcart.com/image/850/1000/kyq62kw0/speaker/mobile-tablet-speaker/y/l/9/wireless-soundbar-speaker-with-tws-connection-usb-input-micro-sd-original-imagawctxghx8ydt.jpeg?q=90",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnKHhNasun-6oM6CmGJLFNhkC7vQTZprrudz_Lzdc1IRotU0LYaI78XODte7epgAyav58&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq0ouL9n7ArUz4fA6IFFbBIt-qnV7vzD_wzTYYnJq1_8xKAKJN9iQiVTcmLMUNTHu2XNM&usqp=CAU",
    
    ],
    ratings: {
      average: 4.7,
      total: 85,
    },
    reviews: [
      {
        user: "MovieBuff89",
        rating: 5,
        comment: "Great soundbar, enhances movie watching!",
      },
      {
        user: "AudioEnthusiast",
        rating: 4,
        comment: "Clear sound and easy setup.",
      },
   
    ],
    saleAvailable: false,
    featured: true,
  },
  {
    id: 130001,
    category: "Fashion",
    subcategory: "Men",
    subSubcategory: "Clothing",
    name: "Example Men's Shirt A",
    brand: "FashionTech",
    description: "Classic cotton shirt for men.",
    specifications: {
      material: "Cotton",
      color: "White",
      size: "Medium",
    },
    price: 29.99,
    offerPrice:16.99,
    stock: 120,
    thumbnail: "https://rukminim2.flixcart.com/image/850/1000/xif0q/shirt/4/2/d/l-ved-grey-205-ved-ent-original-imaggf2cwmszg2xz.jpeg?q=20",
    images: [
      "https://rukminim2.flixcart.com/image/850/1000/xif0q/shirt/0/7/o/xxl-white-black-combo-shirt-xxl-menzeisii-original-imagzy9sqgzjz5re.jpeg?q=20",
      "https://rukminim2.flixcart.com/image/850/1000/xif0q/shirt/j/e/k/xxl-new-arrival-cotton-shirts-for-men-solstice-original-imagzbktw4fpfmn6.jpeg?q=20",
    
    ],
    ratings: {
      average: 4.2,
      total: 80,
    },
    reviews: [
      {
        user: "FashionGuru123",
        rating: 4,
        comment: "Nice quality fabric and fits well!",
      },
      {
        user: "StyleIcon55",
        rating: 4,
        comment: "Simple and elegant.",
      },
   
    ],
    saleAvailable: true,
    featured: true,
  },
  {
    id: 130002,
    category: "Fashion",
    subcategory: "Men",
    subSubcategory: "Shoes",
    name: "Example Men's Sneakers B",
    brand: "FootFlex",
    description: "Casual sneakers for men.",
    specifications: {
      type: "Sneakers",
      material: "Canvas",
      color: "Black",
      size: "US 10",
    },
    price: 59.99,
    offerPrice:58.99,
    stock: 90,
    thumbnail: "https://images.meesho.com/images/products/159957379/fzdt8_512.webp",
    images: [
      "https://rukminim2.flixcart.com/image/850/1000/l3dcl8w0/shoe/m/j/k/9-g-b-2l-growoxic-white-original-imagegyfztfkt4hz.jpeg?q=90",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStk9R8-82Zc9eXZKbF5PRGBxT7rCtRqXGC-nuYuo_vj9r2WoAZu8C9RwBa1_TeBwO3VF8&usqp=CAU",
    
    ],
    ratings: {
      average: 4.5,
      total: 100,
    },
    reviews: [
      {
        user: "ShoeLover567",
        rating: 5,
        comment: "Comfortable and stylish!",
      },
      {
        user: "FashionFanatic88",
        rating: 4,
        comment: "Great for casual wear.",
      },
   
    ],
    saleAvailable: true,
    featured: false,
  },
  {
    id: 130003,
    category: "Fashion",
    subcategory: "Men",
    subSubcategory: "Accessories",
    name: "Example Men's Watch C",
    brand: "WristStyle",
    description: "Elegant wristwatch for men.",
    specifications: {
      type: "Analog",
      material: "Stainless Steel",
      color: "Silver",
      features: "Date display, Water-resistant",
    },
    price: 99.99,
    offerPrice:76.99,
    stock: 75,
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVFBXNsTvjI7PqQRRRi4SEqh6rb16lAA6gRPR5-9g-yxPBc6oryPVaqe9MtM1F5oLoHIE&usqp=CAU",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPiT3j1qu6BLwp0ipdUaMlWgJygaDYWgM_7gt5K1N34Ip45bGms0Dp_MixnCxxcamXz0k&usqp=CAU",
      "https://rukminim1.flixcart.com/image/300/300/l09w8sw0/watch/8/n/e/1-men-day-and-date-stylish-steel-watch-waqt-men-original-imagc2wvsgbqhwua.jpeg",
    
    ],
    ratings: {
      average: 4.7,
      total: 85,
    },
    reviews: [
      {
        user: "WatchCollector123",
        rating: 5,
        comment: "A stunning timepiece!",
      },
      {
        user: "FashionForward99",
        rating: 4,
        comment: "Looks classy on the wrist.",
      },
   
    ],
    saleAvailable: false,
    featured: true,
  },
  {
    id: 140001,
    category: "Fashion",
    subcategory: "Women",
    subSubcategory: "Clothing",
    name: "Example Women's Dress D",
    brand: "Fashionista",
    description: "Elegant and comfortable dress for women.",
    specifications: {
      material: "Polyester",
      color: "Navy Blue",
      size: "Small",
    },
    price: 49.99,
    offerPrice:42.99,
    stock: 100,
    thumbnail: "https://rukminim2.flixcart.com/image/850/1000/xif0q/dress/n/j/9/m-473-sanwariya-creation-original-imaggzkrwd6zdu78.jpeg?q=90",
    images: [
      "https://rukminim2.flixcart.com/image/850/1000/xif0q/dress/s/b/w/xl-kurti-52-bottel-green-xl-virhan-original-imagntvretggdzzy.jpeg?q=20",
      "https://rukminim2.flixcart.com/image/850/1000/xif0q/dress/g/c/g/m-womenpinkmaxi1-causeway-original-imaggpevgmyx8kdv.jpeg?q=20",
    
    ],
    ratings: {
      average: 4.6,
      total: 95,
    },
    reviews: [
      {
        user: "FashionDiva123",
        rating: 5,
        comment: "Fits perfectly and looks fabulous!",
      },
      {
        user: "StyleIconic88",
        rating: 4,
        comment: "Great for formal events.",
      },
   
    ],
    saleAvailable: true,
    featured: true,
  },
  {
    id: 140002,
    category: "Fashion",
    subcategory: "Women",
    subSubcategory: "Shoes",
    name: "Example Women's Heels E",
    brand: "GlamorousSteps",
    description: "Stylish heels for women.",
    specifications: {
      type: "Heels",
      material: "Leather",
      color: "Red",
      size: "US 8",
    },
    price: 79.99,
    offerPrice:62.99,
    stock: 80,
    thumbnail: "https://assets.ajio.com/medias/sys_master/root/20230628/zc8c/649c2884eebac147fc2b913e/-473Wx593H-469504939-black-MODEL.jpg",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShV_lJzORb3YhXCeO6EaYFRyl9wyzqBDHcBg859sjkBqTboUnTeTYhg4qv-sVo6MmXMd4&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTitKi83AEK0Q4BtU6SXt3retdfpH79wWd-6L0DDWjTJjVllWOWf4PrZpoRthKeYSKJ9Tc&usqp=CAU",
    
    ],
    ratings: {
      average: 4.4,
      total: 110,
    },
    reviews: [
      {
        user: "ShoeLover456",
        rating: 5,
        comment: "Comfortable and stunning!",
      },
      {
        user: "FashionFanatic99",
        rating: 4,
        comment: "Perfect for evening wear.",
      },
   
    ],
    saleAvailable: true,
    featured: false,
  },
  {
    id: 140003,
    category: "Fashion",
    subcategory: "Women",
    subSubcategory: "Accessories",
    name: "Example Women's Handbag F",
    brand: "TrendyCarry",
    description: "Chic and spacious handbag for women.",
    specifications: {
      type: "Handbag",
      material: "Faux Leather",
      color: "Black",
      features: "Adjustable Strap",
    },
    price: 69.99,
    offerPrice:52.99,
    stock: 120,
    thumbnail:
      "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/618HNjczbBL._AC_UY1000_.jpg",
    images: [
      "https://m.media-amazon.com/images/I/61eprRBCuKL._SY535_.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzyDwrnbnzGSQvGAQ4az2L0rVlf2s4FZgCQ30m3N2B5zVuMpPcu8Zu6A5fVXrcPwWb8K8&usqp=CAU",
    
    ],
    ratings: {
      average: 4.8,
      total: 90,
    },
    reviews: [
      {
        user: "BagLover789",
        rating: 5,
        comment: "Great design and good quality!",
      },
      {
        user: "FashionForward88",
        rating: 4,
        comment: "Matches well with various outfits.",
      },
   
    ],
    saleAvailable: false,
    featured: true,
  },
  {
    id: 150001,
    category: "Fashion",
    subcategory: "Kids",
    subSubcategory: "Clothing",
    name: "Example Kids T-Shirt G",
    brand: "KidStyle",
    description: "Comfortable and colorful t-shirt for kids.",
    specifications: {
      material: "Cotton",
      color: "Red",
      size: "6 years",
    },
    price: 19.99,
    offerPrice:15.99,
    stock: 150,
    thumbnail: "https://tbhai.com/cdn/shop/products/CaptainAmericaThemeCustomNameT-ShirtforKids.jpg?v=1633367132&width=1445",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMITslg5cVgeBkNqoDki8UDoaBc_mWFYmsYnq2IwwmTZ9OuedZvjXad6n1us9mKIt9V5M&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSYJvEOQtcBFt5_hCAbHWv55s7ucgtmIqBQcpVaESH2EbNheDYvWob2P_EolMrggHyxoE&usqp=CAU",
    
    ],
    ratings: {
      average: 4.9,
      total: 120,
    },
    reviews: [
      {
        user: "KidFashionista123",
        rating: 5,
        comment: "My kid loves it!",
      },
      {
        user: "ParentReviewer99",
        rating: 4,
        comment: "Good quality fabric.",
      },
   
    ],
    saleAvailable: true,
    featured: true,
  },
  {
    id: 150002,
    category: "Fashion",
    subcategory: "Kids",
    subSubcategory: "Shoes",
    name: "Example Kids Sneakers H",
    brand: "TinySteps",
    description: "Fun and durable sneakers for kids.",
    specifications: {
      type: "Sneakers",
      material: "Mesh",
      color: "Blue",
      size: "US 3 (Kids)",
    },
    price: 39.99,
    offerPrice:36.99,
    stock: 100,
    thumbnail: "https://rukminim1.flixcart.com/image/850/1000/xif0q/kids-shoe/q/1/8/3-jordan-abvoverseas-original-imaggebfhj9uzxvp.jpeg?q=90",
    images: [
      "https://m.media-amazon.com/images/I/41mdCQ0JDZL._SX500_.jpg",
      "https://sc04.alicdn.com/kf/H8e3649177e2d4269905d74f832dfc7e68.jpg_350x350.jpg",
    
    ],
    ratings: {
      average: 4.7,
      total: 90,
    },
    reviews: [
      {
        user: "KidShoeLover456",
        rating: 5,
        comment: "Very comfortable for active kids!",
      },
      {
        user: "ParentReviewer88",
        rating: 4,
        comment: "Sturdy and cute.",
      },
   
    ],
    saleAvailable: true,
    featured: false,
  },
  {
    id: 150003,
    category: "Fashion",
    subcategory: "Kids",
    subSubcategory: "Accessories",
    name: "Example Kids Backpack I",
    brand: "CoolCarry",
    description: "Colorful and spacious backpack for kids.",
    specifications: {
      type: "Backpack",
      material: "Nylon",
      color: "Pink",
      features: "Adjustable Straps, Multiple Compartments",
    },
    price: 29.99,
    offerPrice:22.99,
    stock: 80,
    thumbnail: "https://m.media-amazon.com/images/I/91bvt1ePdPL.jpg",
    images: [
      "https://m.media-amazon.com/images/I/71VC1Jg29+L._AC_UY350_.jpg",
      "https://m.media-amazon.com/images/I/710-snb5LxL._AC_SR175,263_.jpg",
    
    ],
    ratings: {
      average: 4.5,
      total: 85,
    },
    reviews: [
      {
        user: "BackpackFan789",
        rating: 5,
        comment: "My kid loves the design!",
      },
      {
        user: "ParentReviewer77",
        rating: 4,
        comment: "Good quality and nice compartments.",
      },
   
    ],
    saleAvailable: false,
    featured: true,
  },
  {
    id: 160001,
    category: "Fashion",
    subcategory: "Jewellery",
    subSubcategory: "Rings",
    name: "Example Diamond Ring J",
    brand: "GemGlam",
    description: "Elegant diamond ring for a classic look.",
    specifications: {
      material: "Gold",
      gemstone: "Diamond",
      size: "US 7",
    },
    price: 499.99,
    offerPrice:485.99,
    stock: 50,
    thumbnail: "https://images-cdn.ubuy.co.in/633bc8e3524dbd2321535c83-2pcs-rose-diamond-ring-white-zircon.jpg",
    images: [
      "https://i.ebayimg.com/images/g/gHwAAOSw5VBjGut8/s-l1600.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhSzVf23bbVhdDeYYJk3VW5GqSm-HqBk9cAwZ1yAGYw3mUnZlfnfUlcDRqjHzqHXWA5Eg&usqp=CAU",
    
    ],
    ratings: {
      average: 4.8,
      total: 75,
    },
    reviews: [
      {
        user: "JewelleryFanatic123",
        rating: 5,
        comment: "Absolutely stunning!",
      },
      {
        user: "StyleIconic99",
        rating: 4,
        comment: "Classic and timeless design.",
      },
   
    ],
    saleAvailable: true,
    featured: true,
  },
  {
    id: 160002,
    category: "Fashion",
    subcategory: "Jewellery",
    subSubcategory: "Necklaces",
    name: "Example Pearl Necklace K",
    brand: "PearlPerfection",
    description: "Beautiful pearl necklace for an elegant look.",
    specifications: {
      material: "Silver",
      gemstone: "Pearl",
      length: "18 inches",
    },
    price: 199.99,
    offerPrice:186.99,
    stock: 40,
    thumbnail:
      "https://chandranipearls.in/cdn/shop/files/S23961.jpg?v=1696411464&width=1946",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThNX333U1ZjaFJ_ssoigWXZ-S5AZUXM2rxMw02Qy_2NHD9B1XecVkCWdCnjjUBkNUUUvQ&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4gzLPf_Ll6CE0RDmWt3Goawqk_AD-nGCrbxSS2fn3NJa0fBi1Q6SGh2pOl5M8TKya1-A&usqp=CAU",
    
    ],
    ratings: {
      average: 4.6,
      total: 60,
    },
    reviews: [
      {
        user: "PearlLover567",
        rating: 5,
        comment: "Exquisite and delicate!",
      },
      {
        user: "FashionEnthusiast88",
        rating: 4,
        comment: "Lovely addition to any outfit.",
      },
   
    ],
    saleAvailable: true,
    featured: false,
  },
  {
    id: 160003,
    category: "Fashion",
    subcategory: "Jewellery",
    subSubcategory: "Earrings",
    name: "Example Hoop Earrings L",
    brand: "ChicStyle",
    description: "Stylish hoop earrings for a trendy look.",
    specifications: {
      material: "Gold-plated",
      size: "Medium",
    },
    price: 79.99,
    offerPrice:76.99,
    stock: 70,
    thumbnail: "https://assets.ajio.com/medias/sys_master/root/20221230/VwB4/63aefdd7aeb269659c197762/-473Wx593H-465525544-gold-MODEL.jpg",
    images: [
      "https://assets.ajio.com/medias/sys_master/root/20221227/GtXP/63ab0924f997ddfdbdfb3ef5/-473Wx593H-465505761-gold-MODEL.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20221230/VwB4/63aefdd7aeb269659c197762/-473Wx593H-465525544-gold-MODEL.jpg",
    
    ],
    ratings: {
      average: 4.4,
      total: 90,
    },
    reviews: [
      {
        user: "EarringFan789",
        rating: 5,
        comment: "Love the style and quality!",
      },
      {
        user: "Fashionista77",
        rating: 4.0,
        comment: "Perfect for everyday wear.",
      },
   
    ],
    saleAvailable: false,
    featured: true,
  },
];

export default ProductsAPI;