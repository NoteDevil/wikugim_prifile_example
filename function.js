$("#fullpage").fullpage({
  sectionSelector: ".vertical-scrolling",
  navigation: true,
  slidesNavigation: true,
  controlArrows: false,
  anchors: ["firstSection", "secondSection", "thirdSection", "contactSection"],
  menu: "#menu",
});

const words = [
  "garry's mod developer",
  "fullstack developer",
  "a master of his trade",
  "Black Lives Matter",
];
let i = 0;
let counter;
function typeText() {
  const textElement = document.getElementById("text");
  const currentWord = words[i].split("");

  const typeLetter = () => {
    if (currentWord.length > 0) {
      textElement.innerHTML += currentWord.shift();
    } else {
      deleteNow();
      return;
    }
    setTimeout(typeLetter, 100);
  };

  typeLetter();
}
function typeNow() {
  let word = words[i].split("");
  var loopTyping = function () {
    if (word.length > 0) {
      document.getElementById("text").innerHTML += word.shift();
    } else {
      deleteNow();
      return false;
    }
    counter = setTimeout(loopTyping, 100);
  };
  loopTyping();
}
function deleteNow() {
  let word = words[i].split("");
  var loopDeleting = function () {
    if (word.length > 0) {
      word.pop();
      document.getElementById("text").innerHTML = word.join("");
    } else {
      if (words.length > i + 1) {
        i++;
      } else {
        i = 0;
      }
      typeNow();
      return false;
    }
    counter = setTimeout(loopDeleting, 200);
  };
  loopDeleting();
}
typeNow();

function setClipboard(value) {
  var tempInput = document.createElement("input");
  tempInput.style = "position: absolute; left: -1000px; top: -1000px";
  tempInput.value = value;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);

  var notification = document.createElement("div");
  notification.style =
    "position: fixed; top: 50px; right: 50px; background-color: #4CAF50; color: white; padding: 16px; border-radius: 5px; font-size: 18px;";
  notification.innerText = "Text copied to clipboard";
  document.body.appendChild(notification);
  setTimeout(function () {
    document.body.removeChild(notification);
  }, 3000);
}
