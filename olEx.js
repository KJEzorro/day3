// 1. 각 분기별로 매출 평균을 만든다.
// 2. 가장 매출이 좋았던 분기


const parr = []

const olArr = [
    [{ month: 1, total:  90}, { month: 2, total:  87}, { month: 3, total: 140}],
    [{ month: 4, total: 120}, { month: 5, total: 130}, { month: 6, total: 150}],
    [{ month: 7, total: 180}, { month: 8, total: 240}, { month: 9, total: 200}],
    [{ month:10, total: 180}, { month:11, total: 140}, { month:12, total: 190}]
]



// 분기별 총합
for (let i = 0; i < olArr.length; i++) {
    const temArr = olArr[i]

    let sum = 0
    for (let j = 0; j < temArr.length; j++) {
        sum += temArr[j].total

    }
    console.log(`분기별 총합:${sum}`)
    const tempAvg = (sum/temArr.length).toFixed(2)
    parr.push(parseInt(tempAvg))
}

console.log("----------------")

// 분기별 평균
for (let i = 0; i < parr.length; i++) {
    console.log(`분기별 평균: ${parr[i]}`)

}