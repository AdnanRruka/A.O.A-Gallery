class Main {
    constructor() {
        this.headLine();
        this.sideBarFunc();
        this.navList();
        this.loginButton();
        this.loginFormFunc();

    }
    //Creating headline with name and styled.
    headLine() {
        //Gallery text/name

        this.headLineTextContainer = document.createElement('h1');
        this.headLineTextContainer.setAttribute('id', 'headLineTextContainer-text');
        this.headLineTextContainer.setAttribute('style',
            "background-color:#F7C325; text-align:center; margin:0px;"
        );
        this.headLineTextContainer.innerText = "Gallery  application 2000";
        document.body.appendChild(this.headLineTextContainer);
    }
    //Creating and appending login button
    loginButton() {
        this.button = document.createElement('button');
        this.button.innerHTML = "login";
        this.button.setAttribute('style', 'float:right;background:orange');
        this.headLineTextContainer.appendChild(this.button);
    }
    //Creating,appending and styling login form
    loginFormFunc() {
        this.button.addEventListener('click', function () {
            this.loginForm = document.createElement('div');
            this.loginForm.setAttribute('style', 'width:300px;height:300px;background-color:#d2d4d6;position:fixed;transform:translate(150%,50%)');
            this.UserPasswordDiv = document.createElement('div');
            this.UserPasswordDiv.setAttribute('style', 'margin:65px;')
            this.buttonModal = document.createElement('button');
            this.buttonModal.innerHTML = "submit";
            this.buttonModal.setAttribute('style', 'position:relative;left:40px;margin:10px;')
            this.user = document.createElement('input');
            this.user.setAttribute('placeholder', 'userName');
            this.user.setAttribute('style', '')

            this.passwordInput = document.createElement('input');
            this.passwordInput.setAttribute('placeholder', 'password');
            this.passwordInput.setAttribute('style', '')

            this.buttonX = document.createElement('button');
            this.buttonX.innerHTML = "X";
            this.loginForm.appendChild(this.buttonX)

            this.loginForm.appendChild(this.user);
            this.loginForm.appendChild(this.passwordInput);
            this.loginForm.appendChild(this.UserPasswordDiv);


            this.UserPasswordDiv.appendChild(this.user);
            this.UserPasswordDiv.appendChild(this.passwordInput);
            this.UserPasswordDiv.appendChild(this.buttonModal);

            document.body.appendChild(this.loginForm);

            this.buttonX.addEventListener('click', () => {
                document.body.removeChild(this.loginForm);
            })
        })

    }

    //Creating,appending,styling sideBar
    sideBarFunc() {
        this.sideBar = document.createElement('div');
        this.sideBar.setAttribute('id', 'sidebar');
        this.sideBar.setAttribute('style',
            "background-color:#E8833A;display:flex;flex-direction:column;width:30%;height:55vw;float:left;justify-content:center; align-items: center;color:white;font-size: 24px;font-weight:bold;"
        );
        document.body.appendChild(this.sideBar);
    }
    //Creating,appending, adding Event listener for sidebar nav
    navList() {
        //creating li's and adding them to  sideDiv
        var li1 = document.createElement('li');
        var li2 = document.createElement('li');
        li2.setAttribute('style', 'margin:20px 0 20px 0; ');
        var li3 = document.createElement('li');
        li1.innerText = "New Images";
        li2.innerText = "Images";
        li3.innerText = "Galleries";
        li1.style.listStyle = "none";
        li2.style.listStyle = "none";
        li3.style.listStyle = "none";
        this.sideBar.appendChild(li1);
        this.sideBar.appendChild(li2);
        this.sideBar.appendChild(li3);

        li1.addEventListener('click', () => {
            this.changeScreen('AddImage')
        });
        li2.addEventListener('click', () => {
            this.changeScreen('Images')
        });
        li3.addEventListener('click', () => {
            this.changeScreen('Gallery')
        });
    }
    //Changing screen when clicking and removing existing one.
    changeScreen(screenType) {
        if (this.activeScreen) {
            this.activeScreen.removeMe();
        }

        switch (screenType) {
            case 'AddImage':
                this.activeScreen = new AddImageScreen();
                break;

            case 'Images':
                this.activeScreen = new ImagesScreen();
                break;
            case 'Gallery':
                this.activeScreen = new galleryScreen();
                break;

            default:
                this.activeScreen = new ImagesScreen();
        }
    }
}
//Activating Main object when Content Loaded
document.addEventListener('DOMContentLoaded', function () {
    new Main();

})