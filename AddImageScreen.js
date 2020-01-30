class AddImageScreen {
    constructor() {
        this.initElement();
        this.initNewImagePage();
        this.allInputs();
        this.fileInput();
    }
    //Creating base div where other dives append in
    initElement() {
        this.element = document.createElement('div');
        document.body.appendChild(this.element);
    }

    // creating and appending a new page that takes in inputs and file-inputs
    initNewImagePage() {
        this.imgDiv = document.createElement('div');
        this.imgDiv.setAttribute('style',
            " background-color:#4B5C6B; width:70%; height:55vw; float:right; color:white; font-size:34px;"
        );

        var imgContent = document.createElement('div');
        imgContent.setAttribute('style', 'margin: 20px 0 0 30px ');
        imgContent.innerText = 'New Images'
        this.imgDiv.appendChild(imgContent);
        this.element.appendChild(this.imgDiv);
    }
    //Creating and appending file input for local pictures .
    fileInput() {
        //Create file input and show image.
        let fileInput = document.createElement('input');
        fileInput.setAttribute('type', 'file');
        this.imgDiv.appendChild(fileInput);
        fileInput.addEventListener('change', function () {
            const file = this.files[0];
            if (file) {
                const reader = new FileReader();
                let previewImage = document.createElement('img');
                this.imgDiv.appendChild(previewImage);
                previewImage.setAttribute('style', 'width: 400px; hight: 300px;')
                reader.addEventListener('load', function () {
                    previewImage.setAttribute('src', this.result);
                });
                reader.readAsDataURL(file);
            }
        })
    }

    allInputs() {
        //Picture Name input
        this.NameInput = document.createElement('input');
        this.NameInput.setAttribute('placeholder', 'Paste meta name');
        this.imgDiv.appendChild(this.NameInput);


        //Description input
        this.DescriptionInput = document.createElement('input');
        this.DescriptionInput.setAttribute('placeholder', 'Paste description here');
        this.imgDiv.appendChild(this.DescriptionInput);


        //Url input
        this.URLInput = document.createElement('input');
        this.URLInput.setAttribute('placeholder', 'Paste url image here');
        this.imgDiv.appendChild(this.URLInput);

        //Create Add Url Button
        let AddUrlButton = document.createElement('button');
        AddUrlButton.innerText = "Add URL";
        this.imgDiv.appendChild(AddUrlButton);

        //Clear input after submitting
        AddUrlButton.addEventListener('click', this.saveForm);
    }
    // Save url to object.

    //After clicking the button, the inputs fields clears all inputs and saves it an array. 
    //Triggers saveURl and clear-input function
    saveForm = () => {
        if (this.URLInput.value === "" || this.NameInput.value === "" || this.DescriptionInput.value === "") {
            alert('Fyll på alla fälten');
            return false;
        }

        this.saveURL();
        this.clearInput();

    }
    //Saves inputes value in Object 
    saveURL(e) {
        let imagesObj = {
            name: this.NameInput.value,
            url: this.URLInput.value,
            desc: this.DescriptionInput.value
        }

        //its an object that contains an array that pushes values depending on what the inputs is 
        ImagesHandler.addImage(imagesObj);


    }



    //Clear input 
    clearInput() {
        this.URLInput.value = "";
        this.NameInput.value = "";
        this.DescriptionInput.value = "";
    }




    //Changes screen depending on what you click and removes the the current page 
    removeMe() {
        document.body.removeChild(this.element);
    }
}