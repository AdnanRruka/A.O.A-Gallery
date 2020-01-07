function func1() {
    imgContent.innerHTML = "new image";
}
li1.addEventListener('click', func1);


function func2() {
    imgContent.innerHTML = "image";
}
li2.addEventListener('click', func2);


function func3() {
    imgContent.innerHTML = "galleries";
}
li3.addEventListener('click', func3);

li1.style.listStyle = "none";
li2.style.listStyle = "none";
li3.style.listStyle = "none";


//display image from the image object that is saved from new image from submission

var metaData=document.createElement('title');
metaData.innerHTML="my website";
document.head.appendChild(metaData);






 //aDiv is inside imgDiv
 let aDiv = document.createElement('div');
 aDiv.setAttribute('style','width:50vw;height:50vw;');
 
 console.log(aDiv);

 //name input
let myInputName = document.createElement('input');
myInputName.setAttribute('placeholder', 'Paste meta name');
imgDiv.appendChild(myInputName);

//description Input
let myInputDesc = document.createElement('input');
myInputDesc.setAttribute('placeholder', 'Paste description here');
imgDiv.appendChild(myInputDesc);

//url input
let myInputURL = document.createElement('input');
myInputURL.setAttribute('placeholder', 'Paste url image here');
imgDiv.appendChild(myInputURL);


//Create Button 
let myButtonA = document.createElement('button');
myButtonA.innerText = "Add URL";
imgDiv.appendChild(myButtonA);

//Clear input after submitting
myButtonA.addEventListener('click', function () {
init();
});

function init(){
    saveURL();
    displayCard();
    //displayImg();
   // metaName();
    clearInput();
}

//Save url to object.
function saveURL(e) {
    let inputValue = myInputURL.value;
    imgObject.url = inputValue;

}

//Clear input function
function clearInput() {
    myInputURL.value = "";
    myInputName.value="";
    myInputDesc.value="";
}

let imgObject = {}
console.log(imgObject);



//function displayImg(){
    /*
    let pic = document.createElement('img');
    pic.setAttribute('src',imgObject.url);
    //pic.setAttribute('style','width:100px; height:100px;');
    imgDiv.appendChild(pic);
    console.log(pic);
    */
//}




function displayCard(){
    //test

    let pic = document.createElement('img');
    pic.setAttribute('src',imgObject.url);
    pic.setAttribute('style','width:100%;height:100%;cursor:pointer;')
    imgDiv.appendChild(pic);

    
    //test

    
    /*creating elements*/

    //container the whole card
    let container = document.createElement('div');
    container.setAttribute('id','card');
    document.body.appendChild(container);
    
    //the upper part of the container
    let containerB=document.createElement('button');
    containerB.innerHTML='x';
    containerB.setAttribute('style','background:none;')
    document.body.appendChild(containerB);
    container.appendChild(containerB);
    containerB.setAttribute('style','position:relative;bottom:15px;')

    let upper=document.createElement('div');
    upper.setAttribute('class','upperDiv');
    upper.setAttribute('style','height:50%');

    container.appendChild(upper);

    //the metaData information about the image
    let metaText = document.createElement('div');
    metaText.setAttribute('style','height:50%;overflow:hidden;')
    let metaP = document.createElement('p');
    metaP.setAttribute('style','color:black;')
    metaText.appendChild(metaP);
    container.appendChild(metaText);
    // work on this a bit!!!!!!!!!!!!!!!!!
    var newLine='\t'+'\n';
    metaP.innerHTML=myInputName.value+"<br />"+myInputDesc.value;

    //creating elements ends here

    /*styling the elements */
    container.setAttribute('style','width:250px;height:350px; background:beige;box-shadow:2px 3px 10px 5px black;');
    aDiv.appendChild(container)
    upper.appendChild(pic);
    aDiv.appendChild(container);
    imgDiv.appendChild(aDiv)
    aDiv.setAttribute('style','display:flex; flex-wrap:wrap; background:#4b5c68;')



    //creating elements
var modalBox=document.createElement('div');
var modalButton=document.createElement('button');

//display in the body
modalBox.appendChild(modalButton);
document.body.appendChild(modalBox);

//setting attributes
modalBox.setAttribute('id','form');
modalButton.setAttribute('class','myButtonA');
modalButton.innerHTML="x";

modalButton.setAttribute('style','background:none;color:white;visibility:hidden;')
//addEventListener
pic.addEventListener('click',function(){
    modalBox.setAttribute('style','background:white; width:60%; height:500px; position:fixed; top:50%;left:50%; transform:translate(-50%,-50%);border-radius:10px;overflow:hidden;');
    modalButton.setAttribute('style','background:none;color:white;background:black; cursor:pointer;')
    modalBox.appendChild(pic);
    pic.setAttribute('style','width:100%;height:100%;')
    
})

modalButton.addEventListener('click',function(){
    modalBox.setAttribute('style','visibility:hidden;opacity:0;');
    modalButton.setAttribute('style','visibility:hidden;opacity:0;');
    upper.appendChild(pic);
})
containerB.addEventListener('click',function(){
    
    container.setAttribute('style','visibility:hidden; opacity:0;');
})

    }

