let myImage = document.querySelector('img');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/firefox-icon.svg') {
        myImage.setAttribute('src', 'images/firefox2.svg');
    } else {
        myImage.setAttribute('src', 'images/firefox-icon.svg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mozilla is cool, ' + myName;
    }
    // let myName = prompt('あなたの名前を入力してください.');
    // localStorage.setItem('name', myName);
    // myHeading.textContent = 'Mozillaはすばらしいよ, ' + myName;
}

if (!localStorage.getItem('name') ) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function () {
    setUserName();
}