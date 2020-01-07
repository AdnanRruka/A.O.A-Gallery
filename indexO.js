//Create Input
let myInput = document.createElement("input");
myInput.setAttribute("placeholder", "Paste url image here");
imgDiv.appendChild(myInput);

//Create Button
let myButton = document.createElement("button");
myButton.innerText = "Add URL";

imgDiv.appendChild(myButton);

let nameInput = document.createElement("input");
nameInput.setAttribute("placeholder", "image name");
imgDiv.appendChild(nameInput);

let descInput = document.createElement("input");
descInput.setAttribute("placeholder", "image description");
imgDiv.appendChild(descInput);

//Clear input after submitting
myButton.addEventListener("click", function() {
  saveURL();
  displayImg();
  //removeImg();
  clearInput();
  imgDescription();
  imgName();
  console.log(imgObject);
});

//Save url to object.
function saveURL(e) {
  let inputValue = myInput.value;
  imgObject.url = inputValue;
}

function imgDescription() {
  imgObject.description = descInput.value;
}

function imgName() {
  imgObject.name = nameInput.value;
}

//Clear input function
function clearInput() {
  myInput.value = "";
}

let imgObject = {};
let pic;

function displayImg() {
  if (myInput.value === "") {
    alert("Paste url link first!");
    return false;
  }
  pic = document.createElement("img");
  pic.setAttribute("src", imgObject.url);
  imgDiv.appendChild(pic);
}

let button = document.createElement("button");
h1.appendChild(button);
button.setAttribute("style", "float:right;");
button.innerText = " Button";
h1.appendChild(button);

/*let button = document.createElement("button");
button.innerHTML = "button";
document.body.appendChild(button);*/

button.addEventListener("click", createForm);
function createForm() {
  let loginDiv = document.createElement("div");

  loginDiv.setAttribute(
    "style",
    "width:300px;height:300px;background-color:lightgrey;margin:auto;"
  );

  let input = document.createElement("input");
  input.setAttribute("placeholder", "email");

  let input2 = document.createElement("input");
  input2.setAttribute("placeholder", "password");

  let loginBtn = document.createElement("button");
  loginBtn.innerText = "button";

  imgDiv.appendChild(loginDiv);
  loginDiv.appendChild(input);
  loginDiv.appendChild(input2);
  loginDiv.appendChild(loginBtn);
  preventFromClicking();
}

function preventFromClicking() {
  button.removeEventListener("click", createForm);
}
