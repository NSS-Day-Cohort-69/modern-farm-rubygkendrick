
// define and export a function that returns and array with two identical objects , with three properties 

export const createCorn = () => {
    const cornArray = [
        {   name: "corn1",
            type: "Corn",
            height: 180,
            output: 6,
        },
        {   name: "corn2",
            type: "Corn",
            height: 180,
            output: 6,
        }

    ]

    return cornArray
}