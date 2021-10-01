const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNumbers = numbers.map((number) => number * number)

// map functions can receive index and array -> (item, index, array)


console.log(`O quadrado dos números de 1 a 10: ${newNumbers}`)