import { adscar11, adscar22, car0, car1, car2, car3 } from "../assets/images"

export const adsInfo = [
    {
        id: 1,
        title: "The Best Platform for Car Rental",
        info: "Ease of doing a car rental safely and reliably. Of course at a low price.",
        image: adscar11,
        buttonColor: "#3563E9",
    },
    {
        id:2,
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
        cap: "2 People",
        price: 99.00,
    },
    {
        id: 2,
        carName: "Nissan GT-R",
        type: 'Sport',
        carImg: car1,
        oil: "80L",
        cap: "2 People",
        price: 80.00,
    },
    {
        id: 3,
        carName: "Rolls Royce",
        type: 'Sedan',
        carImg: car2,
        oil: "70L",
        cap: "4 People",
        price: 96.00,
    },
    {
        id: 4,
        carName: "Toyota Alphard",
        type: 'SUV',
        carImg: car3,
        oil: "60L",
        cap: "6 People",
        price: 70.00,
    }
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