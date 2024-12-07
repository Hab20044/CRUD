var websiteName = document.getElementById("formGroupExampleInput");
var websiteUrl= document.getElementById('formGroupExampleInput2')
var websiteList = [];
var websiteNames = [];

if(localStorage.getItem("websiteArray")!=null){
  websiteList= JSON.parse(localStorage.getItem("websiteArray"))
  displayWebsite()
}


function addWebsite() {
  var websiteInfo = websiteName.value;
  var message = document.getElementById('mssg')
  if (websiteInfo) {
    websiteList.push(websiteInfo);
    localStorage.setItem("websiteArray",JSON.stringify(websiteList))
    console.log(websiteList);
    displayWebsite()
    websiteName.value=''
    websiteUrl.value=''
  } else {
    alert("Task Input Cannot be Empty!");
  }
  if (websiteNames.includes(websiteInfo)) {
    alert("Website name is already taken , please enter a adifferent one");
 
} else {
    websiteNames.push(websiteInfo); 
    message.textContent = `WebsiteName "${websiteInfo}" added successfully!`;
    message.style.color = 'green';
}
  
}

function displayWebsite() {
  var cartona = "";
  if (websiteList == 0) {
    document.getElementById("websiteInfo").innerHTML = `
        <tr>
        <td colspan="4" class="fw-bold">Task List is Empty!</td>
        </tr>`;
  } else {
    for (var i = 0; i < websiteList.length; i++) {
      cartona += `
                    <tr class="fw-normal">
                        <td>${i+1}</td>
                        <td>
                            <span>${websiteList[i]}</span>
                        </td>
                        <td>
                            <a style="cursor: pointer;" class="visit"><button class="btn btn-success" onclick='visitWebsite()'><i class="fa-solid fa-eye me-2"></i>visit</button></a>
                        </td>
                        <td>
                            <a style="cursor: pointer;" class="delete"><button class="btn btn-danger" onclick='deleteWebsite(${i})'><i class="fa-solid fa-trash-can me-2"></i>Delete</button></a>
                        </td>
                    </tr> `;
    }
    document.getElementById("websiteInfo").innerHTML =cartona;
  }
}




function deleteWebsite(index){
websiteList.splice(index, 1)
localStorage.setItem("websiteArray",JSON.stringify(websiteList))
displayWebsite()
}



function visitWebsite(){
  var websiteUrl= document.getElementById('formGroupExampleInput2').value
    window.location.href = websiteUrl;
  
}


function validateUsername(){
 var regexName=/^[A-Z][a-z]{1,10}$/
 var errorName = document.getElementById("nameError")
 

 if(regexName.test(websiteName.value)){
  errorName.classList.add("d-none")
  websiteName.classList.add("is-valid")
  websiteName.classList.remove("is-invalid")
 }
 else{
  
  errorName.classList.remove("d-none")
  websiteName.classList.remove("is-valid")
  websiteName.classList.add("is-invalid")
 }
}


function validateUrl(){
  var urlPattern = /^(https?:\/\/)?([\w\-]+\.)+[\w\-]+(\/[\w\-]*)*\/?$/;
  var urlName = document.getElementById("urlError")
  if (urlPattern.test(websiteUrl.value)) {
    urlName.classList.add("d-none")

    websiteUrl.classList.add("is-valid")
    websiteUrl.classList.remove("is-invalid")

  } else {
    urlName.classList.remove("d-none")

    websiteUrl.classList.remove("is-valid")
    websiteUrl.classList.add("is-invalid")

  }
}