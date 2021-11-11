// 1. 각 분기별로 매출 평균을 만든다.
// 2. 가장 매출이 좋았던 분기




const olArr = [
    [{ month: 1, total:  90}, { month: 2, total:  87}, { month: 3, total: 140}],
    [{ month: 4, total: 120}, { month: 5, total: 130}, { month: 6, total: 150}],
    [{ month: 7, total: 180}, { month: 8, total: 240}, { month: 9, total: 200}],
    [{ month:10, total: 180}, { month:11, total: 140}, { month:12, total: 190}]
]

// console.log(olArr[0][0].total)
// console.log(olArr.length)

const pArr = []

// console.log(olArr[0][0].total)
// console.log(olArr[0][1].total)
// console.log(olArr[0][2].total)

for (let i = 0; i < olArr.length; i++) {



    let sum = 0
    for (let j = 0; j < olArr[i].length; j++) {
    sum += olArr[i][j].total


    }
console.log(sum)
}