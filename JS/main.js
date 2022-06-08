let siteName = document.getElementById("siteName");
let siteUrl = document.getElementById("siteUrl");
let btnMain = document.getElementById("btnMain");
let btnDelete = document.getElementById("btnDelete");
let invalid = document.getElementById("invalid")


// -------------------------------------------------------------------------------------------------------------------
// GET VALUE FROM INPUT  AND SAFE
let webSiteList;
if (localStorage.getItem("mySite") != null) {
  webSiteList = JSON.parse(localStorage.getItem("mySite"));
  displaySite(webSiteList);
} else {
  webSiteList = [];
}


function webSite() {
  
  if (validateInput()) {
    let myWebSite = {
      name: siteName.value,
      url: siteUrl.value,
    };
    webSiteList.push(myWebSite);
    localStorage.setItem("mySite", JSON.stringify(webSiteList));
    displaySite(webSiteList);
    clearInput();
    console.log(webSiteList);
  } else {
    invalid.classList.replace("d-none", "d-block")
    validateInput()
  }
  
  
}

btnMain.addEventListener("click", webSite);

// -------------------------------------------------------------------------------------------------------------------
// DISPLAY DATA
function displaySite(list) {
  let cartona = "";
  for (let i = 0; i < list.length; i++) {
    cartona += `
      <div class="d-flex justify-content-around mb-4">
        <p class="text-white">${list[i].name}</p>
        <div>
          <button class="btn btn-info text-white" ><a href="${list[i].url}" class="text-decoration-none text-white" target="_blance">Visit</a></button>
          <button class="btn btn-danger text-white" id="btnDelete" onclick="deleteData(${i})">Delete</button>
        </div>
          </div>
      `;
  }
  document.getElementById("outputs").innerHTML = cartona;
}

// -------------------------------------------------------------------------------------------------------------------
// CLEAR INPUT
function clearInput() {
  siteName.value = "";
  siteUrl.value = "";
}

// -------------------------------------------------------------------------------------------------------------------
// DEALTE DATA
function deleteData(deleteIndex) {
  webSiteList.splice(deleteIndex, 1);
  localStorage.setItem("mySite", JSON.stringify(webSiteList));
  displaySite(webSiteList);
}

// -------------------------------------------------------------------------------------------------------------------
// VALIDATE INPUT
function validateInput() {
  let validateUrl = /^(https:\/\/www\.)\w{2,20}.com$/gmi
  if(validateUrl.test(siteUrl.value)) {
    console.log(true);
    return true;
  } else {
    console.log();
    return false;
  }
}



