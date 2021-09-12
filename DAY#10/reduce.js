const companySalaries = [1000, 1500, 2000, 3000, 4000, 5000]

const totalExpenses = companySalaries.reduce((accumulator, item) => accumulator + item)

console.log(totalExpenses)