import products from "../data";

const reduceProduct = products.reduce((accumulator, cost) => {
    return cost.price + accumulator;
}, 0)

const CalcCosts = () => {
    return(
        <h1>Total cost of all Products: ${reduceProduct}</h1>
    )
}

export default CalcCosts;

