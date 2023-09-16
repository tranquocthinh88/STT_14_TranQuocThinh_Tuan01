// Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
function calculateScore(score1, score2, score3) {
    let averageScore = (score1 + score2 + score3) / 3
    return averageScore
    console.log('The average score is ' + averageScore)
}

calculateScore(96, 108, 89)

let dolphinAverage = Math.round(calculateScore(96, 108, 89))
let koalaAverage = Math.round(calculateScore(88, 91, 110))
console.log(dolphinAverage, koalaAverage);

function checkWiner(dolphinAverage, koalaAverage) {
    if (dolphinAverage > koalaAverage && dolphinAverage > 100)
        console.log(`Dolphin's won! They have ${dolphinAverage} and koala's only have ${koalaAverage}`)
}
if (koalaAverage > dolphinAverage && koalaAverage > 100) {
    console.log(`Koala's won! They have ${koalaAverage} and dolphins only have ${dolphinAverage}.`)
} else {
    console.log("Looks like no one won, let's go again!")
}

// Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
function calculateScore1(score1, score2, score3) {
    let averageScore1 = (score1 + score2 + score3) / 3
    return averageScore1
    console.log('The average score is ' + averageScore1)
}

calculateScore1(97, 112, 101)

let dolphinAverage1 = Math.round(calculateScore1(97, 112, 101))
let koalaAverage1 = Math.round(calculateScore1(109, 95, 123))
console.log(dolphinAverage1, koalaAverage1);

function checkWiner1(dolphinAverage1, koalaAverage1) {
    if (dolphinAverage1 > koalaAverage1 && dolphinAverage1> 100)
        console.log(`Dolphin's won! They have ${dolphinAverage1} and koala's only have ${koalaAverage}`)
}
if (koalaAverage1 > dolphinAverage1 && koalaAverage1 > 100) {
    console.log(`Koala's won! They have ${koalaAverage1} and dolphins only have ${dolphinAverage1}.`)
} else {
    console.log("Looks like no one won, let's go again!")
}

// Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
function calculateScore2(score1, score2, score3) {
    let averageScore2 = (score1 + score2 + score3) / 3
    return averageScore2
    console.log('The average score is ' + averageScore2)
}

calculateScore2(97, 112, 101)

let dolphinAverage2 = Math.round(calculateScore2(97, 112, 101))
let koalaAverage2 = Math.round(calculateScore2(109, 95, 106))
console.log(dolphinAverage2, koalaAverage2);

function checkWiner2(dolphinAverage2, koalaAverage2) {
    if (dolphinAverage2 > koalaAverage2 && dolphinAverage2> 100)
        console.log(`Dolphin's won! They have ${dolphinAverage2} and koala's only have ${koalaAverage2}`)
}
if (koalaAverage2 > dolphinAverage2 && koalaAverage2 > 100) {
    console.log(`Koala's won! They have ${koalaAverage2} and dolphins only have ${dolphinAverage2}.`)
} else {
    console.log("Looks like no one won, let's go again!")
}