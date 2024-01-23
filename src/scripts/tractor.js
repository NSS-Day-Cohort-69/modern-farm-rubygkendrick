import { createAsparagus } from "./seeds/asparagus.js"
const asparagusSeed = createAsparagus()

import { createSoybean } from "./seeds/soybean.js"
const soybeanSeed = createSoybean()

import { createSunflower } from "./seeds/sunflower.js"
const sunflowerSeed = createSunflower()

import { createWheat } from "./seeds/wheat.js"
const wheatSeed = createWheat()

import { createPotato } from "./seeds/potato.js"
const potatoSeed = createPotato()

import { createCorn } from "./seeds/corn.js"
const cornSeeds = createCorn()

import { addPlant } from "./field.js"







/* n this module, define and export a plantSeeds function.
The function must accept the year's planting plan as input (i.e. it must define a parameter).
The plan is an array. It contains 3 arrays representing the rows in the field to be plants. 
Figure out how to iterate both the parent array and the child arrays.

iterating the yearly plan array to single out each array

iterating through the yearly plan array to single out the objects in each of its arrays 





*/

/*// Example growing plan. Actual plan is bigger.
[
    ["Potato", "Soybean", "Soybean", "Corn"],
    ["Wheat", "Corn", "Wheat", "Asparagus"],
    ["Asparagus", "Wheat", "Soybean", "Corn"],
    ["Asparagus", "Soybean", "Potato", "Wheat"]
] */

export const plantSeeds = (yearlyPlan) => {

    for (const row of yearlyPlan) {
        for (const plant of row) {
            if (plant.includes("Asparagus")) {
                addPlant(asparagusSeed)
            }
            if (plant.includes("Sunflower")) {
                addPlant(sunflowerSeed)
            }
            if (plant.includes("Soybean")) {
                addPlant(soybeanSeed)
            }
            if (plant.includes("Wheat")) {
                addPlant(wheatSeed)
            }
            if (plant.includes("Potato")) {
                addPlant(potatoSeed)
            }
            if (plant.includes("Corn")) {
                addPlant(cornSeeds)
            }
        }
    }
}






/* As you iterate the row of food types to be planted, invoke the corresponding factory function
 (e.g. if the food type is "Asparagus", invoke the createAsparagus function to get an asparagus seed).
Take that seed and add it to the array of plants in the field module.
 */

