const companySalaries = [1000, 1500, 2000, 3000, 4000, 5000]
const initialValueInAccumulator = 0

const totalExpenses = companySalaries.reduce((accumulator, item) => accumulator + item, initialValueInAccumulator)

console.log(totalExpenses)