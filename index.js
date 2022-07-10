// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]

function superbowlWin(game){
const wonYear = game.find(game => game.result === "W")
return !! wonYear ? wonYear.year : undefined
}

console.log(superbowlWin(record))
