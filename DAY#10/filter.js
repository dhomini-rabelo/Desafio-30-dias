const numbers = []

for (let c = 1; c <= 1000; c++) {
    numbers.push(c)
}

const numbersDivisibleBy3 = numbers.filter((number) => number % 3 === 0)

console.log(numbersDivisibleBy3)