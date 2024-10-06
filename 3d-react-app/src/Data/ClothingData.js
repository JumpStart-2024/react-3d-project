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
            "Leather is a natural, renewable material that can last for generations with proper care. For a more sustainable choice, consider buying vintage or certified recycled leather."
            
        ),
            
        new ClothingItems(
            "Linen",
            creamLinenPants,
            "Pants",
            "Buying 100% linen includes important considerations. Linen wrinkles easily and needs washing and care consideration. However, linen  is one of the most effective fabrics at  keeping you cool on hot days."
        ),
        new ClothingItems(
            "Jeans",
            jeans,
            "Pants",
            "For a sustainable purchase, choose jeans made from natural fibers, produced with water-efficient methods, and from brands supporting ethical practices. Prioritize brands with recycling or take-back programs to reduce waste."
        ),

    ],
    Dresses: [
        new ClothingItems(
            "Sequence", 
            sequenceDress,
            "Dresses",
            "Sequins go green! BioSequins represent a step toward sustainable fashion, featuring in innovative garments. Radiant Matter is developing non-toxic, biodegradable, low-carbon materials for the circular economy, free from plastics, metals, and pigments."
        ),
            
        new ClothingItems(
            "Linen",
            linenDress,
            "Dresses",
            "Linen dresses are made from flax, a sustainable crop requiring fewer resources and less water than cotton. With a low carbon footprint, flax helps reduce greenhouse gas emissions. Linen is also biodegradable, breaking down in years rather than centuries."
        ),
        new ClothingItems(
            "Silk",
            blueSilkDress,
            "Dresses",
            "Silk has both positive and negative environmental impacts. Positively, it's a renewable, biodegradable fiber that uses less energy, water, and chemicals than many others. However, silk production can still have negative effects, like the resources needed for silkworm farming."
        ),
    ],
    Jackets: [
        new ClothingItems(
            "Denim", 
            denimJacket,
            "Jackets",
            "Denim can be 100% cotton or blended with degrees of spandex to give it more stretch. When blended, you can get a closer fit and move more easily in your coat. Choose a denim coat in a color, fit, and style that has a classic rather than trendy style and fit."
        ),
            
        new ClothingItems(
            "Leather",
            leatherJacket,
            "Jackets",
            "Your high-quality leather should feel soft and flexible, and have a relative thickness that speaks to its long lasting durability. Sustainable practices for sourcing leather from small farms include prioritizing animal welfare and biodiversity."
        ),
        new ClothingItems(
            "Wool",
            woolCoat,
            "Jackets",
            "There are two types of wool, woolen and worsted. Woolen wool is made from shorter fibers and will feel more scratchy, but will provide more warmth than a worsted wool coat. Worsted wool will probably have more drape, style, and fit."
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