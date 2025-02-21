import Image1 from "./assets/images/features/image-1.jpg"
import Image2 from "./assets/images/features/image-2.jpg"
import Image3 from "./assets/images/features/image-3.jpg"

import Burger1 from "./assets/images/burgers/1.png"
import Burger2 from "./assets/images/burgers/2.png"
import Burger3 from "./assets/images/burgers/3.png"
import Burger4 from "./assets/images/burgers/4.png"
import Burger5 from "./assets/images/burgers/5.png"
import Burger6 from "./assets/images/burgers/6.png"


 import { Burgers, Subs } from "./constants/Images"


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
        prices: { small: 6.99, large: 10.99 }, 
        description: "Crispy fried catfish fillets served with dipping sauce.",
        image: "/images/catfish.jpg"
      },
      { 
        name: "Butterfly Shrimp", 
        prices: { small: 7.99, large: 12.99 }, 
        description: "Golden-fried shrimp served with cocktail sauce.",
        image: "/images/butterfly-shrimp.jpg"
      },
      { 
        name: "Jumbo 8-Piece", 
        prices: { small: 8.99, large: 13.99 }, 
        description: "Large crispy shrimp served with fries.",
        image: "/images/jumbo-8-piece.jpg"
      }
    ]
  },
  {
    category: "sides",
    items: [
      { 
        name: "Steak Loaded Fries", 
        price: 8.99, 
        description: "Fries topped with grilled steak, cheese, and sauce.",
        image: "/images/steak-loaded-fries.jpg"
      },
      { 
        name: "Chicken Loaded Fries", 
        price: 8.99, 
        description: "Fries topped with grilled chicken, cheese, and sauce.",
        image: "/images/chicken-loaded-fries.jpg"
      },
      { 
        name: "Blazing Hot Wings", 
        prices: { 6: 6.99, 10: 10.99 }, 
        description: "Spicy hot wings served with dipping sauce.",
        image: "/images/blazing-hot-wings.jpg"
      },
      { 
        name: "Spicy BBQ Wings", 
        prices: { 6: 6.99, 10: 10.99 }, 
        description: "BBQ wings with a spicy kick, served with sauce.",
        image: "/images/spicy-bbq-wings.jpg"
      }
    ]
  }
];



export   {
    featuresContent,
    menu
}