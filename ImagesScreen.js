class ImagesScreen {
    constructor() {
        this.initElement();
        this.initImageDiv();
        this.displayCard();


    }
    //Creating base div where other dives appends in
    initElement() {
        this.element = document.createElement('div');
        document.body.appendChild(this.element);
    }
    // creating and appending a new page that shows added images.
    initImageDiv() {
        //right side/Image div
        this.imagesDiv = document.createElement('div');

        this.imagesDiv.setAttribute('style',
            "background-color:blue;width:70%;height:55vw;float:right;color:white;font-size: 34px; display:flex; flex-wrap:wrap;"
        );
        this.element.appendChild(this.imagesDiv);
    }
    //Looping through and appending input value from array to  pic img.
    //Styling img element 
    displayCard() {
        var images = ImagesHandler.imagesArray;
        for (let i = 0; i < images.length; i++) {

            var images = ImagesHandler.imagesArray;
            for (let i = 0; i < images.length; i++) {
                console.log(images);
                let pic = document.createElement('img');
                pic.setAttribute('src', images[i].url);
                pic.setAttribute('style', 'width:100%;height:100%;cursor:pointer;');




                //Container of the whole card
                let container = document.createElement('div');
                container.setAttribute('id', 'card');
                this.imagesDiv.appendChild(container);


                //The upper part of the card-container which the picture appends in
                let upper = document.createElement('div');
                upper.setAttribute('class', 'upperDiv');
                upper.setAttribute('style', 'height:70%');
                container.appendChild(upper);

                //The lower part of the card-container which contains the inputs value
                let metaTextDiv = document.createElement('div');
                metaTextDiv.setAttribute('style', 'height:50%;overflow:hidden;')
                let metaParagraph = document.createElement('p');
                metaParagraph.setAttribute('style', 'color:black;')
                metaTextDiv.appendChild(metaParagraph);
                container.appendChild(metaTextDiv);

                //Creating a button which will delete the card later on
                let containerX = document.createElement('button');
                containerX.innerHTML = "x";
                containerX.setAttribute('style', 'background:white;position:relative;top:-15px;left:220px;')
                console.log(containerX)
                upper.appendChild(containerX);

                metaParagraph.innerHTML = images[i].name + "<br />" + images[i].desc;
                container.setAttribute('style', 'margin-top:10px; width:250px;height:350px; background:beige;box-shadow:2px 3px 10px 5px black;');
                this.imagesDiv.appendChild(container)
                upper.appendChild(pic);
                this.imagesDiv.appendChild(container);

                var modalBox = document.createElement('div');
                var modalButton = document.createElement('button');


                //Display in the body
                modalBox.appendChild(modalButton);
                document.body.appendChild(modalBox);


                //Setting attributes
                //modal
                modalBox.setAttribute('id', 'form');
                modalButton.setAttribute('class', 'myButtonA');
                modalButton.innerHTML = "x";

                //Setting attributes
                modalButton.setAttribute('style', 'background:none;color:white;display:none');
                addEventListener

                //Zooms in the pic after clicking it 
                pic.addEventListener('click', () => {
                    modalBox.setAttribute('style', 'background:white; width:60%; height:500px; position:fixed; top:50%;left:50%; transform:translate(-50%,-50%);border-radius:10px;overflow:hidden;');
                    modalButton.setAttribute('style', 'background:none;color:black;background:white; cursor:pointer;')
                    modalBox.appendChild(pic);
                    pic.setAttribute('style', 'width:100%;height:100%;')

                })

                //Will delete the modalButton which zooms in the picture after clicking it
                modalButton.addEventListener('click', () => {
                    modalBox.setAttribute('style', 'display:none;');
                    modalButton.setAttribute('style', 'display:none;');
                    upper.appendChild(pic);
                })
                //The x button that appears in the top of the card-container. deletes it after clicking it 
                containerX.addEventListener('click', () => {
                    container.setAttribute('style', 'display:none;')
                    containerX.setAttribute('style', 'display:none;')
                })
            }
        }
    }
    //Changes screen depending on what you click and removes the current page.
    removeMe() {
        document.body.removeChild(this.element);
    }
}