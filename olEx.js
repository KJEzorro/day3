// 1. 각 분기별로 매출 평균을 만든다.
// 2. 가장 매출이 좋았던 분기




const olArr = [
    { month: 1, total:  90}, { month: 2, total:  87}, { month: 3, total: 140},
    { month: 4, total: 120}, { month: 5, total: 130}, { month: 6, total: 150},
    { month: 7, total: 180}, { month: 8, total: 240}, { month: 9, total: 200},
    { month:10, total: 180}, { month:11, total: 140}, { month:12, total: 190}
]


let tempArr = []
for (let i = 0; i < olArr.length; i++) {
    tempArr.push(olArr[i].total)
}

// temp1avg = (tempArr[0] + tempArr[1] + tempArr[2] / 3).toFixed()
// console.log(temp1avg)
//
// temp2avg = (tempArr[3] + tempArr[4] + tempArr[5] / 3).toFixed()
// console.log(temp1avg)
//
// temp3avg = (tempArr[6] + tempArr[7] + tempArr[8] / 3).toFixed()
// console.log(temp1avg)
//
// temp4avg = (tempArr[9] + tempArr[10] + tempArr[11] / 3).toFixed()
// console.log(temp1avg)

for (let i = 0; i < 3; i = i + 3) {

    let temp1avg = (tempArr[i] + tempArr[i+1] + tempArr[i+2] / 3).toFixed()

}
