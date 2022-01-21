// Elements -----------------------------------------------------
const eightInput = document.getElementById("eightInput")
const nineInput = document.getElementById("nineInput")
const tenInput = document.getElementById("tenInput")
const elevenInput = document.getElementById("elevenInput")
const twelveInput = document.getElementById("twelveInput")
const oneInput = document.getElementById("oneInput")
const twoInput = document.getElementById("twoInput")
const threeInput = document.getElementById("threeInput")
const fourInput = document.getElementById("fourInput")
const fiveInput = document.getElementById("fiveInput")
let timeNow =  moment().format("H");

// On load, check the time and load all the saved text---------------
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
    $("#nineRow").addClass("past");
  } else if (timeNow < 9) {
    $("#nineRow").addClass("future");
  }
  // 10am
  if (timeNow == 10) {
    $("#tenRow").addClass("present");
  } else if (timeNow > 10) {
    $("#tenRow").addClass("past");
  } else if (timeNow < 10) {
    $("#tenRow").addClass("future");
  }
  //11am
  if (timeNow == 11) {
    $("#elevenRow").addClass("present");
  } else if (timeNow > 11) {
    $("#elevenRow").addClass("past");
  } else if (timeNow < 11) {
    $("#elevenRow").addClass("future");
  }
  // 12pm
  if (timeNow == 12) {
    $("#twelveRow").addClass("present");
  } else if (timeNow > 12) {
    $("#twelveRow").addClass("past");
  } else if (timeNow < 12) {
    $("#twelveRow").addClass("future");
  }
  // 1pm
  if (timeNow == 13) {
    $("#oneRow").addClass("present");
  } else if (timeNow > 13) {
    $("#oneRow").addClass("past");
  } else if (timeNow < 13) {
    $("#oneRow").addClass("future");
  }
  // 2pm
  if (timeNow == 14) {
    $("#twoRow").addClass("present");
  } else if (timeNow > 14) {
    $("#twoRow").addClass("past");
  } else if (timeNow < 14) {
    $("#twoRow").addClass("future");
  }
  // 3pm
  if (timeNow == 15) {
    $("#threeRow").addClass("present");
  } else if (timeNow > 15) {
    $("#threeRow").addClass("past");
  } else if (timeNow < 15) {
    $("#threeRow").addClass("future");
  }
  // 4pm
  if (timeNow == 16) {
    $("#fourRow").addClass("present");
  } else if (timeNow > 16) {
    $("#fourRow").addClass("past");
  } else if (timeNow < 16) {
    $("#fourRow").addClass("future");
  }
  // 5pm
  if (timeNow == 17) {
    $("#fiveRow").addClass("present");
  } else if (timeNow > 17) {
    $("#fiveRow").addClass("past");
  } else if (timeNow < 17) {
    $("#fiveRow").addClass("future");
  }
}

// Storing in local storage ----------------------------------
let eightStore = () => {
  localStorage.setItem("eightStore", eightInput.value);
};

let nineStore = () => {
  localStorage.setItem("nineStore", nineInput.value);
};

let tenStore = () => {
  localStorage.setItem("tenStore", tenInput.value);
};

let elevenStore = () => {
  localStorage.setItem("elevenStore", elevenInput.value);
};

let twelveStore = () => {
  localStorage.setItem("twelveStore", twelveInput.value);
};

let oneStore = () => {
  localStorage.setItem("oneStore", oneInput.value);
};

let twoStore = () => {
  localStorage.setItem("twoStore", twoInput.value);
};

let threeStore = () => {
  localStorage.setItem("threeStore", threeInput.value);
};

let fourStore = () => {
  localStorage.setItem("fourStore", fourInput.value);
};

let fiveStore = () => {
  localStorage.setItem("fiveStore", fiveInput.value);
};

// Retrieve from local storage  ----------------------------
let eightTextLoad = () => {
  let eightload = localStorage.getItem("eightStore");
  eightInput.value = eightload;
}

let nineTextLoad = () => {
  let nineLoad = localStorage.getItem("nineStore");
  nineInput.value = nineLoad
}

let tenTextLoad = () => {
    let tenLoad = localStorage.getItem("tenStore");
    tenInput.value = tenLoad
}

let elevenTextLoad = () => {
    let elevenLoad = localStorage.getItem("elevenStore")
    elevenInput.value = elevenLoad
}

let twelveTextLoad = () => {
    let twelveLoad = localStorage.getItem("twelveStore");
    twelveInput.value = twelveLoad
}

let oneTextLoad = () => {
    let oneLoad = localStorage.getItem("oneStore")
    oneInput.value = oneLoad
}

let twoTextLoad = () => {
    let twoLoad = localStorage.getItem("twoStore")
    twoInput.value = twoLoad
}

let threeTextLoad = () => {
    let threeLoad = localStorage.getItem("threeStore")
    threeInput.value = threeLoad;
}

let fourTextLoad = () => {
    let fourLoad = localStorage.getItem("fourStore")
    fourInput.value = fourLoad;
}

let fiveTextLoad = () => {
    let fiveLoad = localStorage.getItem("fiveStore")
    fiveInput.value = fiveLoad;
}

eightTextLoad();
nineTextLoad();
tenTextLoad();
elevenTextLoad();
twelveTextLoad();
oneTextLoad();
twoTextLoad();
threeTextLoad();
fourTextLoad();
fiveTextLoad();

