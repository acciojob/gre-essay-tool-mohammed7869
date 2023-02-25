//your code here
const textbox = document.getElementById("evaluatedText");
  const wordCountDisplay = document.getElementById("wordCount");

  textbox.addEventListener("input", function() {
    const wordCount = textbox.value.split(" ").length;
    wordCountDisplay.innerText = wordCount === 0 ? "0" : wordCount;
  });