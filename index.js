const characters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "~",
    "`",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "_",
    "-",
    "+",
    "=",
    "{",
    "[",
    "}",
    "]",
    ",",
    "|",
    ":",
    ";",
    "<",
    ">",
    ".",
    "?",
    "/",
];

function newPassword() {
    let passwordLength = parseInt(document.getElementById("length").value);
    let password = "";
    for (i = 0; i < passwordLength; i++) {
        let randomNum = Math.floor(Math.random() * characters.length);
        password += characters[randomNum];
    }
    return password;
}

const firstPassword = document.getElementById("first-password");
const secondPassword = document.getElementById("second-password");

function generatePassword() {
    firstPassword.textContent = newPassword();
    secondPassword.textContent = newPassword();
}

function copyPassword(event) {
    var passwordField = event.target.closest(".password-field");
    var passwordText = passwordField.querySelector(".password").innerText;
    navigator.clipboard
        .writeText(passwordText)
        .then(() => alert("Password copied to clipboard!"))
        .catch((err) => console.error("Error copying password: ", err));
}
