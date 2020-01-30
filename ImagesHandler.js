//Object with  an array and a function.The function pushes inputs value into the array
var ImagesHandler = {
    imagesArray: [],
    addImage: function (inputValue) {
        this.imagesArray.push(inputValue);
    }
};