/*In this module, define and export a harvestPlants function.
The harvestPlants function must accept the plants array as input.
The function will return an array of seed objects.
Iterate the array of growing plants. On each plant, get the value of the output property.
 */



export const harvestPlants = (plantsArray) => {
    const seedObjectsArray = []
    for ( const plant of plantsArray) {
        
        const printItThisManyTimes = plant.output
        if (plant.type !== "Corn") {
            for (let i = 0; i < printItThisManyTimes; i++) {
                seedObjectsArray.push(plant)
            }
        } else {
            for (let i = 0; i < (printItThisManyTimes / 2); i++) {
                seedObjectsArray.push(plant)
            }
        }
    }
    return seedObjectsArray
}

//for each plant , print that plant equal to the value of the output 
