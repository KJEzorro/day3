


const olArr = [
    {  month: 1, total:  90}, { month: 2, total:  87}, { month: 3, total: 140},
    {  month: 4, total: 120}, { month: 5, total: 130}, { month: 6, total: 150},
    {  month: 7, total: 180}, { month: 8, total: 240}, { month: 9, total: 200},
    {  month:10, total: 180}, { month:11, total: 140}, { month:12, total: 190}
]
for (let i = 0; i < 4; i++) {

    for (let j = 0; j < 4; j++) {
        let temArr
        temArr[i] = olArr[j].total
        console.log(temArr)
    }
}
// 가장 매출이 좋았던 분기
// 각 분기별로 매출 평균을 만든다.


// olArr[0][0].total
// olArr[0][1].total
// olArr[0][2].total
// olArr[0].length