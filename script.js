var textToCopy = document.getElementById("textToCopy");
var text = "";
var generator = document.getElementById("generator");
var success = document.getElementById("success");
var fail = document.getElementById("fail");
function generateRandomPassword() {
  const pickAnyTen = [
    "a",
    "A",
    "b",
    "B",
    "c",
    "C",
    "d",
    "D",
    "e",
    "E",
    "f",
    "F",
    "g",
    "G",
    "h",
    "H",
    "@",
    "i",
    "I",
    "j",
    "J",
    "#",
    "k",
    "K",
    "l",
    "&",
    "$",
    "L",
    "m",
    "M",
    1,
    2,
    3,
    8,
    9,
    0,
    "n",
    "N",
    "o",
    "O",
    "p",
    "P",
    "q",
    "Q",
    "r",
    "R",
    "s",
    "S",
    "t",
    "T",
    "u",
    "U",
    "v",
    "V",
    "w",
    "W",
    4,
    5,
    6,
    7,
    "x",
    "X",
    "y",
    "Y",
    "z",
    "Z",
  ];

  var password = "";
  for (let index = 0; index < 10; index++) {
    let i = Math.floor(Math.random() * pickAnyTen.length);
    password += pickAnyTen[i];
  }
  textToCopy.innerHTML = password;

  text = password;
}
const copyContent = async () => {
  try {
    await navigator.clipboard.writeText(text);
    success.style.opacity = 1;
    setTimeout(() => {
      success.style.opacity = 0;
    }, 1000);
  } catch (err) {
    fail.style.opacity = 1;
    setTimeout(() => {
      fail.style.opacity = 0;
    }, 1000);
  }
};
