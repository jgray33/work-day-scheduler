
let timeNow =  moment().format("H")

// On load, check the time  ---------------------------------
checkTime();


// The time -------------------------------------------------
let reformatDate = moment().format("dddd, MMMM Do YYYY, h:mm:ss");
$("#currentDay").text(reformatDate);


// Row colours change depending on time ---------------------
// 8am
function checkTime() {
  if (timeNow == 8) {
    $("#eightRow").addClass("present");
  } else if (timeNow > 8) {
    $("#eightRow").addClass("past");
  } else if (timeNow < 8) {
    $("#eightRow").addClass("future");
  }
// 9am
  if (timeNow == 9) {
      $("#nineRow").addClass("present");
  } else if (timeNow > 9) {
      $("#nineRow").addClass("past")
  } else if (timeNow < 9) {
      $("#nineRow").addClass("future")
  }
// 10am
  if (timeNow == 10) {
    $("#tenRow").addClass("present");
} else if (timeNow > 10) {
    $("#tenRow").addClass("past")
} else if (timeNow < 10) {
    $("#tenRow").addClass("future")
}
//11am 
if (timeNow == 11) {
    $("#elevenRow").addClass("present");
} else if (timeNow > 11) {
    $("#elevenRow").addClass("past")
} else if (timeNow < 11) {
    $("#elevenRow").addClass("future")
}
// 12pm
if (timeNow == 12) {
    $("#twelveRow").addClass("present");
} else if (timeNow > 12) {
    $("#twelveRow").addClass("past")
} else if (timeNow < 12) {
    $("#twelveRow").addClass("future")
}
// 1pm
if (timeNow == 13) {
    $("#oneRow").addClass("present");
} else if (timeNow > 13) {
    $("#oneRow").addClass("past")
} else if (timeNow < 13) {
    $("#oneRow").addClass("future")
}
// 2pm
if (timeNow == 14) {
    $("#twoRow").addClass("present");
} else if (timeNow > 14) {
    $("#twoRow").addClass("past")
} else if (timeNow < 14) {
    $("#twoRow").addClass("future")
}
// 3pm
if (timeNow == 15) {
    $("#threeRow").addClass("present");
} else if (timeNow > 15) {
    $("#threeRow").addClass("past")
} else if (timeNow < 15) {
    $("#threeRow").addClass("future")
}
// 4pm
if (timeNow == 16) {
    $("#fourRow").addClass("present");
} else if (timeNow > 16) {
    $("#fourRow").addClass("past")
} else if (timeNow < 16) {
    $("#fourRow").addClass("future")
}
// 5pm
if (timeNow == 17) {
    $("#fiveRow").addClass("present");
} else if (timeNow > 17) {
    $("#fiveRow").addClass("past")
} else if (timeNow < 17) {
    $("#fiveRow").addClass("future")
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

