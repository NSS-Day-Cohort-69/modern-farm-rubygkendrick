
// define and export a function that returns and array with two identical objects , with three properties 

export const createCorn = () => {
    const cornArray = [
        {   
            type: "Corn",
            height: 180,
            output: 6,
        },
        {   
            type: "Corn",
            height: 180,
            output: 6,
        }

    ]

    return cornArray
}



const coinflip = () =>{
    const randomnumber = Math.random()
    
    if (randomnumber < 0.5){
        let result = "tails"
    }
    else {
        let result = "heads"
    }
    return result
}