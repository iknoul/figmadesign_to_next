
const user = {
    name:"John Doe",
    notification: 0,
}
const navigationData = [
    {   name:"Contact Us", href:"#subscribe"},
    {   name:"Locations", href:"#locations"},
    {   name:"Personal", href:"#questions"},
    {   name:"Corporate", href:"#popularCar"},
    {   name:"Offers", href:"#promotion"},    
    {   name:"About", href:"#footer"},  
]

const locations = [
    {   name: "Al Quoz"},
    {   name: "Bur Dubai"},
    {   name: "Deira"}
];

const promotionCarData = [
    {   src:"/images/nissanGtrG.jpg", alt:"nissan Gtr"},
    {   src:"/images/2018-Mitsubishi-ASX-1920x966 1.svg", alt:"2018-Mitsubishi-ASX"},
    {   src:"/images/nissanGtr.jpg", alt:"nissan Gtr"}
]

const carData = [
    {
        name: "Mitsubishi Eclipse",
        description: "Eclipse Cross is a fusion of sharp coupe looks and dynamic SUV mobility with signature Mitsubishi styling, technology and driving confidence.",
        src: "/images/popularCar1.svg",
        features: {
            people: "5 People",
            transmission: "Automatic",
            doors: "5 Doors",
            ac: "AC"
        },
        price: "AED 2700/ Monthly"
    },

    {
        name: "Mitsubishi Outlander",
        description: "Outlander offers superior safety features and modern styling.",
        src: "/images/popularCar2.svg",
        features: {
            people: "7 People",
            transmission: "Automatic",
            doors: "5 Doors",
            ac: "AC"
        },
        price: "AED 3000/ Monthly"
    },
    {
        name: "Mitsubishi Eclipse",
        description: "Eclipse Cross is a fusion of sharp coupe looks and dynamic SUV mobility.",
        src: "/images/popularCar1.svg",
        features: {
            people: "5 People",
            transmission: "Automatic",
            doors: "5 Doors",
            ac: "AC"
        },
        price: "AED 2700/ Monthly"
    },
    
];

const rentSteps = [
    {
        src0: '/icons/o1Icon.svg',
        src1: '/icons/locationIconRed.svg',
        description: 'Select the location. Browse through our available options and find the perfect car to suit your needs'
    },
    {
        src0: '/icons/o2Icon.svg',
        src1: '/icons/calederIconRed.svg',
        description:'Choose your desired Pick-Up date and time.'
    },
    {
        src0: '/icons/o3Icon.svg',
        src1: '/icons/carIconRed.svg',
        description: 'Make payment and book the car. Select an option to either have the car delivered to your location or pick it up directly from us.'
    }
];

const questionData = [
    {
        question:"What is my eligibility to book a car?",
        answer:"You should be of 18 years old above and you must possess a valid driving license"
    },
    {
        question:"Can i book for any period of time?",
        answer:"You should be of 18 years old above and you must possess a valid driving license"
    },
    {
        question:"Can i opt car for a longer period?",
        answer:"You should be of 18 years old above and you must possess a valid driving license"
    },
    {
        question:"Can i book one-way trip?",
        answer:"You should be of 18 years old above and you must possess a valid driving license"
    },
    {
        question:"Is there home delivery option available?",
        answer:"You should be of 18 years old above and you must possess a valid driving license"
    },
    {
        question:"How can i make the payment?",
        answer:"You should be of 18 years old above and you must possess a valid driving license"
    },
]

const footerNavigationData = [
    {   text:"Home", href:""},
    {   text:"Office", href:""},
    {   text:"FAQ", href:""},
    {   text:"Career", href:""},
    {   text:"About Us", href:""},
    {   text:"Locations", href:""},
    {   text:"Prvacy Policy", href:""},
    {   text:"Terms & condition", href:""},
    {   text:"Services", href:""},
    {   text:"Contact Us", href:""},
    {   text:"Service Request", href:""},

]

const footerNavigationDataB = [
    {   text:"Hospitality", href:""},
    {   text:"Real Estate", href:""},
    {   text:"Education", href:""},
    {   text:"Publishing", href:""},
    {   text:"Automotive", href:""},
    {   text:"Vehicle Leasing", href:""},
]

const Areas = ['Dubai', 'Abu Dhabi', 'Sharjah', 'Fujairah', 'Ras Al Khaimah']

export {user, navigationData, locations, promotionCarData, carData, rentSteps, questionData, footerNavigationData, footerNavigationDataB, Areas}