
import { createPlan } from "./plan.js"
const yearlyPlan = createPlan()


import { usePlants } from "./field.js"
const usePlantsCopy = usePlants()


import { plantSeeds } from "./tractor.js"
plantSeeds(yearlyPlan)


import { harvestPlants } from "./harvester.js"
const harvesting = harvestPlants(usePlantsCopy)


import { catalog } from "./catalog.js"
const catalogForHtml = catalog(harvesting)


const parentHTMLElement = document.querySelector(".container")
parentHTMLElement.innerHTML = catalogForHtml


