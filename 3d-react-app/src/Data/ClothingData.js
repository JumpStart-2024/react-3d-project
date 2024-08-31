import ClothingItems from "../Utils/ClothingItems"

import blackLeatherPants from "../Assets/pants/blackLeatherPants.png"
import creamLinenPants from "../Assets/pants/creamLinenPants.png"
import jeans from "../Assets/pants/jeans.png"

import blueSilkDress from "../Assets/dresses/blueSilkDress.png"
import linenDress from "../Assets/dresses/linenDress.png"
import sequenceDress from "../Assets/dresses/sequenceDress.png"


import woolCoat from "../Assets/jackets/woolCoat.png"
import leatherJacket from "../Assets/jackets/leatherJacket.png"
import denimJacket from "../Assets/jackets/denimJacket.png"

const text = "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages."

export const clothingItemsData = {
    
    Pants: [
        new ClothingItems(
            "Leather", 
            blackLeatherPants,
            "Pants",
            text
            
        ),
            
        new ClothingItems(
            "Linen",
            creamLinenPants,
            "Pants",
            text
        ),
        new ClothingItems(
            "Jeans",
            jeans,
            "Pants",
            text
        ),

    ],
    Dresses: [
        new ClothingItems(
            "Sequence", 
            sequenceDress,
            "Dresses",
            text
        ),
            
        new ClothingItems(
            "Linen",
            linenDress,
            "Dresses",
            text
        ),
        new ClothingItems(
            "Silk",
            blueSilkDress,
            "Dresses",
            text
        ),
    ],
    Jackets: [
        new ClothingItems(
            "Denim", 
            denimJacket,
            "Jackets",
            text
        ),
            
        new ClothingItems(
            "Leather",
            leatherJacket,
            "Jackets",
            text
        ),
        new ClothingItems(
            "Wool",
            woolCoat,
            "Jackets",
            text
        ),
    ],

    Shoes: [
        new ClothingItems(
            "Jean", 
            "https://iheartcraftythings.com/wp-content/uploads/2021/06/dress-3.jpg",
            "Shoes",
            text
        ),
            
        new ClothingItems(
            "Leather",
            "https://iheartcraftythings.com/wp-content/uploads/2021/06/dress-3.jpg",
            "Shoes",
            text
        ),
        new ClothingItems(
            "Polyester",
            "https://iheartcraftythings.com/wp-content/uploads/2021/06/dress-3.jpg",
            "Shoes",
            text
        ),
    ]


}