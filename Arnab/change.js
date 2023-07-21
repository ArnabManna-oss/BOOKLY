var texts = ["Hello!", "नमस्ते ", "你好 ", "வணக்கம்", "Bonjour", "こんにちは", "Привет","নমস্কার"];
var currentIndex = 0;

function changeText() {
  var heading = document.getElementById("changable");
  heading.textContent = texts[currentIndex];
  currentIndex = (currentIndex + 1) % texts.length;
}

setInterval(changeText, 750);




