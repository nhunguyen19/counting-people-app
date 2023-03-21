let countElement = document.getElementById("count-el")

// initialize the count as 0
// listen on click events
// increment the count
// change count-el element on html 
let count = 0
let finalCount = 0

function increment(){
    count += 1
    countElement.innerText = count
    console.log(countElement)
}

function save(){
    finalCount += countElement
    console.log(finalCount)
}

function reset(){
    count = 0
    finalCount = 0
    countElement.innerText = count
    console.log(countElement)
    console.log(finalCount)
}
