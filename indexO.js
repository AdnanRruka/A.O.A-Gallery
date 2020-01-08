let formButton = document.createElement("button");
formButton.innerHTML = "login Button";
formButton.setAttribute("style", "float:right");
h1.appendChild(formButton);
formButton.addEventListener("click", function() {
  let formPop = document.createElement("div");
  imgDiv.appendChild(formPop);
  formPop.setAttribute(
    "style",
    "width:400px;height:350px;background:white;transform:translate(50%,30px);position:fixed;border-radius:4px;"
  );
  let h1login = document.createElement("h1");
  h1login.setAttribute(
    "style",
    "color:black; font-size:20px;position:absolute;top:30px;left:160px"
  );
  h1login.innerHTML = "login";
  formPop.appendChild(h1login);
  let submitKnapp = document.createElement("button");
  submitKnapp.innerHTML = "submit";
  submitKnapp.setAttribute(
    "style",
    "transform:translate(150px,200px);border-radius:10px;"
  );
  formPop.appendChild(submitKnapp);
  let divForm = document.createElement("div");
  divForm.setAttribute("style", "transform:translate(60px,60px);");

  let userName = document.createElement("input");
  userName.setAttribute("placeholder", "Email");
  userName.setAttribute(
    "style",
    "margin-left:40px;text-align:center;border-radius:10px;"
  );
  let passWord = document.createElement("input");
  passWord.setAttribute("placeholder", "PassWord");
  passWord.setAttribute(
    "style",
    "margin:40px; text-align:center;border-radius:10px;"
  );

  divForm.appendChild(userName);
  divForm.appendChild(passWord);
  formPop.appendChild(divForm);

  let buttonRemove = document.createElement("button");
  buttonRemove.innerHTML = "X";
  buttonRemove.setAttribute(
    "style",
    "position:absolute;top:-90px;background:none;"
  );
  divForm.appendChild(buttonRemove);
  buttonRemove.addEventListener("click", function() {
    formPop.setAttribute("style", "visibility:hidden");
  });
});
