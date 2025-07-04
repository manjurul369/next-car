import { adscar11, adscar22, car0, car1, car2, car3, car4, car5, car6, car7, car8, car9, car10, car11, profile } from "../assets/images"

export const adsInfo = [
    {
        id: 101,
        title: "The Best Platform for Car Rental",
        info: "Ease of doing a car rental safely and reliably. Of course at a low price.",
        image: adscar11,
        buttonColor: "#3563E9",
    },
    {
        id:102,
        title: "Easy way to rent a car at a low price",
        info: "Providing cheap car rental services and safe and comfortable facilities.",
        image: adscar22,
        buttonColor: "#54A6FF",
    }
]

export const popularCar = [
    {
        id: 1,
        carName: "Koenigsegg Jesko",
        type: 'Sport',
        carImg: car0,
        oil: "90L",
        steering: "Manual",
        cap: "2 People",
        price: 99.00,
        oldPrice: 100.00,
        tax: 0,
        thumbImg: [car0, car1, car2],
        carDetails: "The Koenigsegg Jesko is a high-performance hypercar known for its extreme speed and advanced engineering. It features a twin-turbo V8 engine, producing over 1,600 horsepower, and is designed for both track and road use. The car's aerodynamic design and lightweight construction contribute to its impressive performance capabilities, making it one of the fastest production cars in the world.",
        rattingCount: 440,
        star: 4,
        reviews: [
            {
                userName: "John Doe",
                designation: "Car Enthusiast",
                userImg: profile,
                review: "The New MG ZS exceeded my expectations! It's spacious, comfortable, and perfect for my family. The technology features are top-notch, and the ride is smooth. Highly recommend it!",
                rating: 5,
                date: "2023-10-01"
            },
            {
                userName: "Jane Smith",
                userImg: profile,
                designation: "Car Reviewer",
                review: "I love the design of the New MG ZS. It's stylish and modern, and the interior is very comfortable. The performance is great, and it handles well on the road. A fantastic SUV!",
                rating: 4,
                date: "2023-10-02"
            },
            {
                userName: "Alice Johnson",
                userImg: profile,
                designation: "Automotive Journalist",
                review: "The Koenigsegg Jesko is a masterpiece of engineering. The attention to detail is incredible, and the performance is mind-blowing. It's a true hypercar that pushes the boundaries of what's possible in automotive design.",
                ratting: 5,
                date: "2023-10-03"
            },
            {
                userName: "Michael Brown",
                userImg: profile,
                designation: "Performance Tester",
                review: "The Koenigsegg Jesko is an engineering marvel. The acceleration is insane, and the handling is razor-sharp. It's a car that truly delivers on performance and luxury.",
                rating: 5,
                date: "2023-10-04"
            }
        ]
    },
    {
        id: 2,
        carName: "Nissan GT-R",
        type: 'Sport',
        carImg: car1,
        oil: "80L",
        steering: "Manual",
        cap: "2 People",
        price: 80.00,
        oldPrice: 100.00,
        tax: 0,
        thumbImg: [car1, car0, car2],
        carDetails: "The Nissan GT-R is a legendary sports car known for its powerful performance and advanced technology. It features a twin-turbo V6 engine, all-wheel drive, and a sophisticated suspension system that provides exceptional handling and stability. The GT-R is celebrated for its impressive acceleration, precise steering, and track-ready capabilities, making it a favorite among car enthusiasts.",
        rattingCount: 440,
        star: 4,
        reviews: [
            {
                userName: "John Doe",
                designation: "Car Enthusiast",
                userImg: profile,
                review: "The New MG ZS exceeded my expectations! It's spacious, comfortable, and perfect for my family. The technology features are top-notch, and the ride is smooth. Highly recommend it!",
                rating: 5,
                date: "2023-10-01"
            },
            {
                userName: "Jane Smith",
                userImg: profile,
                designation: "Car Reviewer",
                review: "I love the design of the New MG ZS. It's stylish and modern, and the interior is very comfortable. The performance is great, and it handles well on the road. A fantastic SUV!",
                rating: 4,
                date: "2023-10-02"
            },
            {
                userName: "Alice Johnson",
                userImg: profile,
                designation: "Automotive Journalist",
                review: "The Koenigsegg Jesko is a masterpiece of engineering. The attention to detail is incredible, and the performance is mind-blowing. It's a true hypercar that pushes the boundaries of what's possible in automotive design.",
                ratting: 5,
                date: "2023-08-03"
            },
            {
                userName: "Michael Brown",
                userImg: profile,
                designation: "Performance Tester",
                review: "The Koenigsegg Jesko is an engineering marvel. The acceleration is insane, and the handling is razor-sharp. It's a car that truly delivers on performance and luxury.",
                rating: 5,
                date: "2023-08-04"
            }
        ]
    },
    {
        id: 3,
        carName: "Rolls Royce",
        type: 'Sedan',
        carImg: car2,
        oil: "70L",
        steering: "Manual",
        cap: "4 People",
        price: 96.00,
        oldPrice: 100.00,
        tax: 0,
        thumbImg: [car2, car1, car0],
        carDetails: "Rolls Royce is a symbol of luxury and elegance in the automotive world. Known for its opulent design, handcrafted interiors, and powerful engines, Rolls Royce vehicles offer a unique blend of performance and comfort. Each car is meticulously crafted to provide an unparalleled driving experience, making it a preferred choice for those who seek the finest in automotive excellence.",
        rattingCount: 440,
        star: 4,
        reviews: [
            {
                userName: "John Doe",
                designation: "Car Enthusiast",
                userImg: profile,
                review: "The New MG ZS exceeded my expectations! It's spacious, comfortable, and perfect for my family. The technology features are top-notch, and the ride is smooth. Highly recommend it!",
                rating: 5,
                date: "2023-07-01"
            },
            {
                userName: "Jane Smith",
                userImg: profile,
                designation: "Car Reviewer",
                review: "I love the design of the New MG ZS. It's stylish and modern, and the interior is very comfortable. The performance is great, and it handles well on the road. A fantastic SUV!",
                rating: 4,
                date: "2023-07-02"
            },
            {
                userName: "Alice Johnson",
                userImg: profile,
                designation: "Automotive Journalist",
                review: "The Koenigsegg Jesko is a masterpiece of engineering. The attention to detail is incredible, and the performance is mind-blowing. It's a true hypercar that pushes the boundaries of what's possible in automotive design.",
                ratting: 5,
                date: "2023-07-03"
            },
            {
                userName: "Michael Brown",
                userImg: profile,
                designation: "Performance Tester",
                review: "The Koenigsegg Jesko is an engineering marvel. The acceleration is insane, and the handling is razor-sharp. It's a car that truly delivers on performance and luxury.",
                rating: 5,
                date: "2023-07-04"
            }
        ]
    },
    {
        id: 4,
        carName: "Toyota Alphard",
        type: 'SUV',
        carImg: car3,
        oil: "60L",
        steering: "Manual",
        cap: "6 People",
        price: 70.00,
        oldPrice: 100.00,
        tax: 0,
        thumbImg: [car3, car2, car1],
        carDetails: "The Toyota Alphard is a luxury minivan that combines spaciousness with high-end features. It offers a comfortable and refined interior, making it ideal for families or those who prioritize comfort. The Alphard is equipped with advanced safety technologies, a powerful engine, and a smooth ride, making it a popular choice for those seeking both practicality and luxury in their vehicle.",
        rattingCount: 440,
        star: 4,
        reviews: [
            {
                userName: "John Doe",
                designation: "Car Enthusiast",
                userImg: profile,
                review: "The New MG ZS exceeded my expectations! It's spacious, comfortable, and perfect for my family. The technology features are top-notch, and the ride is smooth. Highly recommend it!",
                rating: 5,
                date: "2023-09-01"
            },
            {
                userName: "Jane Smith",
                userImg: profile,
                designation: "Car Reviewer",
                review: "I love the design of the New MG ZS. It's stylish and modern, and the interior is very comfortable. The performance is great, and it handles well on the road. A fantastic SUV!",
                rating: 4,
                date: "2023-09-02"
            },
            {
                userName: "Alice Johnson",
                userImg: profile,
                designation: "Automotive Journalist",
                review: "The Koenigsegg Jesko is a masterpiece of engineering. The attention to detail is incredible, and the performance is mind-blowing. It's a true hypercar that pushes the boundaries of what's possible in automotive design.",
                ratting: 5,
                date: "2023-09-03"
            },
            {
                userName: "Michael Brown",
                userImg: profile,
                designation: "Performance Tester",
                review: "The Koenigsegg Jesko is an engineering marvel. The acceleration is insane, and the handling is razor-sharp. It's a car that truly delivers on performance and luxury.",
                rating: 5,
                date: "2023-09-04"
            }
        ]
    }
]

export const recommendedCar = [
    {
        id: 5,
        carName: "All New Rush",
        type: 'SUV',
        carImg: car4,
        oil: "70L",
        steering: "Manual",
        cap: "6 People",
        price: 72.00,
        oldPrice: 100.00,
        tax: 0,
        thumbImg: [car4, car3, car2],
        carDetails: "The All New Rush is a compact SUV that offers a perfect blend of style, comfort, and practicality. With its spacious interior, advanced safety features, and efficient engine, it is designed for urban driving and family adventures. The Rush provides a smooth ride, modern technology, and a versatile cargo space, making it an excellent choice for those seeking an affordable yet stylish SUV.",
        rattingCount: 440,
        star: 4,
        reviews: [
            {
                userName: "John Doe",
                designation: "Car Enthusiast",
                userImg: profile,
                review: "The New MG ZS exceeded my expectations! It's spacious, comfortable, and perfect for my family. The technology features are top-notch, and the ride is smooth. Highly recommend it!",
                rating: 5,
                date: "2023-10-01"
            },
            {
                userName: "Jane Smith",
                userImg: profile,
                designation: "Car Reviewer",
                review: "I love the design of the New MG ZS. It's stylish and modern, and the interior is very comfortable. The performance is great, and it handles well on the road. A fantastic SUV!",
                rating: 4,
                date: "2023-10-02"
            },
            {
                userName: "Alice Johnson",
                userImg: profile,
                designation: "Automotive Journalist",
                review: "The Koenigsegg Jesko is a masterpiece of engineering. The attention to detail is incredible, and the performance is mind-blowing. It's a true hypercar that pushes the boundaries of what's possible in automotive design.",
                ratting: 5,
                date: "2023-10-03"
            },
            {
                userName: "Michael Brown",
                userImg: profile,
                designation: "Performance Tester",
                review: "The Koenigsegg Jesko is an engineering marvel. The acceleration is insane, and the handling is razor-sharp. It's a car that truly delivers on performance and luxury.",
                rating: 5,
                date: "2023-10-04"
            }
        ]
    },
    {
        id: 6,
        carName: "CR - V",
        type: 'SUV',
        carImg: car5,
        oil: "80L",
        steering: "Manual",
        cap: "6 People",
        price: 80.00,
        oldPrice: 100.00,
        tax: 0,
        thumbImg: [car5, car4, car3],
        carDetails: "The CR-V is a compact SUV known for its reliability, spaciousness, and advanced features. It offers a comfortable ride with ample cargo space, making it ideal for families and outdoor enthusiasts. The CR-V is equipped with modern technology, including safety features and infotainment systems, providing a well-rounded driving experience that balances performance and practicality.",
        rattingCount: 440,
        star: 4,
        reviews: [
            {
                userName: "John Doe",
                designation: "Car Enthusiast",
                userImg: profile,
                review: "The New MG ZS exceeded my expectations! It's spacious, comfortable, and perfect for my family. The technology features are top-notch, and the ride is smooth. Highly recommend it!",
                rating: 5,
                date: "2023-10-01"
            },
            {
                userName: "Jane Smith",
                userImg: profile,
                designation: "Car Reviewer",
                review: "I love the design of the New MG ZS. It's stylish and modern, and the interior is very comfortable. The performance is great, and it handles well on the road. A fantastic SUV!",
                rating: 4,
                date: "2023-10-02"
            },
            {
                userName: "Alice Johnson",
                userImg: profile,
                designation: "Automotive Journalist",
                review: "The Koenigsegg Jesko is a masterpiece of engineering. The attention to detail is incredible, and the performance is mind-blowing. It's a true hypercar that pushes the boundaries of what's possible in automotive design.",
                ratting: 5,
                date: "2023-10-03"
            },
            {
                userName: "Michael Brown",
                userImg: profile,
                designation: "Performance Tester",
                review: "The Koenigsegg Jesko is an engineering marvel. The acceleration is insane, and the handling is razor-sharp. It's a car that truly delivers on performance and luxury.",
                rating: 5,
                date: "2023-10-04"
            }
        ]
    },
    {
        id: 7,
        carName: "All New Terios",
        type: 'SUV',
        carImg: car6,
        oil: "90L",
        steering: "Manual",
        cap: "6 People",
        price: 74.00,
        oldPrice: 100.00,
        tax: 0,
        thumbImg: [car6, car5, car4],
        carDetails: "The All New Terios is a compact SUV that combines ruggedness with modern design. It features a spacious interior, advanced safety technologies, and a powerful engine, making it suitable for both city driving and off-road adventures. The Terios offers a comfortable ride, versatile cargo space, and a stylish exterior, appealing to those who seek adventure without compromising on comfort.",
        rattingCount: 440,
        star: 4,
        reviews: [
            {
                userName: "John Doe",
                designation: "Car Enthusiast",
                userImg: profile,
                review: "The New MG ZS exceeded my expectations! It's spacious, comfortable, and perfect for my family. The technology features are top-notch, and the ride is smooth. Highly recommend it!",
                rating: 5,
                date: "2023-10-01"
            },
            {
                userName: "Jane Smith",
                userImg: profile,
                designation: "Car Reviewer",
                review: "I love the design of the New MG ZS. It's stylish and modern, and the interior is very comfortable. The performance is great, and it handles well on the road. A fantastic SUV!",
                rating: 4,
                date: "2023-10-02"
            },
            {
                userName: "Alice Johnson",
                userImg: profile,
                designation: "Automotive Journalist",
                review: "The Koenigsegg Jesko is a masterpiece of engineering. The attention to detail is incredible, and the performance is mind-blowing. It's a true hypercar that pushes the boundaries of what's possible in automotive design.",
                ratting: 5,
                date: "2023-10-03"
            },
            {
                userName: "Michael Brown",
                userImg: profile,
                designation: "Performance Tester",
                review: "The Koenigsegg Jesko is an engineering marvel. The acceleration is insane, and the handling is razor-sharp. It's a car that truly delivers on performance and luxury.",
                rating: 5,
                date: "2023-10-04"
            }
        ]
    },
    {
        id: 8,
        carName: "CR - V",
        type: 'SUV',
        carImg: car7,
        oil: "80L",
        steering: "Manual",
        cap: "6 People",
        price: 80.00,
        oldPrice: 100.00,
        tax: 0,
        thumbImg: [car7, car6, car5],
        carDetails: "The CR-V is a compact SUV known for its reliability, spaciousness, and advanced features. It offers a comfortable ride with ample cargo space, making it ideal for families and outdoor enthusiasts. The CR-V is equipped with modern technology, including safety features and infotainment systems, providing a well-rounded driving experience that balances performance and practicality.",
        rattingCount: 440,
        star: 4,
        reviews: [
            {
                userName: "John Doe",
                designation: "Car Enthusiast",
                userImg: profile,
                review: "The New MG ZS exceeded my expectations! It's spacious, comfortable, and perfect for my family. The technology features are top-notch, and the ride is smooth. Highly recommend it!",
                rating: 5,
                date: "2023-10-01"
            },
            {
                userName: "Jane Smith",
                userImg: profile,
                designation: "Car Reviewer",
                review: "I love the design of the New MG ZS. It's stylish and modern, and the interior is very comfortable. The performance is great, and it handles well on the road. A fantastic SUV!",
                rating: 4,
                date: "2023-10-02"
            },
            {
                userName: "Alice Johnson",
                userImg: profile,
                designation: "Automotive Journalist",
                review: "The Koenigsegg Jesko is a masterpiece of engineering. The attention to detail is incredible, and the performance is mind-blowing. It's a true hypercar that pushes the boundaries of what's possible in automotive design.",
                ratting: 5,
                date: "2023-10-03"
            },
            {
                userName: "Michael Brown",
                userImg: profile,
                designation: "Performance Tester",
                review: "The Koenigsegg Jesko is an engineering marvel. The acceleration is insane, and the handling is razor-sharp. It's a car that truly delivers on performance and luxury.",
                rating: 5,
                date: "2023-10-04"
            }
        ]
    },
    {
        id: 9,
        carName: "MG ZX Exclucive",
        type: 'Hatchback',
        carImg: car8,
        oil: "70L",
        steering: "Manual",
        cap: "4 People",
        price: 76.00,
        oldPrice: 100.00,
        tax: 0,
        thumbImg: [car8, car7, car6],
        carDetails: "The MG ZX Exclusive is a stylish hatchback that offers a blend of performance and practicality. With its sleek design, comfortable interior, and advanced technology, it is designed for urban driving and daily commutes. The ZX Exclusive features a fuel-efficient engine, modern safety systems, and a spacious cabin, making it an excellent choice for those seeking a compact yet versatile vehicle.",
        rattingCount: 440,
        star: 4,
        reviews: [
            {
                userName: "John Doe",
                designation: "Car Enthusiast",
                userImg: profile,
                review: "The New MG ZS exceeded my expectations! It's spacious, comfortable, and perfect for my family. The technology features are top-notch, and the ride is smooth. Highly recommend it!",
                rating: 5,
                date: "2023-10-01"
            },
            {
                userName: "Jane Smith",
                userImg: profile,
                designation: "Car Reviewer",
                review: "I love the design of the New MG ZS. It's stylish and modern, and the interior is very comfortable. The performance is great, and it handles well on the road. A fantastic SUV!",
                rating: 4,
                date: "2023-10-02"
            },
            {
                userName: "Alice Johnson",
                userImg: profile,
                designation: "Automotive Journalist",
                review: "The Koenigsegg Jesko is a masterpiece of engineering. The attention to detail is incredible, and the performance is mind-blowing. It's a true hypercar that pushes the boundaries of what's possible in automotive design.",
                ratting: 5,
                date: "2023-10-03"
            },
            {
                userName: "Michael Brown",
                userImg: profile,
                designation: "Performance Tester",
                review: "The Koenigsegg Jesko is an engineering marvel. The acceleration is insane, and the handling is razor-sharp. It's a car that truly delivers on performance and luxury.",
                rating: 5,
                date: "2023-10-04"
            }
        ]
    },
    {
        id: 10,
        carName: "New MG ZS",
        type: 'SUV',
        carImg: car9,
        oil: "80L",
        steering: "Manual",
        cap: "6 People",
        price: 80.00,
        oldPrice: 100.00,
        tax: 0,
        thumbImg: [car9, car8, car7],
        carDetails: "The New MG ZS is a compact SUV that combines modern design with advanced features. It offers a spacious interior, comfortable seating, and a range of technology options, making it ideal for families and urban drivers. The ZS is equipped with efficient engines, safety systems, and infotainment options, providing a well-rounded driving experience that emphasizes both style and functionality.",
        rattingCount: 440,
        star: 4,
        reviews: [
            {
                userName: "John Doe",
                designation: "Car Enthusiast",
                userImg: profile,
                review: "The New MG ZS exceeded my expectations! It's spacious, comfortable, and perfect for my family. The technology features are top-notch, and the ride is smooth. Highly recommend it!",
                rating: 5,
                date: "2023-10-01"
            },
            {
                userName: "Jane Smith",
                userImg: profile,
                designation: "Car Reviewer",
                review: "I love the design of the New MG ZS. It's stylish and modern, and the interior is very comfortable. The performance is great, and it handles well on the road. A fantastic SUV!",
                rating: 4,
                date: "2023-10-02"
            },
            {
                userName: "Alice Johnson",
                userImg: profile,
                designation: "Automotive Journalist",
                review: "The Koenigsegg Jesko is a masterpiece of engineering. The attention to detail is incredible, and the performance is mind-blowing. It's a true hypercar that pushes the boundaries of what's possible in automotive design.",
                ratting: 5,
                date: "2023-10-03"
            },
            {
                userName: "Michael Brown",
                userImg: profile,
                designation: "Performance Tester",
                review: "The Koenigsegg Jesko is an engineering marvel. The acceleration is insane, and the handling is razor-sharp. It's a car that truly delivers on performance and luxury.",
                rating: 5,
                date: "2023-10-04"
            }
        ]
    },
    {
        id: 11,
        carName: "MG ZX Excite",
        type: 'Hatchback',
        carImg: car10,
        oil: "90L",
        steering: "Manual",
        cap: "4 People",
        price: 74.00,
        oldPrice: 100.00,
        tax: 0,
        thumbImg: [car10, car9, car8],
        carDetails: "The MG ZX Excite is a sporty hatchback that offers a dynamic driving experience with its agile handling and responsive performance. It features a modern design, comfortable interior, and advanced technology, making it suitable for both city driving and weekend adventures. The ZX Excite is equipped with efficient engines, safety features, and a stylish exterior, appealing to those who seek excitement in their daily commute.",
        rattingCount: 440,
        star: 4,
        reviews: [
            {
                userName: "John Doe",
                designation: "Car Enthusiast",
                userImg: profile,
                review: "The New MG ZS exceeded my expectations! It's spacious, comfortable, and perfect for my family. The technology features are top-notch, and the ride is smooth. Highly recommend it!",
                rating: 5,
                date: "2023-10-01"
            },
            {
                userName: "Jane Smith",
                userImg: profile,
                designation: "Car Reviewer",
                review: "I love the design of the New MG ZS. It's stylish and modern, and the interior is very comfortable. The performance is great, and it handles well on the road. A fantastic SUV!",
                rating: 4,
                date: "2023-10-02"
            },
            {
                userName: "Alice Johnson",
                userImg: profile,
                designation: "Automotive Journalist",
                review: "The Koenigsegg Jesko is a masterpiece of engineering. The attention to detail is incredible, and the performance is mind-blowing. It's a true hypercar that pushes the boundaries of what's possible in automotive design.",
                ratting: 5,
                date: "2023-10-03"
            },
            {
                userName: "Michael Brown",
                userImg: profile,
                designation: "Performance Tester",
                review: "The Koenigsegg Jesko is an engineering marvel. The acceleration is insane, and the handling is razor-sharp. It's a car that truly delivers on performance and luxury.",
                rating: 5,
                date: "2023-10-04"
            }
        ]
    },
    {
        id: 12,
        carName: "New MG ZS",
        type: 'SUV',
        carImg: car11,
        oil: "80L",
        steering: "Manual",
        cap: "6 People",
        price: 80.00,
        oldPrice: 100.00,
        tax: 0,
        thumbImg: [car11, car10, car9],
        carDetails: "The New MG ZS is a compact SUV that combines modern design with advanced features. It offers a spacious interior, comfortable seating, and a range of technology options, making it ideal for families and urban drivers. The ZS is equipped with efficient engines, safety systems, and infotainment options, providing a well-rounded driving experience that emphasizes both style and functionality.",
        rattingCount: 440,
        star: 4,
        reviews: [
            {
                userName: "John Doe",
                designation: "Car Enthusiast",
                userImg: profile,
                review: "The New MG ZS exceeded my expectations! It's spacious, comfortable, and perfect for my family. The technology features are top-notch, and the ride is smooth. Highly recommend it!",
                rating: 5,
                date: "2023-10-01"
            },
            {
                userName: "Jane Smith",
                userImg: profile,
                designation: "Car Reviewer",
                review: "I love the design of the New MG ZS. It's stylish and modern, and the interior is very comfortable. The performance is great, and it handles well on the road. A fantastic SUV!",
                rating: 4,
                date: "2023-10-02"
            },
            {
                userName: "Alice Johnson",
                userImg: profile,
                designation: "Automotive Journalist",
                review: "The Koenigsegg Jesko is a masterpiece of engineering. The attention to detail is incredible, and the performance is mind-blowing. It's a true hypercar that pushes the boundaries of what's possible in automotive design.",
                ratting: 5,
                date: "2023-10-03"
            },
            {
                userName: "Michael Brown",
                userImg: profile,
                designation: "Performance Tester",
                review: "The Koenigsegg Jesko is an engineering marvel. The acceleration is insane, and the handling is razor-sharp. It's a car that truly delivers on performance and luxury.",
                rating: 5,
                date: "2023-10-04"
            }
        ]
    },
]

export const footerLinks = [
    {
        id: 1,
        title: "About",
        links: [
            { name: "How it works", url: "/" },
            { name: "Featured", url: "/" },
            { name: "Partnership", url: "/" },
            { name: "Business Relation", url: "/" }
        ]
    },
    {
        id: 2,
        title: "Community",
        links: [
            { name: "Events", url: "/" },
            { name: "Blog", url: "/" },
            { name: "Podcast", url: "/" },
            { name: "Invite a friend", url: "/" }
        ]
    },
    {
        id: 3,
        title: "Socials",
        links: [
            { name: "Facebook", url: "https://facebook.com" },
            { name: "Twitter", url: "https://twitter.com" },
            { name: "Instagram", url: "https://instagram.com" },
            { name: "Discord", url: "https://discord.com" }
        ]
    }
]