const rainyDays =[10,20,14,13]

const totalRainyDays =rainyDays.reduce((total,currentValue)=>{
    return total+currentValue
})
// console.log(totalRainyDays)

const grades = [75, 83, 66, 43, 55, 99, 87, 16, 89, 64, 70, 80, 94, 77, 66, 73]


// console.log(grades.length)
/*
Challenge
1. Use the .reduce() method to find the total of all of the students grades.
2. Do some simple maths to log out the class average.
*/
let totalMarks =0
const average =grades.reduce( (total,currentValue)=>{
    return total+currentValue

})
console.log(average)
const averageMarks =average/grades.length
//
// console.log(`The class average is ${averageMarks}`)

const studentsArr = [
    {
        name: 'Mike',
        grade: 75
    },
    {
        name: 'Emma',
        grade: 83
    },
    {
        name: 'Seth',
        grade: 66
    }
]
// import { studentsArr } from '/studentsArr'

function calculateClassAverage(studentsArr) {
    const totalGrades = studentsArr.reduce((total, currentStudent)=>{
        return total + currentStudent.grade
    }, 0)
    return totalGrades / studentsArr.length
}

console.log(calculateClassAverage(studentsArr))