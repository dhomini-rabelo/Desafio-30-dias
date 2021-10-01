let schoolData = {
    'João': [10, 8.5, 7],
    'Ana': [7.5, 5, 6],
    'Alberto': [9, 8.5, 3],
    'Vitória': [4, 8, 9],
}

for (student of Object.keys(schoolData)){
    schoolData[student] = (schoolData[student].reduce((accumulator, note) => accumulator + note)/3).toFixed(2)
}

let approved = Object.keys(schoolData).filter((student) => schoolData[student] >= 7)

let disapproved = Object.keys(schoolData).filter((student) => schoolData[student] < 7)


let reportOfApproved = approved.map((student) => ` ${student} com média ${schoolData[student]}`)

let reportOfDisapproved = disapproved.map((student) => ` ${student} com média ${schoolData[student]}`)

console.log(`Aprovados:${reportOfApproved}`)
console.log(`Reprovados:${reportOfDisapproved}`)