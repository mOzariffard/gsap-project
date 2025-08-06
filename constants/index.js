import drink1 from "/images/drink1.png";
import drink2 from "/images/drink2.png";
import drink3 from "/images/drink3.png";
import drink4 from "/images/drink4.png";

import instagram from "/images/insta.png";
import x from "/images/x.png";
import facebook from "/images/fb.png";

import prof1 from "/images/profile1.png";
import prof2 from "/images/profile2.png";
import prof3 from "/images/profile3.png";
import prof4 from "/images/profile4.png";

const navLinks = [
    {
        id: 'cocktails',
        title: 'Cocktails',
    },
    {
        id: 'about',
        title: 'About Us',
    },
    {
        id: 'art',
        title: 'The Art',
    },
    {
        id: 'menu',
        title: 'The Menu',
    },
    {
        id: 'contact',
        title: 'Contact Us'
    }
];

const cocktailLists = [
    {
       name: "Chapel Hill Shiraz",
       country: "AU",
       detail: "Battle",
       price: "$10",
    },
    {
       name: "Caten Malbee",
       country: "AU",
       detail: "Battle",
       price: "$49",
    },
    {
       name: "Rhino Pale Ale",
       country: "CA",
       detail: "750 ml",
       price: "$20",
    },
    {
       name: "Irish Guinness",
       country: "IE",
       detail: "600 ml",
       price: "$29",
    },
];

const mockTailLists = [
    {
       name: "Tropical Bloom",
       country: "US",
       detail: "Battle",
       price: "$10",
    },
    {
       name: "Passionfruit Mint",
       country: "US",
       detail: "Battle",
       price: "$49",
    },
    {
       name: "Citrus Glow",
       country: "CA",
       detail: "750 ml",
       price: "$20",
    },
    {
       name: "Lavender Fizz",
       country: "IE",
       detail: "600 ml",
       price: "$29",
    },
];

const goodLists = [
    "Handpicked ingredients",
    "Signature techniques",
    "Bartending artistry in action",
    "Freshly muddled flavors",
];

const featureLists = [
    "Perfectly balanced blends",
    "Garnished to perfection",
    "Ice-cold every time",
    "Expertly shaken & stirred",
];

const cocktailsSilderList = [
    {
        id: 1,
        name: "Classic Mojito",
        image: drink1,
        title: "Simple Ingredients, Bold Flavor",
        description:
            "Made with tequila, lime juice, and orange liqueur, the Margarita is easy to make and full of character. Add a salted rim for the perfect drink on summer nights.",
    },
    {
        id: 2,
        name: "Raspberry Mojito",
        image: drink2,
        title: "A Zesty Classic That Never Fails",
        description:
            "The Margarita is a classic that balances tangy lime, smooth tequila, and a touch of sweetness. Shaken, frozen, or on the rocks—it’s always crisp & refreshing.",
    },
    {
        id: 3,
        name: "Violet Breeze",
        image: drink3,
        title: "Simple Ingredients, Bold Flavor",
        description:
            "Made with tequila, lime juice, and orange liqueur, the Margarita is easy to make and full of character. Add a salted rim for the perfect drink on summer nights.",
    },
    {
        id: 4,
        name: "Curacao Mojito",
        image: drink4,
        title: "Crafted With Care, Poured With Love",
        description:
            "Each cocktail is made with fresh ingredients and a passion for perfecting every pour, whether you're celebrating or simply relaxing.",
    },
];

const openingHours = [
    { day: "Mon–Thu", time: "11:00am – 12am" },
    { day: "Fri", time: "11:00am – 2am" },
    { day: "Sat", time: "9:00am – 2am" },
    { day: "Sun", time: "9:00am – 1am" },
];

const socials = [
    {
        name: "Instagram",
        icon: instagram,
        url: "#",
    },
    {
        name: "X (Twitter)",
        icon: x,
        url: "#",
    },
    {
        name: "Facebook",
        icon: facebook,
        url: "#",
    },
];

const profileLists = [
    {
        imgPath: prof1,
    },
    {
        imgPath: prof2,
    },
    {
        imgPath: prof3,
    },
    {
        imgPath: prof4,
    },
];

export {
    navLinks,
    cocktailLists,
    mockTailLists,
    goodLists,
    featureLists,
    cocktailsSilderList,
    openingHours,
    socials,
    profileLists,
};