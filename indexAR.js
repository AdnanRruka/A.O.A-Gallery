//Gallery text/name
var h1 = document.createElement('h1');
h1.setAttribute('id', 'h1-text');
h1.setAttribute('style',
    "background-color:#F7C325; text-align:center; margin:0px;"
);
h1.innerText = "Gallery  application 2000";
document.body.appendChild(h1);

//Sidebar
var sideBar = document.createElement('div');
sideBar.setAttribute('id', 'sidebar');
sideBar.setAttribute('style',
    "background-color:#E8833A;display:flex;flex-direction:column;width:30%;height:55vw;float:left;justify-content:center; align-items: center;color:white;font-size: 24px;font-weight:bold;"
);
document.body.appendChild(sideBar);

//right side/Image div
var imgDiv = document.createElement('div');
imgDiv.setAttribute('id', 'imgDiv');
imgDiv.setAttribute('style',
    "background-color:#4B5C6B;width:70%;height:55vw;float:right;color:white;font-size: 34px;"
);

var imgContent = document.createElement('div');
imgContent.setAttribute('style', 'margin: 20px 0 0 30px ');
imgContent.innerText = 'Images'
imgDiv.appendChild(imgContent);
document.body.appendChild(imgDiv);

//creating li's and adding them to  sideDiv
var li1 = document.createElement('li');
var li2 = document.createElement('li');
li2.setAttribute('style', 'margin:20px 0 20px 0');
var li3 = document.createElement('li');
li1.innerText = "New Images";
li2.innerText = "Images";
li3.innerText = "Galleries";

sideBar.appendChild(li1);
sideBar.appendChild(li2);
sideBar.appendChild(li3);