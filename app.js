var button = document.querySelector(".btn");
var textInput = document.querySelector("#inputArea");
var textOutput = document.querySelector(".outputArea");

var url = "https://api.funtranslations.com/translate/numbers.json";

function translatedUrl(text) {
  return url + "?" + "text=" + text;
}

function errorHandler(error) {
  console.log("Error Occurred: ", error);
}

function btnClickHandler() {
  var inputText = textInput.value;

  fetch(translatedUrl(inputText))
    .then((response) => response.json())
    .then((json) => {
      var translatedText = json.contents.translated;
      textOutput.innerText = translatedText;
    })
    .catch(errorHandler);
}

button.addEventListener("click", btnClickHandler);
