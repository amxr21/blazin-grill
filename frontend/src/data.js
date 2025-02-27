import Image1 from "./assets/images/features/image-1.jpg"
import Image2 from "./assets/images/features/image-2.jpg"
import Image3 from "./assets/images/features/image-3.jpg"


 import { Burgers, Subs, LoadedFries, Seafood, Sides, Branches } from "./constants/Images"


const featuresContent = [
    {
        header: "Burger Bliss Awaits, Sizzles & Delights!",
        paragraph: "Juicy, cheesy, and downright delicious—our burgers are stacked high with bold flavors and irresistible goodness. One bite, and you're hooked!",
        image: Image1,
    },
    {
        header: "Big on Flavor, Big on Subs!",
        paragraph: "Bite into our delicious subs, packed with fresh ingredients and bold flavors. Perfectly crafted for a fulfilling meal on the go!",
        image: Image2,
    },
    {
        header: "Fries Gone Wild & Loaded!",
        paragraph: "Crispy, golden fries piled high with irresistible toppings. From cheesy goodness to spicy bites, get ready for the ultimate fry experience!",
        image: Image3,
    },
]

 


const menu = [
  {
    category: "burgers",
    items: [
      { 
        name: "Classic Cheeseburger", 
        price: 9.99, 
        description: "Classic beef patty with melted cheese, lettuce, tomato, and special sauce.",
        image: Burgers[0]
      },
      { 
        name: "Double Cheeseburger", 
        price: 10.99, 
        description: "Two beef patties with double cheese, lettuce, tomato, and special sauce.",
        image: Burgers[1]
      },
      { 
        name: "Mushroom Swiss Burger", 
        price: 10.99, 
        description: "Beef patty topped with Swiss cheese, mushrooms, and grilled onions.",
        image: Burgers[2]
      },
      { 
        name: "Bacon Burger", 
        price: 10.99, 
        description: "Beef patty topped with crispy bacon, cheese, and special sauce.",
        image: Burgers[3]
      },
      { 
        name: "BBQ Bacon Cheeseburger", 
        price: 11.99, 
        description: "Beef patty with bacon, cheddar cheese, and BBQ sauce.",
        image: Burgers[4]
      },
      { 
        name: "Blazing Inferno Burger", 
        price: 11.99, 
        description: "Spicy beef patty with jalapeños, pepper jack cheese, and spicy sauce.",
        image: Burgers[5]
      }
    ]
  },
  {
    category: "subs",
    items: [
      { 
        name: "Turkey Sub", 
        price: 9.99, 
        description: "Fresh turkey slices with lettuce, tomato, and mayo on a hoagie roll.",
        image: Subs[0]
      },
      { 
        name: "Steak Philly", 
        price: 10.99, 
        description: "Grilled steak with peppers, onions, and melted cheese.",
        image: Subs[1]
      },
      { 
        name: "Chicken Philly", 
        price: 10.99, 
        description: "Grilled chicken with peppers, onions, and melted cheese.",
        image: Subs[2]
      },
      { 
        name: "Hot Buffalo", 
        price: 10.99, 
        description: "Spicy buffalo chicken with lettuce and ranch dressing.",
        image: Subs[3]
      },
      { 
        name: "Xtreme Cheesesteak", 
        price: 11.99, 
        description: "Loaded cheesesteak with extra cheese and toppings.",
        image: Subs[4]
      },
      { 
        name: "Crispy Chicken Sub", 
        price: 11.99, 
        description: "Crispy fried chicken with lettuce, tomato, and mayo.",
        image: Subs[5]
      },
      { 
        name: "NYA Gyro Cheese", 
        price: 11.99, 
        description: "Classic gyro meat with cheese, lettuce, tomato, and tzatziki sauce.",
        image: Subs[6]
      },
      { 
        name: "Buffalo Wrap", 
        price: 10.99, 
        description: "Spicy buffalo chicken wrapped with lettuce and ranch.",
        image: Subs[7]
      }
    ]
  },
  {
    category: "seafood",
    items: [
      { 
        name: "Catfish", 
        prices: { 6: 6.99, 10: 10.99 }, 
        description: "Crispy fried catfish fillets served with dipping sauce.",
        image: Seafood[0]
      },
      { 
        name: "Butterfly Shrimp", 
        prices: { 6: 7.99, 10: 12.99 }, 
        description: "Golden-fried shrimp served with cocktail sauce.",
        image: Seafood[1]
      },
      { 
        name: "Jumbo 8-Piece", 
        prices: { 6: 8.99, 10: 13.99 }, 
        description: "Large crispy shrimp served with fries.",
        image: Seafood[2]
      }
    ]
  },
  {
    category: "loaded fries",
    items: [
      { 
        name: "Steak Loaded Fries", 
        price: 8.99, 
        description: "Fries topped with grilled steak, cheese, and sauce.",
        image: LoadedFries[0]
      },
      { 
        name: "Chicken Loaded Fries", 
        price: 8.99, 
        description: "Fries topped with grilled chicken, cheese, and sauce.",
        image: LoadedFries[1]
      },
    ]
  },
  {
    category: "sides",
    items: [
      { 
        name: "Blazing Hot Wings", 
        prices: { 6: 6.99, 10: 10.99 }, 
        description: "Spicy hot wings served with dipping sauce.",
        image: Sides[0]
      },
      { 
        name: "Spicy BBQ Wings", 
        prices: { 6: 6.99, 10: 10.99 }, 
        description: "BBQ wings with a spicy kick, served with sauce.",
        image: Sides[1]
      }
    ]
  },
];


const locations = [
  {
    city: 'Detroit',
    state: 'Michigan',
    number: '(313) 635-5194',
    address: '13603 W Chicago, Detroit, MI 48228',
  },
  {
    city: 'Detroit',
    state: 'Michigan',
    number: '(313) 635-5194',
    address: '17151 W 8 Mile Rd, Detroit, MI 48235',
  },
  {
    city: 'Detroit',
    state: 'Michigan',
    number: '(313) 635-5194',
    address: '7431 W Vernor Hwy, Detroit, MI 48209',
  },
  {
    city: 'Hamtramck',
    state: 'Michigan',
    number: '(313) 635-5194',
    address: '9240 Conant St, Hamtramck, MI 48212',
  },
  {
    city: 'Detroit',
    state: 'Michigan',
    number: '(313) 635-5194',
    address: '20851 Plymouth Rd, Detroit, MI 48228',
  },
];



const branches = [
  {
    id: 1,
    name: "Michigan Branch",
    description: "Located in the heart of Michigan, our flagship branch is where it all began. Known for its warm ambiance and signature dishes, this is where our story started, bringing bold flavors to the community.",
    image: Branches[0]
  },
  {
    id: 2,
    name: "Detroit Branch",
    description: "In vibrant Detroit, our branch embodies the city’s energy and spirit. A favorite spot for locals, it is the perfect place to savor our iconic meals while enjoying a city with so much history and culture.",
    image: Branches[0]
  },
  {
    id: 3,
    name: "Chicago Branch",
    description: "Our Chicago location combines the charm of the Windy City with our passion for great food. Nestled in a bustling neighborhood, it’s where bold flavors meet an unforgettable dining experience.",
    image: Branches[0]
  },
  {
    id: 4,
    name: "Coming Soon",
    description: "Opening soon... 🔥✨",
    image: Branches[0]
  },
  {
    id: 4,
    name: "Coming Soon",
    description: "Opening soon... 🔥✨",
    image: Branches[0]
  }
];







export   {
    featuresContent,
    menu,
    locations,
    branches,
}