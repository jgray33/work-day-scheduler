const eightBttn = document.getElementById("eightBttn")
// const eightInput = document.getElementById("#eightInput");
const eightRow = document.getElementById("eightRow")
const nineRow = document.getElementById("nineRow");
const tenRow = document.getElementById("tenRow");
const elevenRow = document.getElementById("elevenRow");
const twelveRow = document.getElementById("twelveRow");
const oneRow = document.getElementById("oneRow");
const twoRow = document.getElementById("twoRow");
const threeRow = document.getElementById("threeRow");
const fourRow = document.getElementById("fourRow");
const fiveRow = document.getElementById("fiveRow");
let timeNow = moment().format("H")
console.log(timeNow)


checkTime();






// The time -------------------------------------------------

let reformatDate = moment().format("dddd, MMMM Do YYYY, h:mm:ss");
console.log(moment());
$("#currentDay").text(reformatDate);


// Row colours change depending on time ---------------------
// 8am
function checkTime() {
  if (timeNow == 8) {
    eightRow.classList.add("present");
  } else if (timeNow > 8) {
    eightRow.classList.add("past");
  } else if (timeNow < 8) {
    eightRow.classList.add("future");
  }
// 9am
  if (timeNow == 9) {
      nineRow.classList.add("present");
  } else if (timeNow > 9) {
      nineRow.classList.add("past")
  } else if (timeNow < 9) {
      nineRow.classList.add("future")
  }
// 10am
  if (timeNow == 10) {
    tenRow.classList.add("present");
} else if (timeNow > 10) {
    tenRow.classList.add("past")
} else if (timeNow < 10) {
    tenRow.classList.add("future")
}
//11am 
if (timeNow == 11) {
    elevenRow.classList.add("present");
} else if (timeNow > 11) {
    elevenRow.classList.add("past")
} else if (timeNow < 11) {
    elevenRow.classList.add("future")
}
// 12pm
if (timeNow == 12) {
    twelveRow.classList.add("present");
} else if (timeNow > 12) {
    twelveRow.classList.add("past")
} else if (timeNow < 12) {
    twelveRow.classList.add("future")
}
// 1pm
if (timeNow == 13) {
    oneRow.classList.add("present");
} else if (timeNow > 13) {
    oneRow.classList.add("past")
} else if (timeNow < 13) {
    oneRow.classList.add("future")
}
// 2pm
if (timeNow == 14) {
    twoRow.classList.add("present");
} else if (timeNow > 14) {
    twoRow.classList.add("past")
} else if (timeNow < 14) {
    twoRow.classList.add("future")
}
// 3pm
if (timeNow == 15) {
    threeRow.classList.add("present");
} else if (timeNow > 15) {
    threeRow.classList.add("past")
} else if (timeNow < 15) {
    threeRow.classList.add("future")
}
// 4pm
if (timeNow == 16) {
    fourRow.classList.add("present");
} else if (timeNow > 16) {
    fourRow.classList.add("past")
} else if (timeNow < 16) {
    fourRow.classList.add("future")
}
// 5pm
if (timeNow == 17) {
    fiveRow.classList.add("present");
} else if (timeNow > 17) {
    fiveRow.classList.add("past")
} else if (timeNow < 17) {
    fiveRow.classList.add("future")
} }


// Storing in local storage ----------------------------------
let eightStore = () => {
        localStorage.setItem("eightInput", eightInput.value)
}

let nineStore = () => {
        localStorage.setItem("nineInput", nineInput.value)
}

let tenStore = () => {
    localStorage.setItem("tenInput", tenInput.value)
}

let elevenStore= () => {
    localStorage.setItem("evelenInput", elevenInput.value)
}

let twelveStore = () => {
    localStorage.setItem("twelveInput", twelveInput.value)
}

let oneStore = () => {
    localStorage.setItem("oneInput", oneInput.value)
}

let twoStore = () => {
    localStorage.setItem("twoStore", twoInput.value)
}

let threeStore = () => {
    localStorage.setItem("threeStore", threeInput.value)
}

let fourStore = () => {
    localStorage.setItem("fourStore", fourInput.value)
}

let fiveStore = () => {
    localStorage.setItem("fiveStore", fiveInput.value)
}


// Retrieving from local storage on ----------------------------
function eightTextLoad(){
    let eightload = localStorage.getItem("eightInput")
    document.getElementById("eightInput").value = eightload
}

let nineText = $("#nineInput")
console.log(nineText)

let nineTextLoad = () => {
    let nineLoad = localStorage.getItem("nineInput")
    nineText.value = nineLoad    
}


eightTextLoad();

