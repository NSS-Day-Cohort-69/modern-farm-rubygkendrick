
import { createPlan } from "./plan.js"
const yearlyPlan = createPlan()

import { plantSeeds } from "./tractor.js"
const tractorPlanting = plantSeeds(yearlyPlan)

import { usePlants } from "./field.js"
const usePlantsCopy = usePlants()


import { harvestPlants } from "./harvester.js"
const harvesting = harvestPlants(usePlantsCopy)


import { catalog } from "./catalog.js"
const catalogForHtml = catalog(harvesting)


const parentHTMLElement = document.querySelector(".container")
parentHTMLElement.innerHTML = catalogForHtml


