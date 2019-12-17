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