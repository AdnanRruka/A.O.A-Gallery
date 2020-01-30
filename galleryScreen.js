class galleryScreen {
    constructor() {
        this.initElement();
        this.initGalleryDiv();
    }
    //Creating base div where other dives appends in
    initElement() {
        this.element = document.createElement('div');
        document.body.appendChild(this.element);
    }
    //Creating,appending  and styling the Gallery Div
    initGalleryDiv() {
        //right side/Image div
        let galleryDiv = document.createElement('div');
        galleryDiv.setAttribute('id', 'imagesDiv');
        galleryDiv.setAttribute('style',
            "background-color:red;width:70%;height:55vw;float:right;color:white;font-size: 34px;"
        );
        this.element.appendChild(galleryDiv);
    }
    //Changes screen depending on what you click and removes the current page.
    removeMe() {
        document.body.removeChild(this.element);
    }
}